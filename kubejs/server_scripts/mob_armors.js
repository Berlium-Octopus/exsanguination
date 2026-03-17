//Credit to @ʇʎouıplɐuop (ping if you reply)
// working
    const blah = [
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
    "create:copper_diving_helmet",
    ];

    const bluh = [
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
    "create:copper_backtank"
    ];

    const blep = [
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
    "create:copper_diving_boots"
    ];
    const hanzo = [
      "spartanweaponry:copper_spear",
      "spartanweaponry:copper_spear",
      "spartanweaponry:bronze_spear",
      "minecraft:copper_sword",
      "minecraft:copper_sword",
      "minecraft:copper_sword",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air"
    ];
    let generateRandomBlah = armorArray => armorArray[Math.floor(armorArray.length * Math.random())]
    EntityEvents.spawned(event => {
        const entity = event.entity

        if (entity.type == 'minecraft:drowned') {
          if (entity.headArmorItem == 'minecraft:air') {
                entity.setItemSlot("head", generateRandomBlah(blah));
                }
                if (entity.chestArmorItem == 'minecraft:air') {
                entity.setItemSlot("chest", generateRandomBlah(bluh));
                }
                if (entity.feetArmorItem == 'minecraft:air') {
                entity.setItemSlot("feet", generateRandomBlah(blep));
                }
                if (entity.mainHandItem == 'minecraft:air') {
                    entity.setItemSlot("mainhand", generateRandomBlah(hanzo));
                }
        }
        }
    );

/*
  const helmetite = [
      "deeperdarker:resonarium_helmet",
      "deeperdarker:resonarium_helmet",
      "deeperdarker:resonarium_helmet",
      "deeperdarker:resonarium_helmet",
      "minecraft:diamond_helmet",
      "minecraft:iron_helmet",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air"
    ];

      const chestite = [
      "deeperdarker:resonarium_chestplate",
      "deeperdarker:resonarium_chestplate",
      "deeperdarker:resonarium_chestplate",
      "deeperdarker:resonarium_chestplate",
      "minecraft:diamond_chestplate",
      "minecraft:iron_chestplate",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air"
    ];

          const leggingstite = [
      "deeperdarker:resonarium_leggings",
      "deeperdarker:resonarium_leggings",
      "deeperdarker:resonarium_leggings",
      "deeperdarker:resonarium_leggings",
      "minecraft:diamond_leggings",
      "minecraft:iron_leggings",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air"
    ];

        const bootstite = [
      "deeperdarker:resonarium_boots",
      "deeperdarker:resonarium_boots",
      "deeperdarker:resonarium_boots",
      "deeperdarker:resonarium_boots",
      "minecraft:diamond_boots",
      "minecraft:iron_boots",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air"
    ];

      const planetofhands = [
      "deeperdarker:resonarium_sword",
      "deeperdarker:resonarium_sword",
      "deeperdarker:resonarium_sword",
      "spartandeeperdarker:resonarium_greatsword",
      "spartandeeperdarker:resonarium_warhammer",
      "spartandeeperdarker:resonarium_spear",
      "spartandeeperdarker:resonarium_dagger",
      Item.of('jeg:hypersonic_cannon', '{AmmoCount:32,Damage:0,DrawnTick:15,GeckoLibID:34L,IsDrawing:1b,IsDrawn:1b}').enchant('minecraft:vanishing_curse', 1),
      Item.of('jeg:subsonic_rifle', '{AmmoCount:32,Damage:0,DrawnTick:15,GeckoLibID:34L,IsDrawing:1b,IsDrawn:1b}').enchant('minecraft:vanishing_curse', 1),
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air",
      "minecraft:air"
    ];

    let generateresonarium = armorArray => armorArray[Math.floor(armorArray.length * Math.random())]
    EntityEvents.spawned(event => {
        const entity = event.entity

        if (entity.type == 'deeperdarker:shattered') {
          if (entity.headArmorItem == 'minecraft:air') {
                entity.setItemSlot("head", generateresonarium(helmetite));
                }
                if (entity.chestArmorItem == 'minecraft:air') {
                entity.setItemSlot("chest", generateRandomBlah(chestite));
                }
                if (entity.feetArmorItem == 'minecraft:air') {
                entity.setItemSlot("legs", generateRandomBlah(leggingstite));
                }
                if (entity.feetArmorItem == 'minecraft:air') {
                entity.setItemSlot("feet", generateRandomBlah(bootstite));
                }
                if (entity.mainHandItem == 'minecraft:air') {
                    entity.setItemSlot("mainhand", generateRandomBlah(planetofhands));
                }
        }
        }
    );
*/

//working
const guns = [
"minecraft:crossbow", //0
Item.of('jeg:revolver', '{AmmoCount:32,Damage:0,DrawnTick:15,GeckoLibID:34L,IsDrawing:1b,IsDrawn:1b}').enchant('jeg:over_capacity', 5) // 2
];
let generateRandomGuns = armorArray => armorArray[Math.floor(armorArray.length * Math.random())]
EntityEvents.spawned(event => {
    const entity = event.entity

    if (entity.type == 'biomemakeover:cowboy') {
        if (entity.mainHandItem == 'minecraft:crossbow') {
            entity.setItemSlot("mainhand", generateRandomGuns(guns));
            entity.setItemSlot("offhand", "minecraft:air");
        }
        if (entity.mainHandItem == 'minecraft:crossbow') {
            entity.setItemSlot("offhand", "12x oreganized:lead_bolt");
        }
        }
    });

// funtional
const vindic = [
"minecraft:iron_axe",
"minecraft:iron_axe",
"minecraft:iron_axe",
"minecraft:iron_axe",
"minecraft:iron_axe",
"minecraft:iron_axe",
"minecraft:iron_axe",
"minecraft:iron_axe",
Item.of('jeg:waterpipe_shotgun', '{AmmoCount:10,Damage:0,DrawnTick:15,GeckoLibID:37L,IsDrawing:1b,IsDrawn:1b}'),
"spartanweaponry:iron_battleaxe",
"spartanweaponry:iron_battleaxe",
"spartanweaponry:iron_battleaxe",
"spartanweaponry:silver_battleaxe",
"spartanweaponry:lead_battleaxe",
];
let generateRandomVuns = armorArray => armorArray[Math.floor(armorArray.length * Math.random())]
EntityEvents.spawned(event => {
    const entity = event.entity

    if (entity.type == 'minecraft:vindicator') {
      if (entity.mainHandItem == 'minecraft:iron_axe') {
            entity.setItemSlot("mainhand", generateRandomVuns(vindic));
      }
      }
  });

  EntityEvents.spawned(event => {
    const entity = event.entity
    if (entity.type == 'minecraft:creeper') {
      if (Math.random() > 0.8) {
        entity.potionEffects.add('luminous_nether:hemorrhage', 600, 0, true, false)
      }
      }
  })

let sculkaffinity = [
    'sculkhorde:sculk_enderman',
    'sculkhorde:sculk_spore_spewer',
    'sculkhorde:sculk_mite',
    'sculkhorde:sculk_sheep',
    'sculkhorde:sculk_mite_aggressor',
    'sculkhorde:sculk_bee_harvester',
    'sculkhorde:sculk_bee_infector',
    'sculkhorde:sculk_creeper',
    'sculkhorde:sculk_hatcher',
    'sculkhorde:sculk_ravager',
    'sculkhorde:sculk_spitter',
    'sculkhorde:sculk_vindicator',
    'sculkhorde:sculk_zombie',
    'minecraft:phantom',
    'sculkhorde:sculk_phantom_corpse',
    'sculkhorde:sculk_salmon',
    'sculkhorde:sculk_squid',
    'sculkhorde:sculk_pufferfish',
    'sculkhorde:sculk_witch',
    'sculkhorde:sculk_soul_reaper',
    'sculkhorde:sculk_vex',
    'deeperdarker:shattered',
    "deeperdarker:sculk_snapper"
]

  EntityEvents.spawned(event => {
    let {entity} = event
    if (sculkaffinity.toString().includes(entity.type)) {
      let INFINITE = Java.loadClass("java.lang.Integer").MAX_VALUE;
          entity.potionEffects.add("deeperdarker:sculk_affinity", INFINITE, 0, true, false)
    }
      })


  const vindicma = [
  "minecraft:bow",
  "minecraft:bow",
  "minecraft:bow",
  "minecraft:bow",
  "minecraft:bow",
  "minecraft:bow",
  "minecraft:bow",
  "spartanweaponry:silver_longbow",
  "spartanweaponry:aluminum_longbow",
  "spartanweaponry:invar_longbow",
  "spartanweaponry:iron_longbow",
  "spartanweaponry:iron_longbow",
  "spartanweaponry:iron_longbow",
  ];
  let generateRandomVunsma = armorArray => armorArray[Math.floor(armorArray.length * Math.random())]
  EntityEvents.spawned(event => {
      const entity = event.entity

      if (entity.type == 'trials:bogged') {
        if (entity.mainHandItem == 'minecraft:bow') {
              entity.setItemSlot("mainhand", generateRandomVunsma(vindicma));
        }
        }
    });

// funtional
const vindica = [
"minecraft:golden_axe",
"minecraft:golden_axe",
"minecraft:golden_axe",
"minecraft:golden_axe",
"minecraft:golden_axe",
"spartanweaponry:golden_battleaxe",
"spartanweaponry:golden_battleaxe",
"spartanweaponry:golden_battleaxe",
Item.of('jeg:hollenfire_mk2', '{AmmoCount:300,Damage:0,DrawnTick:15,GeckoLibID:36L,IsDrawing:1b,IsDrawn:1b}'),
Item.of('jeg:hollenfire_mk2', '{AmmoCount:900,Damage:0,DrawnTick:15,GeckoLibID:36L,IsDrawing:1b,IsDrawn:1b}'),
"spartanweaponry:electrum_battleaxe",
"spartanweaponry:electrum_battleaxe"
];
let generateRandomVunsa = armorArray => armorArray[Math.floor(armorArray.length * Math.random())]
EntityEvents.spawned(event => {
    const entity = event.entity

    if (entity.type == 'minecraft:piglin_brute') {
      if (entity.mainHandItem == 'minecraft:golden_axe') {
            entity.setItemSlot("mainhand", generateRandomVunsa(vindica));
      }
      }
  });

    const minnion = [
    "luminous_nether:gold_cultist_axe",
    "luminous_nether:gold_cultist_axe",
    "luminous_nether:gold_cultist_axe",
    "luminous_nether:gold_cultist_axe",
    "luminous_nether:gold_cultist_axe",
    "luminous_nether:gold_cultist_axe",
    "luminous_nether:gold_cultist_axe",
    "luminous_nether:gold_cultist_axe",
    "luminous_nether:gold_cultist_axe",
    "luminous_nether:gold_cultist_axe",
    "minecraft:golden_axe",
    "minecraft:golden_axe",
    "spartanweaponry:golden_battleaxe",
    "spartanweaponry:golden_battleaxe",
    "spartanweaponry:golden_battleaxe",
    Item.of('jeg:flare_gun', '{AmmoCount:4,Damage:0,DrawnTick:15,GeckoLibID:36L,IsDrawing:1b,IsDrawn:1b}'),
    Item.of('jeg:flare_gun', '{AmmoCount:8,Damage:0,DrawnTick:15,GeckoLibID:36L,IsDrawing:1b,IsDrawn:1b}'),
    Item.of('jeg:flare_gun', '{AmmoCount:16,Damage:0,DrawnTick:15,GeckoLibID:36L,IsDrawing:1b,IsDrawn:1b}'),
    Item.of('jeg:flare_gun', '{AmmoCount:24,Damage:0,DrawnTick:15,GeckoLibID:36L,IsDrawing:1b,IsDrawn:1b}'),
    ];
    let generateRandomminnion = armorArray => armorArray[Math.floor(armorArray.length * Math.random())]
    EntityEvents.spawned(event => {
        const entity = event.entity
        const level = event.level
        if (entity.type == 'luminous_nether:piglin_cultist') {
          if (entity.mainHandItem == 'luminous_nether:gold_cultist_axe') {
            entity.setItemSlot("mainhand", generateRandomminnion(minnion));

          }
          }
      });

// Liopyu
    EntityEvents.checkSpawn("luminous_nether:piglin_cultist", event => {
    let { entity } = event
    if(Math.random()<0.1){
    let newHoglin = entity.block.createEntity("minecraft:hoglin")
    if (!newHoglin.persistentData.IsCultist) newHoglin.persistentData.IsStabbed = 0
    newHoglin.spawn()
    newHoglin.persistentData.IsCultist == 1
    }
})

  const vindicalo = [
  "minecraft:golden_sword",
  "minecraft:golden_sword",
  "minecraft:golden_sword",
  "minecraft:golden_sword",
  "minecraft:golden_sword",
  "spartanweaponry:bronze_longsword",
  "spartanweaponry:electrum_longsword",
  "spartanweaponry:golden_longsword",
  "spartanweaponry:golden_longsword",
  "spartanweaponry:electrum_saber",
  "spartanweaponry:bronze_saber",
  "spartanweaponry:golden_saber",
  "spartanweaponry:golden_saber",
  "spartanweaponry:golden_saber",
  "spartanweaponry:electrum_saber"
  ];
  let generateRandomVunsaman = armorArray => armorArray[Math.floor(armorArray.length * Math.random())]
  EntityEvents.spawned(event => {
      const entity = event.entity

      if (entity.type == 'minecraft:piglin') {
        if (entity.mainHandItem == 'minecraft:golden_sword') {
              entity.setItemSlot("mainhand", generateRandomVunsaman(vindicalo));
        }
        }
      if (entity.type == 'minecraft:zombified_piglin') {
        if (entity.mainHandItem == 'minecraft:golden_sword') {
              entity.setItemSlot("mainhand", generateRandomVunsaman(vindicalo));
        }
        }
    });

  // Skeletron time
  //
  const uberia = [
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    Item.of('minecraft:tipped_arrow','{Potion:"potioncore:curse"}'),
    Item.of('minecraft:tipped_arrow','{Potion:"minecraft:slowness"}'),
    Item.of('minecraft:tipped_arrow', '{Potion:"biomemakeover:darkness"}'),
    Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:long_weakness"}'),
    Item.of('minecraft:tipped_arrow', '{Potion:"potioncore:long_fatigue"}'),
    Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:strong_poison"}'),
    Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:strong_harming"}'),
    Item.of('minecraft:tipped_arrow', '{Potion:"potioncore:long_broken_armor"}'),
    Item.of('minecraft:tipped_arrow', '{Potion:"potioncore:long_rust"}'),
    Item.of('minecraft:tipped_arrow', '{Potion:"potioncore:lightning"}'),
    Item.of('minecraft:tipped_arrow', '{Potion:"potioncore:perplexity"}'),
    Item.of('minecraft:tipped_arrow', '{Potion:"potioncore:spawn_teleport"}'),
    Item.of('minecraft:tipped_arrow', '{Potion:"potioncore:drown"}'),
    Item.of('minecraft:tipped_arrow', '{Potion:"potioncore:long_klutz"}'),
    Item.of('minecraft:tipped_arrow', '{Potion:"potioncore:long_vulnerable"}'),
    Item.of('minecraft:tipped_arrow', '{Potion:"alexscaves:strong_hunger"}')
  ];


    const rocketlauncher = [
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:air",
    "minecraft:firework_rocket",
    "minecraft:firework_rocket",
    "minecraft:firework_rocket",
    "minecraft:firework_rocket",
    "minecraft:firework_rocket",
    "minecraft:firework_rocket",
    "minecraft:firework_rocket"
  ];

  let generateRandomUber = armorArray => armorArray[Math.floor(armorArray.length * Math.random())]
  EntityEvents.spawned(event => {
      const entity = event.entity

      if (entity.type == 'minecraft:skeleton') {
      if (entity.mainHandItem == 'minecraft:bow') {
            entity.setItemSlot("offhand", generateRandomUber(uberia));
      }      
      if (entity.mainHandItem == 'spartanweaponry:leather_longbow') {
            entity.setItemSlot("mainhand", 'minecraft:bow');
      }
      if (entity.headArmorItem == 'spelunkers_charm:mining_helmet') {
            entity.setItemSlot("head", "spelunkers_charm:candle_helmet");
      }
    }
      if (entity.type == 'minecraft:pillager') {
        if (entity.mainHandItem == 'minecraft:crossbow') {
              entity.setItemSlot("offhand", generateRandomUber(rocketlauncher));

      }
      }
      if (entity.type == 'luminous_monsters:swamp_skeleton') {
              entity.setItemSlot("offhand", generateRandomUber(uberia));
        }
      if (entity.type == 'luminous_monsters:savanna_skeleton') {
              entity.setItemSlot("offhand", generateRandomUber(uberia));

      }
      if (entity.type == 'luminous_monsters:dark_oak_skeleton') {
              entity.setItemSlot("offhand", generateRandomUber(uberia));

      }
      if (entity.type == 'luminous_monsters:miner_skeleton') {
              entity.setItemSlot("offhand", generateRandomUber(uberia));

      }
      if (entity.type == 'luminous_monsters:glacial_skeleton') {
              entity.setItemSlot("offhand", generateRandomUber(uberia));

      }
      if (entity.type == 'luminous_nether:revenant_skeleton') {
              entity.setItemSlot("offhand", generateRandomUber(uberia));

      }
      }
  );

EntityEvents.spawned(event => {
    const entity = event.entity
    if (entity.type == 'minecraft:zombie') {
    if (entity.headArmorItem == 'spelunkers_charm:mining_helmet') {
          entity.setItemSlot("head", "spelunkers_charm:candle_helmet");
        }
    if (entity.mainHandItem == 'minecraft:stone_pickaxe') {
          entity.setItemSlot("mainhand", "minecraft:iron_pickaxe");
        }
    }
    }
);
