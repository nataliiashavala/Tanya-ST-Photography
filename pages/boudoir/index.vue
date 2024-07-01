<script setup>
import TCard from "~/components/general/TCard.vue";
import TLeftCard from "~/components/general/TLeftCard.vue";
import TPriceCard from "~/components/general/TPriceCard.vue";
import TButton from "~/components/general/TButton.vue";
import heroImage from "~/assets/img/boudoir/hero_card_img.jpg";
import leftCardImage from "~/assets/img/boudoir/left_card_img.jpg";
import priceCardImage from "~/assets/img/boudoir/price_card.jpg";
import TPortfolio from "~/components/general/TPortfolio.vue";
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
  "Pre-shoot consultation",
  "30 min shoot hour shoot",
  "10+ high-resolution, edited, digitals photos",
];

const itemsList2 = [
  "Pre-shoot consultation",
  "1 hour shoot",
  "30+ high-resolution, edited, digitals photos",
  "Online Gallery to view",
];

const itemsList3 = [
  "Pre-shoot consultation",
  "1 hour shoot",
  "All high-resolution, edited, digitals photos",
  "Online Gallery to view",
];
const leftCardItems = [
  "An initial consultation to understand your vision and help plan the photography that will best tell your story.",
  "A flexible, discreet, and sensitive presence on your special day, capturing every significant look, touch, and emotion.",
  "A series of 30-50 high-resolution, edited images that reflect the depth of your bond and the beauty of your elopement.",
  "An online gallery that's as intimate and personal as your ceremony, where you can relive and share your memories with those who matter most.",
];
</script>

<template>
  <div
    class="flex flex-col justify-center px-6 pt-12 sm:px-8 md:px-20 lg:px-64 lg:pt-36 text-white"
    :style="{ backgroundColor: '#545A3F' }"
  >
    <div class="container space-y-8 lg:space-y-28">
      <TCard
        title="JUST US: SECRET ESCAPE"
        add-title="SENSUAL. INTIMATE. ELLEGANCE"
        text="Elopements are about the breathtaking intimacy of two hearts becoming one amidst settings that speak volumes. As an elopement photographer, I capture the essence of your union, the unspoken promise in each glance, and the serene simplicity of your perfect day. Your elopement is a sacred narrative, and I am here to narrate it through the silent poetry of images.
        Elopements are wonderfully personal, and so is my approach. I'll work with you to find that enchanted spot where your spirits soar—be it a tranquil lochside, a rugged cliff edge, or a quiet cityscape—and immortalize the moment with the artistry it deserves. I am passionate about creating a visual chronicle that encapsulates the purity and essence of your journey."
        :image-src="heroImage"
      />

      <div>
        <TImgCarousel :images="images" />
      </div>

      <TLeftCard
        :image-src="leftCardImage"
        title="What I Offer:"
        :items="leftCardItems"
      />

      <div class="flex justify-center flex-col space-y-4 lg:space-y-8">
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
          <TButton class="text-center rounded-3xl" color-option="option2"
            >Learn More
          </TButton>
        </div>
      </div>
    </div>
  </div>
  <div class="lg:mt-20 mt-11">
    <TPortfolio
      main-title="PORTFOLIOS"
      button-text="VIEW ALL PORTFOLIO..."
      button-link="/portfolio"
      :image-src-one="heroImage"
      :image-src-two="heroImage"
      :image-src-three="heroImage"
      :image-src-four="heroImage"
      :image-src-five="heroImage"
      style-option="style2"
    />
  </div>
</template>
