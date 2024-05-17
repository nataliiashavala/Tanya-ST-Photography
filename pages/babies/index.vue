<script setup>
import TCard from "~/components/general/TCard.vue";
import heroImage from "~/assets/img/maternity/hero_card_img.jpg";
import TRightCard from "~/components/general/TRightCard.vue";
import TPriceCard from "~/components/general/TPriceCard.vue";
import PriceCardImage from "~/assets/img/maternity/price_card.jpg";
import TButton from "~/components/general/TButton.vue";
import rightCardImage from "~/assets/img/maternity/right_card_img.jpg";

const priceCardItems = [
  "Pre-shoot consultation",
  "2 hour shoot",
  "300+ high-resolution, edited, digital photos",
  "Online Gallery to view",
];
</script>

<template>
  <div class="flex justify-center px-64 pt-36">
    <div class="container space-y-32">
      <TCard
        title="Tiny Smiles: Heartwarming Moments"
        text="Witness the delicate yawns, tiny toes, and sleepy smiles with my Baby Photoshoot Sessions. Designed to capture the fleeting moments of infancy, these sessions are a celebration of new life and the love that surrounds it. In the comfort and warmth of a serene environment, I create timeless portraits that speak to the innocence and enchanting simplicity of your little one.
        Each photograph is a pause button on the rapid growth of your baby, a treasured snapshot of their earliest days. Whether it's a peaceful slumber or a wide-eyed wonder, my goal is to capture the natural beauty of your baby's first curious explorations of the world."
        :image-src="heroImage"
      />

      <TRightCard
        first-title="EMOTIONS THROUGH EVERY PHOTO"
        second-title="ON THE SHOOT"
        :image-src="rightCardImage"
        text="The perfect time to capture the innocence and charm of your baby is typically within the first two weeks after birth. During this window, babies are usually more amenable to the cozy, curled-up poses that make for such heartwarming images. They tend to sleep deeply and are more easily positioned. However, beautiful photos can be captured at any stage in your baby's first year.
        To document their growth and changing features, consider scheduling photo sessions at key milestones, such as when they can lift their head, sit up unassisted, or stand with support. Each stage brings its own magical moments worth preserving"  
      />
      <div class="">
        <TPriceCard
          title-one="PRICING"
          title="BABIES SHOOT - £250"
          :image-src="PriceCardImage"
          :items="priceCardItems"
        />
        <TButton 
        class="outline outline-white text-center" 
        color-option="option1">
        Get in touch
        </TButton>
      </div>
    </div>
  </div>
</template>