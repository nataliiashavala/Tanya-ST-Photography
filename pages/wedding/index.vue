<script setup lang="ts">
import TCard from "~/components/general/TCard.vue";
import heroImage from "~/assets/img/wedding/hero_img_wedding.jpg";
import TPriceCard from "~/components/general/TPriceCard.vue";

const priceCardItems = [
  "Pre-shoot consultation",
  "2 hour shoot",
  "300+ high-resolution, edited, digitals photos",
  "Online Gallery to view",
];
</script>

<template>
  <div class="bg-customGreen pb-10">
    <TCard
      title="I’M HERE TO HELP YOU REMEMBER YOUR BIG DAY"
      text="Witness the delicate yawns, tiny toes, and sleepy smiles with my Baby Photoshoot Sessions. Designed to capture the fleeting moments of infancy, these sessions are a celebration of new life and the love that surrounds it. In the comfort and warmth of a serene environment, I create timeless portraits that speak to the innocence and enchanting simplicity of your little one."
      :image-src="heroImage"
    />
    <TPriceCard
      title-one="PRICING"
      title="FAMILY SHOOT – £250"
      :items="priceCardItems"
      :image-src="priceCardImage"
      style-option="balckOption"
    />
  </div>
</template>
