const DamageTypeTags = Java.loadClass("net.minecraft.tags.DamageTypeTags")
const $RenderUtils = Java.loadClass("software.bernie.geckolib.util.RenderUtils")

// Liopyu
StartupEvents.registry("entity_type", event => {
  event.create("rootoffear:wiltling_hand_projectile", "entityjs:geckolib_projectile")
    .modelResource(e => "rootoffear:geo/entity/wiltling_hand.geo.json")
    .noItem()
    .tick(entity => entity.level.spawnParticles(
      "rootoffear:wilted_glow",
      true,
      entity.getX(),
      entity.getY(),
      entity.getZ(),
      0,
      0,
      0,
      3,
      0.02,
    ))
    .sized(0.7, 0.7)
    .newGlowingGeoLayer(builder => {
      builder.textureResource(e => "rootoffear:textures/entity/wiltling_glowlayer.png")
    })
    //
    .textureResource(e => "rootoffear:textures/entity/wiltling.png")
    .onHitBlock(context => {
      const { entity, result } = context
      entity.block.createEntity("rootoffear:wiltling_hand").spawn()
      entity.remove("discarded")
    })
    .onHitEntity(context => {
      const { entity, result } = context
      if (entity.owner == result.entity || result.entity instanceof Java.loadClass("net.minecraft.world.entity.item.ItemEntity")) return
      result.entity.attack(entity.level.damageSources().mobProjectile(entity, entity.owner), 1)
      entity.block.createEntity("rootoffear:wiltling_hand").spawn()
      entity.remove("discarded")
    })
})

/**
 * @param {Internal.ContextUtils$ScaleModelRenderContext} context
 */
global.wiltedHandRenderer = context => {
  let { entity, poseStack, partialTick } = context
  let geoModel = $RenderUtils.getGeoModelForEntity(entity)
  let Axis = Java.loadClass("com.mojang.math.Axis")
  let prevBody = entity.yBodyRotO
  let body = entity.yBodyRot
  let interpBody = prevBody + (body - prevBody) * partialTick
  poseStack.mulPose(Axis.YP.rotationDegrees(-interpBody))
}

// The Scalemodelforredner is not scaling idk why
let $Wilted = Java.loadClass("com.alexander.rootoffear.entities.Wilted")
StartupEvents.registry("entity_type", event => {
  let builder = event.createCustom("rootoffear:wiltling_hand", $Wilted, modifyBuilder => {
  } )
  builder.sized(0.7, 0.7)
  builder.newGlowingGeoLayer(builder => {
    builder.textureResource(e => new ResourceLocation("rootoffear", "textures/entity/wiltling_glowlayer.png"))
  })

  builder.scaleModelForRender(context => global.wiltedHandRenderer(context))
  builder.addAnimationController("hand_movement", 2, handler => {
    let /**@type {Internal.Mob} */ entity = handler.getEntity().originalEntity
    if (entity.isMoving()) {
      handler.thenLoop("walk")
    } else {
      handler.thenLoop("idle")
    }
    return true
  })
  builder.addAnimationController("hand_hurt", 0, handler => {
    handler.addTriggerableAnimation("ouchimama", "ouchimama", "play_once")
    handler.addTriggerableAnimation("ouchimama2", "ouchimama2", "play_once")
    handler.addTriggerableAnimation("attack", "attack", "play_once")

    return true
  })
  builder.animationResource(e => new ResourceLocation("rootoffear", "animations/wiltling_hand.animation.json"))
  builder.textureResource(e => new ResourceLocation("rootoffear", "textures/entity/wiltling.png"))
})


/**
 * 
 * @param {Internal.MobEntityJS} entity 
 * @param {Player} player 
 * @returns {boolean}
 */
function isLookingAtMe(entity, player) {
  let viewVector = player.getViewVector(1.0).normalize();
  let vectorToEntity = new Vec3d(entity.getX() - player.getX(), entity.getEyeY() - player.getEyeY(), entity.getZ() - player.getZ());
  let distance = vectorToEntity.length();
  vectorToEntity = vectorToEntity.normalize();
  let dotProduct = viewVector.dot(vectorToEntity);
  // You can increase/decrease the dot sensitivity by increasing/decreasing the lookThreshold
  let lookThreshold = 2
  return dotProduct > 1.0 - lookThreshold / distance && player.hasLineOfSight(entity);
}

/**
 * 
 * @param {Internal.Mob} entity 
 * @returns 
 */

global.WiltedTick = entity => {
  const { level } = entity
  // Yea Screw PPl
  let BlockPathTypes = Java.loadClass("net.minecraft.world.level.pathfinder.BlockPathTypes")
  entity.setPathfindingMalus(BlockPathTypes.UNPASSABLE_RAIL, 0.0)

  if (!entity.onFire) {
    let mobAABB = entity.boundingBox.inflate(60)
    level.getEntitiesWithin(mobAABB).forEach(target => {
      if (!entity.isAggressive()) return
      if (target && target.player && target.distanceToEntity(entity) < 20) {
        if (isLookingAtMe(entity, target) && (target.distanceToEntity(entity) > 8)) {
          entity.setNoAi(true)
          entity.potionEffects.add("minecraft:speed", 100, 2, true, false);
          // Maybe This Check Fixes The Anim Error?
          entity.setSyncedData("lookAT", true)
        } else {
          entity.setNoAi(false)
          entity.setSyncedData("lookAT", false)
        }
      }
    })
  } else {
    entity.setNoAi(false)
    entity.setSyncedData("lookAT", false)
  }
  if (!entity.getSyncedData("hasHand") && entity.age % 600 === 0) {
    entity.setSyncedData("hasHand", true)
  }
}


global.wiltling = event => {
  let { entity } = event
  let geoModel = $RenderUtils.getGeoModelForEntity(entity)
  let ARM = geoModel.getBone("ARM").get()
  if (!entity.getSyncedData("hasHand")) {
    ARM.setHidden(true)
  }

  if (entity.getSyncedData("hasHand")) {
    ARM.setHidden(false)
  }

  if (entity.isMoving()) {
    event.thenLoop("run")
  } else {
    event.thenLoop("none")
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

global.triggerAttack = event => {
  event.addTriggerableAnimation("attack", "attack", "play_once")
  event.addTriggerableAnimation("ranged_attack", "ranged_attack", "play_once")

  return true

}


global.hurting = context => {
  let { entity } = context
  entity.triggerAnimation('trigger_attacks', "attack")
}


/**
 * @param {Internal.ContextUtils$PreRenderContext<Internal.LivingEntity>} context
 */
global.geoLayerRender2 = context => {
  let { poseStack, entity } = context
  if (entity.getSyncedData("lookAT")) {
    poseStack.scale(0.001, 0.001, 0.001)
  } else {
    poseStack.scale(1.0, 1.0, 1.0)
  }
}


function LightBurn(context) {
  if (!context.level.isClientSide()) {
    let blockpos = BlockPos.containing(context.getX(), context.getEyeY(), context.getZ());
    let lightlevel = context.block.getBlockLight()
    let sky = context.level.canSeeSky(blockpos) && context.level.isDay()
    let WetOrInSnow = context.inFluidType || context.isInWaterRainOrBubble() || context.isInPowderSnow || context.wasInPowderSnow;
    if (lightlevel > 9 && !WetOrInSnow || sky) {
      return true;
    }
  }
  return false;
}

/** @param {Internal.LivingEntity} context*/
global.wiltedstep = context => {
  if (LightBurn(context)) {
    context.setSecondsOnFire(3);
    context.potionEffects.add("minecraft:speed", 10, 0, true, false);
    context.potionEffects.add("minecraft:strength", 10, 0, true, false);
  }
}

StartupEvents.registry("entity_type", event => {
  let builder = event.create("rootoffear:wiltling", "entityjs:mob")
  builder.standingEyeHeight
  builder.clientTrackingRange(20)
  builder.setRenderType("translucent")
  builder.setAmbientSound("rootoffear:entity.wilted.idle")
  builder.ambientSoundInterval(200)
  builder.canBreatheUnderwater(true)
  builder.onHurtTarget(context => global.hurting(context))
  builder.sized(0.7, 2.8)
  builder.tick(entity => global.WiltedTick(entity))
  builder.defaultDeathPose(false)
  builder.aiStep(context => global.wiltedstep(context))
  builder.onDeath(context => {
    let { entity } = context
    entity.triggerAnimation("trigger_anims", "man_im_dead")
    entity.level.spawnParticles(
      "rootoffear:wilted_break",
      true,
      entity.getX(),
      entity.getY(),
      entity.getZ(),
      0,
      0,
      0,
      20,
      0.01,
    );
  })
  builder.newGlowingGeoLayer(builder => {
    builder.render(context => global.geoLayerRender2(context))
    builder.textureResource(e => "rootoffear:textures/entity/wiltling_glowlayer.png")
  })
  builder.animationResource(entity => {
    return "kubejs:animations/entity/wiltling.animation.json"
  })
  builder.addAnimationController("wiltling", 0, event => global.wiltling(event))
  builder.addAnimationController("trigger_attacks", 1, event => global.triggerAttack(event))
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




EntityJSEvents.attributes(event => {
  event.modify("rootoffear:wiltling_hand", attribute => {
    attribute.add("minecraft:generic.max_health", 10)
    attribute.add("minecraft:generic.attack_damage", 2)
    attribute.add("minecraft:generic.movement_speed", 0.31)
    attribute.add("minecraft:generic.follow_range", 40)
  })
})

EntityJSEvents.attributes(event => {
  event.modify("rootoffear:wiltling", attribute => {
    attribute.add("minecraft:generic.max_health", 35)
    attribute.add("minecraft:generic.attack_damage", 4)
    attribute.add("minecraft:generic.movement_speed", 0.3)
    attribute.add("minecraft:generic.knockback_resistance", 1)
    attribute.add("minecraft:generic.follow_range", 40)
  })
})

EntityJSEvents.modifyEntity(event => {
  event.modify("rootoffear:wiltling", modifyBuilder => {
    modifyBuilder.defineSyncedData(entity => {
      //Oops nearly forgot this
      entity.addSyncedData("boolean", "lookAT", false)
      entity.addSyncedData("boolean", "hasHand", true)
    })
  })
})

const $LivingAttackEvent = Java.loadClass('net.minecraftforge.event.entity.living.LivingAttackEvent')


let WildlingVulnerable = [
  "onFire",
  "inFire",
  "genericKill",
  "lava",
  "outOfWorld"
]
ForgeEvents.onEvent($LivingAttackEvent, event => global.WiltedLivingAttack(event))
/** @param {Internal.LivingAttackEvent} event*/
global.WiltedLivingAttack = event => {
  let { source, entity } = event;
  let attacker = source.actual
  if (entity.type === "rootoffear:wiltling") {
    let damageType = source.getType()
    if (!WildlingVulnerable.includes(damageType)) {
      if (entity.level.isClientSide()) {
        if (Math.random() < 0.5) {
          entity.triggerAnimation("trigger_anims", "weakling_2")
        } else {
          entity.triggerAnimation("trigger_anims", "weakling")
        }
        entity.level.spawnParticles(
          "rootoffear:wilted_glow",
          true,
          entity.getX() + 0.4,
          entity.getY() + 2,
          entity.getZ() + 0.4,
          0.1,
          0.1,
          0.1,
          3,
          0.02,
        );
        entity.level.spawnParticles(
          "rootoffear:wilted_glow",
          true,
          entity.getX() + 0.4,
          entity.getY() + 1,
          entity.getZ() + 0.2,
          0.1,
          0.1,
          0.1,
          3,
          0.02,
        );
        entity.level.spawnParticles(
          "rootoffear:wilted_glow",
          true,
          entity.getX() + -0.4,
          entity.getY() + 1,
          entity.getZ() + -0.4,
          0.1,
          0.1,
          0.1,
          3,
          0.02,
        );
        entity.level.spawnParticles(
          "rootoffear:wilted_glow",
          true,
          entity.getX() + -0.4,
          entity.getY() + 2,
          entity.getZ() + -0.2,
          0.1,
          0.1,
          0.1,
          3,
          0.02,
        );
      } else {
        entity.playSound("rootoffear:entity.wilted.sway")
        event.cancel()
      }
    }
    let animarray = [
      "hurt",
      "hurt_ouchie",
      "hurt_reallyhurts"
    ]
    let Randomanim = names => names[Math.floor(names.length * Math.random())]
    if (WildlingVulnerable.includes(damageType) && entity.alive) {
      entity.triggerAnimation("trigger_anims", Randomanim(animarray))
    }
  }
  if (entity.type === "rootoffear:wiltling_hand") {
    if (Math.random() > 0.5) {
      entity.triggerAnimation("hand_hurt", "ouchimama")
    } else {
      entity.triggerAnimation("hand_hurt", "ouchimama2")
    }
  }

}

