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
import TImgCarousel from "~/components/general/TImgCarousel.vue";
import img1 from "~/assets/img/portfolio/slider/img1.jpg";
import img2 from "~/assets/img/portfolio/slider/img2.jpg";
import img3 from "~/assets/img/portfolio/slider/img3.jpg";
import img4 from "~/assets/img/portfolio/slider/img4.jpg";
import img5 from "~/assets/img/portfolio/slider/img5.jpg";
import img6 from "~/assets/img/portfolio/slider/img6.jpg";
import img7 from "~/assets/img/portfolio/slider/img7.jpg";
import img8 from "~/assets/img/portfolio/slider/img8.jpg";
import img9 from "~/assets/img/portfolio/slider/img9.jpg";
import img10 from "~/assets/img/portfolio/slider/img10.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const itemsList1 = [
  "Pre-wedding consultation",
  "Half-Day photography from morning wedding preparation until spechless",
  "500+ high-resolution, edited, digital photos",
  "20 6x4 prints",
  "Online Gallery to view and share with family and friends",
  "Wedding album available - 450£",
];

const itemsList2 = [
  "Pre-wedding consultation",
  "Full-Day photography from preparation to the first 2 dances",
  "600+ high-resolution, edited, digital photos",
  "30 6x4 prints",
  "Online Gallery to view and share with family and friends",
  "Wedding album available - 450£",
];
const itemsList3 = [
  "Pre-wedding consultation",
  "Half-Day photography from morning wedding preparation until spechless",
  "500+ high-resolution, edited, digital photos",
  "20 6x4 prints",
  "Online Gallery to view and share with family and friends",
  "Wedding album available - 450£",
];
</script>

<template>
  <div class="text-white" :style="{ backgroundColor: '#545A3F' }">
    <div
      class="flex justify-center px-6 pt-12 sm:px-8 sm:pt-16 md:px-10 lg:px-64 lg:pt-36"
    >
      <div class="container space-y-8 lg:space-y-32">
        <TCard
          title="I`M HERE TO HELP YOU REMEMBER YOUR BIG DAY"
          text="You don`t need to look any further. I am here to do everything I can to take the stress out of your big day and to be there for you every step of the way.
          The photos that I particularly like on any wedding day are those that capture those special, spontaneous moments. A tender glance shared by the couple, a mother`s smile, laughter between guests, a child`s curiosity… I won`t miss any details. It`s these moments that make your day as well as the more formal aspects such as the taking of your vows or the giving of the speeches."
          :image-src="heroImage"
          vertical-text="YOUR WEDDING DAY"
        />
        <div>
          <TImgCarousel :images="images" />
        </div>
        <TRightCard
          first-title="EMOTIONS THROUGH EVERY PHOTO"
          second-title="ON THE SHOOT"
          :image-src="rightImage"
          show-button="true"
          text="I am an easy-going photographer whilst never compromising on professionalism and detail and I will ensure you feel comfortable and relaxed working with me. I love bringing out the best in my subjects, capturing real moments and emotions, the formal and informal that both make up your special day. However, l am also happy to take more traditional posed-style photos, depending entirely on your personal needs.
          I am an adventurous and flexible person, delighted to go wherever my couples bring me. Whether it`s a church, your home or the top of a mountain, it`s your special day and I will follow! On the shoot with me, you will feel relaxed, at ease and will thoroughly enjoy your day, knowing your photos are in the best of hands."
        />
        <div class="space-y-4 lg:space-y-8">
          <TPriceCard
            title-one="PRICING"
            title1="£250"
            :items1="itemsList1"
            :items2="itemsList2"
            :items3="itemsList3"
            title2="£350"
            title3="£450"
            style-option="blackOption"
          />

          <div class="flex justify-center">
            <TButton
              class="outline outline-white text-center"
              color-option="option1"
            >
              Get in touch
            </TButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
