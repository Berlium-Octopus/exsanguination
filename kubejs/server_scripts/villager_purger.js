MoreJSEvents.filterEnchantedBookTrade((event) => {
    event.add("exsanguination:awakening");
    event.add("domesticationinnovation:blight_curse");
    event.add("biomemakeover:conductivity_curse");
    event.add("biomemakeover:insomnia_curse");
    event.add("minecraft:binding_curse");
    event.add("extra_enchantments:attrition_curse");
    event.isVillager();
});


MoreJSEvents.villagerTrades((event) => {
  event.addCustomTrade("weaponsmith", 2, (offer, entity, random) => {
    offer.setFirstInput("35x minecraft:emerald");
    offer.setOutput('jeg:firearm_blueprint');
    offer.setMaxUses(2);
    offer.setPriceMultiplier(1);
    });
});

MoreJSEvents.villagerTrades((event) => {
  event.addCustomTrade("butcher", 1, (offer, entity, random) => {
    offer.setFirstInput("2x minecraft:emerald");
    offer.setOutput('5x alexsmobs:moose_ribs');
    offer.setMaxUses(4);
    offer.setPriceMultiplier(1);
    });
});

MoreJSEvents.villagerTrades((event) => {
  event.addCustomTrade("doom_and_gloom:gravetender", 2, (offer, entity, random) => {
    offer.setFirstInput("1x minecraft:emerald");
    offer.setOutput('5x minecraft:soul_torch');
    offer.setMaxUses(6);
    offer.setPriceMultiplier(1);
    });
});

MoreJSEvents.villagerTrades((event) => {
  event.addCustomTrade("cleric", 2, (offer, entity, random) => {
    offer.setFirstInput("1x minecraft:emerald");
    offer.setOutput('5x minecraft:torch');
    offer.setMaxUses(6);
    offer.setPriceMultiplier(1);
    });
});


MoreJSEvents.villagerTrades((event) => {
  event.addCustomTrade("doom_and_gloom:gravetender", 3, (offer, entity, random) => {
    offer.setFirstInput("6x jeg:ectoplasm");
    offer.setOutput('minecraft:emerald');
    offer.setMaxUses(8);
    offer.setPriceMultiplier(1);
    });
});

MoreJSEvents.villagerTrades((event) => {
  event.addCustomTrade("doom_and_gloom:gravetender", 3, (offer, entity, random) => {
    offer.setFirstInput("10x luminous_nether:ghostly_essence");
    offer.setOutput('minecraft:emerald');
    offer.setMaxUses(8);
    offer.setPriceMultiplier(1);
    });
});

MoreJSEvents.villagerTrades((event) => {
  event.addCustomTrade("butcher", 2, (offer, entity, random) => {
    offer.setFirstInput("9x alexsmobs:kangaroo_meat");
    offer.setOutput('1x minecraft:emerald');
    offer.setMaxUses(6);
    offer.setPriceMultiplier(1);
    });
});

MoreJSEvents.villagerTrades((event) => {
  event.addCustomTrade("fisherman", 2, (offer, entity, random) => {
    offer.setFirstInput("8x alexsmobs:raw_catfish");
    offer.setOutput('minecraft:emerald');
    offer.setMaxUses(8);
    offer.setPriceMultiplier(1);
    });
});


MoreJSEvents.villagerTrades((event) => {
  event.addCustomTrade("fisherman", 2, (offer, entity, random) => {
    offer.setFirstInput("5x alexmobs:lobster_tail");
    offer.setOutput('minecraft:emerald');
    offer.setMaxUses(5);
    offer.setPriceMultiplier(1);
    });
});


MoreJSEvents.villagerTrades((event) => {
  event.addCustomTrade("cleric", 3, (offer, entity, random) => {
    offer.setFirstInput("4x alexsmobs:blood_sac");
    offer.setOutput('5x minecraft:emerald');
    offer.setMaxUses(3);
    offer.setPriceMultiplier(1);
    });
});

MoreJSEvents.villagerTrades((event) => {
  event.addCustomTrade("cleric", 2, (offer, entity, random) => {
    offer.setFirstInput("4x alexsmobs:gazelle_horn");
    offer.setOutput('minecraft:emerald');
    offer.setMaxUses(5);
    offer.setPriceMultiplier(1);
    });
});

MoreJSEvents.villagerTrades((event) => {
  event.addCustomTrade("fletcher", 3, (offer, entity, random) => {
    offer.setFirstInput("20x minecraft:emerald");
    offer.setOutput('alexsmobs:ancient_dart');
    offer.setMaxUses(8);
    offer.setPriceMultiplier(1);
    });
});

MoreJSEvents.wandererTrades((event) => {

event.addCustomTrade(1, (offer, entity, random) => {
  offer.setFirstInput("30x minecraft:emerald");
  offer.setOutput(Item.of('minecraft:enchanted_book').enchant('exsanguination:awakening', 1));
  offer.setMaxUses(4);
  offer.setPriceMultiplier(1);
  });

  event.addCustomTrade(2, (offer, entity, random) => {
    offer.setFirstInput("45x minecraft:emerald");
    offer.setOutput('jeg:advanced_firearm_blueprint');
    offer.setMaxUses(1);
    offer.setPriceMultiplier(1);
    });


  event.addCustomTrade(1, (offer, entity, random) => {
    offer.setFirstInput("20x minecraft:emerald");
    offer.setOutput(Item.of('minecraft:enchanted_book').enchant('exsanguination:awakening', 1));
    offer.setMaxUses(8);
    offer.setPriceMultiplier(1);
    });

  event.addCustomTrade(2, (offer, entity, random) => {
    offer.setFirstInput("15x minecraft:emerald");
    offer.setOutput("scalinghealth:bandages");
    offer.setMaxUses(4);
    offer.setPriceMultiplier(1);
    });

  event.addCustomTrade(2, (offer, entity, random) => {
    offer.setFirstInput("15x minecraft:emerald");
    offer.setOutput("scalinghealth:bandages");
    offer.setMaxUses(4);
    offer.setPriceMultiplier(1);
    });

    event.addCustomTrade(1, (offer, entity, random) => {
      offer.setFirstInput("alexsmobs:rattlesnake_rattle");
      offer.setOutput("2x minecraft:emerald");
      offer.setMaxUses(4);
      offer.setPriceMultiplier(1);
      });

      event.addCustomTrade(1, (offer, entity, random) => {
        offer.setFirstInput("alexsmobs:shark_tooth");
        offer.setOutput("3x minecraft:emerald");
        offer.setMaxUses(4);
        offer.setPriceMultiplier(1);
        });

    event.addCustomTrade(2, (offer, entity, random) => {
      offer.setFirstInput("10x minecraft:emerald");
      offer.setOutput("scalinghealth:bandages");
      offer.setMaxUses(5);
      offer.setPriceMultiplier(1);
      });

      event.addCustomTrade(2, (offer, entity, random) => {
        offer.setFirstInput("20x minecraft:emerald");
        offer.setOutput("scalinghealth:bandages");
        offer.setMaxUses(8);
        offer.setPriceMultiplier(1);
        });

  event.addCustomTrade(1, (offer, entity, random) => {
    offer.setFirstInput("2x minecraft:fermented_spider_eye");
    offer.setOutput("5x minecraft:emerald");
    offer.setMaxUses(5);
    offer.setPriceMultiplier(2);
    });


    event.addCustomTrade(1, (offer, entity, random) => {
      offer.setFirstInput("alexsmobs:stink_bottle");
      offer.setOutput("2x minecraft:emerald");
      offer.setMaxUses(8);
      offer.setPriceMultiplier(2);
      });

    event.addCustomTrade(1, (offer, entity, random) => {
      offer.setFirstInput("minecraft:milk_bucket");
      offer.setOutput("10x minecraft:emerald");
      offer.setMaxUses(3);
      offer.setPriceMultiplier(2);
      });

      event.addCustomTrade(1, (offer, entity, random) => {
        offer.setFirstInput("farmersdelight:milk_bottle");
        offer.setOutput("minecraft:emerald");
        offer.setMaxUses(4);
        offer.setPriceMultiplier(2);
        });

        event.addCustomTrade(1, (offer, entity, random) => {
          offer.setFirstInput("farmersdelight:milk_bottle");
          offer.setOutput("2x minecraft:emerald");
          offer.setMaxUses(4);
          offer.setPriceMultiplier(2);
          });

        event.addCustomTrade(1, (offer, entity, random) => {
          offer.setFirstInput("minecraft:compass");
          offer.setSecondInput("10x minecraft:emerald");
          offer.setOutput("minecraft:recovery_compass");
          offer.setMaxUses(1);
          offer.setPriceMultiplier(2);
          });

        event.addCustomTrade(1, (offer, entity, random) => {
          offer.setFirstInput("minecraft:compass");
          offer.setSecondInput("1x minecraft:emerald");
          offer.setOutput("spelunkery:magnetic_compass");
          offer.setMaxUses(1);
          offer.setPriceMultiplier(2);
          });

          event.addCustomTrade(1, (offer, entity, random) => {
            offer.setFirstInput(Item.of('minecraft:potion', '{Potion:"minecraft:water"}'));
            offer.setOutput("minecraft:emerald");
            offer.setMaxUses(5);
            offer.setPriceMultiplier(2);
            });

            event.addCustomTrade(1, (offer, entity, random) => {
              offer.setFirstInput(Item.of('minecraft:potion', '{Potion:"minecraft:water"}'));
              offer.setOutput("2x minecraft:emerald");
              offer.setMaxUses(8);
              offer.setPriceMultiplier(2);
              });

});
