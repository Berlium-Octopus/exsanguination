package net.satisfy.vinery.core.util;

import java.util.function.Supplier;
import net.minecraft.world.effect.MobEffect;
import net.minecraft.world.effect.MobEffectInstance;
import net.minecraft.world.food.FoodProperties;
import net.minecraft.world.food.FoodProperties.Builder;
import net.minecraft.world.item.Item.Properties;

public class WineSettings {
   private final Properties properties;
   private final int baseDuration;

   public WineSettings(Supplier<MobEffect> effect, int duration, int strength) {
      this.baseDuration = duration;
      this.properties = (new Properties()).m_41489_(this.createWineFoodComponent(effect, duration, strength));
   }

   public Properties getProperties() {
      return this.properties;
   }

   public int getBaseDuration() {
      return this.baseDuration;
   }

   private FoodProperties createWineFoodComponent(Supplier<MobEffect> effect, int duration, int strength) {
      Builder builder = (new Builder()).m_38765_();
      if (effect != null) {
         builder.m_38762_(new MobEffectInstance((MobEffect)effect.get(), duration, strength), 1.0F);
      }

      return builder.m_38767_();
   }
}
