<script setup>
import TCard from "~/components/general/TCard.vue";
import heroImage from "~/assets/img/couples/hero_card_img.jpg";
import TLeftCard from "~/components/general/TLeftCard.vue";
import leftImage from "~/assets/img/couples/left_card_img.jpg";
import TPriceCard from "~/components/general/TPriceCard.vue";
import porfolioOne from "~/assets/img/couples/img1.jpg";
import porfolioTwo from "~/assets/img/couples/img2.jpg";
import porfolioThree from "~/assets/img/couples/img3.jpg";
import TButton from "~/components/general/TButton.vue";
import TPortfolio from "~/components/general/TPortfolio.vue";
import TImgCarousel from "~/components/general/TImgCarousel.vue";
import img1 from "~/assets/img/portfolio/couples/slider/img1.jpg";
import img2 from "~/assets/img/portfolio/couples/slider/img2.jpg";
import img3 from "~/assets/img/portfolio/couples/slider/img3.jpg";
import img4 from "~/assets/img/portfolio/couples/slider/img4.jpg";
import img5 from "~/assets/img/portfolio/couples/slider/img5.jpg";
import img6 from "~/assets/img/portfolio/couples/slider/img6.jpg";
import img7 from "~/assets/img/portfolio/couples/slider/img7.jpg";
import img8 from "~/assets/img/portfolio/couples/slider/img8.jpg";
import img9 from "~/assets/img/portfolio/couples/slider/img9.jpg";
import img10 from "~/assets/img/portfolio/couples/slider/img10.jpg";


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
  "An immersive experience that celebrates your unique love story. From candid laughter to quiet moments of reflection, I'll be there to capture it all with a creative and sensitive eye.",
  "Guidance on styling and location to perfectly match the mood and narrative of your relationship, ensuring the photos truly reflect your personal journey together",
  "A comfortable, engaging photoshoot environment where you can truly be yourselves. I encourage you to let your guard down and enjoy the moment while I capture the magic.",
  "Expert post-shoot editing to bring out the best in your photos, highlighting the warmth and depth of your relationship.",
];
</script>

<template>
  <div
    class="flex flex-col justify-center px-6 pt-12 sm:px-8 md:px-20 lg:px-64 lg:pt-36"
  >
    <div class="container space-y-8 lg:space-y-28">
      <TCard
        title="COUPLES PHOTOSHOOT SESSIONS"
        text="In the dance of light and shadows, I seek to capture the beautiful intricacies of your love story. Couples photography is more than just taking pictures—it's about pausing the moment when you whisper a joke and she laughs, the gentle way you hold hands, or the shared glance that says everything without a word being spoken. It's the art of freezing those fleeting, ordinary moments that together create your extraordinary love story.
        As your photographer, I aim to create a relaxed and enjoyable experience that allows your unique chemistry to shine through. Whether it`s your first anniversary, an engagement, or just a day you want to remember forever, I`m here to encapsulate the warmth of your affection in images that will stand the test of time."
        :image-src="heroImage"
      />
      <div>
        <TImgCarousel :images="images" />
      </div>
      <div class="hidden md:block flex flex-col mt-9">
        <h1 class="text-6xl font-nanum text-center mb-24 w-full">
          CAPTURING YOUR LOVE STORY
        </h1>
        <TLeftCard
          :image-src="leftImage"
          title="ON THE SHOOT"
          :items="leftCardItems"
        />
      </div>
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
  <!--
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
  -->
</template>
