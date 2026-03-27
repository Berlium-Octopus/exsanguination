// priority: 500
// SOMETHING IN HERE CANCELES OUT INTENTIONAL GAME DESIGN EXPLOSION
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
// from ZAP
ForgeEvents.onEvent('net.minecraftforge.event.ItemAttributeModifierEvent', event => {
    /**
     * @param {Internal.Enchantment} enchantment enchantment ID
     * @param {Internal.Attribute} attribute attribute ID
     * @param {Internal.AttributeModifier$Operation} operation can be 'addition', 'multiply_base', or 'multiply_total'. usually you want 'multiply_base'
     * @param {number} value multiply_base and multiply_total start as 1, if you want to add 10% to a value, you would set it to 0.1
     * @param {string} uuid uuid of the modifier. should always be unique, i recommend using the website https://www.uuidgenerator.net/
     * @param {string} name name of the modifier
     */
    function enchantmentAttribute(enchantment, attribute, operation, value, uuid, name, item) {
        //if (item.hasEnchantment(enchantment, 1) && (event.getSlotType() == 'mainhand' || event.getSlotType() == 'offhand')) {
        if (item.hasEnchantment(enchantment) && event.getSlotType() == 'mainhand') {
        let level = item.getEnchantmentLevel(enchantment)
        let multiplier = (level * value)
            event.addModifier(attribute, new $AttributeModifier(uuid, name, value, operation))
        }
    }
        if (level = 0) return
    //example: 
    enchantmentAttribute(
        'oreganized:blugioning',
        'puffish_attributes:armor_shred',
        'multiply_base', 0.05 * level,
        'e4946202-2d54-4f29-aa0c-f930762d9a93', 'blugioning',
        event.itemStack
    )
    enchantmentAttribute(
        'minecraft:crippling',
        'puffish_attributes:toughness_shred',
        'multiply_base', 0.05 * level,
        'e4946202-2d54-4f29-aa0c-f930762d9a93', 'blugioning',
        event.itemStack
    )
})

// makes victims get brain damage + higher armor penetration (pickaxe)
StartupEvents.registry("enchantment", event => {
    event.create("oreganized:blugioning")
        .minLevel(1)
        .maxLevel(5)
        .category(EnchantmentCategory.DIGGER)
        .displayName("Blugioning")
})

// makes victim get toughness penetration (hoe + scythe) 
StartupEvents.registry("enchantment", event => {
    event.create("minecraft:crippling")
        .minLevel(1)
        .maxLevel(5)
        .category(EnchantmentCategory.DIGGER)
        .displayName("Crippling")
})
// Masocism Now Is Axe Based

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
    'alexsmobs:skreecher',
    'dummmmmmy:target_dummy'
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
    'sculkhorde:sculk_enderman',
    'dummmmmmy:target_dummy'
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

// fan_lava,fireball,molten_lead,,stove_burn,,luminous_nether:furnace_damage,fan_fire,firework,stove_burn,,volatile_scoria_explosion,,


let wiltednerf = ["onFire", "inFire", "create:fan_fire", "minecraft:lava" , "minecraft:out_of_world"]
let doubledamage = ["explosion", "explosion.player"]
let cramming = ["cramming"]
let animalBlacklist = ['minecraft:iron_golem','vinery:wandering_winemaker', 'minecraft:wandering_trader', 'minecraft:villager', 'minecraft:allay', 'guardvillagers:guard']
let animalWhitelist = ['minecraft:hoglin', 'luminous_beasts:rare_sea_viper', 'luminous_beasts:sea_viper', 'luminous_beasts:rare_yeti', 'luminous_beasts:yeti', 'luminous_beasts:rare_phoenix_bird', 'luminous_beasts:baby_phoenix', 'alexsmobs:sunbird', 'luminous_beasts:rare_vile_gator', 'luminous_beasts:vile_gator', 'alexscaves:vesper', 'alexscaves:underzealot', 'alexscaves:corrodent']
let rabies = ['rabial_end','drown']
// Based Of vomiter's Script
EntityJSEvents.attributes(event => {event.allTypes.forEach(type => {
    event.modify(type, ctx => {
        ctx.add("alexscavesexemplified:rabies_resistance")
    })
})})

EntityJSEvents.attributes(event => {event.allTypes.forEach(type => {
    event.modify(type, ctx => {
        ctx.add("biomemakeover:projectile_resistance")
    })
})})

EntityJSEvents.attributes(event => {event.allTypes.forEach(type => {
    event.modify(type, ctx => {
        ctx.add("potioncore:magic_shield")
    })
})})
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
    if(!projectilesource.includes(source.getType())) return;
    const projectileNegation = entity.getAttribute("biomemakeover:projectile_resistance")
    if(!projectileNegation) return;
    const projectileNegationLvl = projectileNegation.getValue()
    return projectileNegationLvl
}

const getmagicNegationLvl = (source, entity) => {
    if(!magician.includes(source.getType())) return;
    const magicNegation = entity.getAttribute("potioncore:magic_shield")
    if(!magicNegation) return;
    const magicNegationLvl = magicNegation.getValue()
    return magicNegationLvl
}

const getNegativeFireLevel = (source, entity) => {
    if(!wiltednerf.includes(source.getType())) return;
    const Wiltedfire = entity.getAttribute("exsanguination:flamability")
    if(!Wiltedfire) return;
    const NegativeFireLevel = Wiltedfire.getValue()
    return NegativeFireLevel
}
/*
const getMagicNegationLvl = (source, entity) => {
    if(!source.actual.isUndead()) return;
    const magicNegation = entity.getAttribute(RES.Undead)
    if(!magicNegation) return;
    const magicNegationLvl = magicNegation.getValue()
    return magicNegationLvl
}
*/


global.hurt = event => {
    let {entity, source, amount} = event
    let attacker = source.actual

    if (entity.isAlive()) {
      Utils.server.runCommandSilent(`say ${source}`)
      Utils.server.runCommandSilent(`say ${amount}`)
    }

    if (entity.level.isClientSide()) return
    if (!entity.isLiving()) return

    const rabiesNegationLvl = getrabiesNegationLvl(source, entity)
        if(rabiesNegationLvl) {
        event.setAmount(amount * (20 - rabiesNegationLvl) / 20)
    //    Utils.server.runCommandSilent(`say ${amount}`)

    }
    const magicNegationLvl = getmagicNegationLvl(source, entity)
        if(magicNegationLvl) {
        event.setAmount(amount * (20 - magicNegationLvl) / 20)
     //   Utils.server.runCommandSilent(`say ${amount}`)

    }

    const projectileNegationLvl = getprojectileNegationLvl(source, entity)
        if(projectileNegationLvl) {
        event.setAmount(amount * (20 - projectileNegationLvl) / 20)
      //  Utils.server.runCommandSilent(`say ${amount}`)
    }
/*
    const Undead = getUndeadProtrction(source, entity)
    if (Undead > 0) {
    event.setAmount(amount * (20 - Undead) / 20)
    }
*/
     const NegativeFireLevel = getNegativeFireLevel(source, entity)
        if(NegativeFireLevel > 0) {
        let math = 10 * NegativeFireLevel
        event.setAmount(amount + math)
      //  Utils.server.runCommandSilent(`say ${amount}`)
      //  Utils.server.runCommandSilent(`say ${math}`)

    }
    // Un-Broken Curruntly?
    // Outisde ON PURPOSE
    if (bulletsources.includes(source.getType())) {
        if (!attacker) return
            let pazazz = (attacker.attributes.getValue("jeg:generic.gun_damage"));
            if (pazazz > 0){
            let tiyfixes = (pazazz + 1)
            event.setAmount(amount + tiyfixes)
        //    attacker.tell("PAINPOWER: " + pazazz + ", DAMAGE: " + amount + ", FINALDAMAGE: " + (amount * pazazz))
            }
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
    let boom = (amount * 1.5)
  if (entity.type == "minecraft:player"){
        event.setAmount((boom))
        }
}

if (cramming.includes(source.getType())) {
    let cram = (0)
    if (uncrammable.toString().includes(entity.type)) {
        event.setAmount((cram))
        }
}

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
        if (unbreak > 0 ) {
            if (!doubledamage.includes(source.getType())){
           let reduction = unbreak * 0.08
            let finalDamage = amount * (1 - reduction)
            event.setAmount(finalDamage)
                       Utils.server.runCommandSilent(`say ${amount} effected`)
        } else {
           let reduction = unbreak * 0.08
            let boom = (amount * 1.5)
            let finalDamage = boom * (1 - reduction)
            event.setAmount(finalDamage)
                       Utils.server.runCommandSilent(`say ${amount} normal`)

        }}
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
            //attacker.tell("Smite damage: " + smiteDamage + ", original damage: " + amount + ", final damage: " + (amount + smiteDamage))
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
// HELP ME IT CRASHES WHAT
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

        if (entity.isAlive()) {
        if (!attacker) return
        if (source.getType() != 'player') return
        let Blugion = attacker.mainHandItem.getEnchantmentLevel("oreganized:blugioning")
        let Cripple = attacker.mainHandItem.getEnchantmentLevel("minecraft:crippling")
        if (attacker.mainHandItem.getEnchantmentLevel("oreganized:blugioning") > 0) {
            let Highnumber = (2 * Blugion);
            if (Math.random() < 0.6) {
                entity.potionEffects.add("oreganized:stunning", Highnumber, 1, false, true)
            } 
            //    attacker.tell(Brain Damage))
        }
        if (attacker.offHandItem.getEnchantmentLevel("oreganized:blugioning") > 0) {
            let Highnumber = (2 * Blugion);
            if (Math.random() < 0.6) {
                entity.potionEffects.add("oreganized:stunning", Highnumber, 1, false, true)
            }
            //    attacker.tell(Brain Damage))
        }
        if (attacker.mainHandItem.getEnchantmentLevel("minecraft:crippling") > 0) {
            let Highnumber = (2 * Cripple);
            if (Math.random() < 0.8) {
                entity.potionEffects.add("alexscaves:stunned", Highnumber, 1, false, true)
            } 
            //    attacker.tell(Brain Damage))
        }
        if (attacker.offHandItem.getEnchantmentLevel("minecraft:crippling") > 0) {
            let Highnumber = (2 * Cripple);
            if (Math.random() < 0.8) {
                entity.potionEffects.add("alexscaves:stunned", Highnumber, 1, false, true)
            }
            //    attacker.tell(Brain Damage))
        }
    }

}
StartupEvents.registry("enchantment", event => {
    event.create("minecraft:magic_protection")
        .minLevel(1)
        .maxLevel(4)
        .rarity('UNCOMMON')
        .category(EnchantmentCategory.ARMOR)
        .displayName("Magic Protection")
})
// If this works create Crush protection (Blast+Ice Prot+Immunity to Hemmorage)
// Buff Fire prot 
