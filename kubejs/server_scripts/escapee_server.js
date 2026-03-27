let Player = Java.loadClass("net.minecraft.world.entity.player.Player")
let Cat = Java.loadClass("net.minecraft.world.entity.animal.Cat")
let Cat2 = Java.loadClass("net.minecraft.world.entity.animal.CatVariant")
let Ocelot = Java.loadClass("net.minecraft.world.entity.animal.Ocelot")
let Raycat = Java.loadClass("com.github.alexmodguy.alexscaves.server.entity.living.RaycatEntity")
let Chicken = Java.loadClass("net.minecraft.world.entity.animal.Chicken")
let COW = Java.loadClass("net.minecraft.world.entity.animal.Cow")
let Sheep = Java.loadClass("net.minecraft.world.entity.animal.Sheep")

EntityJSEvents.addGoals("lostcities:escapee", event => {
  event.nearestAttackableTarget(1, Player, 10, true, false, null)
  event.nearestAttackableTarget(2, Cat, 80, true, false, null)
  event.nearestAttackableTarget(3, Cat2, 80, true, false, null)
  event.nearestAttackableTarget(4, Ocelot, 80, true, false, null)
  event.nearestAttackableTarget(5, Raycat, 80, true, false , null)
  event.hurtByTarget(1, [], true, [])
})

EntityEvents.spawned("minecraft:creeper",event => {
  let { entity, level } = event
  if (Math.random() > 0.90 && level.moonPhase() == 1) {
    let Escapee = entity.block.createEntity("lostcities:escapee")
    Escapee.spawn()
    event.cancel()
  }
})

// Play Sound
ItemEvents.rightClicked("minecraft:flint_and_steel", event=>{
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
        if (e.age % 20 != 0) return
        if (!e.inWater) return
        let randomPos = getRandomSwimmablePos(e, 10, 15)
        if (randomPos != null) {
          e.navigation.moveTo(randomPos.x, randomPos.y, randomPos.z, 1)
        }
      } catch (error) {
        console.log(error)
      }
    })
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
  let y = mobPos.y + (random * 2 - 1) * verticalDistance
  let z = mobPos.z + (random * 2 - 1) * radius
  return new BlockPos(x.toFixed(0), y.toFixed(0), z.toFixed(0))
}

// If It Has 6 Hearts and 10% Chance To Be Charged + Damage Cap Feature
EntityEvents.hurt("lostcities:escapee", event => {
  let { entity } = event
  let health = entity.getHealth() <= 12
  if (health && Math.random() > 0.95 && !entity.getSyncedData("powered")) {
    entity.setSyncedData("powered", true)
    entity.playSound("minecraft:entity.lightning_bolt.impact");
    entity.playSound("minecraft:entity.creeper.primed");
    entity.potionEffects.add("alexscaves:stunned", 40, 0, false, true)
    event.cancel()
  }
})

// Without Itemphysics Just Grab The Run ig
LootJS.modifiers((event) => {
  event.addEntityLootModifier("lostcities:escapee").randomChance(0.05).addLoot(Item.of("lostcities:escapee_stylet"));
  event.addEntityLootModifier("lostcities:escapee").randomChanceWithEnchantment("minecraft:looting", [0.1, 0.15, 0.2, 0.25]).addLoot("minecraft:flint");
  event.addEntityLootModifier("lostcities:escapee").randomChanceWithEnchantment("minecraft:looting", [0.1, 0.15, 0.2, 0.25]).addLoot("minecraft:flint");
});

// Vommiter's Script
EntityEvents.hurt(event => {
  let { source: { player }, server: { tickCount } } = event
  if (!player) return;
  if (!player.potionEffects.isActive('lostcities:escapee_feast')) return;
  // If the exhaustion/hunger bigger then 2
  let foodLevel = player.foodLevel
  if (foodLevel <= 6 || player.health >= player.maxHealth) return
  // Changes hunger with health + 20s tick delays
  global.pedestrianFeastMap = global.pedestrianFeastMap || {}
  let LastEffectTick = global.pedestrianFeastMap[player.uuid.hashCode()] || 0
  if (tickCount - LastEffectTick < 20) return;
  global.pedestrianFeastMap[player.uuid.hashCode()] = tickCount

  let amps = player.getEffect('lostcities:escapee_feast').getAmplifier() + 2
  let heal = 2
  player.setFoodLevel(foodLevel - amps)
  if (Math.random() > 0.3) player.heal(heal * amps)
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
    e.leapAtTarget(1, 0.4)
})



EntityJSEvents.addGoals("rootoffear:wiltling", event => {
  event.nearestAttackableTarget(1, Player, 10, true, false, null)
  event.hurtByTarget(1, [], true, [])
})


EntityJSEvents.addGoalSelectors("rootoffear:wiltling", e => {
  e.meleeAttack(1, 1.1, false)
  e.randomStroll(4, 1, 30, true)
  e.randomLookAround(5)
})
