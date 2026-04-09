StartupEvents.init(event => {
    const courage = new $MobEffectBuilder("lostcities:courage").modifyAttribute("forge:entity_reach", "8566954c-0b07-43e3-851f-ea58602ab0fe", 0.5, 'addition').color(0xbdd4c6).beneficial()
    const courage_effect = MOB_EFFECTS.register("courage", () => courage.createObject())

    // Normal
    const courage_potion = Utils.lazy(() => new $PotionBuilder("lostcities:courage").effect(courage_effect.get(), 3600, 0))
    const c_potion = POTIONS.register("courage", () => courage_potion.get().createObject())
    // Long
    const courage_potion_long = Utils.lazy(() => new $PotionBuilder("lostcities:courage").effect(courage_effect.get(), 9600, 0))
    const c_potion_long = POTIONS.register("courage_long", () => courage_potion_long.get().createObject())
})

MoreJSEvents.registerPotionBrewing(event => {
    event.addPotionBrewing("luminous_nether:pale_melon_slice", "minecraft:awkward", "lostcities:courage");
    event.addPotionBrewing("minecraft:redstone", "lostcities:courage", "lostcities:courage_long");
});
/*
class Animal {
    private String name;

    public Animal(String name) {
        this.name = name;
    }

    public void move() {
        // movement logic
    }
}

// Cat can be pet
class Cat extends Animal implements Pettable {
    private String coat;

    public Cat(String name, String coat) {
        super(name);
        this.coat = coat;
    }

    public void jump() {
        // jump logic
    }

    @Override
    public void pet() {
        System.out.println("Purrrr...");
    }
}

// And so can be RoboDog, it doesn't have to extend `Animal`!
class RoboDog implements Pettable {
    public RoboDog() {

    }

    @Override
    public void pet() {
        System.out.println("RoboDog is pretty happy!");
    }
}

// This is the interface that guarantees that the class implementing that interface has the method `pet`.
interface Pettable {
    void pet();
}

class Scratch {
    public static void main(String[] args) {
        // Notice how we can have both a Cat and a RoboDog in this array, because Java knows both of these must contain `pet` method.
        Pettable[] pettables = new Pettable[] {
          new Cat("Minnie", "tuxedo"),
          new RoboDog()
        };

        for (Pettable pettable : pettables) {
            // We can **only** call methods that are available on that interface (and every method on Object of course, as every object extends Object)
            pettable.pet();
//          pettable.jump() // Can't do that, as the object is not guaranteed to have a `jump` method!
        }
    }
}

*/

StartupEvents.registry('mob_effect', event => {
    // Yada Yada
    event.create('exsanguination:dimentional_sickness')
        .color(0xBE59E5)
        .harmful()
})

StartupEvents.registry('mob_effect', event => {
    event.create('lostcities:unlisted')
        .color(0xA1BF33)
        .harmful()
        .modifyAttribute("forge:entity_gravity", "562e606d-278c-45a7-9f48-655e1787b75f", -0.001, 'addition')
        .effectTick((entity, level) => {
            // Only run on server for players
            if (!entity || level.isClientSide() || !entity.isPlayer()) return;
            const player = entity;
            const activeEffect = player.getActiveEffect('lostcities:unlisted');
            if (!activeEffect) return;

            const remainingTicks = activeEffect.getDuration();
            // When only 1 tick remains, schedule the teleport (runs after effect expires)
            if (remainingTicks <= 1 && !player.persistentData.getBoolean('lostcities_teleport_scheduled')) {
                player.persistentData.putBoolean('lostcities_teleport_scheduled', true);
                player.server.scheduleInTicks(1, () => {
                    // Safety check: effect should be gone now
                    if (player.isRemoved() || player.getActiveEffect('lostcities:unlisted')) return;
                    // Only teleport if player is in the lostcity dimension
                    if (player.level.dimension != 'lostcities:lostcity') return;

                    const respawnDim = player.getRespawnDimension();
                    const respawnPos = player.getRespawnPosition();
                    const hasValidSpawn = respawnPos != null && respawnDim != null;

                    // Apply safe-fall & protection effects, clear status
                    player.removeAllEffects();
                    player.addEffect('minecraft:slow_falling', 700, 1, false, true);
                    player.addEffect('toughasnails:climate_clemency', 300, 1, false, true);
                    player.addEffect('minecraft:fire_resistance', 300, 1, false, true);
                    player.tell(Text.of("It's just A Dream"));
                    player.extinguish();

                    // Teleport
                    if (hasValidSpawn) {
                        player.teleportTo(respawnDim.location(), respawnPos.x, respawnPos.y, respawnPos.z, 0.0, 0.0);
                    } else {
                        player.teleportTo('minecraft:overworld', 0, 120, 0, 0.0, 0.0);
                    }

                    player.persistentData.remove('lostcities_teleport_scheduled');
                });
            }
        });
});
StartupEvents.registry('mob_effect', event => {
    event.create('exsanguination:reincarnatus') // Create the effect under "kubejs:custom_effect"
        .color(0xF8D7780) // Sets the color of the Effect's Particles.
        .beneficial() // Categorizes the Effect as Beneficial.
})

StartupEvents.registry("mob_effect", (event) => {
    event
        .create("alexsmobsinteraction:riftform") // Create the effect under "kubejs:custom_effect"
        .color(0xb2abdd) // Sets the color of the Effect's Particles.
        .beneficial() // Categorizes the Effect as Beneficial. 
        .effectTick((entity, level) => {
            if (!entity || entity.level.isClientSide() || !entity.isPlayer()) return;
            entity.setGameMode("spectator");
            entity.server.scheduleInTicks(0, () => {
                if (!entity.potionEffects.isActive('alexsmobsinteraction:riftform')) {
                    entity.setGameMode("survival");
                }
            });
        });
});

// Liopyu
ForgeEvents.onEvent("net.minecraftforge.event.entity.ProjectileImpactEvent", event => global.onProjectileImpact(event))
/**
 *
 * @param {Internal.ProjectileImpactEvent} event
 */
global.onProjectileImpact = event => {
    let { projectile, impactResult, rayTraceResult } = event
    try {
        if (projectile.type == "alexscaves:limestone_spear") {
            if (rayTraceResult.type == "entity") {
                if (Math.random() >= 0.85)
                    projectile.kill()
            }
        }
        if (projectile.type == "alexscaves:frostmint_spear") {
            if (rayTraceResult.type == "entity") {
                if (Math.random() >= 0.80)
                    projectile.kill()
            }
        }
    } catch (error) {
        console.log("Error in onProjectileImpact: ", error)
    }
}

/*
protected ItemStack m_7941_() {
  return (ItemStack)m_20088_().m_135370_(DATA_WEAPON);

  public boolean isReturning() {
  return this.isReturning;
}
}

*/
//Modify Bedrock to be mineable, liopyu
BlockEvents.modification(event => {
    event.modify("minecraft:bedrock", block => {
        block.setDestroySpeed(5000)
    })
})
//Modify the break speed of bedrock
ForgeEvents.onEvent("net.minecraftforge.event.entity.player.PlayerEvent$BreakSpeed", event => {
    global.breakSpeed(event)
})

/**
 *
 * @param {Internal.PlayerEvent$BreakSpeed} event
 */
global.breakSpeed = event => {
    try {
        if (event.entity instanceof Java.loadClass("net.minecraft.world.entity.player.Player")) {
            if (event.entity.mainHandItem.id != "spelunkery:bedrock_buster") return
            if (event.state.block.id == "minecraft:bedrock") {
                event.setNewSpeed(25)
            }
        }

    } catch (error) {
        console.log(error)
    }
}

global.livingFallEvent = event => { }
ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingFallEvent", event => {
    global.livingFallEvent(event)
})


// Liopyu?
EntityJSEvents.modifyEntity(event => {
    event.modify("whiteenderman:white_enderman", modifyBuilder => {
        modifyBuilder.onHurtTarget(context => {
            const { entity, targetEntity } = context
            let effectDuration = 900
            if (Math.random() > 0.4) {
                targetEntity.potionEffects.add("potioncore:random_teleport", 1, 0, true, true)
            }
            targetEntity.potionEffects.add("exsanguination:dimentional_sickness", effectDuration, 0, true, true)
        });
    });

    event.modify("minecraft:enderman", modifyBuilder => {
        modifyBuilder.onHurtTarget(context => {
            const { entity, targetEntity } = context
            let effectDuration = 900
            if (Math.random() > 0.8) {
                targetEntity.potionEffects.add("potioncore:random_teleport", 1, 0, true, true)
            }
            targetEntity.potionEffects.add("exsanguination:dimentional_sickness", effectDuration, 0, true, true)
        });
    });


    event.modify("minecraft:endermite", modifyBuilder => {
        modifyBuilder.onHurtTarget(context => {
            const { entity, targetEntity } = context
            let effectDuration = 30
            if (Math.random() > 0.5) {
                targetEntity.potionEffects.add("exsanguination:dimentional_sickness", effectDuration, 0, true, true)
                targetEntity.potionEffects.add("potioncore:random_teleport", 1, 0, true, true)
            }
        });
    });

    event.modify("sculkhorde:sculk_mite_aggressor", modifyBuilder => {
        modifyBuilder.onHurtTarget(context => {
            const { entity, targetEntity } = context
            let effectDuration = 20
            if (Math.random() > 0.5) {
                targetEntity.potionEffects.add("exsanguination:dimentional_sickness", effectDuration, 0, true, true)
            }
        });
    });

    event.modify("sculkhorde:sculk_mite", modifyBuilder => {
        modifyBuilder.onHurtTarget(context => {
            const { entity, targetEntity } = context
            let effectDuration = 20
            if (Math.random() > 0.4) {
                targetEntity.potionEffects.add("exsanguination:dimentional_sickness", effectDuration, 0, true, true)
            }
        });
    });

    event.modify("luminous_beasts:vile_gator", modifyBuilder => {
        modifyBuilder.onHurtTarget(context => {
            const { entity, targetEntity } = context
            let effectDuration = 100
            if (Math.random() > 0.5) {
                targetEntity.potionEffects.add("alexscaves:irradiated", effectDuration, 0, true, true)
            }
        });
    });

    event.modify("luminous_monsters:glacial_zombie", modifyBuilder => {
        modifyBuilder.onHurtTarget(context => {
            const { entity, targetEntity } = context
            let effectDuration = 120
            targetEntity.potionEffects.add("toughasnails:internal_chill", effectDuration, 0, true, true)
            if (Math.random() > 0.5) {
                targetEntity.potionEffects.add("alexsmobs:exsanguination", effectDuration, 0, true, true)
            }
        });
    });
    event.modify("alexsmobs:froststalker", modifyBuilder => {
        modifyBuilder.onHurtTarget(context => {
            const { entity, targetEntity } = context
            let effectDuration = 120
            targetEntity.potionEffects.add("toughasnails:internal_chill", effectDuration, 0, true, true)
            if (Math.random() > 0.6) {
                targetEntity.potionEffects.add("alexsmobs:exsanguination", effectDuration, 0, true, true)
            }
        });
    });

    event.modify("alexscaves:vallumraptor", modifyBuilder => {
        modifyBuilder.onHurtTarget(context => {
            const { entity, targetEntity } = context
            let effectDuration = 120
            if (Math.random() > 0.7) {
                targetEntity.potionEffects.add("alexsmobs:exsanguination", effectDuration, 0, true, true)
            }
        });
    });



    event.modify("luminous_monsters:swamp_zombie", modifyBuilder => {
        modifyBuilder.onHurtTarget(context => {
            const { entity, targetEntity } = context
            let effectDuration = 120
            if (Math.random() > 0.9) {
                targetEntity.potionEffects.add("alexsmobs:oiled", effectDuration, 1, true, true)
            }
        });
    });

    event.modify("luminous_nether:crimson_walker", modifyBuilder => {
        modifyBuilder.onHurtTarget(context => {
            const { entity, targetEntity } = context
            let effectDuration = 120
            if (Math.random() > 0.9) {
                targetEntity.potionEffects.add("toughasnails:internal_warmth", effectDuration, 0, true, true)
                targetEntity.potionEffects.add("alexsmobs:exsanguination", effectDuration, 0, true, true)
            }
        });
    });

    event.modify("sculkhorde:sculk_enderman", modifyBuilder => {
        modifyBuilder.onHurtTarget(context => {
            const { entity, targetEntity } = context
            let effectDuration = 10
            let effectDuration2 = 220
            let effectDuration3 = 99999
            if (Math.random() > 0.8) {
                targetEntity.potionEffects.add("alexsmobs:fear", effectDuration, 0, true, true)
            }
            if (Math.random() > 0.9) {
                targetEntity.potionEffects.add("potioncore:broken_armor", effectDuration2, 3, true, true)
            }
            if (Math.random() > 0.9) {
                targetEntity.potionEffects.add("alexsmobsinteraction:skreeching", effectDuration3, 0, true, true)
            }
            if (Math.random() > 0.75) {
                targetEntity.potionEffects.add("alexsmobsinteraction:farseer_icon", effectDuration, 0, true, true)
            }
        });
    });

    // Screech Your Last :) ""
    let sculk = [
        'deeperdarker:angler_fish',
        'deeperdarker:sculk_centipede',
        'deeperdarker:sculk_leech',
        'sculkhorde:sculk_leech',
        'deeperdarker:sculk_snapper',
        'deeperdarker:shattered',
        'deeperdarker:shriek_worm',
        'deeperdarker:sludge',
        'deeperdarker:stalker',
        'minecraft:phantom',
        'minecraft:warden',
        'sculkhorde:sculk_creeper',
        'sculkhorde:sculk_enderman',
        'sculkhorde:sculk_hatcher',
        'sculkhorde:sculk_ravager',
        'sculkhorde:sculk_spitter',
        'sculkhorde:sculk_spore_spewer',
        'sculkhorde:sculk_vindicator',
        'sculkhorde:sculk_witch',
        'sculkhorde:sculk_soul_reaper']
    sculk.forEach(w => {
        event.modify(w, modifyBuilder => {
            modifyBuilder.onHurtTarget(context => {
                const { entity, targetEntity } = context
                let effectDuration = 10
                let effectDuration2 = 220
                let effectDuration3 = 99999
                if (Math.random() > 0.8) {
                    targetEntity.potionEffects.add("alexsmobs:fear", effectDuration, 0, true, true)
                }
                if (Math.random() > 0.9) {
                    targetEntity.potionEffects.add("potioncore:broken_armor", effectDuration2, 4, true, true)
                }
                if (Math.random() > 0.99) {
                    targetEntity.potionEffects.add("alexsmobsinteraction:skreeching", effectDuration3, 0, true, true)
                }
            });
        });
    });

    let hemmoandesang = [
        'alexscaves:atlatitan',
        'alexscaves:grottoceratops',
        'alexscaves:luxtructosaurus',
        'alexscaves:relicheirus',
        'alexscaves:tremorsaurus',
        'minecraft:zoglin'
    ]
    hemmoandesang.forEach(e => {
        event.modify(e, modifyBuilder => {
            modifyBuilder.onHurtTarget(context => {
                const { entity, targetEntity } = context
                let effectDuration = 100
                if (Math.random() > 0.6) {
                    targetEntity.potionEffects.add("alexsmobs:exsanguination", effectDuration, 1, true, true)
                    targetEntity.potionEffects.add("luminous_nether:hemorrhage", effectDuration, 1, true, true)
                }
            });
        });
    });


    let undead = [
        'minecraft:zombie',
        'luminous_monsters:miner_zombie',
        'luminous_monsters:dark_oak_zombie',
        'luminous_monsters:savanna_zombie',
        'minecraft:zombified_piglin',
        'luminous_nether:piglin_ghost',
        'luminous_nether:ghost',
        'quark:wraith',
        'minecraft:zombie_villager',
        'minecraft:zombified_piglin',
        'biomemakeover:decayed'
    ]
    undead.forEach(e => {
        event.modify(e, modifyBuilder => {
            modifyBuilder.onHurtTarget(context => {
                const { entity, targetEntity } = context
                let effectDuration = 93
                if (Math.random() > 0.90) {
                    targetEntity.potionEffects.add("alexsmobs:exsanguination", effectDuration, 1, true, true)
                }
            });
        });
    });


    event.modify("minecraft:drowned", modifyBuilder => {
        modifyBuilder.onHurtTarget(context => {
            const { entity, targetEntity } = context
            let effectDuration = 93
            let effectDuration2 = 120
            if (Math.random() > 0.7) {
                targetEntity.potionEffects.add("alexsmobs:exsanguination", effectDuration, 0, true, true)
            }
            if (Math.random() > 0.5) {
                targetEntity.potionEffects.add("potioncore:drown", effectDuration2, 0, true, true)
            }
        });
    });


    let figherz = [
        'minecraft:piglin',
        'minecraft:piglin_brute',
        'luminous_nether:piglin_executioner',
        'luminous_nether:piglin_cultist',
        'luminous_nether:piglin_cultist_leader',
        'minecraft:vindicator'
    ]
    figherz.forEach(e => {
        event.modify(e, modifyBuilder => {
            modifyBuilder.onHurtTarget(context => {
                const { entity, targetEntity } = context
                let effectDuration = 100
                if (Math.random() > 0.85) {
                    targetEntity.potionEffects.add("potioncore:broken_armor", effectDuration, 3, true, true)
                }
            })
        })
    })
})


// Thank U Matt_ZSlayer
ForgeEvents.onEvent("net.minecraftforge.event.entity.living.MobEffectEvent$Applicable", event => global.applyEffect(event))
