<script setup>
import TCard from "~/components/general/TCard.vue";
import heroImage from "~/assets/img/mini_shoot/hero_card_img.jpg";
import TLeftCard from "~/components/general/TLeftCard.vue";
import leftCard from "~/assets/img/mini_shoot/left_card_img.jpg";
import TPriceCard from "~/components/general/TPriceCard.vue";
import PriceCardImage from "~/assets/img/mini_shoot/price_card_img.jpg";
import TButton from "~/components/general/TButton.vue";

const leftCardItems = [
  "A seamless, 30-minute photo session scheduled at your convenience, in a setting that reflects your personal style—be it an urban alleyway, a sunlit park, or the cozy corners of your home.",
  "Expert guidance from a professional photographer who knows just how to elicit and capture those natural, unguarded moments that speak volumes.",
  "A collection of 15 professionally edited images, each one a work of art, embodying the spirit of the moment with clarity and vibrancy.",
  "An exclusive online gallery that's as easy to access as it is to share, so you can relive and celebrate these moments anytime, anywhere.",
];

const priceCardItems = [
  "Pre-shoot consultation",
  "30 min shoot",
  "50+ high-resolution, edited, digitals photos",
  "Online Gallery to view",
];
</script>

<template>
  <div class="text-white" :style="{ backgroundColor: '#545A3F' }">
    <div class="flex justify-center px-64 pt-36">
    <div class="container space-y-28">
      <TCard
        title="MINI SHOOT SESSIONS"
        text="Immerse yourself in the artistry of professional photography with my Mini Shoot Sessions—crafted for those times when life`s pace quickens, but the desire for quality remains. In just 30 minutes, I`ll help you capture the essence of your most cherished moments. These sessions are perfect for anyone seeking a quick taste of bespoke photography, ideal for busy schedules or spontaneous opportunities to create lasting memories."
        text-italic="Book Your Mini Shoot today, and let`s craft the visual story of your life`s most spontaneous and beautiful moments."
        :image-src="heroImage"
      />

      <TLeftCard
        :image-src="leftCard"
        title="What I Offer:"
        :items="leftCardItems"
      />
      <div class="">
        <TPriceCard
          title-one="PRICING"
          title="BUSINESS SHOOT - £250"
          :image-src="PriceCardImage"
          :items="priceCardItems"
          styleOption= "whiteOption"
        />
        <TButton class="text-center outline outline-white" color-option="option1"
          >Get in touch
        </TButton>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped></style>
