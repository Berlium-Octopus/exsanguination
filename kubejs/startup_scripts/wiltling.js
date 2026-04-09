const DamageTypeTags = Java.loadClass("net.minecraft.tags.DamageTypeTags")
// ADD THE MELT INTO RESIN
let WildlingImmuneTo = [
  "arrow",
  "jeg.bullet",
  "jeg.bullet.eliminated",
  "jeg.bullet.annihilated",
  "jeg.bullet.executed",
  "stalagmite"
]

global.wiltling = event => {
  let { entity } = event
  let RenderUtils = Java.loadClass("software.bernie.geckolib.util.RenderUtils")
  let geoModel = RenderUtils.getGeoModelForEntity(entity)
  let ARM = geoModel.getBone("ARM").get()
  if (!entity.getSyncedData("hasHand")) {
    ARM.setHidden()
  } else {
    ARM.setHidden(false)
  }
  if (entity.isMoving()) {
    event.thenLoop("run")
  } else {
    event.thenLoop("Idle")
  }
  return true
}



global.trigger = event => {
  event.addTriggerableAnimation("hurt", "hurt", "play_once")
  event.addTriggerableAnimation("hurt_ouchie", "hurt_ouchie", "play_once")
  // Play reallyhurts when close to the victim and charges at them 
  event.addTriggerableAnimation("hurt_reallyhurts", "hurt_reallyhurts", "play_once")
  event.addTriggerableAnimation("weakling", "weakling", "play_once")
  event.addTriggerableAnimation("weakling_2", "weakling_2", "play_once")
  event.addTriggerableAnimation("man_im_dead", "man_im_dead", "play_once")
  return true

}

global.triggatack = event => {
  event.addTriggerableAnimation("attack", "attack", "play_once")
  return true

}


global.hurting = context => {
  let { entity } = context
  entity.triggerAnimation('trigger_attacks', "attack")
}


/**
 * @param {Internal.ContextUtils$PreRenderContext<Internal.TameableMobJS>} context
 */
global.geoLayerRender2 = context => {
  context.poseStack.scale(1.0, 1.0, 1.0)
}
//   builder.onHurt(context => global.assbeating(context))
//  builder.addAnimationController("name", 0 <- Make sure the seconds be 0

/**
 * @param {Internal.ContextUtils$EntityDamageContext} context
 */
global.assbeating = context => {
  let { damageSource, entity } = context
  if (damageSource != entity.level.damageSources().onFire()) {
    if (Math.random() < 0.5) {
      entity.triggerAnimation("trigger_anims", "weakling_2")
    } else {
      entity.triggerAnimation("trigger_anims", "weakling")
    }
    entity.playSound("rootoffear:entity.wilted.sway")

  } else {
    if (Math.random() < 0.5) {
      entity.triggerAnimation("trigger_anims", "hurt")
    } else {
      entity.triggerAnimation("trigger_anims", "hurt_ouchie")

    }
  }
}

/** @param {Internal.LivingEntity} context*/
global.wiltedstep = context => {
  function LightBurn() {
    if (!context.level.isClientSide()) {
      let blockpos = BlockPos.containing(context.getX(), context.getEyeY(), context.getZ());
      let lightlevel = context.block.getBlockLight()
      let sky = context.level.canSeeSky(blockpos) && context.level.isDay()
      let WetOrInSnow = context.inFluidType || context.isInWaterRainOrBubble() || context.isInPowderSnow || context.wasInPowderSnow;
      if (lightlevel > 10 && !WetOrInSnow || sky) {
        return true;
      }
    }
    return false;
  }

  if (LightBurn()) {
    context.setSecondsOnFire(1);
    context.potionEffects.add("minecraft:speed", 10, 0, true, false);
    context.potionEffects.add("minecraft:strength", 10, 0, true, false);
  }
}

StartupEvents.registry("entity_type", event => {
  let builder = event.create("rootoffear:wiltling", "entityjs:mob")
  builder.shouldDespawnInPeaceful(true)
  builder.mobCategory("monster")
  builder.clientTrackingRange(20)
  builder.setRenderType("translucent")
  builder.canBreatheUnderwater(true)
  builder.onHurtTarget(context => global.hurting(context))
  builder.sized(0.7, 2.8)
  builder.defaultDeathPose(false)
  builder.aiStep(context => global.wiltedstep(context))
  builder.onDeath(context => {
    let { entity } = context
    entity.triggerAnimation("trigger_anims", "man_im_dead")
    entity.level.spawnParticles(
      "rootoffear:wilted_glow",
      true,
      entity.getX(),
      entity.getY(),
      entity.getZ(),
      0,
      0.2,
      0,
      20,
      0.02
    );
  })
  builder.newGlowingGeoLayer(builder => {
    builder.render(context => global.geoLayerRender2(context))
    builder.textureResource(e => "rootoffear:textures/entity/wiltling_glowlayer.png")
  })
  builder.animationResource(entity => {
    return "kubejs:animations/entity/wiltling.animation.json"
  })
  builder.onHurt(context => global.assbeating(context))
  // Layer Animations Don't Forget
  builder.isInvulnerableTo(context => {
    let { damageSource } = context
    if (WildlingImmuneTo.includes(damageSource.getType())) return true
  })
  builder.addAnimationController("wiltling", 1, event => global.wiltling(event))
  builder.addAnimationController("trigger_attacks", 1, event => global.triggatack(event))
  builder.addAnimationController("trigger_anims", 0, event => global.trigger(event))
  // Blends Anims Bcs Cool
  builder.setHurtSound(context => {
    let { damageSource } = context;
    switch (damageSource.getType()) {
      case "onFire":
        return "rootoffear:entity.wilted.hurt"
      default:
        return "rootoffear:entity.wilted.sway"
    }
  })
  builder.setDeathSound("rootoffear:entity.wilted.curse_item")
})


ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingHurtEvent", event => global.wiltlingGetsWreked(event))

let WildlingVulnerable = [
  "onFire",
  "inFire",
  "genericKill",
  "lava",
  "outOfWorld"
]
/**
* @param {Internal.LivingHurtEvent} event 
*/
global.wiltlingGetsWreked = event => {
  let { entity, amount, source } = event
  let attacker = source.actual
  let wiltling = entity.type == "rootoffear:wiltling"
  if (!attacker) return
  if (!wiltling) return
  if (WildlingVulnerable.includes(source.getType())) {
    let double = amount * 2
    event.setAmount(double)
  } else if (source.getType() == "player") {
    if (attacker.mainHandItem.hasTag("minecraft:axes") || attacker.mainHandItem.hasTag("spartanweaponry:battleaxes")) {
      event.setAmount(amount * 0.5)
    } else { event.setAmount(0.5) }
  } else {
    event.setAmount(0.1)
  }
}

EntityJSEvents.attributes(event => {
  event.modify("rootoffear:wiltling", attribute => {
    attribute.add("minecraft:generic.max_health", 60)
    attribute.add("minecraft:generic.attack_damage", 4)
    attribute.add("minecraft:generic.movement_speed", 0.25)
    attribute.add("minecraft:generic.knockback_resistance", 1)
    attribute.add("minecraft:generic.follow_range", 40)
  })
})

EntityJSEvents.modifyEntity(event => {
  event.modify("lostcities:escapee", modifyBuilder => {
    modifyBuilder.defineSyncedData(entity => {
      entity.addSyncedData("boolean", "hasHand", false)
    })
  })
})

/*

let Axis = Java.loadClass("com.mojang.math.Axis")
StartupEvents.registry("entity_type", event => {
    event.create("wyrm", "entityjs:geckolib_projectile")

})
*/