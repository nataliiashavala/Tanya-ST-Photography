<script setup lang="ts">
import TLeftCard from "~/components/general/TLeftCard.vue";
import leftCard from "~/assets/img/personal-brand/left_card_img.jpg";

const leftCardItems = [
  "Corporate Headshots: Clean, contemporary, and corporate—perfect for individuals or teams.",
  "Personal Branding: A more creative session that captures the essence of your personal brand.",
  "Workplace Snapshots: Photographs of you in your workplace, capturing the essence of your everyday professional environment.",
];
</script>

<template>
  <div class="container mx-auto">
    <TLeftCard
      :image-src="leftCard"
      title="What I Offer:"
      :items="leftCardItems"
    />
  </div>
</template>
