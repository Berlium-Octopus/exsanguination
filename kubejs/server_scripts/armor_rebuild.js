ServerEvents.recipes(event => {
event.remove({ output: 'minecraft:golden_chestplate' })
event.remove({ output: 'minecraft:golden_helmet' })
event.remove({ output: 'minecraft:golden_leggings' })
event.remove({ output: 'minecraft:golden_boots' })
event.remove({ output: 'minecraft:diamond_chestplate' })
event.remove({ output: 'minecraft:diamond_helmet' })
event.remove({ output: 'minecraft:diamond_leggings' })
event.remove({ output: 'minecraft:diamond_boots' })
event.remove({ output: 'minecraft:iron_chestplate' })
event.remove({ output: 'minecraft:iron_helmet' })
event.remove({ output: 'minecraft:iron_leggings' })
event.remove({ output: 'minecraft:iron_boots' })
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:iron_chestplate', 1), // arg 1: output
  [
    'E E',
    'CCC', // arg 2: the shape (array of strings)
    'CCC'
  ],
  {
    C: 'create:iron_sheet',
    E: 'minecraft:iron_layered_padding'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:iron_boots', 1), // arg 1: output
  [
    'E E', // arg 2: the shape (array of strings)
    'C C'
  ],
  {
    C: 'create:iron_sheet',
    E: 'minecraft:iron_layered_padding'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:iron_leggings', 1), // arg 1: output
  [
    'ECE',
    'C C', // arg 2: the shape (array of strings)
    'C C'
  ],
  {
    C: 'create:iron_sheet',
    E: 'minecraft:iron_layered_padding'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:iron_helmet', 1), // arg 1: output
  [
    'CCC',
    'C C', // arg 2: the shape (array of strings)
  ],
  {
    C: 'create:iron_sheet'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:golden_chestplate', 1), // arg 1: output
  [
    'E E',
    'CCC', // arg 2: the shape (array of strings)
    'CCC'
  ],
  {
    C: 'create:golden_sheet',
    E: 'minecraft:gold_layered_padding'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:golden_boots', 1), // arg 1: output
    [
      'E E', // arg 2: the shape (array of strings)
      'C C'
    ],
  {
    C: 'create:golden_sheet',
    E: 'minecraft:gold_layered_padding'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:golden_leggings', 1), // arg 1: output
  [
    'ECE',
    'C C', // arg 2: the shape (array of strings)
    'C C'
  ],
  {
    C: 'create:golden_sheet',
    E: 'minecraft:gold_layered_padding'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:golden_helmet', 1), // arg 1: output
  [
    'CCC',
    'C C', // arg 2: the shape (array of strings)
  ],
  {
    C: 'create:golden_sheet'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:diamond_chestplate', 1), // arg 1: output
  [
    'E E',
    'CCC', // arg 2: the shape (array of strings)
    'CCC'
  ],
  {
    C: 'create:diamond_sheet',
    E: 'minecraft:diamond_layered_padding'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:diamond_boots', 1), // arg 1: output
    [
      'E E', // arg 2: the shape (array of strings)
      'C C'
    ],
  {
    C: 'create:diamond_sheet',
    E: 'minecraft:diamond_layered_padding'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:diamond_leggings', 1), // arg 1: output
  [
    'ECE',
    'C C', // arg 2: the shape (array of strings)
    'C C'
  ],
  {
    C: 'create:diamond_sheet',
    E: 'minecraft:diamond_layered_padding'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:diamond_helmet', 1), // arg 1: output
  [
    'CCC',
    'C C', // arg 2: the shape (array of strings)
  ],
  {
    C: 'create:diamond_sheet'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:golden_chestplate', 1), // arg 1: output
  [
    'E E',
    'CCC', // arg 2: the shape (array of strings)
    'CCC'
  ],
  {
    C: 'create:golden_sheet',
    E: 'minecraft:gold_layered_padding'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:golden_boots', 1), // arg 1: output
    [
      'E E', // arg 2: the shape (array of strings)
      'C C'
    ],
  {
    C: 'create:golden_sheet',
    E: 'minecraft:gold_layered_padding'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:golden_leggings', 1), // arg 1: output
  [
    'ECE',
    'C C', // arg 2: the shape (array of strings)
    'C C'
  ],
  {
    C: 'create:golden_sheet',
    E: 'minecraft:gold_layered_padding'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:golden_helmet', 1), // arg 1: output
  [
    'CCC',
    'C C', // arg 2: the shape (array of strings)
  ],
  {
    C: 'create:golden_sheet'
  }
)
  }
)
