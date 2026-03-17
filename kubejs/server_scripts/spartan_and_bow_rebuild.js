// All craftable bows and weapon redux copper
// Replace the padding with joints or smt
ServerEvents.recipes(event => {
event.remove({ output: '#spartanweaponry:copper_weapons' })
event.remove({ output: 'spartanshields:copper_basic_shield' })
event.remove({ output: 'spartanshields:copper_tower_shield' })
event.remove({ output: 'farmersdelight:bark' })

}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:copper_axe', 1), // arg 1: output
  [
    'AA ',
    'AB ', // arg 2: the shape (array of strings)
    ' E '
  ],
  {
    A: 'minecraft:copper_ingot',
    E: 'spartanweaponry:handle',
    B: ['minecraft:slime_ball','minecraft:honeycomb','minecraft:honey_bottle']
  }
).replaceIngredient('minecraft:honey_bottle','minecraft:glass_bottle')
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:copper_shovel', 1), // arg 1: output
  [
    ' A ',
    ' B ', // arg 2: the shape (array of strings)
    ' E '
  ],
  {
    A: 'minecraft:copper_ingot',
    E: 'spartanweaponry:handle',
    B: ['minecraft:slime_ball','minecraft:honeycomb','minecraft:honey_bottle']
  }
).replaceIngredient('minecraft:honey_bottle','minecraft:glass_bottle')
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:copper_hoe', 1), // arg 1: output
  [
    'AA ',
    ' B ', // arg 2: the shape (array of strings)
    ' E '
  ],
  {
    A: 'minecraft:copper_ingot',
    E: 'spartanweaponry:handle',
    B: ['minecraft:slime_ball','minecraft:honeycomb','minecraft:honey_bottle']
  }
).replaceIngredient('minecraft:honey_bottle','minecraft:glass_bottle')
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('farmersdelight:copper_knife', 1), // arg 1: output
  [
    'BA',
    'E '
  ],
  {
   A: 'minecraft:copper_ingot',
   E: 'minecraft:stick',
   B: ['minecraft:slime_ball','minecraft:honeycomb','minecraft:honey_bottle']
}).replaceIngredient('minecraft:honey_bottle','minecraft:glass_bottle')
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_longbow', 1), // arg 1: output
  [
    'AWB',
    'WQE',
    'BEE'

  ],
  {
   A: 'spartanweaponry:handle',
   W: 'minecraft:copper_ingot',
   B: 'minecraft:stick',
   E: 'minecraft:string',
   Q: ['minecraft:slime_ball','minecraft:honeycomb','minecraft:honey_bottle'],
}).replaceIngredient('minecraft:honey_bottle','minecraft:glass_bottle')
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_heavy_crossbow', 1), // arg 1: output
  [
    'WBW',
    'ELE',
    'QHQ'

  ],
  {
   W: 'minecraft:copper_ingot',
   B: 'spartanweaponry:wooden_longbow',
   L: 'minecraft:tripwire_hook',
   H: 'spartanweaponry:handle',
   E: '#minecraft:planks',
   Q: ['minecraft:slime_ball','minecraft:honeycomb','minecraft:honey_bottle']
}).replaceIngredient('minecraft:honey_bottle','minecraft:glass_bottle')
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanshields:copper_basic_shield', 1), // arg 1: output
  [
    'QW ',
    'WBW',
    ' WQ'

  ],
  {
   W: 'minecraft:copper_ingot',
   B: 'spartanshields:wooden_basic_shield',
   Q: ['minecraft:slime_ball','minecraft:honeycomb','minecraft:honey_bottle']
}).replaceIngredient('minecraft:honey_bottle','minecraft:glass_bottle')
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanshields:copper_tower_shield', 1), // arg 1: output
  [
    'QW ',
    'WBW',
    ' WQ'

  ],
  {
   W: 'minecraft:copper_ingot',
   B: 'spartanshields:wooden_tower_shield',
   Q: ['minecraft:slime_ball','minecraft:honeycomb','minecraft:honey_bottle']
}).replaceIngredient('minecraft:honey_bottle','minecraft:glass_bottle')
}
)



ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_throwing_knife', 1), // arg 1: output
  [
    ' B ',
    ' A ',
    ' E '
  ],
  {
    A: 'farmersdelight:copper_knife',
    B: 'create:copper_nugget',
    E: 'spartanweaponry:handle'
  }
).replaceIngredient('minecraft:honey_bottle','minecraft:glass_bottle')
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:copper_sword', 1), // arg 1: output
  [
    'A  ',
    ' AB', // arg 2: the shape (array of strings)
    ' BE'
  ],
  {
    A: 'minecraft:copper_ingot',
    E: 'spartanweaponry:handle',
    B: ['minecraft:slime_ball','minecraft:honeycomb','minecraft:honey_bottle']
  }
).replaceIngredient('minecraft:honey_bottle','minecraft:glass_bottle')
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_dagger', 1), // arg 1: output
  [
    'BA ',
    ' E '// arg 2: the shape (array of strings)
  ],
  {
    A: 'minecraft:copper_ingot',
    E: 'spartanweaponry:handle',
    B: ['minecraft:slime_ball','minecraft:honeycomb','minecraft:honey_bottle']
  }
).replaceIngredient('minecraft:honey_bottle','minecraft:glass_bottle')
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_quarterstaff', 1), // arg 1: output
  [
    ' BA',
    ' E ',
    'AB '// arg 2: the shape (array of strings)
  ],
  {
    A: 'minecraft:copper_ingot',
    E: 'spartanweaponry:pole',
    B: ['minecraft:slime_ball','minecraft:honeycomb','minecraft:honey_bottle']
  }
).replaceIngredient('minecraft:honey_bottle','minecraft:glass_bottle')
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_spear', 1), // arg 1: output
  [
    'A  ',
    ' Q ',
    '  E'
  ],
  {
    A: 'spartanweaponry:copper_dagger',
    E: 'spartanweaponry:pole',
    Q: 'minecraft:string',
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_pike', 1), // arg 1: output
  [
    'A  ',
    ' E ',
    '  Q'
  ],
  {
    A: 'spartanweaponry:copper_dagger',
    E: 'minecraft:string',
    Q: 'spartanweaponry:pole'

  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_parrying_dagger', 1), // arg 1: output
  [
    'BAB'
  ],
  {
    A: 'spartanweaponry:copper_dagger',
    B: 'create:copper_nugget'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_glaive', 1), // arg 1: output
  [
    'A  ',
    'PB ',
    '  E'

  ],
  {
    A: 'spartanweaponry:copper_dagger',
    P: 'minecraft:copper_ingot',
    E: 'spartanweaponry:pole',
    B: 'minecraft:string'
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_javelin', 1), // arg 1: output
  [
    '  A',
    ' EB'

  ],
  {
    A: 'spartanweaponry:copper_dagger',
    E: 'spartanweaponry:pole',
    B: 'minecraft:string'
  }
)
  }
)



ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_halberd', 1), // arg 1: output
  [
    ' P ',
    'PA ',
    'PE '

  ],
  {
    A: 'minecraft:copper_axe',
    P: 'minecraft:copper_ingot',
    E: 'spartanweaponry:pole'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_battleaxe', 1), // arg 1: output
  [
    ' P ',
    'PAP',
    ' EP'

  ],
  {
    A: 'minecraft:copper_axe',
    P: 'minecraft:copper_ingot',
    E: 'spartanweaponry:handle'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_flanged_mace', 1), // arg 1: output
  [
    'PPP',
    'PAP',
    ' E '

  ],
  {
    A: 'minecraft:copper_shovel',
    P: 'minecraft:copper_ingot',
    E: 'spartanweaponry:handle'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_lance', 1), // arg 1: output
  [
    '  A',
    ' PB',
    'E  '

  ],
  {
    A: 'minecraft:copper_shovel',
    P: 'minecraft:copper_ingot',
    E: 'spartanweaponry:pole',
    B: 'minecraft:string'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_boomerang', 1), // arg 1: output
  [
    'PBB',
    'BOE',
    'B  '

  ],
  {
    P: 'minecraft:copper_ingot',
    O: 'minecraft:string',
    B: '#minecraft:planks',
    E: ['minecraft:slime_ball','minecraft:honeycomb','minecraft:honey_bottle']
  }
).replaceIngredient('minecraft:honey_bottle','minecraft:glass_bottle')
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_warhammer', 1), // arg 1: output
  [
    ' B ',
    'PO ',
    ' E '

  ],
  {
    P: 'minecraft:copper_shovel',
    E: 'spartanweaponry:pole',
    O: 'minecraft:string',
    B: 'minecraft:copper_ingot'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_battle_hammer', 1), // arg 1: output
  [
    ' O ',
    'OPO',
    ' E '

  ],
  {
    P: 'minecraft:copper_pickaxe',
    E: 'spartanweaponry:pole',
    O: 'minecraft:copper_ingot'

  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_tomahawk', 1), // arg 1: output
  [
    'QO ',
    'QE '
  ],
  {
    E: 'spartanweaponry:handle',
    O: ['minecraft:slime_ball','minecraft:honeycomb','minecraft:honey_bottle'],
    Q: 'minecraft:copper_ingot'

  }
).replaceIngredient('minecraft:honey_bottle','minecraft:glass_bottle')
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_saber', 1), // arg 1: output
  [
    '  P',
    ' P ',
    'FE '

  ],
  {
    P: 'minecraft:copper_ingot',
    E: 'minecraft:copper_sword',
    F: 'create:copper_nugget'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_katana', 1), // arg 1: output
  [
    '  F',
    ' P ',
    'E  '

  ],
  {
    P: 'minecraft:copper_ingot',
    E: 'minecraft:copper_sword',
    F: 'create:copper_nugget'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_greatsword', 1), // arg 1: output
  [
    ' P ',
    'FEF',
    'FGF'

  ],
  {
    P: 'minecraft:copper_ingot',
    E: 'minecraft:copper_sword',
    F: 'create:copper_nugget',
    G: 'spartanweaponry:handle'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_rapier', 1), // arg 1: output
  [
    ' P ',
    'FPF',
    ' E '

  ],
  {
    P: 'minecraft:copper_ingot',
    E: 'minecraft:copper_sword',
    F: 'create:copper_nugget'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_longsword', 1), // arg 1: output
  [
    ' P ',
    ' P ',
    ' E '

  ],
  {
    P: 'minecraft:copper_ingot',
    E: 'minecraft:copper_sword',
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:copper_scythe', 1), // arg 1: output
  [
    'PP ',
    '  E',
    '  G'

  ],
  {
    P: 'minecraft:copper_ingot',
    E: 'minecraft:copper_hoe',
    G: 'spartanweaponry:pole'
  }
)
  }
)
