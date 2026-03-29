// Midnighttiger and Co's script (Modiffied)
//discord.com/channels/303440391124942858/1457007022510833748/1458965458991583416 in discord.gg/lat
const piglinEvilTimeRange = [120, 200];
const piglinCureTimeRange = [1500, 2500];
const spawnPool = ["minecraft:piglin", "minecraft:zombified_piglin", "minecraft:piglin",]

ItemEvents.entityInteracted("luminous_nether:pale_melon_slice", (event) => {
  let { item, server, level, player } = event;
  if (event.target.type == "luminous_nether:piglin_cultist") {
    /** @type {$Piglin} */
    let target = event.target;
    if (target.getEffect("potioncore:vulnerable")) {
      let spawnEntity = spawnPool[Math.floor(Math.random() * spawnPool.length)]
      let cureTime = level.random.nextInt(piglinCureTimeRange[1] - piglinCureTimeRange[0] + 1) + piglinCureTimeRange[0];
      item.shrink(1);
      target.playSound("minecraft:entity.zombie_villager.cure");
      target.removeEffect("potioncore:vulnerable");
      target.potionEffects.add("minecraft:speed", cureTime, 0, true, true);
      target.potionEffects.add("minecraft:resistance", cureTime, 3, true, true);
      target.potionEffects.add("yungscavebiomes:frost", cureTime, 0, true, true);
      server.scheduleInTicks(cureTime, function () {
        if (target.health > 0) {
          let piglin = level.createEntity(spawnEntity);
          let nbt = target.nbt.copy();
          nbt.remove("UUID");
          nbt.IsImmuneToZombification = true
          piglin.mergeNbt(nbt);
          target.playSound("minecraft:entity.zombie_villager.converted");
          target.discard();
          piglin.spawn();
        }
      });
      event.cancel();
    }
  }
});


ItemEvents.entityInteracted("luminous_nether:popshroom_juice", (event) => {
  let { item, server, level, player } = event;
  if (event.target.type == "minecraft:piglin") {
    /** @type {$ZombifiedPiglin} */
    let target = event.target;
    let nbt = target.nbt.copy();
    if (target.getEffect("alexscaves:stunned") && target.isAdult()) {
      let cureTime = level.random.nextInt(piglinEvilTimeRange[1] - piglinEvilTimeRange[0] + 1) + piglinEvilTimeRange[0];
      item.shrink(1);
      player.give('minecraft:glass_bottle')
      target.playSound("minecraft:entity.zombie_villager.cure");
      target.removeEffect("alexscaves:stunned");
      nbt.IsImmuneToZombification = true
      // target.potionEffects.add("alexscavesexemplified:serened", cureTime, 0, true, true);
      target.potionEffects.add("minecraft:resistance", cureTime, 3, true, true);
      target.potionEffects.add("yungscavebiomes:frost", cureTime, 0, true, true);
      server.scheduleInTicks(cureTime, function () {
        if (target.health > 0) {
          let piglin = level.createEntity("luminous_nether:piglin_cultist");
          nbt.remove("UUID");
          piglin.mergeNbt(nbt);
          target.playSound("minecraft:entity.zombie_villager.converted");
          target.discard();
          piglin.spawn();
        }
      });
      event.cancel();
    }
  }
});


// tactical birthing
EntityEvents.death('minecraft:warden', event => {
  const { block, level, entity } = event
  if (Math.random() < 0.5) {
    entity.block.set('sculkhorde:mite_egg')
  }
})

EntityEvents.death('sculkhorde:sculk_enderman', event => {
  const { block, level, entity } = event
  if (Math.random() < 0.9) {
    entity.block.set('sculkhorde:mite_egg')
  }
})

EntityEvents.death('sculkhorde:sculk_hatcher', event => {
  const { block, level, entity } = event
  if (Math.random() < 0.9) {
    entity.block.set('sculkhorde:mite_egg')
  }
})


EntityEvents.death('alexsmobs:skreecher', event => {
  const { block, level, entity } = event
  if (Math.random() < 0.005) {
    entity.block.set('sculkhorde:mite_egg')
  }
})

// Vommiter
global.livingFallEvent = event => {
  let { entity, distance } = event
  let { block } = entity
  let blockToCheck = block
  if (block.blockState.isAir()) blockToCheck = block.down
  if (!blockToCheck.hasTag("sculkhorde:mite_eggs")) return;
  if (distance <= 1) return;
  entity.level.destroyBlock(blockToCheck, false)
}

// Bugs Go Bites
BlockEvents.broken(event => {
  if (event.level.dimension != "minecraft:overworld") return
  if (event.block.hasTag("sereneseasons:year_round_crops")) {
    if (Math.random() > 0.95) {
      event.block.down.createEntity('sleep_tight:bedbug').spawn()
    }
  }
  if (event.block.hasTag("immersive_weathering:leaf_pile_replaceable")) {
    if (Math.random() > 0.95) {
      event.block.down.createEntity('sleep_tight:bedbug').spawn()
    }
  }
  if (event.block.hasTag("sereneseasons:summer_crops")) {
    if (Math.random() > 0.95) {
      event.block.down.createEntity('sleep_tight:bedbug').spawn()
    }
  }
  if (event.block.hasTag("minecraft:leaves")) {
    if (Math.random() > 0.95) {
      event.block.down.createEntity('sleep_tight:bedbug').spawn()
    }
  }
});

//  TRYING TO MAKE GOLDEN OSMOSIS, Thanks To Liopyu YIPPIE
PlayerEvents.tick(event => {
  const { player, player: { mainHandItem, offHandItem, headArmorItem, chestArmorItem, legsArmorItem, feetArmorItem } } = event

  let items = [mainHandItem, offHandItem, headArmorItem, chestArmorItem, legsArmorItem, feetArmorItem]
  for (let item of items) {
    if (player.xp > 0 && testForRepairableGold(item)) {
      repairItem(player, item)
    }
  }
});
function testForRepairableGold(item) {
  return item.getEnchantmentLevel("exsanguination:osmosis") > 0 && item.damaged
}
function repairItem(player, itemStack) {
  const currentDurability = itemStack.damageValue
  if (currentDurability <= 0) return
  const repairAmount = 4
  const xpCostPerPoint = 0.5
  if (player.age % 20 == 0)
    // console.log(player.experienceLevel + ", " + player.xp)
    const maxRepairableDamage = Math.min(currentDurability, Math.floor(player.xp / xpCostPerPoint) * repairAmount)
  if (maxRepairableDamage > 0) {
    const xpSpent = Math.ceil(maxRepairableDamage / repairAmount) * xpCostPerPoint
    player.addXP(-xpSpent)
    itemStack.damageValue = Math.max(0, currentDurability - maxRepairableDamage)
  }
}

// By Arsenic and EricBatista on kubejs discord
PlayerEvents.tick(e => {
  const { player } = e;

  // Reset logic if effect is not active
  if (!player.potionEffects.isActive('exsanguination:dimentional_sickness')) {
    player.modifyAttribute("minecraft:generic.max_health", //Select max_health attribute
      "bf435515-2a7b-4790-a937-bfbd843db62b", //Identifier (UUID)
      1 //reset
      , "multiply_base") //Operation

    //Update player health
    player.setHealth(player.getHealth())
    return;
  }
  else {

    let amplifier = player.getEffect('exsanguination:dimentional_sickness').getAmplifier();
    player.modifyAttribute("minecraft:generic.max_health", //Select max_health attribute
      "bf435515-2a7b-4790-a937-bfbd843db62b", //Identifier (UUID)
      -hpModifierCalc(player, amplifier) //Modify attribute to be at least 1 hp
      , "addition") //Operation

    //Update player health
    player.setHealth(Math.min(player.getHealth(), player.getMaxHealth()))
  }

});

function hpModifierCalc(player, amplifier) {
  return Math.min(1 + amplifier * 2, player.getAttributeBaseValue("minecraft:generic.max_health") - 5)
}

PlayerEvents.tick(event => {
  let { player } = event
  if (player.age % 20 !== 0) return
  if (player.potionEffects.isActive('exsanguination:reincarnatus')) {
    player.heal(100)
  }
})

let attackstun = [
  "minecraft:iron_axe",
  "deeperdarker:resonarium_axe",
  "sculkhorde:ferriscite_axe",
  "deeperdarker:warden_axe",
  "sculkhorde:diascite_axe",
  "cataclysm:meat_shredder",
  "minecraft:copper_axe",
  "alexscaves_torpedoes:shadow_axe",
  "alexscaves_torpedoes:scarlet_axe",
  "alexscaves_torpedoes:azure_axe",
  "minecraft:stone_axe",
  "cataclysm:black_steel_axe",
  "minecraft:wooden_axe",
  "luminous_nether:gold_cultist_axe",
  "minecraft:golden_axe",
  "minecraft:diamond_axe",
  "oreganized:electrum_axe",
  "minecraft:netherite_axe"
]

// Based of dob3a's stick script
attackstun.forEach(w => {
  ItemEvents.rightClicked(w, event => {
    const { player, item, target: { entity } } = event;
    const aabb = player.boundingBox.inflate(4);
    player.level.getEntitiesWithin(aabb).forEach(entity => {
      if (!entity) return
      if (!player.getMainHandItem().hasEnchantment("fire_aspect", 1)) return
      if (entity.type == "rootoffear:wilted") {
        let sources = entity.damageSources()
        entity.attack(sources.fellOutOfWorld(), 1)
        entity.potionEffects.add("alexscaves:stunned", 160, 0, false, true)
        entity.playSound("minecraft:entity.player.attack.strong", 1, 10);
        entity.playSound("minecraft:item.axe.strip", 1, 10);
        player.swing();
        player.addItemCooldown(item, 400)
        player.damageHeldItem("main_hand", 10)
      }
    })
  })
})

let knifes = [
  "farmersdelight:netherite_knife",
  "alexscavesdelight:tectonic_knife",
  "spartanweaponry:netherite_dagger"
]

// Based of dob3a's stick script
knifes.forEach(w => {
  ItemEvents.rightClicked(w, event => {
    const { player, item, level, target: { entity } } = event;
    const aabb = player.boundingBox.inflate(2);
    player.level.getEntitiesWithin(aabb).forEach(entity => {
      if (!player.getEffect("minecraft:haste")) return
      if (!entity) return
      if (!entity.persistentData.IsStabbed && entity.type == "minecraft:warden") entity.persistentData.IsStabbed = 0
      if (entity.persistentData.IsStabbed == 0) {
        entity.potionEffects.add("alexscaves:stunned", 200, 0, false, true)
        entity.block.popItemFromFace('deeperdarker:heart_of_the_deep', 'up')
        entity.persistentData.IsStabbed = 1
        player.swing();
        player.damageHeldItem("main_hand", 9000)
      }
    }
    )
  })
})

// Every 300 Tiks The Wilted Gives This Effect
// Based of dob3a's stick script
// Hmm might be laggy i dont wanna add this
/*
  PlayerEvents.tick(event=>{
    let {player, player:{pos, age, block:{pos:{x, y, z}}}, level} = event
    if(age % 20 != 0) return; // Run every second
    const aabb = player.boundingBox.inflate(8);
    player.level.getEntitiesWithin(aabb).forEach(ent => {
      if (!ent) { return; };
      if (ent.isPlayer()) { return; };
      if (ent.type != "rootoffear:wilted") return
        player.potionEffects.add("lostcities:courage", 500, 0, false, true)
  })
  })
*/


// laggy 

const scanRadius = 3 * 16
const typeToScan = "corpse:corpse"
const spawnRate = 0.5
const Jumppool = ["minecraft:zombie", "minecraft:skeleton"]

PlayerEvents.tick(event => {
  let { player, player: { pos, age, block: { pos: { x, y, z } } }, level } = event
  if (age % 6000 != 0) return; // Run every 1.5 mins
  let aabb = AABB.of(x + scanRadius, y + scanRadius, z + scanRadius, x - scanRadius, y - scanRadius, z - scanRadius)
  let entities = level.getEntities(player, aabb, e => e.type == typeToScan)
  entities = entities.filter(entity => entity.pos.distanceTo(pos) <= scanRadius)
  entities.forEach(entity => {
    let rng = Math.random()
    if (rng > spawnRate) return;
    entity.kill()
    let spawnEntity = Jumppool[Math.floor(rng * Jumppool.length)]
    entity.block.createEntity(spawnEntity).spawn()
  })
})


// It spams a null hopefully this fixes it <- It did thank god!
EntityEvents.hurt(event => {
  if (event.source.actual == null) return
  let { source, source: { actual, actual: { mainHandItem, offHandItem } } } = event
  if (actual && actual.isPlayer() && source.getType() == "player") {
    if (offHandItem.id == 'alexscaves:limestone_spear') {
      if (Math.random() >= 0.75) {
        offHandItem.count--
      }
    }
    if (mainHandItem.id == 'alexscaves:limestone_spear') {
      if (Math.random() >= 0.75) {
        mainHandItem.count--
      }
    }
    if (mainHandItem.id == 'alexscaves:frostmint_spear') {
      if (Math.random() >= 0.65) {
        mainHandItem.count--
      }
    }
    if (offHandItem.id == 'alexscaves:frostmint_spear') {
      if (Math.random() >= 0.65) {
        offHandItem.count--
      }
    }
  }
}
)

//liopyu's New Join Script ment to suppliment the respawn reincarnatus script
PlayerEvents.loggedIn(event => {
  if (!event.player.stages.has('new_join')) {
    event.player.stages.add('new_join')
    event.server.runCommandSilent(`/effect give @p exsanguination:reincarnatus 40 0`)
    event.server.runCommandSilent(`/difficulty hard`)
    event.server.runCommandSilent('/gamerule reducedDebugInfo true')
  }
});

PlayerEvents.loggedIn((event) => {
  event.server.scheduleInTicks(10, () => {
    event.server.runCommandSilent('/kubejs reload client_scripts')
  })
});



// My code to fix scalinghealth hearts or vanilla? bs
// Fixes the respawn bug with the max health thing hopefully max health fix solves the relog part
PlayerEvents.respawned((event) => {
  event.server.runCommandSilent('/kubejs reload client_scripts')
  event.server.runCommandSilent('/effect give @p exsanguination:reincarnatus 30 0')
  event.server.scheduleInTicks(20, () => {
    event.server.runCommandSilent('/gamerule reducedDebugInfo true')
    event.server.runCommandSilent('/effect clear @p minecraft:mining_fatigue')
    event.server.runCommandSilent('/effect clear @p cataclysm:bone_fracture')
    event.server.runCommandSilent('/effect clear @p minecraft:weakness')
  })
  event.server.scheduleInTicks(45, () => {
    event.server.runCommandSilent('/effect clear @p exsanguination:reincarnatus')
  })
  event.server.scheduleInTicks(180, () => {
    event.server.runCommandSilent('/effect clear @p exsanguination:reincarnatus')
  })
});





// From Eazy In Kubejs discord RIP

// '#create:wrench_pickup'
BlockEvents.rightClicked(event => {
  switch (event.player.offHandItem.getId()) {
    case 'create:wrench':
      event.player.damageHeldItem('off_hand', 1)
      break;
  }
});

BlockEvents.rightClicked(event => {
  switch (event.player.mainHandItem.getId()) {
    case 'create:wrench':
      event.player.damageHeldItem('main_hand', 1)
      break;
  }
});


BlockEvents.rightClicked('minecraft:campfire', event => {
  const { player, block, server, player: { mainHandItem } } = event
  switch (event.player.mainHandItem.getId()) {
    case 'minecraft:soul_starter':
      event.item.shrink(1)
      event.server.runCommandSilent(`playsound minecraft:block.fire.extinguish block @a ${block.x} ${block.y} ${block.z} 1 1`)
      event.block.set('minecraft:soul_campfire', block.properties);
      player.swing();
      event.cancel();
      break;
  }
});

BlockEvents.rightClicked('luminous_nether:carved_pale_melon', event => {
  const { player, block, server, player: { mainHandItem } } = event
  switch (event.player.mainHandItem.getId()) {
    case 'biomemakeover:ectoplasm':
      event.item.shrink(1)
      event.server.runCommandSilent(`playsound luminous_nether:crimsonexplosion block @a ${block.x} ${block.y} ${block.z} 1 1`)
      event.block.set('luminous_nether:pale_melon');
      player.swing();
      event.cancel();
      break;
  }
});

BlockEvents.rightClicked('luminous_nether:pale_melon', event => {
  const { player, block, server, player: { mainHandItem } } = event
  if (event.hand != "main_hand") return
  switch (event.player.mainHandItem.getId()) {
    case 'minecraft:shears':
      event.player.damageHeldItem('main_hand', 1)
      event.block.popItemFromFace('2x luminous_nether:pale_melon_slice', event.facing)
      player.swing();
      break;
  }
});


BlockEvents.rightClicked('minecraft:campfire', event => {
  const { player, block, server, player: { mainHandItem } } = event
  switch (event.player.mainHandItem.getId()) {
    case 'netherexp:ancient_wax':
      event.item.shrink(1)
      event.server.runCommandSilent(`playsound minecraft:block.fire.extinguish block @a ${block.x} ${block.y} ${block.z} 1 1`)
      event.block.set('netherexp:ancient_campfire', block.properties);
      player.swing();
      event.cancel();
      break;
  }
});

BlockEvents.rightClicked('minecraft:soul_campfire', event => {
  const { player, block, server, player: { mainHandItem } } = event
  switch (event.player.mainHandItem.getId()) {
    case 'create:wrench':
      event.player.damageHeldItem('main_hand', 1)
      event.server.runCommandSilent(`playsound minecraft:block.fire.extinguish block @a ${block.x} ${block.y} ${block.z} 1 1`)
      event.block.popItem("luminous_nether:ghostly_essense");
      event.block.set('minecraft:campfire', block.properties);
      player.swing();
      event.cancel();
      break;
  }
});


BlockEvents.rightClicked('minecraft:fletching_table', event => {
  const { player, block, server, player: { mainHandItem } } = event
  if (event.hand != "main_hand") return
  switch (event.player.mainHandItem.getId()) {
    case 'minecraft:feather':
      event.item.shrink(1)
      event.block.popItemFromFace('minecraft:arrow_fletching', 'up')
      player.swing();
      event.cancel();
      break;
  }
});


BlockEvents.rightClicked('immersive_weathering:earthen_clay', 'immersive_weathering:silt', 'immersive_weathering:loam', 'farmersdelight:rich_soil', 'biomemakeover:peat', event => {
  switch (event.player.mainHandItem.getId()) {
    case 'minecraft:wooden_hoe':
    case 'minecraft:stone_hoe':
    case 'minecraft:copper_hoe':
      event.server.runCommandSilent(`playsound minecraft:block.anvil.place block @a ${block.x} ${block.y} ${block.z} 1 1`)
      event.player.damageHeldItem('main_hand', 4)
      event.cancel();
      break;
  }
});



ItemEvents.rightClicked('jeg:rifle_ammo', event => {
  if (event.hand == "MAIN_HAND") {
    event.cancel();
    //event.player.tell('main hand')
  }
  else if (event.hand == "OFF_HAND") {
    event.cancel();
    //event.player.tell('off hand')
  }
});

// Den, Kubejs discord
ItemEvents.rightClicked('spelunkery:magnetic_compass', event => {
  if (event.hand == "MAIN_HAND") {
    event.player.damageHeldItem("main_hand", 1)
    //event.player.tell('main hand')
  }
  else if (event.hand == "OFF_HAND") {
    event.player.damageHeldItem("off_hand", 1)
    //event.player.tell('off hand')
  }
});


ItemEvents.rightClicked('alexsmobs:spectral_dagger', event => {
  if (event.hand == "MAIN_HAND") {
    event.player.addItemCooldown(event.item, 850)
    event.server.runCommandSilent('/effect give @p minecraft:instant_damage 2 0')
    event.server.runCommandSilent('/effect give @p alexsmobsinteraction:riftform 10 0')
    event.player.damageHeldItem("main_hand", 100)
  }
});


ItemEvents.rightClicked('spelunkery:depth_gauge', event => {
  if (event.hand == "MAIN_HAND") {
    event.player.damageHeldItem("main_hand", 1)
    //event.player.tell('main hand')
  }
  else if (event.hand == "OFF_HAND") {
    event.player.damageHeldItem("off_hand", 1)
    //event.player.tell('off hand')
  }
});


ItemEvents.rightClicked('spelunkery:echo_fork', event => {
  if (event.hand == "MAIN_HAND") {
    event.player.damageHeldItem("main_hand", 1)
    //event.player.tell('main hand')
  }
  else if (event.hand == "OFF_HAND") {
    event.player.damageHeldItem("off_hand", 1)
    //event.player.tell('off hand')
  }
});

ItemEvents.rightClicked('spelunkery:tuning_fork', event => {
  if (event.hand == "MAIN_HAND") {
    event.player.damageHeldItem("main_hand", 1)
    //event.player.tell('main hand')
  }
  else if (event.hand == "OFF_HAND") {
    event.player.damageHeldItem("off_hand", 1)
    //event.player.tell('off hand')
  }
});

// Not Working In Surival
ItemEvents.rightClicked('scalinghealth:power_crystal_shard', event => {
  const { player, server, hand } = event
  if (hand == "MAIN_HAND") {
    //event.player.addItemCooldown(event.item, 60000)
    // Idk If This works
    server.runCommand(`/execute as ${player.username} run rootoffear spawnday getrelative`)
    player.damageHeldItem("main_hand", 1)
  }

  else if (hand == "OFF_HAND") {
    //event.player.addItemCooldown(event.item, 60000)
    // Idk If This works
    server.runCommand(`/execute as ${player.username} run rootoffear spawnday getrelative`)
    player.damageHeldItem("off_hand", 1)
  }
});

let chests_and_such = [
  "minecraft:chest",
  "minecraft:ender_chest",
  "minecraft:trapped_chest",
  "quark:jungle_chest",
  "quark:birch_chest",
  "quark:spruce_chest",
  "quark:blossom_chest",
  "quark:ancient_chest",
  "quark:dark_oak_chest",
  "quark:warped_chest",
  "quark:mangrove_chest",
  "quark:bamboo_chest",
  "quark:cherry_chest",
  "quark:oak_trapped_chest",
  "quark:blossom_trapped_chest",
  "quark:azalea_trapped_chest",
  "quark:prismarine_chest",
  "quark:purpur_chest",
  "quark:nether_brick_chest",
  "quark:spruce_trapped_chest",
  "quark:birch_trapped_chest",
  "quark:acacia_trapped_chest",
  "quark:dark_oak_trapped_chest",
  "quark:crimson_trapped_chest",
  "quark:warped_trapped_chest",
  "quark:cherry_trapped_chest",
  "quark:bamboo_trapped_chest",
  "quark:mangrove_trapped_chest",
  "quark:nether_brick_trapped_chest",
  "quark:purpur_trapped_chest",
  "quark:prismarine_trapped_chest",
  "netherexp:brazier_chest",
  "outer_end:azure_chest",
  "outer_end:azure_trapped_chest",
  "quark:azalea_chest",
  "quark:acacia_chest",
  "minecraft:barrel",
  "alexscaves:metal_barrel",
  "alexscaves:rusty_barrel",
  "nethervinery:crimson_barrel",
  "nethervinery:warped_barrel",
  "vinery:fermentation_barrel",
  "vinery:dark_cherry_barrel",
  "minecraft:crafting_table",
  "quark:crafter",
  "sculkhorde:infested_crafting_table_block",
  "trials:crafter",
  "minecraft:hopper"
]

chests_and_such.forEach(block => {
  BlockEvents.rightClicked(block, event => {
  const { player, block, server } = event
  let dx = player.x - block.x
  let dy = player.y - block.y
  let dz = player.z - block.z
  let reach = player.getEntityReach()
  let distance = Math.sqrt(dx * dx + dy * dy + dz * dz)
  let innereach = reach * Math.max(0, 1.0 - 0.19)
  let multiplier = distance / innereach
  if (multiplier > 0.7){
    multiplier = 0.7
  }
  let chance = Math.random() < multiplier
  if (player.creative) return
  if (reach > 3 && chance) {
    server.runCommandSilent(`playsound minecraft:block.chest.locked block @a ${block.x} ${block.y} ${block.z} 1 1`)
    event.cancel()
  } /* else {
    player.statusMessage = Text.of(multiplier)
  } */
})
})


let bows_and_such = [
  "spartanweaponry:wooden_longbow",
  "spartanweaponry:wooden_heavy_crossbow",
  "spartanweaponry:golden_heavy_crossbow",
  "spartanweaponry:golden_longbow",
  "spartanweaponry:copper_heavy_crossbow",
  "spartanweaponry:copper_longbow",
  "spartanweaponry:silver_heavy_crossbow",
  "spartanweaponry:silver_longbow",
  "spartanweaponry:iron_heavy_crossbow",
  "spartanweaponry:iron_longbow",
  "spartanweaponry:bronze_heavy_crossbow",
  "spartanweaponry:bronze_longbow",
  "spartanweaponry:steel_heavy_crossbow",
  "spartanweaponry:steel_longbow",
  "spartanweaponry:diamond_heavy_crossbow",
  "spartanweaponry:diamond_longbow",
  "spartandeeperdarker:resonarium_heavy_crossbow",
  "spartandeeperdarker:resonarium_longbow",
  "spartanweaponry:netherite_heavy_crossbow",
  "spartanweaponry:netherite_longbow",
  "spartanweaponry:electrum_heavy_crossbow",
  "spartanweaponry:electrum_longbow",
  "cataclysm:cursed_bow",
  "spartandeeperdarker:warden_longbow",
  "spartandeeperdarker:warden_heavy_crossbow",
  "alexscaves:dreadbow",
  "minecraft:bow",
  "minecraft:crossbow"
]



// Bows Can't Be Fired in offhand HAHA exept......
bows_and_such.forEach(Items => {
  ItemEvents.rightClicked(Items, event => {
    const { player, server} = event
    try {
      if (player.offHandItem.getId() != Items || player.hasEffect("lostcities:courage")) return
    } catch (err) {
      console.error("Right Click Error: " + err);
    }
    server.scheduleInTicks(2, () => {
    server.runCommandSilent(`playsound minecraft:item.armor.equip_leather block @a ${player.x} ${player.y} ${player.z} 1 1`)
    });
    event.cancel();
  })
})
