global.tooltipModifiers.push(
    addArmorSetTooltip([
          Item.of('biomemakeover:cladded_helmet'),
          Item.of('biomemakeover:cladded_chestplate'),
          Item.of('biomemakeover:cladded_leggings'),
          Item.of('biomemakeover:cladded_boots')
      ],
{
    helmet: ['biomemakeover:cladded_helmet'],
    chestplate: ['biomemakeover:cladded_chestplate'],
    leggings: ['biomemakeover:cladded_leggings'],
    boots: ['biomemakeover:cladded_boots'],
    mainhand: ['#spartanweaponry:heavy_crossbows','minecraft:crossbow'],
    curios: ['kubejs:none'],
    offhand: ['kubejs:none']
},
"Pillage & Ravage",
[
    Text.of(" \u2507 Greater experience gain.").green(),
    Text.of(" \u2507 -70% Reach + -150% Melee Resistance").green(),
    Text.of(" \u2507 Grants Trueshot II").green(),
    Text.of(" \u2507 +32 More Hearts.").blue(),
    Text.of(" \u2507 +10% Gun Damage.").blue(),
])
.remove("Irradiated")
.remove("Glowing")
);


global.tooltipModifiers.push(
    addArmorSetTooltip([
          Item.of('create:cardboard_helmet'),
          Item.of('create:cardboard_chestplate'),
          Item.of('create:cardboard_leggings'),
          Item.of('create:cardboard_boots')
      ],
{
    helmet: ['create:cardboard_helmet'],
    chestplate: ['create:cardboard_chestplate'],
    leggings: ['create:cardboard_leggings'],
    boots: ['create:cardboard_boots'],
    mainhand: ['kubejs:none'],
    curios: ['kubejs:none'],
    offhand: ['kubejs:none']
},
"Like A Snake",
[
    Text.of(" \u2507 Stealthy When Sneaking.").green(),
    Text.of(" \u2507 Grans 30% Fall Reduction.").blue(),
    Text.of(" \u2507 Grants 50% More Knockback.").blue(),
])
.remove("Irradiated")
.remove("Glowing")
);


global.tooltipModifiers.push(
    addArmorSetTooltip([
          Item.of('oreganized:electrum_helmet'),
          Item.of('oreganized:electrum_chestplate'),
          Item.of('oreganized:electrum_leggings'),
          Item.of('oreganized:electrum_boots')
      ],
{
    helmet: ['oreganized:electrum_helmet'],
    chestplate: ['oreganized:electrum_chestplate'],
    leggings: ['oreganized:electrum_leggings'],
    boots: ['oreganized:electrum_boots'],
    mainhand: ['#spartanweaponry:heavy_crossbows','minecraft:crossbow'],
    curios: ['kubejs:none'],
    offhand: ['spartanshields:electrum_basic_shield','spartanshields:electrum_tower_shield']
},
"Above & Below",
[
    Text.of(" \u2507 +55% Kinetic Damage With Shield.").blue(),
    Text.of(" \u2507 +150% Roll Recharge Recovery.").blue(),
])
.remove("Irradiated")
.remove("Glowing")
);
