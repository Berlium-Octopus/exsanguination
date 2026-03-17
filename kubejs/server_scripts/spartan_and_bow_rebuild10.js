// All craftable bows and weapon redux steel
ServerEvents.recipes(event => {
event.remove({ output: '#spartanweaponry:steel_weapons' })
event.remove({ output: 'spartanshields:steel_basic_shield' })
event.remove({ output: 'spartanshields:steel_tower_shield' })
}
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('cataclysm:black_steel_hoe', 1), // arg 1: output
  [
    'AA ',
    ' E ', // arg 2: the shape (array of strings)
    ' C '
  ],
  {
    A: 'cataclysm:black_steel_ingot',
    C: 'spartanweaponry:handle',
    E: 'cataclysm:black_steel_ingot'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('cataclysm:black_steel_axe', 1), // arg 1: output
  [
    'AA ',
    'AE ', // arg 2: the shape (array of strings)
    ' C '
  ],
  {
    A: 'cataclysm:black_steel_ingot',
    C: 'spartanweaponry:handle',
    E: 'cataclysm:black_steel_ingot'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('cataclysm:black_steel_pickaxe', 1), // arg 1: output
  [
    'AA ',
    'AE ', // arg 2: the shape (array of strings)
    ' C '
  ],
  {
    A: 'cataclysm:black_steel_ingot',
    C: 'spartanweaponry:handle',
    E: 'cataclysm:black_steel_ingot'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('cataclysm:black_steel_shovel', 1), // arg 1: output
  [
    ' A ',
    ' E ', // arg 2: the shape (array of strings)
    ' C '
  ],
  {
    A: 'cataclysm:black_steel_ingot',
    C: 'spartanweaponry:handle',
    E: 'cataclysm:black_steel_ingot'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('cataclysm:black_steel_sword', 1), // arg 1: output
  [
    'A  ',
    ' AE', // arg 2: the shape (array of strings)
    ' EC'
  ],
  {
    A: 'cataclysm:black_steel_ingot',
    C: 'spartanweaponry:handle',
    E: 'cataclysm:black_steel_ingot'
  }
)
  }
)




ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_longbow', 1), // arg 1: output
  [
    'AWB',
    'W E',
    'BEE'

  ],
  {
   A: 'spartanweaponry:handle',
   W: 'cataclysm:black_steel_ingot',
   B: 'minecraft:stick',
   E: 'minecraft:string'
})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_heavy_crossbow', 1), // arg 1: output
  [
    'WBW',
    'ELE',
    ' H '

  ],
  {
   W: 'cataclysm:black_steel_ingot',
   B: 'spartanweaponry:wooden_longbow',
   L: 'minecraft:tripwire_hook',
   H: 'spartanweaponry:handle',
   E: '#minecraft:planks',

})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('cataclysm:black_steel_targe', 1), // arg 1: output
  [
    'OW ',
    'WBW',
    ' W '

  ],
  {
  O: 'alexscaves:ferrouslime_ball',
   W: 'cataclysm:black_steel_ingot',
   B: 'spartanshields:wooden_basic_shield',

})
}
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_throwing_knife', 1), // arg 1: output
  [
    ' BO',
    ' A ',
    ' E '
  ],
  {
    O: 'alexscaves:ferrouslime_ball',
    A: 'farmersdelight:iron_knife',
    B: 'cataclysm:black_steel_nugget',
    E: 'spartanweaponry:handle'
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_dagger', 1), // arg 1: output
  [
    'BA ',
    ' E '// arg 2: the shape (array of strings)
  ],
  {
    A: 'cataclysm:black_steel_nugget',
    E: 'spartanweaponry:handle',
    B: 'minecraft:string'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_quarterstaff', 1), // arg 1: output
  [
    ' BA',
    ' E ',
    'AB '// arg 2: the shape (array of strings)
  ],
  {
    A: 'cataclysm:black_steel_ingot',
    E: 'spartanweaponry:pole',
    B: 'minecraft:string'
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_spear', 1), // arg 1: output
  [
    'A  ',
    ' Q ',
    '  E'
  ],
  {
    A: 'spartanweaponry:steel_dagger',
    E: 'spartanweaponry:pole',
    Q: 'minecraft:string'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_pike', 1), // arg 1: output
  [
    'A  ',
    ' E ',
    '  Q'
  ],
  {
    A: 'spartanweaponry:steel_dagger',
    E: 'minecraft:string',
    Q: ['spartanweaponry:pole']

  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_parrying_dagger', 1), // arg 1: output
  [
    'BAB'
  ],
  {
    A: 'spartanweaponry:steel_dagger',
    B: 'cataclysm:black_steel_ingot'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_glaive', 1), // arg 1: output
  [
    'A  ',
    'PB ',
    '  E'

  ],
  {
    A: 'spartanweaponry:steel_dagger',
    P: 'cataclysm:black_steel_ingot',
    E: 'spartanweaponry:pole',
    B: 'minecraft:string'
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_javelin', 1), // arg 1: output
  [
    '  A',
    ' EB'

  ],
  {
    A: 'spartanweaponry:steel_dagger',
    E: 'spartanweaponry:pole',
    B: 'minecraft:string'
  }
)
  }
)



ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_halberd', 1), // arg 1: output
  [
    ' P ',
    'PA ',
    'PE '

  ],
  {
    A: 'cataclysm:black_steel_axe',
    P: 'cataclysm:black_steel_ingot',
    E: 'spartanweaponry:pole'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_battleaxe', 1), // arg 1: output
  [
    ' P ',
    'PAP',
    ' E '

  ],
  {
    A: 'cataclysm:black_steel_axe',
    P: 'cataclysm:black_steel_ingot',
    E: 'spartanweaponry:handle'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_flanged_mace', 1), // arg 1: output
  [
    'PPP',
    'PAP',
    ' E '

  ],
  {
    A: 'cataclysm:black_steel_shovel',
    P: 'cataclysm:black_steel_ingot',
    E: 'spartanweaponry:handle'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_lance', 1), // arg 1: output
  [
    '  A',
    ' P ',
    'E  '

  ],
  {
    A: 'cataclysm:black_steel_shovel',
    P: 'cataclysm:black_steel_ingot',
    E: 'spartanweaponry:pole',

  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_boomerang', 1), // arg 1: output
  [
    'PBB',
    'BO ',
    'B  '

  ],
  {
    P: 'cataclysm:black_steel_ingot',
    O: 'minecraft:string',
    B: '#minecraft:planks',
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_warhammer', 1), // arg 1: output
  [
    ' B ',
    'PO ',
    ' E '

  ],
  {
    P: 'cataclysm:black_steel_shovel',
    E: 'spartanweaponry:pole',
    O: 'cataclysm:black_steel_ingot',
    B: 'cataclysm:black_steel_ingot'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_battle_hammer', 1), // arg 1: output
  [
    ' O ',
    'OPO',
    ' E '

  ],
  {
    P: 'cataclysm:black_steel_pickaxe',
    E: 'spartanweaponry:pole',
    O: 'cataclysm:black_steel_ingot'

  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_tomahawk', 1), // arg 1: output
  [
    'QO ',
    'QE '
  ],
  {
    E: 'spartanweaponry:handle',
    O: 'cataclysm:black_steel_layered_padding',
    Q: 'cataclysm:black_steel_ingot'

  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_saber', 1), // arg 1: output
  [
    '  P',
    ' P ',
    'FE '

  ],
  {
    P: 'cataclysm:black_steel_ingot',
    E: 'cataclysm:black_steel_sword',
    F: 'cataclysm:black_steel_ingot'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_katana', 1), // arg 1: output
  [
    '  F',
    ' P ',
    'E  '

  ],
  {
    P: 'cataclysm:black_steel_ingot',
    E: 'cataclysm:black_steel_sword',
    F: 'cataclysm:black_steel_ingot'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_greatsword', 1), // arg 1: output
  [
    ' P ',
    'FEF',
    'FGF'

  ],
  {
    P: 'cataclysm:black_steel_ingot',
    E: 'cataclysm:black_steel_sword',
    F: 'cataclysm:black_steel_ingot',
    G: 'spartanweaponry:handle'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_rapier', 1), // arg 1: output
  [
    ' P ',
    'FPF',
    ' E '

  ],
  {
    P: 'cataclysm:black_steel_ingot',
    E: 'cataclysm:black_steel_sword',
    F: 'cataclysm:black_steel_ingot'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_longsword', 1), // arg 1: output
  [
    ' P ',
    ' P ',
    ' E '

  ],
  {
    P: 'cataclysm:black_steel_ingot',
    E: 'cataclysm:black_steel_sword'
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_scythe', 1), // arg 1: output
  [
    'PP ',
    '  E',
    '  G'

  ],
  {
    P: 'cataclysm:black_steel_ingot',
    E: 'cataclysm:black_steel_hoe',
    G: 'spartanweaponry:pole'
  }
)
  }
)




ServerEvents.recipes(event => {
  event.recipes.create.mechanical_crafting(
    Item.of('spartanweaponry:steel_longbow', 1), // arg 1: output
  [
    'AQWB',
    'Q  E',
    'W E ',
    'BE  '

  ],
  {
   A: 'spartanweaponry:handle',
   W: 'cataclysm:black_steel_ingot',
   B: 'minecraft:stick',
   E: 'minecraft:string',
   Q: 'cataclysm:black_steel_ingot'
})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:steel_heavy_crossbow', 1), // arg 1: output
  [
    'WBW',
    'ELE',
    ' H '

  ],
  {
   W: 'cataclysm:black_steel_ingot',
   B: 'spartanweaponry:wooden_longbow',
   L: 'minecraft:tripwire_hook',
   H: 'spartanweaponry:handle',
   E: '#minecraft:planks',

})
}
)
