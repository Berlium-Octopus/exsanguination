// Pickaxes
// azure, iron, gold, stone, wood, diamond, netherite, black steel, warden, resonarium, azure neodymium
// 'spartanweaponry:simple_handle' for

ServerEvents.recipes(event => {
event.remove({ output: 'minecraft:stone_hoe' })
event.remove({ output: 'minecraft:stone_pickaxe' })
event.remove({ output: 'minecraft:stone_axe' })
event.remove({ output: 'minecraft:stone_shovel' })
event.remove({ output: 'minecraft:stone_sword' })
event.remove({ output: 'minecraft:wooden_hoe' })
event.remove({ output: 'minecraft:wooden_pickaxe' })
event.remove({ output: 'minecraft:wooden_axe' })
event.remove({ output: 'minecraft:wooden_shovel' })
event.remove({ output: 'minecraft:wooden_sword' })
event.remove({ output: 'minecraft:iron_hoe' })
event.remove({ output: 'minecraft:iron_pickaxe' })
event.remove({ output: 'minecraft:iron_axe' })
event.remove({ output: 'minecraft:iron_shovel' })
event.remove({ output: 'minecraft:iron_sword' })
event.remove({ output: 'minecraft:golden_hoe' })
event.remove({ output: 'minecraft:golden_pickaxe' })
event.remove({ output: 'minecraft:golden_axe' })
event.remove({ output: 'minecraft:golden_shovel' })
event.remove({ output: 'minecraft:golden_sword' })
event.remove({ output: 'minecraft:diamond_hoe' })
event.remove({ output: 'minecraft:diamond_pickaxe' })
event.remove({ output: 'minecraft:diamond_axe' })
event.remove({ output: 'minecraft:diamond_shovel' })
event.remove({ output: 'minecraft:diamond_sword' })
event.remove({ output: 'deeperdarker:warden_hoe' })
event.remove({ output: 'deeperdarker:warden_pickaxe' })
event.remove({ output: 'deeperdarker:warden_axe' })
event.remove({ output: 'deeperdarker:warden_shovel' })
event.remove({ output: 'deeperdarker:warden_sword' })
event.remove({ output: 'cataclysm:black_steel_hoe' })
event.remove({ output: 'cataclysm:black_steel_pickaxe' })
event.remove({ output: 'cataclysm:black_steel_axe' })
event.remove({ output: 'cataclysm:black_steel_shovel' })
event.remove({ output: 'cataclysm:black_steel_sword' })
event.remove({ output: 'alexscaves_torpedoes:scarlet_hoe' })
event.remove({ output: 'alexscaves_torpedoes:scarlet_pickaxe' })
event.remove({ output: 'alexscaves_torpedoes:scarlet_axe' })
event.remove({ output: 'alexscaves_torpedoes:scarlet_shovel' })
event.remove({ output: 'alexscaves_torpedoes:scarlet_sword' })
event.remove({ output: 'alexscaves_torpedoes:azure_hoe' })
event.remove({ output: 'alexscaves_torpedoes:azure_pickaxe' })
event.remove({ output: 'alexscaves_torpedoes:azure_axe' })
event.remove({ output: 'alexscaves_torpedoes:azure_shovel' })
event.remove({ output: 'alexscaves_torpedoes:azure_sword' })
event.remove({ output: 'minecraft:shulker_box' })
event.remove({ output: 'minecraft:shears' })
event.remove({ output: 'sculkhorde:ferriscite_hoe' })
event.remove({ output: 'sculkhorde:ferriscite_nugget' })
event.remove({ output: 'sculkhorde:ferriscite_axe' })
event.remove({ output: 'sculkhorde:ferriscite_pickaxe' })
event.remove({ output: 'sculkhorde:ferriscite_shovel' })
event.remove({ output: 'sculkhorde:diascite_hoe' })
event.remove({ output: 'sculkhorde:diascite_nugget' })
event.remove({ output: 'sculkhorde:diascite_axe' })
event.remove({ output: 'sculkhorde:diascite_pickaxe' })
event.remove({ output: 'sculkhorde:diascite_shovel' })
event.remove({ output: 'cataclysm:cursed_bow' })
event.remove({ output: 'cataclysm:the_annihilator' })
event.remove({ output: 'cataclysm:soul_render' })
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:shears', 1), // arg 1: output
  [
    'CA',
    'AC'
  ],
  {
    A: 'minecraft:iron_ingot',
    C: 'minecraft:red_wool'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:crafting_table', 1), // arg 1: output
  [
    'CC',
    'CC'
  ],
  {
    C: '#minecraft:planks'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:crafting_table', 1), // arg 1: output
  [
    'CC',
    'AA'
  ],
  {
    C: '#immersive_weathering:bark',
    A: '#minecraft:logs'

  }
)
  }
)

ServerEvents.recipes(event => {
event.recipes.create.mechanical_crafting(
    Item.of('cataclysm:the_annihilator', 1), // arg 1: output
  [
    ' F ',
    ' F ', // arg 2: the shape (array of strings)
    ' C ',
    ' O '

  ],
  {
    C: 'minecraft:gravity_joints',
    F: 'cataclysm:cursium_ingot',
    O: 'cataclysm:black_steel_ingot'
  }
)
  }
)

ServerEvents.recipes(event => {
event.recipes.create.mechanical_crafting(
    Item.of('cataclysm:soul_render', 1), // arg 1: output
  [
    'FF ',
    'FC ', // arg 2: the shape (array of strings)
    ' O ',
    ' O '
  ],
  {
    C: 'minecraft:gravity_joints',
    F: 'cataclysm:cursium_ingot',
    O: 'cataclysm:black_steel_ingot'
  }
)
  }
)

ServerEvents.recipes(event => {
event.recipes.create.mechanical_crafting(
    Item.of('cataclysm:cursed_bow', 1), // arg 1: output
  [
    'FFOO',
    'FC S', // arg 2: the shape (array of strings)
    'O S ',
    'OS  '
  ],
  {
    C: 'minecraft:gravity_joints',
    F: 'cataclysm:cursium_ingot',
    O: 'cataclysm:black_steel_ingot',
    S: 'minecraft:string'
  }
)
  }
)


ServerEvents.recipes(event => {
event.shaped(
    Item.of('minecraft:diamond_pickaxe', 1), // arg 1: output
  [
    'AAA',
    ' F ', // arg 2: the shape (array of strings)
    ' E '
  ],
  {
    A: 'minecraft:diamond_ingot',
    E: 'spartanweaponry:handle',
    F: 'minecraft:gravity_joints'
  }
)
  }
)


ServerEvents.recipes(event => {
event.shaped(
    Item.of('minecraft:diamond_hoe', 1), // arg 1: output
  [
    'AA',
    ' F', // arg 2: the shape (array of strings)
    ' E'
  ],
  {
    A: 'minecraft:diamond_ingot',
    E: 'spartanweaponry:handle',
    F: 'minecraft:gravity_joints'
  }
)
  }
)


ServerEvents.recipes(event => {
event.shaped(
    Item.of('minecraft:diamond_sword', 1), // arg 1: output
  [
    'A  ',
    ' FA', // arg 2: the shape (array of strings)
    ' AE'
  ],
  {
    A: 'minecraft:diamond_ingot',
    E: 'spartanweaponry:handle',
    F: 'minecraft:gravity_joints'
  }
)
  }
)

// Diascite
ServerEvents.recipes(event => {
event.shaped(
    Item.of('minecraft:diamond_axe', 1), // arg 1: output
  [
    'AA ',
    'AF ', // arg 2: the shape (array of strings)
    ' E '
  ],
  {
    A: 'minecraft:diamond_ingot',
    E: 'spartanweaponry:handle',
    F: 'minecraft:gravity_joints'
  }
)
  }
)


ServerEvents.recipes(event => {
event.shaped(
    Item.of('minecraft:diamond_shovel', 1), // arg 1: output
  [
    ' A ',
    ' F ', // arg 2: the shape (array of strings)
    ' E '
  ],
  {
    A: 'minecraft:diamond_ingot',
    E: 'spartanweaponry:handle',
    F: 'minecraft:gravity_joints'
  }
)
  }
)


// Diascite
ServerEvents.recipes(event => {
event.recipes.create.mechanical_crafting(
    Item.of('sculkhorde:ferriscite_axe', 1), // arg 1: output
  [
    'AAS',
    'AFS', // arg 2: the shape (array of strings)
    ' E ',
    ' C '
  ],
  {
    A: 'sculkhorde:ferriscite',
    S: 'sculkhorde:soulite_shard',
    C: 'spartanweaponry:ferriscite_handle',
    E: 'sculkhorde:diascite_layered_padding',
    F: 'minecraft:gravity_joints'
  }
)
  }
)


ServerEvents.recipes(event => {
event.recipes.create.mechanical_crafting(
    Item.of('sculkhorde:ferriscite_shovel', 1), // arg 1: output
  [
    'SAS',
    ' F ', // arg 2: the shape (array of strings)
    ' E ',
    ' C '
  ],
  {
    A: 'sculkhorde:ferriscite',
    S: 'sculkhorde:soulite_shard',
    C: 'spartanweaponry:ferriscite_handle',
    E: 'sculkhorde:diascite_layered_padding',
    F: 'minecraft:gravity_joints'
  }
)
  }
)


ServerEvents.recipes(event => {
event.recipes.create.mechanical_crafting(
    Item.of('sculkhorde:ferriscite_hoe', 1), // arg 1: output
  [
    'AAS',
    'SF ', // arg 2: the shape (array of strings)
    ' E ',
    ' C '
  ],
  {
    A: 'sculkhorde:ferriscite',
    S: 'sculkhorde:soulite_shard',
    C: 'spartanweaponry:ferriscite_handle',
    E: 'sculkhorde:diascite_layered_padding',
    F: 'minecraft:gravity_joints'
  }
)
  }
)

ServerEvents.recipes(event => {
event.recipes.create.mechanical_crafting(
    Item.of('sculkhorde:ferriscite_pickaxe', 1), // arg 1: output
  [
    'AAA',
    'SFS', // arg 2: the shape (array of strings)
    ' E ',
    ' C '
  ],
  {
    A: 'sculkhorde:ferriscite',
    S: 'sculkhorde:soulite_shard',
    C: 'spartanweaponry:ferriscite_handle',
    E: 'sculkhorde:diascite_layered_padding',
    F: 'minecraft:gravity_joints'
  }
)
  }
)

ServerEvents.recipes(event => {
event.recipes.create.mechanical_crafting(
    Item.of('sculkhorde:diascite_axe', 1), // arg 1: output
  [
    'AAS',
    'AFS', // arg 2: the shape (array of strings)
    ' E ',
    ' C '
  ],
  {
    A: 'sculkhorde:diascite',
    C: 'spartanweaponry:ferriscite_handle',
    S: 'sculkhorde:soulite_shard',
    E: 'sculkhorde:diascite_layered_padding',
    F: 'minecraft:gravity_joints'
  }
)
  }
)


ServerEvents.recipes(event => {
event.recipes.create.mechanical_crafting(
    Item.of('sculkhorde:diascite_shovel', 1), // arg 1: output
  [
    'SAS',
    ' F ', // arg 2: the shape (array of strings)
    ' E ',
    ' C '
  ],
  {
    A: 'sculkhorde:diascite',
    C: 'spartanweaponry:ferriscite_handle',
    S: 'sculkhorde:soulite_shard',
    E: 'sculkhorde:diascite_layered_padding',
    F: 'minecraft:gravity_joints'
  }
)
  }
)


ServerEvents.recipes(event => {
event.recipes.create.mechanical_crafting(
    Item.of('sculkhorde:diascite_hoe', 1), // arg 1: output
  [
    'AAS',
    'SF ', // arg 2: the shape (array of strings)
    ' E ',
    ' C '
  ],
  {
    A: 'sculkhorde:diascite',
    C: 'spartanweaponry:ferriscite_handle',
    S: 'sculkhorde:soulite_shard',
    E: 'sculkhorde:diascite_layered_padding',
    F: 'minecraft:gravity_joints'
  }
)
  }
)

ServerEvents.recipes(event => {
event.recipes.create.mechanical_crafting(
    Item.of('sculkhorde:diascite_pickaxe', 1), // arg 1: output
  [
    'AAA',
    'SFS', // arg 2: the shape (array of strings)
    ' E ',
    ' C '
  ],
  {
    A: 'sculkhorde:diascite',
    C: 'spartanweaponry:ferriscite_handle',
    S: 'sculkhorde:soulite_shard',
    E: 'sculkhorde:diascite_layered_padding',
    F: 'minecraft:gravity_joints'
  }
)
  }
)

ServerEvents.recipes(event => {
event.recipes.create.mechanical_crafting(
    Item.of('deeperdarker:warden_hoe', 1), // arg 1: output
  [
    'AAS',
    'SF ', // arg 2: the shape (array of strings)
    ' E ',
    ' C '
  ],
  {
    A: 'deeperdarker:reinforced_echo_shard',
    C: 'spartanweaponry:ferriscite_handle',
    S: 'sculkhorde:soulite_shard',
    E: 'deeperdarker:warden_layered_padding',
    F: 'minecraft:gravity_joints'
  }
)
  }
)

ServerEvents.recipes(event => {
event.recipes.create.mechanical_crafting(
    Item.of('deeperdarker:warden_axe', 1), // arg 1: output
  [
    'AAS',
    'AFS', // arg 2: the shape (array of strings)
    ' E ',
    ' C '
  ],
  {
    A: 'deeperdarker:reinforced_echo_shard',
    S: 'sculkhorde:soulite_shard',
    C: 'spartanweaponry:ferriscite_handle',
    E: 'deeperdarker:warden_layered_padding',
    F: 'minecraft:gravity_joints'
  }
)
  }
)




ServerEvents.recipes(event => {
event.recipes.create.mechanical_crafting(
    Item.of('deeperdarker:warden_shovel', 1), // arg 1: output
  [
    'SAS',
    ' F ', // arg 2: the shape (array of strings)
    ' E ',
    ' C '
  ],
  {
    A: 'deeperdarker:reinforced_echo_shard',
    S: 'sculkhorde:soulite_shard',
    C: 'spartanweaponry:ferriscite_handle',
    E: 'deeperdarker:warden_layered_padding',
    F: 'minecraft:gravity_joints'
  }
)
  }
)




ServerEvents.recipes(event => {
event.recipes.create.mechanical_crafting(
    Item.of('deeperdarker:warden_pickaxe', 1), // arg 1: output
  [
    'AAA',
    'SFS', // arg 2: the shape (array of strings)
    ' E ',
    ' C '
  ],
  {
    A: 'deeperdarker:reinforced_echo_shard',
    C: 'spartanweaponry:ferriscite_handle',
    S: 'sculkhorde:soulite_shard',
    E: 'deeperdarker:warden_layered_padding',
    F: 'minecraft:gravity_joints'
  }
)
  }
)

ServerEvents.recipes(event => {
event.recipes.create.mechanical_crafting(
    Item.of('deeperdarker:warden_sword', 1), // arg 1: output
  [
    'A   ',
    ' AS ', // arg 2: the shape (array of strings)
    ' SFC',
    '  CE'
  ],
  {
    A: 'deeperdarker:reinforced_echo_shard',
    E: 'spartanweaponry:ferriscite_handle',
    S: 'sculkhorde:soulite_shard',
    C: 'deeperdarker:warden_layered_padding',
    F: 'minecraft:gravity_joints'
  }
)
  }
)

ServerEvents.recipes(event => {
event.recipes.create.mechanical_crafting(
    Item.of('mobcompack:hammer', 1), // arg 1: output
  [
    'FAF',
    'FEE', // arg 2: the shape (array of strings)
    'FFF',
    'G  '
  ],
  {
    A: ['biomesoplenty:eyebulb','netherdepthsupgrade:eyeball'],
    E: 'mobcompack:giant_tooth',
    F: 'biomesoplenty:flesh_chunk',
    G: 'spartanweaponry:reinforced_handle'
  }
)
  }
)




ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:golden_hoe', 1), // arg 1: output
  [
    'AA ',
    ' E ', // arg 2: the shape (array of strings)
    ' C '
  ],
  {
    A: 'minecraft:gold_ingot',
    C: 'spartanweaponry:handle',
    E: 'minecraft:gold_nugget'

  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:golden_pickaxe', 1), // arg 1: output
  [
    'AAA',
    ' E ', // arg 2: the shape (array of strings)
    ' C '
  ],
  {
    A: 'minecraft:gold_ingot',
    C: 'spartanweaponry:handle',
    E: 'minecraft:gold_nugget'

  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:golden_shovel', 1), // arg 1: output
  [
    ' A ',
    ' E ', // arg 2: the shape (array of strings)
    ' C '
  ],
  {
    A: 'minecraft:gold_ingot',
    C: 'spartanweaponry:handle',
    E: 'minecraft:gold_nugget'

  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:golden_sword', 1), // arg 1: output
  [
    'A  ',
    ' AE', // arg 2: the shape (array of strings)
    ' EC'
  ],
  {
    A: 'minecraft:gold_ingot',
    C: 'spartanweaponry:handle',
    E: 'minecraft:gold_nugget'

  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:wooden_hoe', 1), // arg 1: output
  [
    'AA ',
    ' F ', // arg 2: the shape (array of strings)
    'ECE'
  ],
  {
    A: '#minecraft:planks',
    F: ['spelunkers_charm:rock','spelunkers_charm:basalt_rock','spelunkers_charm:deepslate_rock','spelunkers_charm:dripstone_rock'],
    C: 'minecraft:stick',
    E: '#immersive_weathering:bark'

  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('farmersdelight:wooden_knife', 1), // arg 1: output
  [
    'A ', // arg 2: the shape (array of strings)
    'C '
  ],
  {
    A: '#minecraft:planks',
    C: 'minecraft:stick',

  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:iron_hoe', 1), // arg 1: output
  [
    'AA ',
    ' E ', // arg 2: the shape (array of strings)
    ' C '
  ],
  {
    A: 'minecraft:iron_ingot',
    C: 'spartanweaponry:handle',
    E: 'minecraft:iron_nugget'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:iron_axe', 1), // arg 1: output
  [
    'AA ',
    'AE ', // arg 2: the shape (array of strings)
    ' C '
  ],
  {
    A: 'minecraft:iron_ingot',
    C: 'spartanweaponry:handle',
    E: 'minecraft:iron_nugget'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:iron_pickaxe', 1), // arg 1: output
  [
    'AA ',
    'AE ', // arg 2: the shape (array of strings)
    ' C '
  ],
  {
    A: 'minecraft:iron_ingot',
    C: 'spartanweaponry:handle',
    E: 'minecraft:iron_nugget'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:iron_shovel', 1), // arg 1: output
  [
    ' A ',
    ' E ', // arg 2: the shape (array of strings)
    ' C '
  ],
  {
    A: 'minecraft:iron_ingot',
    C: 'spartanweaponry:handle',
    E: 'minecraft:iron_nugget'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:iron_sword', 1), // arg 1: output
  [
    'A  ',
    ' AE', // arg 2: the shape (array of strings)
    ' EC'
  ],
  {
    A: 'minecraft:iron_ingot',
    C: 'spartanweaponry:handle',
    E: 'minecraft:iron_nugget'
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:golden_hoe', 1), // arg 1: output
  [
    'AA ',
    ' E ', // arg 2: the shape (array of strings)
    ' C '
  ],
  {
    A: 'minecraft:gold_ingot',
    C: 'spartanweaponry:handle',
    E: 'minecraft:gold_nugget'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:golden_axe', 1), // arg 1: output
  [
    'AA ',
    'AE ', // arg 2: the shape (array of strings)
    ' C '
  ],
  {
    A: 'minecraft:gold_ingot',
    C: 'spartanweaponry:handle',
    E: 'minecraft:gold_nugget'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:golden_shovel', 1), // arg 1: output
  [
    ' A ',
    ' E ', // arg 2: the shape (array of strings)
    ' C '
  ],
  {
    A: 'minecraft:gold_ingot',
    C: 'spartanweaponry:handle',
    E: 'minecraft:gold_nugget'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:stone_hoe', 1), // arg 1: output
  [
    'AA ',
    ' BR', // arg 2: the shape (array of strings)
    ' C '
  ],
  {
    B: ['minecraft:string','minecraft:grass','minecraft:fern','minecraft:seagrass'],
    A: 'minecraft:flint',
    R: 'spelunkers_charm:rock',
    C: 'spartanweaponry:simple_handle'//arg 3: the mapping object
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:stone_shovel', 1), // arg 1: output
  [
    ' A ',
    ' BR', // arg 2: the shape (array of strings)
    ' C '
  ],
  {
    B: ['minecraft:string','minecraft:grass','minecraft:fern','minecraft:seagrass'],
    A: 'minecraft:flint',
    R: 'spelunkers_charm:rock',
    C: 'spartanweaponry:simple_handle'//arg 3: the mapping object
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:stone_axe', 1), // arg 1: output
  [
    'AA ',
    'ABR', // arg 2: the shape (array of strings)
    ' C '
  ],
  {
    B: ['minecraft:string','minecraft:grass','minecraft:fern','minecraft:seagrass'],
    A: 'minecraft:flint',
    R: 'spelunkers_charm:rock',
    C: 'spartanweaponry:simple_handle'//arg 3: the mapping object
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:stone_pickaxe', 1), // arg 1: output
  [
    'AAA',
    ' BR', // arg 2: the shape (array of strings)
    ' C '
  ],
  {
    B: ['minecraft:string','minecraft:grass','minecraft:fern','minecraft:seagrass'],
    A: 'minecraft:flint',
    R: 'spelunkers_charm:rock',
    C: 'spartanweaponry:simple_handle'//arg 3: the mapping object
  }
)
  }
)



ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:stone_sword', 1), // arg 1: output
  [
    'A  ',
    ' AR', // arg 2: the shape (array of strings)
    ' BC'
  ],
  {
    B: ['minecraft:string','minecraft:grass','minecraft:fern','minecraft:seagrass'],
    A: 'minecraft:flint',
    R: 'spelunkers_charm:rock',
    C: 'spartanweaponry:simple_handle'//arg 3: the mapping object
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('spartanweaponry:reinforced_handle', 1), // arg 1: output
  [
    ' A ',
    'HEH', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    H: 'minecraft:leather',
    A: 'minecraft:iron_nugget',
    E: 'minecraft:iron_ingot'
  }
)
  }
)

ServerEvents.recipes(event => {
event.shaped(
Item.of('spartanweaponry:ferriscite_handle', 1), // arg 1: output
 [
    ' A ',
    'HEH', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    H: 'minecraft:leather',
    A: 'sculkhorde:ferriscite_nugget',
    E: 'sculkhorde:ferriscite'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('alexscaves_torpedoes:scarlet_hoe', 1), // arg 1: output
  [
    'AA ',
    ' CE', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'alexscaves:scarlet_neodymium_ingot',
    C: 'spartanweaponry:reinforced_handle',
    E: 'alexscaves:ferrouslime_ball'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('alexscaves_torpedoes:scarlet_axe', 1), // arg 1: output
  [
    'AA ',
    'ACE', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'alexscaves:scarlet_neodymium_ingot',
    C: 'spartanweaponry:reinforced_handle',
    E: 'alexscaves:ferrouslime_ball'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('alexscaves_torpedoes:scarlet_pickaxe', 1), // arg 1: output
  [
    'AAA',
    ' CE', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'alexscaves:scarlet_neodymium_ingot',
    C: 'spartanweaponry:reinforced_handle',
    E: 'alexscaves:ferrouslime_ball'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('alexscaves_torpedoes:scarlet_sword', 1), // arg 1: output
  [
    'A  ',
    ' CE', // arg 2: the shape (array of strings)
    ' EA'
  ],
  {
    A: 'alexscaves:scarlet_neodymium_ingot',
    C: 'spartanweaponry:reinforced_handle',
    E: 'alexscaves:ferrouslime_ball'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('alexscaves_torpedoes:scarlet_shovel', 1), // arg 1: output
  [
    ' A ',
    ' CE', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'alexscaves:scarlet_neodymium_ingot',
    C: 'spartanweaponry:reinforced_handle',
    E: 'alexscaves:ferrouslime_ball'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('alexscaves_torpedoes:azure_hoe', 1), // arg 1: output
  [
    'AA ',
    ' CE', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'alexscaves:azure_neodymium_ingot',
    C: 'spartanweaponry:reinforced_handle',
    E: 'alexscaves:ferrouslime_ball'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('alexscaves_torpedoes:azure_pickaxe', 1), // arg 1: output
  [
    'AAA',
    ' CE', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'alexscaves:azure_neodymium_ingot',
    C: 'spartanweaponry:reinforced_handle',
    E: 'alexscaves:ferrouslime_ball'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('alexscaves_torpedoes:azure_axe', 1), // arg 1: output
  [
    'AA ',
    'ACE', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'alexscaves:azure_neodymium_ingot',
    C: 'spartanweaponry:reinforced_handle',
    E: 'alexscaves:ferrouslime_ball'
  }
)
  }
)


ServerEvents.recipes(event => {
  event.shaped(
    Item.of('alexscaves_torpedoes:azure_shovel', 1), // arg 1: output
  [
    ' A ',
    ' CE', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'alexscaves:azure_neodymium_ingot',
    C: 'spartanweaponry:reinforced_handle',
    E: 'alexscaves:ferrouslime_ball'
  }
)
  }
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('alexscaves_torpedoes:azure_sword', 1), // arg 1: output
  [
    'A  ',
    ' CE', // arg 2: the shape (array of strings)
    ' EA'
  ],
  {
    A: 'alexscaves:azure_neodymium_ingot',
    C: 'spartanweaponry:reinforced_handle',
    E: 'alexscaves:ferrouslime_ball'
  }
)
  }
)

// Add knife reficipes
