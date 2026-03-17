// "deeperdarker:sculk prob or Mobtype.(deeperdarker:sculk) or .Mobtype("SCULK")" <- Throwback to the time i don't know 
ServerEvents.tags('worldgen/biome', event => {
  event.add('toughasnails:purified_water_biomes',['minecraft:frozen_peaks','minecraft:desert','minecraft:badlands','minecraft:wooded_badlands','minecraft:frozen_river','minecraft:eroded_badlands','biomesoplenty:volcano','biomesoplenty:volcanic_plains','minecraft:snowy_plains','alexscaves:primordial_caves','biomesoplenty:origin_valley','minecraft:cherry_grove','minecraft:ice_spikes','biomesoplenty:cold_desert','biomesoplenty:hot_springs','biomesoplenty:mystic_grove','biomesoplenty:end_corruption'])
  event.add('toughasnails:dirty_water_biomes',['biomesoplenty:rainforest','biomesoplenty:end_reef','biomesoplenty:rocky_rainforest','biomesoplenty:gravel_beach','alexscaves:abyssal_chasm','biomesoplenty:marsh','minecraft:lush_caves','minecraft:deep_dark','biomesoplenty:wetland','biomesoplenty:mediterranean_forest','biomesoplenty:wasteland','biomesoplenty:end_wilds','minecraft:dripstone_caves','biomesoplenty:floodplain','biomesoplenty:marsh','minecraft:old_growth_spruce_taiga','biomesoplenty:wasteland_steppe','biomesoplenty:fungal_jungle','minecraft:mushroom_fields','biomesoplenty:bayou','biomesoplenty:floodplain','minecraft:jungle','deeperdarker:overcast_columns','deeperdarker:blooming_caverns','deeperdarker:echoing_forest','deeperdarker:deeplands'])
  event.add('toughasnails:icy_biomes',['alexscaves:candy_cavity'])
})


ServerEvents.tags('worldgen/structure', event => {
  event.add("minecraft:village", ['#repurposed_structures:collections/villages'])
}
)


ServerEvents.tags('spartanweaponry:weapon_traits', event => {
  event.add('spartanweaponry:cestus','spartanweaponry:versatile_axe')
  // Soups as hot food
  event.add('spartanweaponry:cestus','spartanweaponry:versatile_shovel')
})

ServerEvents.tags('spartanweaponry:weapon_traits', event => {
  event.remove('spartanweaponry:flanged_mace','spartanweaponry:undead_damage_bonus')
  event.remove('spartanweaponry:katana','spartanweaponry:two_handed_1')
  event.add('spartanweaponry:sabre','spartanweaponry:two_handed_2')
  event.add('spartanweaponry:katana','spartanweaponry:heavy_3')
  event.add('spartanweaponry:sabre','spartanweaponry:heavy_3')
  event.remove('spartanweaponry:katana','spartanweaponry:sweep_1')
  event.add('spartanweaponry:flanged_mace','spartanweaponry:block_melee')
  event.add('spartanweaponry:flanged_mace','spartanweaponry:sweep_1')
  event.add('spartanweaponry:scythe','spartanweaponry:heavy_1')
  event.remove('spartanweaponry:dagger','spartanweaponry:backstab_damage_bonus')
  event.add('spartanweaponry:dagger','spartanweaponry:backstab_damage_bonus')
})



ServerEvents.tags('item', event => {
  event.add('exsanguination:netherite_repair',
    [
    'minecraft:netherite_ingot',
    'minecraft:diamond_ingot',
    'alexsmobs:mimicream'
  ]  
  )

  event.add('minecraft:plank_axe',
  ['minecraft:iron_axe',
  'deeperdarker:resonarium_axe',
  'sculkhorde:ferriscite_axe',
  'deeperdarker:warden_axe',
  'sculkhorde:diascite_axe',
  'cataclysm:meat_shredder',
  'alexscaves_torpedoes:shadow_axe',
  'alexscaves_torpedoes:scarlet_axe',
  'alexscaves_torpedoes:azure_axe',
  'luminous_nether:gold_cultist_axe',
  'minecraft:golden_axe',
  'minecraft:diamond_axe',
  'cataclysm:black_steel_axe'])

})

  ServerEvents.tags('item', event => {
    event.add('neoforge:decorativetag',
      [
      '#minecraft:candles'
    ]
    )})

    ServerEvents.tags('item', event => {
      event.add('forge:decorativetag',
        [
        '#minecraft:candles'
      ]
      )})

  ServerEvents.tags('item', event => {
    event.add('exsanguination:flint',
      [
      'minecraft:flint',
      'alexsmobs:mimicream'
    ]
    )})

ServerEvents.tags('item', event => {
  event.add('toughasnails:thirst/2_thirst_drinks',
    [
    'alexscavesdelight:chocolate_ice_cream',
    'alexscavesdelight:vanilla_ice_cream',
    'alexscavesdelight:sweetberry_ice_cream',
    'farmersdelight:noodle_soup',
    'alexsdelight:acacia_blossom_soup',
    'farmersdelight:pumpkin_soup',
    'alexscavesdelight:toxic_noodle_soup',
    'alexscavesdelight:sea_pig_soup',
    'alexscaves:primordial_soup',
    'alexscavesdelight:primal_noodle_soup',
    'netherdepthsupgrade:baked_magmacubefish_stew',
    'netherdepthsupgrade:baked_blazefish_stew',
    'netherdepthsupgrade:baked_searing_cod_stew',
    'netherdepthsupgrade:baked_obsidianfish_stew',
    'netherdepthsupgrade:baked_lava_pufferfish_stew',
    'farmersdelight:fish_stew'])
event.add('toughasnails:thirst/6_thirst_drinks',
  ['alexscavesdelight:lanternfish_soup',
  'alexscavesdelight:tripodfish_soup'])
event.add('toughasnails:thirst/1_thirst_drinks',
  ['immersive_weathering:pond_water',
  'farmersdelight:milk_bottle'])

  event.add('toughasnails:thirst/4_thirst_drinks',
    [
  'alexscavesdelight:mussel_soup',
  'minecraft:beetroot_soup',
  'luminous_nether:golden_stew',
  'quarkdelight:cavern_explorer_stew',
  'biomemakeover:glowshroom_stew',
  'alexsmobs:mosquito_repellent_stew',
  'alexscaves:vesper_stew',
  'alexscaves:seething_stew',
  'farmersdelight:beef_stew',
  'alexscavesdelight:acid_radgill_stew',
  'farmersdelight:baked_cod_stew',
  'netherdepthsupgrade:baked_glowdine_stew',
  'alexsdelight:kangaroo_stew',
  'alexscavesdelight:relicheirus_noodle_soup',
  'farmersdelight:vegetable_soup',
  'farmersdelight:chicken_soup',
  'minecraft:rabbit_stew',
  'minecraft:suspicious_stew',
  'minecraft:mushroom_stew'])
  event.add('alexscaves:restricted_from_sack_of_sating',['deeperdarker:heart_of_the_deep','deeperdarker:sliced_heart_of_the_deep'])
  event.add('alexcaves:ferromagnetic_items', ['minecraft:iron_horse_armor','create:andesite_alloy','create:netherite_diving_boots','create:netherite_diving_helmet','create:netherite_backtank','revampedwolf:iron_wolf_armor','revampedwolf:netherite__wolf_armor','#spartanweaponry:netherite_weapons'])
  event.add('spartanweaponry:oilable_weapons','#forge:tools')
  event.add('spartanweaponry:oilable_weapons','alexscaves_torpedoes:scarlet_sword')
  event.add('spartanweaponry:oilable_weapons','spartanweaponry:cestus')
  event.add('spartanweaponry:oilable_weapons','spartanweaponry:studded_cestus')
  event.add('minecraft:swords','minecraft:copper_sword')
  event.add('spartanweaponry:oilable_weapons','cataclysm:black_steel_sword')
  event.add('spartanweaponry:oilable_weapons','alexscaves_torpedoes:azure_sword')
  event.add('spartanweaponry:oilable_weapons','alexscaves_torpedoes:neodymium_sword')
  event.add('curios:necklace',['archeological:amethyst_amulet','cataclysm:necklace_of_the_desert']);
  event.add('curios:belt',['alexscavesdelight:filled_heart_of_iron','luminous_beasts:jungle_pendant']);
  event.add('curios:belt',['biomesoplenty:spider_egg'])
  event.add('alexsmobs:grizzly_honey',['biomesoplenty:spider_egg'])
  event.add('forge:tools/knives',['alexsmobs:spectral_dagger','alexscaves:desolate_dagger'])
  event.add('jeg:ammo',['deeperdarker:reinforced_echo_shard'])
  event.add('curios:feet',['archeological:ancient_socks'])
  event.add('curios:head',['mobcompack:rose_tinted_monocle','alexscaves:immortal_embryo'])
  event.add('curios:belt',['biomesoplenty:glowworm_silk','alexscaves_torpedoes:pocket_magnet'])
  event.add('curios:hands',['alexscaves:game_controller','archeological:emerald_ring'])
  event.remove('curios:curio',['alexscaves_torpedoes:pocket_magnet'])
  event.add('toughasnails:heating_armor',['alexscaves_torpedoes:tectonic_helmet','alexscaves_torpedoes:tectonic_chestplate','alexscaves_torpedoes:tectonic_leggings','alexscaves_torpedoes:tectonic_boots'])
  event.add('toughasnails:heating_armor',['alexscaves:diving_helmet','alexscaves:diving_chestplate','alexscaves:diving_leggings','alexscaves:diving_boots'])
  event.add('toughasnails:cooling_armor',['deeperdarker:warden_helmet','deeperdarker:warden_chestplate','deeperdarker:warden_leggings','deeperdarker:warden_boots'])
  event.add('curios:hands',['archeological:old_bandages'])
  event.add('toughasnails:thirst/1_thirst_drinks',['minecraft:glistering_melon_slice'])
  event.add('curios:necklace',['alexscaves:totem_of_regeneration','deeperdarker:heart_of_the_deep'])
  event.add('curios:charm',['alexscaves:totem_of_possession','luminous_nether:nether_beast_totem','archeological:diamond_charm','scalinghealth:heart_crystal_shard','deeperdarker:sliced_heart_of_the_deep','rootoffear:agitated_primitive_heart'])
  event.add('toughasnails:cooling_trims',['minecraft:copper_ingot','oreganized:silver_ingot','minecraft:iron_ingot','alexscaves:pure_darkness','biomesoplenty:rose_quartz','cataclysm:cursium_ingot'])
  event.add('toughasnails:heating_trims',['alexscaves:tectonic_shard','minecraft:iron_ingot','cataclysm:ignitium_ingot','oreganized:electrum_ingot', 'minecraft:netherite_ingot'])
  event.add('toughasnails:heating_held_items',['luminous_nether:molten_coal','minecraft:torch','supplementaries:sconce','spelunkery:spring_water_bucket','oreganized:molten_lead_bucket','createbigcannons:molten_nethersteel_bucket','createbigcannons:molten_cast_iron_bucket','createbigcannons:molten_bronze_bucket','createbigcannons:molten_steel_bucket'])
  event.add('toughasnails:thermoregulator_heating_fuel',['luminous_nether:molten_coal'])
  event.add('toughasnails:cooling_held_items',['deeperdarker:sliced_heart_of_the_deep','deeperdarker:heart_of_the_deep','scalinghealth:power_crystal','netherexp:ectoplasm_bucket','minecraft:soul_torch','supplementaries:sconce_soul'])
  event.add('toughasnails:cooling_consumed_items',['alexscavesdelight:bioluminesscence_custard','immersive_weathering:ice_sickle','alexscaves:vanilla_ice_cream','alexscaves:chocolate_ice_cream','alexscaves:sweetberry_ice_cream','alexscavesdelight:chocolate_ice_cream','alexscavesdelight:sweetberry_ice_cream','alexscavesdelight:vanilla_ice_cream','farmersdelight:melon_popsicle','farmersdelight:glow_berry_custard','alexscavesdelight:tree_star_juice'])
  event.add('toughasnails:heating_consumed_items',['netherdepthsupgrade:blazefish','nethervinery:blazewine_pinot','netherdepthsupgrade:blazefish_slice','netherdepthsupgrade:blazefish_roll','netherdepthsupgrade:grilled_blazefish','netherdepthsupgrade:baked_blazefish_stew','alexscavesdelight:toxic_noodle_soup','quarkdelight:cloud_latte','farmersdelight:hot_cocoa','alexscavesdelight:sulfur_shake',     'netherdepthsupgrade:baked_magmacubefish_stew','netherdepthsupgrade:baked_searing_cod_stew','netherdepthsupgrade:searing_cod_slice','netherdepthsupgrade:grilled_searing_cod','netherdepthsupgrade:searing_cod','netherdepthsupgrade:baked_magmacubefish_stew','netherdepthsupgrade:baked_obsidianfish_stew','netherdepthsupgrade:baked_soulsucker_stew','netherdepthsupgrade:baked_lava_pufferfish_stew','alexscavesdelight:spelunkie_shake'])
  event.add('minecraft:hoes',['minecraft:copper_hoe'])
  event.add('forge:tools',['minecraft:copper_hoe','minecraft:copper_axe','minecraft:copper_sword','minecraft:copper_shovel','minecraft:copper_pickaxe'])
  event.add('create:passive_boiler_heaters',['alexscaves:nuclear_furnace'])
  event.add('forge:ingots/steel',['cataclysm:black_steel_ingot'])
  event.add('forge:tools/knives','farmersdelight:copper_knife')
  event.add('supplementaries:shulker_blacklist',['#supplementaries:sacks','quark:backpack','jeg:ammo_box','minecraft:bundle','alexscaves:sack_of_sating'])
  event.add('createbigcannons:block_steel',['cataclysm:black_steel_block'])
  event.add('spartanshields:shields_with_bash',['cataclysm:bulwark_of_the_flame','alexsmobs:shield_of_the_deep','outer_end:shulker_shield','cataclysm:black_steel_targe'])
  event.remove('spartanweaponry:heads',['spartanweaponry:enderman_head'])
  event.add('spartanweaponry:heads',['supplementaries:enderman_head'])
  event.remove('minecraft:soul_fire_base_blocks',['biomemakeover:soul_embers'])
  event.add('quark:pike_trophies',['#c:skulls'])
  event.add('oreganized:has_kinetic_damage','#spartanweaponry:electrum_weapons')
  event.remove('createbigcannons:nugget_copper',['spelunkery:copper_nugget'])
  event.add('forge:ingots/bronze','create:bronze_ingot')
  event.add('sculkhorde:mite_eggs',['sculkhorde:mite_egg','sculkhorde:mite_egg_2','sculkhorde:mite_egg_3'])
  event.add('alexsmobs:grizzly_honey',['alexscavesdelight:caramel_cookie','create:honeyed_apple','create:honey_bucket','alexscaves:caramel_apple','alexscavesdelight:caramel_pie','farmersdelight:honey_cookie'])
  event.add('dynamiclights:self',['spelunkers_charm:mining_helmet','spelunkers_charm:candle_on_helmet'])
  event.add('create:upright_on_belt',['toughasnails:empty_netherite_canteen','toughasnails:empty_leather_canteen','toughasnails:empty_gold_canteen','toughasnails:empty_diamond_canteen','#toughasnails:drinks'])
  event.add('alexscaves:ferromagnetic_items',['#spartanweaponry:iron_weapons', 'spartanshields:iron_basic_shield', 'spartanshields:iron_tower_shield', 'cataclysm:black_steel_block','cataclysm:black_steel_targe', 'cataclysm:black_steel_sword','cataclysm:black_steel_axe','cataclysm:black_steel_pickaxe','cataclysm:black_steel_shovel','cataclysm:black_steel_hoe'])
  event.add('alexscaves:ferromagnetic_items',[
  'jeg:holy_shotgun',
  'jeg:service_rifle',
  'jeg:infantry_rifle',
  'jeg:assault_rifle',
  'jeg:double_barrel_shotgun',
  'jeg:custom_smg',
  'jeg:waterpipe_shotgun',
  'jeg:revolver',
  'jeg:semi_auto_rifle',
  'jeg:flare_gun',
  'jeg:bolt_action_rifle',
  'jeg:burst_rifle',
  'jeg:rocket_launcher',
  'jeg:light_machine_gun',
  'jeg:flamethrower',
  'jeg:blossom_rifle',
  'jeg:hollenfire_mk2',
  'jeg:subsonic_rifle',
  'jeg:soulhunter_mk2',
  'jeg:supersonic_shotgun',
  'jeg:hypersonic_cannon',
  'jeg:grenade',
  'jeg:stun_grenade',
  'jeg:water_bomb',
  'jeg:rocket',
  'jeg:pistol_ammo',
  'jeg:rifle_ammo',
  'jeg:shotgun_shell',
  'jeg:handmade_shell',
  'jeg:blaze_round',
  'jeg:spectre_round',
  'jeg:flare',
  'jeg:explosive_charge',
  'jeg:scrap_block',
  'jeg:gunmetal_grit',
  'jeg:gunmetal_ingot',
  'jeg:gunmetal_nugget',
  'jeg:scrap',
  'alexscaves:raygun'
  ])
});
ServerEvents.tags('block', event => {
  event.add('create:passive_boiler_heaters',['alexscaves:nuclear_furnace_component'])
  event.add('create:passive_boiler_heaters',['alexscaves:nuclear_furnace'])
  event.add('minecraft:real_small_flowers',[
  'oreganized:purple_datura',
  'oreganized:datura',
  'biomesoplenty:rose',
  'biomesoplenty:endbloom',
  'netherexp:soul_torchflower',
  'minecraft:blue_orchid',
  'minecraft:allium',
  'minecraft:azure_bluet',
  'biomesoplenty:burning_blossom',
  'deeperdarker:lily_flower',
  'minecraft:wither_rose',
  'minecraft:lily_of_the_valley',
  'minecraft:cornflower',
  'minecraft:oxeye_daisy',
  'minecraft:white_tulip',
  'minecraft:pink_tulip',
  'biomesoplenty:violet',
  'biomesoplenty:white_lavender',
  'minecraft:red_tulip',
  'biomesoplenty:glowflower',
  'biomesoplenty:wilted_lily',
  'biomesoplenty:pink_hibiscus',
  'minecraft:orange_tulip',
  'biomesoplenty:lavender',
  'outer_end:azure_bud',
  'biomesoplenty:waterlily',
  'biomesoplenty:pink_daffodil',
  'minecraft:poppy',
  'minecraft:dandelion'])
});
ServerEvents.tags('block', event => {
  event.add('toughasnails:cooling_blocks',['netherexp:ectoplasm','netherexp:soul_magma_block','luminous_nether:soul_cauldron_blue','netherexp:ecto_soul_sand','netherexp:magma_cream_block','supplementaries:lumisene'])
  event.add('toughasnails:heating_blocks',['supplementaries:fire_pit','cataclysm:altar_of_fire','luminous_nether:soul_cauldron_orange','spelunkery:spring_water'])
});
// add braizers for heating blocks + the soul ones


    LootJS.modifiers(event => {
      event
          .addLootTypeModifier(LootType.CHEST)
          .removeLoot('scalinghealth:heart_dust')
          .removeLoot('scalinghealth:heart_crystal')
          .removeLoot('scalinghealth:heart_crystal_shard')
          .removeLoot('scalinghealth:bandages')
          .removeLoot('scalinghealth:medkit')
          .removeLoot('spartanweaponry:leather_longbow')
          .removeLoot('spartanweaponry:leather_heavy_crossbow')
          .removeLoot('scalinghealth:chance_heart')
          .removeLoot('scalinghealth:cursed_heart')
          .removeLoot('scalinghealth:enchanted_heart')
          .removeLoot('scalinghealth:power_crystal_shard')
          .removeLoot('deeperdarker:warden_upgrade_smithing_template')
  });    
  
  LootJS.modifiers(event => {
      event
          .addLootTypeModifier(LootType.CHEST)
          .removeLoot([
"minecraft:wooden_shovel",
"minecraft:wooden_pickaxe",
"minecraft:wooden_hoe",
"minecraft:wooden_axe",
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
"spartanweaponry:wooden_flanged_mace"
          ])
  });

LootJS.modifiers(event => {
  event
      .addLootTypeModifier(LootType.ENTITY)
      .removeLoot('jeg:advanced_firearm_blueprint')
      .removeLoot('scalinghealth:bandages')
      .removeLoot('scalinghealth:power_crystal_shard')
      .removeLoot('scalinghealth:heart_dust')
      .removeLoot('scalinghealth:heart_crystal_shard')
      .removeLoot('scalinghealth:heart_crystal')
});




  LootJS.modifiers(event => {
    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot('scalinghealth:heart_dust')
        .removeLoot('jeg:minigun')
});

 LootJS.modifiers((event) => {
  event
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(ItemFilter.hasEnchantment(["modification_of_critical_hit:criteffect","extra_enchantments:supercharge","extra_enchantments:overshield", "extra_enchantments:guarding_strike", "extra_enchantments:enigma_resonator", "extra_enchantments:shadow_shot", "extra_enchantments:spectral_vision", "extra_enchantments:spectral_vision", "extra_enchantments:resonating_shot","domesticationinnovation:total_recall"]).and("minecraft:enchanted_book"))
});

ServerEvents.tags('block', event => {
event.add('sculkhorde:infested_block',

[
'deeperdarker:blooming_sculk_stone',
'deeperdarker:infested_sculk',
'alexsmobs:sculk_boomer',
'deeperdarker:gloomslate',
'deeperdarker:ancient_vase',
'deeperdarker:blooming_moss_block',
'deeperdarker:blooming_sculk',
'deeperdarker:chiseled_gloomslate',
'deeperdarker:echo_log',
'deeperdarker:echo_planks',
'deeperdarker:gloomslate_copper_ore',
'deeperdarker:gloomslate_diamond_ore',
'deeperdarker:gloomslate_emerald_ore',
'deeperdarker:gloomslate_gold_ore',
'deeperdarker:gloomslate_iron_ore',
'deeperdarker:gloomslate_lapis_ore',
'deeperdarker:gloomslate_redstone_ore',
'deeperdarker:gloomslate_coal_ore',
'deeperdarker:gloomslate_bricks',
'deeperdarker:gloomslate_tiles',
'deeperdarker:gloomy_geyser',
'deeperdarker:gloomy_sculk',
'deeperdarker:sculk_stone_diamond_ore',
'deeperdarker:sculk_stone_copper_ore',
'deeperdarker:sculk_stone_coal_ore',
'deeperdarker:sculk_stone_bricks',
'deeperdarker:sculk_stone_gold_ore',
'deeperdarker:sculk_stone_emerald_ore',
'deeperdarker:sculk_stone_iron_ore',
'deeperdarker:sculk_stone_lapis_ore',
'deeperdarker:sculk_stone_redstone_ore',
'deeperdarker:sculk_stone_tiles',
'deeperdarker:smooth_sculk_stone',
'deeperdarker:cobbled_sculk_stone',
'deeperdarker:polished_sculk_stone',
'deeperdarker:stripped_echo_log',
'deeperdarker:sculk_grime',
'deeperdarker:sculk_jaw',
'deeperdarker:gloomslate',
'deeperdarker:gloomslate_tiles',
'deeperdarker:echo_soil',
'deeperdarker:echo_door',
'deeperdarker:echo_trapdoor',
'deeperdarker:bloom_trapdoor',
'deeperdarker:bloom_planks',
'deeperdarker:gloomy_cactus',
'deeperdarker:sculk_gleam'
]

)
}
);





ServerEvents.tags('entity_type', event => {
event.add('spelunkery:portal_fluid_immune',

[
  '#forge:bosses',
  'minecraft:enderman',
  'whiteenderman:white_enderman',
  'sculkhorde:sculk_enderman',
  'minecraft:endermite'
]

)
}
);

ServerEvents.tags('entity_type', event => {
event.add('jockey_api:adult_zombie_jockeys',

[
  'minecraft:zombie',
  'minecraft:husk',
  'luminous_monsters:swamp_zombie',
  'luminous_monsters:glacial_zombie',
  'luminous_monsters:dark_oak_zombie',
  'luminous_monsters:savanna_zombie',
  'minecraft:skeleton',
  'luminous_monsters:glacial_skeleton',
  'luminous_monsters:dark_oak_skeleton',
  'luminous_monsters:savanna_skeleton',
  'luminous_monsters:cherry_skeleton',
  'luminous_monsters:hollow_spawn'
]

)
}
);

ServerEvents.tags('entity_type', event => {
event.add('jockey_api:adult_zombie_targets',

[
 'minecraft:polar_bear',
 'alexsmobs:grizzly_bear',
 'minecraft:horse',
 'minecraft:camel'
]

)
}
);

ServerEvents.tags('entity_type', event => {
event.add('jockey_api:baby_zombie_jockeys',

[
  'minecraft:zombie',
]

)
}
);

ServerEvents.tags('entity_type', event => {
event.add('jockey_api:baby_zombie_targets',

[
 'minecraft:zombie',
  'minecraft:husk',
  'luminous_monsters:swamp_zombie',
  'luminous_monsters:glacial_zombie',
  'luminous_monsters:dark_oak_zombie',
  'luminous_monsters:savanna_zombie',
  'minecraft:skeleton',
  'luminous_monsters:glacial_skeleton',
  'luminous_monsters:dark_oak_skeleton',
  'luminous_monsters:savanna_skeleton',
  'luminous_monsters:cherry_skeleton',
  'minecraft:polar_bear',
  'alexsmobs:grizzly_bear',
  'minecraft:horse',
  'minecraft:camel',
  'minecraft:chicken'

]

)
}
);


ServerEvents.tags('entity_type', event => {
event.add('jockey_api:cultist_jockeys',

[
  'luminous_nether:piglin_cultist'
]

)
}
);

ServerEvents.tags('entity_type', event => {
event.add('jockey_api:cultist_targets',

[
  'minecraft:hoglin'
]

)
}
);


ServerEvents.tags('entity_type', event => {
event.add('alexscaves:ferromagnetic_entities',

[
  'cataclysm:the_harbinger',
  'cataclysm:wither_missile',
  'cataclysm:wither_howitzer',
  'cataclysm:wither_homing_missile',
  'cataclysm:netherite_ministrosity',
  'cataclysm:netherite_monstrosity'
]

)
}
);

ServerEvents.tags('entity_type', event => {
event.add('domesticationinnovation:refuses_collar_tags',

[
  'alexscaves:tremorzilla',
  'alexscaves:tremorsaurus'
]

)
}
);




ServerEvents.tags('entity_type', event => {
event.add('sculkhorde:sculk_horde_do_not_attack',

[
    'deeperdarker:angler_fish',
    'deeperdarker:sculk_centipede',
    'deeperdarker:sculk_leech',
    'deeperdarker:sculk_snapper',
    'deeperdarker:shattered',
    'deeperdarker:shriek_worm',
    'deeperdarker:sludge',
    'deeperdarker:stalker',
    'minecraft:phantom',
    'minecraft:warden',
    'alexsmobs:skreecher'

]
)
}
);

ServerEvents.tags('entity_type', event => {
event.add('jeg:gunner_mob',

[
    'biomemakeover:cowboy',
    'trials:bogged',
    'quark:wraith',
    'biomemakeover:ghost',
    'alexscaves:deep_one_knight',
    'cataclysm:deepling_warlock',
    'cataclysm:deepling_brute',
    'alexscaves:deep_one',
    'minecraft:illusioner'
  ]
)
}
);


ServerEvents.tags('entity_type', event => {
event.add("alexscavesexemplified:can_rabies",

[
  'sculkhorde:sculk_enderman',
  "biomemakeover:cowboy",
  "alexscaves_torpedoes:shadow",
  "luminous_monsters:swamp_zombie",
  "luminous_nether:crimson_walker",
  "luminous_monsters:dark_oak_zombie",
  "luminous_monsters:savanna_zombie",
  "luminous_monsters:glacial_zombie",
  "alexsmobs:farseer"
]

)
}
);

ServerEvents.tags('entity_type', event => {
event.add('alexscaves:weak_to_forsaken_sonic_attack',

[
  'sculkhorde:sculk_mite',
  'sculkhorde:sculk_mite_aggressor',
  'sculkhorde:sculk_bee_harvester',
  'sculkhorde:sculk_bee_infector',
  'sculkhorde:sculk_creeper',
  'sculkhorde:sculk_enderman',
  "sculkhorde:sculk_sheep",
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
  'deeperdarker:stalker'
]

)
}
);

ServerEvents.tags('entity_type', event => {
event.add('deeperdarker:sculk',

[
  'deeperdarker:angler_fish',
  'deeperdarker:sculk_centipede',
  'deeperdarker:sculk_leech',
  'deeperdarker:sculk_snapper',
  'deeperdarker:shattered',
  'deeperdarker:shriek_worm',
  'deeperdarker:sludge',
  'deeperdarker:stalker',
  'minecraft:phantom',
  'sculkhorde:sculk_mite',
  'sculkhorde:sculk_mite_aggressor',
  'sculkhorde:sculk_bee_harvester',
  'sculkhorde:sculk_bee_infector',
  'sculkhorde:sculk_creeper',
  'sculkhorde:sculk_enderman',
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

)
}
);

ServerEvents.tags('entity_type', event => {
event.add('jeg:heavy',

[
  'sculkhorde:sculk_enderman',
  'sculkhorde:sculk_hatcher',
  'sculkhorde:sculk_ravager',
  'sculkhorde:sculk_spitter',
  'sculkhorde:sculk_spore_spewer',
  'sculkhorde:sculk_vindicator',
  'luminous_nether:the_furnace',
  'luminous_nether:mushlin_spewer',
  '#forge:legendarybeasts',
  '#forge:bosses'
]
)
}
);

ServerEvents.tags('entity_type', event => {
event.add('jeg:very_heavy',

[
  'alexscaves:atlatitan',
  'alexscaves:grottoceratops',
  'alexscaves:luxtructosaurus',
  'alexscaves:relicheirus',
  'alexscaves:tremorsaurus',
  'alexscaves:tremorzilla',
  'rootoffear:wilted'
]
)
}
);
ServerEvents.tags('entity_type', event => {
event.add('jeg:undead',

[
  'luminous_nether:piglin_ghost',
  'luminous_nether:ghost',
  'quark:wraith',
  'biomemakeover:ghost',
  'alexsmobs:underminer',
  'cataclysm:aptrgangr',
  'cataclysm:royal_draugr',
  'cataclysm:draugr',
  'cataclysm:elite_draugr',
  'cataclysm:maledictus'
]
)
}
);

ServerEvents.tags('entity_type', event => {
event.add('jeg:ghost',

[
  'luminous_nether:piglin_ghost',
  'luminous_nether:ghost',
  'quark:wraith',
  'biomemakeover:ghost',
  'alexsmobs:underminer',
  'cataclysm:aptrgangr',
  'cataclysm:royal_draugr',
  'cataclysm:draugr',
  'cataclysm:elite_draugr',
  'cataclysm:maledictus'
]
)
}
);

ServerEvents.tags('entity_type', event => {
event.add('jeg:fire',

[
  'whiteenderman:white_enderman',
  'sculkhorde:sculk_enderman',
  'luminous_nether:piglin_ghost',
  'luminous_nether:ghost',
  'quark:wraith',
  'doom_and_gloom:holler',
  'cataclysm:ignited_revenant',
  'cataclysm:ignis',
  'cataclysm:ignited_berserker',
  'cataclysm:netherite_monstrosity',
  'luminous_nether:the_furnace'
]
)
}
);
// Damage Tags dont work

ServerEvents.tags('entity_type', event => {
event.add('alexscaves:resists_acid',

[
  'luminous_beasts:vile_gator'
]
)
}
);

ServerEvents.tags('entity_type', event => {
event.add('alexscaves:resists_radiation',

[
  'luminous_beasts:vile_gator'
]
)
}
);

// endermite, magma cube, skeleton, spider, cave spider, husk, illusioner,zombie, stray, bogged, breeze,snow golem, spawner soul reset
LootJS.modifiers((event) => {
    event.addEntityLootModifier("quark:wraith").pool((p) => {
        p.randomChance(0.3)
        p.addLoot("jeg:ectoplasm");
        p.applyLootingBonus([1, 3]);
    });
});


LootJS.modifiers((event) => {
  event.addEntityLootModifier([
    'deeperdarker:sculk_leech',
    'deeperdarker:sculk_snapper',
    'deeperdarker:shattered',
    'deeperdarker:shriek_worm',
    'deeperdarker:sludge',
    'deeperdarker:stalker',
    'alexsmobs:skreecher',
    'sculkhorde:sculk_creeper',
    'sculkhorde:sculk_enderman',
    'sculkhorde:sculk_hatcher',
    'sculkhorde:sculk_ravager',
    'sculkhorde:sculk_vindicator',
    'sculkhorde:sculk_zombie',
    'sculkhorde:sculk_phantom_corpse',
    'sculkhorde:sculk_salmon',
    'sculkhorde:sculk_squid',
    'sculkhorde:sculk_pufferfish',
    'sculkhorde:sculk_witch',
    'sculkhorde:sculk_soul_reaper',
    'sculkhorde:sculk_vex',
    'alexsmobs:skreecher'
  ]).pool((p) => {
        p.randomChance(0.1)
        p.addLoot("sculkhorde:sculk_flesh");
        p.applyLootingBonus([1, 2])
    });
});

LootJS.modifiers((event) => {
  event.addEntityLootModifier("minecraft:vindicator").randomChance(0.01).addLoot(Item.of("archeological:emerald_ring"));
  event.addEntityLootModifier("minecraft:piglin_brute").randomChance(0.25).addWeightedLoot([1,2],[Item.of("jeg:advanced_firearm_blueprint")]);
  event.addEntityLootModifier("sculkhorde:sculk_soul_reaper").randomChance(0.8).addWeightedLoot([1, 4],[Item.of("deeperdarker:grime_ball")]);
  event.addEntityLootModifier("sculkhorde:sculk_soul_reaper").randomChance(0.6).addWeightedLoot([1, 4],[Item.of("deeperdarker:soul_crystal")]);
  event.addEntityLootModifier("sculkhorde:sculk_soul_reaper").randomChance(0.4).addWeightedLoot([1, 2],[Item.of("sculkhorde:chunk_o_brain")]);
  event.addEntityLootModifier("sculkhorde:sculk_spitter").randomChance(0.5).addWeightedLoot([1, 2],[Item.of("deeperdarker:sculk_bone")]);
  event.addEntityLootModifier("luminous_monsters:miner_skeleton").randomChanceWithEnchantment("minecraft:looting", [0.02, 0.05, 0.1, 0.15]).addLoot("spartanweaponry:iron_longbow").removeLoot("minecraft:bow");
  event.addEntityLootModifier("sculkhorde:sculk_hatcher").randomChanceWithEnchantment("minecraft:looting", [0.01, 0.02, 0.03, 0.04]).addLoot("deeperdarker:resonarium_upgrade_smithing_template");
  event.addEntityLootModifier("sculkhorde:sculk_creeper").randomChanceWithEnchantment("minecraft:looting", [0.02, 0.03, 0.04, 0.05]).addLoot("deeperdarker:resonarium_upgrade_smithing_template");
  event.addEntityLootModifier("deeperdarker:stalker").randomChanceWithEnchantment("minecraft:looting", [0.10, 0.15, 0.20, 0.35]).addLoot("deeperdarker:resonarium_upgrade_smithing_template");
  event.addEntityLootModifier("minecraft:creeper").randomChanceWithEnchantment("minecraft:looting", [0.1, 0.15, 0.2, 0.25]).addLoot("minecraft:flint");
  event.addEntityLootModifier("deeperdarker:shattered").randomChanceWithEnchantment("minecraft:looting", [0.10, 0.15, 0.20, 0.35]).addLoot("deeperdarker:resonarium_upgrade_smithing_template");
  event.addEntityLootModifier("minecraft:elder_guardian").randomChanceWithEnchantment("minecraft:looting", [0.35, 0.40, 0.45, 0.50]).addLoot("minecraft:heart_of_the_sea");
  event.addEntityLootModifier("rootoffear:wilted").randomChance(0.9).addWeightedLoot([1, 6],[Item.of("scalinghealth:bandages")]);
  event.addEntityLootModifier("rootoffear:wilted").randomChance(0.5).addLoot("scalinghealth:heart_crystal");
  event.addEntityLootModifier("alexsmobs:underminer").randomChanceWithEnchantment("minecraft:looting", [0.10, 0.15, 0.20, 0.25]).addLoot("scalinghealth:medkit");
  event.addEntityLootModifier("alexsmobs:underminer").randomChance(0.1).addWeightedLoot([1, 2],[Item.of("firstaid:plaster")]);
  event.addEntityLootModifier("minecraft:zombie").randomChance(0.05).addWeightedLoot([1, 2],[Item.of("firstaid:plaster")]);
  event.addEntityLootModifier("minecraft:drowned").randomChance(0.01).addWeightedLoot([1, 2],[Item.of("firstaid:plaster")]);
  event.addEntityLootModifier("luminous_monsters:swamp_zombie").randomChance(0.02).addWeightedLoot([1, 2],[Item.of("firstaid:plaster")]);
  event.addEntityLootModifier("luminous_nether:crimson_walker").randomChance(0.05).addWeightedLoot([1, 2],[Item.of("firstaid:plaster")]);
  event.addEntityLootModifier("luminous_monsters:miner_zombie").randomChance(0.15).addWeightedLoot([1, 2],[Item.of("firstaid:plaster")]);
  event.addEntityLootModifier("luminous_monsters:dark_oak_zombie").randomChance(0.05).addWeightedLoot([1, 2],[Item.of("firstaid:plaster")]);
  event.addEntityLootModifier("luminous_monsters:savanna_zombie").randomChance(0.05).addWeightedLoot([1, 2],[Item.of("firstaid:plaster")]);
  event.addEntityLootModifier("minecraft:zombified_piglin").randomChance(0.15).addWeightedLoot([1, 2],[Item.of("firstaid:plaster")]);
  event.addEntityLootModifier("minecraft:zombie_villager").randomChance(0.05).addWeightedLoot([1, 2],[Item.of("firstaid:plaster")]);
  event.addEntityLootModifier("alexsmobs:murmur").randomChance(0.60).addWeightedLoot([1, 2],[Item.of("firstaid:plaster")]);
  event.addEntityLootModifier("minecraft:stray").randomChance(0.05).addWeightedLoot([1, 2],[Item.of("firstaid:plaster")]);
  event.addEntityLootModifier("alexscaves:boundroid").randomChance(0.15).addWeightedLoot([1, 3],[Item.of("jeg:tech_trash")]);
  event.addEntityLootModifier("sculkhorde:sculk_zombie").randomChanceWithEnchantment("minecraft:looting", [0.5, 0.10, 0.15, 0.16]).addLoot("sculkhorde:chunk_o_brain");
  event.addEntityLootModifier("deeperdarker:shattered").randomChanceWithEnchantment("minecraft:looting", [0.20, 0.25, 0.30, 0.35]).addLoot("sculkhorde:chunk_o_brain");
  event.addEntityLootModifier("doom_and_gloom:holler").randomChanceWithEnchantment("minecraft:looting", [0.20, 0.25, 0.30, 0.35]).addLoot("jeg:ectoplasm");
  event.addEntityLootModifier("netherexp:wisp").randomChanceWithEnchantment("minecraft:looting", [0.20, 0.25, 0.30, 0.35]).addLoot("jeg:ectoplasm");
  event.addEntityLootModifier("netherexp:banshee").randomChance(0.35).addWeightedLoot([1, 3],[Item.of("jeg:ectoplasm")]);
  event.addEntityLootModifier("netherexp:ecto_slab").randomChance(0.45).addWeightedLoot([1, 3],[Item.of("jeg:ectoplasm")]);
  event.addEntityLootModifier("netherexp:apparition").randomChance(0.25).addWeightedLoot([1, 3],[Item.of("jeg:ectoplasm")]);
  event.addEntityLootModifier("netherexp:wisp").randomChance(0.15).addWeightedLoot([1, 3],[Item.of("jeg:ectoplasm")]);
  event.addEntityLootModifier("alexscaves:magnetron").randomChanceWithEnchantment("minecraft:looting", [0.15, 0.20, 0.25, 0.30]).addLoot("jeg:tech_trash");
  event.addEntityLootModifier("netherexp:vessel").randomChance(0.15).addWeightedLoot([1, 3],[Item.of("jeg:ectoplasm")]);
  event.addEntityLootModifier("sculkhorde:sculk_bee_harvester").randomChanceWithEnchantment("minecraft:looting", [0.10, 0.15, 0.25, 0.25]).addLoot("deeperdarker:resonarium_upgrade_smithing_template");
  event.addEntityLootModifier("minecraft:creeper").removeLoot("jeg:grenade");
  event.addEntityLootModifier("minecraft:sheep").randomChance(0.25).addWeightedLoot([1, 2],[Item.of("minecraft:string")]);
  event.addEntityLootModifier("minecraft:warden").removeLoot("jeg:advanced_firearm_blueprint");
  event.addEntityLootModifier("minecraft:warden").removeLoot("deeperdarker:heart_of_the_deep");
  event.addEntityLootModifier("luminous_monsters:glacial_zombie").removeLoot("minecraft:rotten_flesh").randomChance(0.65).addLoot("luminous_monsters:frozen_flesh").applyLootingBonus([1, 2]);
  event.addEntityLootModifier("luminous_nether:crimson_walker").removeLoot("luminous_nether:crimson_flesh").randomChance(0.65).addLoot("luminous_nether:crimson_flesh_2").applyLootingBonus([1, 2]);
  event.addEntityLootModifier("netherexp:vessel").replaceLoot("minecraft:bone", "luminous_nether:soul_bone", true);
  event.addEntityLootModifier("luminous_nether:guzzleghast").replaceLoot("luminous_nether:ectoplasm_ball", "biomemakeover:ectoplasm", true);
  event.addEntityLootModifier("minecraft:wither_skeleton").replaceLoot("minecraft:bone", "minecraft:wither_bone", true);
  event.addEntityLootModifier("netherdepthsupgrade:wither_bonefish").replaceLoot("minecraft:bone", "minecraft:air", true);
  event.addEntityLootModifier("luminous_beasts:piglin_executioner").replaceLoot("luminous_beasts:executioner_cowl_helmet", "luminous_nether:executioner_hood_helmet", true);
  event.addEntityLootModifier("biomemakeover:ghost").replaceLoot("biomemakeover:ectoplasm", "jeg:ectoplasm", true);
  event.addEntityLootModifier("minecraft:enderman").replaceLoot("spartanweaponry:enderman_head", "supplementaries:enderman_head", true);
  event.addEntityLootModifier("minecraft:wither").addWeightedLoot([4, 8],[Item.of("minecraft:wither_bone")]);
  event.addEntityLootModifier("minecraft:elder_guardian").removeLoot("jeg:typhoonee");
  event.addEntityLootModifier("biomemakeover:cowboy").removeLoot("jeg:pistol_ammo");
});
