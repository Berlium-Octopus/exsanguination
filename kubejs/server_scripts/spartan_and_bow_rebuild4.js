// All craftable bows and weapon redux
ServerEvents.recipes(event => {
event.remove({ output: '#spartanweaponry:golden_weapons' })
event.remove({ output: 'spartanshields:golden_basic_shield' })
event.remove({ output: 'spartanshields:golden_tower_shield' })
event.remove({ output: 'farmersdelight:golden_knife' })
event.remove({ output: 'alexscavesdelight:uranium_knife' })
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('alexscavesdelight:uranium_knife', 1), // arg 1: output
  [
    'BA',
    'E '
  ],
  {
   A: 'alexscaves:uranium',
   E: 'minecraft:stick',
   B: 'minecraft:string'
})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('farmersdelight:golden_knife', 1), // arg 1: output
  [
    'BA',
    'E '
  ],
  {
   A: 'minecraft:gold_ingot',
   E: 'minecraft:stick',
   B: 'minecraft:string'
})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_longbow', 1), // arg 1: output
  [
    'AWB',
    'W E',
    'BEE'

  ],
  {
   A: 'spartanweaponry:handle',
   W: 'minecraft:gold_ingot',
   B: 'minecraft:stick',
   E: 'minecraft:string'
})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_heavy_crossbow', 1), // arg 1: output
  [
    'WBW',
    'ELE',
    ' H '

  ],
  {
   W: 'minecraft:gold_ingot',
   B: 'spartanweaponry:wooden_longbow',
   L: 'minecraft:tripwire_hook',
   H: 'spartanweaponry:handle',
   E: '#minecraft:planks',

})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanshields:golden_basic_shield', 1), // arg 1: output
  [
    ' W ',
    'WBW',
    ' W '

  ],
  {
   W: 'create:golden_sheet',
   B: 'spartanshields:wooden_basic_shield',

})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanshields:golden_tower_shield', 1), // arg 1: output
  [
    ' W ',
    'WBW',
    ' W '

  ],
  {
   W: 'create:golden_sheet',
   B: 'spartanshields:wooden_tower_shield',

})
}
)



ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_throwing_knife', 1), // arg 1: output
  [
    ' B ',
    ' A ',
    ' E '
  ],
  {
    A: 'farmersdelight:golden_knife',
    B: 'minecraft:gold_nugget',
    E: 'spartanweaponry:handle'
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_dagger', 1), // arg 1: output
  [
    'BA ',
    ' E '// arg 2: the shape (array of strings)
  ],
  {
    A: 'minecraft:gold_ingot',
    E: 'spartanweaponry:handle',
    B: 'minecraft:string'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_quarterstaff', 1), // arg 1: output
  [
    ' BA',
    ' E ',
    'AB '// arg 2: the shape (array of strings)
  ],
  {
    A: 'minecraft:gold_ingot',
    E: 'spartanweaponry:pole',
    B: 'minecraft:string'
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_spear', 1), // arg 1: output
  [
    'A  ',
    ' Q ',
    '  E'
  ],
  {
    A: 'spartanweaponry:golden_dagger',
    E: 'spartanweaponry:pole',
    Q: 'minecraft:string',
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_pike', 1), // arg 1: output
  [
    'A  ',
    ' E ',
    '  Q'
  ],
  {
    A: 'spartanweaponry:golden_dagger',
    E: 'minecraft:string',
    Q: ['spartanweaponry:pole']

  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_parrying_dagger', 1), // arg 1: output
  [
    'BAB'
  ],
  {
    A: 'spartanweaponry:golden_dagger',
    B: 'minecraft:gold_nugget'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_glaive', 1), // arg 1: output
  [
    'A  ',
    'PB ',
    '  E'

  ],
  {
    A: 'spartanweaponry:golden_dagger',
    P: 'minecraft:gold_ingot',
    E: 'spartanweaponry:pole',
    B: 'minecraft:string'
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_javelin', 1), // arg 1: output
  [
    '  A',
    ' EB'

  ],
  {
    A: 'spartanweaponry:golden_dagger',
    E: 'spartanweaponry:pole',
    B: 'minecraft:string'
  }
)
  }
)



ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_halberd', 1), // arg 1: output
  [
    ' P ',
    'PA ',
    'PE '

  ],
  {
    A: 'minecraft:golden_axe',
    P: 'minecraft:gold_ingot',
    E: 'spartanweaponry:pole'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_battleaxe', 1), // arg 1: output
  [
    ' P ',
    'PAP',
    ' EP'

  ],
  {
    A: 'minecraft:golden_axe',
    P: 'minecraft:gold_ingot',
    E: 'spartanweaponry:handle'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_flanged_mace', 1), // arg 1: output
  [
    'PPP',
    'PAP',
    ' E '

  ],
  {
    A: 'minecraft:golden_shovel',
    P: 'minecraft:gold_ingot',
    E: 'spartanweaponry:handle'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_lance', 1), // arg 1: output
  [
    '  A',
    ' P ',
    'E  '

  ],
  {
    A: 'minecraft:golden_shovel',
    P: 'minecraft:gold_ingot',
    E: 'spartanweaponry:pole',
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_boomerang', 1), // arg 1: output
  [
    'PBB',
    'BO ',
    'B  '

  ],
  {
    P: 'minecraft:gold_ingot',
    O: 'minecraft:string',
    B: '#minecraft:planks',
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_warhammer', 1), // arg 1: output
  [
    ' B ',
    'PO ',
    ' E '

  ],
  {
    P: 'minecraft:golden_shovel',
    E: 'spartanweaponry:pole',
    O: 'minecraft:gold_nugget',
    B: 'minecraft:gold_ingot'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_battle_hammer', 1), // arg 1: output
  [
    ' O ',
    'OPO',
    ' EW'

  ],
  {
    P: 'minecraft:golden_pickaxe',
    E: 'spartanweaponry:pole',
    O: 'minecraft:gold_ingot',
    W: 'minecraft:string',

  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_tomahawk', 1), // arg 1: output
  [
    'QO ',
    'QE '
  ],
  {
    E: 'spartanweaponry:handle',
    O: 'minecraft:string',
    Q: 'minecraft:gold_ingot'

  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_saber', 1), // arg 1: output
  [
    '  P',
    ' P ',
    'FE '

  ],
  {
    P: 'minecraft:gold_ingot',
    E: 'minecraft:golden_sword',
    F: 'minecraft:gold_nugget'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_katana', 1), // arg 1: output
  [
    '  F',
    ' P ',
    'E  '

  ],
  {
    P: 'minecraft:gold_ingot',
    E: 'minecraft:golden_sword',
    F: 'minecraft:gold_nugget'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_greatsword', 1), // arg 1: output
  [
    ' P ',
    'FEF',
    'FGF'

  ],
  {
    P: 'minecraft:gold_ingot',
    E: 'minecraft:golden_sword',
    F: 'minecraft:gold_nugget',
    G: 'spartanweaponry:handle'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_rapier', 1), // arg 1: output
  [
    ' P ',
    'FPF',
    ' E '

  ],
  {
    P: 'minecraft:gold_ingot',
    E: 'minecraft:golden_sword',
    F: 'minecraft:gold_nugget'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_longsword', 1), // arg 1: output
  [
    ' P ',
    ' P ',
    ' E '

  ],
  {
    P: 'minecraft:gold_ingot',
    E: 'minecraft:golden_sword'
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:golden_scythe', 1), // arg 1: output
  [
    'PP ',
    '  E',
    '  G'

  ],
  {
    P: 'minecraft:gold_ingot',
    E: 'minecraft:golden_hoe',
    G: 'spartanweaponry:pole'
  }
)
  }
)
