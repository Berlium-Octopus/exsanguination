// All craftable bows and weapon redux iron
ServerEvents.recipes(event => {
event.remove({ output: '#spartanweaponry:iron_weapons' })
event.remove({ output: 'spartanshields:iron_basic_shield' })
event.remove({ output: 'spartanshields:iron_tower_shield' })
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('farmersdelight:iron_knife', 1), // arg 1: output
  [
    'BA',
    'E '
  ],
  {
   A: 'minecraft:iron_ingot',
   E: 'minecraft:stick',
   B: 'minecraft:string'
})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('alexscavesdelight:sweet_tooth_knife', 1), // arg 1: output
  [
    'BA',
    'E '
  ],
  {
   A: 'alexscaves:sweet_tooth',
   E: 'minecraft:stick',
   B: 'minecraft:string'
})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('alexscavesdelight:tectonic_knife', 1), // arg 1: output
  [
    'BA',
    'E '
  ],
  {
   A: 'alexscaves:tectonic_shard',
   E: 'minecraft:stick',
   B: 'minecraft:string'
})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('alexscavesdelight:azure_neodymium_knife', 1), // arg 1: output
  [
    'BA',
    'E '
  ],
  {
   A: 'alexscaves:azure_neodymium_ingot',
   E: 'minecraft:stick',
   B: 'minecraft:string'
})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('alexscavesdelight:scarlet_neodymium_knife', 1), // arg 1: output
  [
    'BA',
    'E '
  ],
  {
   A: 'alexscaves:scarlet_neodymium_ingot',
   E: 'minecraft:stick',
   B: 'minecraft:string'
})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('alexscavesdelight:pure_darkness_knife', 1), // arg 1: output
  [
    'BA',
    'E '
  ],
  {
   A: 'alexscaves:pure_darkness',
   E: 'minecraft:stick',
   B: 'minecraft:string'
})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('alexscavesdelight:gingerbread_knife', 1), // arg 1: output
  [
    'BA',
    'E '
  ],
  {
   A: 'alexscaves:gingerbread_crumbs',
   E: 'minecraft:stick',
   B: 'minecraft:string'
})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('alexscavesdelight:caramel_knife', 1), // arg 1: output
  [
    'BA',
    'E '
  ],
  {
   A: 'alexscaves:caramel',
   E: 'minecraft:stick',
   B: 'minecraft:string'
})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('alexscavesdelight:candy_knife', 1), // arg 1: output
  [
    'BA',
    'E '
  ],
  {
   A: 'alexscaves:small_peppermint',
   E: 'minecraft:stick',
   B: 'minecraft:string'
})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_longbow', 1), // arg 1: output
  [
    'AWB',
    'W E',
    'BEE'

  ],
  {
   A: 'spartanweaponry:handle',
   W: 'minecraft:iron_ingot',
   B: 'minecraft:stick',
   E: 'minecraft:string'
})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_heavy_crossbow', 1), // arg 1: output
  [
    'WBW',
    'ELE',
    ' H '

  ],
  {
   W: 'minecraft:iron_ingot',
   B: 'spartanweaponry:wooden_longbow',
   L: 'minecraft:tripwire_hook',
   H: 'spartanweaponry:handle',
   E: '#minecraft:planks',

})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanshields:iron_basic_shield', 1), // arg 1: output
  [
    ' W ',
    'WBW',
    ' W '

  ],
  {
   W: 'create:iron_sheet',
   B: 'spartanshields:wooden_basic_shield',

})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanshields:iron_tower_shield', 1), // arg 1: output
  [
    ' W ',
    'WBW',
    ' W '

  ],
  {
   W: 'create:iron_sheet',
   B: 'spartanshields:wooden_tower_shield',

})
}
)



ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_throwing_knife', 1), // arg 1: output
  [
    ' B ',
    ' A ',
    ' E '
  ],
  {
    A: 'farmersdelight:iron_knife',
    B: 'minecraft:iron_nugget',
    E: 'spartanweaponry:handle'
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_dagger', 1), // arg 1: output
  [
    'BA ',
    ' E '// arg 2: the shape (array of strings)
  ],
  {
    A: 'minecraft:iron_ingot',
    E: 'spartanweaponry:handle',
    B: 'minecraft:string'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_quarterstaff', 1), // arg 1: output
  [
    ' BA',
    ' E ',
    'AB '// arg 2: the shape (array of strings)
  ],
  {
    A: 'minecraft:iron_ingot',
    E: 'spartanweaponry:pole',
    B: 'minecraft:string'
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_spear', 1), // arg 1: output
  [
    'A  ',
    ' Q ',
    '  E'
  ],
  {
    A: 'spartanweaponry:iron_dagger',
    E: 'spartanweaponry:pole',
    Q: 'minecraft:string'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_pike', 1), // arg 1: output
  [
    'A  ',
    ' E ',
    '  Q'
  ],
  {
    A: 'spartanweaponry:iron_dagger',
    E: 'minecraft:string',
    Q: ['spartanweaponry:pole']

  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_parrying_dagger', 1), // arg 1: output
  [
    'BAB'
  ],
  {
    A: 'spartanweaponry:iron_dagger',
    B: 'minecraft:iron_nugget'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_glaive', 1), // arg 1: output
  [
    'A  ',
    'PB ',
    '  E'

  ],
  {
    A: 'spartanweaponry:iron_dagger',
    P: 'minecraft:iron_ingot',
    E: 'spartanweaponry:pole',
    B: 'minecraft:string'
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_javelin', 1), // arg 1: output
  [
    '  A',
    ' EB'

  ],
  {
    A: 'spartanweaponry:iron_dagger',
    E: 'spartanweaponry:pole',
    B: 'minecraft:string'
  }
)
  }
)



ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_halberd', 1), // arg 1: output
  [
    ' P ',
    'PA ',
    'PE '

  ],
  {
    A: 'minecraft:iron_axe',
    P: 'minecraft:iron_ingot',
    E: 'spartanweaponry:pole'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_battleaxe', 1), // arg 1: output
  [
    ' P ',
    'PAP',
    ' E '

  ],
  {
    A: 'minecraft:iron_axe',
    P: 'minecraft:iron_ingot',
    E: 'spartanweaponry:handle'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_flanged_mace', 1), // arg 1: output
  [
    'PPP',
    'PAP',
    ' E '

  ],
  {
    A: 'minecraft:iron_shovel',
    P: 'minecraft:iron_ingot',
    E: 'spartanweaponry:handle'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_lance', 1), // arg 1: output
  [
    '  A',
    ' P ',
    'E  '

  ],
  {
    A: 'minecraft:iron_shovel',
    P: 'minecraft:iron_ingot',
    E: 'spartanweaponry:pole',

  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_boomerang', 1), // arg 1: output
  [
    'PBB',
    'BO ',
    'B  '

  ],
  {
    P: 'minecraft:iron_ingot',
    O: 'minecraft:string',
    B: '#minecraft:planks',
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_warhammer', 1), // arg 1: output
  [
    ' B ',
    'PO ',
    ' E '

  ],
  {
    P: 'minecraft:iron_shovel',
    E: 'spartanweaponry:pole',
    O: 'minecraft:iron_nugget',
    B: 'minecraft:iron_ingot'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_battle_hammer', 1), // arg 1: output
  [
    ' O ',
    'OPO',
    ' E '

  ],
  {
    P: 'minecraft:iron_pickaxe',
    E: 'spartanweaponry:pole',
    O: 'minecraft:iron_ingot'

  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_tomahawk', 1), // arg 1: output
  [
    'QO ',
    'QE '
  ],
  {
    E: 'spartanweaponry:handle',
    O: 'minecraft:iron_nugget',
    Q: 'minecraft:iron_ingot'

  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_saber', 1), // arg 1: output
  [
    '  P',
    ' P ',
    'FE '

  ],
  {
    P: 'minecraft:iron_ingot',
    E: 'minecraft:iron_sword',
    F: 'minecraft:iron_nugget'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_katana', 1), // arg 1: output
  [
    '  F',
    ' P ',
    'E  '

  ],
  {
    P: 'minecraft:iron_ingot',
    E: 'minecraft:iron_sword',
    F: 'minecraft:iron_nugget'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_greatsword', 1), // arg 1: output
  [
    ' P ',
    'FEF',
    'FGF'

  ],
  {
    P: 'minecraft:iron_ingot',
    E: 'minecraft:iron_sword',
    F: 'minecraft:iron_nugget',
    G: 'spartanweaponry:handle'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_rapier', 1), // arg 1: output
  [
    ' P ',
    'FPF',
    ' E '

  ],
  {
    P: 'minecraft:iron_ingot',
    E: 'minecraft:iron_sword',
    F: 'minecraft:iron_nugget'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_longsword', 1), // arg 1: output
  [
    ' P ',
    ' P ',
    ' E '

  ],
  {
    P: 'minecraft:iron_ingot',
    E: 'minecraft:iron_sword'
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:iron_scythe', 1), // arg 1: output
  [
    'PP ',
    '  E',
    '  G'

  ],
  {
    P: 'minecraft:iron_ingot',
    E: 'minecraft:iron_hoe',
    G: 'spartanweaponry:pole'
  }
)
  }
)
