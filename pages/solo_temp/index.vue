<script setup>
import TCard from "~/components/general/TCard.vue";
import heroImage from "~/assets/img/solo/hero_card_img.jpg";
import TLeftCard from "~/components/general/TLeftCard.vue";
import leftImage from "~/assets/img/solo/left_card_img.jpg";
import TPriceCard from "~/components/general/TPriceCard.vue";
import porfolioOne from "~/assets/img/solo/img1.jpg";
import porfolioTwo from "~/assets/img/solo/img2.jpg";
import porfolioThree from "~/assets/img/solo/img3.jpg";
import TButton from "~/components/general/TButton.vue";
import TPortfolio from '~/components/general/TPortfolio.vue';
import TImgCarousel from "~/components/general/TImgCarousel.vue";
import img1 from "~/assets/img/portfolio/solo/slider/img1.jpg";
import img2 from "~/assets/img/portfolio/solo/slider/img2.jpg";
import img3 from "~/assets/img/portfolio/solo/slider/img3.jpg";
import img4 from "~/assets/img/portfolio/solo/slider/img4.jpg";
import img5 from "~/assets/img/portfolio/solo/slider/img5.jpg";
import img6 from "~/assets/img/portfolio/solo/slider/img6.jpg";
import img7 from "~/assets/img/portfolio/solo/slider/img7.jpg";
import img8 from "~/assets/img/portfolio/solo/slider/img8.jpg";
import img9 from "~/assets/img/portfolio/solo/slider/img9.jpg";
import img10 from "~/assets/img/portfolio/solo/slider/img10.jpg";

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
  "Corporate Headshots: Clean, contemporary, and corporate—perfect for individuals or teams.",
  "Personal Branding: A more creative session that captures the essence of your personal brand.",
  "Workplace Snapshots: Photographs of you in your workplace, capturing the essence of your everyday professional environment.",
];
</script>

<template>
  <div class="flex flex-col justify-center px-6 pt-12 sm:px-8 md:px-20 lg:px-64 lg:pt-36">
    <div class="container space-y-8 lg:space-y-28">
      <TCard
        title="I`M HERE TO HELP CAPTURE THE BEST OF YOU"
        text="My mission is to empower you and make you feel good about yourself.
        Whatever your age, background or role in life, I aim to bring out the best of you and capture it on camera. Whether you just want to relax and be yourself or show another facet of your character, I strive to help you feel good about yourself and boost your confidence.
        It`s your choice and your day: I`m delighted to be a part of it!"
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
      <div class="flex justify-center flex-col space-y-4 lg:space-y-8 ">
        <TPriceCard
          title-one="PRICING"
          title1="£250"
          :items1="itemsList1"
          :items2="itemsList2"
          :items3="itemsList3"
          title2="£350"
          title3="£450"
          styleOption="whiteOption"
        />
        <div class="flex justify-center">
          <TButton class="text-center rounded-3xl" color-option="option2">Learn More </TButton>
        </div>
      </div>
       
     
    </div>
  </div> 
  <div>
          <TPortfolio
            mainTitle="PORTFOLIOS"
            buttonText="VIEW ALL PORTFOLIO..."
            buttonLink="/portfolio"
            :image-srcOne="porfolioOne"
            :image-srcTwo="porfolioTwo"
            :image-srcThree="porfolioThree"
            styleOption="style1"
          />
        </div>
</template>