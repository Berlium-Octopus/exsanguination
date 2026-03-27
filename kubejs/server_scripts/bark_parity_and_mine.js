// Higher Then Copper
// Make an efficiency check
ServerEvents.recipes(event => {
event.shapeless(
  Item.of('minecraft:stick', 4), // arg 1: output
  [
    '#minecraft:plank_axe',
    '#minecraft:planks'
  ]
).damageIngredient('#minecraft:plank_axe', 1)
}
)

ServerEvents.recipes(event => {
  event.shaped(
  Item.of('farmersdelight:organic_compost', 1), // arg 1: output
  [
    'EEA',
    'GGE', // arg 2: the shape (array of strings)
    'QQE'
  ],
  {
    Q: 'minecraft:dirt',
    A: 'minecraft:bone_meal',
    E: '#immersive_weathering:bark',
    G: 'farmersdelight:straw'
  }
)
}
);

ServerEvents.recipes(event => {
  event.shaped(
  Item.of('minecraft:paper', 1), // arg 1: output
  [
    'EEE',
    'EEE', // arg 2: the shape (array of strings)
    'EEE'
  ],
  {
    E: '#immersive_weathering:bark'
  }
)
}
);

// katu's script
BlockEvents.rightClicked(event => {
    const { block, hand, item, world, level, player } = event;
    if (hand != 'MAIN_HAND') return;
    if (item.id == 'minecraft:bone_meal' && block.hasTag('minecraft:real_small_flowers')) {
      player.swing();
        item.count--
        if(Math.random()<0.5){
          block.popItem(block.id)
        }
        event.server.runCommandSilent(`playsound minecraft:item.bone_meal.use block @a ${block.x} ${block.y} ${block.z}`)
        level.spawnParticles('minecraft:happy_villager', true, block.x, block.y, block.z, 0.5, 0.5, 0.5, 0.1, 20);
    }
});



BlockEvents.rightClicked('minecraft:torchflower', event => {
    const { block, hand, item, world, level, player } = event;
    if (item.id == 'minecraft:bone_meal') {
        event.block.set('minecraft:torchflower_crop');
        if(Math.random()<0.5){
        block.popItem('minecraft:torchflower')
        }
        player.swing();
        event.server.runCommandSilent(`playsound minecraft:item.bone_meal.use block @a ${block.x} ${block.y} ${block.z}`)
        level.spawnParticles('minecraft:happy_villager', true, block.x, block.y, block.z, 2, 2, 2, 0.1, 20);
        event.item.shrink(1);
    } else {
      event.block.set('minecraft:torchflower_crop');
    }
});

BlockEvents.rightClicked('minecraft:torchflower_crop', event => {
    const { block, hand, item, world, level, player } = event;
    if (item.id == 'minecraft:bone_meal') {
        event.block.set('minecraft:torchflower');
        player.swing();
        event.server.runCommandSilent(`playsound minecraft:item.bone_meal.use block @a ${block.x} ${block.y} ${block.z}`)
        level.spawnParticles('minecraft:happy_villager', true, block.x, block.y, block.z, 2, 2, 2, 0.1, 20);
        event.item.shrink(2);
    }
});


BlockEvents.broken('minecraft:diamond_ore', event => {
switch(event.player.mainHandItem.getId()){
  case 'minecraft:stone_pickaxe':
    event.block.set('minecraft:cobblestone');
    event.player.damageHeldItem('main_hand', 50)
    event.cancel();
    break;
}
});

BlockEvents.broken('minecraft:stone', (event) => {
if (!event.player.getMainHandItem().hasEnchantment('minecraft:silk_touch', 1))
  if (Math.random() > 0.95) {
    event.block.createEntity('minecraft:silverfish').spawn()
  }
});

BlockEvents.broken('minecraft:deepslate', (event) => {
if (!event.player.getMainHandItem().hasEnchantment('minecraft:silk_touch', 1))
  if (Math.random() > 0.90) {
    event.block.createEntity('minecraft:silverfish').spawn()
  }
});

BlockEvents.broken('minecraft:end_stone', (event) => {
if (event.player.getMainHandItem().hasEnchantment('minecraft:silk_touch', 1)) return
if (event.player.getMainHandItem().hasEnchantment('minecraft:efficiency', 1)) return
  if (Math.random() > 0.99) {
    event.block.createEntity('minecraft:endermite').spawn()
  }
});

BlockEvents.broken('deeperdarker:sculk_stone', (event) => {
if (event.player.getMainHandItem().hasEnchantment('minecraft:silk_touch', 1)) return
if (event.player.getMainHandItem().hasEnchantment('minecraft:efficiency', 1)) return
  if (Math.random() > 0.85) {
    event.block.createEntity('sculkhorde:sculk_mite').spawn()
  }
});


BlockEvents.broken('deeperdarker:gloomslate', (event) => {
if (event.player.getMainHandItem().hasEnchantment('minecraft:silk_touch', 1)) return
if (event.player.getMainHandItem().hasEnchantment('minecraft:efficiency', 1)) return
  if (Math.random() > 0.90) {
    event.block.createEntity('sculkhorde:sculk_mite').spawn()
  }
});

BlockEvents.broken('minecraft:iron_ore', event => {
if (event.player.getMainHandItem().hasEnchantment('minecraft:silk_touch', 1)) return
if (event.player.getMainHandItem().hasEnchantment('minecraft:efficiency', 1)) return
switch(event.player.mainHandItem.getId()){
  case 'minecraft:stone_pickaxe':

    event.block.popItem("spelunkery:raw_iron_nugget")
    event.block.set('minecraft:cobblestone', event.block.properties);
    event.player.damageHeldItem('main_hand', 30)
    event.cancel();
    break;
}
});

BlockEvents.broken('minecraft:gold_ore', event => {
if (event.player.getMainHandItem().hasEnchantment('minecraft:silk_touch', 1)) return
if (event.player.getMainHandItem().hasEnchantment('minecraft:efficiency', 1)) return
switch(event.player.mainHandItem.getId()){
  case 'minecraft:stone_pickaxe':
    event.block.popItem("spelunkery:raw_gold_nugget")
    event.block.set('minecraft:cobblestone', event.block.properties);
    event.player.damageHeldItem('main_hand', 5)
    event.cancel();
    break;
}
});

BlockEvents.broken('create:zinc_ore', event => {
if (event.player.getMainHandItem().hasEnchantment('minecraft:silk_touch', 1)) return
if (event.player.getMainHandItem().hasEnchantment('minecraft:efficiency', 1)) return
switch(event.player.mainHandItem.getId()){
  case 'minecraft:stone_pickaxe':
    event.block.popItem("2x create:raw_zinc")
    event.block.set('minecraft:cobblestone', event.block.properties);
    event.player.damageHeldItem('main_hand', 1)
    event.cancel()
    break;
}
});

BlockEvents.broken("minecraft:copper_ore", event => {
if (event.player.getMainHandItem().hasEnchantment('minecraft:silk_touch', 1)) return
if (event.player.getMainHandItem().hasEnchantment('minecraft:efficiency', 1)) return
switch(event.player.mainHandItem.getId()){
  case 'minecraft:stone_pickaxe':
    event.block.popItem("2x minecraft:raw_copper")
    event.block.popItem("8x spelunkery:raw_copper_nugget")
    event.block.set('minecraft:cobblestone', event.block.properties);
    event.player.damageHeldItem('main_hand', 1)
    event.cancel()
    break;
}
}); 
BlockEvents.broken("minecraft:coal_ore", event => {
if (event.player.getMainHandItem().hasEnchantment('minecraft:silk_touch', 1)) return
if (event.player.getMainHandItem().hasEnchantment('minecraft:efficiency', 1)) return
switch(event.player.mainHandItem.getId()){
  case 'minecraft:stone_pickaxe':
    event.block.popItem("16x spelunkery:coal_lump")
    event.block.set('minecraft:cobblestone', event.block.properties);
    event.player.damageHeldItem('main_hand', 1)
    event.cancel()
    break;
}
});

// By Eazy
/*
BlockEvents.rightClicked('minecraft:spawner', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'sculkhorde:crying_souls':
    event.block.popItem("6x spelunkers_charm:rock");
    block.entityData.getCompound("ForgeCaps").remove();
    event.block.set('minecraft:spawner', {ForgeCaps:{"temporary_spawners:spawner_data":{cd:0,ticks:0}}});
    event.item.shrink(1)
    event.cancel();
    break;
}
});
*/
const Campfire = ["netherexp:ancient_campfire","minecraft:campfire","minecraft:soul_campfire"]
Campfire.forEach(camp => {
  BlockEvents.rightClicked(camp, event => {
    const { player, block, server, level, player: { mainHandItem } } = event
    switch(event.player.mainHandItem.getId()){
    case 'create:cinder_flour':
      // Partially From Zek in discord
      if (block.properties.lit === false) {
            block.set(block.id, { infinite: true, facing:block.properties.facing, runs_out: false, lit: false});
            level.spawnParticles('smoke', true, block.x, block.y, block.z, 0, 0, 0, 3, 0.4);
            server.runCommandSilent(`playsound minecraft:item.firecharge.use block @a ${block.x} ${block.y} ${block.z} 1 1`)
            event.block.popItem("supplementaries:ash");
            event.item.shrink(1);
            player.swing();
            event.cancel();
            break;
            }
    }
    }
    );
});

// Early Game Lit Camfire
Campfire.forEach(camp => {
  BlockEvents.rightClicked(camp, event => {
    const { player, block, server, level, player: { mainHandItem } } = event
    switch(event.player.mainHandItem.getId()){
    case "minecraft:stick":
      // Partially From Zek in discord
      if (block.properties.lit === false) {
        if(Math.random()>0.8){
          block.set(block.id, {lit: true});
          event.block.popItem("supplementaries:ash");
            }
            level.spawnParticles('smoke', true, block.x, block.y, block.z, 0, 0, 0, 3, 0.4);
            server.runCommandSilent(`playsound minecraft:item.firecharge.use block @a ${block.x} ${block.y} ${block.z} 1 1`)
            event.item.shrink(1);
            player.swing();
            event.cancel();
            break;
            }
    }
    }
    );
});



BlockEvents.broken('minecraft:mangrove_log', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'farmersdelight:wooden_knife':
  case 'farmersdelight:flint_knife':
    event.block.popItem('immersive_weathering:mangrove_bark');
    event.block.set('minecraft:stripped_mangrove_log',block.properties);
    event.player.damageHeldItem('main_hand', 15);
    event.cancel();
    break;
}
});

ServerEvents.recipes(event => {
event.recipes.farmersdelight.cutting("#minecraft:planks", "#minecraft:axes", ["2x minecraft:stick",Item.of("minecraft:stick").withChance(0.25),Item.of("minecraft:stick").withChance(0.25)])
})

BlockEvents.broken('minecraft:jungle_log', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'farmersdelight:wooden_knife':
  case 'farmersdelight:flint_knife':
    event.block.popItem('immersive_weathering:jungle_bark');
    event.block.set('minecraft:stripped_mangrove_log',block.properties);
    event.player.damageHeldItem('main_hand', 15);
    event.cancel();
    break;
}
});

BlockEvents.broken('biomesoplenty:mahogany_log', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'farmersdelight:wooden_knife':
  case 'farmersdelight:flint_knife':
    event.block.popItem('immersive_weathering:biomesoplenty/mahogany_bark');
    event.block.set('biomesoplenty:stripped_mahogany_log',block.properties);
    event.player.damageHeldItem('main_hand', 15);
    event.cancel();
    break;
}
});

BlockEvents.rightClicked('minecraft:stripped_oak_wood', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'scalinghealth:heart_dust':
    level.spawnParticles('minecraft:angry_villager', true, block.x, block.y, block.z, 0, 0, 0, 0, 0.5);
    event.block.set('rootoffear:faded_oak_wood_corrupt1',block.properties);
    event.item.shrink(2)
    player.swing();
    event.cancel();
    break;
}
});



BlockEvents.rightClicked('rootoffear:faded_oak_wood_corrupt1', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'scalinghealth:bandages':
    level.spawnParticles('minecraft:happy_villager', true, block.x, block.y, block.z, 0, 0, 0, 0, 0.5);
    event.block.set('rootoffear:faded_oak_wood_corrupt2',block.properties);
    event.item.shrink(1)
    player.swing();
    event.cancel();
    break;
}
});


LootJS.modifiers((event) => {
    event.addBlockLootModifier("rootoffear:faded_oak_wood_corrupt1").addLoot(
        LootEntry.of("minecraft:stripped_oak_wood").when((c) => c.randomChance(0.5)),
        LootEntry.of("scalinghealth:heart_dust").when((c) => c.randomChance(0.35)))
});

LootJS.modifiers((event) => {
    event.addBlockLootModifier("jeg:scrap_ore")
    .removeLoot('jeg:tech_trash')
});

// Add le bonemeal particle
// Wilted Ceastus???
BlockEvents.rightClicked('rootoffear:faded_oak_wood_corrupt2', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'scalinghealth:bandages':
    level.spawnParticles('minecraft:happy_villager', true, block.x, block.y, block.z, 0, 0, 0, 0, 0.5);
    event.server.scheduleInTicks(1, () => {
      event.block.set('rootoffear:faded_oak_wood_corrupt3',block.properties);
})
    event.item.shrink(1)
    player.swing();
    event.cancel();
    break;
}
});

LootJS.modifiers((event) => {
    event
        .addBlockLootModifier([
          "luminous_nether:loot_vase_2",
          "luminous_nether:loot_vase_6",
          "luminous_nether:loot_vase_5",
          "luminous_nether:loot_vase_4",
          "luminous_nether:loot_vase_3",
          "luminous_nether:loot_vase_9",
          "luminous_nether:loot_vase_8",
          "luminous_nether:loot_vase",
          "luminous_nether:lootvase_7"])
        .randomChanceWithEnchantment("minecraft:fortune", [0.02, 0.05, 0.1, 0.15])
        .addLoot("luminous_nether:nether_beast_totem");
});


let vase = [
'loot_vase_2',
'loot_vase_6',
'loot_vase_5',
'loot_vase_4',
'loot_vase_3',
'loot_vase_9',
'loot_vase_8',
'loot_vase',
'lootvase_7'
]

LootJS.modifiers((event) => {
  for (let element of vase) {
    event.addBlockLootModifier([
      `luminous_nether:${element}`])
        .randomChanceWithEnchantment("minecraft:silk_touch", [0,1])
        .addLoot(`luminous_nether:${element}`);
        }
});

LootJS.modifiers((event) => {
    event
        .addBlockLootModifier(["biomesoplenty:dried_salt"])
        .removeLoot("biomesoplenty:dried_salt")
        .addWeightedLoot([
        Item.of("biomesoplenty:dried_salt").withChance(0.5),
        Item.of("minecraft:gravel").withChance(0.3),
        Item.of("spelunkery:saltpeter").withChance(0.1),
        Item.of("spelunkery:salt").withChance(0.1)
        ]);
});

LootJS.modifiers((event) => {
    event
        .addBlockLootModifier(["rootoffear:faded_oak_leaves"])
        .matchMainHand("#minecraft:hoes")
        .removeLoot("rootoffear:faded_oak_leaves");
});

LootJS.modifiers((event) => {
    event.addBlockLootModifier("sculkhorde:mite_egg_2").addLoot(
        LootEntry.of("sculkhorde:mite_egg"))
        event.addBlockLootModifier("sculkhorde:mite_egg_3").addLoot(
            LootEntry.of("sculkhorde:mite_egg"))
});

LootJS.modifiers((event) => {
    event.addBlockLootModifier("rootoffear:faded_oak_wood_corrupt2").addLoot(
        LootEntry.of("minecraft:stripped_oak_wood").when((c) => c.randomChance(0.5)),
        LootEntry.of("scalinghealth:bandages").when((c) => c.randomChance(0.35)),
        LootEntry.of("scalinghealth:heart_dust").when((c) => c.randomChance(0.35)));
});

BlockEvents.rightClicked('rootoffear:faded_oak_wood_corrupt3', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'scalinghealth:bandages':
    level.spawnParticles('minecraft:happy_villager', true, block.x, block.y, block.z, 0, 0, 0, 0, 0.5);
    event.block.set('rootoffear:stripped_faded_oak_wood',block.properties);
    event.item.shrink(1)
    player.swing();
    event.cancel();
    break;
}
});

LootJS.modifiers((event) => {
    event.addBlockLootModifier("rootoffear:faded_oak_wood_corrupt3").addLoot(
        LootEntry.of("minecraft:stripped_oak_wood").when((c) => c.randomChance(0.5)),
        LootEntry.of("scalinghealth:bandages").when((c) => c.randomChance(0.35)),
        LootEntry.of("scalinghealth:bandages").when((c) => c.randomChance(0.35)),
        LootEntry.of("scalinghealth:heart_dust").when((c) => c.randomChance(0.35)));
});

BlockEvents.rightClicked('rootoffear:stripped_faded_oak_wood', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'immersive_weathering:dark_oak_bark':
    level.spawnParticles('minecraft:happy_villager', true, block.x, block.y, block.z, 0, 0, 0, 0, 0.5);
    event.block.set('rootoffear:faded_oak_wood',block.properties);
    event.item.shrink(4)
    player.swing();
    event.cancel();
    break;
}
});

BlockEvents.rightClicked('minecraft:stripped_oak_log', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'scalinghealth:heart_dust':
    level.spawnParticles('minecraft:angry_villager', true, block.x, block.y, block.z, 0, 0, 0, 0, 0.5);
    event.block.set('rootoffear:faded_oak_log_phase1',block.properties);
    event.item.shrink(1)
    player.swing();
    event.cancel();
    break;
}
});

BlockEvents.rightClicked('rootoffear:faded_oak_log_phase1', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'scalinghealth:bandages':
    event.server.scheduleInTicks(1, () => {
      level.spawnParticles('minecraft:happy_villager', true, block.x, block.y, block.z, 0, 0, 0, 0, 0.5);
      event.block.set('rootoffear:faded_oak_log_phase2',block.properties);
})
    event.item.shrink(1)
    player.swing();
    event.cancel();
    break;
}
});


LootJS.modifiers((event) => {
    event.addBlockLootModifier("rootoffear:faded_oak_log_phase1").addLoot(
        LootEntry.of("minecraft:stripped_oak_log").when((c) => c.randomChance(0.5)),
        LootEntry.of("scalinghealth:heart_dust").when((c) => c.randomChance(0.35)));
});

BlockEvents.rightClicked('rootoffear:faded_oak_log_phase2', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'scalinghealth:bandages':
    event.server.scheduleInTicks(1, () => {
      level.spawnParticles('minecraft:happy_villager', true, block.x, block.y, block.z, 0, 0, 0, 0, 0.5);
      event.block.set('rootoffear:faded_oak_log_phase3',block.properties);
})
    event.item.shrink(1)
    player.swing();
    event.cancel();
    break;
}
});

LootJS.modifiers((event) => {
    event.addBlockLootModifier("rootoffear:faded_oak_log_phase2").addLoot(
        LootEntry.of("minecraft:stripped_oak_log").when((c) => c.randomChance(0.5)),
        LootEntry.of("scalinghealth:bandages").when((c) => c.randomChance(0.35)),
        LootEntry.of("scalinghealth:heart_dust").when((c) => c.randomChance(0.35)));
});

BlockEvents.rightClicked('rootoffear:faded_oak_log_phase3', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'scalinghealth:bandages':
    event.server.scheduleInTicks(1, () => {
    level.spawnParticles('minecraft:happy_villager', true, block.x, block.y, block.z, 0, 0, 0, 0, 0.5);
    event.block.set('rootoffear:stripped_faded_oak_log',block.properties);
    })
    event.item.shrink(1)
    player.swing();
    event.cancel();
    break;
}
});

LootJS.modifiers((event) => {
    event.addBlockLootModifier("rootoffear:faded_oak_log_phase3").addLoot(
        LootEntry.of("minecraft:stripped_oak_log").when((c) => c.randomChance(0.5)),
        LootEntry.of("scalinghealth:bandages").when((c) => c.randomChance(0.35)),
        LootEntry.of("scalinghealth:bandages").when((c) => c.randomChance(0.35)),
        LootEntry.of("scalinghealth:heart_dust").when((c) => c.randomChance(0.35)))
});

BlockEvents.rightClicked('rootoffear:stripped_faded_oak_log', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'immersive_weathering:dark_oak_bark':
    level.spawnParticles('minecraft:happy_villager', true, block.x, block.y, block.z, 0, 0, 0, 0, 0.5);
    event.block.set('rootoffear:faded_oak_log',block.properties);
    event.item.shrink(2)
    player.swing();
    event.cancel();
    break;
}
});


BlockEvents.broken('biomesoplenty:magic_log', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'farmersdelight:wooden_knife':
  case 'farmersdelight:flint_knife':
    event.block.popItem('immersive_weathering:biomesoplenty/magic_bark');
    event.block.set('biomesoplenty:stripped_magic_log',block.properties);
    event.player.damageHeldItem('main_hand', 15);
    event.cancel();
    break;
}
});


BlockEvents.broken('biomesoplenty:maple_log', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'farmersdelight:wooden_knife':
  case 'farmersdelight:flint_knife':
    event.block.popItem('immersive_weathering:biomesoplenty/maple_bark');
    event.block.set('biomesoplenty:stripped_maple_log',block.properties);
    event.player.damageHeldItem('main_hand', 15);
    event.cancel();
    break;
}
});
BlockEvents.broken('biomemakeover:willow_log', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'farmersdelight:wooden_knife':
  case 'farmersdelight:flint_knife':
    event.block.popItem('immersive_weathering:biomemakeover/willow_bark');
    event.block.set('biomemakeover:stripped_willow_log',block.properties);
    event.player.damageHeldItem('main_hand', 15);
    event.cancel();
    break;
}
});

BlockEvents.broken('biomesoplenty:palm_log', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'farmersdelight:wooden_knife':
  case 'farmersdelight:flint_knife':
    event.block.popItem('immersive_weathering:biomesoplenty/palm_bark');
    event.block.set('biomesoplenty:stripped_palm_log',block.properties);
    event.player.damageHeldItem('main_hand', 15);
    event.cancel();
    break;
}
});


BlockEvents.broken('minecraft:birch_log', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'farmersdelight:wooden_knife':
  case 'farmersdelight:flint_knife':
    event.block.popItem('immersive_weathering:biomesoplenty/palm_bark');
    event.block.set('minecraft:stripped_birch_log',block.properties);
    event.player.damageHeldItem('main_hand', 15);
    event.cancel();
    break;
}
});


BlockEvents.broken('minecraft:cherry_log', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'farmersdelight:wooden_knife':
  case 'farmersdelight:flint_knife':
    event.block.popItem('immersive_weathering:cherry_bark');
    event.block.set('minecraft:stripped_cherry_log',block.properties);
    event.player.damageHeldItem('main_hand', 15);
    event.cancel();
    break;
}
});

BlockEvents.broken('vinery:dark_cherry_log', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'farmersdelight:wooden_knife':
  case 'farmersdelight:flint_knife':
    event.block.popItem('immersive_weathering:vinery/dark_cherry_scales');
    event.block.set('vinery:stripped_dark_cherry_log',block.properties);
    event.player.damageHeldItem('main_hand', 10);
    event.cancel();
    break;
}
});

BlockEvents.broken('minecraft:acacia_log', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'farmersdelight:wooden_knife':
  case 'farmersdelight:flint_knife':
    event.block.popItem('immersive_weathering:acacia_bark');
    event.block.set('minecraft:stripped_acacia_log',block.properties);
    event.player.damageHeldItem('main_hand', 15)
    event.cancel();
    break;
}
});


BlockEvents.broken('minecraft:spruce_log', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'farmersdelight:wooden_knife':
  case 'farmersdelight:flint_knife':
    event.block.popItem('immersive_weathering:spruce_bark');
    event.block.set('minecraft:stripped_acacia_log',block.properties);
    event.player.damageHeldItem('main_hand', 15)
    event.cancel();
    break;
}
});

BlockEvents.broken('minecraft:oak_log', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'farmersdelight:wooden_knife':
  case 'farmersdelight:flint_knife':
    event.block.popItem('immersive_weathering:oak_bark');
    event.block.set('minecraft:stripped_oak_log', block.properties);
    event.player.damageHeldItem('main_hand', 10)
    event.cancel();
    break;
}
});

BlockEvents.broken('quark:blossom_log', event => {
  const { player, block, server, level, player: { mainHandItem } } = event
switch(event.player.mainHandItem.getId()){
  case 'farmersdelight:wooden_knife':
  case 'farmersdelight:flint_knife':
    event.block.popItem('immersive_weathering:quark/blossom_bark');
    event.block.set('minecraft:stripped_oak_log', block.properties);
    event.player.damageHeldItem('main_hand', 10)
    event.cancel();
    break;
}
});

const $ExplosionInteraction = Java.loadClass('net.minecraft.world.level.Level$ExplosionInteraction');
BlockEvents.broken('minecraft:bedrock', event => {
  switch(event.player.mainHandItem.getId()){
    case 'spelunkery:bedrock_buster':
    event.block.createExplosion().explosionMode($ExplosionInteraction.MOB).strength(2).explode()
    break;
}
});

LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:bedrock")
        .anyDimension("minecraft:nether")
        .randomChanceWithEnchantment("minecraft:fortune", [0.1, 0.2, 0.3, 0.4])
        .addLoot("exsanguination:disk_fragment_void");
});


LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:bedrock")
        .randomChanceWithEnchantment("minecraft:fortune", [0.3, 0.4, 0.5, 0.6])
        .addLoot("spelunkers_charm:bedrock_rock");
});

BlockEvents.broken('minecraft:cobbled_deepslate', event => {
if (event.player.getMainHandItem().hasEnchantment('minecraft:silk_touch', 1)) return
if (event.player.getMainHandItem().hasEnchantment('minecraft:efficiency', 1)) return
switch(event.player.mainHandItem.getId()){
  case 'minecraft:stone_pickaxe':
  case 'minecraft:copper_pickaxe':
    event.block.popItem("spelunkers_charm:deepslate_rock");
    event.block.set('minecraft:air', event.block.properties);
    event.player.damageHeldItem('main_hand', 30)
    event.cancel()
    break;
}
});

BlockEvents.broken("minecraft:stone", event => {
if (event.player.getMainHandItem().hasEnchantment('minecraft:silk_touch', 1)) return
if (event.player.getMainHandItem().hasEnchantment('minecraft:efficiency', 1)) return
switch(event.player.mainHandItem.getId()){
  case 'minecraft:stone_pickaxe':
  case 'spartanweaponry:wooden_club': 
  case 'spartanweaponry:studded_club': 
    event.block.popItem("spelunkers_charm:rock");
    event.block.set('minecraft:cobblestone', event.block.properties);
    event.player.damageHeldItem('main_hand', 1)
    event.cancel()
    break;
}
});

BlockEvents.broken("minecraft:cobblestone", event => {
if (event.player.getMainHandItem().hasEnchantment('minecraft:silk_touch', 1)) return
if (event.player.getMainHandItem().hasEnchantment('minecraft:efficiency', 1)) return
switch(event.player.mainHandItem.getId()){
  case 'minecraft:stone_pickaxe':
    event.block.popItem("spelunkers_charm:rock");
    event.block.set('minecraft:air', event.block.properties);
    event.player.damageHeldItem('main_hand', 1)
    event.cancel()
    break;
}
});

BlockEvents.broken('minecraft:deepslate', event => {
if (event.player.getMainHandItem().hasEnchantment('minecraft:silk_touch', 1)) return
if (event.player.getMainHandItem().hasEnchantment('minecraft:efficiency', 1)) return
switch(event.player.mainHandItem.getId()){
  case 'minecraft:stone_pickaxe':
  case 'minecraft:copper_pickaxe':
  case 'spartanweaponry:wooden_club':
  case 'spartanweaponry:studded_club': 
    event.block.popItem("spelunkers_charm:deepslate_rock");
    event.block.set('minecraft:cobbled_deepslate', event.block.properties);
    event.player.damageHeldItem('main_hand', 2)
    event.cancel();
    break;
}
});

let deepslate = [
"oreganized:deepslate_silver_ore",
"oreganized:deepslate_lead_ore",
"create:deepslate_zinc_ore",
"minecraft:deepslate_diamond_ore",
"minecraft:deepslate_coal_ore",
"minecraft:deepslate_iron_ore",
"minecraft:deepslate_copper_ore",
"minecraft:deepslate_gold_ore",
"minecraft:deepslate_redstone_ore",
"minecraft:deepslate_emerald_ore",
"minecraft:deepslate_lapis_ore",
"minecraft:deepslate"
]

deepslate.forEach(deepslate => {
BlockEvents.broken(deepslate, event => {
switch(event.player.mainHandItem.getId()){
  case 'minecraft:iron_pickaxe':
    event.player.damageHeldItem('main_hand', 2)
    break
    }
})
})

deepslate.forEach(deepslate => {
BlockEvents.broken(deepslate, event => {
if (event.player.getMainHandItem().hasEnchantment('minecraft:silk_touch', 1)) return
if (event.player.getMainHandItem().hasEnchantment('minecraft:efficiency', 1)) return
switch(event.player.mainHandItem.getId()){
  case 'minecraft:stone_pickaxe':
  case 'minecraft:copper_pickaxe':
  case 'create:bronze_pickaxe':
    event.block.set('minecraft:cobbled_deepslate', event.block.properties);
    event.player.damageHeldItem('main_hand', 8)
    event.cancel()
    break;
}
})
})

let andesite = [
"spelunkery:andesite_zinc_ore",
"spelunkery:andesite_silver_ore",
"spelunkery:andesite_lead_ore",
"spelunkery:andesite_diamond_ore",
"spelunkery:andesite_lapis_ore",
"spelunkery:andesite_emerald_ore",
"spelunkery:andesite_redstone_ore",
"spelunkery:andesite_coal_ore",
"spelunkery:andesite_iron_ore",
"spelunkery:andesite_copper_ore",
"spelunkery:andesite_gold_ore"
]

andesite.forEach(andesite => {
BlockEvents.broken(andesite, event => {
if (event.player.getMainHandItem().hasEnchantment('minecraft:silk_touch', 1)) return
if (event.player.getMainHandItem().hasEnchantment('minecraft:efficiency', 1)) return
switch(event.player.mainHandItem.getId()){
  case 'minecraft:stone_pickaxe':
    event.block.set('minecraft:andesite', event.block.properties);
    event.player.damageHeldItem('main_hand', 2)
    event.cancel()
    break;
}
})
})

let granite = [
"spelunkery:granite_zinc_ore",
"spelunkery:granite_silver_ore",
"spelunkery:granite_lead_ore",
"spelunkery:granite_diamond_ore",
"spelunkery:granite_coal_ore",
"spelunkery:granite_iron_ore",
"spelunkery:granite_copper_ore",
"spelunkery:granite_gold_ore",
"spelunkery:granite_redstone_ore",
"spelunkery:granite_emerald_ore",
"spelunkery:granite_lapis_ore"
]

granite.forEach(granite => {
BlockEvents.broken(granite, event => {
if (event.player.getMainHandItem().hasEnchantment('minecraft:silk_touch', 1)) return
if (event.player.getMainHandItem().hasEnchantment('minecraft:efficiency', 1)) return
switch(event.player.mainHandItem.getId()){
  case 'minecraft:stone_pickaxe':
    event.block.set('minecraft:granite', event.block.properties);
    event.player.damageHeldItem('main_hand', 2)
    event.cancel()
    break;
}
})
})

let diorite = [
"spelunkery:diorite_zinc_ore",
"spelunkery:diorite_silver_ore",
"spelunkery:diorite_lead_ore",
"spelunkery:diorite_diamond_ore",
"spelunkery:diorite_coal_ore",
"spelunkery:diorite_iron_ore",
"spelunkery:diorite_copper_ore",
"spelunkery:diorite_gold_ore",
"spelunkery:diorite_redstone_ore",
"spelunkery:diorite_emerald_ore",
"spelunkery:diorite_lapis_ore"
]

diorite.forEach(diorite => {
BlockEvents.broken(diorite, event => {
if (event.player.getMainHandItem().hasEnchantment('minecraft:silk_touch', 1)) return
if (event.player.getMainHandItem().hasEnchantment('minecraft:efficiency', 1)) return
switch(event.player.mainHandItem.getId()){
  case 'minecraft:stone_pickaxe':
    event.block.set('minecraft:diorite', event.block.properties);
    event.player.damageHeldItem('main_hand', 2)
    event.cancel()
    break;
}
})
})


let sculkstone = [
"deeperdarker:sculk_stone_iron_ore",
"deeperdarker:sculk_stone_diamond_ore",
"deeperdarker:sculk_stone_lapis_ore",
"deeperdarker:sculk_stone_emerald_ore",
"deeperdarker:sculk_stone_redstone_ore",
"deeperdarker:sculk_stone_gold_ore",
"deeperdarker:sculk_stone_copper_ore"
]
sculkstone.forEach(gloom => {
BlockEvents.broken(gloom, event => {
if (event.player.getMainHandItem().hasEnchantment('minecraft:silk_touch', 1)) return
if (event.player.getMainHandItem().hasEnchantment('minecraft:efficiency', 1)) return
switch(event.player.mainHandItem.getId()){
  case 'minecraft:stone_pickaxe':
  case 'create:bronze_pickaxe':
    event.block.set("deeperdarker:cobbled_sculk_stone", event.block.properties);
    event.player.damageHeldItem('main_hand', 2)
    event.cancel()
    break;
}
})
})
