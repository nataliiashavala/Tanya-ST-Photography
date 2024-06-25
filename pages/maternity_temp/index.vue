<script setup>
import TCard from "~/components/general/TCard.vue";
import heroImage from "~/assets/img/maternity/hero_card_img.jpg";
import TRightCard from "~/components/general/TRightCard.vue";
import TPriceCard from "~/components/general/TPriceCard.vue";
import PriceCardImage from "~/assets/img/maternity/price_card.jpg";
import TButton from "~/components/general/TButton.vue";
import rightCardImage from "~/assets/img/maternity/right_card_img.jpg";
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
  <div class="text-white" :style="{ backgroundColor: '#545A3F' }">
    <div class="flex flex-col justify-center px-6 pt-12 sm:px-8 md:px-20 lg:px-64 lg:pt-36">
      <div class="container space-y-8 lg:space-y-28">
        <TCard
          title="MATERNITY"
          addTitle="CARING. LOVING. CALM"
          text="Embrace the beauty of your journey into motherhood with my Maternity Photoshoot Sessions. As you stand at the threshold of a new chapter, these sessions are crafted to honor the incredible transformation you are experiencing. In the tranquility of your chosen setting, we will collaborate to create graceful, tender portraits that capture the anticipation and love you hold for your unborn child. This is a time of wonder and change, and my maternity photoshoots are designed to reflect the strength and elegance of your pregnancy. I'll capture the intimate bond between you and your baby-to-be."
          :image-src="heroImage"
        />
        <div>
          <TImgCarousel
          :images="images"
            :interval="5000"
              />
        </div>

        <TRightCard
          first-title="EMOTIONS THROUGH EVERY PHOTO"
          second-title="ON THE SHOOT"
          :image-src="rightCardImage"
          text="Whether It`s capturing the unique bond between a mother and a daughter: the laughter, the joy, those unexpected and natural moments between them, or a dog and its devoted owner taking a stroll through the park, or the love shared between a mother and father and their precious new baby, I love to show these moments through photos.
          My preferred approach to any type of family shoot is relaxed, simple and unscripted: joining a family exploring the great outdoors, enjoying the simplicity of their daily routine… I love story-telling through photos. Memories that last a lifetime."
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
              styleOption="blackOption"
            />
            <div class="flex justify-center">
              <TButton class="text-center rounded-3xl" color-option="option2">Learn More </TButton>
            </div>
          </div> 
        </div>
            
      </div>
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
</template>
