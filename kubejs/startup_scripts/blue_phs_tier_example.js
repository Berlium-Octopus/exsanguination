// priority: 0
// Convert This Into Bronze


// Make Archeological + Alexscaves Torpedoes Spartan Weapons :)
const $TierSortingRegistry = Java.loadClass('net.minecraftforge.common.TierSortingRegistry')
const $Tiers = Java.loadClass('net.minecraft.world.item.Tiers')
const $ForgeTier = Java.loadClass('net.minecraftforge.common.ForgeTier')
const $BlockTags = Java.loadClass('net.minecraft.tags.BlockTags')
const $ItemTags = Java.loadClass('net.minecraft.tags.ItemTags')

// SPARTAN!!! 
const MOD_ID = "spartandeeperdarker"
const $WEAPONAPI = Java.loadClass('com.oblivioussp.spartanweaponry.api.SpartanWeaponryAPI')
const $MATERIAL = Java.loadClass('com.oblivioussp.spartanweaponry.api.WeaponMaterial')
const $ModWeaponTraitTags = Java.loadClass('com.oblivioussp.spartanweaponry.api.tags.ModWeaponTraitTags')

const RESONARIUM_TIER = new $ForgeTier(3, 1193, 8, 3, 15, $BlockTags.create('forge:needs_resonarium_tool'), () =>
Ingredient.of('deeperdarker:resonarium_plate'))

/*
const RESONARIUM_MATERIAL = new $MATERIAL('resonarium',MOD_ID, $TierSortingRegistry.registerTier(RESONARIUM_TIER, 'spartandeeperdarker:resonarium', [$Tiers.DIAMOND], []),
$ItemTags.create('deeperdarker:resonarium_plate'), $ModWeaponTraitTags['create(net.minecraft.resources.ResourceLocation)']("spartandeeperdarker:materials/resonarium"))
*/;

const WARDEN_TIER = new $ForgeTier(5, 2519, 10, 5, 18, $BlockTags.create('forge:needs_warden_tool'), () =>
Ingredient.of('deeperdarker:reinforced_echo_shard'))


const WARDEN_MATERIAL = $MATERIAL('warden',MOD_ID, $TierSortingRegistry.registerTier(WARDEN_TIER, 'spartandeeperdarker:warden', [$Tiers.NETHERITE], []),
$ItemTags.create('deeperdarker:reinforced_echo_shard'), $ModWeaponTraitTags['create(net.minecraft.resources.ResourceLocation)']("spartandeeperdarker:materials/warden"))
 

// Duplicate tier name minecraft:resonarium
const RESONARIUM_MATERIAL = $MATERIAL('resonarium',MOD_ID, $TierSortingRegistry.registerTier(RESONARIUM_TIER, 'spartandeeperdarker:resonarium', [$Tiers.DIAMOND], []),
$ItemTags.create('deeperdarker:resonarium_plate'), $ModWeaponTraitTags['create(net.minecraft.resources.ResourceLocation)']("spartandeeperdarker:materials/resonarium"))


// Resonarium
StartupEvents.registry('item', event => {
    event.createCustom('spartandeeperdarker:resonarium_dagger', () => {return $WEAPONAPI.createDagger(RESONARIUM_MATERIAL)})
    event.createCustom('spartandeeperdarker:resonarium_parrying_dagger', () => {return $WEAPONAPI.createParryingDagger(RESONARIUM_MATERIAL)})
    event.createCustom('spartandeeperdarker:resonarium_longsword', () => {return $WEAPONAPI.createLongsword(RESONARIUM_MATERIAL)})
    event.createCustom('spartandeeperdarker:resonarium_katana', () => {return $WEAPONAPI.createKatana(RESONARIUM_MATERIAL)})
    event.createCustom('spartandeeperdarker:resonarium_saber', () => {return $WEAPONAPI.createSaber(RESONARIUM_MATERIAL)})
    event.createCustom('spartandeeperdarker:resonarium_rapier', () => {return $WEAPONAPI.createRapier(RESONARIUM_MATERIAL)})
    event.createCustom('spartandeeperdarker:resonarium_greatsword', () => {return $WEAPONAPI.createGreatsword(RESONARIUM_MATERIAL)})
    event.createCustom('spartandeeperdarker:resonarium_battle_hammer', () => {return $WEAPONAPI.createBattleHammer(RESONARIUM_MATERIAL)})
    event.createCustom('spartandeeperdarker:resonarium_warhammer', () => {return $WEAPONAPI.createWarhammer(RESONARIUM_MATERIAL)})    
    event.createCustom('spartandeeperdarker:resonarium_spear', () => {return $WEAPONAPI.createSpear(RESONARIUM_MATERIAL)})
    event.createCustom('spartandeeperdarker:resonarium_halberd', () => {return $WEAPONAPI.createHalberd(RESONARIUM_MATERIAL)})
    event.createCustom('spartandeeperdarker:resonarium_pike', () => {return $WEAPONAPI.createPike(RESONARIUM_MATERIAL)})
    event.createCustom('spartandeeperdarker:resonarium_lance', () => {return $WEAPONAPI.createLance(RESONARIUM_MATERIAL)})
    event.createCustom('spartandeeperdarker:resonarium_longbow', () => {return $WEAPONAPI.createLongbow(RESONARIUM_MATERIAL)})
    event.createCustom('spartandeeperdarker:resonarium_heavy_crossbow', () => {return $WEAPONAPI.createHeavyCrossbow(RESONARIUM_MATERIAL)})
    event.createCustom('spartandeeperdarker:resonarium_throwing_knife', () => {return $WEAPONAPI.createThrowingKnife(RESONARIUM_MATERIAL)})
    event.createCustom('spartandeeperdarker:resonarium_tomahawk', () => {return $WEAPONAPI.createTomahawk(RESONARIUM_MATERIAL)})
    event.createCustom('spartandeeperdarker:resonarium_javelin', () => {return $WEAPONAPI.createJavelin(RESONARIUM_MATERIAL)})
    event.createCustom('spartandeeperdarker:resonarium_boomerang', () => {return $WEAPONAPI.createBoomerang(RESONARIUM_MATERIAL)})
    event.createCustom('spartandeeperdarker:resonarium_battleaxe', () => {return $WEAPONAPI.createBattleaxe(RESONARIUM_MATERIAL)})
    event.createCustom('spartandeeperdarker:resonarium_flanged_mace', () => {return $WEAPONAPI.createFlangedMace(RESONARIUM_MATERIAL)})
    event.createCustom('spartandeeperdarker:resonarium_glaive', () => {return $WEAPONAPI.createGlaive(RESONARIUM_MATERIAL)})
    event.createCustom('spartandeeperdarker:resonarium_quarterstaff', () => {return $WEAPONAPI.createQuarterstaff(RESONARIUM_MATERIAL)})
    event.createCustom('spartandeeperdarker:resonarium_scythe', () => {return $WEAPONAPI.createScythe(RESONARIUM_MATERIAL)})
})




StartupEvents.registry('item', event => {
    event.createCustom('spartandeeperdarker:warden_dagger', () => {return $WEAPONAPI.createDagger(WARDEN_MATERIAL)})
    event.createCustom('spartandeeperdarker:warden_parrying_dagger', () => {return $WEAPONAPI.createParryingDagger(WARDEN_MATERIAL)})
    event.createCustom('spartandeeperdarker:warden_longsword', () => {return $WEAPONAPI.createLongsword(WARDEN_MATERIAL)})
    event.createCustom('spartandeeperdarker:warden_katana', () => {return $WEAPONAPI.createKatana(WARDEN_MATERIAL)})
    event.createCustom('spartandeeperdarker:warden_saber', () => {return $WEAPONAPI.createSaber(WARDEN_MATERIAL)})
    event.createCustom('spartandeeperdarker:warden_rapier', () => {return $WEAPONAPI.createRapier(WARDEN_MATERIAL)})
    event.createCustom('spartandeeperdarker:warden_greatsword', () => {return $WEAPONAPI.createGreatsword(WARDEN_MATERIAL)})
    event.createCustom('spartandeeperdarker:warden_battle_hammer', () => {return $WEAPONAPI.createBattleHammer(WARDEN_MATERIAL)})
    event.createCustom('spartandeeperdarker:warden_warhammer', () => {return $WEAPONAPI.createWarhammer(WARDEN_MATERIAL)})    
    event.createCustom('spartandeeperdarker:warden_spear', () => {return $WEAPONAPI.createSpear(WARDEN_MATERIAL)})
    event.createCustom('spartandeeperdarker:warden_halberd', () => {return $WEAPONAPI.createHalberd(WARDEN_MATERIAL)})
    event.createCustom('spartandeeperdarker:warden_pike', () => {return $WEAPONAPI.createPike(WARDEN_MATERIAL)})
    event.createCustom('spartandeeperdarker:warden_lance', () => {return $WEAPONAPI.createLance(WARDEN_MATERIAL)})
    event.createCustom('spartandeeperdarker:warden_longbow', () => {return $WEAPONAPI.createLongbow(WARDEN_MATERIAL)})
    event.createCustom('spartandeeperdarker:warden_heavy_crossbow', () => {return $WEAPONAPI.createHeavyCrossbow(WARDEN_MATERIAL)})
    event.createCustom('spartandeeperdarker:warden_throwing_knife', () => {return $WEAPONAPI.createThrowingKnife(WARDEN_MATERIAL)})
    event.createCustom('spartandeeperdarker:warden_tomahawk', () => {return $WEAPONAPI.createTomahawk(WARDEN_MATERIAL)})
    event.createCustom('spartandeeperdarker:warden_javelin', () => {return $WEAPONAPI.createJavelin(WARDEN_MATERIAL)})
    event.createCustom('spartandeeperdarker:warden_boomerang', () => {return $WEAPONAPI.createBoomerang(WARDEN_MATERIAL)})
    event.createCustom('spartandeeperdarker:warden_battleaxe', () => {return $WEAPONAPI.createBattleaxe(WARDEN_MATERIAL)})
    event.createCustom('spartandeeperdarker:warden_flanged_mace', () => {return $WEAPONAPI.createFlangedMace(WARDEN_MATERIAL)})
    event.createCustom('spartandeeperdarker:warden_glaive', () => {return $WEAPONAPI.createGlaive(WARDEN_MATERIAL)})
    event.createCustom('spartandeeperdarker:warden_quarterstaff', () => {return $WEAPONAPI.createQuarterstaff(WARDEN_MATERIAL)})
    event.createCustom('spartandeeperdarker:warden_scythe', () => {return $WEAPONAPI.createScythe(WARDEN_MATERIAL)})
})


StartupEvents.registry("item", (e) => {
    e.create("minecraft:copper_axe", "axe")
        .texture('kubejs:item/copper_axe')
        .tier("copper")
        .rarity("common")
        .displayName("Copper Axe");
});

StartupEvents.registry("item", (e) => {
    e.create("minecraft:copper_sword", "sword")
        .texture('kubejs:item/copper_sword')
        .tier("copper")
        .rarity("common")
        .displayName("Copper Sword");
});

StartupEvents.registry("item", (e) => {
    e.create("minecraft:copper_shovel", "shovel")
        .texture('kubejs:item/copper_shovel')
        .tier("copper")
        .rarity("common")
        .displayName("Copper Shovel");
});

StartupEvents.registry("item", (e) => {
    e.create("minecraft:copper_hoe", "hoe")
      .texture('kubejs:item/copper_hoe')
        .tier("copper")
        .rarity("common")
        .displayName("Copper Hoe");
});

StartupEvents.registry("item", (e) => {
    e.create("minecraft:copper_pickaxe", "pickaxe")
      .texture('kubejs:item/copper_pickaxe')
        .tier("copper")
        .rarity("common")
        .displayName("Copper Pickaxe");
});

StartupEvents.registry("item", (e) => {
    e.create("farmersdelight:copper_knife", "farmersdelight:knife")
      .texture('kubejs:item/copper_knife')
        .tier("copper")
        .rarity("common")
        .displayName("Copper Knife");
});


StartupEvents.registry("item", (e) => {
    e.create("farmersdelight:wooden_knife", "farmersdelight:knife")
      .texture('kubejs:item/wooden_knife')
        .tier("wooden")
        .rarity("common")
        .displayName("Wooden Knife")
        .attackDamageBaseline(-0.1);
});


  StartupEvents.registry('item', event => {
    event.create('spelunkery:bedrock_buster', 'pickaxe')
      .displayName("Bedrock Buster")
      .texture('kubejs:item/bedrock_buster')
      .rarity('UNCOMMON')
      .tier("bedrock_buster")
      })


    ItemEvents.toolTierRegistry((event) => {
        event.add("bedrock_buster", (tier) => {
            tier.level = 1
            tier.uses = 50
            tier.speed = 0.2
            tier.attackDamageBonus = 0.1
            tier.enchantmentValue = 3
            tier.repairIngredient = "minecraft:netherite_ingot"
        })
    })


ItemEvents.toolTierRegistry((event) => {
    event.add("copper", (tier) => {
        tier.level = 1
        tier.uses = 145
        tier.speed = 2.5
        tier.attackDamageBonus = 1.5
        tier.enchantmentValue = 20
        tier.repairIngredient = "#forge:ingots/copper"
    })
    const CopperTier = new $ForgeTier(0, 32, 12, 0, 22, $BlockTags.create("minecraft:needs_copper_tool"), () => Ingredient.of("#forge:ingots/copper"))
    $TierSortingRegistry.registerTier(CopperTier, "copper", [$Tiers.STONE], [$Tiers.IRON])
})

ItemEvents.modification(event => {
    event.modify("minecraft:copper_axe", item => {
        item.tier = $TierSortingRegistry.byName("copper")
    })
})

ItemEvents.modification(event => {
    event.modify("minecraft:copper_pickaxe", item => {
        item.tier = $TierSortingRegistry.byName("copper")
    })
})

ItemEvents.modification(event => {
    event.modify("minecraft:copper_sword", item => {
        item.tier = $TierSortingRegistry.byName("copper")
    })
})

ItemEvents.modification(event => {
    event.modify("minecraft:copper_shovel", item => {
        item.tier = $TierSortingRegistry.byName("copper")
    })
})

ItemEvents.modification(event => {
    event.modify("minecraft:copper_hoe", item => {
        item.tier = $TierSortingRegistry.byName("copper")
    })
})


ItemEvents.modification(event => {
    event.modify("farmersdelight:copper_knife", item => {
        item.tier = $TierSortingRegistry.byName("copper")
    })
})




ItemEvents.toolTierRegistry((event) => {
    event.add("silver", (tier) => {
        tier.level = 2
        tier.uses = 195
        tier.speed = 1,5
        tier.attackDamageBonus = 1.2
        tier.enchantmentValue = 25
        tier.repairIngredient = "#forge:ingots/silver"
    })
    const SilverTier = new $ForgeTier(0, 32, 12, 0, 22, $BlockTags.create("oreganized:needs_silver_tool"), () => Ingredient.of("#forge:ingots/silver"))
    $TierSortingRegistry.registerTier(SilverTier, "silver", [$Tiers.WOOD], [])
})

ItemEvents.modification(event => {
    event.modify("oreganized:silver_axe", item => {
        item.tier = $TierSortingRegistry.byName("silver")
    })
})

ItemEvents.modification(event => {
    event.modify("oreganized:silver_pickaxe", item => {
        item.tier = $TierSortingRegistry.byName("silver")
    })
})

ItemEvents.modification(event => {
    event.modify("oreganized:silver_sword", item => {
        item.tier = $TierSortingRegistry.byName("silver")
    })
})

ItemEvents.modification(event => {
    event.modify("oreganized:silver_shovel", item => {
        item.tier = $TierSortingRegistry.byName("silver")
    })
})

ItemEvents.modification(event => {
    event.modify("oreganized:silver_hoe", item => {
        item.tier = $TierSortingRegistry.byName("silver")
    })
})


ItemEvents.modification(event => {
    event.modify("farmersdelight:silver_knife", item => {
        item.tier = $TierSortingRegistry.byName("silver")
    })
})




StartupEvents.registry("item", (e) => {
    e.create("oreganized:silver_axe", "axe")
        .texture('kubejs:item/silver_axe')
        .tier("silver")
        .rarity("common")
        .displayName("Silver Axe");
});

StartupEvents.registry("item", (e) => {
    e.create("oreganized:silver_sword", "sword")
        .texture('kubejs:item/silver_sword')
        .tier("silver")
        .rarity("common")
        .displayName("Silver Sword");
});

StartupEvents.registry("item", (e) => {
    e.create("oreganized:silver_shovel", "shovel")
        .texture('kubejs:item/silver_shovel')
        .tier("silver")
        .rarity("common")
        .displayName("Silver Shovel");
});

StartupEvents.registry("item", (e) => {
    e.create("oreganized:silver_hoe", "hoe")
      .texture('kubejs:item/silver_hoe')
        .tier("silver")
        .rarity("common")
        .displayName("Silver Hoe");
});

StartupEvents.registry("item", (e) => {
    e.create("oreganized:silver_pickaxe", "pickaxe")
      .texture('kubejs:item/silver_pickaxe')
        .tier("silver")
        .rarity("common")
        .displayName("Silver Pickaxe");
});

StartupEvents.registry("item", (e) => {
    e.create("farmersdelight:silver_knife", "farmersdelight:knife")
      .texture('kubejs:item/silver_knife')
        .tier("silver")
        .rarity("common")
        .displayName("Silver Knife");
});



ItemEvents.toolTierRegistry((event) => {
    event.add("bronze", (tier) => {
        tier.level = 0
        tier.uses = 220
        tier.speed = 1,5
        tier.attackDamageBonus = 1.8
        tier.enchantmentValue = 25
        tier.repairIngredient = "#forge:ingots/bronze"
    })
    const bronzeTier = new $ForgeTier(0, 32, 12, 0, 22, $BlockTags.create("create:needs_bronze_tool"), () => Ingredient.of("#forge:ingots/bronze"))
    $TierSortingRegistry.registerTier(bronzeTier, "bronze", [$Tiers.WOOD], [])
})

ItemEvents.modification(event => {
    event.modify("create:bronze_axe", item => {
        item.tier = $TierSortingRegistry.byName("bronze")
    })
})

ItemEvents.modification(event => {
    event.modify("create:bronze_pickaxe", item => {
        item.tier = $TierSortingRegistry.byName("bronze")
    })
})

ItemEvents.modification(event => {
    event.modify("create:bronze_sword", item => {
        item.tier = $TierSortingRegistry.byName("bronze")
    })
})

ItemEvents.modification(event => {
    event.modify("create:bronze_shovel", item => {
        item.tier = $TierSortingRegistry.byName("bronze")
    })
})

ItemEvents.modification(event => {
    event.modify("create:bronze_hoe", item => {
        item.tier = $TierSortingRegistry.byName("bronze")
    })
})


ItemEvents.modification(event => {
    event.modify("farmersdelight:bronze_knife", item => {
        item.tier = $TierSortingRegistry.byName("bronze")
    })
})

StartupEvents.registry("item", (e) => {
    e.create("create:bronze_axe", "axe")
        .texture('kubejs:item/bronze_axe')
        .tier("bronze")
        .rarity("common")
        .displayName("Bronze Axe");
});

StartupEvents.registry("item", (e) => {
    e.create("create:bronze_sword", "sword")
        .texture('kubejs:item/bronze_sword')
        .tier("bronze")
        .rarity("common")
        .displayName("Bronze Sword");
});

StartupEvents.registry("item", (e) => {
    e.create("create:bronze_shovel", "shovel")
        .texture('kubejs:item/bronze_shovel')
        .tier("bronze")
        .rarity("common")
        .displayName("Bronze Shovel");
});

StartupEvents.registry("item", (e) => {
    e.create("create:bronze_hoe", "hoe")
      .texture('kubejs:item/bronze_hoe')
        .tier("bronze")
        .rarity("common")
        .displayName("Bronze Hoe");
});

StartupEvents.registry("item", (e) => {
    e.create("create:bronze_pickaxe", "pickaxe")
      .texture('kubejs:item/bronze_pickaxe')
        .tier("bronze")
        .rarity("common")
        .displayName("Bronze Pickaxe");
});

StartupEvents.registry("item", (e) => {
    e.create("farmersdelight:bronze_knife", "farmersdelight:knife")
      .texture('kubejs:item/bronze_knife')
        .tier("bronze")
        .rarity("common")
        .displayName("Bronze Knife");
});
