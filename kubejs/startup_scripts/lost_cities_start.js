// @ts-script
// Vommiter's Script Modified
ForgeEvents.onEvent("net.minecraftforge.event.entity.EntityTravelToDimensionEvent", event => {
    global.portalEvent(event)
})

ForgeEvents.onEvent("net.minecraftforge.event.entity.player.PlayerSleepInBedEvent", event => {
    global.nightmareEvents(event)
})
