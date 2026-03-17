StartupEvents.registry('item', e => {
e.create('rootoffear:wraithwood_helmet','anim_helmet')
.geoModel(geo => {
geo.setSimpleModel('geckojs:geo/armor/wraithwood_armor.geo.json')
geo.setSimpleTexture('geckojs:textures/armor/wraithwood_armor.png')
geo.autoGlowing = false
})
.boneVisibility((renderer, slot) => {
renderer.setAllVisible(false);
if (slot == "head") {
renderer.setBoneVisible(renderer.getHeadBone(), true);
}}).tier("wilted").texture('kubejs:item/wraithwood_helmet').displayName("Wraith Oak Helmet")

e.create('rootoffear:wraithwood_chestplate','anim_chestplate')
.geoModel(geo => {
geo.setSimpleModel('geckojs:geo/armor/wraithwood_armor.geo.json')
geo.setSimpleTexture('geckojs:textures/armor/wraithwood_armor.png')
geo.autoGlowing = false
})
.boneVisibility((renderer, slot) => {
renderer.setAllVisible(false);

if (slot == "chest") {
renderer.setBoneVisible(renderer.getBodyBone(), true);
renderer.setBoneVisible(renderer.getRightArmBone(), true);
renderer.setBoneVisible(renderer.getLeftArmBone(), true);
}}).tier("wilted").texture('kubejs:item/wraithwood_chestplate').displayName("Wraith Oak Chestplate")

e.create('rootoffear:wraithwood_leggings','anim_leggings')
.geoModel(geo => {
  geo.setSimpleModel('geckojs:geo/armor/wraithwood_armor.geo.json')
geo.setSimpleTexture('geckojs:textures/armor/wraithwood_armor.png')
geo.autoGlowing = false
})
.boneVisibility((renderer, slot) => {
renderer.setAllVisible(false);

if (slot == "legs") {
renderer.setBoneVisible(renderer.getRightLegBone(), true);
renderer.setBoneVisible(renderer.getLeftLegBone(), true);
}}).tier("wilted").texture('kubejs:item/wraithwood_leggings').displayName("Wraith Oak Leggings")

e.create('rootoffear:wraithwood_boots','anim_boots')
.geoModel(geo => {
geo.setSimpleModel('geckojs:geo/armor/wraithwood_armor.geo.json')
geo.setSimpleTexture('geckojs:textures/armor/wraithwood_armor.png')
geo.autoGlowing = false
})
.boneVisibility((renderer, slot) => {
renderer.setAllVisible(false);

if (slot == "feet") {
renderer.setBoneVisible(renderer.getRightBootBone(), true);
renderer.setBoneVisible(renderer.getLeftBootBone(), true);
}}).tier("wilted").texture('kubejs:item/wraithwood_boots').displayName("Wraith Oak Boots")
});


ItemEvents.armorTierRegistry((event) => {
  event.add("wilted", (tier) => {
  tier.durabilityMultiplier = 2;
  tier.slotProtections = [1, 3, 2, 1];
  tier.toughness= 0.5;
  tier.enchantmentValue = 5;
  tier.repairIngredient ="scalinghealth:bandages";
  tier.knockbackResistance = 0.5;
  })
});
