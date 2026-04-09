// All craftable bows and weapon redux
ServerEvents.recipes(event => {
  event.remove({ output: '#spartanweaponry:silver_weapons' })
  event.remove({ output: 'spartanshields:silver_basic_shield' })
  event.remove({ output: 'spartanshields:silver_tower_shield' })
  // The Template
  // Maybe Change Stone to a dungsion exclusive drop and nerf the loops to 2

  event.shaped(
    Item.of('oreganized:silver_upgrade_smithing_template', 2),
    [
      'CBC',
      'BAB', // arg 2: the shape (array of strings)
      'CBC'
    ],
    {
      A: 'createbigcannons:bronze_upgrade_smithing_template',
      B: 'minecraft:blue_concrete',
      C: 'minecraft:builder_fragments',
    }
  )

}
)


ServerEvents.recipes(event => {

  const silver = [
    "horse_armor",
    "hoe",
    "axe",
    "pickaxe",
    "shovel",
    "sword"
  ]

  const silverspartan =
    [
      'dagger',
      'parrying_dagger',
      'longsword',
      'katana',
      'saber',
      'rapier',
      'greatsword',
      'battle_hammer',
      'warhammer',
      'spear',
      'halberd',
      'pike',
      'lance',
      'longbow',
      'heavy_crossbow',
      'throwing_knife',
      'tomahawk',
      'javelin',
      'boomerang',
      'battleaxe',
      'flanged_mace',
      'glaive',
      'quarterstaff',
      'scythe']

  for (let upgrade of silverspartan) {
    event.smithing(
      `spartanweaponry:silver_${upgrade}`,
      'oreganized:silver_upgrade_smithing_template',
      `spartanweaponry:iron_${upgrade}`,
      'oreganized:silver_ingot'
    )
  }

  for (let upgrade of silver) {
    event.smithing(
      `oreganized:silver_${upgrade}`,
      'oreganized:silver_upgrade_smithing_template',
      `minecraft:iron_${upgrade}`,
      'oreganized:silver_ingot'
    )
  }

  event.smithing(
    'farmersdelight:silver_knife',
    'oreganized:silver_upgrade_smithing_template',
    'farmersdelight:iron_knife',
    'oreganized:silver_ingot'
  )
  let shields = [
    "basic_shield",
    "tower_shield"
  ]
  for (let upgrade of shields) {
    event.smithing(
      `spartanshields:silver_${upgrade}`,
      'oreganized:silver_upgrade_smithing_template',
      `spartanshields:iron_${upgrade}`,
      'oreganized:silver_ingot'
    )
  }
})