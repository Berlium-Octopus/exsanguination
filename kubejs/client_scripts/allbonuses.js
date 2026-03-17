// priority: 100
global.tooltipModifiers.push(
    addArmorSetTooltip([
        Item.of('alexscaves:diving_helmet'),
        Item.of('alexscaves:diving_chestplate'),
        Item.of('alexscaves:diving_leggings'),
        Item.of('alexscaves:diving_boots')
    ],
    {
        helmet: ['alexscaves:diving_helmet'],
        chestplate: ['alexscaves:diving_chestplate'],
        leggings: ['alexscaves:diving_leggings'],
        boots: ['alexscaves:diving_boots'],
        mainhand: ['#spartanweaponry:copper_weapons'],
        curios: ['kubejs:none'],
        offhand: ['kubejs:none']

    },
    "Ancient Arceotechnology",
    [
        Text.of(" \u2507 +35% copper weapons speed in water.").green(),
        Text.of(" \u2507 +20% Stamina in water.").blue(),
        Text.of(" \u2507 50% Faster Mining Speed.").blue()

    ])
    .remove("Irradiated")
    .remove("Glowing")
);

// Golden = Fixed
global.tooltipModifiers.push(
    addArmorSetTooltip([
        Item.of('minecraft:golden_helmet'),
        Item.of('minecraft:golden_chestplate'),
        Item.of('minecraft:golden_leggings'),
        Item.of('minecraft:golden_boots')
    ],
    {
        helmet: ['minecraft:golden_helmet'],
        chestplate: ['minecraft:golden_chestplate'],
        leggings: ['minecraft:golden_leggings'],
        boots: ['minecraft:golden_boots'],
        mainhand: ['minecraft:golden_sword',
                  '#spartanweaponry:golden_weapons'],
        offhand: ['kubejs:none'],
        curios: ['kubejs:none']


    },
    "Magical Tuning",
    [
        Text.of(" \u2507 +120% damage boost on golden weapons.").green(),
        Text.of(" \u2507 Greater magical capabilities.").blue(),
        Text.of(" \u2507 Golden Osmosis Effect.").blue()

    ])
    .remove("Irradiated")
    .remove("Glowing")
);


global.tooltipModifiers.push(
    addArmorSetTooltip([
        Item.of('minecraft:netherite_helmet'),
        Item.of('cataclysm:monstrous_helm'),
        Item.of('minecraft:netherite_chestplate'),
        Item.of('minecraft:netherite_leggings'),
        Item.of('minecraft:netherite_boots'),
        Item.of('cataclysm:monstrous_helm')
    ],
    {
        helmet: ['minecraft:netherite_helmet','cataclysm:monstrous_helm'],
        chestplate: ['minecraft:netherite_chestplate'],
        leggings: ['minecraft:netherite_leggings'],
        boots: ['minecraft:netherite_boots'],
        mainhand: ['kubejs:none'],
        offhand: ['kubejs:none'],
        curios: ['kubejs:none']


    },
    "Netherforged",
    [
        Text.of(" \u2507 Needs Protection IV to activate.").green(),
        Text.of(" \u2507 +2.5% all damage resistance.").blue(),
        Text.of(" \u2507 Grants Ice Resistance.").blue()

    ])
    .remove("Irradiated")
    .remove("Glowing")
    .remove("While")
    .remove("and")
);


global.tooltipModifiers.push(
    addArmorSetTooltip([
        Item.of('alexscaves:gingerbread_helmet'),
        Item.of('alexscaves:gingerbread_chestplate'),
        Item.of('alexscaves:gingerbread_leggings'),
        Item.of('alexscaves:gingerbread_boots')
    ],
    {
        helmet: ['alexscaves:gingerbread_helmet'],
        chestplate: ['alexscaves:gingerbread_chestplate'],
        leggings: ['alexscaves:gingerbread_leggings'],
        boots: ['alexscaves:gingerbread_boots'],
        mainhand: ['alexscaves:frostmint_spear','alexscavesdelight:gingerbread_knife'],
        curios: ['kubejs:none'],
        offhand: ['kubejs:none']

    },
    "Gingerkind's Rage",
    [
        Text.of(" \u2507 +35% Thrown Damage on Frostmint Spear.").green(),
        Text.of(" \u2507 +755% Damage on Gingerbread Knife.").green(),
        Text.of(" \u2507 Higher step height.").blue()

    ])
    .remove("Irradiated")
    .remove("Glowing")

);


global.tooltipModifiers.push(
    addArmorSetTooltip([
        Item.of('alexscaves:hazmat_mask'),
        Item.of('alexscaves:hazmat_chestplate'),
        Item.of('alexscaves:hazmat_leggings'),
        Item.of('alexscaves:hazmat_boots')
    ],
    {
        helmet: ['alexscaves:hazmat_mask'],
        chestplate: ['alexscaves:hazmat_chestplate'],
        leggings: ['alexscaves:hazmat_leggings'],
        boots: ['alexscaves:hazmat_boots'],
        mainhand: ['alexscaves:raygun'],
        curios: ['kubejs:none'],
        offhand: ['kubejs:none']
    },
    "Biohazard",
    [
        Text.of(" \u2507 Immunity to most negative effects.").green(),
        Text.of(" \u2507 -25% ranged resistance.").green(),
        Text.of(" \u2507 Provides Climate Clemency.").blue(),
        Text.of(" \u2507 +45% incresed damage on raygun.").blue()
    ])
    .remove("Irradiated")
    .remove("Glowing")

);

global.tooltipModifiers.push(
    addArmorSetTooltip([
        Item.of('deeperdarker:resonarium_helmet'),
        Item.of('deeperdarker:resonarium_chestplate'),
        Item.of('deeperdarker:resonarium_leggings'),
        Item.of('deeperdarker:resonarium_boots')
    ],
    {
        helmet: ['deeperdarker:resonarium_helmet'],
        chestplate: ['deeperdarker:resonarium_chestplate'],
        leggings: ['deeperdarker:resonarium_leggings'],
        boots: ['deeperdarker:resonarium_boots'],
        mainhand: ['kubejs:none'],
        curios: ['deeperdarker:heart_of_the_deep'],
        offhand: ['deeperdarker:sonorous_staff']
    },
    "Slow Reverb",
    [
        Text.of(" \u2507 +50% Armor Shred On Resonarium Tools.").green(),
        Text.of(" \u2507 Grants Sculk Affinity.").blue(),
        Text.of(" \u2507 More Armor On Sonorus Staff").blue()
    ])
    .remove("Irradiated")
    .remove("Glowing")

);

global.tooltipModifiers.push(
    addArmorSetTooltip([
        Item.of('toughasnails:wool_helmet'),
        Item.of('toughasnails:wool_chestplate'),
        Item.of('toughasnails:wool_leggings'),
        Item.of('toughasnails:wool_boots')
    ],
    {
        helmet: ['toughasnails:wool_helmet'],
        chestplate: ['toughasnails:wool_chestplate'],
        leggings: ['toughasnails:wool_leggings'],
        boots: ['toughasnails:wool_boots'],
        mainhand: ['kubejs:none'],
        curios: ['kubejs:none'],
        offhand: ['kubejs:none']

    },
    "Long Way Home",
    [
        Text.of(" \u2507 Grants Jump Boost II.").green(),
        Text.of(" \u2507 +40% Stamina.").blue()

    ])
    .remove("Irradiated")
    .remove("Glowing")

);

global.tooltipModifiers.push(
    addArmorSetTooltip([
        Item.of('toughasnails:leaf_helmet'),
        Item.of('toughasnails:leaf_chestplate'),
        Item.of('toughasnails:leaf_leggings'),
        Item.of('toughasnails:leaf_boots')
    ],
    {
        helmet: ['toughasnails:leaf_helmet'],
        chestplate: ['toughasnails:leaf_chestplate'],
        leggings: ['toughasnails:leaf_leggings'],
        boots: ['toughasnails:leaf_boots'],
        mainhand: ['kubejs:none'],
        curios: ['kubejs:none'],
        offhand: ['kubejs:none']

    },
    "Leaf Litter",
    [
        Text.of(" \u2507 Grants Speed I.").green(),
        Text.of(" \u2507 +40% Stamina.").blue()

    ])
    .remove("Irradiated")
    .remove("Glowing")

);
// Chainmail = Fixed
global.tooltipModifiers.push(
    addArmorSetTooltip([
        Item.of('minecraft:chainmail_helmet'),
        Item.of('minecraft:chainmail_chestplate'),
        Item.of('minecraft:chainmail_leggings'),
        Item.of('minecraft:chainmail_boots')
    ],
    {
        helmet: ['minecraft:chainmail_helmet'],
        chestplate: ['minecraft:chainmail_chestplate'],
        leggings: ['minecraft:chainmail_leggings'],
        boots: ['minecraft:chainmail_boots'],
        mainhand: ['kubejs:none'],
        curios: ['kubejs:none'],
        offhand: ['kubejs:none']
    },
    "Runic Bulwark",
    [
        Text.of(" \u2507 +30% ranged damage reduction.").blue(),
        Text.of(" \u2507 +10% melee damage reduction.").blue(),
    ])
    .remove("Irradiated")
    .remove("Glowing")

);
// Animal = Fixed
global.tooltipModifiers.push(
    addArmorSetTooltip([
        Item.of('alexsmobs:froststalker_helmet'),
        Item.of('alexsmobs:spiked_turtle_shell'),
        Item.of('minecraft:turtle_helmet'),
        Item.of('alexsmobs:rocky_chestplate'),
        Item.of('alexsmobs:crocodile_chestplate'),
        Item.of('alexsmobs:emu_leggings'),
        Item.of('alexsmobs:centipede_leggings'),
        Item.of('alexsmobs:roadrunner_boots'),
        Item.of('alexsmobs:flying_fish_boots'),
        Item.of('netherdepthsupgrade:soul_sucker_boots'),
        Item.of('cataclysm:bloom_stone_pauldrons')
    ],
    {
      helmet: ['alexsmobs:froststalker_helmet','alexsmobs:spiked_turtle_shell','minecraft:turtle_helmet'],
        chestplate: ['alexsmobs:crocodile_chestplate','alexsmobs:rocky_chestplate','cataclysm:bloom_stone_pauldrons'],
        leggings: ['alexsmobs:centipede_leggings','alexsmobs:emu_leggings'],
        boots: ['alexsmobs:roadrunner_boots','alexsmobs:flying_fish_boots','netherdepthsupgrade:soul_sucker_boots'],
        mainhand: ['alexscaves:azure_neodymium_ingot'],
        curios: ['kubejs:none'],
        offhand: ['alexscavesdelight:cooked_heart_of_iron']
    },
    "Animal Power",
    [
        Text.of(" \u2507 Provides regeneration.").green(),
        Text.of(" \u2507 Provides resistance.").green(),
        Text.of(" \u2507 Could fuel certain allergies").blue(),

    ])
.remove("horn")
.remove("Enables rolling by sprinting")
.remove("Enables Wall Climbing")
.remove("Enables gliding by jumping out of water")
.remove("Chance to avoid projectile damage")
.remove("+0.1 Speed on Sand")
.remove("Irradiated")
.remove("Glowing")
.remove("Press")

)
// Tectonic = Fixed
global.tooltipModifiers.push(
    addArmorSetTooltip([
        Item.of('alexscaves_torpedoes:tectonic_helmet'),
        Item.of('alexscaves_torpedoes:tectonic_chestplate'),
        Item.of('alexscaves_torpedoes:tectonic_leggings'),
        Item.of('alexscaves_torpedoes:tectonic_boots'),
    ],
    {
        helmet: ['alexscaves_torpedoes:tectonic_helmet'],
        chestplate: ['alexscaves_torpedoes:tectonic_chestplate'],
        leggings: ['alexscaves_torpedoes:tectonic_leggings'],
        boots: ['alexscaves_torpedoes:tectonic_boots'],
        mainhand: ['alexscaves:extinction_spear'],
        curios: ['kubejs:none'],
        offhand: ['kubejs:none']

    },
    "Tectonica",
    [
        Text.of(" \u2507 +50% Damage on Tectonic Knife.").green(),
        Text.of(" \u2507 +20% Damage on Extinction Spear.").blue(),
        Text.of(" \u2507 +10% ranged penetration on Extinction Spear").blue(),

    ])
    .remove("Irradiated")
    .remove("Glowing")
);

global.tooltipModifiers.push(
    addArmorSetTooltip([
        Item.of('outer_end:cobalt_crystal_helmet'),
        Item.of('outer_end:cobalt_crystal_chestplate'),
        Item.of('outer_end:cobalt_crystal_leggings'),
        Item.of('outer_end:cobalt_crystal_boots')
    ],
    {
        helmet: ['outer_end:cobalt_crystal_helmet'],
        chestplate: ['outer_end:cobalt_crystal_chestplate'],
        leggings: ['outer_end:cobalt_crystal_leggings'],
        boots: ['outer_end:cobalt_crystal_boots'],
        mainhand: ['kubejs:none'],
        curios: ['kubejs:none'],
        offhand: ['kubejs:none']
    },
    "Cobalt Hands",
    [
        Text.of(" \u2507 Grants faster mining speed.").green(),
        Text.of(" \u2507 Weights victims.").blue(),
    ])
    .remove("Irradiated")
    .remove("Glowing")
);

global.tooltipModifiers.push(
    addArmorSetTooltip([
        Item.of('minecraft:iron_helmet'),
        Item.of('minecraft:iron_chestplate'),
        Item.of('minecraft:iron_leggings'),
        Item.of('minecraft:iron_boots'),
        Item.of('spartanshields:iron_tower_shield'),
        Item.of('spartanshields:iron_basic_shield')
    ],
    {
        helmet: ['minecraft:iron_helmet'],
        chestplate: ['minecraft:iron_chestplate'],
        leggings: ['minecraft:iron_leggings'],
        boots: ['minecraft:iron_boots'],
        mainhand: ['kubejs:none'],
        curios: ['kubejs:none'],
        offhand: ['spartanshields:iron_tower_shield','spartanshields:iron_basic_shield']

    },
    "Engarde",
    [
        Text.of(" \u2507 Increses armor points.").green(),
        Text.of(" \u2507 Higher armor amplification.").blue(),

    ])
    .remove("Irradiated")
    .remove("Glowing")
);


global.tooltipModifiers.push(
    addArmorSetTooltip([
          Item.of('cataclysm:bone_reptile_helmet'),
          Item.of('cataclysm:bone_reptile_chestplate'),
          Item.of('cataclysm:necklace_of_the_desert')
      ],
{
    helmet: ['cataclysm:bone_reptile_helmet'],
    chestplate: ['cataclysm:bone_reptile_chestplate'],
    leggings: ['kubejs:none'],
    boots: ['kubejs:none'],
    mainhand: ['cataclysm:khopesh','cataclysm:ancient_spear'],
    curios: ['cataclysm:necklace_of_the_desert'],
    offhand: ['cataclysm:khopesh','cataclysm:ancient_spear']
},
"Kobloidal Chaos",
[
    Text.of(" \u2507 Armor's construction leaves parts exposed.").green(),
    Text.of(" \u2507 Could enter Seige Mode but becomes immobile.").blue(),
    Text.of(" \u2507 Seige Mode grants Strength II and shields armor.").blue(),
])
  .remove('It looks like you can wake something up.....')
);
