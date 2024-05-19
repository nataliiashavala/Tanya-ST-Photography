<script setup>
import TCard from "~/components/general/TCard.vue";
import heroImage from "~/assets/img/couples/hero_card_img.jpg";
import TLeftCard from "~/components/general/TLeftCard.vue";
import leftImage from "~/assets/img/couples/left_card_img.jpg";
import TPriceCard from "~/components/general/TPriceCard.vue";
import PriceCardImage from "~/assets/img/couples/price_card.jpg";
import TButton from "~/components/general/TButton.vue";
import TPortfolio from '~/components/general/TPortfolio.vue';
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
  <div class="text-white" :style="{ backgroundColor: '#545A3F' }">
    <div class="flex flex-col justify-center px-6 pt-12 sm:px-8 md:px-20 lg:px-64 lg:pt-36">
      <div class="container space-y-8 lg:space-y-28">
        <TCard
          title="JUST US: SECRET ESCAPE"
          text="Elopements are about the breathtaking intimacy of two hearts becoming one amidst settings that speak volumes. As an elopement photographer, I capture the essence of your union, the unspoken promise in each glance, and the serene simplicity of your perfect day. Your elopement is a sacred narrative, and I am here to narrate it through the silent poetry of images.
          Elopements are wonderfully personal, and so is my approach. I'll work with you to find that enchanted spot where your spirits soar—be it a tranquil lochside, a rugged cliff edge, or a quiet cityscape—and immortalize the moment with the artistry it deserves. I am passionate about creating a visual chronicle that encapsulates the purity and essence of your journey."
          :image-src="heroImage"
        />
        <div>
          <TImgCarousel
          :images="images"
            :interval="5000"
              />
        </div>
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
            styleOption= "whiteOption"
          />
          <div class="flex justify-center my-10 lg:my-0">
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
              styleOption="style2"
            />
        </div>
        </div>
      </div>
  </div>
  </div>
</template>

<style scoped></style>
