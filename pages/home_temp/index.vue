
<template>
  <!--Hero Section-->
  <div class="bg-cover bg-center" :style="{ backgroundImage: `url(${heroImage})` }">
    <div class="isolate px-4 pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:pt-32">
        <div class="text-center text-white font-nanum space-y-12">
          <h1 class="text-2xl sm:text-4xl lg:text-6xl uppercase">tanya st photography</h1>
          <p class="hidden sm:block mt-6 text-lg leading-8 uppercase">we are here to help you to remember the best days</p>
          <div class="flex items-center justify-center">
            <router-link to="/contact-me" class="text-center text-base sm:text-lg lg:text-xl outline outline-white sm:w-40 sm:h-9 lg:w-52 lg:h-14 py-2 px-4 shadow-md">Get In Touch</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center px-4 sm:px-6 md:px-20 lg:px-64">
    <div class="container">
    <!-- Second Section-->
      <div class="flex flex-col justify-center items-center mt-6">
        <div class="text-center text-2xl sm:text-4xl lg:text-5xl">
          <h1 class="font-nanum mb-1">
            Beyond Ordinary
          </h1>
          <h1 class="font-nanum">
            Photography
          </h1>
        </div>
        <div class="flex flex-col lg:flex-row lg:space-x-14 mt-8 space-y-8 sm:space-y-0">
          <div class="max-w-sm">
            <router-link to="/wedding">
                  <img class="" src="/assets/img/home/first_card_img.jpg" alt="" />
                </router-link>
              <div class="p-5 text-center">
                  
                      <h5 class="mb-2 text-3xl">Wedding</h5>
                  
                  <p class="hidden sm:block mb-3 font-normal text-xl">Authentic and creative wedding photography without any unnatural and uncomfortable posing. Whether your style is relaxed, unconventional or more traditional, I will capture the essence of your most special day, not missing any of those precious details. The only thing you’ll need to do is enjoy it to the full!</p>
                  <Tutton
                  color-option="option1"
                  Get In Touch
                  />
              </div>
          </div>
          <div class="max-w-sm pt-0 lg:pt-28">
            <router-link to="/family">
              <img class="" src="/assets/img/home/second_card_img.jpg" alt="" />
            </router-link>
              <div class="p-5 text-center">
                      <h5 class="mb-2 text-3xl">Family</h5>
                  <p class="hidden sm:block mb-3 font-normal text-xl">Special times with the ones you love. The focus is you and your loved ones, and telling the story of your family and the special relationship that you share. Capturing a child’s smile, a parent’s affection or that special bond with your pet, I will ensure they are memories for a lifetime.</p>
                  <Tutton
                  color-option="option1"
                  Get In Touch
                  />
              </div>
          </div>
          <div class="max-w-sm text-center">
            <router-link to="/elopements">
                  <img class="" src="/assets/img/home/third_card_img.jpg" alt="" />
                </router-link>
              <div class="p-5 text-center">
                      <h5 class="mb-2 text-3xl">Elopements</h5>
                  <p class="hidden sm:block mb-3 font-normal text-xl">Elopements are wonderfully personal, and so is my approach. I'll work with you to find that enchanted spot where your spirits soar—be it a tranquil lochside, a rugged cliff edge, or a quiet cityscape—and immortalize the moment with the artistry it deserves. I am passionate about creating a visual chronicle that encapsulates the purity and essence of your journey.</p>
              </div>
          </div>
        </div>

        <div class="hidden sm:block uppercase text-center text-5xl py-36">
          <h1 class="mb-1">
            we will make a wonderful story</h1>
          <h1>
            make a statment throuugh every picture</h1>
        </div>
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
        />
     </div>


    <div class="hidden md:block">
      <div class="flex flex-row justify-center items-center pb-11">
          <div class="w-72 h-px bg-black mr-4"></div>
            <div class="flex flex-col">
              <h1 class="text-6xl tracking-widest font-explora text-center uppercase">
                making your 
              </h1>
              <h1 class="text-6xl tracking-widest font-explora text-center uppercase">
                special day
              </h1>
             </div>
          <div class="w-72 h-px bg-black mr-4"></div>
      </div>
    </div>
      <!-- Third Section-->
    <div class="hidden sm:block">
      <div class="justify-center items-center">
        <div class="flex flex-row">
          <img class="" src="/assets/img/home/left_card_img.jpg" alt="Image of married couple">
          <div class="bg-stone-100">
            <div class="outline outlin-black m-32 p-11">
              <div class="font-nanum text-center space-y-11">
                <h2 class="uppercase text-xl">
                  let`s work together
                </h2>
                <h1 class="uppercase text-4xl">
                  every photo with new view
                </h1>
                <p class="uppercase text-xl pb-2">
                  i am here to help you to remember your best days
                </p>
                <TButton class=""
                color-option="option1">
                Get In Touch
              </TButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import TButton from '~/components/general/TButton.vue';
import heroImage from '~/assets/img/home/hero_img.jpg';
import TPortfolio from '~/components/general/TPortfolio.vue';
</script>