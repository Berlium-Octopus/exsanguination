// From YukkuriC, modified
ClientEvents.tick(e => {
  if (!Client.player.potionEffects.isActive('lostcities:unlisted')) return
  if (!Client.paused && Client.player.age % 1) return

  // Sprint Cancel
  Client.player.setSprinting(false)
  Client.options.keySprint.setDown(false)
  // Fancy Display Nuke
  if (Client.currentScreen?.class == 'class net.minecraft.client.gui.screens.PauseScreen') {
    Client.forceSetScreen(null)
  }
  if (Client.currentScreen?.class == 'class betteradvancements.common.gui.BetterAdvancementsScreen') {
    Client.forceSetScreen(null)
  }
  if (Client.currentScreen?.class == 'class fuzs.easyanvils.client.gui.screens.inventory.NameTagEditScreen') {
    Client.forceSetScreen(null)
  }
})

ClientEvents.lang('en_us', event => {
  let discLang = {
    'voidlit_nether': 'Berlium - Under The Voidlit Nether'
  }
  for (let [id, txt] of Object.entries(discLang)) {
    event.add('exsanguination', `item.exsanguination.music_disc_${id}`, 'Music Disc')
    event.add('exsanguination', `item.exsanguination.music_disc_${id}.desc`, txt)
  }
})


JEIEvents.information(event => {
  event.addItem(["sculkhorde:calcite_clump"], ["Due to how delicate this ore is, only Resonarium and Warden tools can extract the Calcite in the ore"])
  event.addItem(["minecraft:compass", "alexsmobs:dimensional_carver"], ["When a compass that is loaded with a lodestone's location is on the offhand and a dimensional carver is on the mainhand, you can create a proto-waystone that consumes the compass after use"])
  event.addItem('sculkhorde:blade_of_purity', ['A sword that can purify land and inflicts purity on Sculk Mobs.'])
  /*
  event.addItem(["alexscaves_torpedoes:shadow_sword",
    "alexscaves_torpedoes:shadow_pickaxe",
    "alexscaves_torpedoes:shadow_axe",
    "alexscaves_torpedoes:shadow_shovel",
    "alexscaves_torpedoes:shadow_hoe"], "Very clinggy toolset, might give you rabies if you don't hold on")
    */
  event.addItem('spelunkers_charm:rock', ['Obtained from smashing stone with a wooden club.'])
  event.addItem('luminous_beasts:jungle_pendant', ['When on offhand, grants a 50% chance to give resistance when killing a target but when worn as a belt-piece it prevents stunning'])
  event.addItem('spelunkers_charm:deepslate_rock', ['Obtained from deepslate and cobbled deepslate.'])
  event.addItem('minecraft:arrow_fletching', ['Right click feathers on a fletching table.'])
  event.addItem('#immersive_weathering:bark', ['Some logs are weak enough to extract their bark with only a wooden knife.'])
  event.addItem('biomesoplenty:glowworm_silk', ['Provides immunity to Poison and Wither.'])
  event.addItem('alexscaves:game_controller', ['Provides immunity to Fear and Vulnerablility.'])
  event.addItem('rootoffear:agitated_primitive_heart', ['Provides Internal Warmth.'])
  event.addItem(['deeperdarker:sliced_heart_of_the_deep', 'deeperdarker:heart_of_the_deep'], ['Provides Internal Chill.'])
  event.addItem(["spartanweaponry:netherite_dagger", "farmersdelight:netherite_knife", "alexscavesdelight:tectonic_knife"], ["When having the Haste effect you can directly rip The Heart Of The Deep out of the Warden's Chest via right click but bewarned your knife will break"])
  event.addItem('spelunkery:portal_fluid_bottle', ['Opens Nether Portals.'])
  event.addItem("alexsmobs:gazelle_horns", ["The Larper's Horns."])
  event.addItem('cataclysm:meat_shredder', ['Can be used to momuntarily stun/parry the Wilted and when stunned escape seems plausible.'])
  event.addItem('#forge:tools/axes', ['Can be used to momuntarily stun/parry the Wilted and when stunned escape seems plausible.'])
  event.addItem('spelunkery:bedrock_buster', ['Use it to mine Bedrock.'])
  event.addItem("jeg:advanced_firearm_blueprint", ["Could be found by bartering with Piglins or by fishing in Nether lava."])
  event.addItem("jeg:firearm_blueprint", ["Could be found in mineshafts, by villager trading, and other metheods."])
  event.addItem('minecraft:flint_and_steel', ['Not powerful enough to tear apart space or create a portal.'])
  event.addItem(['alexsmobs:roadrunner_boots', 'luminous_beasts:shellmet_helmet'], ['Faster movement speed in sand and or in desert biomes.'])
  event.addItem('#create:pressurized_air_sources', ['A Weareable Tank the provides pressurized air to equipment that needs it, the collection of air is based on kinetic speed.'])
  event.addItem('luminous_nether:nether_beast_totem', ['Could be found inside of Nether Vases and Mineshafts', 'This totem protects from Exsanguination,', 'Hemorrhage, Nausea and Blooded.'])
  event.addItem('archeological:old_bandages', ['Grants immunity to Mining Fatigue and Weakness.'])
  event.addItem('jeg:flare', ['The flares that are not §4Ominous §0are safe to use while the §4Ominous §0ones will start an incursion.'])
  event.addItem(['biomesoplenty:spider_egg'], 'Provides a Spider Climbing Ability')
  event.addItem(['archeological:ancient_socks'], 'Provides a Double Jump Ability')
  event.addItem(['luminous_nether:pale_melon_slice'], 'Converts Piglin Cultists to Piglins when Vulnerable, these Piglins are immune to zombification')
  event.addItem(['luminous_nether:popshroom_juice'], 'Converts Piglin to Piglins Cultists when Stunned')
  event.addItem(['alexscavesdelight:filled_heart_of_iron'], 'Provides- wait,Dear god no....')
  event.addItem('minecraft:stick', ['Can be used to light up campfires'])
  event.addItem('sculkhorde:soul_disrupter', ['Weakens Sculk Reapers when pointed at.'])
  event.addItem(['minecraft:campfire', 'minecraft:soul_campfire', 'netherexp:ancient_campfire'], ['Burns infinitely if fed a Cinder Flour', 'Converted back to a normal campfire via wrench'])
  event.addItem(['alexscaves:azure_neodymium_ingot'], 'Heart Of Iron hates these')
  event.addItem('alexsmobs:emu_leggings', ['Has a chance to dodge projectiles.'])
  event.addItem('alexsmobs:flying_fish_boots', ['Faster swimming speed in water and provides a leaping ability when in water.'])
  event.addItem('vinery:stinky_wine', ['Would repel mousquitoes in exchange for some hearts.'])
  event.addItem('jeg:tech_trash', ['Found inside most citizens of the magnetic caves.'])
  event.addItem('alexsmobs:rocky_chestplate', ['Grants the ability to roll', '"Got places to go gonna follow my way home."-???'])
  event.addItem('biomemakeover:ectoplasm', ['Could be used in a composter to start soul soil and to uncarve Pale Melons'])
  event.addItem('luminous_nether:molten_coal', ['[Offhand]', 'Grants Strength in lava.'])
  event.addItem('luminous_beasts:mummy_wraps_helmet', ['Immunity to Weakness and Poison.'])
  event.addItem('luminous_beasts:bone_rattle', ['[Offhand]', 'Summons something after death.'])
  event.addItem('deeperdarker:bloom_berries', ['Clears most Sculk related effects'])
  event.addItem('luminous_beasts:yeti_horn', ['[Offhand]', 'Faster Regeneration in colder biomes.'])
  event.addItem('luminous_beasts:phoenix_feather', ['[Offhand]', 'Keeps items upon death.'])
  event.addItem('luminous_beasts:gator_tooth', ['[Offhand]', 'Chance to poison victims.'])
  event.addItem('luminous_beasts:viper_tooth', ['[Offhand]', 'Resistance and Night Vision in water.'])
  event.addItem('spartanweaponry:simple_handle', ['Created by right clicking this item on grass and ferns'])
  event.addItem('alexsmobs:spectral_dagger', ['When activated could pierce the user into the Spectral Realm for a moment'])
  event.addItem(['alexsmobs:shattered_dimensional_carver', 'alexsmobs:dimensional_carver'], ['Right Click to tear apart space'])
  event.addItem('netherdepthsupgrade:soul_sucker_boots', ['Provides built in Soul Speed'])
  event.addItem('minecraft:iron_block', ['Right click an anvil to repair it'])
  event.addItem('luminous_beasts:magic_root', ['[Offhand]', 'Chance to slow victims.'])
  event.addItem(["spelunkers_charm:candle_helmet", "spelunkers_charm:candle_on_helmet"], ['When holding rusty tools you can stun victims with them'])
  event.addItem('luminous_beasts:pumpkin_helmet_helmet', ['Strength based on moon phases.'])
  event.addItem(["minecraft:blaze_powder", "minecraft:blaze_rod"], ["A Diamond Grindstone is used to obtain it's powder."])
  event.addItem(['luminous_beasts:spore_bundle', 'luminous_nether:spore_bundle'], ['Explodes and harms attackers after death.'])
});

JEIEvents.hideItems(event => {
  event.hide([
    'trials:mace',
    'luminous_nether:ash_wall_candle',
    'luminous_nether:nether_wall_candle',
    'jeg:minigun',
    'luminous_nether:ectoplasm_ball',
    'rootoffear:faded_oak_wood_corrupt1',
    'rootoffear:faded_oak_wood_corrupt2',
    'rootoffear:faded_oak_wood_corrupt3',
    'rootoffear:faded_oak_log_phase3',
    'rootoffear:faded_oak_log_phase2',
    'rootoffear:faded_oak_log_phase1',
    'luminous_beasts:executioner_cowl_helmet',
    'deeperdarker:warden_upgrade_smithing_template',
    'supplementaries:altimeter',
    'alexscavesdelight:toxic_hamburger',
    'alexscavesdelight:uranium_pie',
    'toughasnails:thermometer',
    'jeg:raw_brimstone'
  ])
  event.hide('spelunkers_charm:mining_helmet')
  event.hide('#spartanweaponry:platinum_weapons')
  event.hide('#spartanweaponry:tin_weapons')
  event.hide('spelunkery:item_magnet')
  event.hide('spelunkery:copper_nugget')
  event.hide('vinery:apple_juice')
  event.hide('jeg:combat_pistol')
  event.hide([
    "minecraft:wooden_shovel",
    "minecraft:wooden_pickaxe",
    "minecraft:wooden_hoe",
    "minecraft:wooden_axe",
    "spartanweaponry:wooden_flanged_mace"
  ])
  event.hide('jeg:combat_rifle')
  event.hide([
    "minecraft:wooden_sword",
    "spartanweaponry:wooden_dagger",
    "spartanweaponry:wooden_rapier",
    "spartanweaponry:wooden_saber",
    "spartanweaponry:wooden_katana",
    "spartanweaponry:wooden_longsword",
    "spartanweaponry:wooden_parrying_dagger",
    "spartanweaponry:wooden_greatsword",
    "spartanweaponry:wooden_battle_hammer",
    "spartanweaponry:wooden_warhammer",
    "spartanweaponry:wooden_spear",
    "spartanweaponry:wooden_lance",
    "spartanweaponry:wooden_pike",
    "spartanweaponry:wooden_halberd",
    "spartanweaponry:wooden_throwing_knife",
    "spartanweaponry:wooden_tomahawk",
    "spartanweaponry:wooden_javelin",
    "spartanweaponry:wooden_scythe",
    "spartanweaponry:wooden_battleaxe",
    "spartanweaponry:wooden_quarterstaff",
    "spartanweaponry:wooden_glaive",
    "jeg:basalt_brimstone_ore",
    "jeg:brimstone_ore",
    "jeg:blackstone_brimstone_ore"
  ])



  event.hide('#spartanweaponry:aluminum_weapons')
  event.hide('#spartanweaponry:invar_weapons')
  event.hide('spartanweaponry:enderman_head')
  event.hide('#spartanweaponry:contantan_weapons')
  event.hide('spartanshields:aluminum_basic_shield')
  event.hide('spartanshields:invar_basic_shield')
  event.hide('spartanshields:contantan_basic_shield')
  event.hide('spartanshields:aluminum_basic_shield')
  event.hide('spartanshields:invar_basic_shield')
  event.hide('spartanshields:contantan_basic_shield')
  event.hide('spartanshields:aluminum_tower_shield')
  event.hide('spartanshields:invar_tower_shield')
  event.hide('spartanshields:contantan_tower_shield')
  event.hide('spartanshields:stone_basic_shield')
  event.hide('spartanshields:stone_tower_shield')
  event.hide('jeg:compound_bow')
  event.hide('cataclysm:pointed_icicle')
  event.hide('yungscavebiomes:icicle')
  event.hide('luminous_beasts:molten_coal')
  event.hide('toughasnails:iron_purified_water_canteen')
  event.hide('toughasnails:iron_water_canteen')
  event.hide('toughasnails:iron_dirty_water_canteen')
  event.hide('toughasnails:copper_water_canteen')
  event.hide('toughasnails:copper_purified_water_canteen')
  event.hide('toughasnails:copper_dirty_water_canteen')
  event.hide('#spartanweaponry:nickel_weapons')
  event.hide('jeg:monocle_sight')
  event.hide([
    'jeg:tactical_stock',
    'jeg:telescopic_sight',
    'jeg:makeshift_stock',
    'jeg:light_stock',
    'jeg:combat_scope',
    'jeg:weighted_stock',
    'luminous_nether:basalt_executioner_spawn_egg',
    'luminous_beasts:rare_executioner_spawn_egg',
    'luminous_nether:ghost_lantern',
    'luminous_nether:wither_skull_candle',
    'luminous_nether:skull_candle',
    'farmersdelight:beetroot_crate',
    'farmersdelight:carrot_crate',
    'farmersdelight:potato_crate',
    'spartanshields:manasteel_basic_shield',
    'spartanshields:manasteel_tower_shield',
    'spartanshields:terrasteel_basic_shield',
    'spartanshields:terrasteel_tower_shield',
    'spartanshields:elementium_basic_shield',
    'spartanshields:refined_obsidian_basic_shield',
    'spartanshields:refined_glowstone_basic_shield',
    'spartanshields:lapis_lazuli_basic_shield',
    'spartanshields:osmium_basic_shield',
    'spartanshields:elementium_tower_shield',
    'spartanshields:basic_mekanists_basic_shield',
    'spartanshields:basic_mekanists_tower_shield',
    'spartanshields:advanced_mekanists_basic_shield',
    'spartanshields:advanced_mekanists_tower_shield',
    'spartanshields:elite_mekanists_basic_shield',
    'spartanshields:dark_steel_riot_tower_shield',
    'spartanshields:dark_steel_riot_basic_shield',
    'spartanshields:ultimate_mekanists_tower_shield',
    'spartanshields:ultimate_mekanists_basic_shield',
    'spartanshields:elite_mekanists_tower_shield',
    'spartanshields:signalum_basic_shield',
    'spartanshields:signalum_tower_shield',
    'spartanshields:lumium_basic_shield',
    'spartanshields:lumium_tower_shield',
    'spartanshields:enderium_basic_shield',
    'spartanshields:nickel_basic_shield',
    'spartanshields:nickel_tower_shield',
    'spartanshields:constantan_tower_shield',
    'spartanshields:constantan_basic_shield',
    'spartanshields:enderium_tower_shield',
    'spartanshields:platinum_basic_shield',
    'spartanshields:platinum_tower_shield',
    'spartanshields:tin_tower_shield',
    'spartanshields:tin_basic_shield',
    'biomesoplenty:willow_sapling',
    'biomesoplenty:willow_wood',
    'biomesoplenty:stripped_willow_wood',
    'biomesoplenty:stripped_willow_log',
    'biomesoplenty:willow_planks',
    'biomesoplenty:willow_fence',
    'biomesoplenty:willow_stairs',
    'biomesoplenty:willow_slab',
    'biomesoplenty:willow_fence_gate',
    'biomesoplenty:willow_door',
    'biomesoplenty:willow_trapdoor',
    'biomesoplenty:willow_button',
    'biomesoplenty:willow_pressure_plate',
    'biomesoplenty:willow_hanging_sign',
    'biomesoplenty:willow_sign',
    'biomesoplenty:willow_log',
    'biomesoplenty:willow_leaves',
    "suppsquared:biomesoplenty/item_shelf_willow",
    "supplementaries:biomesoplenty/sign_post_willow",
    "biomesoplenty:willow_chest_boat",
    'biomesoplenty:willow_boat',
    'immersive_weathering:biomesoplenty/willow_bark',
    'immersive_weathering:biomesoplenty/willow_leaf_pile',
    'vinery:dark_cherry_chair',
    'jeg:pump_shotgun',
    'jeg:combat_pistol',
    'jeg:grenade_launcher',
    'jeg:semi_auto_pistol',
    'scalinghealth:power_crystal'
  ])
})



JEIEvents.hideItems(event => {
  event.hide('spartanweaponry:leather_heavy_crossbow')
  event.hide('spartanweaponry:leather_longbow')
  event.hide('immersive_weathering:cataclysm/chorus_scales')
  event.hide('jeg:gunmetal_workbench')
  event.hide('jeg:gunnite_workbench')
  event.hide('jeg:scrap_workbench')
  event.hide('jeg:pocket_bubble')
  event.hide('jeg:blueprint_workbench')
  event.hide('tide:stone_fishing_rod')
  event.hide('netherdepthsupgrade:lava_fishing_rod')
  event.hide('supplementaries:pedestal')
  event.hide('jeg:schematic_station')
  event.hide('outer_end:azure_vertical_planks')
  event.hide('toughasnails:empty_copper_canteen')
  event.hide('toughasnails:empty_iron_canteen')
  event.hide('alexscavesdelight:dried_tripodfish')
});

ItemEvents.tooltip(event => {
  event.addAdvanced(['jeg:raw_brimstone', 'jeg:brimstone_crystal', 'jeg:tech_trash', 'jeg:scrap'], (item, advanced, text) => {
    text.remove(1)
  })
});

ItemEvents.tooltip(event => {
  event.addAdvanced(['luminous_beasts:jungle_pendant'], (item, advanced, text) => {
    text.remove(1)
  })
});


ItemEvents.tooltip(event => {
  event.addAdvanced(['jeg:repair_kit', 'sculkhorde:soulite_shard', 'sculkhorde:purification_flask', 'sculkhorde:infestation_purifier', 'sculkhorde:diasculk', 'sculkhorde:ferrisculk'], (item, advanced, text) => {
    text.remove(1)
  })
});


ItemEvents.tooltip(event => {
  event.addAdvanced(['spartanweaponry:stray_skull', 'spartanweaponry:witch_head', 'spartanweaponry:illager_head', 'spartanweaponry:blaze_head', 'spartanweaponry:enderman_head', 'spartanweaponry:zombified_piglin_head', 'spartanweaponry:husk_head', 'spartanweaponry:spider_head', 'spartanweaponry:cave_spider_head', 'spartanweaponry:drowned_head'], (item, advanced, text) => {
    text.remove(1)
  })
});

ItemEvents.tooltip(event => {
  event.addAdvanced(['sculkhorde:essence_of_purity', 'spartanweaponry:dynamite', 'sculkhorde:blade_of_purity'], (item, advanced, text) => {
    text.remove(1)
    text.remove(1)
  })
})


ItemEvents.tooltip(event => {
  event.addAdvanced('@spartanweaponry', (item, advanced, text) => {
    if (event.shift) {
      text.remove(1)
      text.remove(1)
      text.remove(1)
      text.remove(1)
    }
    let text_to_remove = "T"
    let text_to_remove2 = "-"
    text.removeIf(tip => tip.toString().indexOf(text_to_remove) != -1)
    text.removeIf(tip => tip.toString().indexOf(text_to_remove2) != -1)
  })
})

ItemEvents.tooltip(event => {
  event.addAdvanced('@spartandeeperdarker', (item, advanced, text) => {
    if (event.shift) {
      text.remove(1)
      text.remove(1)
      text.remove(1)
      text.remove(1)
    }
    let text_to_remove = "T"
    let text_to_remove2 = "-"
    text.removeIf(tip => tip.toString().indexOf(text_to_remove) != -1)
    text.removeIf(tip => tip.toString().indexOf(text_to_remove2) != -1)
  })
})

ItemEvents.tooltip(event => {

  event.addAdvanced('#spartanweaponry:netherite_weapons', (item, advanced, text) => {
    text.remove(1)
    text.remove(1)
    if (event.shift) {
      text.remove(1)
      text.remove(1)
    }
  })
  event.addAdvanced(["scalinghealth:medkit",'#spartanweaponry:arrows'], (item, advanced, text) => {
    text.remove(1)
    text.remove(1)
  })
  event.addAdvanced('#spartanweaponry:bolts', (item, advanced, text) => {
    text.remove(1)
    text.remove(1)
    text.remove(1)
  })
  event.addAdvanced(['#spartanweaponry:longbows', '#spartanweaponry:heavy_crossbows'], (item, advanced, text) => {
    text.remove(1)
    text.remove(1)
    if (!event.shift) {
      text.remove(1)
      text.remove(1)
      text.remove(1)
    } else {
      text.remove(1)
      text.remove(1)
    }
  })
  event.addAdvanced(['spartanweaponry:netherite_longbow'], (item, advanced, text) => {
    if (event.shift) {
      text.remove(1)
    }
  })

  event.addAdvanced(['#spartanweaponry:boomerangs'], (item, advanced, text) => {
    if (!event.shift) {
      text.remove(1)
      text.remove(1)
    }
  })
  event.addAdvanced(['cataclysm:cursed_bow'], (item, advanced, text) => {
      text.remove(1)
      text.remove(1)
  })
  event.addAdvanced(["#spartanweaponry:throwing_knives","#spartanweaponry:tomahawks","#spartanweaponry:javelins"], (item, advanced, text) => {
    text.remove(1)
    text.remove(1)
    text.remove(1)
  })
  
  event.addAdvanced(['spartanweaponry:netherite_heavy_crossbow', "#spartanweaponry:warhammers","#spartanweaponry:katanas","#spartanweaponry:rapiers","#spartanweaponry:flanged_maces", "#spartanweaponry:battleaxes", "#spartanweaponry:longswords", "#spartanweaponry:pikes", "#spartanweaponry:quarterstaves"], (item, advanced, text) => {
    if (event.shift) {
      text.remove(1)
      text.remove(1)
    }
    })
  event.addAdvanced(['#spartanweaponry:greatswords',"#spartanweaponry:lances","#spartanweaponry:halberds","#spartanweaponry:sabers","#spartanweaponry:scythes", "#spartanweaponry:battle_hammers", "#spartanweaponry:glaives"], (item, advanced, text) => {
    if (event.shift) {
      text.remove(1)
      text.remove(1)
      text.remove(1)
      text.remove(1)
    }
  })
})


ItemEvents.tooltip(event => {
  event.addAdvanced(['cataclysm:blazing_grips',
    'cataclysm:wrath_of_the_desert',
    'cataclysm:gauntlet_of_guard',
    'cataclysm:gauntlet_of_bulwark',
    'cataclysm:gauntlet_of_maelstrom',
    'cataclysm:the_incinerator',
    'cataclysm:the_immolator',
    'cataclysm:the_annihilator',
    'cataclysm:meat_shredder',
    'cataclysm:tidal_claws',
    'cataclysm:void_forge',
    'cataclysm:void_assault_shoulder_weapon',
    'cataclysm:wither_assault_shoulder_weapon',
    'cataclysm:laser_gatling',
    'luminous_beasts:shellmet_helmet',
    'cataclysm:ancient_spear'], (item, advanced, text) => {
      text.remove(1)
    })
})


ItemEvents.tooltip(event => {
  event.addAdvanced('jeg:soul_treat', (item, advanced, text) => {
    text.remove(2)
  })
});


ItemEvents.tooltip(event => {
  event.addAdvanced(['cataclysm:infernal_forge', 'cataclysm:bulwark_of_the_flame'], (item, advanced, text) => {
    text.remove(1)
  })
});

ItemEvents.tooltip(event => {
  event.addAdvanced(['luminous_beasts:spore_bundle', 'cataclysm:blessed_amethyst_crab_meat', 'luminous_nether:nether_beast_totem', 'luminous_beasts:ultimate_bestiary', 'luminous_beasts:magic_root', 'luminous_nether:spore_bundle', 'luminous_nether:molten_coal', 'luminous_beasts:mummy_wraps_helmet', 'luminous_beasts:bone_rattle', 'luminous_beasts:phoenix_feather', 'luminous_beasts:gator_tooth', 'luminous_beasts:yeti_horn', 'luminous_beasts:viper_tooth', 'luminous_beasts:pumpkin_helmet_helmet', 'sculkhorde:calcite_ore'], (item, advanced, text) => {
    text.remove(1)
  })
});

ItemEvents.tooltip(event => {
  event.addAdvanced(Item.of('jeg:flare', "{HasRaid:1b,display:{Name:'{\"italic\":false,\"color\":\"red\",\"translate\":\"item.jeg.raid_flare\"}'}}")
    , (item, advanced, text) => {
      text.remove(1)
    })
});

ItemEvents.tooltip(event => {
  event.addAdvanced(['sculkhorde:sculk_enderman_cleaver', 'sculkhorde:soul_disrupter', 'jeg:ectoplasm', 'jeg:gunnite_ingot', 'jeg:gunmetal_ingot', 'jeg:gunmetal_grit'], (item, advanced, text) => {
    text.remove(1)
  })
});

ItemEvents.tooltip(event => {
  event.addAdvanced(['jeg:blaze_round', 'alexsmobs:unsettling_kimono'], (item, advanced, text) => {
    text.remove(1)
  })
});

ItemEvents.tooltip(event => {
  event.addAdvanced([
    "sculkhorde:sculk_living_rock_root",
    "sculkhorde:sculk_bee_nest",
    "sculkhorde:sculk_bee_nest_cell",
    "sculkhorde:sculk_resin",
    "sculkhorde:sculk_acidic_projectile",
    "sculkhorde:ferriscite",
    "sculkhorde:ferriscite_pickaxe",
    "sculkhorde:ferriscite_axe",
    "sculkhorde:ferriscite_shovel",
    "sculkhorde:ferriscite_hoe",
    "sculkhorde:diascite_hoe",
    "sculkhorde:diascite_shovel",
    "sculkhorde:diascite_axe",
    "sculkhorde:diascite_pickaxe",
    "sculkhorde:diascite",
    "cataclysm:soul_render", 
    "cataclysm:the_incinerator",
    "cataclysm:the_annihilator",
    "cataclysm:the_immolator",
    "cataclysm:gauntlet_of_bulwark"
], (item, advanced, text) => {
      text.remove(1)
      text.remove(1)
    })
});

ItemEvents.tooltip(event => {
  event.addAdvanced(['sculkhorde:calcite_clump', 'sculkhorde:eye_of_purity', 'sculkhorde:pure_souls', 'sculkhorde:crying_souls', 'sculkhorde:sculk_sweeper_sword'], (item, advanced, text) => {
    text.remove(1)
  })
});

ItemEvents.tooltip(event => {
  event.addAdvanced(['jeg:explosive_charge', 'sculkhorde:heart_of_purity', 'sculkhorde:heart_of_the_horde', 'sculkhorde:chunk_o_brain', 'sculkhorde:dormant_heart_of_the_horde'], (item, advanced, text) => {
    text.remove(1)
  })
});
ItemEvents.tooltip(event => {
  event.addAdvanced(['jeg:pocket_bubble', 'jeg:ammo_pouch', 'jeg:firearm_blueprint', 'jeg:advanced_firearm_blueprint'], (item, advanced, text) => {
    text.remove(1)
  })
});
ItemEvents.tooltip(event => {
  event.addAdvanced(['jeg:water_bomb'], (item, advanced, text) => {
    text.remove(2)
  })
});
ItemEvents.tooltip(event => {
  event.addAdvanced('cataclysm:bulwark_of_the_flame', (item, advanced, text) => {
    text.remove(1)
    text.remove(1)
  })
})



ItemEvents.tooltip(event => {
  event.add(['scalinghealth:heart_crystal_shard'], '§7The Wilted heart, used to give vitality to armor pieces')
  event.add(['scalinghealth:heart_dust'], '§7An empty unfueled heart, it hungers for health')
  event.add(['alexscavesdelight:cooked_ferrouslime_ball'], '§7Lacking heavy metals, it makes this vaguely edible')
  event.add(['alexscavesdelight:cooked_heart_of_iron'], '§7Formed by melted parts, it could be safely eaten')
  event.add(['cataclysm:necklace_of_the_desert'], '§7Used to wake up something')
  event.add(['mobcompack:hammer'], '§7Mines a 3x3 area but eats away the user')
  event.add(['scalinghealth:power_crystal_shard'], '§7The roots pulse as the days come closer')
  event.add(['tide:fishing_journal'], '§7By Brian Timothy')
  event.add(['luminous_beasts:ultimate_bestiary'], '§6By Mysticist Ripley Lumisaiah')
  event.add(['jeg:advanced_firearm_blueprint'], '§7Used to create specilized firearms from basic ones')
  event.add(['jeg:firearm_blueprint'], '§7Used to create basic firearms')
  event.add(['exsanguination:disc_fragment_void'], '§7Music Disc - Under The Voidlit Nether')

  //event.add([Item.of('patchouli:guide_book', '{"patchouli:book":"alexsmobsinteraction:ami_interaction_wiki"}')], 'Interactions Encyclopedia')
  //event.add([Item.of('patchouli:guide_book', '{"patchouli:book":"alexsmobsinteraction:ami_interaction_wiki"}')], '§7By The AMI Initiative')
});


JEIEvents.addItems(event => {
  event.add('minecraft:bundle')
  event.add('jeg:flare')
  event.add('alexscaves:jelly_bean')
  event.add('alexscaves:game_controller')
})