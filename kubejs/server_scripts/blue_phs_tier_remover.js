ServerEvents.tags("block", (event) => {
  event.remove("minecraft:needs_stone_tool", ["minecraft:iron_ore", "minecraft:raw_iron_block", "minecraft:deepslate","minecraft:deepslate_iron_ore","minecraft:deepslate_diamond_ore","minecraft:deepslate_lapis_ore","minecraft:deepslate_copper_ore","minecraft:deepslate_redstone_ore","oreganized:deepslate_lead_ore","minecraft:deepslate_emerald_ore","minecraft:deepslate_coal_ore","oreganized:deepslate_silver_ore"]);
  event.add("minecraft:needs_copper_tool", ["minecraft:iron_ore", "minecraft:raw_iron_block", "minecraft:iron_block","#forge:tools","#minecraft:tools"]);
  event.remove("minecraft:needs_diamond_tool", ["sculkhorde:calcite_ore"]);
  event.add("forge:needs_resonarium_tool", ["sculkhorde:calcite_ore"]);
  event.add("forge:needs_warden_tool", ["sculkhorde:calcite_ore"]);
  event.add("oreganized:needs_silver_tool", ["minecraft:iron_ore", "minecraft:raw_iron_block", "minecraft:iron_block", "forge:ores", "#forge:tools", "#minecraft:tools"]);
  event.add("create:needs_bronze_tool", ["minecraft:iron_ore", "minecraft:raw_iron_block", "minecraft:iron_block", "forge:ores", "#forge:tools", "#minecraft:tools"]);
  event.remove("minecraft:needs_copper_tool", ["minecraft:deepslate","minecraft:deepslate_iron_ore","minecraft:deepslate_diamond_ore","minecraft:deepslate_lapis_ore","minecraft:deepslate_copper_ore","minecraft:deepslate_redstone_ore","oreganized:deepslate_lead_ore","minecraft:deepslate_emerald_ore","minecraft:deepslate_coal_ore","oreganized:deepslate_silver_ore"]);
  event.remove("create:needs_bronze_tool", ["minecraft:deepslate","minecraft:deepslate_iron_ore","minecraft:deepslate_diamond_ore","minecraft:deepslate_lapis_ore","minecraft:deepslate_copper_ore","minecraft:deepslate_redstone_ore","oreganized:deepslate_lead_ore","minecraft:deepslate_emerald_ore","minecraft:deepslate_coal_ore","oreganized:deepslate_silver_ore"]);
})
// Copper Tool Give Them Tags!


let vanilla_tools = [
"axe",
"sword",
"shovel",
"hoe",
"pickaxe"
]

ServerEvents.tags('item', event => {

for (let copper_item of vanilla_tools){
event.add(`minecraft:${copper_item}s`, [`minecraft:copper_${copper_item}`])
}
})

ServerEvents.tags('item', event => {
for (let bronze_item of vanilla_tools){
event.add(`minecraft:${bronze_item}s`, [`create:bronze_${bronze_item}`])
}
})

ServerEvents.tags('item', event => {
for (let silver_tools of vanilla_tools){
event.add(`minecraft:${silver_tools}s`, [`oreganized:silver_${silver_tools}`])
}
})
