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
  "Online Gallery to vie",
];
</script>

<template>
  <div class="text-white" :style="{ backgroundColor: '#545A3F' }">
    <div class="flex flex-col justify-center px-6 pt-12 sm:px-8 md:px-20 lg:px-64 lg:pt-36">
      <div class="container space-y-8 lg:space-y-28">
        <TCard
          title="MATERNITY"
          addTitle="CARING. LOVING. CALM"
          text="Embrace the beauty of your journey into motherhood with my Maternity Photoshoot Sessions. As you stand at the threshold of a new chapter, these sessions are crafted to honor the incredible transformation you are experiencing. In the tranquility of your chosen setting, we will collaborate to create graceful, tender portraits that capture the anticipation and love you hold for your unborn child. This is a time of wonder and change, and my maternity photoshoots are designed to reflect the strength and elegance of your pregnancy. I'll capture the intimate bond between you and your baby-to-be."
          :image-src="heroImage"
        />

        <TRightCard
          first-title="EMOTIONS THROUGH EVERY PHOTO"
          second-title="ON THE SHOOT"
          :image-src="rightCardImage"
          text="Whether It`s capturing the unique bond between a mother and a daughter: the laughter, the joy, those unexpected and natural moments between them, or a dog and its devoted owner taking a stroll through the park, or the love shared between a mother and father and their precious new baby, I love to show these moments through photos.
          My preferred approach to any type of family shoot is relaxed, simple and unscripted: joining a family exploring the great outdoors, enjoying the simplicity of their daily routine… I love story-telling through photos. Memories that last a lifetime."
        />

        <div class="">
          <TPriceCard
            title-one="PRICING"
            title="FAMILY SHOOT - £250"
            :image-src="PriceCardImage"
            :items="priceCardItems"
            styleOption= "whiteOption"
          />
          <div class="flex justify-center my-10 lg:my-0">
          <TButton class="outline outline-white text-center" color-option="option1">
            Get in touch
          </TButton>
        </div>
        </div>
      </div>
     </div>
  </div>
</template>
