// From EyesEyes !!!! :) !!!!
// Immediately Invoked Function Expression to prevent polluting the global namespace
(() => {
	// --- CONFIGURATION ---
	const BACKSTAB_CONFIG = {
		modId: "exsanguination", // Keep this as "kubejs"
		traitId: "backstab_damage_bonus",
		angle: 50, // Degrees (Higher = easier to backstab); Spartan Weaponry is hard coded at 30 degrees
		damageMultiplier: 1.5, // +100% Bonus Damage

		enableParticles: true,
		enableSound: true,
		soundEveryoneHear: false, // If false, only the attacker hears the sound
		particleEveryoneSee: false, // If false, only attacker sees flash
		offsetDist: 0.15, // Distance in blocks behind head to spawn particle

		sound: "minecraft:entity.arrow.hit_player",
		soundPitch: 1.2,
		volume: 0.8,

		particle: "jeg:spark",
		particleCount: 5,
	};

	const DEGREES_TO_RADIANS = 0.017453292519943295;

	const $DamageBonusWeaponTrait = Java.loadClass("com.oblivioussp.spartanweaponry.api.trait.DamageBonusWeaponTrait");
	const $IWeaponTraitContainer = Java.loadClass("com.oblivioussp.spartanweaponry.api.IWeaponTraitContainer");
	const $ThrowingWeaponEntity = Java.loadClass("com.oblivioussp.spartanweaponry.entity.projectile.ThrowingWeaponEntity");
	const $PacketDistributor = Java.loadClass("net.minecraftforge.network.PacketDistributor");
	const $ClientboundLevelParticlesPacket = Java.loadClass("net.minecraft.network.protocol.game.ClientboundLevelParticlesPacket");
	const $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");
	const $ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");
	const $ChatFormatting = Java.loadClass("net.minecraft.ChatFormatting");
	const $LivingEntity = Java.loadClass("net.minecraft.world.entity.LivingEntity");
	const $SoundEvent = Java.loadClass("net.minecraft.sounds.SoundEvent");
	const $Holder = Java.loadClass("net.minecraft.core.Holder");
	const $SoundSource = Java.loadClass("net.minecraft.sounds.SoundSource");
	const $ClientboundSoundPacket = Java.loadClass("net.minecraft.network.protocol.game.ClientboundSoundPacket");

	/**
	 * DamageBonusWeaponTrait constructor: (String typeIn, String modIdIn, DamageCalculationFunc func)
	 * @type {Internal.DamageBonusWeaponTrait}
	 */
	const BackstabTrait = new JavaAdapter(
		$DamageBonusWeaponTrait,
		{
			addTooltipDescription: function (stack, tooltip) {
				let desc = Component.translatable(
					`tooltip.${BACKSTAB_CONFIG.modId}.trait.${BACKSTAB_CONFIG.traitId}.desc`,
					(this.getMagnitude() - 1.0) * 100,
				);
				tooltip.add(Component.literal("  ").append(desc.withStyle($ChatFormatting.ITALIC, $ChatFormatting.GRAY)));
			},
		},
		BACKSTAB_CONFIG.traitId,
		BACKSTAB_CONFIG.modId,
		/**
		 * Damage Calculation Function
		 * @param {Internal.WeaponMaterial} material
		 * @param {number} baseDamage
		 * @param {number} bonusDamage
		 * @param {$DamageSource} source
		 * @param {Internal.LivingEntity} attacker
		 * @param {Internal.LivingEntity} victim
		 */
		(material, baseDamage, bonusDamage, source, attacker, victim) => baseDamage,
	);

	BackstabTrait.setMelee()
		.setMagnitude(1.0 + BACKSTAB_CONFIG.damageMultiplier)
		.setLevel(1);

	StartupEvents.registry("spartanweaponry:weapon_traits", (event) => {
		event.createCustom(BACKSTAB_CONFIG.traitId, () => BackstabTrait);
	});

	ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingHurtEvent", (event) => {
		const { entity, source, amount } = event;
		if (entity.level.isClientSide()) return;

		let victim = entity;
		let attacker = source.getActual();
		if (!attacker || !(attacker instanceof $LivingEntity)) return;

		try {
			let weaponStack = null;
			let directEntity = source.getImmediate();

			if (directEntity instanceof $ThrowingWeaponEntity) {
				weaponStack = directEntity.getWeaponItem();
			} else {
				weaponStack = attacker.getCurrentAttack ? attacker.getCurrentAttack().itemStack() : attacker.getMainHandItem();
			}

			if (!weaponStack || weaponStack.isEmpty()) return;

			let item = weaponStack.getItem();
			if (item instanceof $IWeaponTraitContainer) {
				if (!item.hasWeaponTraitWithType(BACKSTAB_CONFIG.traitId)) return;

				let victimLook = victim.getViewVector(1.0).normalize();
				let attackDir;
				if (directEntity instanceof $ThrowingWeaponEntity) {
					attackDir = directEntity.getDeltaMovement().normalize();
				} else {
					attackDir = attacker.getViewVector(1.0).normalize();
				}
				let radian = BACKSTAB_CONFIG.angle * DEGREES_TO_RADIANS;

				let dotProduct = attackDir.dot(victimLook);
				let threshold = Math.cos(radian);

				if (dotProduct >= threshold) {
					let bonus = amount * BACKSTAB_CONFIG.damageMultiplier;
					event.setAmount(amount + bonus);

					// --- SOUND LOGIC ---
					if (BACKSTAB_CONFIG.enableSound) {
						if (BACKSTAB_CONFIG.soundEveryoneHear) {
							// Standard broadcast
							attacker.level.playSound(
								null,
								victim.getX(),
								victim.getY(),
								victim.getZ(),
								BACKSTAB_CONFIG.sound,
								"players",
								BACKSTAB_CONFIG.volume,
								BACKSTAB_CONFIG.soundPitch,
							);
						} else if (attacker.isPlayer()) {
							// Targeted Packet to Attacker only
							let soundRL = new $ResourceLocation(BACKSTAB_CONFIG.sound);
							let holder = $Holder.direct($SoundEvent.createVariableRangeEvent(soundRL));
							let packet = new $ClientboundSoundPacket(
								holder,
								$SoundSource.PLAYERS,
								attacker.getX(),
								attacker.getY(),
								attacker.getZ(),
								BACKSTAB_CONFIG.volume,
								BACKSTAB_CONFIG.soundPitch,
								attacker.getRandom().nextLong(),
							);
							attacker.connection.send(packet);
						}
						// Thank you konsola5 (1083438156667424768) for client sided sounds
					}

					// --- PARTICLE LOGIC ---
					if (BACKSTAB_CONFIG.enableParticles) {
						let particleType = $ForgeRegistries.PARTICLE_TYPES.getValue(new $ResourceLocation(BACKSTAB_CONFIG.particle));
						if (particleType) {
							let realOffset = victim.getBbWidth() / 2.0 + BACKSTAB_CONFIG.offsetDist;
							let xOffset = victim.getX() - victimLook.x() * realOffset;
							let zOffset = victim.getZ() - victimLook.z() * realOffset;
							let packet = new $ClientboundLevelParticlesPacket(
								particleType,
								false,
								xOffset,
								victim.getEyeY(),
								zOffset,
								0.1,
								0.1,
								0.1,
								0.0,
								BACKSTAB_CONFIG.particleCount,
							);

							if (BACKSTAB_CONFIG.particleEveryoneSee) {
								$PacketDistributor.TRACKING_ENTITY_AND_SELF.with(() => victim).send(packet);
							} else if (attacker.isPlayer()) {
								$PacketDistributor.PLAYER.with(() => attacker).send(packet);
							}
						}
					}
				}
			}
		} catch (err) {
			// console.error("Backstab Logic Error: " + err);
		}
	});
})();
