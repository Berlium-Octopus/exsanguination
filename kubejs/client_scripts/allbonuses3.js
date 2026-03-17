global.tooltipModifiers.push(
    addArmorSetTooltip([
          Item.of('cataclysm:ignitium_helmet'),
          Item.of('cataclysm:ignitium_elytra_chestplate'),
          Item.of('cataclysm:ignitium_chestplate'),
          Item.of('cataclysm:ignitium_leggings'),
          Item.of('cataclysm:ignitium_boots')
      ],
{
    helmet: ['cataclysm:ignitium_helmet'],
    chestplate: ['cataclysm:ignitium_elytra_chestplate','cataclysm:ignitium_chestplate'],
    leggings: ['cataclysm:ignitium_leggings'],
    boots: ['cataclysm:ignitium_boots'],
    mainhand: ['kubejs:none'],
    curios: ['kubejs:none'],
    offhand: ['kubejs:none']
},
"Still Alive",
[
    Text.of(" \u2507 Grants fire/lava based buffs.").green(),
    Text.of(" \u2507 Explodes the wearer and breaks bones.").green(),
    Text.of(" \u2507 +15% Armor Shred.").blue(),
    Text.of(" \u2507 Calms the armor's sentience.").blue()
])
// EMM ERROR CONDE?
//
// '
//
.remove('Flame Reflex')
.remove('Can be combined with an elytra')
.remove('Lava Walker')
.remove('Lava Friendly')
.remove("Irradiated")
.remove("Glowing")

);

global.tooltipModifiers.push(
    addArmorSetTooltip([
          Item.of('cataclysm:cursium_helmet'),
          Item.of('cataclysm:cursium_chestplate'),
          Item.of('cataclysm:cursium_leggings'),
          Item.of('cataclysm:cursium_boots')
      ],
{
    helmet: ['cataclysm:cursium_helmet'],
    chestplate: ['cataclysm:cursium_chestplate'],
    leggings: ['cataclysm:cursium_leggings'],
    boots: ['cataclysm:cursium_boots'],
    mainhand: ['kubejs:none'],
    curios: ['kubejs:none'],
    offhand: ['kubejs:none']
},
"Curse Of Maledictus",
[
    Text.of(" \u2507 Ghost Vision and Weightless'[' ']'.").green(),
    Text.of(" \u2507 Higher chance to dodge projectiles").green(),
    Text.of(" \u2507 Significantly lower damage potential.").green(),
    Text.of(" \u2507 Significantly higher magic potential.").blue(),
    Text.of(" \u2507 Strenght III on Cursium and Black Steel Weapons.").blue()

])
.remove('Ghost Vision')
.remove('Press ')
.remove('Undead Revive')
.remove('Revived to 5 health upon death and granted invincibility for 5 seconds')
.remove('After invincible, the Entity is debuffed for 6 minutes and cannot be revived during debuff')
.remove('Ghost Dodge')
.remove('Ignore the attack with a low probability. The probability increases if the attack is a projectile')
.remove('Ghostly Weightless')
.remove('Reduce fall damage, Press V to back step')
.remove("Irradiated")
.remove("Glowing")
);

global.tooltipModifiers.push(
    addArmorSetTooltip([
          Item.of('alexscaves:primordial_helmet'),
          Item.of('alexscaves:primordial_tunic'),
          Item.of('alexscaves:primordial_pants'),
          Item.of('alexscaves:heavy_bone')
      ],
{
    helmet: ['alexscaves:primordial_helmet'],
    chestplate: ['alexscaves:primordial_tunic'],
    leggings: ['alexscaves:primordial_pants'],
    boots: ['kubejs:none'],
    mainhand: ['alexscaves:heavy_bone','alexscaves:limestone_spear'],
    curios: ['kubejs:none'],
    offhand: ['alexscaves:primitive_club']
},
"Bony Bone",
[
    Text.of(" \u2507 Heavy Bone on Main Hand Grants Buffs.").green(),
    Text.of(" \u2507 +0.5 range on Off Hand Primitive Club.").green(),
    Text.of(" \u2507 +25% ranged damage on Off Hand Limestone Spear.").green(),
    Text.of(" \u2507 +15% damage and speed on Primitive Club.").blue(),
    Text.of(" \u2507 +64 More Hearts.").blue(),
])
);

global.tooltipModifiers.push(
    addArmorSetTooltip([
          Item.of('rootoffear:wraithwood_helmet'),
          Item.of('rootoffear:wraithwood_chestplate'),
          Item.of('rootoffear:wraithwood_leggings'),
          Item.of('rootoffear:wraithwood_boots'),
          Item.of('spartanweaponry:studded_cestus'),

      ],
{
    helmet: ['rootoffear:wraithwood_helmet'],
    chestplate: ['rootoffear:wraithwood_chestplate'],
    leggings: ['rootoffear:wraithwood_leggings'],
    boots: ['rootoffear:wraithwood_boots'],
    mainhand: ['spartanweaponry:studded_cestus'],
    curios: ['kubejs:none'],
    offhand: ['spartanweaponry:studded_cestus']
},
"Wilted's Might",
[
    Text.of(" \u2507 Sets the user on fire near light sources.").green(),
    Text.of(" \u2507 Funtional Immortality with Wraith Cestuses.").blue(),
    Text.of(" \u2507 Buffs removed when on lava.").blue(),
])
);

global.tooltipModifiers.push(
    addArmorSetTooltip([
          Item.of('rootoffear:fadedwood_helmet'),
          Item.of('rootoffear:fadedwood_chestplate'),
          Item.of('rootoffear:fadedwood_leggings'),
          Item.of('rootoffear:fadedwood_boots'),
          Item.of('rootoffear:fadedwood_right_cuffs'),
          Item.of('rootoffear:fadedwood_left_cuffs')
      ],
{
    helmet: ['rootoffear:fadedwood_helmet'],
    chestplate: ['rootoffear:fadedwood_chestplate'],
    leggings: ['rootoffear:fadedwood_leggings'],
    boots: ['rootoffear:fadedwood_boots'],
    mainhand: ['rootoffear:fadedwood_right_cuffs'],
    curios: ['kubejs:none'],
    offhand: ['rootoffear:fadedwood_left_cuffs']
},
"Elderich Corpse",
[
    Text.of(" \u2507 Sets the user on fire near light sources.").green(),
    Text.of(" \u2507 Awakening dose nothing.").blue(),
])
);
