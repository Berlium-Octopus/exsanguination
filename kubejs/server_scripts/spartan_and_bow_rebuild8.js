// All craftable bows and weapon redux
ServerEvents.recipes(event => {
  event.remove({ output: '#spartanweaponry:bronze_weapons' })
  event.remove({ output: 'spartanshields:bronze_basic_shield' })
  event.remove({ output: 'spartanshields:bronze_tower_shield' })


  event.shaped(
    Item.of('createbigcannons:bronze_upgrade_smithing_template', 2),
    [
      'CBC',
      'BAB', // arg 2: the shape (array of strings)
      'CBC'
    ],
    {
      A: 'createbigcannons:bronze_upgrade_smithing_template',
      B: 'minecraft:red_concrete',
      C: 'minecraft:builder_fragments',
    }
  )

    event.recipes.create.sequenced_assembly([
      Item.of('createbigcannons:bronze_ingot'), 
    ], 'minecraft:copper_ingot', [ 
      event.recipes.createDeploying('minecraft:copper_ingot', ['minecraft:copper_ingot', 'oreganized:lead_ingot']),
      event.recipes.createPressing('minecraft:copper_ingot', ['minecraft:copper_ingot'])
    ]).transitionalItem('minecraft:copper_ingot').loops(1)

}
)


ServerEvents.recipes(event => {

  const bronze = [
    "horse_armor",
    "hoe",
    "axe",
    "pickaxe",
    "shovel",
    "sword"
  ]

  const bronzespartan =
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

  for (let upgrade of bronzespartan) {
    event.smithing(
      `spartanweaponry:bronze_${upgrade}`,
      'createbigcannons:bronze_upgrade_smithing_template',
      `spartanweaponry:copper_${upgrade}`,
      'createbigcannons:bronze_ingot'
    )
  }

  for (let upgrade of bronze) {
    event.smithing(
      `createbigcannons:bronze_${upgrade}`,
      'createbigcannons:bronze_upgrade_smithing_template',
      `minecraft:copper_${upgrade}`,
      'createbigcannons:bronze_ingot'
    )
  }

  event.smithing(
    'farmersdelight:bronze_knife',
    'createbigcannons:bronze_upgrade_smithing_template',
    'farmersdelight:copper_knife',
    'createbigcannons:bronze_ingot'
  )
  let shields = [
    "basic_shield",
    "tower_shield"
  ]
  for (let upgrade of shields) {
    event.smithing(
      `spartanshields:bronze_${upgrade}`,
      'createbigcannons:bronze_upgrade_smithing_template',
      `spartanshields:copper_${upgrade}`,
      'createbigcannons:bronze_ingot'
    )
  }
})