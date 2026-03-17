// All craftable bows and weapon redux
// Electrum
ServerEvents.recipes(event => {
event.remove({ output: '#spartanweaponry:bronze_weapons' })
event.remove({ output: 'spartanshields:bronze_basic_shield' })
event.remove({ output: 'spartanshields:bronze_tower_shield' })
}
)
ServerEvents.recipes(event => {
    event.recipes.create.sequenced_assembly([
      Item.of('spartanshields:bronze_basic_shield').withChance(100.0),
    ], 'spartanshields:copper_basic_shield', [
      event.recipes.createFilling('spartanshields:bronze_basic_shield', ['spartanshields:bronze_basic_shield', Fluid.of('createbigcannons:molten_bronze', 90)]),
      event.recipes.createPressing('spartanshields:copper_basic_shield', ['spartanshields:copper_basic_shield']),
    ]).transitionalItem('spartanshields:copper_basic_shield').loops(4)
      event.recipes.create.sequenced_assembly([
        Item.of('spartanshields:bronze_tower_shield').withChance(100.0),
      ], 'spartanshields:copper_tower_shield', [
        event.recipes.createFilling('spartanshields:copper_tower_shield', ['spartanshields:copper_tower_shield', Fluid.of('createbigcannons:molten_bronze', 90)]),
        event.recipes.createPressing('spartanshields:copper_tower_shield', ['spartanshields:copper_tower_shield']),
      ]).transitionalItem('spartanshields:copper_tower_shield').loops(4)
    event.recipes.create.sequenced_assembly([
      Item.of('spartanweaponry:bronze_throwing_knife').withChance(100.0),
    ], 'spartanweaponry:copper_throwing_knife', [
      event.recipes.createFilling('spartanweaponry:copper_throwing_knife', ['spartanweaponry:copper_throwing_knife', Fluid.of('createbigcannons:molten_bronze', 90)]),
      event.recipes.createPressing('spartanweaponry:copper_throwing_knife', ['spartanweaponry:copper_throwing_knife']),
    ]).transitionalItem('spartanweaponry:copper_throwing_knife').loops(2)
    event.recipes.create.sequenced_assembly([
    Item.of('spartanweaponry:bronze_longbow').withChance(100.0),
  ], 'spartanweaponry:copper_longbow', [
    event.recipes.createFilling('spartanweaponry:copper_longbow', ['spartanweaponry:copper_longbow', Fluid.of('createbigcannons:molten_bronze', 90)]),
    event.recipes.createPressing('spartanweaponry:copper_longbow', ['spartanweaponry:copper_longbow']),
  ]).transitionalItem('spartanweaponry:copper_longbow').loops(4)
  Item.of('spartanweaponry:bronze_heavy_crossbow').withChance(100.0),
  event.recipes.create.sequenced_assembly([
], 'spartanweaponry:copper_heavy_crossbow', [
  event.recipes.createFilling('spartanweaponry:copper_heavy_crossbow', ['spartanweaponry:copper_heavy_crossbow', Fluid.of('createbigcannons:molten_bronze', 90)]),
  event.recipes.createPressing('spartanweaponry:copper_heavy_crossbow', ['spartanweaponry:copper_heavy_crossbow']),
]).transitionalItem('spartanweaponry:copper_heavy_crossbow').loops(4)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:bronze_dagger').withChance(100.0),
], 'spartanweaponry:copper_dagger', [
event.recipes.createFilling('spartanweaponry:copper_dagger', ['spartanweaponry:copper_dagger', Fluid.of('createbigcannons:molten_bronze', 90)]),
event.recipes.createPressing('spartanweaponry:copper_dagger', ['spartanweaponry:copper_dagger']),
]).transitionalItem('spartanweaponry:copper_dagger').loops(1)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:bronze_parrying_dagger').withChance(100.0),
], 'spartanweaponry:copper_parrying_dagger', [
event.recipes.createFilling('spartanweaponry:copper_parrying_dagger', ['spartanweaponry:copper_parrying_dagger', Fluid.of('createbigcannons:molten_bronze', 90)]),
event.recipes.createPressing('spartanweaponry:copper_parrying_dagger', ['spartanweaponry:copper_parrying_dagger']),
]).transitionalItem('spartanweaponry:copper_parrying_dagger').loops(1)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:bronze_spear').withChance(100.0),
], 'spartanweaponry:copper_spear', [
event.recipes.createFilling('spartanweaponry:copper_spear', ['spartanweaponry:copper_spear', Fluid.of('createbigcannons:molten_bronze', 90)]),
event.recipes.createPressing('spartanweaponry:copper_spear', ['spartanweaponry:copper_spear']),
]).transitionalItem('spartanweaponry:copper_spear').loops(2)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:bronze_pike').withChance(100.0),
], 'spartanweaponry:copper_pike', [
event.recipes.createFilling('spartanweaponry:copper_pike', ['spartanweaponry:copper_pike', Fluid.of('createbigcannons:molten_bronze', 90)]),
event.recipes.createPressing('spartanweaponry:copper_pike', ['spartanweaponry:copper_pike']),
]).transitionalItem('spartanweaponry:copper_pike').loops(3)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:bronze_glaive').withChance(100.0),
], 'spartanweaponry:copper_glaive', [
event.recipes.createFilling('spartanweaponry:copper_glaive', ['spartanweaponry:copper_glaive', Fluid.of('createbigcannons:molten_bronze', 90)]),
event.recipes.createPressing('spartanweaponry:copper_glaive', ['spartanweaponry:copper_glaive']),
]).transitionalItem('spartanweaponry:copper_glaive').loops(3)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:bronze_javelin').withChance(100.0),
], 'spartanweaponry:copper_javelin', [
event.recipes.createFilling('spartanweaponry:copper_javelin', ['spartanweaponry:copper_javelin', Fluid.of('createbigcannons:molten_bronze', 90)]),
event.recipes.createPressing('spartanweaponry:copper_javelin', ['spartanweaponry:copper_javelin']),
]).transitionalItem('spartanweaponry:copper_javelin').loops(3)
event.recipes.create.sequenced_assembly([
  Item.of('spartanweaponry:bronze_quarterstaff').withChance(100.0),
  ], 'spartanweaponry:copper_quarterstaff', [
  event.recipes.createFilling('spartanweaponry:copper_quarterstaff', ['spartanweaponry:copper_quarterstaff', Fluid.of('createbigcannons:molten_bronze', 90)]),
  event.recipes.createPressing('spartanweaponry:copper_quarterstaff', ['spartanweaponry:copper_quarterstaff']),
  ]).transitionalItem('spartanweaponry:copper_quarterstaff').loops(2)
  event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:bronze_halberd').withChance(100.0),
], 'spartanweaponry:copper_halberd', [
event.recipes.createFilling('spartanweaponry:copper_halberd', ['spartanweaponry:copper_halberd', Fluid.of('createbigcannons:molten_bronze', 90)]),
event.recipes.createPressing('spartanweaponry:copper_halberd', ['spartanweaponry:copper_halberd']),
]).transitionalItem('spartanweaponry:copper_halberd').loops(3)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:bronze_battleaxe').withChance(100.0),
], 'spartanweaponry:copper_battleaxe', [
event.recipes.createFilling('spartanweaponry:copper_battleaxe', ['spartanweaponry:copper_battleaxe', Fluid.of('createbigcannons:molten_bronze', 90)]),
event.recipes.createPressing('spartanweaponry:copper_battleaxe', ['spartanweaponry:copper_battleaxe']),
]).transitionalItem('spartanweaponry:copper_battleaxe').loops(3)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:bronze_flanged_mace').withChance(100.0),
], 'spartanweaponry:copper_flanged_mace', [
event.recipes.createFilling('spartanweaponry:copper_flanged_mace', ['spartanweaponry:copper_flanged_mace', Fluid.of('createbigcannons:molten_bronze', 90)]),
event.recipes.createPressing('spartanweaponry:copper_flanged_mace', ['spartanweaponry:copper_flanged_mace']),
]).transitionalItem('spartanweaponry:copper_flanged_mace').loops(3)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:bronze_lance').withChance(100.0),
], 'spartanweaponry:copper_lance', [
event.recipes.createFilling('spartanweaponry:copper_lance', ['spartanweaponry:copper_lance', Fluid.of('createbigcannons:molten_bronze', 90)]),
event.recipes.createPressing('spartanweaponry:copper_lance', ['spartanweaponry:copper_lance']),
]).transitionalItem('spartanweaponry:copper_lance').loops(1)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:bronze_boomerang').withChance(100.0),
], 'spartanweaponry:copper_boomerang', [
event.recipes.createFilling('spartanweaponry:copper_boomerang', ['spartanweaponry:copper_boomerang', Fluid.of('createbigcannons:molten_bronze', 90)]),
event.recipes.createPressing('spartanweaponry:copper_boomerang', ['spartanweaponry:copper_boomerang']),
]).transitionalItem('spartanweaponry:copper_boomerang').loops(1)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:bronze_warhammer').withChance(100.0),
], 'spartanweaponry:copper_warhammer', [
event.recipes.createFilling('spartanweaponry:copper_warhammer', ['spartanweaponry:copper_warhammer', Fluid.of('createbigcannons:molten_bronze', 90)]),
event.recipes.createPressing('spartanweaponry:copper_warhammer', ['spartanweaponry:copper_warhammer']),
]).transitionalItem('spartanweaponry:copper_warhammer').loops(3)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:bronze_battle_hammer').withChance(100.0),
], 'spartanweaponry:copper_battle_hammer', [
event.recipes.createFilling('spartanweaponry:copper_battle_hammer', ['spartanweaponry:copper_battle_hammer', Fluid.of('createbigcannons:molten_bronze', 90)]),
event.recipes.createPressing('spartanweaponry:copper_battle_hammer', ['spartanweaponry:copper_battle_hammer']),
]).transitionalItem('spartanweaponry:copper_battle_hammer').loops(3)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:bronze_tomahawk').withChance(100.0),
], 'spartanweaponry:copper_tomahawk', [
event.recipes.createFilling('spartanweaponry:copper_tomahawk', ['spartanweaponry:copper_tomahawk', Fluid.of('createbigcannons:molten_bronze', 90)]),
event.recipes.createPressing('spartanweaponry:copper_tomahawk', ['spartanweaponry:copper_tomahawk']),
]).transitionalItem('spartanweaponry:copper_tomahawk').loops(2)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:bronze_saber').withChance(100.0),
], 'spartanweaponry:copper_saber', [
event.recipes.createFilling('spartanweaponry:copper_saber', ['spartanweaponry:copper_saber', Fluid.of('createbigcannons:molten_bronze', 90)]),
event.recipes.createPressing('spartanweaponry:copper_saber', ['spartanweaponry:copper_saber']),
]).transitionalItem('spartanweaponry:copper_saber').loops(2)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:bronze_katana').withChance(100.0),
], 'spartanweaponry:copper_katana', [
event.recipes.createFilling('spartanweaponry:copper_katana', ['spartanweaponry:copper_katana', Fluid.of('createbigcannons:molten_bronze', 90)]),
event.recipes.createPressing('spartanweaponry:copper_katana', ['spartanweaponry:copper_katana']),
]).transitionalItem('spartanweaponry:copper_katana').loops(3)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:bronze_greatsword').withChance(100.0),
], 'spartanweaponry:copper_greatsword', [
event.recipes.createFilling('spartanweaponry:copper_greatsword', ['spartanweaponry:copper_greatsword', Fluid.of('createbigcannons:molten_bronze', 90)]),
event.recipes.createPressing('spartanweaponry:copper_greatsword', ['spartanweaponry:copper_greatsword']),
]).transitionalItem('spartanweaponry:copper_greatsword').loops(4)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:bronze_greatsword').withChance(100.0),
], 'spartanweaponry:copper_greatsword', [
event.recipes.createFilling('spartanweaponry:copper_greatsword', ['spartanweaponry:copper_greatsword', Fluid.of('createbigcannons:molten_bronze', 90)]),
event.recipes.createPressing('spartanweaponry:copper_greatsword', ['spartanweaponry:copper_greatsword']),
]).transitionalItem('spartanweaponry:copper_greatsword').loops(3)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:bronze_rapier').withChance(100.0),
], 'spartanweaponry:copper_rapier', [
event.recipes.createFilling('spartanweaponry:copper_rapier', ['spartanweaponry:copper_rapier', Fluid.of('createbigcannons:molten_bronze', 90)]),
event.recipes.createPressing('spartanweaponry:copper_rapier', ['spartanweaponry:copper_rapier']),
]).transitionalItem('spartanweaponry:copper_rapier').loops(2)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:bronze_longsword').withChance(100.0),
], 'spartanweaponry:copper_longsword', [
event.recipes.createFilling('spartanweaponry:copper_longsword', ['spartanweaponry:copper_longsword', Fluid.of('createbigcannons:molten_bronze', 90)]),
event.recipes.createPressing('spartanweaponry:copper_longsword', ['spartanweaponry:copper_longsword']),
]).transitionalItem('spartanweaponry:copper_longsword').loops(2)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:bronze_scythe').withChance(100.0),
], 'spartanweaponry:copper_scythe', [
event.recipes.createFilling('spartanweaponry:copper_scythe', ['spartanweaponry:copper_scythe', Fluid.of('createbigcannons:molten_bronze', 90)]),
event.recipes.createPressing('spartanweaponry:copper_scythe', ['spartanweaponry:copper_scythe']),
]).transitionalItem('spartanweaponry:copper_scythe').loops(3)
    });
