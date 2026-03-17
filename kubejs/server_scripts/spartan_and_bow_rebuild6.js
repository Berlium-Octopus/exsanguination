// All craftable bows and weapon redux
// Electrum
ServerEvents.recipes(event => {
event.remove({ output: '#spartanweaponry:electrum_weapons' })
event.remove({ output: 'spartanshields:electrum_basic_shield' })
event.remove({ output: 'spartanshields:electrum_tower_shield' })
}
)
ServerEvents.recipes(event => {
event.smithing(
  'spartanshields:electrum_basic_shield',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanshields:diamond_basic_shield',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanshields:electrum_tower_shield',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanshields:diamond_tower_shield',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_throwing_knife',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_throwing_knife',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_longbow',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_longbow',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_heavy_crossbow',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_heavy_crossbow',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'oreganized:electrum_knife',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'farmersdelight:diamond_knife',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_dagger',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_dagger',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_parrying_dagger',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_parrying_dagger',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_quarterstaff',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_quarterstaff',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_spear',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_spear',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_pike',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_pike',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_glaive',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_glaive',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_javelin',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_javelin',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_halberd',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_halberd',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_battleaxe',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_battleaxe',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_flanged_mace',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_flanged_mace',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_lance',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_lance',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_boomerang',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_boomerang',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_warhammer',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_warhammer',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_battle_hammer',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_battle_hammer',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_tomahawk',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_tomahawk',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_saber',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_saber',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_katana',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_katana',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_greatsword',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_greatsword',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_rapier',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_rapier',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_longsword',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_longsword',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
event.smithing(
  'spartanweaponry:electrum_scythe',                     // arg 1: output
  'oreganized:electrum_upgrade_smithing_template', // arg 2: the smithing template
  'spartanweaponry:diamond_scythe',                          // arg 3: the item to be upgraded
  'oreganized:electrum_ingot'                            // arg 4: the upgrade item
)
}
)
