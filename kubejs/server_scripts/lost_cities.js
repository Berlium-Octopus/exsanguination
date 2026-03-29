// IF THE PLAYER SUCSESSFULY ESCAPES THEN REMOVE IT LIKE THE DEATH CODE
// REPLACE THE PERSISTENT DATA GET IN THE BED SCIPT WITH CHANGE

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


// From Rad I Think?
global.portalEvent = (/**@type {Internal.EntityTravelToDimensionEvent} */event) => {
  const { entity, dimension } = event
  let server = entity.server
  if (!entity.player) return;
  if (dimension == "lostcities:lostcity") {
    entity.removeAllEffects()
    entity.potionEffects.add("lostcities:unlisted", 6600, 0, false, false)
    entity.potionEffects.add("doom_and_gloom:fog", -1, 0, false, false)
    entity.statusMessage = Text.of("Survive Until Being Relisted")
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
  const entity = /** @type {any} */ (event.entity)
  let server = entity.server
  // 2% Chance Of Being Teleported Or When Dreaming
  if (entity.level.dimension != 'minecraft:overworld') return
  if (Math.random() > 0.98 || entity.potionEffects.isActive("lostcities:dreaming")) {
    const { x, z } = entity.onPos
    server.scheduleInTicks(1, () => {
      entity.potionEffects.add('minecraft:resistance', 500, 4, false, false)
      entity.potionEffects.add("minecraft:slow_falling", 440, 0, false, false)
    })
    server.scheduleInTicks(20, () => {
      entity.teleportTo("lostcities:lostcity", x, 160, z, entity.yaw, entity.pitch)

    })
  }
}

// If Dead Or Dying TP and not dreaming them to the cities :)
EntityEvents.death("minecraft:player", event => {
  const { player, server } = event
  const { x, z } = player.onPos
  if (player.level.dimension == "lostcities:lostcity") return
  if (Math.random() < 0.98 || !entity.potionEffects.isActive("lostcities:dreaming")) return
  server.scheduleInTicks(1, () => {
    player.potionEffects.add('minecraft:resistance', 500, 4, false, false)
    player.potionEffects.add('exsanguination:reincarnatus', 40, 0, false, false)
    player.potionEffects.add("minecraft:slow_falling", 440, 0, false, false)
  })
  server.scheduleInTicks(20, () => {
    player.teleportTo("lostcities:lostcity", x, 160, z, player.yaw, player.pitch)

  })
  event.cancel();
})


// FalAut + EAZY's script (Modified)
EntityEvents.death("minecraft:player", event => {
  const { player, server } = event;
  let respawnLevel = server.getLevel(player.getRespawnDimension().location());
  let respawnPosition = player.getRespawnPosition();
  let bed = respawnLevel.getBlock(respawnPosition);
  if (player.level.dimension != "lostcities:lostcity") return
  // If The Player Doesn't Have A Spawn Point/Bed + Gets Yeeted To 0.0
  if (!respawnPosition || !respawnLevel || !bed) {
    player.removeAllEffects();
    player.potionEffects.add("alexsmobsinteraction:skreeching", 3000, 1, false, true)
    player.potionEffects.add("sculkhorde:sculk_infected", 1500, 1, false, true)
    player.potionEffects.add("minecraft:slow_falling", 700, 1, false, true)
    player.potionEffects.add("toughasnails:climate_clemency", 300, 1, false, true)
    player.potionEffects.add("minecraft:fire_resistance", 300, 1, false, true)
    player.statusMessage = Text.of("You had a bad dream")
    player.extinguish()
    player.teleportTo("minecraft:overworld", 0, 120, 0, [], 0.0, 0.0)
  } else {
    // If Player Dies And Has A Spawn Point
    player.removeAllEffects();
    player.potionEffects.add("alexsmobsinteraction:skreeching", 3000, 1, false, true)
    player.potionEffects.add("sculkhorde:sculk_infected", 1500, 1, false, true)
    player.potionEffects.add("toughasnails:climate_clemency", 300, 1, false, true)
    player.potionEffects.add("minecraft:fire_resistance", 300, 1, false, true)
    player.statusMessage = Text.of("You had a bad dream")
    player.extinguish()
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
});
