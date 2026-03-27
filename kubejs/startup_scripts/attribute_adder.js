// priority: 0
// Uncandango's from discord, it is used to patch my terrible code that breaks alex's caves rarities
const $Rarity = Java.loadClass("net.minecraft.world.item.Rarity")
const $UnaryOperator = Java.loadClass("java.util.function.UnaryOperator")
const $UtilsJS = Java.loadClass("dev.latvian.mods.kubejs.util.UtilsJS")
const $Style = Java.loadClass("net.minecraft.network.chat.Style")
const ItemBuilder = Java.loadClass("dev.latvian.mods.kubejs.item.custom.BasicItemJS$Builder")

const withColorMethod = $Style.EMPTY.class.declaredMethods.filter((method) => method.name.includes("m_131148_"))[0]

function createRarity( /** @type {string} */ name, /** @type {number} */ colorCode) {
    let color = $UtilsJS.makeFunctionProxy("startup", $UnaryOperator, (style) => {
        return withColorMethod.invoke(style, Color.of(colorCode).createTextColorJS())
    })
    return $Rarity["create(java.lang.String,java.util.function.UnaryOperator)"](name, color)
}
/*
    "sculkhorde:diascite_axe",
        "sculkhorde:ferriscite_axe",
        "luminous_nether:gold_cultist_axe",
        "oreganized:electrum_axe",
        "cataclysm:black_steel_axe",
        "oreganized:silver_axe"
        */
// create your rarities here
createRarity("luminous_beasts:luminescent", 0Xfba800)
createRarity("alexscaves:demonic", 0XAA0000)
createRarity("alexscaves:sweet", 0xFF8ACD)
createRarity("alexscaves:nuclear", 0x55FF55)


ItemEvents.modification(event => {
    event.modify(
        [
            'luminous_nether:gold_cultist_axe',
            'luminous_nether:piglin_flag_bottom',
            'luminous_beasts:shellmet_helmet',
            'luminous_beasts:spore_bundle',
            'luminous_nether:furnace_disk',
            'luminous_nether:executioner_disc',
            'luminous_beasts:magic_root',
            'luminous_beasts:mummy_wraps_helmet',
            'luminous_beasts:rare_viper_egg',
            'luminous_beasts:crimson_spitter_disc',
            'luminous_beasts:gator_tooth',
            'luminous_beasts:furnace_disc',
            'luminous_nether:molten_coal',
            'luminous_nether:spore_bundle',
            'luminous_nether:gilded_bundle',
            'luminous_beasts:bone_rattle',
            'luminous_nether:ritual_tableoff',
            'luminous_nether:torn_rag',
            'luminous_beasts:phoenix_feather',
            'luminous_nether:ghostly_essence',
            'luminous_beasts:wind_phoenix_egg',
            'luminous_beasts:yeti_horn',
            'luminous_beasts:viper_tooth',
            'luminous_nether:mushroom_disc',
            'luminous_beasts:executioner_cowl_helmet',
            'luminous_beasts:beast_pit_off',
            'luminous_nether:executioner_hood_helmet'
        ], item => {
            item.rarity = 'luminous_beasts:luminescent'
        })
})

BlockEvents.modification(event => {
    event.modify('minecraft:torchflower', block => {
        block.lightEmission = 14
    })
})

BlockEvents.modification(event => {
    event.modify('netherexp:soul_torchflower', block => {
        block.lightEmission = 10
    })
})

ItemEvents.modification(event => {
    event.modify("archeological:diamond_charm", item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "minecraft:generic.armor",
                    "128dffc6-ea19-4285-b5cd-75b375c575e6",
                    4,
                    'addition'
                )
                .addAttribute(
                    "minecraft:generic.armor_toughness",
                    "02895ea2-6237-4011-94f9-102be0146823",
                    2,
                    'addition'
                )
        )
    })
})

ItemEvents.modification(event => {
    event.modify("archeological:emerald_ring", item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "functionalarmortrim:gossip_boost",
                    "0b5c5e6e-683f-42d1-b8b3-b8a305e13c19",
                    0.5,
                    'addition'
                )
                .addAttribute(
                    "minecraft:generic.luck",
                    "e5554bbd-5cad-48c1-ac3d-6f257229ab01",
                    0.2,
                    'addition'
                )
        )
    })
})

ItemEvents.modification(event => {
    event.modify("alexscavesdelight:cooked_heart_of_iron", item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "forge:entity_gravity",
                    "1d9d3a8c-ad3c-4cf8-81c2-57a71596d31d",
                    -0.05,
                    'addition'
                )
        )
    })
})

ItemEvents.modification(event => {
    event.modify("alexscaves:heart_of_iron", item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "forge:entity_gravity",
                    "24d8694c-282e-47ab-90be-1d1d23eb042b",
                    -0.05,
                    'addition'
                )
        )
    })
})


ItemEvents.modification(event => {
    event.modify("archeological:amethyst_amulet", item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "functionalarmortrim:thorns",
                    "332d92c9-dabc-4de7-a436-38457c4a8b73",
                    0.15,
                    'addition'
                )
        )
    })
})

ItemEvents.modification(event => {
    event.modify("alexscaves:totem_of_regeneration", item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "functionalarmortrim:thorns",
                    "23696be1-9ae6-4b8a-987b-854dd895cc17",
                    0.15,
                    'addition'
                )
        )
    })
})

ItemEvents.modification(event => {
    event.modify("cataclysm:necklace_of_the_desert", item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "minecraft:generic.luck",
                    "7f347969-c5b2-445d-80cc-7912ed8a79f9",
                    0.2,
                    'addition'
                )
        )
    })
})


ItemEvents.modification(event => {
    event.modify("alexscaves:totem_of_possession", item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "functionalarmortrim:thorns",
                    "0648c1bd-a234-4f94-97be-858dcd93d66c",
                    0.25,
                    'addition'
                )
        )
    })
})

ItemEvents.modification(event => {
    event.modify("alexscaves:totem_of_regeneration", item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .addAttribute(
                    "functionalarmortrim:thorns",
                    "0648c1bd-a234-4f94-97be-858dcd93d66c",
                    0.1,
                    'addition'
                )
                .addAttribute(
                    "minecraft:generic.luck",
                    "21f7b2fc-4aaf-45d1-9136-a0e5b00b66fc",
                    0.1,
                    'addition'
                )
        )
    })
})


ItemEvents.modification(event => {
    event.modify('scalinghealth:bandages', item => {
        item.rarity = 'RARE'
        item.burnTime = 700
        item.maxStackSize = 32
    })
})


ItemEvents.modification(event => {
    event.modify('rootoffear:wilted_stew', item => {
        item.rarity = 'RARE'
        item.maxStackSize = 1
    })
})

ItemEvents.modification(event => {
    event.modify(['deeperdarker:heart_of_the_deep', 'deeperdarker:sliced_heart_of_the_deep', 'archeological:old_bandages', 'alexscaves:game_controller', 'alexscaves:immortal_embryo', 'alexscaves:totem_of_regeneration', 'luminous_nether:nether_beast_totem'], item => {
        item.maxStackSize = 1
    })
})

ItemEvents.modification(event => {
    event.modify(['alexscaves:limestone_spear', 'alexcaves:frostmint_spear'], item => {
        item.maxStackSize = 16
    })
})


ItemEvents.modification(event => {
    event.modify(['scalinghealth:power_crystal_shard','scalinghealth:medkit','cataclysm:necklace_of_the_desert', 'biomesoplenty:spider_egg', 'biomesoplenty:glowworm_silk'], item => {
        item.rarity = 'RARE'
        item.maxStackSize = 1
    })
})


// Lytho from discord
ItemEvents.modification(event => {
    event.modify('sculkhorde:purification_flask', item => {
        const builder = new ItemBuilder("sculkhorde:purification_flask").glow(true);
        item.setItemBuilder(builder);
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:nether_star_shard', item => {
        const builder = new ItemBuilder("minecraft:nether_star_shard").glow(true);
        item.setItemBuilder(builder);
    })
})



const $AttributeModifier = Java.loadClass("net.minecraft.world.entity.ai.attributes.AttributeModifier")

const BLADEMOD = new $AttributeModifier(
    "3ea30f3a-58b3-417f-972e-18081cabdcad",
    "forge:entity_reach",
    -1,
    "ADDITION"
)

const BULLET_MOD = new $AttributeModifier(
    "7e529c59-c650-489e-b5c1-82ee90167b08",
    "jeg:generic.gun_damage",
    1,
    "ADDITION"
)
const STAM_MOD = new $AttributeModifier(
    "133a6368-4778-4aa9-9025-fb3cba698200",
    "puffish_attributes:stamina",
    1,
    "MULTIPLY_TOTAL"
)
const MAGIC_MOD = new $AttributeModifier(
    "e868cbde-feb4-44f5-98c3-dae7eae5ff9c",
    "puffish_attributes:stamina",
    1.5,
    "MULTIPLY_TOTAL"
)
const THORN_MOD = new $AttributeModifier(
    "9c1edf8a-286c-4347-aca7-3c89cb406aa1",
    "functionalarmortrim:thorns",
    2,
    "ADDITION"
)
const EXP_MOD = new $AttributeModifier(
    "46425c11-bd57-4d13-996f-202eec4310ad",
    "exsanguination:flamability",
    0.125,
    "ADDITION"
)

const EXP_MOD2 = new $AttributeModifier(
    "0efc8044-9f66-48e3-8cbc-1fbbe134c8f2",
    "exsanguination:flamability",
    0.125,
    "ADDITION"
)
const EXP_MOD3 = new $AttributeModifier(
    "3d3aef15-5f55-47f2-b52e-d08f2bf0f4ff",
    "exsanguination:flamability",
    0.125,
    "ADDITION"
)
const EXP_MOD4 = new $AttributeModifier(
    "c4302892-5666-41df-b119-c44898a02450",
    "exsanguination:flamability",
    0.125,
    "ADDITION"
)
const EXP_MOD5 = new $AttributeModifier(
    "3a7a6c0f-64a2-4f44-9715-a104600961fb",
    "exsanguination:flamability",
    0.125,
    "ADDITION"
)

const ROLL_MOD = new $AttributeModifier(
    "0c745bce-1133-4462-ba6a-6b21807c165e",
    "combatroll:distance",
    0.3,
    "MULTIPLY_TOTAL"
)
const ROLL_MOD2 = new $AttributeModifier(
    "22d7d7b1-f539-460a-af62-78a0ece2ee35",
    "combatroll:distance",
    0.4,
    "MULTIPLY_TOTAL"
)
const ROLL_MOD3 = new $AttributeModifier(
    "341a857e-fa5e-4c08-8107-80b8254cfa25",
    "combatroll:distance",
    0.35,
    "MULTIPLY_TOTAL"
)

const ROLL_MOD5 = new $AttributeModifier(
    "58997bcd-94a1-4b48-b008-9ab733652827",
    "combatroll:distance",
    0.50,
    "MULTIPLY_TOTAL"
)
const ROLL_MOD6 = new $AttributeModifier(
    "e4c1b848-7c7d-419b-b3bf-61c974c1a1b7",
    "combatroll:distance",
    0.55,
    "MULTIPLY_TOTAL"
)
const ROLL_MOD7 = new $AttributeModifier(
    "0370ddf8-85d5-488a-a249-8f4c5362591f",
    "combatroll:distance",
    0.60,
    "MULTIPLY_TOTAL"
)
const ROLL_MOD8 = new $AttributeModifier(
    "c68809e7-20e0-4159-b978-d22492f4f875",
    "combatroll:distance",
    0.65,
    "MULTIPLY_TOTAL"
)
const ROLL_MOD9 = new $AttributeModifier(
    "fc09034b-de8f-45f7-b5b9-b3d823b7c55c",
    "combatroll:distance",
    0.7,
    "MULTIPLY_TOTAL"
)
const REACH_MOD_B = new $AttributeModifier(
    "a882fb43-dd94-46cc-b83a-b0c9c5064ea9",
    "forge:block_reach",
    0.05,
    "ADDITION"
)
const REACH_MOD_A = new $AttributeModifier(
    "a25768a5-337d-4d9a-86c4-9075b71dd372",
    "forge:entity_reach",
    0.05,
    "ADDITION"
)
const REACH_MOD_B2 = new $AttributeModifier(
    "a669d573-3a20-4d4b-be78-235ffb4a12ea",
    "forge:block_reach",
    0.1,
    "ADDITION"
)

const SHADOWMEN_A = new $AttributeModifier(
    "c66049c4-446d-4f61-b222-3b1781b1eed3",
    "forge:block_reach",
    2,
    "ADDITION"
)


const REACH_MOD_A2 = new $AttributeModifier(
    "ebf80322-4ea5-4fa7-9136-bc5e882ac2fb",
    "forge:entity_reach",
    0.1,
    "ADDITION"
)
const REACH_MOD_B3 = new $AttributeModifier(
    "b2e8c111-dceb-4853-be21-8aadd9efe0a6",
    "forge:block_reach",
    0.15,
    "ADDITION"
)
const REACH_MOD_A3 = new $AttributeModifier(
    "d09ae486-1ef1-49e6-8057-475498538b47",
    "forge:entity_reach",
    0.15,
    "ADDITION"
)
const REACH_MOD_A4 = new $AttributeModifier(
    "198a3aeb-ae12-4c65-8b0e-6d2893df3610",
    "forge:entity_reach",
    0.2,
    "ADDITION"
)
const REACH_MOD_B5 = new $AttributeModifier(
    "b3c2beb6-694e-460b-ad15-d81a8e6c857d",
    "forge:block_reach",
    0.25,
    "ADDITION"
)
const REACH_MOD_A5 = new $AttributeModifier(
    "79426d9f-25d0-496f-8b7a-50d6806e9c80",
    "forge:entity_reach",
    0.25,
    "ADDITION"
)
const REACH_MOD_B6 = new $AttributeModifier(
    "10fdd399-41ae-4db2-bda3-69e9c4266912",
    "forge:block_reach",
    0.3,
    "ADDITION"
)
const REACH_MOD_A6 = new $AttributeModifier(
    "2ce01ad3-e09b-4d34-81cb-41f74b16378c",
    "forge:entity_reach",
    0.3,
    "ADDITION"
)
const REACH_MOD_B7 = new $AttributeModifier(
    "10fdd399-41ae-4db2-bda3-69e9c4266912",
    "forge:block_reach",
    0.35,
    "ADDITION"
)
const REACH_MOD_A7 = new $AttributeModifier(
    "2ce01ad3-e09b-4d34-81cb-41f74b16378c",
    "forge:entity_reach",
    0.35,
    "ADDITION"
)
const REACH_MOD_B8 = new $AttributeModifier(
    "84ec341d-8203-4f03-9767-0f74c99f7786",
    "forge:block_reach",
    0.4,
    "ADDITION"
)
const REACH_MOD_A8 = new $AttributeModifier(
    "f51fa42d-9874-4868-9bbf-526b5c23667a",
    "forge:entity_reach",
    0.4,
    "ADDITION"
)
const REACH_MOD_B9 = new $AttributeModifier(
    "6c1d0982-fac7-482c-aea9-fd9b0d9a9c36",
    "forge:block_reach",
    0.45,
    "ADDITION"
)
const REACH_MOD_A9 = new $AttributeModifier(
    "bf9de2ff-6053-4f2c-af24-380815cd1baf",
    "forge:entity_reach",
    0.45,
    "ADDITION"
)
const KID_MOD = new $AttributeModifier(
    "57a88fb0-8102-4254-9d92-84c822b034ad",
    "oreganized:kinetic_damage",
    1.5,
    "ADDITION"
)
const LIFE_STEAL_MOD = new $AttributeModifier(
    "4b9e5eb0-b9a2-4d7b-8488-fdc0f775f9d7",
    "puffish_attributes:life_steal",
    0.35,
    "MULTIPLY_TOTAL"
)

const KID_MOD2 = new $AttributeModifier(
    "bb95105d-1d04-42ae-8330-8365265df0d7",
    "oreganized:kinetic_damage",
    2,
    "ADDITION"
)

const KID_MOD13 = new $AttributeModifier(
    "a6b8d2e5-138a-4ce1-9657-20f7567beba8",
    "oreganized:kinetic_damage",
    0.5,
    "ADDITION"
)
const KID_MOD3 = new $AttributeModifier(
    "3fffcbf0-c644-423a-88ed-5aa73cb525f2",
    "oreganized:kinetic_damage",
    1,
    "ADDITION"
)
const KID_MOD4 = new $AttributeModifier(
    "3e8d41a4-d217-4441-ac51-2e8681683e43",
    "oreganized:kinetic_damage",
    2.5,
    "ADDITION"
)
const KID_MOD5 = new $AttributeModifier(
    "d181c575-75f3-4008-ba3f-fa470fe40569",
    "oreganized:kinetic_damage",
    2.2,
    "ADDITION"
)
const KID_MOD6 = new $AttributeModifier(
    "3ec69504-ded5-4d72-8fe8-a61be5e8a7a6",
    "oreganized:kinetic_damage",
    4,
    "ADDITION"
)
const KID_MOD11 = new $AttributeModifier(
    "b2420cf2-5943-43a4-919c-7b0a11813392",
    "oreganized:kinetic_damage",
    2,
    "ADDITION"
)
const KNOCK_MOD = new $AttributeModifier(
    "78fa4985-868e-4218-a8f4-a898c1ea92b6",
    "minecraft:generic.attack_knockback",
    0.05,
    "ADDITION"
)
const KNOCK_MOD2 = new $AttributeModifier(
    "e247c65d-4067-4752-92ab-707acf7eb2ed",
    "minecraft:generic.attack_knockback",
    0.1,
    "ADDITION"
)
const KNOCK_MOD3 = new $AttributeModifier(
    "a7f050b9-c2bf-4749-98cc-18bce957d405",
    "minecraft:generic.attack_knockback",
    0.15,
    "ADDITION"
)
const KNOCK_MOD4 = new $AttributeModifier(
    "79f3b534-8b2d-401d-863a-03b83def2434",
    "minecraft:generic.attack_knockback",
    0.25,
    "ADDITION"
)
const KNOCK_MOD5 = new $AttributeModifier(
    "de8b8fda-fd11-43d5-bd04-37bde7b71c4b",
    "minecraft:generic.attack_knockback",
    0.2,
    "ADDITION"
)
const KNOCK_MOD6 = new $AttributeModifier(
    "52a3a438-7447-4e83-81ca-eb61def19565",
    "minecraft:generic.attack_knockback",
    0.3,
    "ADDITION"
)
const KNOCK_MOD7 = new $AttributeModifier(
    "fd69add2-525c-4bfa-aaf0-888116cd7546",
    "minecraft:generic.attack_knockback",
    0.35,
    "ADDITION"
)

const PEN_MODO = new $AttributeModifier(
    "68524492-452e-4218-a6f8-b5d0ef2dce63",
    "puffish_attributes:armor_shred",
    0.05,
    "MULTIPLY_TOTAL"
)

const PEN_MOD = new $AttributeModifier(
    "a516026a-bee2-4014-bcb6-b6a5775553de",
    "puffish_attributes:armor_shred",
    0.1,
    "MULTIPLY_TOTAL"
)

const PEN_MOD2 = new $AttributeModifier(
    "33e7dc70-264a-4623-9267-26776ea8d0e4",
    "puffish_attributes:armor_shred",
    0.15,
    "MULTIPLY_TOTAL"
)

const PEN_MOD3 = new $AttributeModifier(
    "006a083d-ddfe-4dac-afb5-1dd0ffaf1fad",
    "puffish_attributes:armor_shred",
    0.2,
    "MULTIPLY_TOTAL"
)

const RABIES_RES = new $AttributeModifier(
    "a24a2e8a-4ef9-46df-9d36-863a7d645a1a",
    "alexscavesexemplified:rabies_resistance",
    0.5,
    "ADDITION"
)

const RABIES_RES2 = new $AttributeModifier(
    "2750d730-9e38-4118-8d1b-604900e6e572",
    "alexscavesexemplified:rabies_resistance",
    0.5,
    "ADDITION"
)

const PEN_MOD4 = new $AttributeModifier(
    "4b643dea-91f5-4cba-888d-0e860a6e90a6",
    "puffish_attributes:armor_shred",
    0.25,
    "MULTIPLY_TOTAL"
)


const YUM_1 = new $AttributeModifier(
    "36491750-e03a-4b96-aa3c-67cb42905722",
    "puffish_attributes:toughness_shred",
    0.3,
    "MULTIPLY_TOTAL"
)


const PEN_MOD45 = new $AttributeModifier(
    "7b296da2-e67b-4d37-a123-9131ff2f2380",
    "puffish_attributes:armor_shred",
    0.35,
    "MULTIPLY_TOTAL"
)

const HELM_MOD = new $AttributeModifier(
    "c4302892-5666-41df-b119-c44898a02450",
    "puffish_attributes:armor_shred",
    1,
    "ADDITION"
)



const PEN_MOD5 = new $AttributeModifier(
    "0e0b5bbe-404f-41dd-ab53-2f48d47c3a91",
    "puffish_attributes:armor_shred",
    0.4,
    "MULTIPLY_TOTAL"
)

const YUM_2 = new $AttributeModifier(
    "0e0b5bbe-404f-41dd-ab53-2f48d47c3a91",
    "puffish_attributes:toughness_shred",
    0.10,
    "MULTIPLY_TOTAL"
)

const YUM_3 = new $AttributeModifier(
    "8e544c8a-456f-4fd3-af0d-a0d27b55b641",
    "puffish_attributes:toughness_shred",
    0.5,
    "MULTIPLY_TOTAL"
)

const PEN_MODS = new $AttributeModifier(
    "80235905-3c25-4e33-bdd9-357f9b1ff915",
    "puffish_attributes:armor_shred",
    1,
    "MULTIPLY_TOTAL"
)

const YUM_S = new $AttributeModifier(
    "86130dc5-b1da-48bb-81c0-ca82d2f49fa1",
    "puffish_attributes:toughness_shred",
    1,
    "MULTIPLY_TOTAL"
)
const MAMA_M = new $AttributeModifier(
    "0f07b916-13fd-49e7-bdb2-3e3d55bcd8b1",
    "oreganized:kinetic_damage",
    0.05,
    "ADDITION"
)

const MAMA_M1 = new $AttributeModifier(
    "c84e538f-619a-47a2-8e19-9aed1e480a5b",
    "oreganized:kinetic_damage",
    0.1,
    "ADDITION"
)

const MAMA_M2 = new $AttributeModifier(
    "5276ea07-bc4b-41a4-9d1b-8ba5235fce89",
    "oreganized:kinetic_damage",
    0.15,
    "ADDITION"
)
const MAMA_M3 = new $AttributeModifier(
    "db8cd51b-4808-4696-88fb-e964d61e4bdb",
    "oreganized:kinetic_damage",
    0.30,
    "ADDITION"
)

const MAMA_M4 = new $AttributeModifier(
    "edd0f66e-d110-4706-9158-568aa95b8ee6",
    "oreganized:kinetic_damage",
    0.20,
    "ADDITION"
)

const MAMA_M5 = new $AttributeModifier(
    "61780043-6b41-46bb-a4f6-31f405006884",
    "oreganized:kinetic_damage",
    0.25,
    "ADDITION"
)

const MAMA_M6 = new $AttributeModifier(
    "3059811c-10d6-4229-b1d2-60053fb6c6b1",
    "oreganized:kinetic_damage",
    0.3,
    "ADDITION"
)

//Vomiter's Script

const /**@type {{NAME: Internal.Attribute}} */ RES = {}
RES.Undead = "oreganized:undead_resistance"

StartupEvents.registry("minecraft:attribute", event => {
    const $RangedAttribute = Java.loadClass("net.minecraft.world.entity.ai.attributes.RangedAttribute")
    event.createCustom(RES.Undead, () => new $RangedAttribute("Undead Resistance", 0, 0, 20).setSyncable(true))
})

EntityJSEvents.attributes(event => {
    event.allTypes.forEach(type => {
        event.modify(type, ctx => {
            ctx.add(RES.Undead)
        })
    })
})

const /**@type {{NAME: Internal.Attribute}} */ GunAttribute = {}
GunAttribute.GUN_AMP = "jeg:generic.gun_damage"

StartupEvents.registry("minecraft:attribute", event => {
    const $RangedAttribute = Java.loadClass("net.minecraft.world.entity.ai.attributes.RangedAttribute")
    event.createCustom(GunAttribute.GUN_AMP, () => new $RangedAttribute("Bullet Damage", 0, 0, 10).setSyncable(true))
})

EntityJSEvents.attributes(event => {
    event.allTypes.forEach(type => {
        event.modify(type, ctx => {
            ctx.add(GunAttribute.GUN_AMP)
        })
    })
})

const /**@type {{NAME: Internal.Attribute}} */ Rabiesattribute = {}
Rabiesattribute.RAB_RES = "alexscavesexemplified:rabies_resistance"

StartupEvents.registry("minecraft:attribute", event => {
    const $RangedAttribute = Java.loadClass("net.minecraft.world.entity.ai.attributes.RangedAttribute")
    event.createCustom(Rabiesattribute.RAB_RES, () => new $RangedAttribute("Rabies Resistance", 0, 0, 10).setSyncable(true))
})

EntityJSEvents.attributes(event => {
    event.allTypes.forEach(type => {
        event.modify(type, ctx => {
            ctx.add(Rabiesattribute.RAB_RES)
        })
    })
})

const /**@type {{NAME: Internal.Attribute}} */ Fakefireattribute = {}
Fakefireattribute.FFI_RES = "exsanguination:flamability"

StartupEvents.registry("minecraft:attribute", event => {
    const $RangedAttribute = Java.loadClass("net.minecraft.world.entity.ai.attributes.RangedAttribute")
    event.createCustom(Fakefireattribute.FFI_RES, () => new $RangedAttribute("Flamability", 0, 0, 10).setSyncable(true))
})

EntityJSEvents.attributes(event => {
    event.allTypes.forEach(type => {
        event.modify(type, ctx => {
            ctx.add(Fakefireattribute.FFI_RES)
        })
    })
})

let small_weapons = [
    "trials:mace",
    "alexscaves:desolate_dagger",
    "alexsmobs:spectral_dagger",
    "spartanweaponry:stone_dagger",
    "spartanweaponry:copper_dagger",
    "spartanweaponry:iron_dagger",
    "spartanweaponry:diamond_dagger",
    "spartanweaponry:netherite_parrying_dagger",
    "spartanweaponry:diamond_parrying_dagger",
    "spartanweaponry:golden_parrying_dagger",
    "spartanweaponry:iron_parrying_dagger",
    "spartanweaponry:copper_parrying_dagger",
    "spartanweaponry:stone_parrying_dagger",
    "spartanweaponry:netherite_dagger",
    "spartanweaponry:bronze_dagger",
    "spartanweaponry:steel_dagger",
    "spartanweaponry:silver_dagger",
    "spartanweaponry:electrum_dagger",
    "spartanweaponry:bronze_parrying_dagger",
    "spartanweaponry:steel_parrying_dagger",
    "spartanweaponry:silver_parrying_dagger",
    "spartandeeperdarker:warden_parrying_dagger",
    "spartandeeperdarker:warden_dagger",
    "spartandeeperdarker:resonarium_parrying_dagger",
    "spartandeeperdarker:resonarium_dagger",
    "outer_end:sinker_dagger",
    "spartanweaponry:electrum_parrying_dagger",
    "spartandeeperdarker:warden_throwing_knife",
    "spartandeeperdarker:resonarium_throwing_knife",
    "oreganized:electrum_knife",
    "spartanweaponry:electrum_throwing_knife",
    "spartanweaponry:iron_throwing_knife",
    "spartanweaponry:golden_throwing_knife",
    "spartanweaponry:diamond_throwing_knife",
    "spartanweaponry:netherite_throwing_knife",
    "spartanweaponry:bronze_throwing_knife",
    "spartanweaponry:steel_throwing_knife",
    "spartanweaponry:silver_throwing_knife",
    "spartanweaponry:copper_throwing_knife",
    "spartanweaponry:stone_throwing_knife",
    "farmersdelight:bronze_knife",
    "farmersdelight:silver_knife",
    "farmersdelight:wooden_knife",
    "farmersdelight:copper_knife",
    "farmersdelight:golden_knife",
    "alexscavesdelight:candy_knife",
    "alexscavesdelight:sweet_tooth_knife",
    "alexscavesdelight:caramel_knife",
    "farmersdelight:flint_knife",
    "farmersdelight:iron_knife",
    "farmersdelight:diamond_knife",
    "farmersdelight:netherite_knife",
    "alexscavesdelight:gingerbread_knife",
    "alexscavesdelight:pure_darkness_knife",
    "alexscavesdelight:pearl_knife",
    "alexscavesdelight:tectonic_knife",
    "alexscavesdelight:uranium_knife",
    "alexscavesdelight:scarlet_neodymium_knife",
    "alexscavesdelight:azure_neodymium_knife",
    "spartanweaponry:diamond_tomahawk",
    "spartanweaponry:stone_tomahawk",
    "spartanweaponry:steel_tomahawk",
    "spartanweaponry:bronze_tomahawk",
    "spartanweaponry:netherite_tomahawk",
    "spartanweaponry:golden_tomahawk",
    "spartanweaponry:iron_tomahawk",
    "spartanweaponry:electrum_tomahawk",
    "spartanweaponry:copper_tomahawk",
    "spartanweaponry:silver_tomahawk",
    "spartandeeperdarker:resonarium_tomahawk",
    "spartandeeperdarker:warden_tomahawk",
    "spartanweaponry:studded_cestus",
    "spartanweaponry:cestus"
]
ForgeEvents.onEvent("net.minecraftforge.event.ItemAttributeModifierEvent", (event) => {
    small_weapons.forEach(weapon => {
        if (event.itemStack.id == weapon && event.slotType == "mainhand") {
            event.addModifier("forge:entity_reach", BLADEMOD)
        }
    })

    if (event.itemStack.id == "minecraft:golden_sword" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", MAMA_M)
    }
    if (event.itemStack.id == "biomemakeover:cowboy_hat" && event.slotType == "head") {
        event.addModifier("jeg:generic.gun_damage", BULLET_MOD)
    }
    if (event.itemStack.id == "minecraft:wooden_sword" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", MAMA_M1)
    }
    if (event.itemStack.id == "minecraft:stone_sword" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", MAMA_M2)
    }
    if (event.itemStack.id == "minecraft:copper_sword" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", MAMA_M3)
    }
    if (event.itemStack.id == "minecraft:iron_sword" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", MAMA_M4)
    }
    if (event.itemStack.id == "deeperdarker:resonarium_sword" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", MAMA_M4)
    }
    if (event.itemStack.id == "cataclysm:black_steel_sword" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", MAMA_M4)
    }
    if (event.itemStack.id == "alexscaves_torpedoes:scarlet_sword" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", MAMA_M5)
    }
    if (event.itemStack.id == "alexscaves_torpedoes:azure_sword" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", MAMA_M5)
    }
    if (event.itemStack.id == "minecraft:diamond_sword" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", MAMA_M3)
    }
    if (event.itemStack.id == "minecraft:netherite_sword" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", MAMA_M6)
    }
    if (event.itemStack.id == "deeperdarker:warden_sword" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", MAMA_M6)
    }
    if (event.itemStack.id == "minecraft:golden_pickaxe" && event.slotType == "mainhand") {
        event.addModifier("puffish_attributes:armor_shred", PEN_MODO)
    }
    if (event.itemStack.id == "minecraft:wooden_pickaxe" && event.slotType == "mainhand") {
        event.addModifier("puffish_attributes:armor_shred", PEN_MOD)
    }
    if (event.itemStack.id == "minecraft:stone_pickaxe" && event.slotType == "mainhand") {
        event.addModifier("puffish_attributes:armor_shred", PEN_MOD2)
    }
    if (event.itemStack.id == "minecraft:copper_pickaxe" && event.slotType == "mainhand") {
        event.addModifier("puffish_attributes:armor_shred", PEN_MOD3)
    }
    if (event.itemStack.id == "minecraft:iron_pickaxe" && event.slotType == "mainhand") {
        event.addModifier("puffish_attributes:armor_shred", PEN_MOD4)
    }
    if (event.itemStack.id == "sculkhorde:ferriscite_pickaxe" && event.slotType == "mainhand") {
        event.addModifier("puffish_attributes:armor_shred", PEN_MOD4)
    }
    if (event.itemStack.id == "deeperdarker:resonarium_pickaxe" && event.slotType == "mainhand") {
        event.addModifier("puffish_attributes:armor_shred", PEN_MOD5)
    }
    if (event.itemStack.id == "sculkhorde:diascite_pickaxe" && event.slotType == "mainhand") {
        event.addModifier("puffish_attributes:armor_shred", PEN_MOD5)
    }
    if (event.itemStack.id == "alexscaves_torpedoes:scarlet_pickaxe" && event.slotType == "mainhand") {
        event.addModifier("puffish_attributes:armor_shred", PEN_MOD45)
        event.addModifier("puffish_attributes:toughness_shred", YUM_1)
    }
    if (event.itemStack.id == "alexscaves_torpedoes:azure_pickaxe" && event.slotType == "mainhand") {
        event.addModifier("puffish_attributes:armor_shred", PEN_MOD45)
        event.addModifier("puffish_attributes:toughness_shred", YUM_1)
    }
    if (event.itemStack.id == "minecraft:diamond_pickaxe" && event.slotType == "mainhand") {
        event.addModifier("puffish_attributes:armor_shred", PEN_MOD3)
        event.addModifier("puffish_attributes:toughness_shred", YUM_3)
    }
    if (event.itemStack.id == "oreganized:electrum_pickaxe" && event.slotType == "mainhand") {
        event.addModifier("puffish_attributes:armor_shred", PEN_MOD45)
        event.addModifier("puffish_attributes:toughness_shred", YUM_2)
    }
    if (event.itemStack.id == "minecraft:netherite_pickaxe" && event.slotType == "mainhand") {
        event.addModifier("puffish_attributes:armor_shred", PEN_MOD45)
        event.addModifier("puffish_attributes:toughness_shred", YUM_2)
    }
    if (event.itemStack.id == "deeperdarker:warden_pickaxe" && event.slotType == "mainhand") {
        event.addModifier("puffish_attributes:armor_shred", PEN_MOD5)
        event.addModifier("puffish_attributes:toughness_shred", YUM_2)
    }
    if (event.itemStack.id == "alexsmobs:ghostly_pickaxe" && event.slotType == "mainhand") {
        event.addModifier("puffish_attributes:armor_shred", PEN_MODS)
        event.addModifier("puffish_attributes:toughness_shred", YUM_S)
    }
    if (event.itemStack.id == "minecraft:golden_shovel" && event.slotType == "mainhand") {
        event.addModifier("minecraft:generic.attack_knockback", KNOCK_MOD)
    }
    if (event.itemStack.id == "minecraft:wooden_shovel" && event.slotType == "mainhand") {
        event.addModifier("minecraft:generic.attack_knockback", KNOCK_MOD2)
    }
    if (event.itemStack.id == "minecraft:stone_shovel" && event.slotType == "mainhand") {
        event.addModifier("minecraft:generic.attack_knockback", KNOCK_MOD3)
    }
    if (event.itemStack.id == "minecraft:copper_shovel" && event.slotType == "mainhand") {
        event.addModifier("minecraft:generic.attack_knockback", KNOCK_MOD4)
    }
    if (event.itemStack.id == "minecraft:iron_shovel" && event.slotType == "mainhand") {
        event.addModifier("minecraft:generic.attack_knockback", KNOCK_MOD5)
    }
    if (event.itemStack.id == "deeperdarker:resonarium_shovel" && event.slotType == "mainhand") {
        event.addModifier("minecraft:generic.attack_knockback", KNOCK_MOD5)
    }
    if (event.itemStack.id == "cataclysm:black_steel_shovel" && event.slotType == "mainhand") {
        event.addModifier("minecraft:generic.attack_knockback", KNOCK_MOD4)
    }
    if (event.itemStack.id == "alexscaves_torpedoes:azure_shovel" && event.slotType == "mainhand") {
        event.addModifier("minecraft:generic.attack_knockback", KNOCK_MOD)
    }
    if (event.itemStack.id == "alexscaves_torpedoes:scarlet_shovel" && event.slotType == "mainhand") {
        event.addModifier("minecraft:generic.attack_knockback", KNOCK_MOD7)
    }
    if (event.itemStack.id == "minecraft:netherite_shovel" && event.slotType == "mainhand") {
        event.addModifier("minecraft:generic.attack_knockback", KNOCK_MOD6)
    }
    if (event.itemStack.id == "oreganized:electrum_shovel" && event.slotType == "mainhand") {
        event.addModifier("minecraft:generic.attack_knockback", KNOCK_MOD6)
    }
    if (event.itemStack.id == "deeperdarker:warden_shovel" && event.slotType == "mainhand") {
        event.addModifier("minecraft:generic.attack_knockback", KNOCK_MOD7)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_dagger" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD2)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_parrying_dagger" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD3)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_pike" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD4)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_lance" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD5)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_longbow" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD6)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_heavy_crossbow" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD2)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_throwing_knife" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD2)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_throwing_knife" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD4)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_tomahawk" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD3)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_javelin" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD3)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_boomerang" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD11)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_battleaxe" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_flanged_mace" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD2)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_glaive" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD2)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_quarterstaff" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD4)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_saber" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD4)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_katana" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD3)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_scythe" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD3)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_rapier" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD3)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_greatsword" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD13)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_battle_hammer" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD11)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_spear" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD6)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_halberd" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD6)
    }
    if (event.itemStack.id == "spartanweaponry:electrum_warhammer" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD11)
    }
    if (event.itemStack.id == "alexsmobs:spectral_dagger" && event.slotType == "mainhand") {
        event.addModifier("combatroll:distance", LIFE_STEAL_MOD)
    }
    if (event.itemStack.id == "minecraft:netherite_axe" && event.slotType == "mainhand") {
        event.addModifier("combatroll:distance", ROLL_MOD8)
    }
    if (event.itemStack.id == "oreganized:electrum_axe" && event.slotType == "mainhand") {
        event.addModifier("combatroll:distance", ROLL_MOD8)
    }
    if (event.itemStack.id == "deeperdarker:warden_axe" && event.slotType == "mainhand") {
        event.addModifier("combatroll:distance", ROLL_MOD9)
    }
    if (event.itemStack.id == "minecraft:diamond_axe" && event.slotType == "mainhand") {
        event.addModifier("combatroll:distance", ROLL_MOD7)
    }
    if (event.itemStack.id == "minecraft:iron_axe" && event.slotType == "mainhand") {
        event.addModifier("combatroll:distance", ROLL_MOD5)
    }
    if (event.itemStack.id == "deeperdarker:resonarium_axe" && event.slotType == "mainhand") {
        event.addModifier("combatroll:distance", ROLL_MOD5)
    }
    if (event.itemStack.id == "cataclysm:black_steel_axe" && event.slotType == "mainhand") {
        event.addModifier("combatroll:distance", ROLL_MOD5)
    }
    if (event.itemStack.id == "alexscaves_torpedoes:scarlet_axe" && event.slotType == "mainhand") {
        event.addModifier("combatroll:distance", ROLL_MOD6)
    }
    if (event.itemStack.id == "alexscaves_torpedoes:azure_axe" && event.slotType == "mainhand") {
        event.addModifier("combatroll:distance", ROLL_MOD6)
    }
    if (event.itemStack.id == "minecraft:copper_axe" && event.slotType == "mainhand") {
        event.addModifier("combatroll:distance", ROLL_MOD6)
    }
    if (event.itemStack.id == "minecraft:golden_axe" && event.slotType == "mainhand") {
        event.addModifier("combatroll:distance", ROLL_MOD)
    }
    if (event.itemStack.id == "minecraft:stone_axe" && event.slotType == "mainhand") {
        event.addModifier("combatroll:distance", ROLL_MOD3)
    }
    if (event.itemStack.id == "minecraft:wooden_axe" && event.slotType == "mainhand") {
        event.addModifier("combatroll:distance", ROLL_MOD2)
    }
    if (event.itemStack.id == "alexsmobs:novelty_hat" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", STAM_MOD)
    }
    if (event.itemStack.id == "biomemakeover:witch_hat" && event.slotType == "head") {
        event.addModifier("potioncore:magic_damage", MAGIC_MOD)
    }
    if (event.itemStack.id == "spelunkers_charm:candle_helmet" && event.slotType == "head") {
        event.addModifier("potioncore:magic_damage", HELM_MOD)
    }
    if (event.itemStack.id == "spelunkers_charm:candle_on_helmet" && event.slotType == "head") {
        event.addModifier("potioncore:magic_damage", HELM_MOD)
    }
    if (event.itemStack.id == "cataclysm:bloom_stone_pauldrons" && event.slotType == "chest") {
        event.addModifier("functionalarmortrim:thorns", THORN_MOD)
    }
    if (event.itemStack.id == "rootoffear:wraithwood_helmet" && event.slotType == "head") {
        event.addModifier("exsanguination:flamability", EXP_MOD)
    }
    if (event.itemStack.id == "alexscaves:hood_of_darkness" && event.slotType == "head") {
        event.addModifier("alexscavesexemplified:rabies_resistance", RABIES_RES)
    }
    if (event.itemStack.id == "alexscaves:cloak_of_darkness" && event.slotType == "chest") {
        event.addModifier("alexscavesexemplified:rabies_resistance", RABIES_RES2)
    }
    if (event.itemStack.id == "rootoffear:wraithwood_chestplate" && event.slotType == "chest") {
        event.addModifier("exsanguination:flamability", EXP_MOD2)
    }
    if (event.itemStack.id == "rootoffear:wraithwood_leggings" && event.slotType == "legs") {
        event.addModifier("exsanguination:flamability", EXP_MOD3)
    }
    if (event.itemStack.id == "rootoffear:wraithwood_boots" && event.slotType == "feet") {
        event.addModifier("exsanguination:flamability", EXP_MOD4)
    }
    if (event.itemStack.id == "rootoffear:fadedwood_helmet" && event.slotType == "head") {
        event.addModifier("exsanguination:flamability", EXP_MOD)
    }
    if (event.itemStack.id == "spartanweaponry:studded_cestus" && event.slotType == "mainhand") {
        event.addModifier("exsanguination:flamability", EXP_MOD5)
    }
    if (event.itemStack.id == "rootoffear:fadedwood_chestplate" && event.slotType == "chest") {
        event.addModifier("exsanguination:flamability", EXP_MOD2)
    }
    if (event.itemStack.id == "rootoffear:fadedwood_leggings" && event.slotType == "legs") {
        event.addModifier("exsanguination:flamability", EXP_MOD3)
    }
    if (event.itemStack.id == "rootoffear:fadedwood_boots" && event.slotType == "feet") {
        event.addModifier("exsanguination:flamability", EXP_MOD4)
    }
    if (event.itemStack.id == "minecraft:golden_hoe" && event.slotType == "mainhand") {
        event.addModifier("forge:block_reach", REACH_MOD_B)
        event.addModifier("forge:entity_reach", REACH_MOD_A)
    }

    if (event.itemStack.id == "alexscaves_torpedoes:shadow_axe" && event.slotType == "mainhand") {
        event.addModifier("forge:entity_reach", SHADOWMEN_A)
    }

    if (event.itemStack.id == "minecraft:wooden_hoe" && event.slotType == "mainhand") {
        event.addModifier("forge:block_reach", REACH_MOD_B2)
        event.addModifier("forge:entity_reach", REACH_MOD_A2)
    }
    if (event.itemStack.id == "minecraft:stone_hoe" && event.slotType == "mainhand") {
        event.addModifier("forge:block_reach", REACH_MOD_B3)
        event.addModifier("forge:entity_reach", REACH_MOD_A3)
    }
    if (event.itemStack.id == "minecraft:copper_hoe" && event.slotType == "mainhand") {
        event.addModifier("forge:block_reach", REACH_MOD_B6)
        event.addModifier("forge:entity_reach", REACH_MOD_A6)
    }
    if (event.itemStack.id == "minecraft:iron_hoe" && event.slotType == "mainhand") {
        event.addModifier("forge:block_reach", REACH_MOD_B5)
        event.addModifier("forge:entity_reach", REACH_MOD_A5)
    }
    if (event.itemStack.id == "deeperdarker:resonarium_hoe" && event.slotType == "mainhand") {
        event.addModifier("forge:block_reach", REACH_MOD_B5)
        event.addModifier("forge:entity_reach", REACH_MOD_A5)
    }
    if (event.itemStack.id == "cataclysm:black_steel_hoe" && event.slotType == "mainhand") {
        event.addModifier("forge:block_reach", REACH_MOD_B5)
        event.addModifier("forge:entity_reach", REACH_MOD_A5)
    }
    if (event.itemStack.id == "alexscaves_torpedoes:scarlet_hoe" && event.slotType == "mainhand") {
        event.addModifier("forge:block_reach", REACH_MOD_A5)
        event.addModifier("forge:entity_reach", REACH_MOD_A5)
    }
    if (event.itemStack.id == "alexscaves_torpedoes:azure_hoe" && event.slotType == "mainhand") {
        event.addModifier("forge:block_reach", REACH_MOD_A5)
        event.addModifier("forge:entity_reach", REACH_MOD_A5)
    }
    if (event.itemStack.id == "minecraft:diamond_hoe" && event.slotType == "mainhand") {
        event.addModifier("forge:block_reach", REACH_MOD_A7)
        event.addModifier("forge:entity_reach", REACH_MOD_A7)
    }
    if (event.itemStack.id == "oreganized:electrum_hoe" && event.slotType == "mainhand") {
        event.addModifier("oreganized:kinetic_damage", KID_MOD)
        event.addModifier("forge:block_reach", REACH_MOD_A8)
        event.addModifier("forge:entity_reach", REACH_MOD_A8)
    }
    if (event.itemStack.id == "deeperdarker:warden_hoe" && event.slotType == "mainhand") {
        event.addModifier("forge:block_reach", REACH_MOD_A9)
        event.addModifier("forge:entity_reach", REACH_MOD_A9)
    }
    if (event.itemStack.id == "minecraft:netherite_hoe" && event.slotType == "mainhand") {
        event.addModifier("forge:block_reach", REACH_MOD_A8)
        event.addModifier("forge:entity_reach", REACH_MOD_A8)
    }
})

EntityJSEvents.attributes(event => {
    let sculky = [
        'sculkhorde:sculk_sheep',
        'deeperdarker:angler_fish',
        'deeperdarker:sculk_centipede',
        'deeperdarker:sculk_leech',
        'deeperdarker:sculk_snapper',
        'deeperdarker:shattered',
        'deeperdarker:shriek_worm',
        'deeperdarker:sludge',
        'deeperdarker:stalker',
        'sculkhorde:sculk_mite',
        'sculkhorde:sculk_mite_aggressor',
        'sculkhorde:sculk_bee_harvester',
        'sculkhorde:sculk_bee_infector',
        'sculkhorde:sculk_creeper',
        'sculkhorde:sculk_enderman',
        'sculkhorde:sculk_leech',
        'sculkhorde:sculk_hatcher',
        'sculkhorde:sculk_ravager',
        'sculkhorde:sculk_spitter',
        'sculkhorde:sculk_vindicator',
        'sculkhorde:sculk_zombie',
        'sculkhorde:sculk_phantom',
        'sculkhorde:sculk_phantom_corpse',
        'sculkhorde:sculk_salmon',
        'sculkhorde:sculk_squid',
        'sculkhorde:sculk_pufferfish',
        'sculkhorde:sculk_soul_reaper',
        'sculkhorde:sculk_vex',
        'alexsmobs:skreecher'
    ]
    sculky.forEach(w => {
        event.modify(w, attribute => {
            attribute.add("minecraft:generic.armor", 25)
            attribute.add("minecraft:generic.armor_toughness", 15)
            attribute.add("minecraft:generic.knockback_resistance", 0.1)
        })
    })
    event.modify("alexsmobs:warped_mosco", attribute => {
        attribute.add("minecraft:generic.max_health", 400)
    })
    event.modify("minecraft:polar_bear", attribute => {
        attribute.add("minecraft:generic.max_health", 70)
        attribute.add("minecraft:generic.attack_damage", 13)
        attribute.add("minecraft:generic.follow_range", 20)
    })
    event.modify("minecraft:creeper", attribute => {
        attribute.add("minecraft:generic.knockback_resistance", 0.1)
    })
    event.modify("minecraft:iron_golem", attribute => {
        attribute.add("biomemakeover:projectile_resistance", 0.1)
    })
    event.modify("minecraft:vex", attribute => {
        attribute.add("puffish_attributes:life_steal", 0.125)
    })
    event.modify("sculkhorde:sculk_witch", attribute => {
        attribute.add("minecraft:generic.max_health", 30)
        attribute.add("minecraft:generic.armor", 25)
        attribute.add("minecraft:generic.armor_toughness", 10)
    })
    event.modify("minecraft:villager", attribute => {
        attribute.add("minecraft:generic.armor", 6)
    })
})


ItemEvents.modification(event => {
    event.modify('trials:ominous_bottle', item => {
        const builder = new ItemBuilder("trials:ominous_bottle").glow(true);
        item.setItemBuilder(builder);
    })
})

ItemEvents.modification(event => {
    event.modify('map_atlases:soulbound_map_atlas', item => {
        const builder = new ItemBuilder("map_atlases:soulbound_map_atlas").glow(true);
        item.setItemBuilder(builder);
    })
})


ItemEvents.modification(event => {
    event.modify(['alexscaves_torpedoes:tectonic_helmet', 'alexscaves_torpedoes:tectonic_chestplate', 'alexscaves_torpedoes:tectonic_leggings', 'alexscaves_torpedoes:tectonic_boots', 'alexscavesdelight:pure_darkness_knife', 'alexscavesdelight:pure_darkness_knife', 'alexscaves:totem_of_possession', 'alexscavesdelight:pure_darkness_shake', 'mobcompack:hammer', 'alexscavesdelight:tectonic_knife'], item => {
        item.rarity = 'alexscaves:demonic'
    })
})
ItemEvents.modification(event => {
    event.modify([
"alexscaves_torpedoes:shadow_pickaxe",
"alexscaves_torpedoes:shadow_sword",
"alexscaves_torpedoes:shadow_axe",
"alexscaves_torpedoes:shadow_shovel",
"alexscaves_torpedoes:shadow_hoe"], item => {
        item.rarity = "alexscaves:demonic"
    })
})

ItemEvents.modification(event => {
    event.modify(['alexscavesdelight:sweet_tooth_knife', 'alexscaves:gingerbread_helmet', 'alexscaves:gingerbread_chestplate', 'alexscaves:gingerbread_leggings', 'alexscaves:gingerbread_boots', 'alexscavesdelight:gingerbread_knife', 'alexscaves:shot_gum'], item => {
        item.rarity = 'alexscaves:sweet'
    })
})

ItemEvents.modification(event => {
    event.modify(['alexscaves:charred_remnant', 'alexscaves:hazmat_mask', 'alexscaves:hazmat_chestplate', 'alexscaves:hazmat_leggings', 'alexscaves:hazmat_boots', 'alexscaves:uranium_shard', 'alexscaves:uranium', 'alexscaves:uranium_rod', 'alexscavesdelight:uranium_knife', 'alexscaves:raygun', 'alexscavesdelight:uranium_pie', 'alexscaves:radrock_uranium_ore', 'alexscaves:block_of_uranium', 'alexscavesdelight:toxic_hamburger'], item => {
        item.rarity = 'alexscaves:nuclear'
    })
})

ItemEvents.modification(event => {
    event.modify(['alexsmobs:unsettling_kimono', 'outer_end:mint_crystal_helmet', 'outer_end:mint_crystal_chestplate', 'outer_end:mint_crystal_leggings', 'outer_end:mint_crystal_boots'], item => {
        item.rarity = 'RARE'
    })
})

ItemEvents.modification(event => {
    event.modify(["archeological:netherite_charm", 
        "deeperdarker:warden_horse_armor",
        "spartandeeperdarker:warden_warhammer",
        "spartandeeperdarker:warden_dagger",
        "spartandeeperdarker:warden_rapier",
        "spartandeeperdarker:warden_katana",
        "deeperdarker:warden_layered_padding",
        "spartandeeperdarker:warden_parrying_dagger",
        "spartandeeperdarker:warden_battle_hammer",
        "spartandeeperdarker:warden_spear",
        "spartandeeperdarker:warden_halberd",
        "spartandeeperdarker:warden_throwing_knife",
        "spartandeeperdarker:warden_longbow",
        "spartandeeperdarker:warden_pike",
        "spartandeeperdarker:warden_tomahawk",
        "spartandeeperdarker:warden_boomerang",
        "spartandeeperdarker:warden_battleaxe",
        "spartandeeperdarker:warden_flanged_mace",
        "spartandeeperdarker:warden_quarterstaff",
        "spartandeeperdarker:warden_scythe",
        "spartandeeperdarker:warden_glaive",
        "spartandeeperdarker:warden_greatsword"], item => {
        item.rarity = 'RARE'
    })
})
ItemEvents.modification(event => {
    event.modify(['archeological:ancient_socks','alexscaves_torpedoes:magnet_display','scalinghealth:medkit','rootoffear:agitated_primitive_heart', 'alexscavesdelight:azure_neodymium_knife', 'alexscavesdelight:scarlet_neodymium_knife', 'alexscaves_torpedoes:azure_pickaxe', 'alexscaves_torpedoes:azure_axe', 'alexscaves_torpedoes:azure_axe', 'alexscaves_torpedoes:azure_sword', 'alexscaves_torpedoes:azure_hoe', 'alexscaves_torpedoes:azure_shovel', 'alexscaves_torpedoes:ferrousslime_boots'], item => {
        item.rarity = 'UNCOMMON'
    })
})

ItemEvents.modification(event => {
    event.modify(['alexscaves_torpedoes:pulsargun', 'spartanweaponry:studded_cestus', 'alexscaves_torpedoes:scarlet_pickaxe', 'rootoffear:stripped_faded_oak_log', 'rootoffear:stripped_faded_oak_wood', 'rootoffear:faded_oak_log', 'rootoffear:faded_oak_wood', 'alexscaves_torpedoes:scarlet_axe', 'alexscaves_torpedoes:scarlet_axe', 'alexscaves_torpedoes:scarlet_sword', 'alexscaves_torpedoes:pocket_magnet', 'alexscaves_torpedoes:scarlet_hoe', 'alexscaves_torpedoes:scarlet_shovel', 'alexscaves_torpedoes:magnetic_helmet'], item => {
        item.rarity = 'UNCOMMON'
    })
})
ItemEvents.modification(event => {
    event.modify(['outer_end:rose_crystal_helmet', 'outer_end:rose_crystal_chestplate', 'outer_end:rose_crystal_leggings', 'outer_end:rose_crystal_boots', 'alexscaves:diving_helmet', 'alexscaves:diving_chestplate', 'alexscaves:diving_leggings', 'alexscaves:diving_boots'], item => {
        item.rarity = 'RARE'
    })
})
ItemEvents.modification(event => {
    event.modify(['outer_end:cobalt_crystal_helmet', 'outer_end:cobalt_crystal_chestplate', 'outer_end:cobalt_crystal_leggings', 'outer_end:cobalt_crystal_boots', 'alexscaves:diving_helmet', 'alexscaves:diving_chestplate', 'alexscaves:diving_leggings', 'alexscaves:diving_boots'], item => {
        item.rarity = 'RARE'
    })
})
ItemEvents.modification(event => {
    event.modify(['cataclysm:bone_reptile_chestplate', 'cataclysm:bone_reptile_helmet', 'cataclysm:khopesh', 'tide:enchanted_golden_apple_fishing_bobber', 'cataclysm:necklace_of_the_desert'], item => {
        item.rarity = 'RARE'
    })
})

ItemEvents.modification(event => {
    event.modify(['tide:enchanted_golden_apple_fishing_bobber'], item => {
        item.rarity = 'EPIC'
    })
})

ItemEvents.modification(event => {
    event.modify('scalinghealth:heart_crystal', item => {
        item.rarity = 'RARE'
        item.burnTime = 1900
        item.maxStackSize = 16
    })
})


ItemEvents.modification(event => {
    event.modify('scalinghealth:heart_dust', item => {
        item.rarity = 'EPIC'
        item.maxStackSize = 8
        item.burnTime = 7000
    })
})

ItemEvents.modification(event => {
    event.modify('scalinghealth:heart_crystal_shard', item => {
        item.rarity = 'EPIC'
        item.maxStackSize = 4
    })
})


ItemEvents.modification(event => {
    event.modify('minecraft:wheat', item => {
        item.foodProperties = food => {
            food.hunger(1)
            food.saturation(1)
            food.removeEffect("minecraft:hunger")
        }
    })
})


ItemEvents.modification(event => {
    event.modify('deeperdarker:bloom_berries', item => {
        item.foodProperties = food => {
            food.hunger(2)
            food.saturation(1)
            food.removeEffect('sculkhorde:sculk_lure')
            food.removeEffect('sculkhorde:sculk_infected')
            food.removeEffect('alexsmobsinteraction:skreeching')
        }
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:cooked_porkchop', item => {
        item.foodProperties = food => {
            food.effect('minecraft:poison', 80, 1, 0.3)
        }
    })
})


ItemEvents.modification(event => {
    event.modify('minecraft:porkchop', item => {
        item.foodProperties = food => {
            food.effect('minecraft:poison', 160, 1, 0.8)
        }
    })
})

ItemEvents.modification(event => {
    event.modify('biomesoplenty:flesh_chunk', item => {
        item.maxStackSize = 32
        item.foodProperties = food => {
            food.effect('minecraft:nausea', 150, 1, 1.0)
            food.hunger(1)
            food.meat()

        }
    })
})

ItemEvents.modification(event => {
    event.modify('biomesoplenty:cooked_flesh_chunk', item => {
        item.maxStackSize = 32
        item.foodProperties = food => {
            food.hunger(2)
            food.saturation(2)
            food.meat()

        }
    })
})


ItemEvents.modification(event => {
    event.modify(
        ['minecraft:cooked_porkchop',
            'minecraft:cooked_mutton',
            'farmersdelight:cooked_salmon_slice',
            'farmersdelight:cooked_bacon',
            'alexscavesdelight:cut_dinosaur_chop_cooked',
            'alexscavesdelight:cut_cooked_trilocararis',
            'alexscavesdelight:cut_cooked_tripodfish',
            'alexscavesdelight:cooked_sea_pig',
            'netherexp:cooked_hogham',
            'farmersdelight:cooked_cod_slice',
            'minecraft:cooked_chicken',
            'alexscaves:cooked_radgill',
            'alexscaves:cooked_lanternfish',
            'alexscaves:cooked_tripodfish',
            'minecraft:cooked_beef',
            'alexscavesdelight:cut_cooked_radgill',
            'alexscavesdelight:cut_cooked_lanternfish',
            'farmersdelight:cooked_mutton_chops',
            'alexscaves:trilocaris_tail',
            'minecraft:cooked_rabbit',
            'alexsmobs:cooked_catfish',
            'netherdepthsupgrade:cooked_soulsucker_slice',
            'netherdepthsupgrade:cooked_glowdine_slice',
            'netherdepthsupgrade:cooked_magmacubefish_slice',
            'netherdepthsupgrade:blazefish',
            'netherdepthsupgrade:fortress_grouper',
            'netherdepthsupgrade:magmacubefish_slice',
            'netherdepthsupgrade:magmacubefish',
            'tide:sunspike_goby',
            'netherdepthsupgrade:magmacubefish_roll',
            'outer_end:cooked_stalker_meat',
            'farmersdelight:cabbage_rolls',
            'quarkdelight:miso_with_bamboo_sprouts',
            'farmersdelight:fried_rice',
            'farmersdelight:beef_stew',
            'farmersdelight:fried_egg',
            'quarkdelight:crab_pasta',
            'alexscavesdelight:acid_radgill_stew',
            'quarkdelight:cooked_whole_crab',
            'alexscavesdelight:relicheirus_noodle_soup',
            'alexscavesdelight:acid_juice',
            'farmersdelight:baked_cod_stew',
            'netherdepthsupgrade:baked_glowdine_stew',
            'minecraft:rabbit_stew',
            'alexscavesdelight:caramel_jem',
            'alexsdelight:kangaroo_stew',
            'farmersdelight:squid_ink_pasta',
            'farmersdelight:ratatouille',
            'farmersdelight:pasta_with_mutton_chop',
            'alexsdelight:kangaroo_pasta',
            'quarkdelight:bucket_of_sweet_gelatine',
            'farmersdelight:mushroom_rice',
            'farmersdelight:vegetable_noodles',
            'farmersdelight:cooked_rice',
            'farmersdelight:dumplings',
            'farmersdelight:vegetable_soup',
            'farmersdelight:pasta_with_meatballs',
            'farmersdelight:stuffed_pumpkin_block',
            'farmersdelight:chicken_soup',
            'farmersdelight:tomato_sauce',
            'alexscavesdelight:licoroot_juice',
            'farmersdelight:glow_berry_custard'
        ], item => {
            item.foodProperties = food => {
                food.effect('toughasnails:internal_warmth', 150, 0, 0.6)
            }
        }
    )
})
ItemEvents.modification(event => {
    event.modify(
        ['alexscavesdelight:licoroot_juice',
            'farmersdelight:glow_berry_custard',
            'quarkdelight:cavern_explorer_stew',
            'biomemakeover:glowshroom_stew',
            'alexsmobs:mosquito_repellent_stew',
            'alexscaves:vesper_stew',
            'alexscaves:seething_stew',
            'minecraft:suspicious_stew',
            'luminous_nether:golden_stew',
            'alexscaves:lanternfish',
            'alexscaves:tripodfish',
            'minecraft:mushroom_stew'
        ], item => {
            item.foodProperties = food => {
                food.effect('toughasnails:internal_chill', 150, 0, 0.6)
            }
        }
    )
})


ItemEvents.modification(event => {
    event.modify('deeperdarker:heart_of_the_deep', item => {
        item.foodProperties = food => {
            food.hunger(3)
            food.saturation(1)
            food.meat()
            food.alwaysEdible()
            food.effect('potioncore:curse', 900, 4, 1.0)
            food.effect('minecraft:nausea', 200, 1, 1.0)
            food.effect('minecraft:blindness', 200, 1, 1.0)
            food.effect('sculkhorde:sculk_infected', 90, 3, 1.0)
            food.effect('minecraft:strength', 150, 1, 1.0)
            food.effect('potioncore:repair', 200, 0, 1.0)
        }
    })
})

ItemEvents.modification(event => {
    event.modify('deeperdarker:sliced_heart_of_the_deep', item => {
        item.foodProperties = food => {
            food.hunger(3)
            food.saturation(1)
            food.meat()
            food.alwaysEdible()
            food.effect('sculkhorde:sculk_infected', 9000, 0, 1.0)
            food.effect('potioncore:curse', 900, 0, 1.0)
            food.effect('minecraft:nausea', 300, 1, 1.0)
            food.effect('minecraft:strength', 1300, 3, 1.0)
            food.effect('potioncore:repair', 1900, 1, 1.0)
        }
    })
})

ItemEvents.modification(event => {
    event.modify('luminous_nether:crimson_flesh_2', item => {
        item.foodProperties = food => {
            food.hunger(3)
            food.saturation(1)
            food.meat()
            food.effect('toughasnails:ice_resistance', 1000, 0, 1.0)
            food.effect('potioncore:fire', 5, 0, 1.0)
            food.effect('minecraft:hunger', 800, 0, 1.0)
        }
    })
})


ItemEvents.modification(event => {
    event.modify('luminous_monsters:frozen_flesh', item => {
        item.foodProperties = food => {
            food.hunger(2)
            food.meat()
            food.effect('minecraft:fire_resistance', 1000, 0, 1.0)
            food.effect('yungscavebiomes:frost', 5, 0, 1.0)
            food.effect('toughasnails:internal_chill', 800, 0, 1.0)
            food.effect('minecraft:hunger', 500, 0, 1.0)
        }
    })
})



ItemEvents.modification(event => {
    event.modify('tide:shooting_starfish', item => {
        item.foodProperties = food => {
            food.hunger(10)
            food.saturation(5)
            food.alwaysEdible()
            food.effect('potioncore:revival', 850, 0, 1)
        }
    })
})

ItemEvents.modification(event => {
    event.modify('minecraft:glistering_melon_slice', item => {
        item.foodProperties = food => {
            food.hunger(3)
            food.saturation(1)
            food.alwaysEdible()
            food.effect('minecraft:health_boost', 850, 0, 0.4)
        }
    })
})



ItemEvents.modification(event => {
    event.modify('create:wrench', item => {
        item.maxDamage = 300

    })
})


ItemEvents.modification(event => {
    event.modify('scalinghealth:medkit', item => {
        item.maxDamage = 6

    })
})

ItemEvents.modification(event => {
    event.modify('spelunkery:echo_fork', item => {
        item.maxDamage = 25

    })
})


ItemEvents.modification(event => {
    event.modify('spelunkery:tuning_fork', item => {
        item.maxDamage = 15

    })
})


ItemEvents.modification(event => {
    event.modify('scalinghealth:power_crystal_shard', item => {
        item.maxDamage = 15

    })
})



ItemEvents.modification(event => {
    event.modify('spelunkery:magnetic_compass', item => {
        item.maxDamage = 2500

    })
})

ItemEvents.modification(event => {
    event.modify('spelunkery:depth_gauge', item => {
        item.maxDamage = 1500

    })
})



ItemEvents.modification(event => {
    event.modify('spelunkery:flint_hammer_and_chisel', item => {
        item.maxDamage = 50

    })
})

ItemEvents.modification(event => {
    event.modify('spelunkery:obsidian_hammer_and_chisel', item => {
        item.maxDamage = 200

    })
})

// Buffs
ItemEvents.modification(event => {
    event.modify('toughasnails:leaf_helmet', item => {
        item.maxDamage = 60

    })
})

ItemEvents.modification(event => {
    event.modify('toughasnails:leaf_chestplate', item => {
        item.maxDamage = 100

    })
})


ItemEvents.modification(event => {
    event.modify('toughasnails:leaf_leggings', item => {
        item.maxDamage = 90

    })
})

ItemEvents.modification(event => {
    event.modify('toughasnails:leaf_boots', item => {
        item.maxDamage = 70

    })
})

ItemEvents.modification(event => {
    event.modify('toughasnails:wool_helmet', item => {
        item.maxDamage = 60

    })
})

ItemEvents.modification(event => {
    event.modify('toughasnails:wool_chestplate', item => {
        item.maxDamage = 100

    })
})


ItemEvents.modification(event => {
    event.modify('toughasnails:wool_leggings', item => {
        item.maxDamage = 90

    })
})

ItemEvents.modification(event => {
    event.modify('toughasnails:wool_boots', item => {
        item.maxDamage = 70

    })
})


ItemEvents.modification(event => {
    event.modify(['rootoffear:fadedwood_helmet', 'rootoffear:fadedwood_chestplate', 'rootoffear:fadedwood_leggings', 'rootoffear:fadedwood_boots', 'rootoffear:wraithwood_helmet', 'rootoffear:wraithwood_chestplate', 'rootoffear:wraithwood_leggings', 'rootoffear:wraithwood_boots'], item => {
        item.rarity = 'UNCOMMON'
        item.maxStackSize = 1
    })
})

ItemEvents.modification(event => {
    event.modify([
"archeological:rusty_shovel",
"archeological:rusty_pickaxe",
"archeological:rusty_sword",
"archeological:rusty_axe",
"archeological:rusty_hoe"], item => {
        item.rarity = "UNCOMMON"
    })
})

ItemEvents.modification(event => {
    event.modify(['sculkhorde:purification_flask'], item => {
        item.rarity = 'UNCOMMON'
        item.maxStackSize = 6
    })
})

ItemEvents.modification(event => {
    event.modify(['sculkhorde:essence_of_purity', 'sculkhorde:heart_of_purity'], item => {
        item.rarity = 'UNCOMMON'
        item.maxStackSize = 32
    })
})


ItemEvents.modification(event => {
    event.modify(['deeperdarker:warden_layered_padding', 'scalinghealth:power_crystal', 'deeperdarker:warden_plate'], item => {
        item.maxStackSize = 8
    })
})

ItemEvents.modification(event => {
    event.modify('alexscavesdelight:filled_heart_of_iron', item => {
        item.foodProperties = food => {
            food.hunger(5)
            food.saturation(3)
            food.fastToEat()
            food.effect('minecraft:slowness', 1000, 0.5, 1.0)
            food.effect('minecraft:wither', 2400, 0.5, 1.0)
            food.effect('alexscaves:magnetizing', 3000, 0.5, 1.0)

        }
    })
})



ItemEvents.modification(event => {
    event.modify('alexscavesdelight:tremorzilla_maet', item => {
        item.foodProperties = food => {
            food.hunger(20)
            food.saturation(20)
        }
    })
})


ItemEvents.modification(event => {
    event.modify('alexscavesdelight:relicheirus_noodle_soup', item => {
        item.foodProperties = food => {
            food.hunger(12)
            food.saturation(8)
            food.fastToEat()

        }
    })
})

ItemEvents.modification(event => {
    event.modify('alexscavesdelight:sea_pig_soup', item => {
        item.foodProperties = food => {
            food.hunger(8)
            food.saturation(4)
            food.fastToEat()

        }
    })
})

ItemEvents.modification(event => {
    event.modify('alexscavesdelight:sweetberry_ice_cream', item => {
        item.foodProperties = food => {
            food.hunger(2)
            food.saturation(1)
            food.fastToEat()

        }
    })
})

ItemEvents.modification(event => {
    event.modify('alexscavesdelight:chocolate_ice_cream', item => {
        item.foodProperties = food => {
            food.hunger(2)
            food.saturation(1)
            food.fastToEat()

        }
    })
})

ItemEvents.modification(event => {
    event.modify('alexscavesdelight:vanilla_ice_cream', item => {
        item.foodProperties = food => {
            food.hunger(2)
            food.saturation(1)
            food.fastToEat()

        }
    })
})

ItemEvents.modification(event => {
    event.modify('alexscavesdelight:cooked_heart_of_iron', item => {
        item.foodProperties = food => {
            food.hunger(4)
            food.saturation(3)
            food.effect('minecraft:wither', 100, 0.5, 0.3)
            food.effect('alexscaves:magnetizing', 1200, 0.5, 0.6)

        }
    })
})

ItemEvents.modification(event => {
    event.modify('alexscavesdelight:cooked_ferrouslime_ball', item => {
        item.foodProperties = food => {
            food.hunger(2)
            food.saturation(1)
            food.fastToEat()
            food.effect('minecraft:wither', 100, 0.5, 0.3)
            food.effect('alexscaves:magnetizing', 100, 0.5, 1.0)

        }
    })
})



// Head
const HEAVYNERF_HEAD = new $AttributeModifier(
    "32981a61-1c29-4665-990b-a221b494d149",
    "puffish_attributes:stamina",
    -1,
    "ADDITION"
)
const HIGHNERF_HEAD = new $AttributeModifier(
    "9e1f4fdb-8a7c-4ec5-86ad-bef37d71c6e5",
    "puffish_attributes:stamina",
    -0.75,
    "ADDITION"
)

const MIDNERF_HEAD = new $AttributeModifier(
    "3494f1e0-a6c3-45bc-84f5-0381217211a0",
    "puffish_attributes:stamina",
    -0.5,
    "ADDITION"
)

const LOWNERF_HEAD = new $AttributeModifier(
    "4d170875-88f0-4266-95bf-b70d62772bf3",
    "puffish_attributes:stamina",
    -0.25,
    "ADDITION"
)

const SMALLNERF_HEAD = new $AttributeModifier(
    "16dacc2e-4357-4722-8dae-d4888cbefee4",
    "puffish_attributes:stamina",
    -0.1,
    "ADDITION"
)

// Chest
const HEAVYNERF_CHEST = new $AttributeModifier(
    "16ed9f70-ffc6-4e40-980e-97f7394f81d1",
    "puffish_attributes:stamina",
    -1,
    "ADDITION"
)
const HIGHNERF_CHEST = new $AttributeModifier(
    "badc602b-ae2c-47b4-bb1f-2d8700c38e33",
    "puffish_attributes:stamina",
    -0.75,
    "ADDITION"
)

const MIDNERF_CHEST = new $AttributeModifier(
    "4fbd0c98-2cbf-4014-887b-870ba3f0af7b",
    "puffish_attributes:stamina",
    -0.5,
    "ADDITION"
)

const LOWNERF_CHEST = new $AttributeModifier(
    "c78e870b-9422-4177-a98d-44d69bdb605b",
    "puffish_attributes:stamina",
    -0.25,
    "ADDITION"
)

const SMALLNERF_CHEST = new $AttributeModifier(
    "0861da12-bd91-4ba8-bc03-42386a5f6771",
    "puffish_attributes:stamina",
    -0.1,
    "ADDITION"
)

// Legs
const HEAVYNERF_LEGS = new $AttributeModifier(
    "a2aab8c3-50c0-4607-8342-c05fa89947c0",
    "puffish_attributes:stamina",
    -1,
    "ADDITION"
)
const HIGHNERF_LEGS = new $AttributeModifier(
    "3ea936f5-4be1-42e4-b0cb-fb174e10f29c",
    "puffish_attributes:stamina",
    -0.75,
    "ADDITION"
)

const MIDNERF_LEGS = new $AttributeModifier(
    "fc40a44e-b2e4-4dc6-84b5-eada0bf71ca3",
    "puffish_attributes:stamina",
    -0.5,
    "ADDITION"
)

const LOWNERF_LEGS = new $AttributeModifier(
    "64f43d19-6013-4f68-ae67-6eb2975cdf05",
    "puffish_attributes:stamina",
    -0.25,
    "ADDITION"
)

const SMALLNERF_LEGS = new $AttributeModifier(
    "fa64abd8-9347-4294-8316-0795e1230d84",
    "puffish_attributes:stamina",
    -0.1,
    "ADDITION"
)

// Boots
const HEAVYNERF_FEET = new $AttributeModifier(
    "3c74d731-3a44-41ff-87ea-e2a720e68056",
    "puffish_attributes:stamina",
    -1,
    "ADDITION"
)
const HIGHNERF_FEET = new $AttributeModifier(
    "930a2a58-8701-4a8c-8740-dbc9613bc10d",
    "puffish_attributes:stamina",
    -0.75,
    "ADDITION"
)


const MIDNERF_FEET = new $AttributeModifier(
    "f60dcb7d-8667-491f-984e-a199f46d7955",
    "puffish_attributes:stamina",
    -0.5,
    "ADDITION"
)


const LOWNERF_FEET = new $AttributeModifier(
    "5b188fea-43ad-4eb8-9c96-a4095797d220",
    "puffish_attributes:stamina",
    -0.25,
    "ADDITION"
)


const SMALLNERF_FEET = new $AttributeModifier(
    "bd489f85-3c99-4869-9a3d-33c9b3bcfcda",
    "puffish_attributes:stamina",
    -0.1,
    "ADDITION"
)

ForgeEvents.onEvent("net.minecraftforge.event.ItemAttributeModifierEvent", (event) => {
    // Helmets
    if (event.itemStack.id == "cataclysm:ignitium_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_HEAD)
    }
    if (event.itemStack.id == "cataclysm:cursium_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_HEAD)
    }
    if (event.itemStack.id == "outer_end:rose_crystal_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_HEAD)
    }
    if (event.itemStack.id == "deeperdarker:resonarium_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_HEAD)
    }
    if (event.itemStack.id == "alexscaves_torpedoes:tectonic_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_HEAD)
    }
    if (event.itemStack.id == "minecraft:netherite_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_HEAD)
    }

    if (event.itemStack.id == "cataclysm:monstrous_helm" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_HEAD)

    }
    if (event.itemStack.id == "deeperdarker:warden_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_HEAD)
    }
    if (event.itemStack.id == "minecraft:golden_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_HEAD)
    }
    if (event.itemStack.id == "rootoffear:wraithwood_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_HEAD)
    }
    if (event.itemStack.id == "rootoffear:fadedwood_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_HEAD)
    }
    if (event.itemStack.id == "cataclysm:bone_reptile_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_HEAD)
    }
    if (event.itemStack.id == "create:copper_diving_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_HEAD)
    }

    // Mid
    if (event.itemStack.id == "minecraft:diamond_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_HEAD)

    }
    if (event.itemStack.id == "create:netherite_diving_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_HEAD)
    }
    if (event.itemStack.id == "outer_end:cobalt_crystal_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_HEAD)
    }
    if (event.itemStack.id == "outer_end:mint_crystal_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_HEAD)
    }
    if (event.itemStack.id == "oreganized:electrum_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_HEAD)
    }
    if (event.itemStack.id == "minecraft:iron_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_HEAD)
    }
    if (event.itemStack.id == "alexscaves:primordial_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_HEAD)
    }
    // Mid
    if (event.itemStack.id == "alexscaves:diving_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", MIDNERF_HEAD)
    }
    if (event.itemStack.id == "alexscaves:hazmat_mask" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", MIDNERF_HEAD)
    }
    if (event.itemStack.id == "minecraft:chainmail_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", MIDNERF_HEAD)
    }
    if (event.itemStack.id == "createbigcannons:gas_mask" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", MIDNERF_HEAD)
    }

    if (event.itemStack.id == "alexscaves:hood_of_darkness" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", MIDNERF_HEAD)
    }
    // Low
    if (event.itemStack.id == "alexscaves:gingerbread_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", LOWNERF_HEAD)
    }
    if (event.itemStack.id == "minecraft:leather_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", LOWNERF_HEAD)
    }
    if (event.itemStack.id == "biomemakeover:cladded_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", LOWNERF_HEAD)
    }
    // Tiny
    if (event.itemStack.id == "toughasnails:leaf_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_HEAD)
    }
    if (event.itemStack.id == "minecraft:turtle_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_HEAD)
    }
    if (event.itemStack.id == "toughasnails:wool_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_HEAD)
    }
    if (event.itemStack.id == "create:cardboard_helmet" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_HEAD)
    }
    if (event.itemStack.id == "alexsmobs:frontier_cap" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_HEAD)
    }
    if (event.itemStack.id == "alexsmobs:moose_headgear" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_HEAD)
    }
    if (event.itemStack.id == "alexsmobs:sombrero" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_HEAD)
    }
    if (event.itemStack.id == "alexsmobs:fedora" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_HEAD)
    }
    if (event.itemStack.id == "quark:forgotten_hat" && event.slotType == "head") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_HEAD)
    }


    // Chestplates
    // Heavy
    if (event.itemStack.id == "cataclysm:ignitium_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_CHEST)
    }
    if (event.itemStack.id == "cataclysm:cursium_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_CHEST)
    }
    if (event.itemStack.id == "outer_end:rose_crystal_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_CHEST)
    }
    if (event.itemStack.id == "deeperdarker:resonarium_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_CHEST)
    }
    if (event.itemStack.id == "alexscaves_torpedoes:tectonic_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_CHEST)
    }
    if (event.itemStack.id == "minecraft:netherite_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_CHEST)
    }
    if (event.itemStack.id == "deeperdarker:warden_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_CHEST)
    }
    if (event.itemStack.id == "minecraft:golden_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_CHEST)
    }
    if (event.itemStack.id == "create:netherite_backtank" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_CHEST)
    }
    if (event.itemStack.id == "rootoffear:wraithwood_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_CHEST)
    }
    if (event.itemStack.id == "rootoffear:fadedwood_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_CHEST)
    }
    if (event.itemStack.id == "cataclysm:bone_reptile_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_CHEST)
    }
    if (event.itemStack.id == "cataclysm:ignitium_elytra_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_CHEST)
    }
    if (event.itemStack.id == "minecraft:diamond_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_CHEST)

    }
    // Mid
    if (event.itemStack.id == "outer_end:cobalt_crystal_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_CHEST)
    }
    if (event.itemStack.id == "outer_end:mint_crystal_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_CHEST)
    }
    if (event.itemStack.id == "oreganized:electrum_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_CHEST)
    }
    if (event.itemStack.id == "minecraft:iron_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_CHEST)
    }
    if (event.itemStack.id == "create:copper_backtank" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_CHEST)
    }
    // Mid
    if (event.itemStack.id == "alexsmobs:rocky_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", MIDNERF_CHEST)
    }
    if (event.itemStack.id == "alexscaves:diving_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", MIDNERF_CHEST)
    }
    if (event.itemStack.id == "alexscaves:hazmat_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", MIDNERF_CHEST)
    }
    if (event.itemStack.id == "minecraft:chainmail_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", MIDNERF_CHEST)
    }
    // Low
    if (event.itemStack.id == "alexscaves:gingerbread_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", LOWNERF_CHEST)
    }
    if (event.itemStack.id == "minecraft:leather_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", LOWNERF_CHEST)
    }
    if (event.itemStack.id == "alexscaves:primordial_tunic" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", LOWNERF_CHEST)
    }
    if (event.itemStack.id == "minecraft:elytra" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", LOWNERF_CHEST)
    }
    if (event.itemStack.id == "minecraft:elytra" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", LOWNERF_CHEST)
    }
    if (event.itemStack.id == "deeperdarker:soul_elytra" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", LOWNERF_CHEST)
    }
    if (event.itemStack.id == "alexsmobs:tarantula_hawk_elytra" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", LOWNERF_CHEST)
    }
    // Tiny
    if (event.itemStack.id == "toughasnails:leaf_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_CHEST)
    }
    if (event.itemStack.id == "toughasnails:wool_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_CHEST)
    }
    if (event.itemStack.id == "alexsmobs:unsettling_kimono" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_CHEST)
    }
    if (event.itemStack.id == "create:cardboard_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_CHEST)
    }
    if (event.itemStack.id == "vinery:winemaker_apron" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_CHEST)
    }
    if (event.itemStack.id == "biomemakeover:cladded_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_CHEST)
    }
    // Leggings
    // Heavy
    if (event.itemStack.id == "cataclysm:ignitium_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_LEGS)
    }
    if (event.itemStack.id == "cataclysm:cursium_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_LEGS)
    }
    if (event.itemStack.id == "outer_end:rose_crystal_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_LEGS)
    }
    if (event.itemStack.id == "deeperdarker:resonarium_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_LEGS)
    }
    if (event.itemStack.id == "alexscaves_torpedoes:tectonic_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_LEGS)
    }
    if (event.itemStack.id == "minecraft:netherite_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_LEGS)
    }
    if (event.itemStack.id == "deeperdarker:warden_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_LEGS)
    }
    if (event.itemStack.id == "minecraft:golden_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_LEGS)
    }
    if (event.itemStack.id == "rootoffear:wraithwood_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_LEGS)
    }
    if (event.itemStack.id == "rootoffear:fadedwood_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_LEGS)
    }

    // Mid
    if (event.itemStack.id == "minecraft:diamond_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_LEGS)

    }
    if (event.itemStack.id == "outer_end:cobalt_crystal_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_LEGS)
    }
    if (event.itemStack.id == "outer_end:mint_crystal_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_LEGS)
    }
    if (event.itemStack.id == "oreganized:electrum_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_LEGS)
    }
    if (event.itemStack.id == "minecraft:iron_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_LEGS)
    }
    // Mid
    if (event.itemStack.id == "alexscaves:diving_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", MIDNERF_LEGS)
    }
    if (event.itemStack.id == "alexscaves:diving_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", MIDNERF_LEGS)
    }
    if (event.itemStack.id == "alexsmobs:emu_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", MIDNERF_LEGS)
    }
    if (event.itemStack.id == "alexsmobs:centipede_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", MIDNERF_LEGS)
    }
    if (event.itemStack.id == "alexscaves:hazmat_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", MIDNERF_LEGS)
    }
    if (event.itemStack.id == "minecraft:chainmail_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", MIDNERF_LEGS)
    }
    if (event.itemStack.id == "alexsmobs:crocodile_chestplate" && event.slotType == "chest") {
        event.addModifier("puffish_attributes:stamina", MIDNERF_LEGS)
    }
    if (event.itemStack.id == "alexscaves:cloak_of_darkness" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", MIDNERF_LEGS)
    }
    // Low
    if (event.itemStack.id == "alexscaves:gingerbread_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", LOWNERF_LEGS)
    }
    if (event.itemStack.id == "minecraft:leather_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", LOWNERF_LEGS)
    }
    if (event.itemStack.id == "alexscaves:primordial_pants" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", LOWNERF_LEGS)
    }
    if (event.itemStack.id == "biomemakeover:cladded_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", LOWNERF_LEGS)
    }
    // Tiny
    if (event.itemStack.id == "toughasnails:leaf_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_LEGS)
    }
    if (event.itemStack.id == "toughasnails:wool_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_LEGS)
    }
    if (event.itemStack.id == "create:cardboard_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_LEGS)
    }

    if (event.itemStack.id == "vinery:winemaker_leggings" && event.slotType == "legs") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_LEGS)
    }
    // Boots
    // Heavy
    if (event.itemStack.id == "create:netherite_diving_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_FEET)
    }
    if (event.itemStack.id == "cataclysm:ignitium_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_FEET)
    }
    if (event.itemStack.id == "cataclysm:cursium_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_FEET)
    }
    if (event.itemStack.id == "outer_end:rose_crystal_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_FEET)
    }
    if (event.itemStack.id == "deeperdarker:resonarium_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_FEET)
    }
    if (event.itemStack.id == "alexscaves_torpedoes:tectonic_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_FEET)
    }
    if (event.itemStack.id == "minecraft:netherite_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_FEET)
    }
    if (event.itemStack.id == "deeperdarker:warden_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_FEET)
    }
    if (event.itemStack.id == "minecraft:golden_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_FEET)
    }
    if (event.itemStack.id == "rootoffear:wraithwood_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_FEET)
    }
    if (event.itemStack.id == "rootoffear:fadedwood_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", HEAVYNERF_FEET)
    }

    // Mid
    if (event.itemStack.id == "minecraft:diamond_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_FEET)

    }
    if (event.itemStack.id == "outer_end:cobalt_crystal_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_FEET)
    }
    if (event.itemStack.id == "outer_end:mint_crystal_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_FEET)
    }
    if (event.itemStack.id == "oreganized:electrum_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_FEET)
    }
    if (event.itemStack.id == "minecraft:iron_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_FEET)
    }
    if (event.itemStack.id == "create:copper_diving_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_FEET)
    }
    if (event.itemStack.id == "alexscaves_torpedoes:ferrousslime_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", HIGHNERF_FEET)
    }
    // Mid
    if (event.itemStack.id == "alexscaves:diving_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", MIDNERF_FEET)
    }
    if (event.itemStack.id == "alexscaves:hazmat_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", MIDNERF_FEET)
    }
    if (event.itemStack.id == "minecraft:chainmail_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", MIDNERF_FEET)
    }
    // Low
    if (event.itemStack.id == "alexscaves:gingerbread_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", LOWNERF_FEET)
    }
    if (event.itemStack.id == "minecraft:leather_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", LOWNERF_FEET)
    }
    if (event.itemStack.id == "biomemakeover:cladded_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", LOWNERF_FEET)
    }
    // Tiny
    if (event.itemStack.id == "toughasnails:leaf_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_FEET)
    }
    if (event.itemStack.id == "toughasnails:wool_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_FEET)
    }
    if (event.itemStack.id == "create:cardboard_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_FEET)
    }
    if (event.itemStack.id == "vinery:winemaker_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_FEET)
    }
    if (event.itemStack.id == "alexsmobs:flying_fish_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_FEET)
    }
    if (event.itemStack.id == "alexsmobs:roadrunner_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_FEET)
    }
    if (event.itemStack.id == "netherdepthsupgrade:soul_sucker_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_FEET)
    }
    if (event.itemStack.id == "alexscaves:rainbounce_boots" && event.slotType == "feet") {
        event.addModifier("puffish_attributes:stamina", SMALLNERF_FEET)
    }

});