<script setup>
import TButton from "~/components/general/TButton.vue";
</script>
<template>
  <!-- First Section-->
  <div class="flex justify-center px-64">
    <div class="container space-y-56">
      <div class="flex justify-center items-center">
        <div class="text-right m-36">
          <h1 class="text-custom tracking-widest font-nanum mb-36">
            Your memories will find a beautiful home in our wedding albums.
          </h1>
            <div class="flex flex-row justify-center relative">
              <img class ="absolute left-4 top-52" 
              src="/assets/img/albums/hero_img_down.jpg" 
              alt="Logo of brand">
              <img class="" 
              src="/assets/img/albums/hero_img_up.jpg" 
              alt="Logo of brand">
            </div>
          </div>
      </div>
    
    <!-- Second Section-->
      <div class="flex justify-center items-center">
      <div class="text-center space-</div>y-20">
        <h1 class="text-custom font-nanum">Velor</h1>
        <p class="text-2xl">Not only the color of the material is important, but the feeling of touch, which conveys tenderness and warmth. Books made of velor are pleasant not only to look at, but also to hold in your hands. Velor has the unique feature of changing its texture when touched.</p>
        <div class="flex flex-1 justify-center items-center"> 
          <div class="flex flex-row space-x-7">
            <div class="w-24 h-24 bg-[#A18080] rounded-full"></div>
            <div class="w-24 h-24 bg-yellow-500 rounded-full"></div>
            <div class="w-24 h-24 bg-[#F0ECE1] rounded-full"></div>
          </div>
        </div>
      </div>
      </div>
      <!-- Place for Album-->
      <!-- Third Section-->
      <div class="flex justify-center items-center">
        <div class="text-center space-y-20 font-nanum">
          <h1 class="text-custom ">DEFFE textiles</h1>
          <p class="text-2xl">Not only the color of the material is important, but also the feeling of touch that conveys softness and warmth. Books made of velvet are pleasant not only to look at but also just to hold in your hands. Velvet has the unique characteristic of changing its texture upon touch.</p>
          <div class="flex justify-center items-center"> 
            <div class="flex flex-row space-x-7">
              <div class="w-24 h-24 bg-zinc-300  rounded-full"></div>
              <div class="w-24 h-24 bg-[#655636] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Place for Album-->
      <!-- Fourth Section-->
      <div class="flex justify-center items-center">
        <div class="text-center space-y-20">
          <h1 class="text-custom font-nanum">Fine Art / Linen</h1>
          <div class="flex justify-center items-center"> 
            <div class="">
              <div class="w-24 h-24 bg-[#ABA597] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <p class="text-2xl font-nanum mb-20">"Begin the journey of preserving your cherished memories with our bespoke wedding albums. Prices start from £400 and vary depending on the design and materials chosen. Each album is crafted to reflect the unique beauty of your special day.”</p>
      
      <TButton 
        color-option="option1">
        Get In Touch
      </TButton>
      </div>
    </div>
  </div>

</template>