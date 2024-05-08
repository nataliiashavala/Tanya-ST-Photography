<script setup>
import TCard from "~/components/general/TCard.vue";
import heroImage from "~/assets/img/personal_brand/hero_card_img.jpg";
import TLeftCard from "~/components/general/TLeftCard.vue";
import leftCard from "~/assets/img/personal_brand/left_card_img.jpg";
import TPriceCard from "~/components/general/TPriceCard.vue";
import PriceCardImage from "~/assets/img/family/price_card.jpg";
import TButton from "~/components/general/TButton.vue";

const leftCardItems = [
  "Corporate Headshots: Clean, contemporary, and corporate—perfect for individuals or teams.",
  "Personal Branding: A more creative session that captures the essence of your personal brand.",
  "Workplace Snapshots: Photographs of you in your workplace, capturing the essence of your everyday professional environment.",
];

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
      title="CAPTURE YOUR PROFESSIONAL BEST"
      text="In the fast-paced digital landscape, a standout image is not just a luxury—it's essential for any business. Whether you're sprucing up your salon, giving your boutique a fresh face, or showcasing the finesse of your beauty therapy services, a tailored business photoshoot is key to making an impact.
      With an artistic flair and a contemporary style, my photography brings out the vibrancy and charm of your business. I capture the essence of your brand, from the meticulous layout of your shop to the inviting atmosphere of your salon, ensuring every shot reflects the quality and character of your services. For businesses of all scales, from intimate local shops to bustling beauty hubs, I create visuals that resonate with your clientele and accentuate your market presence."
      :image-src="heroImage"
    />

    <TLeftCard
      :image-src="leftCard"
      title="What I Offer:"
      :items="leftCardItems"
    />

    <TPriceCard
      title-one="PRICING"
      title="BUSINESS SHOOT - £250"
      :image-src="PriceCardImage"
      :items="priceCardItems"
    />

    <TButton class="text-center" color-option="option2">Get in touch </TButton>
  </div>
</template>

<style scoped></style>
