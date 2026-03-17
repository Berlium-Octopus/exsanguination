//The Unknown_Beast
WorldgenEvents.add(event => {
  event.addSpawn(spawnProperties => {
    spawnProperties.biomes = 'biomesoplenty:end_corruption';
    spawnProperties.category = ('monster'); // Adjust this according to Internal.MobCategory_
    spawnProperties.entity = 'sculkhorde:sculk_mite';
    spawnProperties.minCount = 1;
    spawnProperties.maxCount = 4;
    spawnProperties.weight = 100;
  });

  event.addSpawn(spawnProperties => {
    spawnProperties.biomes = 'minecraft:nether_wastes';
    spawnProperties.category = ('undead'); // Adjust this according to Internal.MobCategory_
    spawnProperties.entity = 'minecraft:zoglin';
    spawnProperties.minCount = 1;
    spawnProperties.maxCount = 4;
    spawnProperties.weight = 100;
  });

  event.addSpawn(spawnProperties => {
    spawnProperties.biomes = 'biomesoplenty:end_corruption';
    spawnProperties.setCategory('monster'); // Adjust this according to Internal.MobCategory_
    spawnProperties.setEntity('sculkhorde:sculk_mite_aggressor');
    spawnProperties.minCount = 1;
    spawnProperties.maxCount = 8;
    spawnProperties.weight = 100;
  });

  event.addSpawn(spawnProperties => {
    spawnProperties.biomes = 'yungscavebiomes:lost_caves';
    spawnProperties.setCategory('monster'); // Adjust this according to Internal.MobCategory_
    spawnProperties.setEntity('cataclysm:koboleton');
    spawnProperties.minCount = 1;
    spawnProperties.maxCount = 4;
    spawnProperties.weight = 80;
  });

  event.addSpawn(spawnProperties => {
    spawnProperties.biomes = 'yungscavebiomes:frosted_caves';
    spawnProperties.setCategory('monster'); // Adjust this according to Internal.MobCategory_
    spawnProperties.setEntity('alexsmobs:froststalker');
    spawnProperties.minCount = 1;
    spawnProperties.maxCount = 4;
    spawnProperties.weight = 20;
  });

  event.addSpawn(spawnProperties => {
    spawnProperties.biomes = 'biomesoplenty:end_corruption';
    spawnProperties.setCategory('monster'); // Adjust this according to Internal.MobCategory_
    spawnProperties.setEntity('minecraft:endermite');
    spawnProperties.minCount = 1;
    spawnProperties.maxCount = 10;
    spawnProperties.weight = 100;
  });

  event.addSpawn(spawnProperties => {
    spawnProperties.biomes = 'biomesoplenty:end_corruption';
    spawnProperties.setCategory('monster'); // Adjust this according to Internal.MobCategory_
    spawnProperties.setEntity('whiteenderman:white_enderman');
    spawnProperties.minCount = 1;
    spawnProperties.maxCount = 10;
    spawnProperties.weight = 10;
  });

  event.addSpawn(spawnProperties => {
    spawnProperties.biomes = 'biomesoplenty:end_corruption';
    spawnProperties.setCategory('monster'); // Adjust this according to Internal.MobCategory_
    spawnProperties.setEntity('sculkhorde:sculk_enderman');
    spawnProperties.minCount = 1;
    spawnProperties.maxCount = 1;
    spawnProperties.weight = 1;
  });

  event.addSpawn(spawnProperties => {
    spawnProperties.biomes = ['biomesoplenty:volcanic_plains','biomesoplenty:volcano'];
    spawnProperties.setCategory('monster'); // Adjust this according to Internal.MobCategory_
    spawnProperties.setEntity('minecraft:magma_cube');
    spawnProperties.minCount = 1;
    spawnProperties.maxCount = 3;
    spawnProperties.weight = 100;
  });
  event.addSpawn(spawnProperties => {
    spawnProperties.biomes = ['alexscaves:toxic_caves'];
    spawnProperties.setCategory('undead'); // Adjust this according to Internal.MobCategory_
    spawnProperties.setEntity('luminous_beasts:vile_gator');
    spawnProperties.minCount = 1;
    spawnProperties.maxCount = 1;
    spawnProperties.weight = 100;
  });

  event.addSpawn(spawnProperties => {
    spawnProperties.biomes = ['biomesoplenty:lavender_field'];
    spawnProperties.setCategory('passive'); // Adjust this according to Internal.MobCategory_
    spawnProperties.setEntity('alexsmobs:flutter');
    spawnProperties.minCount = 1;
    spawnProperties.maxCount = 3;
    spawnProperties.weight = 40;
  });
});