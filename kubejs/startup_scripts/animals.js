// priority: 100
Platform.mods.kubejs.name = 'Exsanguination Originals'

StartupEvents.modifyCreativeTab("kubejs:tab", event => {
    event.icon = "biomesoplenty:cooked_flesh_chunk"
    event.displayName = "Exsanguination Originals"
// THIS IS NOT MINE IT'S PART OF LUMINOUS NETHER AND THE CONSUME FUNTION IS NOT FUNCTIONAL SO I MADE THIS TO CHEESE THE BUG
})

// Xeru and IIIAP (FOR SUS GRIME)
const $DoorBlock = Java.loadClass('net.minecraft.world.level.block.DoorBlock')
const $Brushable = Java.loadClass('net.minecraft.world.level.block.entity.BrushableBlockEntity')
const $TrapDoorBlock = Java.loadClass('net.minecraft.world.level.block.TrapDoorBlock')
const $Blocks = Java.loadClass('net.minecraft.world.level.block.Blocks')
const $Properties = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour$Properties')
let $BrushableBlock = Java.loadClass('net.minecraft.world.level.block.BrushableBlock')
const $BlockItem = Java.loadClass('net.minecraft.world.item.BlockItem')
const $IProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')
const $BlockSetType = Java.loadClass('net.minecraft.world.level.block.state.properties.BlockSetType')
const $Atlas = Java.loadClass('pepjebs.mapatlases.item.MapAtlasItem')
const $SoundEvents = Java.loadClass('net.minecraft.sounds.SoundEvents')
const $SOULSAND = Java.loadClass('net.jadenxgamer.netherexp.registry.block.custom.JNEBrushableBlock')
const $DDBLOCKS = Java.loadClass('com.kyanite.deeperdarker.content.DDBlocks')


let door
let trapDoor
let sands

StartupEvents.registry('block', e => {
  trapDoor = e.createCustom('rootoffear:faded_oak_trapdoor', () => new $TrapDoorBlock($Properties.copy($Blocks.OAK_TRAPDOOR), $BlockSetType.OAK))  
  door = e.createCustom('rootoffear:faded_oak_door', () => new $DoorBlock($Properties.copy($Blocks.OAK_DOOR), $BlockSetType.OAK))
  // sands = e.createCustom('deeperdarker:suspisious_sculk_grime', () => new $SOULSAND($DDBLOCKS.SCULK_GRIME, $Properties.copy($Blocks.MUD), $SoundEvents.BRUSH_SAND, $SoundEvents.BRUSH_SAND_COMPLETED))
})

StartupEvents.registry('item', e => {
  e.createCustom('rootoffear:faded_oak_trapdoor', () => new $BlockItem(trapDoor.get(), new $IProperties()))
  e.createCustom('rootoffear:faded_oak_door', () => new $BlockItem(door.get(), new $IProperties()))
  e.createCustom('map_atlases:soulbound_atlas', () => new $Atlas(new $IProperties()))
  // e.createCustom('deeperdarker:suspisious_sculk_grime', () => new $BlockItem(sands.get(), new $IProperties()))
})

  StartupEvents.registry('item', e => {
    e.create('domesticationinnovation:brenda_collar').texture('kubejs:item/corrupted_tag').displayName("Brenda's Collar").rarity('alexscaves:demonic')
    e.create('domesticationinnovation:bonbon_collar').texture('kubejs:item/magneto_tag').displayName("Bonbon's Collar").rarity('RARE')
    e.create('domesticationinnovation:amoy_collar').texture('kubejs:item/lightnodago_tag').displayName("Amoy's Collar").rarity('alexscaves:nuclear')
    e.create('minecraft:nether_star_shard').texture('kubejs:item/nether_star_shard').displayName("Nether Star Shard").rarity('UNCOMMON').fireResistant()
  })

  StartupEvents.registry('item', e => {
    e.create('rootoffear:agitated_primitive_heart').texture('kubejs:item/heart_crystal').displayName("Agitated Primitive Heart").rarity('RARE')
    e.create('alexscaves:brainiac_greymatter').texture('kubejs:item/heart_crystal').displayName("Brainiac Greymatter")

  })

    StartupEvents.registry('item', event => {
      event.create('exsanguination:disc_fragment_void')
        .displayName("Disc Fragment")
        .texture('kubejs:item/disc_fragment_void')
        .rarity('UNCOMMON')
        })

        StartupEvents.registry('item', event => {
          event.create('spelunkers_charm:bedrock_rock')
            .displayName("Bedrock Rock")
            .texture('kubejs:item/bedrock_rock')
            .rarity('UNCOMMON')
            })

  StartupEvents.registry('item', e => {
    e.create('domesticationinnovation:motchi_collar').texture('kubejs:item/eatable_tag').displayName("Motchi's Collar").rarity('alexscaves:sweet').food(food => {
        food
          .hunger(1.5)
          .saturation(2.5) // This value does not directly translate to saturation points gained
          .effect('minecraft:instant_damage',1,0,1.0)
          .effect('alexscaves:sugar_rush',600,0,1.0)
          .alwaysEdible()
          .eaten(ctx => {
              ctx.player.give(Item.of('domesticationinnovation:collar_tag', "{display:{Name:'{\"bold\":false,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false,\"color\":\"#FFFFFF\",\"text\":\"Motchi\"}'}}").enchant('domesticationinnovation:intimidation', 2).enchant('domesticationinnovation:blight_curse', 1))
          })
        }).useAnimation("drink");
  })

  StartupEvents.registry('item', e => {
    e.create('domesticationinnovation:piro_collar').texture('kubejs:item/water_tag').displayName("Piro's Collar").rarity('UNCOMMON')

  })


  /**
   * @file Custom music disc item generation. Disc lang generation can be found in client_scripts.
   * @author Prunoidae <https://github.com/Prunoideae> Original script author
   * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
   */

  // ignored: false
  const musicDiscProperties = {
    voidlit_nether: { duration: 112, output: 4, disc_texture: 'kubejs:item/music_disc_voidlit' }
  }
  let musicDisc = [
    'voidlit_nether'
  ]

  StartupEvents.registry('sound_event', event => {
    for (let element of musicDisc) {
      event.create(element)
    }
  })

  StartupEvents.registry('item', event => {
    for (let element of musicDisc) {
      event.create(`exsanguination:music_disc_${element}`, 'music_disc')
        .song(`kubejs:${element}`, musicDiscProperties[element].duration)
        .analogOutput(musicDiscProperties[element].output)
        .texture(musicDiscProperties[element].disc_texture)
        .tag('minecraft:music_discs')
        .rarity('UNCOMMON')
    }
  })


StartupEvents.registry('item', event => {
    event.create("archeological:netherite_charm")
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute("minecraft:generic.armor","4918e2e0-24f6-4d72-8972-337a9a3c4ed8",4,"addition")
                .addAttribute("minecraft:generic.armor_toughness","43f3c405-4e00-486c-a889-60a1ebb760c7",4,"addition")
                .addAttribute("minecraft:generic.knockback_resistance", "d49fd0bc-e8c9-447a-b58b-03461ec11193", 0.1, "addition")
        )
        .maxStackSize(1)
        .tag("curios:charm")
})

StartupEvents.registry('item', e => {
  e.create('alexscavesdelight:filled_heart_of_iron').texture('kubejs:item/filled_heart_of_iron').displayName('Baked Heart Of Iron')
   .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute("forge:entity_gravity","a55eeb46-b7cf-4c11-8ff8-1e8ab1f17095",-0.05,"addition")
        )
  .rarity('UNCOMMON')
})

StartupEvents.registry('item', e => {
  e.create('none').texture('kubejs:item/nothing').displayName('§7None')
})

StartupEvents.registry('item', e => {
  e.create('rootoffear:wraithfull_plating').texture('kubejs:item/wraith_padding').displayName('Wraithfull Padding')
})

StartupEvents.registry('item', e => {
  e.create('sculkhorde:diascite_layered_padding').texture('kubejs:item/diascite_layered_padding').displayName('Diascite Padding')
})

StartupEvents.registry('item', event => {
    event.create('scalinghealth:enchanted_medkit')
    .texture('scalinghealth:item/enchanted_medkit')
    .displayName('Enchanted Medkit')
    .useAnimation('bow')
    .useDuration(itemstack => 100)
    .maxDamage(8)
    .use((level, player, hand) => true)
    .finishUsing((itemstack, level, entity) => {
      const effects = entity.potionEffects 
      effects.add('minecraft:instant_health', 1)
      effects.add('minecraft:absorption', 100)
      itemstack.setDamageValue(itemstack.damageValue + 1)
      return itemstack
    })
})
// I know it's not original but it's a fix for the unconsumeable bug
StartupEvents.registry('item', e => {
  e.create('luminous_nether:crimson_flesh_2').texture('luminous_nether:item/crimsonflesh_2').displayName('Crimson Flesh')
})
/*
StartupEvents.registry('item', e => {
  e.create('spartanweaponry:faded_cestus').model('kubejs:item/studded_cestus').displayName('Faded Cestus')
})
*/


StartupEvents.registry('item', e => {
  e.create('luminous_monsters:frozen_flesh').texture('kubejs:item/frozenflesh').displayName('Frozen Flesh')
})

StartupEvents.registry('item', e => {
  e.create('minecraft:wither_bone').texture('kubejs:item/wither_bone').displayName('Wither Bone')
})

StartupEvents.registry('item', e => {
  e.create('minecraft:diamond_nugget').texture('kubejs:item/diamond_nugget').displayName('Diamond Nugget')
})

StartupEvents.registry('item', e => {
  e.create('alexscaves:incomplete_raygun', 'create:sequenced_assembly').texture('alexscaves:item/raygun').displayName('Incomplete Raygun')
})
StartupEvents.registry('item', e => {
  e.create('jeg:incomplete_ammo_box', 'create:sequenced_assembly').texture('jeg:item/ammo_box').displayName('Incomplete Ammo Box')
})
StartupEvents.registry('item', e => {
  e.create('jeg:incomplete_flamethrower', 'create:sequenced_assembly').texture('jeg:item/flamethrower').displayName('Incomplete Flamethrower')
})

StartupEvents.registry('block', event => {
  event.create('alexscaves:polymer_block')
    .displayName('Block Of Polymers')
    .soundType('metal')
    .hardness(2.5)
    .resistance(2)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .slipperiness(0.8)
    .textureAll('kubejs:block/polymer_block')
})


StartupEvents.registry('block', event => {
  event.create('minecraft:diamond_ingot_block')
    .displayName('Block Of Metalic Diamonds')
    .soundType('metal')
    .hardness(3.5)
    .resistance(8)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .textureAll('kubejs:block/diamond_block')
})

StartupEvents.registry('block', event => {
  event.create('create:bronze_block')
    .displayName('Block Of Bronze')
    .soundType('metal')
    .hardness(3.5)
    .resistance(2)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .textureAll('kubejs:block/bronze_block')
})


StartupEvents.registry('block', event => {
  event.create('rootoffear:faded_oak_leaves')
    .displayName('Faded Oak Leaves')
    .soundType('CHERRY_LEAVES')
    .hardness(1)
    .resistance(1)
    .requiresTool(true)
    .speedFactor(0.8)
    .tagBlock("mineable/shears")
    .tagBlock("minecraft/hoes")
    .textureAll('kubejs:block/faded_oak_leaves')
    .notSolid()
    .renderType('cutout')
    .waterlogged()
})
ItemEvents.modification(event => {
  event.modify('rootoffear:faded_oak_leaves', item => {
    item.burnTime = 16000
  })
  event.modify('rootoffear:faded_oak_planks', item => {
    item.burnTime = 16000
  })
  event.modify('rootoffear:faded_oak_stairs', item => {
    item.burnTime = 16000
  })
  event.modify('rootoffear:faded_oak_slab', item => {
    item.burnTime = 8000
  })
  event.modify('rootoffear:faded_oak_button', item => {
    item.burnTime = 2000
  })
  event.modify('rootoffear:faded_oak_pressure_plate', item => {
    item.burnTime = 4000
  })
  event.modify('rootoffear:faded_oak_fence_gate', item => {
    item.burnTime = 6500
  })
  event.modify('rootoffear:faded_oak_fence', item => {
    item.burnTime = 6500
  })
})



StartupEvents.registry('block', event => {
  event.create('rootoffear:faded_oak_planks')
    .displayName('Faded Oak Planks')
    .soundType('wood')
    .hardness(2)
    .resistance(2)
    .speedFactor(0.8)
    .tagBlock("mineable/axe")
    .textureAll('kubejs:block/faded_oak_planks')
})

StartupEvents.registry('block', event => {
  event.create('rootoffear:faded_oak_stairs', 'stairs')
    .displayName('Faded Oak Stairs')
    .soundType('wood')
    .hardness(2)
    .resistance(2)
    .speedFactor(0.8)
    .tagBlock("mineable/axe")
    .tagBlock("alexscaves:grows_mussels")
    .tagBlock("minecraft:wooden_stairs")
    .tagBlock("jeg:wood")
    .textureAll('kubejs:block/faded_oak_planks')
})


StartupEvents.registry('block', event => {
  event.create('rootoffear:faded_oak_slab', 'slab')
    .displayName('Faded Oak Slab')
    .soundType('wood')
    .hardness(2)
    .resistance(2)
    .speedFactor(0.8)
    .tagBlock("mineable/axe")
    .tagBlock("alexscaves:grows_mussels")
    .tagBlock("minecraft:wooden_slabs")
    .tagBlock("jeg:wood")
    .textureAll('kubejs:block/faded_oak_planks')
})

StartupEvents.registry('block', event => {
  event.create('rootoffear:faded_oak_button', 'button')
    .displayName('Faded Oak Button')
    .soundType('wood')
    .hardness(2)
    .resistance(2)
    .speedFactor(0.8)
    .tagBlock("mineable/axe")
    .tagBlock("minecraft:wooden_button")
    .tagBlock("create:wrench_pickup")
    .textureAll('kubejs:block/faded_oak_planks')
})

StartupEvents.registry('block', event => {
  event.create('rootoffear:faded_oak_pressure_plate', 'pressure_plate')
    .displayName('Faded Oak Pressure Plate')
    .soundType('wood')
    .hardness(2)
    .resistance(2)
    .speedFactor(0.8)
    .tagBlock("mineable/axe")
    .tagBlock("minecraft:wooden_pressure_plates")
    .tagBlock("create:wrench_pickup")
    .textureAll('kubejs:block/faded_oak_planks')
})

StartupEvents.registry('block', event => {
  event.create('rootoffear:faded_oak_fence_gate', 'fence_gate')
    .displayName('Faded Oak Fence Gate')
    .soundType('wood')
    .hardness(2)
    .resistance(2)
    .speedFactor(0.8)
    .tagBlock("mineable/axe")
    .tagBlock("jeg:wood")
    .tagBlock("railways:semaphore_poles")
    .tagBlock("forge:fence_gates/wooden")
    .textureAll('kubejs:block/faded_oak_planks')
})


StartupEvents.registry('block', event => {
  event.create('rootoffear:faded_oak_fence', 'fence')
    .displayName('Faded Oak Fence')
    .soundType('wood')
    .hardness(2)
    .resistance(2)
    .speedFactor(0.8)
    .tagBlock("mineable/axe")
    .tagBlock("jeg:wood")
    .tagBlock("railways:semaphore_poles")
    .tagBlock("minecraft:wooden_fences")
    .textureAll('kubejs:block/faded_oak_planks')
})



StartupEvents.registry('block', event => {
  event.create('sculkhorde:mite_egg_2')
    .displayName('Mite Egg')
    .soundType('SHROOMLIGHT')
    .model("kubejs:block/pedestiran_egg_2")
    .defaultTranslucent()
    .noItem()
    .tagBlock("mineable/shears")
    .tagBlock("mineable/axe")
    .tagBlock("minecraft/hoes")
    .noValidSpawns(true)
    .hardness(4)
    .box(3.0, 0.0, 3.0, 13.0, 15.0, 13.0)
    .randomTick(ctx=>{
      const { block, level, entity } = ctx
      if(Math.random()<0.5){
          if (block.down.id != "alexscaves:amber"){
          level.spawnParticles('minecraft:happy_villager', true, block.x, block.y, block.z, 0, 0, 0, 3, 0.4);
          level.destroyBlock(block, false)
          block.createEntity('sculkhorde:sculk_mite_aggressor').spawn()
          block.createEntity('sculkhorde:sculk_mite_aggressor').spawn()
          if(Math.random()<0.5){
          block.createEntity('sculkhorde:sculk_mite_aggressor').spawn()
          block.createEntity('sculkhorde:sculk_mite_aggressor').spawn()
      }}
    }
})
})

//       if(Math.random()<0.99 && ){
StartupEvents.registry('block', event => {
  event.create('sculkhorde:mite_egg')
    .displayName('Mite Egg')
    .soundType('CORAL_BLOCK')
    .tagBlock("mineable/shears")
    .tagBlock("mineable/axe")
    .tagBlock("minecraft/hoes")
    .model("kubejs:block/pedestrian_egg")
    .noValidSpawns(true)
    .hardness(90)
    .box(4.0, 0.0, 4.0, 12.0, 14.0, 12.0)
    .item((item) => {
    item.modelJson({
        parent: "kubejs:item/pedestrian_egg",
    })})
    .randomTick(ctx=>{
      if(Math.random()<0.6){
      const { block, level } = ctx
      if (block.down.id != "alexscaves:amber"){
      level.spawnParticles('minecraft:happy_villager', true, block.x, block.y, block.z, 0, 0, 0, 3, 0.4);
      block.set('sculkhorde:mite_egg_2');
      }
      }
      })
})

StartupEvents.registry('block', event => {
event.create('rootoffear:faded_oak_wood')
  .displayName('Faded Oak Wood')
  .soundType('wood')
  .hardness(8.5)
  .resistance(11)
  .requiresTool(false)
  .tagBlock("mineable/axe")
  .tagBlock("minecraft:planks")
  .tagBlock("alexscaves:grows_mussels")
  .textureAll('kubejs:block/faded_oak_log_middle')
  .speedFactor(0.5)
})

StartupEvents.registry('block', event => {
event.create('rootoffear:faded_oak_wood_corrupt1')
  .displayName('Faded Oak Wood')
  .soundType('wood')
  .hardness(0.5)
  .noDrops()
  .resistance(3)
  .requiresTool(false)
  .noItem()
  .tagBlock("mineable/axe")
  .tagBlock("minecraft:logs")
  .tagBlock("minecraft:logs_that_burn")
  .tagBlock("alexscaves:grows_mussels")
  .textureAll('kubejs:block/faded_corruption_1')
  .speedFactor(0.9)
})

StartupEvents.registry('block', event => {
event.create('rootoffear:faded_oak_wood_corrupt2')
  .displayName('Faded Oak Wood')
  .soundType('wood')
  .noDrops()
  .hardness(2.5)
  .resistance(5)
  .requiresTool(false)
  .noItem()
  .tagBlock("mineable/axe")
  .tagBlock("minecraft:logs")
  .tagBlock("minecraft:logs_that_burn")
  .tagBlock("alexscaves:grows_mussels")
  .textureAll('kubejs:block/faded_corruption_2')
  .speedFactor(0.8)
})


StartupEvents.registry('block', event => {
event.create('rootoffear:faded_oak_wood_corrupt3')
  .displayName('Faded Oak Wood')
  .soundType('wood')
  .hardness(4.5)
  .resistance(7)
  .noDrops()
  .requiresTool(false)
  .noItem()
  .tagBlock("mineable/axe")
  .tagBlock("minecraft:logs")
  .tagBlock("minecraft:logs_that_burn")
  .tagBlock("alexscaves:grows_mussels")
  .textureAll('kubejs:block/faded_corruption_3')
  .speedFactor(0.7)
})

StartupEvents.registry('block', event => {
event.create('rootoffear:stripped_faded_oak_wood')
  .displayName('Stripped Faded Oak Wood')
  .soundType('wood')
  .hardness(6.5)
  .resistance(9)
  .requiresTool(false)
  .tagBlock("mineable/axe")
  .tagBlock("minecraft:logs")
  .tagBlock("minecraft:logs_that_burn")
  .tagBlock("alexscaves:grows_mussels")
  .textureAll('kubejs:block/faded_oak_log_middle_stripped')
  .speedFactor(0.6)
})


// Halex's script from discord yay
StartupEvents.registry('block', event => {
event.create('rootoffear:faded_oak_log')
  .displayName('Faded Oak Log')
  .soundType('wood')
  .hardness(8.5)
  .resistance(11)
  .requiresTool(false)
  .property(BlockProperties.AXIS)
  .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
  .tagBlock("mineable/axe")
  .tagBlock("minecraft:logs")
  .tagBlock("minecraft:logs_that_burn")
  .tagBlock("alexscaves:grows_mussels")
  .speedFactor(0.5)
  .model('kubejs:block/faded_oak_log')
  .blockstateJson =
  {
      "variants": {
          "axis=x": {
              "model": "kubejs:block/faded_oak_log",
              "x": 90,
              "y": 90
          },
          "axis=y": {
              "model": "kubejs:block/faded_oak_log"
          },
          "axis=z": {
              "model": "kubejs:block/faded_oak_log",
              "x": 90
          }
      }
  }
})
StartupEvents.registry('block', event => {
event.create('rootoffear:faded_oak_log_phase3')
  .displayName('Faded Oak Log')
  .soundType('wood')
  .hardness(4.5)
  .resistance(7)
  .noItem()
  .noDrops()
  .requiresTool(false)
  .property(BlockProperties.AXIS)
  .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
  .tagBlock("mineable/axe")
  .tagBlock("minecraft:logs")
  .tagBlock("alexscaves:grows_mussels")
  .tagBlock("minecraft:logs_that_burn")
  .speedFactor(0.7)
  .model('kubejs:block/corrupt_3')
  .blockstateJson =
  {
      "variants": {
          "axis=x": {
              "model": "kubejs:block/corrupt_3",
              "x": 90,
              "y": 90
          },
          "axis=y": {
              "model": "kubejs:block/corrupt_3"
          },
          "axis=z": {
              "model": "kubejs:block/corrupt_3",
              "x": 90
          }
      }
  }
})

StartupEvents.registry('block', event => {
event.create('rootoffear:faded_oak_log_phase2')
  .displayName('Faded Oak Log')
  .soundType('wood')
  .hardness(2.5)
  .noItem()
  .noDrops()
  .resistance(5)
  .requiresTool(false)
  .property(BlockProperties.AXIS)
  .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
  .tagBlock("mineable/axe")
  .tagBlock("minecraft:logs")
  .tagBlock("alexscaves:grows_mussels")
  .tagBlock("minecraft:logs_that_burn")
  .speedFactor(0.8)
  .model('kubejs:block/corrupt_2')
  .blockstateJson =
  {
      "variants": {
          "axis=x": {
              "model": "kubejs:block/corrupt_2",
              "x": 90,
              "y": 90
          },
          "axis=y": {
              "model": "kubejs:block/corrupt_2"
          },
          "axis=z": {
              "model": "kubejs:block/corrupt_2",
              "x": 90
          }
      }
  }
})

StartupEvents.registry('block', event => {
event.create('rootoffear:faded_oak_log_phase1')
  .displayName('Faded Oak Log')
  .soundType('wood')
  .hardness(0.5)
  .noItem()
  .noDrops()
  .resistance(3)
  .requiresTool(false)
  .property(BlockProperties.AXIS)
  .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
  .tagBlock("mineable/axe")
  .tagBlock("minecraft:logs")
  .tagBlock("minecraft:logs_that_burn")
  .tagBlock("alexscaves:grows_mussels")
  .speedFactor(0.9)
  .model('kubejs:block/corrupt_1')
  .blockstateJson =
  {
      "variants": {
          "axis=x": {
              "model": "kubejs:block/corrupt_1",
              "x": 90,
              "y": 90
          },
          "axis=y": {
              "model": "kubejs:block/corrupt_1"
          },
          "axis=z": {
              "model": "kubejs:block/corrupt_1",
              "x": 90
          }
      }
  }
})


StartupEvents.registry('block', event => {
event.create('rootoffear:stripped_faded_oak_log')
  .displayName('Stripped Faded Oak Log')
  .soundType('wood')
  .hardness(6.5)
  .resistance(12)
  .requiresTool(false)
  .property(BlockProperties.AXIS)
  .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
  .tagBlock("mineable/axe")
  .tagBlock("minecraft:logs")
  .tagBlock("alexscaves:grows_mussels")
  .tagBlock("minecraft:logs_that_burn")
  .speedFactor(0.6)
  .model('kubejs:block/stripped_faded_oak_log')
  .blockstateJson =
  {
      "variants": {
          "axis=x": {
              "model": "kubejs:block/stripped_faded_oak_log",
              "x": 90,
              "y": 90
          },
          "axis=y": {
              "model": "kubejs:block/stripped_faded_oak_log"
          },
          "axis=z": {
              "model": "kubejs:block/stripped_faded_oak_log",
              "x": 90
          }
      }
  }
})

/*
BlockEvents.modification((event) => {
  Blocks.FIRE.invokeSetFlammable('rootoffear:faded_oak_log', 10, 60)
  Blocks.FIRE.invokeSetFlammable('rootoffear:faded_oak_slab', 10, 60)
  Blocks.FIRE.invokeSetFlammable('rootoffear:faded_oak_stairs', 10, 60)
  Blocks.FIRE.invokeSetFlammable('rootoffear:faded_oak_leaves', 10, 60)
  Blocks.FIRE.invokeSetFlammable('rootoffear:faded_oak_planks', 10, 60)
  Blocks.FIRE.invokeSetFlammable('rootoffear:faded_oak_wood', 10, 60)
  Blocks.FIRE.invokeSetFlammable('rootoffear:faded_oak_log_phase1', 10, 60)
  Blocks.FIRE.invokeSetFlammable('rootoffear:faded_oak_log_phase2', 10, 60)
  Blocks.FIRE.invokeSetFlammable('rootoffear:faded_oak_log_phase3', 10, 60)
  Blocks.FIRE.invokeSetFlammable('rootoffear:faded_oak_wood_corrupt3', 10, 60)
  Blocks.FIRE.invokeSetFlammable('rootoffear:faded_oak_wood_corrupt2', 10, 60)
  Blocks.FIRE.invokeSetFlammable('rootoffear:faded_oak_wood_corrupt1', 10, 60)
  Blocks.FIRE.invokeSetFlammable('rootoffear:stripped_faded_oak_wood', 10, 60)
  Blocks.FIRE.invokeSetFlammable('rootoffear:stripped_faded_oak_log', 10, 60)
  Blocks.FIRE.invokeSetFlammable('rootoffear:faded_oak_button', 10, 60)
  Blocks.FIRE.invokeSetFlammable('rootoffear:faded_oak_pressure_plate', 10, 60)
  Blocks.FIRE.invokeSetFlammable('rootoffear:faded_oak_fence_gate', 10, 60)
  Blocks.FIRE.invokeSetFlammable('rootoffear:faded_oak_fence', 10, 60)
});
*/
StartupEvents.registry('item', e => {
e.create('alexsmobs:gazelle_horns','anim_helmet')
.geoModel(geo => {
geo.setSimpleModel('geckojs:geo/armor/gazelle_horns.geo.json')
geo.setSimpleTexture('geckojs:textures/armor/gazelle_horns.png')
})
.boneVisibility((renderer, slot) => {
renderer.setAllVisible(false);

if (slot == "head") {
renderer.setBoneVisible(renderer.getHeadBone(), true);
}}).tier("headwear").texture('kubejs:item/gazelle_horns');
})


ItemEvents.armorTierRegistry((event) => {
  event.add("headwear", (tier) => {
  tier.durabilityMultiplier = 5;
  tier.slotProtections = [1, 1, 1, 1];
  tier.toughness= 4;
  tier.enchantmentValue = 15;
  tier.repairIngredient ="minecraft:string";
  })
});


StartupEvents.registry("item", (e) => {
    e.create("alexsmobs:spectral_dagger", "farmersdelight:knife")
        .texture('kubejs:item/spectral_dagger')
        .rarity("EPIC")
        .tier("spectral")
        .displayName("Spectral Dagger")

});

StartupEvents.registry("item", (e) => {
    e.create("minecraft:arrow_fletching")
        .texture('kubejs:item/fletching')
        .displayName("Arrow Fletching")

});

ItemEvents.toolTierRegistry(event => {
  event.add('spectral', tier => {
    tier.uses = 500
    tier.speed = 1.0
    tier.attackDamageBonus = 0.5
    tier.level = 2
    tier.enchantmentValue = 25
  })
})


StartupEvents.registry('item', e => {
  e.create('jeg:incomplete_blossom_rifle', 'create:sequenced_assembly').texture('jeg:item/blossom_rifle').displayName('Incomplete Blossom Rifle')
})

StartupEvents.registry('item', e => {
  e.create('netherexp:incomplete_shotgun_fist', 'create:sequenced_assembly').texture('netherexp:item/shotgun_fist').displayName('Incomplete Shotgun Fist')
})

StartupEvents.registry('item', e => {
  e.create('spelunkery:incomplete_rough_diamond_shard', 'create:sequenced_assembly').texture('spelunkery:item/rough_diamond_shard').displayName('Incomplete Shotgun Fist')
})

StartupEvents.registry('item', e => {
  e.create('deeperdarker:sliced_heart_of_the_deep').texture('kubejs:item/sliced_heart_of_the_deep').displayName('Sliced Heart Of The Deep')
  .rarity('UNCOMMON')
})

StartupEvents.registry('item', e => {
  e.create('create:diamond_sheet').texture('kubejs:item/diamond_sheet').displayName('Diamond Plate')
})

StartupEvents.registry('item', e => {
  e.create('create:bronze_ingot').texture('kubejs:item/bronze_ingot').displayName('Bronze Ingot')
  .rarity('COMMON')
})

StartupEvents.registry('item', e => {
  e.create('create:bronze_nugget').texture('kubejs:item/bronze_nugget').displayName('Bronze Nugget')
  .rarity('COMMON')
})

StartupEvents.registry('item', e => {
  e.create('alexscaves:totem_of_regeneration').texture('kubejs:item/totem_of_regeneration').displayName('Amulet Of Regeneration')
  .rarity('EPIC')
})


StartupEvents.registry('item', e => {
  e.create('deeperdarker:resonarium_upgrade_smithing_template').texture('kubejs:item/resonarium_upgrade_smithing_template').displayName('Smithing Template')
  .rarity('COMMON')
  .tooltip('§7Resonarium Upgrade')
  .tooltip('')
  .tooltip('§7Applies To:')
  .tooltip(' §9Iron Equipment')
  .tooltip('§7Ingredient:')
  .tooltip(' §9Resonarium Plate')
})

StartupEvents.registry('item', e => {
  e.create('minecraft:nether_brick_template').texture('kubejs:item/netherwart_trim').displayName('Nether Smithing Template')
  .rarity('COMMON')
  .tooltip('§7Brick Trim Template')
})
StartupEvents.registry('item', e => {
  e.create('minecraft:deepslate_template').texture('kubejs:item/deepslate_trim').displayName('Smithing Template')
  .rarity('COMMON')
  .tooltip('§7Deepslate Trim Template')
})
StartupEvents.registry('item', e => {
  e.create('minecraft:stone_trim_template').texture('kubejs:item/stone_trim').displayName('Smithing Template')
  .rarity('COMMON')
  .tooltip('§7Stone Trim Template')
})
StartupEvents.registry('item', e => {
  e.create('minecraft:terracotta_trim_template').texture('kubejs:item/terracota_trim').displayName('Smithing Template')
  .rarity('COMMON')
  .tooltip('§7Terracotta Smithing Template')
})
StartupEvents.registry('item', e => {
  e.create('alexscaves:galena_trim_template').texture('kubejs:item/galena_trim').displayName('Smithing Template')
  .rarity('COMMON')
  .tooltip('§7Galena Trim Template')
})
StartupEvents.registry('item', e => {
  e.create('minecraft:blackstone_trim_template').texture('kubejs:item/blackstone_trim').displayName('Smithing Template')
  .rarity('COMMON')
  .tooltip('§7Blackstone Trim Template')
})
StartupEvents.registry('item', e => {
  e.create('minecraft:sandstone_trim_template').texture('kubejs:item/sandstone_trim').displayName('Smithing Template')
  .rarity('COMMON')
  .tooltip('§7Sandstone Trim Template')
})
StartupEvents.registry('item', e => {
  e.create('minecraft:endstone_trim_template').texture('kubejs:item/endstone_trim').displayName('Smithing Template')
  .rarity('COMMON')
  .tooltip('§7End Stone Trim Template')
})
StartupEvents.registry('item', e => {
  e.create('minecraft:purpur_trim_template').texture('kubejs:item/purpur_trim').displayName('Smithing Template')
  .rarity('COMMON')
  .tooltip('§7Purpur Trim Template')
})
StartupEvents.registry('item', e => {
  e.create('trials:copper_trim_template').texture('kubejs:item/copper_trim').displayName('Smithing Template')
  .rarity('COMMON')
  .tooltip('§7Copper Trim Template')
})
StartupEvents.registry('item', e => {
  e.create('trials:breeze_trim_template').texture('kubejs:item/breeze_trim').displayName('Smithing Template')
  .rarity('COMMON')
  .tooltip('§7Breeze Trim Template')
})
StartupEvents.registry('item', e => {
  e.create('luminous_nether:fungi_trim_template').texture('kubejs:item/fungi_trim').displayName('Smithing Template')
  .rarity('COMMON')
  .tooltip('§7Fungi Trim Template')
})
StartupEvents.registry('item', e => {
  e.create('luminous_nether:deadstone_trim_template').texture('kubejs:item/deadstone_trim').displayName('Smithing Template')
  .rarity('COMMON')
  .tooltip('§7Ash Trim Template')
})
StartupEvents.registry('item', e => {
  e.create('minecraft:prismarine_trim_template').texture('kubejs:item/prismarine_trim').displayName('Smithing Template')
  .rarity('COMMON')
  .tooltip('§7Prismarine Trim Template')
})

StartupEvents.registry('item', e => {
  e.create('minecraft:flint_shears','shears').texture('kubejs:item/flint_shears').displayName('Flint Shears').maxDamage('45')

})

StartupEvents.registry('item', e => {
  e.create('minecraft:leather_padding').texture('kubejs:item/leather_padding').displayName('Leather Padding')

})

StartupEvents.registry('item', e => {
  e.create('minecraft:diamond_layered_padding').texture('kubejs:item/diamond_layered_padding').displayName('Diamond Layered Padding')

})

StartupEvents.registry('item', event => {
  event.create('vinery:stinky_wine').texture('kubejs:item/stinky_wine').food(food => {
    food
      .hunger(0.5)
      .saturation(0.5)
      .effect('alexsmobs:mosquito_repellent',9000,0,1.0)
      .effect('alexsmobs:exsanguination',195,0,1.0)
      .effect('minecraft:nausea',205,0,1.0)
      .effect('luminous_nether:hemorrhage',195,0,1.0)
      .alwaysEdible()
      .eaten(ctx => {
          ctx.player.give('vinery:wine_bottle')
          ctx.player.give('quark:clear_shard')
          ctx.player.give('quark:clear_shard')
          ctx.player.give('quark:clear_shard')
          ctx.player.give('quark:clear_shard')
          ctx.player.give('quark:clear_shard')
          ctx.player.give('quark:clear_shard')
          ctx.player.give('quark:clear_shard')
          ctx.player.give('quark:clear_shard')
          ctx.player.give('quark:clear_shard')
          ctx.player.give('quark:clear_shard')
          ctx.player.give('quark:clear_shard')
          ctx.player.give('quark:clear_shard')
      })
    }).useAnimation("drink");
})

StartupEvents.registry('item', event => {
  event.create('rootoffear:wilted_stew').texture('kubejs:item/wilted_stew').displayName("Wilted Stew").food(food => {
    food
      .hunger(4)
      .saturation(2)
      .effect('minecraft:health_boost',4000,5,1.0)
      .effect('minecraft:mining_fatigue',2000,2,1.0)
      .effect('minecraft:nausea',300,0,1.0)
      .alwaysEdible()
      .eaten(ctx => {
          ctx.player.give('spelunkery:tangled_roots')
          ctx.player.give('minecraft:bowl')
      })
    }).useAnimation("drink");
})


StartupEvents.registry('item', e => {
  e.create('minecraft:gold_layered_padding').texture('kubejs:item/gold_layered_padding').displayName('Gold Layered Padding')

})

StartupEvents.registry('item', e => {
  e.create('minecraft:iron_layered_padding').texture('kubejs:item/iron_layered_padding').displayName('Iron Layered Padding')
})

// Warden plates and leather stuff
StartupEvents.registry('item', e => {
  e.create('deeperdarker:warden_layered_padding').texture('kubejs:item/infested_padding').displayName('Warden Layered Padding').rarity('RARE')
})

StartupEvents.registry('item', e => {
  e.create('spartanweaponry:reinforced_handle').texture('kubejs:item/reinforced_handle').displayName('Reinforced Handle')
})

StartupEvents.registry('item', e => {
  e.create('spartanweaponry:ferriscite_handle').texture('kubejs:item/ferriscite_handle').displayName('Ominous Handle')
})

StartupEvents.registry('item', e => {
  e.create('deeperdarker:ferriscite_rod').texture('kubejs:item/ferriscite_handle').displayName('Ominous Rod')
})

StartupEvents.registry('item', e => {
  e.create('minecraft:gravity_joints').texture('kubejs:item/gravity_joints').displayName('Gravity Joints')
})


StartupEvents.registry('item', e => {
  e.create('sculkhorde:ferriscite_nugget').texture('kubejs:item/ferriscite_nugget').displayName('Ferriscite Nugget')
})

StartupEvents.registry('item', e => {
  e.create('biomesoplenty:flesh_chunk').texture('kubejs:item/flesh_chunk').displayName('Chunk of Flesh')
})

StartupEvents.registry('item', e => {
  e.create('biomesoplenty:cooked_flesh_chunk').texture('kubejs:item/cooked_flesh_chunk').displayName('Cooked Chunk Of Flesh')
})

// Resin + brains + diasculk + warden carapase for plateing
StartupEvents.registry('item', e => {
  e.create('sculkhorde:sculk_flesh').texture('kubejs:item/sculk_crystal').displayName('Sculk Flesh').food(food => {
      food
  .hunger(1)
  .saturation(2) // This value does not directly translate to saturation points gained
  .effect('sculkhorde:sculk_infected',150,0,1.0)
  .effect('sculkhorde:sculk_lure',250,1,1.0)
  .effect('minecraft:poison',100,0,1.0)
})})

StartupEvents.registry('item', e => {
  e.create('minecraft:diamond_ingot').texture('kubejs:item/diamond_ingot').displayName('Diamond Ingot')
})

StartupEvents.registry('item', e => {
  e.create('createbigcannons:dirty_guncotton').texture('kubejs:item/dirty_guncotton').displayName('Dirty Guncotton')
})
StartupEvents.registry('item', e => {
  e.create('minecraft:soul_starter').texture('kubejs:item/soul_starter').displayName('Soul Starter')
})
// Make the player double jump if they can
StartupEvents.registry('item', e => {
  e.create('archeological:ancient_socks').texture('kubejs:item/ancient_socks').displayName('Ancient Socks')
})

StartupEvents.registry('fluid', event => {
  event.create('toughasnails:purified_water')
    .thinTexture(0x31a4bc)
    .bucketColor(0x31a4bc)
    .displayName('Purified Water')
    .temperature(400)
    .noBucket()
    .translucent()
    .noBlock()
})

StartupEvents.registry('fluid', event => {
  event.create('toughasnails:charcoal_water')
    .thinTexture(0x2b261c)
    .bucketColor(0x2b261c)
    .displayName('Charcoal Mixed Water')
    .temperature(250)
    .translucent()
    .noBucket()
    .noBlock()
})

StartupEvents.registry('fluid', event => {
  event.create('toughasnails:dirty_water')
    .thinTexture(0x445444)
    .bucketColor(0x445444)
    .displayName('Dirty Water')
    .noBucket()
    .translucent()
    .noBlock()
})
