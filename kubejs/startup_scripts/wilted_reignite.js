StartupEvents.registry('item', e => {
e.create('rootoffear:fadedwood_helmet','anim_helmet')
.geoModel(geo => {
geo.setSimpleModel('geckojs:geo/armor/wraithwood_armor.geo.json')
geo.setSimpleTexture('geckojs:textures/armor/fadedwood_armor.png')
})
.boneVisibility((renderer, slot) => {
renderer.setAllVisible(false);
if (slot == "head") {
renderer.setBoneVisible(renderer.getHeadBone(), true);
}}).tier("faded").texture('kubejs:item/fadedwood_helmet').displayName("Faded Oak Helmet");

e.create('rootoffear:fadedwood_chestplate','anim_chestplate')
.geoModel(geo => {
geo.setSimpleModel('geckojs:geo/armor/wraithwood_armor.geo.json')
geo.setSimpleTexture('geckojs:textures/armor/fadedwood_armor.png')
})
.boneVisibility((renderer, slot) => {
renderer.setAllVisible(false);

if (slot == "chest") {
renderer.setBoneVisible(renderer.getBodyBone(), true);
renderer.setBoneVisible(renderer.getRightArmBone(), true);
renderer.setBoneVisible(renderer.getLeftArmBone(), true);
}}).tier("faded").texture('kubejs:item/fadedwood_chestplate').displayName("Faded Oak Chestplate");

e.create('rootoffear:fadedwood_leggings','anim_leggings')
.geoModel(geo => {
  geo.setSimpleModel('geckojs:geo/armor/wraithwood_armor.geo.json')
geo.setSimpleTexture('geckojs:textures/armor/fadedwood_armor.png')
})
.boneVisibility((renderer, slot) => {
renderer.setAllVisible(false);

if (slot == "legs") {
renderer.setBoneVisible(renderer.getRightLegBone(), true);
renderer.setBoneVisible(renderer.getLeftLegBone(), true);
}}).tier("faded").texture('kubejs:item/fadedwood_leggings').displayName("Faded Oak Leggings");

e.create('rootoffear:fadedwood_boots','anim_boots')
.geoModel(geo => {
geo.setSimpleModel('geckojs:geo/armor/wraithwood_armor.geo.json')
geo.setSimpleTexture('geckojs:textures/armor/fadedwood_armor.png')
})
.boneVisibility((renderer, slot) => {
renderer.setAllVisible(false);

if (slot == "feet") {
renderer.setBoneVisible(renderer.getRightBootBone(), true);
renderer.setBoneVisible(renderer.getLeftBootBone(), true);
}}).tier("faded").texture('kubejs:item/fadedwood_boots').displayName("Faded Oak Boots");
});

ItemEvents.armorTierRegistry((event) => {
  event.add("faded", (tier) => {
  tier.durabilityMultiplier = 1;
  tier.slotProtections = [1, 1, 1, 1];
  tier.toughness= 0.5;
  tier.enchantmentValue = 1;
  tier.repairIngredient ="scalinghealth:bandages";
  tier.knockbackResistance = 0.5;
  })
});
