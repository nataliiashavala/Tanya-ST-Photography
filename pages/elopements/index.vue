<script setup>
import TCard from "~/components/general/TCard.vue";
import heroImage from "~/assets/img/couples/hero_card_img.jpg";
import TLeftCard from "~/components/general/TLeftCard.vue";
import leftImage from "~/assets/img/couples/left_card_img.jpg";
import TPriceCard from "~/components/general/TPriceCard.vue";
import PriceCardImage from "~/assets/img/couples/price_card.jpg";
import TButton from "~/components/general/TButton.vue";

const priceCardItems = [
  "Pre-shoot consultation",
  "Min 2-hour shoot",
  "300+ high-resolution, edited, digital photos",
  "Online Gallery to view and share with family and friends",
];

const leftCardItems = [
  "An initial consultation to understand your vision and help plan the photography that will best tell your story.",
  "A flexible, discreet, and sensitive presence on your special day, capturing every significant look, touch, and emotion.",
  "A series of 30-50 high-resolution, edited images that reflect the depth of your bond and the beauty of your elopement.",
  "An online gallery that's as intimate and personal as your ceremony, where you can relive and share your memories with those who matter most.",
];
</script>

<template>
  <div class="container mx-auto space-y-28">
    <TCard
      title="JUST US: SECRET ESCAPE"
      text="Elopements are about the breathtaking intimacy of two hearts becoming one amidst settings that speak volumes. As an elopement photographer, I capture the essence of your union, the unspoken promise in each glance, and the serene simplicity of your perfect day. Your elopement is a sacred narrative, and I am here to narrate it through the silent poetry of images.
      Elopements are wonderfully personal, and so is my approach. I'll work with you to find that enchanted spot where your spirits soar—be it a tranquil lochside, a rugged cliff edge, or a quiet cityscape—and immortalize the moment with the artistry it deserves. I am passionate about creating a visual chronicle that encapsulates the purity and essence of your journey."
      :image-src="heroImage"
    />

    <TLeftCard
      :image-src="leftImage"
      title="What I Offer:"
      :items="leftCardItems"
    />

    <div class="">
      <TPriceCard
        title-one="PRICING"
        title="£250/ - 1 HOUR"
        :image-src="PriceCardImage"
        :items="priceCardItems"
      />

      <TButton class="outline outline-white text-center" color-option="option1"
        >Get in touch
      </TButton>
    </div>
  </div>
</template>

<style scoped></style>
