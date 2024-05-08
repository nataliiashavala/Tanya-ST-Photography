<script setup>
import TCard from "~/components/general/TCard.vue";
import heroImage from "~/assets/img/wedding/hero_img_wedding.jpg";
import TRightCard from "~/components/general/TRightCard.vue";
import rightImage from "~/assets/img/wedding/right_card.jpg";
import TPriceCard from "~/components/general/TPriceCard.vue";
import onePriceCardImage from "~/assets/img/wedding/one_price_card.jpg";
import twoPriceCardImage from "~/assets/img/wedding/two_price_card.jpg";
import threePriceCardImage from "~/assets/img/wedding/three_price_card.jpg";
import TButton from "~/components/general/TButton.vue";

const priceOneCardItems = [
  "Pre-wedding consultation",
  "Min 2-hour shoot",
  "300+ high-resolution, edited, digital photos",
  "Online Gallery to view and share with family and friends",
];

const priceTwoCardItems = [
  "Pre-wedding consultation",
  "Half-Day photography from morning wedding preparation until spechless",
  "500+ high-resolution, edited, digital photos",
  "20 6x4 prints",
  "Online Gallery to view and share with family and friends",
  "Wedding album available - 450£",
];

const priceThreeCardItems = [
  "Pre-wedding consultation",
  "Full-Day photography from preparation to the first 2 dances",
  "600+ high-resolution, edited, digital photos",
  "30 6x4 prints",
  "Online Gallery to view and share with family and friends",
  "Wedding album available - 450£",
];
const leftCardItems = [
  "Pre-wedding consultation",
  "Half-Day photography from morning wedding preparation until spechless",
  "500+ high-resolution, edited, digital photos",
  "20 6x4 prints",
  "Online Gallery to view and share with family and friends",
  "Wedding album available - 450£",
];
</script>

<template>
  <div class="container mx-auto space-y-32">
    <TCard
      title="I`M HERE TO HELP YOU REMEMBER YOUR BIG DAY"
      text="You don`t need to look any further. I am here to do everything I can to take the stress out of your big day and to be there for you every step of the way.
      The photos that I particularly like on any wedding day are those that capture those special, spontaneous moments. A tender glance shared by the couple, a mother`s smile, laughter between guests, a child`s curiosity… I won`t miss any details. It`s these moments that make your day as well as the more formal aspects such as the taking of your vows or the giving of the speeches."
      :image-src="heroImage"
      vertical-text="YOUR WEDDING DAY"
    />

    <TRightCard
      first-title="EMOTIONS THROUGH EVERY PHOTO"
      second-title="ON THE SHOOT"
      :image-src="rightImage"
      showButton="true"
      text="I am an easy-going photographer whilst never compromising on professionalism and detail and I will ensure you feel comfortable and relaxed working with me. I love bringing out the best in my subjects, capturing real moments and emotions, the formal and informal that both make up your special day. However, l am also happy to take more traditional posed-style photos, depending entirely on your personal needs.
      I am an adventurous and flexible person, delighted to go wherever my couples bring me. Whether it`s a church, your home or the top of a mountain, it`s your special day and I will follow! On the shoot with me, you will feel relaxed, at ease and will thoroughly enjoy your day, knowing your photos are in the best of hands."  
    />

    <TPriceCard
      title-one="PRICING"
      title="£250/ 1 HOUR"
      :image-src="onePriceCardImage"
      :items="priceOneCardItems"
    />

    <TPriceCard
      title="£1,200"
      :image-src="twoPriceCardImage"
      :items="priceTwoCardItems"
      reverse-columns
    />
    <div class="">
      <TPriceCard
        title="£1,650"
        :image-src="threePriceCardImage"
        :items="priceThreeCardItems"
      />

      <TButton class="outline outline-white text-center" color-option="option1"
        >Get in touch
      </TButton>
    </div>
  </div>
</template>

<style scoped>

</style>
