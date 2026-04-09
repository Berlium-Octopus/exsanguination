
// Function to get all potion types dynamically
function getAllPotionTypes() {
  const $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
  const potionRegistry = $BuiltInRegistries.POTION;
  const potionList = [];

  for (let potion of potionRegistry) {
    let potionName = potionRegistry.getKey(potion).toString();
    // Skip unwanted base potions (optional)
    const skip = ["minecraft:empty", "minecraft:water"];
    if (skip.includes(potionName)) continue;
    potionList.push(potionName);
  }
  return potionList;
}

// Gaddy from discord.com
ServerEvents.recipes(event => {
  const effects = getAllPotionTypes(); // Now dynamic
  for (let effect of effects) {
    event.recipes.create.filling(Item.of("minecraft:tipped_arrow", { Potion: effect }),
      [
        "minecraft:arrow",
        Fluid.of('create:potion', 60, { Potion: effect }),
      ]
    )
  }



  for (let effect of effects) {
    event.recipes.create.filling(Item.of("alexscaves:jelly_bean", { Potion: effect }),
      [
        "alexscaves:jelly_bean",
        Fluid.of('create:potion', 60, { Potion: effect }),
      ]
    )
  }



  for (let effect of effects) {
    event.recipes.create.filling(Item.of("spartanweaponry:tipped_iron_arrow", { Potion: effect }),
      [
        "spartanweaponry:iron_arrow",
        Fluid.of('create:potion', 60, { Potion: effect }),
      ]
    )
  }



  for (let effect of effects) {
    event.recipes.create.filling(Item.of("spartanweaponry:tipped_diamond_arrow", { Potion: effect }),
      [
        "spartanweaponry:diamond_arrow",
        Fluid.of('create:potion', 60, { Potion: effect }),
      ]
    )
  }




  for (let effect of effects) {
    event.recipes.create.filling(Item.of("spartanweaponry:tipped_copper_arrow", { Potion: effect }),
      [
        "spartanweaponry:copper_arrow",
        Fluid.of('create:potion', 60, { Potion: effect }),
      ]
    )
  }




  for (let effect of effects) {
    event.recipes.create.filling(Item.of("spartanweaponry:tipped_wooden_arrow", { Potion: effect }),
      [
        "spartanweaponry:wooden_arrow",
        Fluid.of('create:potion', 60, { Potion: effect }),
      ]
    )
  }




  for (let effect of effects) {
    event.recipes.create.filling(Item.of("spartanweaponry:tipped_netherite_arrow", { Potion: effect }),
      [
        "spartanweaponry:netherite_arrow",
        Fluid.of('create:potion', 60, { Potion: effect }),
      ]
    )
  }

  for (let effect of effects) {
    event.recipes.create.filling(Item.of("spartanweaponry:tipped_netherite_bolt", { Potion: effect }),
      [
        "spartanweaponry:netherite_bolt",
        Fluid.of('create:potion', 60, { Potion: effect }),
      ]
    )
  }
  



  for (let effect of effects) {
    event.recipes.create.filling(Item.of("spartanweaponry:tipped_diamond_bolt", { Potion: effect }),
      [
        "spartanweaponry:diamond_bolt",
        Fluid.of('create:potion', 180, { Potion: effect }),
      ]
    )
  }




  for (let effect of effects) {
    event.recipes.create.filling(Item.of("spartanweaponry:tipped_copper_bolt", { Potion: effect }),
      [
        "spartanweaponry:copper_bolt",
        Fluid.of('create:potion', 180, { Potion: effect }),
      ]
    )
  }




  for (let effect of effects) {
    event.recipes.create.filling(Item.of("spartanweaponry:tipped_bolt", { Potion: effect }),
      [
        "spartanweaponry:bolt",
        Fluid.of('create:potion', 180, { Potion: effect }),
      ]
    )
  }

});

ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly([
    Item.of('4x outer_end:mint_crystal_arrow').withChance(100.0), // this is the item that will appear in JEI as the result
  ], 'minecraft:arrow_fletching', [ // 'create:golden_sheet' is the input
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'minecraft:stick']),
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'outer_end:mint_crystal_shard']),
  ]).transitionalItem('minecraft:arrow_fletching').loops(1) // set the transitional item and the number of loops
});

ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly([
    Item.of('4x outer_end:cobalt_crystal_arrow').withChance(100.0), // this is the item that will appear in JEI as the result
  ], 'minecraft:arrow_fletching', [ // 'create:golden_sheet' is the input
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'minecraft:stick']),
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'outer_end:cobalt_crystal_shard']),
  ]).transitionalItem('minecraft:arrow_fletching').loops(1) // set the transitional item and the number of loops
});

ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly([
    Item.of('4x minecraft:spectral_arrow').withChance(100.0), // this is the item that will appear in JEI as the result
  ], 'minecraft:arrow', [ // 'create:golden_sheet' is the input
    event.recipes.createDeploying('minecraft:arrow', ['minecraft:arrow', 'minecraft:glowstone_dust']),
    event.recipes.createDeploying('minecraft:arrow', ['minecraft:arrow', 'minecraft:glowstone_dust']),
  ]).transitionalItem('minecraft:arrow').loops(1) // set the transitional item and the number of loops
});


ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly([
    Item.of('4x outer_end:rose_crystal_arrow').withChance(100.0), // this is the item that will appear in JEI as the result
  ], 'minecraft:arrow_fletching', [ // 'create:golden_sheet' is the input
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'minecraft:stick']),
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'outer_end:rose_crystal_shard']),
  ]).transitionalItem('minecraft:arrow_fletching').loops(1) // set the transitional item and the number of loops
});


ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly([
    Item.of('4x tide:deep_aqua_arrow').withChance(100.0), // this is the item that will appear in JEI as the result
  ], 'minecraft:arrow_fletching', [ // 'create:golden_sheet' is the input
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'minecraft:stick']),
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'tide:deep_aqua_crystal']),
  ]).transitionalItem('minecraft:arrow_fletching').loops(1) // set the transitional item and the number of loops
});

ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly([
    Item.of('4x spartanweaponry:copper_bolt').withChance(100.0), // this is the item that will appear in JEI as the result
  ], 'minecraft:arrow_fletching', [ // 'create:golden_sheet' is the input
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'minecraft:iron_nugget']),
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'minecraft:copper_ingot']),
  ]).transitionalItem('minecraft:arrow_fletching').loops(1) // set the transitional item and the number of loops
});


ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly([
    Item.of('4x spartanweaponry:copper_arrow').withChance(100.0), // this is the item that will appear in JEI as the result
  ], 'minecraft:arrow_fletching', [ // 'create:golden_sheet' is the input
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'minecraft:stick']),
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'minecraft:copper_ingot']),
  ]).transitionalItem('minecraft:arrow_fletching').loops(1) // set the transitional item and the number of loops
});

ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly([
    Item.of('4x spartanweaponry:diamond_arrow').withChance(100.0), // this is the item that will appear in JEI as the result
  ], 'minecraft:arrow_fletching', [ // 'create:golden_sheet' is the input
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'minecraft:stick']),
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'spelunkery:diamond_shard']),
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'spelunkery:diamond_shard']),
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'spelunkery:diamond_shard']),
  ]).transitionalItem('minecraft:arrow_fletching').loops(1) // set the transitional item and the number of loops
});

ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly([
    Item.of('4x spartanweaponry:diamond_bolt').withChance(100.0), // this is the item that will appear in JEI as the result
  ], 'minecraft:arrow_fletching', [ // 'create:golden_sheet' is the input
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'minecraft:iron_nugget']),
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'spelunkery:diamond_shard']),
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'spelunkery:diamond_shard']),
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'spelunkery:diamond_shard']),
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'spelunkery:diamond_shard']),
  ]).transitionalItem('minecraft:arrow_fletching').loops(1) // set the transitional item and the number of loops
});

ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly([
    Item.of('4x spartanweaponry:netherite_arrow').withChance(100.0), // this is the item that will appear in JEI as the result
  ], 'minecraft:arrow_fletching', [ // 'create:golden_sheet' is the input
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'minecraft:stick']),
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'oreganized:netherite_nugget']),
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'oreganized:netherite_nugget']),
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'oreganized:netherite_nugget']),
  ]).transitionalItem('minecraft:arrow_fletching').loops(1) // set the transitional item and the number of loops
});

ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly([
    Item.of('4x spartanweaponry:netherite_bolt').withChance(100.0), // this is the item that will appear in JEI as the result
  ], 'minecraft:arrow_fletching', [ // 'create:golden_sheet' is the input
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'minecraft:iron_nugget']),
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'oreganized:netherite_nugget']),
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'oreganized:netherite_nugget']),
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'oreganized:netherite_nugget']),
  ]).transitionalItem('minecraft:arrow_fletching').loops(1) // set the transitional item and the number of loops
});


ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly([
    Item.of('4x spartanweaponry:iron_arrow').withChance(100.0), // this is the item that will appear in JEI as the result
  ], 'minecraft:arrow_fletching', [ // 'create:golden_sheet' is the input
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'minecraft:stick']),
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'minecraft:iron_ingot']),
  ]).transitionalItem('minecraft:arrow_fletching').loops(1) // set the transitional item and the number of loops
});

ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly([
    Item.of('4x spartanweaponry:bolt').withChance(100.0), // this is the item that will appear in JEI as the result
  ], 'minecraft:arrow_fletching', [ // 'create:golden_sheet' is the input
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'minecraft:iron_nugget']),
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'minecraft:iron_ingot']),
  ]).transitionalItem('minecraft:arrow_fletching').loops(1) // set the transitional item and the number of loops
});

ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly([
    Item.of('4x spartanweaponry:wooden_arrow').withChance(100.0), // this is the item that will appear in JEI as the result
  ], 'minecraft:arrow_fletching', [ // 'create:golden_sheet' is the input
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'minecraft:stick']),
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', '#minecraft:planks']),
  ]).transitionalItem('minecraft:arrow_fletching').loops(1) // set the transitional item and the number of loops
});

ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly([
    Item.of('4x minecraft:arrow').withChance(100.0), // this is the item that will appear in JEI as the result
  ], 'minecraft:arrow_fletching', [ // 'create:golden_sheet' is the input
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'minecraft:stick']),
    event.recipes.createDeploying('minecraft:arrow_fletching', ['minecraft:arrow_fletching', 'minecraft:flint']),
  ]).transitionalItem('minecraft:arrow_fletching').loops(1) // set the transitional item and the number of loops
});

// Canteens
// Leather,Gold, Diamond, Netherite
// 5     ,10  ,15,     ,25
// Leather ones


ServerEvents.recipes(event => {
  event.recipes.create.emptying([Fluid.of('supplementaries:lumisene', 250), 'minecraft:glass_bottle'], 'supplementaries:lumisene_bottle')
  event.recipes.create.emptying([Fluid.of('toughasnails:purified_water', 250), 'minecraft:glass_bottle'], 'toughasnails:purified_water_bottle')
  event.recipes.create.emptying([Fluid.of('toughasnails:dirty_water', 250), 'minecraft:glass_bottle'], 'toughasnails:dirty_water_bottle')
  event.recipes.create.emptying([Fluid.of('create:chocolate', 250), 'minecraft:stick'], 'alexscavesdelight:chocolate_ice_cream')
  event.recipes.create.mixing([Fluid.of('create:chocolate', 500)], ['alexscaves:chocolate_ice_cream_scoop', 'alexscaves:chocolate_ice_cream', 'alexscaves:block_of_chocolate', 'alexscaves:block_of_polished_chocolate', 'alexscaves:block_of_chiseled_chocolate', 'alexscaves:block_of_chocolate_frosting']).heated()
  event.recipes.create.emptying([Fluid.of('toughasnails:dirty_water', 250), 'minecraft:glass_bottle'], 'toughasnails:dirty_water_bottle')
})

// Item drains for luminensense and canteens next 500
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('toughasnails:empty_gold_canteen', 1), // arg 1: output
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'create:golden_sheet',
      B: 'toughasnails:empty_leather_canteen'
    }
  )
}
)

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('toughasnails:empty_diamond_canteen', 1), // arg 1: output
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'create:diamond_sheet',
      B: 'toughasnails:empty_leather_canteen'
    }
  )
}
)
