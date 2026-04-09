PlayerEvents.tick(event => {
  const { player, player: { mainHandItem, offHandItem, headArmorItem, chestArmorItem, legsArmorItem, feetArmorItem } } = event
  if (player.age % 20 !== 0) return
  let armorset = [headArmorItem, chestArmorItem, legsArmorItem, feetArmorItem];
  let hands = [mainHandItem, offHandItem]
  let armorCheck = armorset.every(armorPiece => armorPiece.hasTag("exsanguination:golden_objects"))
  let chainmailCheck = armorset.every(armorPiece => armorPiece.hasTag("exsanguination:chainmail_objects"))
  let CestusCheck = hands.every(handSlot => handSlot.hasTag("exsanguination:wilted_objects"))
  let WiltedCheck = armorset.every(armorPiece => armorPiece.hasTag("exsanguination:wilted_objects"))

  // GENERIC AWAKEN FUNCTION
  let maxAwakening =
    headArmorItem.getEnchantmentLevel("exsanguination:awakening") +
    chestArmorItem.getEnchantmentLevel("exsanguination:awakening") +
    legsArmorItem.getEnchantmentLevel("exsanguination:awakening") +
    feetArmorItem.getEnchantmentLevel("exsanguination:awakening")

  let Awakening = 0
  if (maxAwakening === 4) {
    Awakening = 1
  }

  if (player.persistentData.hasgold === undefined) player.persistentData.hasgold = 0;
  if (armorCheck && player.persistentData.hasgold === 0) {
    let maxOsmosis =
      headArmorItem.getEnchantmentLevel("exsanguination:osmosis") +
      chestArmorItem.getEnchantmentLevel("exsanguination:osmosis") +
      legsArmorItem.getEnchantmentLevel("exsanguination:osmosis") +
      feetArmorItem.getEnchantmentLevel("exsanguination:osmosis")

    let magicAmp = 0
    if (maxOsmosis === 4) {
      magicAmp = 1
    }

    player.removeEffect("potioncore:magic_shield");
    player.removeEffect("potioncore:magic_focus");
    player.potionEffects.add("potioncore:magic_shield", -1, magicAmp, true, false);
    player.potionEffects.add("potioncore:magic_focus", -1, magicAmp, true, false);
    player.persistentData.hasgold = 1
    player.persistentData.magicAmp = magicAmp
    // player.tell(`MAGIC ${magicAmp}`);
  }

  if (!armorCheck && player.persistentData.hasgold === 1) {
    player.removeEffect("potioncore:magic_shield");
    player.removeEffect("potioncore:magic_focus");
    player.persistentData.hasgold = 0;
    player.persistentData.magicAmp = 0
    //  player.tell(`MEGAMAGIC ${player.persistentData.magicAmp}`);
  }

  // CHAINS
  if (player.persistentData.hasChains === undefined) player.persistentData.hasChains = 0;
  if (chainmailCheck && player.persistentData.hasChains === 0 && Awakening === 1) {
    player.removeEffect("potioncore:solid_core");
    player.potionEffects.add("potioncore:solid_core", -1, 0, true, false);
    player.persistentData.hasChains = 1
    // player.tell(`MAGIC ${player.persistentData.hasChains}`);
  }

  if ((!chainmailCheck || Awakening !== 1) && player.persistentData.hasChains === 1) {
    player.removeEffect("potioncore:solid_core");
    player.persistentData.hasChains = 0
    // player.tell(`MEGAMAGIC ${player.persistentData.hasChains}`); 
  }
  let burningChecks = player.inLava || player.onFire
  if (player.persistentData.isFunctionalyImmortal === undefined) player.persistentData.isFunctionalyImmortal = 0;

  if ((WiltedCheck && CestusCheck) && Awakening === 1 && player.persistentData.isFunctionalyImmortal === 0 && !burningChecks) {
      player.potionEffects.add("exsanguination:reincarnatus", -1, 0, true, false);
      player.potionEffects.add("minecraft:speed", -1, 0, true, false);
      player.potionEffects.add("potioncore:climb", -1, 0, true, false);
      player.potionEffects.add("minecraft:jump_boost", -1, 1, true, false);
      player.persistentData.isFunctionalyImmortal = 1
      // player.tell(`SORRY THERE WAS A DELAY ${player.persistentData.isFunctionalyImmortal}`);
  }

  if (((!WiltedCheck || !CestusCheck) || Awakening !== 1) && player.persistentData.isFunctionalyImmortal === 1 || burningChecks) {
    player.removeEffect("exsanguination:reincarnatus");
    player.removeEffect("minecraft:speed");
    player.removeEffect("potioncore:climb");
    player.removeEffect("minecraft:jump_boost");
    player.persistentData.isFunctionalyImmortal = 0
    // player.tell(`HAHNULL ${player.persistentData.isFunctionalyImmortal}`);
  }
});

global.applyEffect = event => {
  const { entity, effectInstance } = event;
  if (entity.type !== "minecraft:player") return;
  let magicAmp = entity.persistentData.magicAmp
  if (magicAmp === 1) {
    console.log(magicAmp);
    if (effectInstance.effect.descriptionId == "effect.minecraft.weakness" ||
      effectInstance.effect.descriptionId == "effect.minecraft.mining_fatigue") {
      event.setResult("deny");
      return;
    }
  }
}
