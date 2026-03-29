const DamageTypeTags = Java.loadClass("net.minecraft.tags.DamageTypeTags")

global.wiltling = event => {
    let { entity } = event
    if (entity.isMoving()) {
        event.thenLoop("run")
    } else {
        event.thenLoop("Idle")
    }
    return true
}

global.trigger = event => {
    event.addTriggerableAnimation("attack", "attack", "play_once")
    event.addTriggerableAnimation("hurt", "hurt", "play_once")
    event.addTriggerableAnimation("weakling", "weakling", "play_once")
    event.addTriggerableAnimation("man_im_dead", "man_im_dead", "play_once")
    return true

}


global.hurting = context => {
    let { entity } = context;
    entity.triggerAnimation('trigger_anims', "attack")
}


/**
 * @param {Internal.ContextUtils$PreRenderContext<Internal.TameableMobJS>} context
 */
global.geoLayerRender2 = context => {
    context.poseStack.scale(1.01, 1.01, 1.01)
}
/*

global.tick
if (!m_9236_().m_5776_() && m_9236_().m_46749_(m_20183_()) && !m_20072_()) {
  if (maxBrightness() > 1 || m_6060_()) {
    m_9236_().m_7605_((Entity)this, (byte)15);
    if (!isBrightEnoughToBurn()) {
      this.targetMovementSpeed = 0.25D;
    }
  } 
  if (isBrightEnoughToBurn()) {
    m_6469_(m_269291_().m_269549_(), m_9236_().m_46461_() ? 20.0F : 1.0F);
  }
} 
*/
/*
    public boolean hurt(DamageSource source, float amount) {
        BlockPos home = this.getHomePos();

        if (home == null || source.is(DamageTypeTags.BYPASSES_INVULNERABILITY)) {
            return super.hurt(source, amount);
        } else if (!this.isInvulnerableTo(source) && this.invulnerabilityAnimationRemainingTicks <= 0 && !this.isDeadOrDying()) {
            Player player = this.blameSourceForDamage(source);
            Entity entity = source.getDirectEntity();

            if (entity instanceof LivingEntity || entity instanceof Projectile || player != null) {
                this.invulnerabilityAnimationRemainingTicks = 8;
                this.level().broadcastEntityEvent(this, CREAKING_HURT);

                if (this.level().getBlockEntity(home) instanceof CreakingHeartBlockEntity heart && heart.isProtector(this)) {
                    if (player != null) {
                        heart.creakingHurt();
                    }

                    this.playHurtSound(source);
                }

                return true;
            }
        }

        return false;
    }

           let { damageSource, entity } = context
        let damages = ["onFire", "inFire", "minecraft:out_of_world"]
        if (damageSource.getType() != damages) {
            entity.triggerAnimation("attack", "hurt", "hurt")
        } else {
            entity.triggerAnimation("attack", "weakling", "weakling")
        }
*/


/**
 * @param {Internal.ContextUtils$EntityDamageContext} context
 */
global.assbeating = context => {
    let { damageSource, entity, damageAmount, amount } = context
    if (damageSource != entity.level.damageSources().onFire()) {
        entity.triggerAnimation("trigger_anims", "weakling")
        entity.playSound("rootoffear:entity.wilted.sway")
      return false
    } else {
        entity.triggerAnimation("trigger_anims", "hurt")
        return true
    }
}

/*
public boolean m_6469_(DamageSource source, float amount) {
  if (source.m_276093_(DamageTypes.f_268631_))
    return false; 
  if (source.m_7640_() instanceof net.minecraft.world.entity.projectile.AbstractArrow)
    return false; 
  if (source.m_7640_() instanceof Player)
    return false; 
  if (source.m_7640_() instanceof net.minecraft.world.entity.projectile.ThrownPotion || source.m_7640_() instanceof net.minecraft.world.entity.AreaEffectCloud)
    return false; 
  if (source.m_276093_(DamageTypes.f_268671_))
    return false; 
  if (source.m_276093_(DamageTypes.f_268585_))
    return false; 
  if (source.m_276093_(DamageTypes.f_268722_))
    return false; 
  if (source.m_276093_(DamageTypes.f_268450_))
    return false; 
  if (source.m_276093_(DamageTypes.f_268565_))
    return false; 
  if (source.m_276093_(DamageTypes.f_268714_))
    return false; 
  if (source.m_276093_(DamageTypes.f_268526_))
    return false; 
  if (source.m_276093_(DamageTypes.f_268482_))
    return false; 
  if (source.m_276093_(DamageTypes.f_268493_))
    return false; 
  if (source.m_276093_(DamageTypes.f_268641_))
    return false; 
  return super.m_6469_(source, amount);
}

*/

StartupEvents.registry("entity_type", event => {
    let builder = event.create("rootoffear:wiltling", "entityjs:mob")
    builder.shouldDespawnInPeaceful(true)
    builder.mobCategory("monster")
    builder.clientTrackingRange(20)
    builder.setRenderType("translucent")
    builder.canBreatheUnderwater(true)
    builder.onHurtTarget(context => global.hurting(context))
    builder.sized(0.8, 2.8)
    builder.defaultDeathPose(false)
    builder.onDeath(context => {
        let {entity} = context
        entity.triggerAnimation("trigger_anims", "man_im_dead")
    })
    builder.newGlowingGeoLayer(builder => {
        builder.render(context => global.geoLayerRender2(context))
        builder.textureResource(e => "rootoffear:textures/entity/wiltling_glowlayer.png")
    })
    builder.animationResource(entity => {
        return "kubejs:animations/entity/wiltling.animation.json"
    })
    builder.onHurt(context => global.assbeating(context))
    builder.addAnimationController("trigger_anims", 20, event => global.trigger(event))
    builder.addAnimationController("wiltling", 20, event => global.wiltling(event))
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
    event.modify("rootoffear:wiltling", attribute => {
        attribute.add("minecraft:generic.attack_damage", 4)
        attribute.add("minecraft:generic.movement_speed", 0.25)
        attribute.add("minecraft:generic.knockback_resistance", 1)
        attribute.add("minecraft:generic.follow_range", 40)
    })
})
