function LightBurn2(mob) {
  let lightlevel = mob.block.getBlockLight()
  if (lightlevel > 8) {
    return true;
  }
  return false;
}


function shootTowardsTarget(entity, target, shooter, velocity) {
  let dx = target.getX() - shooter.getX();
  let dy = target.getY() - shooter.getY();
  let dz = target.getZ() - shooter.getZ();
  let distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
  let vx = (dx / distance) * velocity;
  let vy = (dy / distance) * velocity;
  let vz = (dz / distance) * velocity;
  vy += 0.3 / distance;
  entity.addMotion(vx, vy, vz);
}

let GrabAttackGoal = Java.loadClass("com.alexander.rootoffear.ai.goals.wilted.WiltedGrabAttackGoal")
let GroundGrab = Java.loadClass("com.alexander.rootoffear.ai.goals.wilted.WiltedGroundGrabGoal")
let StormGoal = Java.loadClass("com.alexander.rootoffear.ai.goals.wilted.WiltedLeafStormGoal")
let LeapGoal = Java.loadClass("com.alexander.rootoffear.ai.goals.wilted.WiltedLeapToMoveTargetGoal")
EntityJSEvents.addGoalSelectors("rootoffear:wiltling_hand", entity => {
  entity.removeGoal(GrabAttackGoal)
  entity.removeGoal(GroundGrab)
  entity.removeGoal(StormGoal)
  entity.removeGoal(LeapGoal)
  entity.meleeAttack(1, 1.1, false)
});


EntityJSEvents.addGoals("rootoffear:wiltling", event => {
  event.nearestAttackableTarget(1, Player, 10, true, false, null)
  event.hurtByTarget(1, [], true, [])
})

/**
* @param {Internal.PathfinderMob} mob 
* @returns 
*/

function Lightcheck(mob) {
  let blockpos = BlockPos.containing(mob.getX(), mob.getBlockY(), mob.getZ());
  for (let i = 0; i < 11; i++) {
    let random = Math.random()
    let mobPos = mob.block.pos
    let x = mobPos.x + (random * 10 - 5)
    let y = mobPos.y + (random * 5 - 2.5)
    let z = mobPos.z + (random * 10 - 5)
    let blockpos1 = blockpos.offset(x, y, z)
    let lightlevel = mob.level.getLightEmission(blockpos1)
    if (lightlevel < 8) {
      // So toFixed Can Round Numbers, Interesting
      return new BlockPos(x.toFixed(0), y.toFixed(0), z.toFixed(0))
    }
  }
  return null
}
/**
* @param {Internal.PathfinderMob} mob 
* @returns 
*/
// for some ungodly reason the mobPos is busted here
function Lightcheck2(mob) {
  let blockpos = mob.blockPosition()
  let random = mob.getRandom()
  for (let i = 0; i < 10; i++) {
    let blockpos1 = blockpos.offset(
      random.nextInt(10) - 5,
      random.nextInt(6) - 3,
      random.nextInt(10) - 5
    )
    if (!mob.level.canSeeSky(blockpos1)) {
      return blockpos1
    }
  }
  return null
}

/**
* @param {Internal.PathfinderMob} mob 
* @returns 
*/

global.fleeLights = mob => {
  if (mob.age % 10 !== 0) return
  let randomPos = Lightcheck(mob);
  if (randomPos !== null) {
    mob.navigation.moveTo(randomPos.x, randomPos.y, randomPos.z, 1.1);
  }
};

global.custumFleeSun = mob => {
  if (mob.age % 20 !== 0) return
  let randomPos = Lightcheck2(mob);
  if (randomPos) {
    mob.navigation.moveTo(randomPos.x, randomPos.y, randomPos.z, 1.1);
  }
};

EntityJSEvents.addGoalSelectors("rootoffear:wiltling", entity => {
  entity.meleeAttack(2, 1.1, false)
  // Liopyu as Usual
  entity.customGoal(
    'flee_lights', // 1
    1, // 2
    /**
     * 
     * @param {Internal.PathfinderMob} mob 
     * @returns 
     */
    mob => (LightBurn2(mob)) ,
    mob => (!mob.navigation.isDone), //4
    true, //5
    mob => { }, //6
    mob => { }, //7
    true, // 8
        /**@type {Internal.PathfinderMob}**/mob => global.fleeLights(mob) // 9
  )
  entity.customGoal(
    'custom_flee_sun', // 1
    0, // 2
    /**
     * 
     * @param {Internal.PathfinderMob} mob 
     * @returns 
     */
    mob => (mob.level.isDay() && (mob.level.canSeeSky(mob.blockPosition()))),
    mob => (!mob.navigation.isDone), //4
    false, //5
    mob => { }, //6
    mob => { }, //7
    true, // 8
        /**@type {Internal.PathfinderMob}**/mob => global.custumFleeSun(mob) // 9
  )

  entity.customGoal(
    'throw_hand', // 1
    3, // 2
    mob => mob.target != null && mob.getSyncedData("hasHand") == true, // 3
    mob => true, // 4
    true,
    mob => { }, //6
    mob => { }, //7
    true, // 8
        /**@type {Internal.PathfinderMob}**/mob => global.WiltedThrow(mob) // 9
  )
})




/**
 * 
 * @param {Internal.PathfinderMob} mob 
 * @returns 
 */
global.WiltedThrow = mob => {
  try {
    let target = mob.target
    if (mob.target == null) return
    if (!mob.getSyncedData("hasHand")) return
    if (target.distanceToEntity(mob) < 40 && target.distanceToEntity(mob) > 5 && mob.hasLineOfSight(target)) {
      // YUP
      mob.navigation.moveTo(target.x, target.y, target.z, 2.0)
      mob.lookAt("eyes", new Vec3d(target.x, target.y, target.z))
      // if (mob.age % 200 != 0) return
      let velocity = 1;
      let/**@type {Internal.ProjectileEntityJS} */ bullet = mob.block.createEntity("rootoffear:wiltling_hand_projectile")
      bullet.setOwner(mob)
      bullet.teleportTo(mob.x, mob.y + 1.9, mob.z)
      shootTowardsTarget(bullet, target, mob, velocity);
      bullet.spawn()
      mob.triggerAnimation('trigger_attacks', "ranged_attack")
      mob.setSyncedData("hasHand", false)
    }
  } catch (error) {
    console.log(error)
  }
}

// My first "complex" funtion yippie
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
    if (spawnDay == null) {
      player.tell(`§7I Feel Nothing`)
    }
    player.addItemCooldown(item, 10000)
    player.swing(hand, true)
    player.damageHeldItem(hand, 1)
  }
})

let timeIsTicking = { 0: 0.85, 1: 0.90, 2: 0.95, 3: 0.99 }

EntityEvents.spawned("minecraft:skeleton", event => {
  const { entity, level } = event
  // Maybe Work
  let blockpos = BlockPos.containing(entity.getX(), entity.getBlockY(), entity.getZ())
  if (!level.canSeeSky(blockpos)) return
  let spawnDay = nextSpawnDay(level)
  if (spawnDay == null || spawnDay < 0 || spawnDay > 3) return
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
  let blockpos = BlockPos.containing(entity.getX(), entity.getBlockY(), entity.getZ())
  if (entity.isBaby()) return
  if (!level.canSeeSky(blockpos)) return
  let spawnDay = nextSpawnDay(level)
  if (spawnDay == null || spawnDay < 0 || spawnDay > 3) return
  // The spawnDay is 0: i think thats prob how objects ( {} ) work 
  let threshold = timeIsTicking[spawnDay]
  if (Math.random() > threshold) {
    const wiltling = entity.block.createEntity("rootoffear:wiltling")
    wiltling.spawn()
  }
})


/*
EntityEvents.hurt(event => {
  const { source } = event
  let attacker = source.actual
  if (!attacker) return
  if (attacker.type !== "rootoffear:wiltling_hand") return

  attacker.getAnimatableEntity().triggerAnimation('hand_hurt', 'ouchimama2')
  console.log("ATTACKER: ",attacker)
  console.log("LEVEL: ",event.level)
  console.log("VICTIM: ",event.entity)
})
*/