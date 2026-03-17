// All craftable bows and weapon redux
// Electrum
ServerEvents.recipes(event => {
event.remove({ output: '#spartanweaponry:silver_weapons' })
event.remove({ output: 'spartanshields:silver_basic_shield' })
event.remove({ output: 'spartanshields:silver_tower_shield' })
}
)
ServerEvents.recipes(event => {
    event.recipes.create.sequenced_assembly([
      Item.of('spartanshields:silver_basic_shield').withChance(100.0),
    ], 'spartanshields:iron_basic_shield', [
      event.recipes.createDeploying('spartanshields:iron_basic_shield', ['spartanshields:iron_basic_shield','oreganized:silver_ingot']),
      event.recipes.createPressing('spartanshields:iron_basic_shield', ['spartanshields:iron_basic_shield']),
    ]).transitionalItem('spartanshields:iron_basic_shield').loops(4)

      event.recipes.create.sequenced_assembly([
        Item.of('spartanshields:silver_tower_shield').withChance(100.0),
      ], 'spartanshields:iron_tower_shield', [
        event.recipes.createDeploying('spartanshields:iron_tower_shield', ['spartanshields:iron_tower_shield','oreganized:silver_ingot']),
        event.recipes.createPressing('spartanshields:iron_tower_shield', ['spartanshields:iron_tower_shield']),
      ]).transitionalItem('spartanshields:iron_tower_shield').loops(4)
    event.recipes.create.sequenced_assembly([
      Item.of('spartanweaponry:silver_throwing_knife').withChance(100.0),
    ], 'spartanweaponry:iron_throwing_knife', [
      event.recipes.createDeploying('spartanweaponry:iron_throwing_knife', ['spartanweaponry:iron_throwing_knife','oreganized:silver_ingot']),
      event.recipes.createPressing('spartanweaponry:iron_throwing_knife', ['spartanweaponry:iron_throwing_knife']),
    ]).transitionalItem('spartanweaponry:iron_throwing_knife').loops(2)
    event.recipes.create.sequenced_assembly([
    Item.of('spartanweaponry:silver_longbow').withChance(100.0),
  ], 'spartanweaponry:iron_longbow', [
    event.recipes.createDeploying('spartanweaponry:iron_longbow', ['spartanweaponry:iron_longbow','oreganized:silver_ingot']),
    event.recipes.createPressing('spartanweaponry:iron_longbow', ['spartanweaponry:iron_longbow']),
  ]).transitionalItem('spartanweaponry:iron_longbow').loops(4)
  event.recipes.create.sequenced_assembly([
  Item.of('spartanweaponry:silver_heavy_crossbow').withChance(100.0),
], 'spartanweaponry:iron_heavy_crossbow', [
  event.recipes.createDeploying('spartanweaponry:iron_heavy_crossbow', ['spartanweaponry:iron_heavy_crossbow','oreganized:silver_ingot']),
  event.recipes.createPressing('spartanweaponry:iron_heavy_crossbow', ['spartanweaponry:iron_heavy_crossbow']),
]).transitionalItem('spartanweaponry:iron_heavy_crossbow').loops(4)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:silver_dagger').withChance(100.0),
], 'spartanweaponry:iron_dagger', [
event.recipes.createDeploying('spartanweaponry:iron_dagger', ['spartanweaponry:iron_dagger','oreganized:silver_ingot']),
event.recipes.createPressing('spartanweaponry:iron_dagger', ['spartanweaponry:iron_dagger']),
]).transitionalItem('spartanweaponry:iron_dagger').loops(1)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:silver_parrying_dagger').withChance(100.0),
], 'spartanweaponry:iron_parrying_dagger', [
event.recipes.createDeploying('spartanweaponry:iron_parrying_dagger', ['spartanweaponry:iron_parrying_dagger','oreganized:silver_ingot']),
event.recipes.createPressing('spartanweaponry:iron_parrying_dagger', ['spartanweaponry:iron_parrying_dagger']),
]).transitionalItem('spartanweaponry:iron_parrying_dagger').loops(1)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:silver_spear').withChance(100.0),
], 'spartanweaponry:iron_spear', [
event.recipes.createDeploying('spartanweaponry:iron_spear', ['spartanweaponry:iron_spear','oreganized:silver_ingot']),
event.recipes.createPressing('spartanweaponry:iron_spear', ['spartanweaponry:iron_spear']),
]).transitionalItem('spartanweaponry:iron_spear').loops(2)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:silver_pike').withChance(100.0),
], 'spartanweaponry:iron_pike', [
event.recipes.createDeploying('spartanweaponry:iron_pike', ['spartanweaponry:iron_pike','oreganized:silver_ingot']),
event.recipes.createPressing('spartanweaponry:iron_pike', ['spartanweaponry:iron_pike']),
]).transitionalItem('spartanweaponry:iron_pike').loops(3)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:silver_glaive').withChance(100.0),
], 'spartanweaponry:iron_glaive', [
event.recipes.createDeploying('spartanweaponry:iron_glaive', ['spartanweaponry:iron_glaive','oreganized:silver_ingot']),
event.recipes.createPressing('spartanweaponry:iron_glaive', ['spartanweaponry:iron_glaive']),
]).transitionalItem('spartanweaponry:iron_glaive').loops(3)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:silver_javelin').withChance(100.0),
], 'spartanweaponry:iron_javelin', [
event.recipes.createDeploying('spartanweaponry:iron_javelin', ['spartanweaponry:iron_javelin','oreganized:silver_ingot']),
event.recipes.createPressing('spartanweaponry:iron_javelin', ['spartanweaponry:iron_javelin']),
]).transitionalItem('spartanweaponry:iron_javelin').loops(3)
event.recipes.create.sequenced_assembly([

Item.of('spartanweaponry:silver_halberd').withChance(100.0),
], 'spartanweaponry:iron_halberd', [
event.recipes.createDeploying('spartanweaponry:iron_halberd', ['spartanweaponry:iron_halberd','oreganized:silver_ingot']),
event.recipes.createPressing('spartanweaponry:iron_halberd', ['spartanweaponry:iron_halberd']),
]).transitionalItem('spartanweaponry:iron_halberd').loops(3)

event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:silver_flanged_mace').withChance(100.0),
], 'spartanweaponry:iron_flanged_mace', [
event.recipes.createDeploying('spartanweaponry:iron_flanged_mace', ['spartanweaponry:iron_flanged_mace','oreganized:silver_ingot']),
event.recipes.createPressing('spartanweaponry:iron_flanged_mace', ['spartanweaponry:iron_flanged_mace']),
]).transitionalItem('spartanweaponry:iron_flanged_mace').loops(3)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:silver_lance').withChance(100.0),
], 'spartanweaponry:iron_lance', [
event.recipes.createDeploying('spartanweaponry:iron_lance', ['spartanweaponry:iron_lance','oreganized:silver_ingot']),
event.recipes.createPressing('spartanweaponry:iron_lance', ['spartanweaponry:iron_lance']),
]).transitionalItem('spartanweaponry:iron_lance').loops(1)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:silver_boomerang').withChance(100.0),
], 'spartanweaponry:iron_boomerang', [
event.recipes.createDeploying('spartanweaponry:iron_boomerang', ['spartanweaponry:iron_boomerang','oreganized:silver_ingot']),
event.recipes.createPressing('spartanweaponry:iron_boomerang', ['spartanweaponry:iron_boomerang']),
]).transitionalItem('spartanweaponry:iron_boomerang').loops(1)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:silver_warhammer').withChance(100.0),
], 'spartanweaponry:iron_warhammer', [
event.recipes.createDeploying('spartanweaponry:iron_warhammer', ['spartanweaponry:iron_warhammer','oreganized:silver_ingot']),
event.recipes.createPressing('spartanweaponry:iron_warhammer', ['spartanweaponry:iron_warhammer']),
]).transitionalItem('spartanweaponry:iron_warhammer').loops(3)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:silver_quarterstaff').withChance(100.0),
], 'spartanweaponry:iron_quarterstaff', [
event.recipes.createDeploying('spartanweaponry:iron_quarterstaff', ['spartanweaponry:iron_quarterstaff','oreganized:silver_ingot']),
event.recipes.createPressing('spartanweaponry:iron_quarterstaff', ['spartanweaponry:iron_quarterstaff']),
]).transitionalItem('spartanweaponry:iron_quarterstaff').loops(2)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:silver_battle_hammer').withChance(100.0),
], 'spartanweaponry:iron_battle_hammer', [
event.recipes.createDeploying('spartanweaponry:iron_battle_hammer', ['spartanweaponry:iron_battle_hammer','oreganized:silver_ingot']),
event.recipes.createPressing('spartanweaponry:iron_battle_hammer', ['spartanweaponry:iron_battle_hammer']),
]).transitionalItem('spartanweaponry:iron_battle_hammer').loops(3)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:silver_battleaxe').withChance(100.0),
], 'spartanweaponry:iron_battleaxe', [
event.recipes.createDeploying('spartanweaponry:iron_battleaxe', ['spartanweaponry:iron_battleaxe','oreganized:silver_ingot']),
event.recipes.createPressing('spartanweaponry:iron_battleaxe', ['spartanweaponry:iron_battleaxe']),
]).transitionalItem('spartanweaponry:iron_battleaxe').loops(3)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:silver_tomahawk').withChance(100.0),
], 'spartanweaponry:iron_tomahawk', [
event.recipes.createDeploying('spartanweaponry:iron_tomahawk', ['spartanweaponry:iron_tomahawk','oreganized:silver_ingot']),
event.recipes.createPressing('spartanweaponry:iron_tomahawk', ['spartanweaponry:iron_tomahawk']),
]).transitionalItem('spartanweaponry:iron_tomahawk').loops(2)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:silver_saber').withChance(100.0),
], 'spartanweaponry:iron_saber', [
event.recipes.createDeploying('spartanweaponry:iron_saber', ['spartanweaponry:iron_saber','oreganized:silver_ingot']),
event.recipes.createPressing('spartanweaponry:iron_saber', ['spartanweaponry:iron_saber']),
]).transitionalItem('spartanweaponry:iron_saber').loops(2)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:silver_katana').withChance(100.0),
], 'spartanweaponry:iron_katana', [
event.recipes.createDeploying('spartanweaponry:iron_katana', ['spartanweaponry:iron_katana','oreganized:silver_ingot']),
event.recipes.createPressing('spartanweaponry:iron_katana', ['spartanweaponry:iron_katana']),
]).transitionalItem('spartanweaponry:iron_katana').loops(3)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:silver_greatsword').withChance(100.0),
], 'spartanweaponry:iron_greatsword', [
event.recipes.createDeploying('spartanweaponry:iron_greatsword', ['spartanweaponry:iron_greatsword','oreganized:silver_ingot']),
event.recipes.createPressing('spartanweaponry:iron_greatsword', ['spartanweaponry:iron_greatsword']),
]).transitionalItem('spartanweaponry:iron_greatsword').loops(4)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:silver_greatsword').withChance(100.0),
], 'spartanweaponry:iron_greatsword', [
event.recipes.createDeploying('spartanweaponry:iron_greatsword', ['spartanweaponry:iron_greatsword','oreganized:silver_ingot']),
event.recipes.createPressing('spartanweaponry:iron_greatsword', ['spartanweaponry:iron_greatsword']),
]).transitionalItem('spartanweaponry:iron_greatsword').loops(3)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:silver_rapier').withChance(100.0),
], 'spartanweaponry:iron_rapier', [
event.recipes.createDeploying('spartanweaponry:iron_rapier', ['spartanweaponry:iron_rapier','oreganized:silver_ingot']),
event.recipes.createPressing('spartanweaponry:iron_rapier', ['spartanweaponry:iron_rapier']),
]).transitionalItem('spartanweaponry:iron_rapier').loops(2)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:silver_longsword').withChance(100.0),
], 'spartanweaponry:iron_longsword', [
event.recipes.createDeploying('spartanweaponry:iron_longsword', ['spartanweaponry:iron_longsword','oreganized:silver_ingot']),
event.recipes.createPressing('spartanweaponry:iron_longsword', ['spartanweaponry:iron_longsword']),
]).transitionalItem('spartanweaponry:iron_longsword').loops(2)
event.recipes.create.sequenced_assembly([
Item.of('spartanweaponry:silver_scythe').withChance(100.0),
], 'spartanweaponry:iron_scythe', [
event.recipes.createDeploying('spartanweaponry:iron_scythe', ['spartanweaponry:iron_scythe','oreganized:silver_ingot']),
event.recipes.createPressing('spartanweaponry:iron_scythe', ['spartanweaponry:iron_scythe']),
]).transitionalItem('spartanweaponry:iron_scythe').loops(3)
    });
