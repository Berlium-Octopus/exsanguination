// priority: 0

MoreJSEvents.registerPotionBrewing((event) => {
  event.addPotionBrewing("minecraft:feather", "minecraft:strength", "potioncore:archery");
}
)


MoreJSEvents.registerPotionBrewing((event) => {
  event.addPotionBrewing("alexsmobs:mimicream", "minecraft:awkward", "potioncore:extend");
}
);

MoreJSEvents.registerPotionBrewing((event) => {
  event.addPotionBrewing("luminous_nether:ghostly_essence", "minecraft:awkward", "potioncore:step_up");
}
);

MoreJSEvents.registerPotionBrewing((event) => {
  event.addPotionBrewing("quark:diamond_heart", "minecraft:awkward", "potioncore:diamond_skin");
}
);

MoreJSEvents.registerPotionBrewing((event) => {
  event.addPotionBrewing("alexscavesdelight:cooked_heart_of_iron", "minecraft:awkward", "potioncore:iron_skin");
  event.addPotionBrewing("minecraft:fermented_spider_eye", "potioncore:iron_skin", "potioncore:broken_armor");
}
);

MoreJSEvents.registerPotionBrewing((event) => {
  event.addCustomBrewing("sculkhorde:essence_of_purity",
    Item.of("minecraft:splash_potion", '{Potion: "potioncore:cure"}').weakNBT(),
    "sculkhorde:purification_flask")
}
)

MoreJSEvents.registerPotionBrewing((event) => {
  event.addPotionBrewing("minecraft:fermented_spider_eye", "minecraft:turtle_master", "potioncore:vulnerable");
}
)

// Possible Broken Code?
MoreJSEvents.registerPotionBrewing((event) => {
  event.addPotionBrewing("cataclysm:blessed_amethyst_crab_meat", "minecraft:awkward", "potioncore:cure");
}
)

MoreJSEvents.registerPotionBrewing((event) => {
  event.addPotionBrewing("minecraft:fermented_spider_eye", "potioncore:cure", "potioncore:curse");
}
)

MoreJSEvents.registerPotionBrewing((event) => {
  event.addPotionBrewing("scalinghealth:bandages", "minecraft:thick", "potioncore:fire");
}
)

MoreJSEvents.registerPotionBrewing((event) => {
  event.addPotionBrewing("biomesoplenty:blackstone_bulb", "minecraft:thick", "potioncore:invert");
}
)


MoreJSEvents.registerPotionBrewing((event) => {
  event.addPotionBrewing("minecraft:nether_star_shard", "minecraft:awkward", "potioncore:purity");
}
)

MoreJSEvents.registerPotionBrewing((event) => {
  event.addPotionBrewing("tide:shooting_starfish", "minecraft:awkward", "potioncore:revival");
}
)
MoreJSEvents.registerPotionBrewing((event) => {
  event.addPotionBrewing(["netherdepthsupgrade:wither_bonefish","minecraft:wither_bone"], "minecraft:awkward", "potioncore:wither");
}
)
// Addition Prob broken
MoreJSEvents.registerPotionBrewing((event) => {
  event.addPotionBrewing(["biomemakeover:crab","quark:crab_leg"], "minecraft:awkward", "potioncore:reach");
}
)
MoreJSEvents.registerPotionBrewing((event) => {
  event.addPotionBrewing("biomemakeover:lightning_bug_bottle", "minecraft:thick", "potioncore:lightning");
}
)
MoreJSEvents.registerPotionBrewing((event) => {
  event.addPotionBrewing("minecraft:fermented_spider_eye", "minecraft:water_breathing", "potioncore:drown");
}
)
MoreJSEvents.registerPotionBrewing((event) => {
  event.addPotionBrewing("alexscavesdelight:filled_heart_of_iron", "minecraft:awkward", "potioncore:flight");
}
)
MoreJSEvents.registerPotionBrewing((event) => {
  event.addPotionBrewing("biomesoplenty:huge_clover_petal", "minecraft:awkward", "minecraft:luck");
}
)

// minecraft:healing + {"item":"minecraft:fermented_spider_eye"} -> minecraft:harming
MoreJSEvents.registerPotionBrewing((event) => {
    event.removeByPotion("minecraft:glistering_melon_slice", null, null);
    event.removeByPotion(null, null, "minecraft:harming");
    event.removeByPotion("netherdepthsupgrade:eyeball", null, null);
    event.removeByPotion(null, "netherdepthsupgrade:eyeball", null);
    event.removeByPotion(null, null, "netherdepthsupgrade:eyeball");
    event.removeByCustom("netherdepthsupgrade:eyeball", null, null);
    event.removeByCustom(null, "netherdepthsupgrade:eyeball", null);
    event.removeByCustom(null, null, "netherdepthsupgrade:eyeball");
    event.removeByPotion("netherdepthsupgrade:eyeball_fish", null, null);
    event.removeByPotion(null, "netherdepthsupgrade:eyeball_fish", null);
    event.removeByPotion(null, null, "netherdepthsupgrade:eyeball_fish");
    event.removeByCustom("netherdepthsupgrade:eyeball_fish", null, null);
    event.removeByCustom(null, "netherdepthsupgrade:eyeball_fish", null);
    event.removeByCustom(null, null, "netherdepthsupgrade:eyeball_fish");
    event.removeByPotion("netherdepthsupgrade:lava_pufferfish", null, null);
    event.removeByPotion(null, "netherdepthsupgrade:lava_pufferfish", null);
    event.removeByPotion(null, null, "netherdepthsupgrade:lava_pufferfish");
    event.removeByCustom("netherdepthsupgrade:lava_pufferfish", null, null);
    event.removeByCustom(null, "netherdepthsupgrade:lava_pufferfish", null);
    event.removeByCustom(null, null, "netherdepthsupgrade:lava_pufferfish");
    event.removeByCustom(null, null, "deeperdarker:sculk_affinity")
    event.removeByCustom(null, "deeperdarker:sculk_affinity", null)
    event.removeByCustom("deeperdarker:sculk_affinity", null, null)
}
);


MoreJSEvents.registerPotionBrewing((event) => {
  event.addPotionBrewing("sculkhorde:sculk_resin", "minecraft:awkward", "deeperdarker:sculk_affinity");
    event.addPotionBrewing("luminous_nether:pale_melon_slice", "minecraft:awkward", "lostcities:courage");
}
)

MoreJSEvents.registerPotionBrewing((event) => {
  event.addCustomBrewing("alexscaves:darkened_apple",
    Item.of("minecraft:splash_potion", '{Potion: "minecraft:awkward"}').weakNBT(),
    "trials:ominous_bottle")
}
)

MoreJSEvents.registerPotionBrewing((event) => {
  event.addPotionBrewing("tide:midas_fish", "minecraft:awkward", "potioncore:repair");
  event.addPotionBrewing("minecraft:glistering_melon_slice", "minecraft:thick", "minecraft:healing");
  event.addPotionBrewing("minecraft:fermented_spider_eye", "minecraft:thick", "minecraft:harming");
}
)
