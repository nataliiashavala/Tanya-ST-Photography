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
  "2 hour shoot",
  "300+ high-resolution, edited, digital photos",
  "Online Gallery to view",
];

const leftCardItems = [
  "An immersive experience that celebrates your unique love story. From candid laughter to quiet moments of reflection, I'll be there to capture it all with a creative and sensitive eye.",
  "Guidance on styling and location to perfectly match the mood and narrative of your relationship, ensuring the photos truly reflect your personal journey together",
  "A comfortable, engaging photoshoot environment where you can truly be yourselves. I encourage you to let your guard down and enjoy the moment while I capture the magic.",
  "Expert post-shoot editing to bring out the best in your photos, highlighting the warmth and depth of your relationship.",
];
</script>

<template>
  <div class="container mx-auto space-y-28">
    <TCard
      title="COUPLES PHOTOSHOOT SESSIONS"
      text="In the dance of light and shadows, I seek to capture the beautiful intricacies of your love story. Couples photography is more than just taking pictures—it's about pausing the moment when you whisper a joke and she laughs, the gentle way you hold hands, or the shared glance that says everything without a word being spoken. It's the art of freezing those fleeting, ordinary moments that together create your extraordinary love story.
      As your photographer, I aim to create a relaxed and enjoyable experience that allows your unique chemistry to shine through. Whether it’s your first anniversary, an engagement, or just a day you want to remember forever, I’m here to encapsulate the warmth of your affection in images that will stand the test of time."
      :image-src="heroImage"
    />
    <div class="flex flex-col mt-9">
      <h1 class="text-6xl font-nanum text-center mb-24 w-full">
        CAPTURING YOUR LOVE STORY
      </h1>
      <TLeftCard
        :image-src="leftImage"
        title="ON THE SHOOT"
        :items="leftCardItems"
      />
    </div>
    <div class="">
      <TPriceCard
        title-one="PRICING"
        title="COUPLES SHOOT – £250"
        :image-src="PriceCardImage"
        :items="priceCardItems"
      />

      <TButton class="outline outline-white text-center" color-option="option1"
        >Get in touch
      </TButton>
    </div>
  </div>
</template>