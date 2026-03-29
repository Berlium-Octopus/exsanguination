// @ts-script
// Vommiter's Script Modified
ForgeEvents.onEvent("net.minecraftforge.event.entity.EntityTravelToDimensionEvent", event => {
    global.portalEvent(event)
})

ForgeEvents.onEvent("net.minecraftforge.event.entity.player.PlayerSleepInBedEvent", event => {
    global.nightmareEvents(event)
})

StartupEvents.init(event => {
    const dream = new $MobEffectBuilder("lostcities:dreaming").modifyAttribute("forge:entity_gravity", "df909581-5e39-4f6e-ac25-7615655aeed0", -0.05, 'addition').color(0x4b24ae).harmful()
    const dream_effect = MOB_EFFECTS.register("dreaming", () => dream.createObject())

    // Normal
    const dream_potion = Utils.lazy(() => new $PotionBuilder("lostcities:dreaming").effect(dream_effect.get(), 3600, 0))
    const c_potion = POTIONS.register("dreaming", () => dream_potion.get().createObject())
})


MoreJSEvents.registerPotionBrewing(event => {
    event.addPotionBrewing("sleep_tight:dreamer_essence", "minecraft:awkward", "lostcities:dreaming");
});