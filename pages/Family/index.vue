<script setup lang="ts">
import TCard from "~/components/general/TCard.vue";
import heroImage from "~/assets/img/wedding/hero_img_wedding.jpg";
import TPriceCard from "~/components/general/TPriceCard.vue";
import priceCardImage from "~/assets/img/family/hero_card_img.jpg";
import TButton from "~/components/general/TButton.vue";
// Define the list of items for the price card
const priceCardItems = [
  "Pre-shoot consultation",
  "2 hour shoot",
  "300+ high-resolution, edited, digitals photos",
  "Online Gallery to view",
];
</script>

<template>
  <div class="container mx-auto">
    <TCard
      title="I’M HERE TO GIVE YOU  UNFORGETTABLE MEMORIES"
      text="You don’t need to look any further. I am here to do everything I can to take the stress out of your big day and to be there for you every step of the way.
The photos that I particularly like on any wedding day are those that capture those special, spontaneous moments. A tender glance shared by the couple, a mother’s smile, laughter between guests, a child’s curiosity… I won’t miss any details. It’s these moments that make your day as well as the more formal aspects such as the taking of your vows or the giving of the speeches."
      :image-src="heroImage"
      vertical-text="YOUR WEDDING DAY"
    />

    <TPriceCard
      title-one="PRICING"
      title="FAMILY SHOOT – £250"
      :items="priceCardItems"
      :image-src="priceCardImage"
      style-option="balckOption"
    />

    <TButton color-option="option1"> Get In Touch </TButton>
  </div>
</template>

<style scoped></style>
