let Player = Java.loadClass("net.minecraft.world.entity.player.Player")
let Cat = Java.loadClass("net.minecraft.world.entity.animal.Cat")
let Cat2 = Java.loadClass("net.minecraft.world.entity.animal.CatVariant")
let Ocelot = Java.loadClass("net.minecraft.world.entity.animal.Ocelot")
let Raycat = Java.loadClass("com.github.alexmodguy.alexscaves.server.entity.living.RaycatEntity")
let Chicken = Java.loadClass("net.minecraft.world.entity.animal.Chicken")
let COW = Java.loadClass("net.minecraft.world.entity.animal.Cow")
let Sheep = Java.loadClass("net.minecraft.world.entity.animal.Sheep")

/*
EntityJSEvents.addGoals("lostcities:escapee", event => {
    let mob = event.entity
    let followRange = mob.getAttribute("minecraft:generic.follow_range").value
    event.nearestAttackableTarget(0, Player, 3, true, false, mob => true, mob.boundingBox.inflate(followRange, 25, followRange))
    event.nearestAttackableTarget(3, Cat, 3, true, false, mob => true, mob.boundingBox.inflate(followRange, 25, followRange))
    event.nearestAttackableTarget(4, Cat2, 3, true, false, mob => true, mob.boundingBox.inflate(followRange, 25, followRange))
    event.nearestAttackableTarget(4, Ocelot, 3, true, false, mob => true, mob.boundingBox.inflate(followRange, 25, followRange))
    event.nearestAttackableTarget(5, Raycat, 3, true, false, mob => true, mob.boundingBox.inflate(followRange, 25, followRange))
    event.hurtByTarget(1, [], true, [])
})
    */

EntityJSEvents.addGoals("lostcities:escapee", event => {
  event.nearestAttackableTarget(1, Player, 10, true, false, null)
  event.nearestAttackableTarget(2, Cat, 80, true, false, null)
  event.nearestAttackableTarget(3, Cat2, 80, true, false, null)
  event.nearestAttackableTarget(4, Ocelot, 80, true, false, null)
  event.nearestAttackableTarget(5, Raycat, 80, true, false , null)
  event.hurtByTarget(1, [], true, [])
})

let flints_steel_variant = [
"oreganized:flint_and_pewter",
"minecraft:flint_and_steel"
]
// Play Sound
for (let lighter of flints_steel_variant){
  ItemEvents.rightClicked(lighter, event=>{
    try {
      let {target:{entity}, player, level, hand} = event
      if (hand != "main_hand") return
      if (!entity) return
      if (entity.getType() != "lostcities:escapee") return
      if (entity.getSyncedData("powered")) return
      let sources = entity.damageSources()
      entity.playSound("minecraft:entity.lightning_bolt.impact");
      entity.attack(sources.lightningBolt(), 8) 
      entity.setSyncedData("powered", true)
      entity.potionEffects.add("alexscaves:stunned", 100, 0, false, true)
      level.spawnParticles('minecraft:angry_villager', true, entity.x, entity.y, entity.z, 1, 2, 3, 3, 20);
      entity.playSound("minecraft:item.flintandsteel.use");
      entity.playSound("minecraft:entity.creeper.primed");
      player.swing();
      player.addItemCooldown(event.item, 200)
      player.damageHeldItem("main_hand", 2)
} catch (error) {
  console.log(error)
}
})
}


EntityEvents.spawned(event => {
  const entity = event.entity
  if (entity.type == 'lostcities:escapee') {
    if (Math.random() > 0.8) {
      entity.potionEffects.add("farmersdelight:nourishment", 1000, 0, true, false)
    }
  }
})


EntityJSEvents.addGoalSelectors("lostcities:escapee", e => {   
    e.meleeAttack(1, 1.1, false)
    e.randomStroll(3, 1, 30, true)
    e.leapAtTarget(3, 0.2)
    e.randomLookAround(8)
    e.lookAtEntity(2, Player, 8, 0.8, false)
    e.customGoal('randomSwim', // 1 = Name
        6, // 2 =Priority
        e => (e.inWater && e.getSyncedData("swim") != "walking"), // 3 = canUse
        e => (e.inWater && e.getSyncedData("swim") != "walking"), // 4 = CanContinue
        true,  // 5 = Intruptible
        e => { }, // 6 = Start
        e => { }, // 7 = Stop
        true, // 8 = Update Every Tick
        e => { // 9 = When Ticking
      try {
        if (e.age % 80 != 0) return
        let randomPos = getRandomSwimmablePos(e, 10, 10)
        // console.log(randomPos)
        if (randomPos != null) {
          e.navigation.moveTo(randomPos.x, randomPos.y, randomPos.z, 0.3)
        }
      } catch (error) {
        console.log("hey There is an:", error)
      }
    }
  )

})


/**
 * 
 * @param {Internal.PathfinderMob} e 
 * @param {Number} radius 
 * @param {Number} verticalDistance 
 * @returns 
 */
function getRandomSwimmablePos(e, radius, verticalDistance) {
  let random = Math.random()
  let mobPos = e.block.pos
  let x = mobPos.x + (random * 2 - 1) * radius
  let z = mobPos.z + (random * 2 - 1) * radius

// Swip Up Maybeee???
  let targetY = mobPos.y
  let below = e.block.down
  if (below.id !== "minecraft:water") {
    targetY = mobPos.y + 2
  }

  return new BlockPos(Math.floor(x), Math.floor(mobPos.y + 8), Math.floor(z))
}


// If It Has 6 Hearts and 10% Chance To Be Charged + Damage Cap Feature
EntityEvents.hurt("lostcities:escapee", event => {
    let { entity } = event
    let health = entity.getHealth() <= 8
  if (Math.random() < 0.98 && health && !entity.getSyncedData("powered")) {
      entity.setSyncedData("powered", true)
      entity.playSound("minecraft:entity.lightning_bolt.impact");
      entity.playSound("minecraft:entity.creeper.primed");
      entity.potionEffects.add("alexscaves:stunned", 40, 0, false, true)
      event.cancel()
    }
})


EntityJSEvents.addGoals("sleep_tight:bedbug", event => {
    event.nearestAttackableTarget(1, Player, 3, true, false, entity => true)
    event.nearestAttackableTarget(2, Chicken, 3, true, false, entity => true)
})
EntityJSEvents.addGoals("minecraft:cave_spider", event => {
    event.nearestAttackableTarget(1, Chicken, 3, true, false, entity => true)
    event.nearestAttackableTarget(2, COW, 3, true, false, entity => true)
    event.nearestAttackableTarget(3, Sheep, 3, true, false, entity => true)
})

EntityJSEvents.addGoals("minecraft:spider", event => {
    event.nearestAttackableTarget(1, Chicken, 3, true, false, entity => true)
    event.nearestAttackableTarget(2, COW, 3, true, false, entity => true)
    event.nearestAttackableTarget(3, Sheep, 3, true, false, entity => true)
})

EntityJSEvents.addGoalSelectors("minecraft:creeper", e => {   
    e.leapAtTarget(1, 0.3)
})


EntityJSEvents.addGoalSelectors("minecraft:iron_golem", e => {   
    e.leapAtTarget(1, 0.2)
})
