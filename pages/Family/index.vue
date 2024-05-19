<script setup>
import TCard from "~/components/general/TCard.vue";
import heroImage from "~/assets/img/family/hero_card_img.jpg";
import TRightCard from "~/components/general/TRightCard.vue";
import rightImage from "~/assets/img/family/right_card.jpg";
import TPriceCard from "~/components/general/TPriceCard.vue";
import PriceCardImage from "~/assets/img/family/price_card.jpg";
import TButton from "~/components/general/TButton.vue";
import TPortfolio from '~/components/general/TPortfolio.vue';

const priceCardItems = [
  "Pre-shoot consultation",
  "2 hour shoot",
  "300+ high-resolution, edited, digital photos",
  "Online Gallery to vie",
];
</script>

<template>
  <div class="flex justify-center px-64 pt-36">
    <div class="container">
      <TCard
        title="I`M HERE TO GIVE YOU UNFORGETTABLE MEMORIES"
        text="Family shoots are important moments for everyone. I try to make it memorable and easy-going for my clients. I love to capture pure emotions and the special bond within each family. I love to take photos of people moving and interacting with each other. My shoots are full of emotion, action, fun and smiles.
          I can help with clothes and styling, giving advice regarding colours, hair and overall look. I can also recommend an experienced make-up artist to help you achieve that perfect look on the day."
        :image-src="heroImage"
        vertical-text="FAMILY MOMENTS"
      />

      <TRightCard
        first-title="EMOTIONS THROUGH EVERY PHOTO"
        second-title="ON THE SHOOT"
        :image-src="rightImage"
        text="Whether It`s capturing the unique bond between a mother and a daughter: the laughter, the joy, those unexpected and natural moments between them, or a dog and its devoted owner taking a stroll through the park, or the love shared between a mother and father and their precious new baby, I love to show these moments through photos.
        My preferred approach to any type of family shoot is relaxed, simple and unscripted: joining a family exploring the great outdoors, enjoying the simplicity of their daily routine… I love story-telling through photos. Memories that last a lifetime."
      />

      <TPriceCard
        title-one="PRICING"
        title="FAMILY SHOOT - £250"
        :image-src="PriceCardImage"
        :items="priceCardItems"
      />
      <div class="flex justify-center">
        <TButton class="outline outline-white text-center" color-option="option1"
          >Get in touch
        </TButton>
      </div>

      <div>
        <TPortfolio
          mainTitle="PORTFOLIOS"
          buttonText="VIEW ALL PORTFOLIO..."
          buttonLink="/portfolio"
          :image-srcOne="heroImage"
          :image-srcTwo="heroImage"
          :image-srcThree="heroImage"
          :image-srcFour="heroImage"
          :image-srcFive="heroImage"
          styleOption="style1"
        />
     </div>

    </div>
  </div>
</template>
