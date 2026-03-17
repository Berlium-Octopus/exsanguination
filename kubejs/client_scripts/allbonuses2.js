// priority: 100
global.tooltipModifiers.push(
    addArmorSetTooltip([
        Item.of('alexscaves_torpedoes:magnetic_helmet'),
        Item.of('alexscaves:resistor_shield'),
        Item.of('alexscaves_torpedoes:pocket_magnet'),
        Item.of('alexscaves_torpedoes:ferrousslime_boots')
    ],
    {
        helmet: ['alexscaves_torpedoes:magnetic_helmet'],
        chestplate: ['kubejs:none'],
        leggings: ['kubejs:none'],
        boots: ['alexscaves_torpedoes:ferrousslime_boots'],
        offhand: ['alexscaves:resistor_shield'],
        mainhand: ['#alexscaves_torpedoes:magnet_bonus_damage'],
        curios: ['alexscaves_torpedoes:pocket_magnet']

    },
    "Magnetic Connundrum",
    [
        Text.of(" \u2507 1+ Azure tool reach.").green(),
        Text.of(" \u2507 -5 Scarlet tool knockback.").green(),
        Text.of(" \u2507 -35% melee resistance.").green(),
        Text.of(" \u2507 +12.5% ranged resistance.").green(),
        Text.of(" \u2507 +45% melee damage.").blue()
    ])
        .remove("Can attract you temporarily under the metallic blocks")
        .remove("A bouncy hoverboard")
        .remove("Attract and repulse metallic items")
        .remove("Irradiated")
        .remove("Glowing")
);

global.tooltipModifiers.push(
    addArmorSetTooltip([
        Item.of('minecraft:diamond_helmet'),
        Item.of('minecraft:diamond_chestplate'),
        Item.of('minecraft:diamond_leggings'),
        Item.of('minecraft:diamond_boots'),
        Item.of('spartanshields:diamond_tower_shield'),
        Item.of('spartanshields:diamond_basic_shield')
    ],
    {
        helmet: ['minecraft:diamond_helmet'],
        chestplate: ['minecraft:diamond_chestplate'],
        leggings: ['minecraft:diamond_leggings'],
        boots: ['minecraft:diamond_boots'],
        mainhand: ['kubejs:none'],
        curios: ['kubejs:none'],
        offhand: ['spartanshields:diamond_tower_shield','spartanshields:diamond_basic_shield']

    },
    "Crystallised Engarde",
    [
        Text.of(" \u2507 Grants incresed armor toughness.").green(),
        Text.of(" \u2507 Higher armor toughness amplification.").blue()
    ])
    .remove("Irradiated")
    .remove("Glowing")
)

global.tooltipModifiers.push(
    addArmorSetTooltip([
        Item.of('outer_end:mint_crystal_helmet'),
        Item.of('outer_end:mint_crystal_chestplate'),
        Item.of('outer_end:mint_crystal_leggings'),
        Item.of('outer_end:mint_crystal_boots')
    ],
    {
        helmet: ['outer_end:mint_crystal_helmet'],
        chestplate: ['outer_end:mint_crystal_chestplate'],
        leggings: ['outer_end:mint_crystal_leggings'],
        boots: ['outer_end:mint_crystal_boots'],
        mainhand: ['kubejs:none'],
        curios: ['kubejs:none'],
        offhand: ['kubejs:none']
    },
    "Minty Legs",
    [
        Text.of(" \u2507 Expands movement capabilities.").green(),
        Text.of(" \u2507 Perplexes victims.").blue()
    ])
    .remove("Irradiated")
    .remove("Glowing")
);

global.tooltipModifiers.push(
    addArmorSetTooltip([
        Item.of('vinery:straw_hat'),
        Item.of('vinery:winemaker_apron'),
        Item.of('vinery:winemaker_leggings'),
        Item.of('vinery:winemaker_boots')
    ],
    {
        helmet: ['vinery:straw_hat'],
        chestplate: ['vinery:winemaker_apron'],
        leggings: ['vinery:winemaker_leggings'],
        boots: ['vinery:winemaker_boots'],
        mainhand: ['#spartanweaponry:scythes'],
        curios: ['kubejs:none'],
        offhand: ['kubejs:none']
    },
    "Winemaker's Desire",
    [
        Text.of(" \u2507 Uses armor instead of Bone Meal.").green(),
        Text.of(" \u2507 +50% damage on scythes.").blue()
    ])
        .remove("Winemaker's Desire")
        .remove("Bone Meal won't get consumed anymore")
        .remove('[S')
        .remove('[W')
        .remove('set bonus')
        .remove('Bonemeal').removeEmpty()
);
// Something is wrong here
global.tooltipModifiers.push(
    addArmorSetTooltip([
        Item.of('deeperdarker:warden_helmet'),
        Item.of('deeperdarker:warden_chestplate'),
        Item.of('deeperdarker:warden_leggings'),
        Item.of('deeperdarker:warden_boots')
    ],
    {
        helmet: ['deeperdarker:warden_helmet'],
        chestplate: ['deeperdarker:warden_chestplate'],
        leggings: ['deeperdarker:warden_leggings'],
        boots: ['deeperdarker:warden_boots'],
        mainhand: ['kubejs:none'],
        curios: ['kubejs:none'],
        offhand: ['kubejs:none']
    },
    "Warden Sickness",
    [
        Text.of(" \u2507 Infested with sculk and mites.").green(),
        Text.of(" \u2507 Each piece soulbleeds the wearer.").green(),
        Text.of(" \u2507 Immunity to soulbleed.").blue()
    ])
    .remove("Irradiated")
    .remove("Glowing")
);

global.tooltipModifiers.push(
    addArmorSetTooltip([
        Item.of('outer_end:rose_crystal_helmet'),
        Item.of('outer_end:rose_crystal_chestplate'),
        Item.of('outer_end:rose_crystal_leggings'),
        Item.of('outer_end:rose_crystal_boots')
    ],
    {
        helmet: ['outer_end:rose_crystal_helmet'],
        chestplate: ['outer_end:rose_crystal_chestplate'],
        leggings: ['outer_end:rose_crystal_leggings'],
        boots: ['outer_end:rose_crystal_boots'],
        mainhand: ['outer_end:rose_crystal_sword'],
        curios: ['kubejs:none'],
        offhand: ['kubejs:none']
    },
    "Vanilla Healing",
    [
        Text.of(" \u2507 Heals hearts over time.").green(),
        Text.of(" \u2507 Levitates victims.").blue()
    ])
    .remove("Irradiated")
    .remove("Glowing")
);


global.tooltipModifiers.push(
    addArmorSetTooltip([
          Item.of('alexscaves:hood_of_darkness'),
          Item.of('alexscaves:cloak_of_darkness'),
          Item.of('alexscaves:totem_of_possession')
      ],
{
    helmet: ['alexscaves:hood_of_darkness'],
    chestplate: ['alexscaves:cloak_of_darkness'],
    leggings: ['kubejs:none'],
    boots: ['kubejs:none'],
    mainhand: ['alexscaves:dreadbow','alexscaves:desolate_dagger','alexscavesdelight:pure_darkness_knife'],
    curios: ['alexscaves:totem_of_possession'],
    offhand: ['kubejs:none']
},
"Heretic Purity",
[
    Text.of(" \u2507 +450% Damage on Pure Darkness Blades.").green(),
    Text.of(" \u2507 +50% Dreadbow Damage.").green(),
    Text.of(" \u2507 Grants Speed I.").blue(),
    Text.of(" \u2507 Grants Strength I.").blue()
])
);

global.tooltipModifiers.push(
    addArmorSetTooltip([
          Item.of('minecraft:leather_helmet'),
          Item.of('minecraft:leather_chestplate'),
          Item.of('minecraft:leather_leggings'),
          Item.of('minecraft:leather_boots')
      ],
{
    helmet: ['minecraft:leather_helmet'],
    chestplate: ['minecraft:leather_chestplate'],
    leggings: ['minecraft:leather_leggings'],
    boots: ['minecraft:leather_boots'],
    mainhand: ['#spartanweaponry:longbows','minecraft:bow'],
    curios: ['supplementaries:quiver','#spartanweaponry:arrow_quivers'],
    offhand: ['kubejs:none']
},
"Master Archer",
[
    Text.of(" \u2507 Grants Trueshot II.").green(),
    Text.of(" \u2507 +16 More Hearts.").blue(),
    Text.of(" \u2507 Grants Trueshot IV.").blue(),
    Text.of(" \u2507 Skeleton Quiver + Quiver Combo To Activate").blue(),
])
.remove("Irradiated")
.remove("Glowing")
);
global.tooltipModifiers.push(
    addArmorSetTooltip([
        Item.of('create:netherite_diving_helmet'),
        Item.of('create:netherite_backtank'),
        Item.of('create:netherite_diving_boots'),
        Item.of('create:netherite_diving_helmet'),
        Item.of('create:netherite_backtank'),
        Item.of('create:netherite_diving_boots'),
        Item.of('create:copper_diving_helmet'),
        Item.of('create:copper_backtank'),
        Item.of('create:copper_diving_boots'),
        Item.of('create:copper_diving_helmet'),
        Item.of('create:copper_backtank'),
        Item.of('create:copper_diving_boots'),
        Item.of('create:goggles')
    ],
    {
        helmet: ['create:netherite_diving_helmet','create:copper_diving_helmet'],
        chestplate: ['create:netherite_backtank','create:copper_backtank'],
        leggings: ['kubejs:none'],
        boots: ['create:netherite_diving_boots','create:copper_diving_boots'],
        mainhand: ['kubejs:none'],
        curios: ['create:goggles'],
        offhand: ['kubejs:none']
    },
    "Cogwheeled Perfection",
    [
        Text.of(" \u2507 Backtank needs to be in the chest slot.").blue(),
        Text.of(" \u2507 Grants Haste when in lava and on fire.").blue(),
        Text.of(" \u2507 Grants Resistance when in water.").blue()
    ])
    .remove("Aqua Affinity")
    .remove("Irradiated")
    .remove("Glowing")
);
// SUS?
// SUS? = YES sus code
