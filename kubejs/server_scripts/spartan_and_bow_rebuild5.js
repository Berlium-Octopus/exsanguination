// All craftable bows and weapon redux
ServerEvents.recipes(event => {
event.remove({ output: '#spartanweaponry:stone_weapons' })
event.remove({ output: 'spartanshields:stone_basic_shield' })
event.remove({ output: 'spartanshields:stone_tower_shield' })
event.remove({ output: 'alexscavesdelight:pearl_knife' })
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('farmersdelight:flint_knife', 1), // arg 1: output
  [
    'BA',
    'E '
  ],
  {
   A: 'minecraft:flint',
   E: 'minecraft:stick',
   B: ['minecraft:string','minecraft:grass','minecraft:fern','minecraft:seagrass']
})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:stone_throwing_knife', 1), // arg 1: output
  [
    ' B ',
    ' A ',
    ' E '
  ],
  {
    A: 'farmersdelight:flint_knife',
    B: 'minecraft:flint',
    E: 'spartanweaponry:simple_handle'
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:stone_dagger', 1), // arg 1: output
  [
    'BAR',
    ' E '// arg 2: the shape (array of strings)
  ],
  {
    A: 'minecraft:flint',
    E: 'spartanweaponry:simple_handle',
    R: 'spelunkers_charm:rock',
    B: ['minecraft:string','minecraft:grass','minecraft:fern','minecraft:seagrass']
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:stone_quarterstaff', 1), // arg 1: output
  [
    ' BA',
    ' ER',
    'AB '// arg 2: the shape (array of strings)
  ],
  {
    A: 'minecraft:flint',
    E: 'spartanweaponry:pole',
    R: 'spelunkers_charm:rock',
    B: ['minecraft:string','minecraft:grass','minecraft:fern','minecraft:seagrass']
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:stone_spear', 1), // arg 1: output
  [
    'A  ',
    ' QR',
    '  E'
  ],
  {
    A: 'spartanweaponry:stone_dagger',
    E: 'spartanweaponry:pole',
    R: 'spelunkers_charm:rock',
    Q: ['minecraft:string','minecraft:grass','minecraft:fern','minecraft:seagrass'],
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:stone_pike', 1), // arg 1: output
  [
    'A  ',
    ' ER',
    '  Q'
  ],
  {
    A: 'spartanweaponry:stone_dagger',
    R: 'spelunkers_charm:rock',
    E: ['minecraft:string','minecraft:grass','minecraft:fern','minecraft:seagrass'],
    Q: ['spartanweaponry:pole']

  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:stone_parrying_dagger', 1), // arg 1: output
  [
    'BAB'
  ],
  {
    A: 'spartanweaponry:stone_dagger',
    B: 'minecraft:flint'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:stone_glaive', 1), // arg 1: output
  [
    'A  ',
    'PBR',
    '  E'

  ],
  {
    A: 'spartanweaponry:stone_dagger',
    P: 'minecraft:flint',
    E: 'spartanweaponry:pole',
    R: 'spelunkers_charm:rock',
    B: ['minecraft:string','minecraft:grass','minecraft:fern','minecraft:seagrass']
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:stone_javelin', 1), // arg 1: output
  [
    ' RA',
    ' EB'

  ],
  {
    A: 'spartanweaponry:stone_dagger',
    E: 'spartanweaponry:pole',
    R: 'spelunkers_charm:rock',
    B: ['minecraft:string','minecraft:grass','minecraft:fern','minecraft:seagrass']
  }
)
  }
)



ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:stone_halberd', 1), // arg 1: output
  [
    ' P ',
    'PA ',
    'PE '

  ],
  {
    A: 'minecraft:stone_axe',
    P: 'minecraft:flint',
    E: 'spartanweaponry:pole',
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:stone_battleaxe', 1), // arg 1: output
  [
    ' P ',
    'PAP',
    ' EP'

  ],
  {
    A: 'minecraft:stone_axe',
    P: 'minecraft:flint',
    E: 'spartanweaponry:simple_handle'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:stone_flanged_mace', 1), // arg 1: output
  [
    'PPP',
    'PAP',
    ' E '

  ],
  {
    A: 'minecraft:stone_shovel',
    P: 'minecraft:flint',
    E: 'spartanweaponry:simple_handle'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:stone_lance', 1), // arg 1: output
  [
    '  A',
    ' P ',
    'E  '

  ],
  {
    A: 'minecraft:stone_shovel',
    P: 'minecraft:flint',
    E: 'spartanweaponry:pole'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:stone_boomerang', 1), // arg 1: output
  [
    'RPB',
    'PO ',
    'B  '

  ],
  {
    P: 'minecraft:flint',
    R: 'spelunkers_charm:rock',
    O: ['minecraft:string','minecraft:grass','minecraft:fern','minecraft:seagrass'],
    B: '#minecraft:planks',
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:stone_warhammer', 1), // arg 1: output
  [
    ' B ',
    'PO ',
    ' E '

  ],
  {
    P: 'minecraft:stone_shovel',
    E: 'spartanweaponry:pole',
    O: ['minecraft:string','minecraft:grass','minecraft:fern','minecraft:seagrass'],
    B: 'minecraft:flint'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:stone_battle_hammer', 1), // arg 1: output
  [
    ' O ',
    'OPO',
    ' E '

  ],
  {
    P: 'minecraft:stone_pickaxe',
    E: 'spartanweaponry:pole',
    O: 'minecraft:flint',

  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:stone_warhammer', 1), // arg 1: output
  [
    ' B ',
    'PO ',
    ' E '

  ],
  {
    P: 'minecraft:stone_shovel',
    E: 'spartanweaponry:pole',
    O: ['minecraft:string','minecraft:grass','minecraft:fern','minecraft:seagrass'],
    B: 'minecraft:flint'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:stone_tomahawk', 1), // arg 1: output
  [
    'QO ',
    'QE '
  ],
  {
    E: 'spartanweaponry:simple_handle',
    O: ['minecraft:string','minecraft:grass','minecraft:fern','minecraft:seagrass'],
    Q: 'minecraft:flint'

  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:stone_saber', 1), // arg 1: output
  [
    '  P',
    ' P ',
    'FE '

  ],
  {
    P: 'minecraft:flint',
    E: 'minecraft:stone_sword',
    F: 'create:gold_ingot'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:stone_katana', 1), // arg 1: output
  [
    '  F',
    ' P ',
    'E  '

  ],
  {
    P: 'minecraft:flint',
    E: 'minecraft:stone_sword',
    F: 'minecraft:flint'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:stone_greatsword', 1), // arg 1: output
  [
    ' P ',
    'FEF',
    'FGF'

  ],
  {
    P: 'minecraft:flint',
    E: 'minecraft:stone_sword',
    F: 'minecraft:flint',
    G: 'spartanweaponry:simple_handle'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:stone_rapier', 1), // arg 1: output
  [
    ' P ',
    'FPF',
    ' E '

  ],
  {
    P: 'minecraft:flint',
    E: 'minecraft:stone_sword',
    F: 'minecraft:flint'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:stone_longsword', 1), // arg 1: output
  [
    ' P ',
    ' P ',
    ' E '

  ],
  {
    P: 'minecraft:flint',
    E: 'minecraft:stone_sword'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('alexscavesdelight:pearl_knife', 1), // arg 1: output
  [
    'BA',
    'E '
  ],
  {
   A: 'alexscaves:pearl',
   E: 'minecraft:stick',
   B: 'minecraft:string'
})
}
)



ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:stone_scythe', 1), // arg 1: output
  [
    'PP ',
    '  E',
    '  G'

  ],
  {
    P: 'minecraft:flint',
    E: 'minecraft:stone_hoe',
    G: 'spartanweaponry:pole'
  }
)
  }
)
