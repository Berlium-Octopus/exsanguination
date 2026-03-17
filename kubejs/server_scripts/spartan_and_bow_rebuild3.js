// All craftable bows and weapon redux diamond
ServerEvents.recipes(event => {
event.remove({ output: '#spartanweaponry:diamond_weapons' })
event.remove({ output: 'spartanshields:diamond_basic_shield' })
event.remove({ output: 'spartanshields:diamond_tower_shield' })
event.remove({ output: 'farmersdelight:diamond_knife' })
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('farmersdelight:diamond_knife', 1), // arg 1: output
  [
    '  A',
    ' B ',
    'E  '
  ],
  {
   A: 'minecraft:diamond_ingot',
   E: 'minecraft:stick',
   B: 'minecraft:gravity_joints'
})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:diamond_longbow', 1), // arg 1: output
  [
    'AWB',
    'W E',
    'BEE'

  ],
  {
   A: 'spartanweaponry:handle',
   W: 'minecraft:diamond_ingot',
   B: 'minecraft:stick',
   E: 'minecraft:string'
})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:diamond_heavy_crossbow', 1), // arg 1: output
  [
    'WBW',
    'ELE',
    ' H '

  ],
  {
   W: 'minecraft:diamond_ingot',
   B: 'spartanweaponry:wooden_longbow',
   L: 'minecraft:tripwire_hook',
   H: 'spartanweaponry:handle',
   E: '#minecraft:planks',

})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanshields:diamond_basic_shield', 1), // arg 1: output
  [
    ' W ',
    'WBW',
    ' W '

  ],
  {
   W: 'create:diamond_sheet',
   B: 'spartanshields:wooden_basic_shield',

})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanshields:diamond_tower_shield', 1), // arg 1: output
  [
    ' W ',
    'WBW',
    ' W '

  ],
  {
   W: 'create:diamond_sheet',
   B: 'spartanshields:wooden_tower_shield',

})
}
)



ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:diamond_throwing_knife', 1), // arg 1: output
  [
    ' B ',
    ' A ',
    ' E '
  ],
  {
    A: 'farmersdelight:diamond_knife',
    B: 'minecraft:diamond_nugget',
    E: 'spartanweaponry:handle'
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:diamond_dagger', 1), // arg 1: output
  [
    'A  ',
    ' B ',// arg 2: the shape (array of strings)
    '  E'
  ],
  {
    A: 'minecraft:diamond_ingot',
    E: 'spartanweaponry:handle',
    B: 'minecraft:gravity_joints'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.recipes.create.mechanical_crafting(
    Item.of('spartanweaponry:diamond_quarterstaff', 1), // arg 1: output
  [
    ' A ',
    ' W ',
    ' E ',
    ' W ',
    ' A '
  ],
  {
    A: 'minecraft:diamond_ingot',
    E: 'spartanweaponry:pole',
    W: 'minecraft:gravity_joints'
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:diamond_spear', 1), // arg 1: output
  [
    'A  ',
    ' Q ',
    '  E'
  ],
  {
    A: 'spartanweaponry:diamond_dagger',
    E: 'spartanweaponry:pole',
    Q: 'minecraft:string',
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:diamond_pike', 1), // arg 1: output
  [
    'A  ',
    ' E ',
    '  Q'
  ],
  {
    A: 'spartanweaponry:diamond_dagger',
    E: 'minecraft:string',
    Q: ['spartanweaponry:pole']

  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:diamond_parrying_dagger', 1), // arg 1: output
  [
    'BAB'
  ],
  {
    A: 'spartanweaponry:diamond_dagger',
    B: 'minecraft:diamond_nugget'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:diamond_glaive', 1), // arg 1: output
  [
    'A  ',
    'PB ',
    '  E'

  ],
  {
    A: 'spartanweaponry:diamond_dagger',
    P: 'minecraft:diamond_ingot',
    E: 'spartanweaponry:pole',
    B: 'minecraft:string'
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:diamond_javelin', 1), // arg 1: output
  [
    '  A',
    ' EB'

  ],
  {
    A: 'spartanweaponry:diamond_dagger',
    E: 'spartanweaponry:pole',
    B: 'minecraft:string'
  }
)
  }
)



ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:diamond_halberd', 1), // arg 1: output
  [
    ' P ',
    'PA ',
    'PE '

  ],
  {
    A: 'minecraft:diamond_axe',
    P: 'minecraft:diamond_ingot',
    E: 'spartanweaponry:pole'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:diamond_battleaxe', 1), // arg 1: output
  [
    ' P ',
    'PAP',
    ' EP'

  ],
  {
    A: 'minecraft:diamond_axe',
    P: 'minecraft:diamond_ingot',
    E: 'spartanweaponry:handle'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:diamond_flanged_mace', 1), // arg 1: output
  [
    'PPP',
    'PAP',
    ' E '

  ],
  {
    A: 'minecraft:diamond_shovel',
    P: 'minecraft:diamond_ingot',
    E: 'spartanweaponry:handle'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:diamond_lance', 1), // arg 1: output
  [
    '  A',
    ' PB',
    'E  '

  ],
  {
    A: 'minecraft:diamond_shovel',
    P: 'minecraft:diamond_ingot',
    E: 'spartanweaponry:pole',
    B: 'minecraft:string'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.recipes.create.mechanical_crafting(
    Item.of('spartanweaponry:diamond_boomerang', 1), // arg 1: output
  [
    'PIBB',
    'IO  ',
    'B   ',
    'B   '

  ],
  {
    P: 'minecraft:diamond_ingot',
    O: 'minecraft:string',
    I: 'minecraft:gravity_joints',
    B: '#minecraft:planks'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:diamond_warhammer', 1), // arg 1: output
  [
    ' B ',
    'PO ',
    ' E '

  ],
  {
    P: 'minecraft:diamond_shovel',
    E: 'spartanweaponry:pole',
    O: 'minecraft:diamond_nugget',
    B: 'minecraft:diamond_ingot'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:diamond_battle_hammer', 1), // arg 1: output
  [
    ' O ',
    'OPO',
    ' E '

  ],
  {
    P: 'minecraft:diamond_pickaxe',
    E: 'spartanweaponry:pole',
    O: 'minecraft:diamond_ingot'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:diamond_tomahawk', 1), // arg 1: output
  [
    'QMO',
    'Q E'
  ],
  {
    E: 'spartanweaponry:handle',
    O: 'minecraft:string',
    Q: 'minecraft:diamond_ingot',
    M: 'minecraft:gravity_joints'

  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:diamond_saber', 1), // arg 1: output
  [
    '  P',
    ' P ',
    'FE '

  ],
  {
    P: 'minecraft:diamond_ingot',
    E: 'minecraft:diamond_sword',
    F: 'minecraft:diamond_nugget'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:diamond_katana', 1), // arg 1: output
  [
    '  F',
    ' P ',
    'E  '

  ],
  {
    P: 'minecraft:diamond_ingot',
    E: 'minecraft:diamond_sword',
    F: 'minecraft:diamond_nugget'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:diamond_greatsword', 1), // arg 1: output
  [
    ' P ',
    'FEF',
    'FGF'

  ],
  {
    P: 'minecraft:diamond_ingot',
    E: 'minecraft:diamond_sword',
    F: 'minecraft:diamond_nugget',
    G: 'spartanweaponry:handle'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:diamond_rapier', 1), // arg 1: output
  [
    ' P ',
    'FPF',
    ' E '

  ],
  {
    P: 'minecraft:diamond_ingot',
    E: 'minecraft:diamond_sword',
    F: 'minecraft:diamond_nugget'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:diamond_longsword', 1), // arg 1: output
  [
    ' P ',
    ' P ',
    ' E '

  ],
  {
    P: 'minecraft:diamond_ingot',
    E: 'minecraft:diamond_sword'
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:diamond_scythe', 1), // arg 1: output
  [
    'PP ',
    '  E',
    '  G'

  ],
  {
    P: 'minecraft:diamond_ingot',
    E: 'minecraft:diamond_hoe',
    G: 'spartanweaponry:pole'
  }
)
  }
)
