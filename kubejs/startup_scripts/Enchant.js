const EnchantmentCategory = Java.loadClass('net.minecraft.world.item.enchantment.EnchantmentCategory');
StartupEvents.registry('enchantment', event => {
    event.create('exsanguination:awakening')
        .minLevel(1)
        .maxLevel(1)
        .category(EnchantmentCategory.ARMOR)
        .displayName('Awakening')
        .rarity('UNCOMMON')
});

StartupEvents.registry("enchantment", event => {
    event.create("exsanguination:osmosis")
        .minLevel(1)
        .maxLevel(1)
        .category(EnchantmentCategory.BREAKABLE)
        .displayName("Osmosis")
})

//Liopyu's Cheese For Sculk Smitez I am forever grateful for your scrips
ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingHurtEvent", event => global.hurt(event))
/**
 *
 * @param {Internal.LivingHurtEvent} event
 */

let listSculk = [
    'sculkhorde:sculk_enderman',
    'sculkhorde:sculk_spore_spewer',
    'sculkhorde:sculk_mite',
    'sculkhorde:sculk_sheep',
    'sculkhorde:sculk_mite_aggressor',
    'sculkhorde:sculk_bee_harvester',
    'sculkhorde:sculk_bee_infector',
    'sculkhorde:sculk_creeper',
    'sculkhorde:sculk_hatcher',
    'sculkhorde:sculk_ravager',
    'sculkhorde:sculk_spitter',
    'sculkhorde:sculk_vindicator',
    'sculkhorde:sculk_zombie',
    'sculkhorde:sculk_phantom',
    'sculkhorde:sculk_phantom_corpse',
    'sculkhorde:sculk_salmon',
    'sculkhorde:sculk_squid',
    'sculkhorde:sculk_pufferfish',
    'sculkhorde:sculk_witch',
    'sculkhorde:sculk_soul_reaper',
    'sculkhorde:sculk_vex',
    'alexsmobs:skreecher'
]

let listSculk2 = [
    'minecraft:warden',
    'sculkhorde:sculk_enderman',
    'sculkhorde:sculk_spore_spewer',
    'sculkhorde:sculk_mite',
    'sculkhorde:sculk_sheep',
    'sculkhorde:sculk_mite_aggressor',
    'sculkhorde:sculk_bee_harvester',
    'sculkhorde:sculk_bee_infector',
    'sculkhorde:sculk_creeper',
    'sculkhorde:sculk_hatcher',
    'sculkhorde:sculk_ravager',
    'sculkhorde:sculk_spitter',
    'sculkhorde:sculk_vindicator',
    'sculkhorde:sculk_zombie',
    'sculkhorde:sculk_phantom',
    'sculkhorde:sculk_phantom_corpse',
    'sculkhorde:sculk_salmon',
    'sculkhorde:sculk_squid',
    'sculkhorde:sculk_pufferfish',
    'sculkhorde:sculk_witch',
    'sculkhorde:sculk_soul_reaper',
    'sculkhorde:sculk_vex',
    'alexsmobs:skreecher',
    'deeperdarker:angler_fish',
    'deeperdarker:sculk_centipede',
    'deeperdarker:sculk_leech',
    'deeperdarker:sculk_snapper',
    'deeperdarker:shattered',
    'deeperdarker:shriek_worm',
    'deeperdarker:sludge',
    'deeperdarker:stalker',
    'minecraft:phantom'
]


let uncrammable = [
    "minecraft:silverfish",
    "sleep_tight:bedbug",
    "sculkhorde:sculk_mite",
    "sculkhorde:sculk_mite_aggressor"
]
let listHumanoid = [
    'alexsmobs:farseer',
    'minecraft:witch',
    'alexscaves:licowitch',
    'minecraft:villager',
    'minecraft:player',
    'minecraft:enderman',
    'whiteenderman:white_enderman',
    'guardvillagers:guard',
    'minecraft:ravager',
    'minecraft:piglin',
    'minecraft:piglin_brute',
    'luminous_nether:cultist_archer',
    'luminous_nether:piglin_cultist',
    'luminous_nether:piglin_cultist_leader',
    'luminous_beasts:piglin_executioner',
    'luminous_beasts:piglin_executioner',
    'sculkhorde:sculk_enderman'
]
let projectilesource = [
    "jeg.bullet.killed",
    "jeg.bullet.eliminated",
    "jeg.bullet.annihilated",
    "jeg.bullet.executed",
    "gumball",
    "stalagmite",
    "supplementaries:cannonball",
    "createbigcannons.shrapnel",
    "createbigcannons.cannon_projectile",
    "createbigcannons.big_cannon_projectile",
    "createbigcannons.machine_gun_fire",
    "createbigcannons.machine_gun_fire_in_water",
    "createbigcannons.flak",
    "createbigcannons.grapeshot",
    "jeg.bullet.decimated",
    "falling_anvil",
    "create.run_over",
    "fireworks",
    "sonic_boom",
    "quark.pickarang",
    "supplementaries.cannonball",
    "supplementaries.cannonball.player",
    "supplementaries.slingshot.item"
]
let bulletsources = [
    "jeg.bullet.killed",
    "jeg.bullet.eliminated",
    "jeg.bullet.annihilated",
    "jeg.bullet.executed",
    "jeg.bullet.decimated"

]
// "All Technology Is Magic" - Kurt Vonni
let magician = [
    "indirectMagic",
    "desolate_dagger",
    "will_o_wisp",
    "raygun",
    "cataclysm.maledictio_magicae",
    "cataclysm.deathlaser",
    "supplementaries.xp_extracting",
    "spirit_dinosaur",
    "lightningBolt",
    "soulBullet",
    "cataclysm.maledictio",
    "cataclysm.maledictio_anima",
    "cataclysm.abyssal_burn",
    "outOfWorld",
    "dragon_breath",
    "farseer"
]


let crush = [
    "create.crush",
    "freeze",
    "cataclysm.deathlaser",
    "thirst",
    "shotgunexplosion",
    "drown",
    "freddy",
    "graveMistSuffocation",
    "drown",
    "cramming",
    "nuke_0",
    "nuke_1",
    "nuke_2",
    "nuke_3",
    "nuke_4",
    "explosion",
    "explosion.player",
    "supplementaries.amethyst",
    "prickly_vines",
    "prickly_vines.player",
    "hemorrahage_damage",
    "hemorrahage_damage.player"
]


let fire = [
    "toughasnails.hyperthermia",
    "molten_lead",
    "furnace_damage",
    "firework",
    "volatileScoriaExplosion",
    "createbigcannons.molten_metal"
]


// Un-Broken Curruntly?
// Outisde ON PURPOSE


let magic = ["magic", "indirectMagic"]
let wiltednerf = ["onFire", "inFire", "create:fan_fire", "minecraft:lava"]
let doubledamage = ["explosion", "explosion.player"]
let cramming = ["cramming", "inWall"]
let animalBlacklist = ['minecraft:iron_golem', 'vinery:wandering_winemaker', 'minecraft:wandering_trader', 'minecraft:villager', 'minecraft:allay', 'guardvillagers:guard']
let animalWhitelist = ['minecraft:hoglin', 'luminous_beasts:rare_sea_viper', 'luminous_beasts:sea_viper', 'luminous_beasts:rare_yeti', 'luminous_beasts:yeti', 'luminous_beasts:rare_phoenix_bird', 'luminous_beasts:baby_phoenix', 'alexsmobs:sunbird', 'luminous_beasts:rare_vile_gator', 'luminous_beasts:vile_gator', 'alexscaves:vesper', 'alexscaves:underzealot', 'alexscaves:corrodent']
// let rabies = ['rabial_end','drown']
// Based Of vomiter's Script
EntityJSEvents.attributes(event => {
    event.allTypes.forEach(type => {
        event.modify(type, ctx => {
            ctx.add("alexscavesexemplified:rabies_resistance")
        })
    })
})

EntityJSEvents.attributes(event => {
    event.allTypes.forEach(type => {
        event.modify(type, ctx => {
            ctx.add("biomemakeover:projectile_resistance")
        })
    })
})

EntityJSEvents.attributes(event => {
    event.allTypes.forEach(type => {
        event.modify(type, ctx => {
            ctx.add("potioncore:magic_shield")
        })
    })
})
/*
const getrabiesNegationLvl = (source, entity) => {
    if(!rabies.includes(source.getType())) return;
    const rabiesNegation = entity.getAttribute("alexscavesexemplified:rabies_resistance")
    if(!rabiesNegation) return;
    const rabiesNegationLvl = rabiesNegation.getValue()
    return rabiesNegationLvl
}
*/
const getprojectileNegationLvl = (source, entity) => {
    if (!projectilesource.includes(source.getType())) return;
    const projectileNegation = entity.getAttribute("biomemakeover:projectile_resistance")
    if (!projectileNegation) return;
    const projectileNegationLvl = projectileNegation.getValue()
    return projectileNegationLvl
}

const getmagicNegationLvl = (source, entity) => {
    if (!magician.includes(source.getType())) return;
    const magicNegation = entity.getAttribute("potioncore:magic_shield")
    if (!magicNegation) return;
    const magicNegationLvl = magicNegation.getValue()
    return magicNegationLvl
}

const getNegativeFireLevel = (source, entity) => {
    if (!wiltednerf.includes(source.getType())) return;
    const Wiltedfire = entity.getAttribute("exsanguination:flamability")
    if (!Wiltedfire) return;
    const NegativeFireLevel = Wiltedfire.getValue()
    return NegativeFireLevel
}
/*
const getUndeadProtrction = (source, entity) => {
    if(!source.actual.isUndead()) return;
    const Undeadnegation = entity.getAttribute(RES.Undead)
    if(!Undeadnegation) return;
    const Undeadnegation = Undeadnegation.getValue()
    return Undeadnegation
}
*/

// Global Hurti Eventi
global.hurt = event => {
    let { entity, source, amount } = event
    let attacker = source.actual

    /*
        if (entity.isAlive()) {
        Utils.server.runCommandSilent(`say ${attacker}`)
         Utils.server.runCommandSilent(`say ${source}`)
         Utils.server.runCommandSilent(`say ${amount}`)
        }
    */
    if (entity.level.isClientSide()) return
    if (!entity.isLiving()) return
    /*
        const rabiesNegationLvl = getrabiesNegationLvl(source, entity)
            if(rabiesNegationLvl > 0) {
            event.setAmount(amount * (20 - rabiesNegationLvl) / 20)
        //    Utils.server.runCommandSilent(`say ${amount}`)
    
        }
        */

    const magicNegationLvl = getmagicNegationLvl(source, entity)
    if (magicNegationLvl > 0) {
        event.setAmount(amount * (20 - magicNegationLvl) / 20)
        //   Utils.server.runCommandSilent(`say ${amount}`)

    }

    const projectileNegationLvl = getprojectileNegationLvl(source, entity)
    if (projectileNegationLvl) {
        event.setAmount(amount * (20 - projectileNegationLvl) / 20)
        //  Utils.server.runCommandSilent(`say ${amount}`)
    }
    /*
        const Undead = getUndeadProtrction(source, entity)
        if (Undeadnegation > 0) {
        event.setAmount(amount * (20 - Undead) / 20)
        }
    */
    const NegativeFireLevel = getNegativeFireLevel(source, entity)
    if (NegativeFireLevel > 0) {
        let math = 10 * NegativeFireLevel
        event.setAmount(amount + math)
        //  Utils.server.runCommandSilent(`say ${amount}`)
        //  Utils.server.runCommandSilent(`say ${math}`)

    }

    if (fire.includes(source.getType())) {
        var unbreak = 0
        let armorPieces = [
            entity.getHeadArmorItem(),
            entity.getChestArmorItem(),
            entity.getLegsArmorItem(),
            entity.getFeetArmorItem()
        ].forEach((piece) => {
            if (piece.id != "minecraft:air") {
                unbreak += piece.getEnchantments().get("minecraft:fire_protection")
            }
        })
        if (unbreak > 0) {
            let reduction = unbreak * 0.08
            let finalDamage = amount * (1 - reduction)
            event.setAmount(finalDamage)
        }
    }

    if (projectilesource.includes(source.getType())) {
        var unbreak = 0
        let armorPieces = [
            entity.getHeadArmorItem(),
            entity.getChestArmorItem(),
            entity.getLegsArmorItem(),
            entity.getFeetArmorItem()
        ].forEach((piece) => {
            if (piece.id != "minecraft:air") {
                unbreak += piece.getEnchantments().get('minecraft:projectile_protection')
            }
        })
        if (unbreak > 0) {
            let reduction = unbreak * 0.08
            let finalDamage = amount * (1 - reduction)
            //Utils.server.runCommandSilent(`say ${amount} effected`)
            //Utils.server.runCommandSilent(`say ${finalDamage} effected`)
            event.setAmount(finalDamage)
        }
    }



    // Magician But Weaker for magic protection effect 0.08 to 0.08
    if (magician.includes(source.getType())) {
        var unbreak = 0
        let armorPieces = [
            entity.getHeadArmorItem(),
            entity.getChestArmorItem(),
            entity.getLegsArmorItem(),
            entity.getFeetArmorItem()
        ].forEach((piece) => {
            if (piece.id != "minecraft:air") {
                unbreak += piece.getEnchantments().get('minecraft:magic_protection')
            }
        })
        if (unbreak > 0) {
            let reduction = unbreak * 0.08
            let finalDamage = amount * (1 - reduction)
            event.setAmount(finalDamage)
        }
    }

    // Outside on purpose
    // Un-Broken Curruntly?
    if (doubledamage.includes(source.getType())) {
        let boom = (amount * 3.5)
        if (entity.type == "minecraft:player") {
            event.setAmount((boom))
        }
    }

    if (cramming.includes(source.getType())) {
        let cram = (0)
        if (uncrammable.toString().includes(entity.type)) {
            event.setAmount((cram))
        }
    }


    // I think i need to rework These enchants

    if (listSculk.toString().includes(entity.type)) { // This part is Xeru's script
        if (!attacker) return
        if (source.getType() != 'player') return
        let smiteLvl = attacker.mainHandItem.getEnchantmentLevel("deeperdarker:sculk_smite")
        if (attacker.mainHandItem.getEnchantmentLevel("deeperdarker:sculk_smite") > 0) {
            let smiteDamage = (smiteLvl * 2.5);
            let Highnumber = (2 * smiteLvl);
            event.setAmount((amount + smiteDamage))
            if (Math.random() < 0.6) {
                entity.potionEffects.add("potioncore:broken_armor", Highnumber, 2, false, true)
            }
            // attacker.tell("Smite damage: " + smiteDamage + ", original damage: " + amount + ", final damage: " + (amount + smiteDamage))
        }
        if (attacker.offHandItem.getEnchantmentLevel("deeperdarker:sculk_smite") > 0) {
            let smiteDamage = (smiteLvl * 2.5);
            let Highnumber = (2 * smiteLvl);
            event.setAmount((amount + smiteDamage))
            if (Math.random() < 0.6) {
                entity.potionEffects.add("potioncore:broken_armor", Highnumber, 2, false, true)
            }
            //attacker.tell("Offhand Smite damage: " + smiteDamage + ", original damage: " + amount + ", final damage: " + (amount + smiteDamage))
        }

        // Error: dev.latvian.mods.rhino.EcmaError: TypeError: Cannot call method "getEnchantmentLevel" of undefined (startup_scripts:Enchant.js#232)
    }

    if (listHumanoid.toString().includes(entity.type)) {
        if (!attacker) return
        if (source.getType() != 'player') return
        let BaneLvl = attacker.mainHandItem.getEnchantmentLevel("extra_enchantments:illagers_bane")
        if (attacker.mainHandItem.getEnchantmentLevel("extra_enchantments:illagers_bane") > 0) {
            let baneDamage = (BaneLvl * 2.5);
            let Highnumber = (2 * BaneLvl);
            event.setAmount((amount + baneDamage))
            if (Math.random() < 0.6) {
                entity.potionEffects.add("minecraft:weakness", Highnumber, 2, false, true)
            }
            //  attacker.tell("Builder Bane damage: " + baneDamage + ", original damage: " + amount + ", final damage: " + (amount + baneDamage))
        }
        if (attacker.offHandItem.getEnchantmentLevel("extra_enchantments:illagers_bane") > 0) {
            let baneDamage = (BaneLvl * 2.5);
            let Highnumber = (2 * BaneLvl);
            event.setAmount((amount + baneDamage))
            if (Math.random() < 0.6) {
                entity.potionEffects.add("minecraft:weakness", Highnumber, 2, false, true)
            }
            //attacker.tell("Offhand Builder Bane damage: " + baneDamage + ", original damage: " + amount + ", final damage: " + (amount + baneDamage))
        }
    }
    if (entity.isAnimal()) {
        if (!attacker) return
        if (source.getType() != 'player') return
        let Greaterbane = attacker.mainHandItem.getEnchantmentLevel("minecraft:bane_of_arthropods")
        if (attacker.mainHandItem.getEnchantmentLevel("minecraft:bane_of_arthropods") > 0) {
            let baneDamage = (Greaterbane * 2.5);
            let Highnumber = (2 * Greaterbane);
            event.setAmount((amount + baneDamage))
            if (Math.random() < 0.6) {
                entity.potionEffects.add("minecraft:slowness", Highnumber, 2, false, true)
            }
            //attacker.tell("Animal Bane damage: " + baneDamage + ", original damage: " + amount + ", final damage: " + (amount + baneDamage))
        }
        if (attacker.offHandItem.getEnchantmentLevel("minecraft:bane_of_arthropods") > 0) {
            let baneDamage = (Greaterbane * 2.5);
            let Highnumber = (2 * Greaterbane);
            event.setAmount((amount + baneDamage))
            if (Math.random() < 0.6) {
                entity.potionEffects.add("minecraft:slowness", Highnumber, 2, false, true)
            }
            //attacker.tell("Offhand Animal Bane damage: " + baneDamage + ", original damage: " + amount + ", final damage: " + (amount + baneDamage))
        }
    }

    // Thanks to my 1 IQ I could mitigate the animal damage yippie it weakens damage if it has hm forget it
    if (animalBlacklist.toString().includes(entity.type)) {
        if (!attacker) return
        if (source.getType() != 'player') return
        let BaneLvl2 = attacker.mainHandItem.getEnchantmentLevel("minecraft:bane_of_arthropods")
        if (attacker.mainHandItem.getEnchantmentLevel("minecraft:bane_of_arthropods") > 0) {
            let baneDamage2 = (BaneLvl2 * 2.5);
            let baneDamage = (BaneLvl2 * 2.5);
            event.setAmount((amount + baneDamage - baneDamage2))
            //      attacker.tell("Anti Animal Bane damage: " + baneDamage2 + ", original damage: " + (amount + baneDamage) + ", final damage: " + (amount + baneDamage - baneDamage2))
        }
        if (attacker.offHandItem.getEnchantmentLevel("minecraft:bane_of_arthropods") > 0) {
            let baneDamage2 = (BaneLvl2 * 2.5);
            let baneDamage = (BaneLvl2 * 2.5);
            event.setAmount((amount + baneDamage - baneDamage2))
            //      attacker.tell("Offhand Anti Animal Bane damage: " + baneDamage2 + ", original damage: " + (amount + baneDamage) + ", final damage: " + (amount + baneDamage - baneDamage2))
        }
    }
    if (animalWhitelist.toString().includes(entity.type)) {
        if (!attacker) return
        if (source.getType() != 'player') return
        let BaneLvl3 = attacker.mainHandItem.getEnchantmentLevel("minecraft:bane_of_arthropods")
        if (attacker.mainHandItem.getEnchantmentLevel("minecraft:bane_of_arthropods") > 0) {
            let baneDamage = (BaneLvl3 * 2.5);
            let Highnumber = (2 * BaneLvl3);
            event.setAmount((amount + baneDamage))
            if (Math.random() < 0.6) {
                entity.potionEffects.add("minecraft:slowness", Highnumber, 2, false, true)
            }
            //    attacker.tell("Anti Bane damage: " + baneDamage2 + ", original damage: " + amount + ", final damage: " + (amount + baneDamage2))
        }
        if (attacker.offHandItem.getEnchantmentLevel("minecraft:bane_of_arthropods") > 0) {
            let baneDamage = (BaneLvl3 * 2.5);
            let Highnumber = (2 * BaneLvl3);
            event.setAmount((amount + baneDamage))
            if (Math.random() < 0.6) {
                entity.potionEffects.add("minecraft:slowness", Highnumber, 2, false, true)
            }
            //    attacker.tell("Offhand  Animal Bane damage: " + baneDamage2 + ", original damage: " + amount + ", final damage: " + (amount + baneDamage2))
        }
    }

    if (entity.isUndead()) {
        if (!attacker) return
        if (source.getType() != 'player') return
        let Smittens = attacker.mainHandItem.getEnchantmentLevel("minecraft:smite")
        if (attacker.mainHandItem.getEnchantmentLevel("minecraft:smite") > 0) {
            let Highnumber = (2 * Smittens);
            if (Math.random() < 0.6) {
                entity.potionEffects.add("potioncore:fire", Highnumber, 1, false, true)
            }
            //    attacker.tell("Anti Bane damage: " + baneDamage2 + ", original damage: " + amount + ", final damage: " + (amount + baneDamage2))
        }
        if (attacker.offHandItem.getEnchantmentLevel("minecraft:smite") > 0) {
            let Highnumber = (2 * Smittens);
            if (Math.random() < 0.6) {
                entity.potionEffects.add("potioncore:fire", Highnumber, 1, false, true)
            }
            //    attacker.tell("Offhand  Animal Bane damage: " + baneDamage2 + ", original damage: " + amount + ", final damage: " + (amount + baneDamage2))
        }

    }
}
// Placed Outside Global To Prevent Conflicts
ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingHurtEvent", (event) => {
    let { entity, source, amount } = event
    if (entity.level.isClientSide()) return
    if (!entity.isLiving()) return
    if (crush.includes(source.getType())) {
        var unbreak = 0
        let armorPieces = [
            entity.getHeadArmorItem(),
            entity.getChestArmorItem(),
            entity.getLegsArmorItem(),
            entity.getFeetArmorItem()
        ].forEach((piece) => {
            if (piece.id != "minecraft:air") {
                unbreak += piece.getEnchantments().get('minecraft:blast_protection')
            }
        })
        if (unbreak > 0) {
            let reduction = unbreak * 0.08
            let finalDamage = amount * (1 - reduction)
            event.setAmount(finalDamage)
        }
    }
})

ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingHurtEvent", (event) => {
    let { entity, source, amount } = event
    let attacker = source.actual
    if (entity.level.isClientSide()) return
    if (!entity.isLiving()) return
    if (bulletsources.includes(source.getType())) {
        if (!attacker) return
        let pazazz = (attacker.attributes.getValue("jeg:generic.gun_damage"));
        if (pazazz > 0) {
            let tiyfixes = (pazazz + 1)
            event.setAmount(amount * tiyfixes)
            //    attacker.tell("PAINPOWER: " + pazazz + ", DAMAGE: " + amount + ", FINALDAMAGE: " + (amount * pazazz))
        }
    }

})

ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingHurtEvent", (event) => {
    let { entity, source, amount } = event
    if (magic.includes(source.getType())) {
        if (entity.level.isClientSide()) return
        if (!entity.isLiving()) return
        let cram = (0)
        if (listSculk2.toString().includes(entity.type)) {
            event.setAmount((cram))
        }
    }
})


// dev.latvian.mods.rhino.EcmaError: ReferenceError: "source" is not defined. (startup_scripts:Enchant.js#666)


StartupEvents.registry("enchantment", event => {
    event.create("minecraft:magic_protection")
        .minLevel(1)
        .maxLevel(4)
        .rarity('UNCOMMON')
        .category(EnchantmentCategory.ARMOR)
        .displayName("Magic Protection")
})



ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingHurtEvent", event => global.RangedNerf(event))

/**
* @param {Internal.LivingHurtEvent} event 
*/
global.RangedNerf = event => {
    let { entity, source, amount } = event
    if (entity.level.isClientSide()) return
    let attacker = source.actual
    // Sorry For This Chunk Of Code I Don't Trust Myself To Not Break It
    if (!attacker) return
    if (entity.level.isClientSide()) return
    if (source.getType() != 'player') return

    // Distance
    let dx = attacker.x - entity.x
    let dy = attacker.y - entity.y
    let dz = attacker.z - entity.z
    // Made The Damage Lower When Outside Reach
    let distance = Math.sqrt(dx * dx + dy * dy + dz * dz)
    let reach = attacker.getEntityReach()
    // The Reach Part
    let innereach = reach * Math.max(0, 1.0 - 0.27)
    let innereach_highdmg = reach * Math.max(0, 1.0 - 0.44) // 4441%
    let innereach_dagger = reach * Math.max(0, 1.0 - 0.03)
    // distance / reach
    let t = distance / innereach
    let t_highdmg = distance / innereach_highdmg
    let t_dagger = distance / innereach_dagger
    // Further DMG Reduction
    let multiplier = t * 0.8
    let multiplier_highdmg = t_highdmg * 0.9
    let multiplier_dagger = Math.max(1, 1.5 - t_dagger)

    if (attacker.creative) return
    if (attacker.getMainHandItem() == "minecraft:air") return
    if (distance <= innereach && reach > 3) {
        let newDamage = amount * multiplier
        event.setAmount(newDamage);
        //attacker.tell("Effect Triggered: " + newDamage)
        //attacker.tell("Distance: " + distance + ", Reach: " + reach)

        // Damage Capped If Damage is Greater then 10, This Is To Make
        // Combat Less Trivial + INDIRECT Spartan Nerf
    } else if (distance <= innereach_highdmg && reach == 3) {
        if (attacker.potionEffects.isActive("lostcities:courage")) return
        let newDamage = amount * multiplier_highdmg
        let newDamage2 = amount * multiplier
        if (amount >= 10) {
            event.setAmount(newDamage2)
            //attacker.tell("HighDMG Triggered: " + newDamage + " t: " + t_highdmg)
            //attacker.tell("Distance: " + distance + ", Reach: " + reach)
        }
        if (amount < 10) {
            event.setAmount(newDamage)
            //attacker.tell("NormDMG Triggered: " + newDamage + " t: " + t)
            //attacker.tell("Distance: " + distance + ", Reach: " + reach)
        }


        // Daggers are getting a buff 
    } else if (distance <= innereach_dagger && reach <= 2) {
        let newDamage = amount * multiplier_dagger
        event.setAmount(newDamage);
        //attacker.tell("Dagger Triggered: " + newDamage)
        //attacker.tell("multiplier_dagger: " + multiplier_dagger + ", t_dagger: " + t_dagger)
    }
}




// Lifted From EyesEyes's Backstab Script
// Adds The Thrown Weapon Bonuses on Backstabbing
ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingHurtEvent", (event) => {

    const $ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");
    const $ThrowingWeaponEntity = Java.loadClass("com.oblivioussp.spartanweaponry.entity.projectile.ThrowingWeaponEntity");
    const $PacketDistributor = Java.loadClass("net.minecraftforge.network.PacketDistributor");
    const $ClientboundLevelParticlesPacket = Java.loadClass("net.minecraft.network.protocol.game.ClientboundLevelParticlesPacket");
    const $ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries");
    const $LivingEntity = Java.loadClass("net.minecraft.world.entity.LivingEntity");
    const DEGREES_TO_RADIANS = 0.017453292519943295;

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
        }

        if (!weaponStack || weaponStack.isEmpty()) return;
        let item = weaponStack.getItem();
        let backstablevel = item.getEnchantmentLevel(weaponStack, "farmersdelight:backstabbing")
        if (backstablevel > 0) {
            let victimLook = victim.getViewVector(1.0).normalize();
            let attackDir;
            if (directEntity instanceof $ThrowingWeaponEntity) {
                attackDir = directEntity.getDeltaMovement().normalize();
            }
            let radian = 50 * DEGREES_TO_RADIANS;
            let dotProduct = attackDir.dot(victimLook);
            let threshold = Math.cos(radian);

            if (dotProduct >= threshold) {
                // Direct Farmer's Delight DMG Port
                let bonus = (backstablevel * 0.2) + 1.2
                event.setAmount(amount * bonus);

                // --- SOUND LOGIC ---
                // Standard broadcast
                attacker.level.playSound(
                    null,
                    victim.getX(),
                    victim.getY(),
                    victim.getZ(),
                    "minecraft:entity.arrow.hit",
                    "players",
                    0.8,
                    1.2,
                );
                // Thank you konsola5 (1083438156667424768) for client sided sounds ""

                // --- PARTICLE LOGIC --- ""
                let particleType = $ForgeRegistries.PARTICLE_TYPES.getValue(new $ResourceLocation("minecraft:crit"));
                if (particleType) {
                    let realOffset = victim.getBbWidth() / 2.0 + 0.15
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
                        5,
                    );

                    $PacketDistributor.TRACKING_ENTITY_AND_SELF.with(() => victim).send(packet);
                }
            }
        }
    } catch (err) {
    console.error("Backstab Logic Error: " + err);
    }
})