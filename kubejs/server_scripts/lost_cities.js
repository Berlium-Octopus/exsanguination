// IF THE PLAYER SUCSESSFULY ESCAPES THEN REMOVE IT LIKE THE DEATH CODE
// REPLACE THE PERSISTENT DATA GET IN THE BED SCIPT WITH CHANGE
// I Think i just might make a function out of all these things
/* Resue This On Other Dreams
          player.persistentData.put("inventoryData", player.nbt.get("Inventory"))
          let tag = player.curiosInventory.saveInventory(true)
          player.persistentData.put("curiosData", tag)
          server.scheduleInTicks(40, () => {
          player.inventory.load(player.persistentData.get("inventoryData"))
          let tag = player.persistentData.getList("curiosData", 10)
          player.curiosInventory.loadInventory(tag)
})
*/
// PLEASE DONT BLOW UP PLEASE DONT BLOW UP <- Oh wow the functions work yippie
function GoodRelist(entity){
  entity.removeAllEffects()
  entity.extinguish()
  entity.potionEffects.add('exsanguination:reincarnatus', 500, 0, false, false)
  entity.potionEffects.add("minecraft:slow_falling", 500, 0, false, false)
  entity.potionEffects.add("toughasnails:climate_clemency", 500, 0, false, true)
}

function Relist(entity){
  entity.removeAllEffects()
  entity.potionEffects.add('minecraft:resistance', 500, 4, false, false)
  entity.potionEffects.add("minecraft:slow_falling", 500, 0, false, false)
  entity.potionEffects.add("toughasnails:climate_clemency", 500, 0, false, true)
  entity.potionEffects.add("lostcities:unlisted", 6600, 0, false, false)
  entity.potionEffects.add("doom_and_gloom:fog", -1, 0, false, false)
  entity.statusMessage = Text.of("Survive Until Being Relisted")
}

function Unlist(entity){
  entity.potionEffects.add("alexsmobsinteraction:skreeching", 3000, 1, false, true)
  entity.potionEffects.add("sculkhorde:sculk_infected", 1500, 1, false, true)
  entity.potionEffects.add("minecraft:slow_falling", 700, 1, false, true)
  entity.potionEffects.add("toughasnails:climate_clemency", 300, 0, false, true)
  entity.potionEffects.add("minecraft:resistance", 300, 3, false, true)
  entity.statusMessage = Text.of("You had a bad dream")
}
// From Rad I Think?
global.portalEvent = (/**@type {Internal.EntityTravelToDimensionEvent} */event) => {
  const { entity, dimension } = event
  let server = entity.server
  if (!entity.isPlayer()) return;
  if (dimension == "lostcities:lostcity") {
    server.scheduleInTicks(1, () => {
      Relist(entity)
    })
  } else {
    entity.statusMessage = Text.of("Now Entering")
    // server.scheduleInTicks(20, () => {          
    // entity.persistentData.remove('inventoryData')
    // entity.persistentData.remove('curiosData')
    // })
  }
}

global.nightmareEvents = (/**@type {Internal.PlayerSleepInBedEvent} */event) => {
  /** @type {Internal.Player} */
  let entity = /** @type {any} */ (event.entity)
  let server = entity.server
  // 2% Chance Of Being Teleported Or When Dreaming
  if (entity.level.dimension != 'minecraft:overworld') return
  if (Math.random() > 0.995 || entity.potionEffects.isActive("lostcities:dreaming")) {
    let { x, z } = entity.onPos
    server.scheduleInTicks(20, () => {
      entity.teleportTo("lostcities:lostcity", x, 160, z, entity.yaw, entity.pitch)

    })
  }
}

EntityEvents.death("minecraft:player", event => {
  let entity = /** @type {any} */ (event.entity)
  let server = event.server
  let { x, z } = entity.onPos
  if (entity.level.dimension === "lostcities:lostcity") return
  if (Math.random() > 0.99) {
    entity.setHealth(20)
    entity.removeAllEffects()
    entity.extinguish()
    server.scheduleInTicks(1, () => {
      entity.teleportTo("lostcities:lostcity", x, 160, z, entity.yaw, entity.pitch)

    })
    event.cancel();
  }
})

// FalAut + EAZY's script (Modified)
EntityEvents.death("minecraft:player", event => {
  const { player, server } = event;
  let respawnLevel = server.getLevel(player.getRespawnDimension().location());
  let respawnPosition = player.getRespawnPosition();
  let bed = respawnLevel.getBlock(respawnPosition);
  // Hopefully This works
  let spawnPos = player.level.getSharedSpawnPos()

  if (player.level.dimension != "lostcities:lostcity") return
  // If The Player Doesn't Have A Spawn Point/Bed + Gets Yeeted To 0.0
  if (!respawnPosition || !respawnLevel || !bed) {
    player.setHealth(12)
    player.removeAllEffects()
    player.extinguish()
    server.scheduleInTicks(4, () => {
      Unlist(player)
    })
    player.teleportTo("minecraft:overworld", spawnPos.x, spawnPos.y + 2, spawnPos.z, [], 0.0)
  } else {
    // If Player Dies And Has A Spawn Point
    player.setHealth(12)
    player.removeAllEffects();
    server.scheduleInTicks(4, () => {
      Unlist(player)
      player.extinguish()
    })
    player.teleportTo(respawnLevel, respawnPosition.x, respawnPosition.y, respawnPosition.z, [], 0.0, 0.0)

  }
  event.cancel();
})

ItemEvents.rightClicked(event => {
  const { item, player, server } = event
  if (player.level.dimension != "lostcities:lostcity") return
  if (item.id == "farmersdelight:milk_bottle" || item.id == "farmersdelight:hot_cocoa" || item.id == "spelunkery:portal_fluid_bottle") {
    server.scheduleInTicks(20, () => {
      item.shrink(1);
      player.give("toughasnails:dirty_water_bottle")
    })
    event.cancel();
  }
  if (item.id == "minecraft:milk_bucket") {
    server.scheduleInTicks(20, () => {
      item.shrink(1);
      player.give("minecraft:water_bucket")
    })
    event.cancel();
  }
  if (item.id == "alexsmobs:dimensional_carver" || item.id == "minecraft:compass") {
    event.cancel();
  }

})

BlockEvents.rightClicked("minecraft:lodestone", event => {
  const { block, item, player } = event;
  let $ExplosionInteraction = Java.loadClass('net.minecraft.world.level.Level$ExplosionInteraction');
  if (player.level.dimension != "lostcities:lostcity") return
  // if (hand != 'MAIN_HAND') return;
  if (item.id == 'minecraft:compass' || item.id == 'minecraft:air') {
    player.swing();
    block.set('minecraft:air', event.block.properties);
    block.createExplosion().explosionMode($ExplosionInteraction.TNT).strength(8).explode()
    event.cancel();
  }
})
let bedsandsuch = [
"minecraft:pink_bed",
"minecraft:magenta_bed",
"minecraft:purple_bed",
"minecraft:blue_bed",
"minecraft:orange_bed",
"minecraft:yellow_bed",
"minecraft:lime_bed",
"minecraft:green_bed",
"minecraft:cyan_bed",
"minecraft:light_blue_bed",
"minecraft:red_bed",
"minecraft:brown_bed",
"minecraft:black_bed",
"minecraft:gray_bed",
"minecraft:light_gray_bed",
"minecraft:white_bed"
]

let TEXT = [
  "I'm not tired yet",
  "Maybe a hammock",
  "I only can sleep at night",
  "Not sleepy!",
]
let RandomNames = names => names[Math.floor(names.length * Math.random())]

bedsandsuch.forEach(block => {
  BlockEvents.rightClicked(block, event => {
  const { player } = event;
  if (player.level.dimension != "minecraft:overworld") return
  if (player.level.isDay()){
    player.statusMessage = Text.of(RandomNames(TEXT))
    event.cancel()
  }
})
})

let TEXT2 = [
  "I'm not tired yet",
  "Maybe a bed",
  "I only can sleep at daytime",
  "Not sleepy!",
]
let hammockandsuch = [
"sleep_tight:hammock_white",
"sleep_tight:hammock_gray",
"sleep_tight:hammock_black",
"sleep_tight:hammock_brown",
"sleep_tight:hammock_red",
"sleep_tight:hammock_cyan",
"sleep_tight:hammock_green",
"sleep_tight:hammock_lime",
"sleep_tight:hammock_yellow",
"sleep_tight:hammock_orange",
"sleep_tight:hammock_blue",
"sleep_tight:hammock_purple",
"sleep_tight:hammock_magenta",
"sleep_tight:hammock_pink",
"sleep_tight:hammock_light_blue",
"sleep_tight:hammock_light_gray"
]

hammockandsuch.forEach(block => {
  BlockEvents.rightClicked(block, event => {
    const { player } = event;
    if (player.level.dimension != "minecraft:overworld") return
    if (player.level.isNight()) {
      player.statusMessage = Text.of(RandomNames(TEXT2))
      event.cancel()
    }
  })
})


/** @param {Internal.MobEffectEvent$Expired} event */
global.travelOutCity = event => {
  const { effectInstance, entity } = event
  if (!entity.isPlayer()) return
  if (!entity.isAlive()) return
  let respawnLevel = entity.server.getLevel(entity.getRespawnDimension().location());
  let respawnPosition = entity.getRespawnPosition();
  let bed = respawnLevel.getBlock(respawnPosition);
  let spawnPos = entity.level.getSharedSpawnPos()
  // HUH THIS WORKS?????
  if (effectInstance.effect.descriptionId !== "effect.lostcities.unlisted") return
      if (!respawnPosition || !respawnLevel || !bed) {
        entity.server.scheduleInTicks(4, () => {
          GoodRelist(entity)
        })
        entity.teleportTo("minecraft:overworld", spawnPos.x, spawnPos.y + 2, spawnPos.z, [], 0.0)
      } else {
        entity.server.scheduleInTicks(4, () => {
          GoodRelist(entity)
        })
        entity.teleportTo(respawnLevel, respawnPosition.x, respawnPosition.y, respawnPosition.z, [], 0.0, 0.0)
      }
}


