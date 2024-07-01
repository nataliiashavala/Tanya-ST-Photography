<script setup>
import TCard from "~/components/general/TCard.vue";
import heroImage from "~/assets/img/babies/hero_card_img.jpg";
import TRightCard from "~/components/general/TRightCard.vue";
import TPriceCard from "~/components/general/TPriceCard.vue";
import TButton from "~/components/general/TButton.vue";
import rightCardImage from "~/assets/img/babies/right_card_img.jpg";
import TPortfolio from "~/components/general/TPortfolio.vue";
import TImgCarousel from "~/components/general/TImgCarousel.vue";
// import img1 from "~/assets/img/portfolio/slider/img1.jpg";
// import img2 from "~/assets/img/portfolio/slider/img2.jpg";
// import img3 from "~/assets/img/portfolio/slider/img3.jpg";
// import img4 from "~/assets/img/portfolio/slider/img4.jpg";
// import img5 from "~/assets/img/portfolio/slider/img5.jpg";
// import img6 from "~/assets/img/portfolio/slider/img6.jpg";
// import img7 from "~/assets/img/portfolio/slider/img7.jpg";
// import img8 from "~/assets/img/portfolio/slider/img8.jpg";
// import img9 from "~/assets/img/portfolio/slider/img9.jpg";
// import img10 from "~/assets/img/portfolio/slider/img10.jpg";

// const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

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
    class="flex flex-col justify-center px-6 pt-12 sm:px-8 md:px-20 lg:px-64 lg:pt-36"
  >
    <div class="container space-y-8 lg:space-y-28">
      <TCard
        title="Tiny smiles: heartwarming moments"
        text="Witness the delicate yawns, tiny toes, and sleepy smiles with my Baby Photoshoot Sessions. Designed to capture the fleeting moments of infancy, these sessions are a celebration of new life and the love that surrounds it. In the comfort and warmth of a serene environment, I create timeless portraits that speak to the innocence and enchanting simplicity of your little one.
        Each photograph is a pause button on the rapid growth of your baby, a treasured snapshot of their earliest days. Whether it's a peaceful slumber or a wide-eyed wonder, my goal is to capture the natural beauty of your baby's first curious explorations of the world."
        :image-src="heroImage"
      />
      <div>
        <!-- <TImgCarousel :images="images" /> -->
      </div>
      <TRightCard
        first-title="EMOTIONS THROUGH EVERY PHOTO"
        second-title="ON THE SHOOT"
        :image-src="rightCardImage"
        text="The perfect time to capture the innocence and charm of your baby is typically within the first two weeks after birth. During this window, babies are usually more amenable to the cozy, curled-up poses that make for such heartwarming images. They tend to sleep deeply and are more easily positioned. However, beautiful photos can be captured at any stage in your baby's first year.
        To document their growth and changing features, consider scheduling photo sessions at key milestones, such as when they can lift their head, sit up unassisted, or stand with support. Each stage brings its own magical moments worth preserving"
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
      :image-srcOne="porfolioOne"
      :image-srcTwo="porfolioTwo"
      :image-srcThree="porfolioThree"
      style-option="style1"
    />
  </div>
</template>
