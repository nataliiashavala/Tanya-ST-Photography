
<template>
  <!--Hero Section-->
  <div class="h-screen bg-cover bg-center" :style="{ backgroundImage: `url(${heroImage})` }">
    <div class="isolate px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:pt-32 pb-">
        <div class="text-center text-white font-nanum space-y-12">
          <h1 class="text-6xl uppercase">tanya st photography</h1>
          <p class="mt-6 text-lg leading-8  uppercase">we are here to help you to remember the best days</p>
          <div class="flex items-center justify-center">
            <a href="#" class=" text-center outline outline-white w-52 h-14 py-2 px-4 shadow-md text-xl ">Get In Touch</a>
          </div>
        </div>
      </div>
    </div>
  </div>


<!-- Second Section-->
  <div class="flex flex-col justify-center items-center mt-6">
    <div class="text-center">
      <h1 class="text-5xl font-nanum mb-1">
        Beyond Ordinary
      </h1>
      <h1 class="text-5xl font-nanum">
        Photography
      </h1>
    </div>
    <div class=" flex flex-row space-x-14">
      <div class="max-w-sm">
          <a href="#">
              <img class="" src="/assets/img/home/first_card_img.jpg" alt="" />
          </a>
          <div class="p-5 text-center">
              <a href="#">
                  <h5 class="mb-2 text-3xl">Wedding</h5>
              </a>
              <p class="mb-3 font-normal text-xl">Authentic and creative wedding photography without any unnatural and uncomfortable posing. Whether your style is relaxed, unconventional or more traditional, I will capture the essence of your most special day, not missing any of those precious details. The only thing you’ll need to do is enjoy it to the full!</p>
              <Tutton
              color-option="option1"
              Get In Touch
              />
          </div>
      </div>
      <div class="max-w-sm mt-28">
          <a href="#">
              <img class="" src="/assets/img/home/second_card_img.jpg" alt="" />
          </a>
          <div class="p-5 text-center">
              <a href="#">
                  <h5 class="mb-2 text-3xl">Family</h5>
              </a>
              <p class="mb-3 font-normal text-xl">Special times with the ones you love. The focus is you and your loved ones, and telling the story of your family and the special relationship that you share. Capturing a child’s smile, a parent’s affection or that special bond with your pet, I will ensure they are memories for a lifetime.</p>
              <Tutton
              color-option="option1"
              Get In Touch
              />
          </div>
      </div>
      <div class="max-w-sm text-center">
          <a href="#">
              <img class="" src="/assets/img/home/third_card_img.jpg" alt="" />
          </a>
          <div class="p-5 text-center">
              <a href="#">
                  <h5 class="mb-2 text-3xl">Elopements</h5>
              </a>
              <p class="mb-3 font-normal text-xl">Elopements are wonderfully personal, and so is my approach. I'll work with you to find that enchanted spot where your spirits soar—be it a tranquil lochside, a rugged cliff edge, or a quiet cityscape—and immortalize the moment with the artistry it deserves. I am passionate about creating a visual chronicle that encapsulates the purity and essence of your journey.</p>
              
          </div>
      </div>
    </div>

    <div class="uppercase text-center text-5xl py-36">
      <h1 class="mb-1">
        we will make a wonderful story</h1>
      <h1>
        make a statment throuugh every picture</h1>
    </div>
  </div>


  <div class="flex justify-center items-center pb-11">
        <div class="w-72 h-px bg-black mr-4"></div>
        <div class="flex flex-col">
          <h1 class="text-6xl tracking-widest font-explora text-cente uppercase">
            making your 
          </h1>
          <h1 class="text-6xl tracking-widest font-explora text-cente uppercase">
            special day
          </h1>
       </div>
        <div class="w-72 h-px bg-black mr-4"></div>
  </div>
  
  <!-- Third Section-->
  <div class="flex justify-center items-center">
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


</template>

<script setup>
import { ref } from 'vue'
import TButton from '~/components/general/TButton.vue';
import heroImage from '~/assets/img/home/hero_img.jpg'

</script>










