<script setup>
import TCard from "~/components/general/TCard.vue";
import heroImage from "~/assets/img/personal_brand/hero_card_img.jpg";
import TLeftCard from "~/components/general/TLeftCard.vue";
import leftCard from "~/assets/img/personal_brand/left_card_img.jpg";
import TPriceCard from "~/components/general/TPriceCard.vue";
import TButton from "~/components/general/TButton.vue";
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

const leftCardItems = [
  "Corporate Headshots: Clean, contemporary, and corporate—perfect for individuals or teams.",
  "Personal Branding: A more creative session that captures the essence of your personal brand.",
  "Workplace Snapshots: Photographs of you in your workplace, capturing the essence of your everyday professional environment.",
];

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
</script>

<template>
  <div
    class="flex flex-col justify-center px-6 sm:px-8 md:px-20 lg:px-64 lg:pt-36"
  >
    <div class="container space-y-8 lg:space-y-28">
      <TCard
        title="CAPTURE YOUR PROFESSIONAL BEST"
        text="In the fast-paced digital landscape, a standout image is not just a luxury—it's essential for any business. Whether you're sprucing up your salon, giving your boutique a fresh face, or showcasing the finesse of your beauty therapy services, a tailored business photoshoot is key to making an impact.
        With an artistic flair and a contemporary style, my photography brings out the vibrancy and charm of your business. I capture the essence of your brand, from the meticulous layout of your shop to the inviting atmosphere of your salon, ensuring every shot reflects the quality and character of your services. For businesses of all scales, from intimate local shops to bustling beauty hubs, I create visuals that resonate with your clientele and accentuate your market presence."
        :image-src="heroImage"
      />

      <div>
        <TImgCarousel :images="images" />
      </div>

      <TLeftCard
        :image-src="leftCard"
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
          style-option="whiteOption"
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
      style-option="style1"
    />
  </div>
</template>

<style scoped></style>
