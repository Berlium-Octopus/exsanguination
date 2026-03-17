/*
function rainbowArgb(time) {
    const cycle = 40;
    const fraction = (time % cycle) / cycle;
    const r = Math.floor(127 * (Math.sin(2 * JavaMath.PI * fraction) + 1));
    const g = Math.floor(127 * (Math.sin(2 * JavaMath.PI * fraction + 2) + 1));
    const b = Math.floor(127 * (Math.sin(2 * JavaMath.PI * fraction + 4) + 1));
    return (255 << 24) | (r << 16) | (g << 8) | b;
}

function darkenColor(color, alpha) {
    const a = (color >>> 24) & 0xFF;
    const r = (color >>> 16) & 0xFF;
    const g = (color >>> 8) & 0xFF;
    const b = color & 0xFF;
    const nr = Math.max(0, r - alpha);
    const ng = Math.max(0, g - alpha);
    const nb = Math.max(0, b - alpha);
    return (a << 24) | (nr << 16) | (ng << 8) | nb;
}

ForgeEvents.onEvent("net.minecraftforge.client.event.RenderTooltipEvent$Color", event=>{
    global.colorchange(event)
})


global.colorchange = (event) => {
        let rarity = event.itemStack.rarity;
        let item = event.itemStack.copy()
        let COLOR = Java.loadClass('java.awt.Color') 
        let SystemTime = Utils.systemTime 
        let per = 2600 

        if (event.itemStack.id == "minecraft:diamond") {
        let colorStart = COLOR.HSBtoRGB((SystemTime % per ) / per, 1 ,1)
        SystemTime += (per * 0.9)
        let colorEnd = COLOR.HSBtoRGB((SystemTime % per ) / per, 1 ,1)
        event.setBorderStart(colorStart) 
        event.setBorderEnd(colorEnd)
        }
        // Sets the color basing on rarity
        if (rarity == "uncommon") {
            event.setBorderStart(Color.YELLOW.getArgb())
            event.setBorderEnd(Color.GOLD.getArgb())
        } else if (rarity == "rare") {
            event.setBorderStart(Color.AQUA.getArgb())
            event.setBorderEnd(Color.DARK_AQUA.getArgb())
        } else if (rarity == "epic") {
            event.setBorderStart(Color.LIGHT_PURPLE.getArgb())
            event.setBorderEnd(Color.PURPLE_DYE.getArgb())
        }
}
*/