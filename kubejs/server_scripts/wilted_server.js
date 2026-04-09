
EntityJSEvents.addGoals("rootoffear:wiltling", event => {
  event.nearestAttackableTarget(1, Player, 10, true, false, null)
  event.hurtByTarget(1, [], true, [])
})

EntityJSEvents.addGoalSelectors("rootoffear:wiltling", entity => {
  entity.meleeAttack(1, 1.1, false)
  entity.waterAvoidingRandomStroll(4, 1, 0.3)
  entity.fleeSun(3, 1)
  entity.randomLookAround(5)
  // Custum Run Away From Light
  // Custom Throw Arm With Cooldown
  // Weeping Angel Behavior when not hurt
});


// Putting this out to use it in other scripts
function nextSpawnDay(level) {
  const $RoFLevelCapabilityProvider = Java.loadClass("com.alexander.rootoffear.capabilities.RoFLevelCapabilityProvider")
  const CAP = $RoFLevelCapabilityProvider.CAP
  const hereIsJhonny = level.getCapability(CAP)
  if (!hereIsJhonny.isPresent()) return
  const wiltedDay = hereIsJhonny.orElse(null)
  return wiltedDay.getNextSpawnDay()
}


ItemEvents.rightClicked('scalinghealth:power_crystal_shard', event => {
  const { player, hand, level, item } = event
  if (hand == "MAIN_HAND" || hand == "OFF_HAND") {
    let spawnDay = nextSpawnDay(level)
    if (spawnDay == 0) {
      player.tell(`§7It's Here ${spawnDay}`)
    } else if (spawnDay == 1) {
      player.tell(`§7I have ${spawnDay} day left`)
    } else {
      player.tell(`§7I feel as I have ${spawnDay} days left`)
    }
    player.addItemCooldown(item, 1000)
    player.swing(hand, true)
    player.damageHeldItem(hand, 1)
  }
})

let timeIsTicking = { 0:0.85 ,1: 0.90, 2: 0.95, 3: 0.99 }

EntityEvents.spawned("minecraft:skeleton", event => {
  const { entity, level } = event
  let spawnDay = nextSpawnDay(level)
  if (spawnDay == null || spawnDay < 1 || spawnDay > 3) return
  // The spawnDay is 0: i think thats prob how objects ( {} ) work 
  let threshold = timeIsTicking[spawnDay]
  if (Math.random() > threshold) {
    const wiltling = entity.block.createEntity("rootoffear:wiltling")
    wiltling.spawn()
    event.cancel()
  }
})

EntityEvents.death("minecraft:zombie", event => {
  const { entity, level } = event
  let spawnDay = nextSpawnDay(level)
  if (spawnDay == null || spawnDay < 1 || spawnDay > 3) return
  // The spawnDay is 0: i think thats prob how objects ( {} ) work 
  let threshold = timeIsTicking[spawnDay]
  if (Math.random() > threshold) {
    const wiltling = entity.block.createEntity("rootoffear:wiltling")
    wiltling.spawn()
  }
})

