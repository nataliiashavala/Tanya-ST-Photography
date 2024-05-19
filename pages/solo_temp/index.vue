<script setup>
import TCard from "~/components/general/TCard.vue";
import heroImage from "~/assets/img/solo/hero_card_img.jpg";
import TLeftCard from "~/components/general/TLeftCard.vue";
import leftImage from "~/assets/img/solo/left_card_img.jpg";
import TPriceCard from "~/components/general/TPriceCard.vue";
import PriceCardImage from "~/assets/img/solo/price_card.jpg";
import TButton from "~/components/general/TButton.vue";
import TPortfolio from '~/components/general/TPortfolio.vue';

const priceCardItems = [
  "Pre-shoot consultation",
  "1-1.5 hour shoot",
  "150+ high-resolution, edited, digitals photos",
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

      <TLeftCard
        :image-src="leftImage"
        title="What I Offer:"
        :items="leftCardItems"
      />
      <div class="">
        <TPriceCard
          title-one="PRICING"
          title="SOLO SHOOT - £200"
          :image-src="PriceCardImage"
          :items="priceCardItems"
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
            styleOption="style1"
          />
        </div>
      </div>
    </div>
  </div>
</template>