// All craftable bows and weapon redux wooden
// Replace the padding with joints or smt
ServerEvents.recipes(event => {
event.remove({ output: '#spartanweaponry:wooden_weapons' })
event.remove({ output: 'spartanshields:wooden_basic_shield' })
event.remove({ output: 'spartanshields:wooden_tower_shield' })
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:wooden_longbow', 1), // arg 1: output
  [
    'AWB',
    'WQE',
    'BEE'

  ],
  {
   A: 'spartanweaponry:simple_handle',
   W: '#minecraft:planks',
   B: 'minecraft:stick',
   E: 'minecraft:string',
   Q: ['spelunkers_charm:rock','spelunkers_charm:basalt_rock','spelunkers_charm:deepslate_rock','spelunkers_charm:dripstone_rock']
})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:wooden_heavy_crossbow', 1), // arg 1: output
  [
    'WBW',
    'ELE',
    'QHQ'

  ],
  {
   W: '#minecraft:planks',
   B: 'spartanweaponry:wooden_longbow',
   L: 'minecraft:tripwire_hook',
   H: 'spartanweaponry:simple_handle',
   E: '#minecraft:planks',
   Q: ['spelunkers_charm:rock','spelunkers_charm:basalt_rock','spelunkers_charm:deepslate_rock','spelunkers_charm:dripstone_rock'],
})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanshields:wooden_basic_shield', 1), // arg 1: output
  [
    ' W ',
    'WQW',
    ' W '

  ],
  {
   W: '#minecraft:planks',
   Q: ['spelunkers_charm:rock','spelunkers_charm:basalt_rock','spelunkers_charm:deepslate_rock','spelunkers_charm:dripstone_rock'],
})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanshields:wooden_tower_shield', 1), // arg 1: output
  [
    'WWW',
    'WQW',
    'WWW'

  ],
  {
   W: '#minecraft:planks',
   Q: ['spelunkers_charm:rock','spelunkers_charm:basalt_rock','spelunkers_charm:deepslate_rock','spelunkers_charm:dripstone_rock'],
})
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of("spartanweaponry:wooden_boomerang", 1), // arg 1: output
  [
    'WWW',
    'W  ',
    'W  '

  ],
  {
   W: '#minecraft:planks'
})
}
)
