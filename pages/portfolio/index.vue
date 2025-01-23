<script setup>
import img1 from "~/assets/img/portfolio/wedding/slider/img1.jpg";
import img2 from "~/assets/img/portfolio/wedding/slider/img2.jpg";
import img3 from "~/assets/img/portfolio/wedding/slider/img3.jpg";
import img4 from "~/assets/img/portfolio/wedding/slider/img4.jpg";
import img5 from "~/assets/img/portfolio/wedding/slider/img5.jpg";
import img6 from "~/assets/img/portfolio/wedding/slider/img6.jpg";
import img7 from "~/assets/img/portfolio/wedding/slider/img7.jpg";
import img8 from "~/assets/img/portfolio/wedding/slider/img8.jpg";
import img9 from "~/assets/img/portfolio/wedding/slider/img9.jpg";
import img10 from "~/assets/img/portfolio/wedding/slider/img10.jpg";
import img11 from "~/assets/img/portfolio/wedding/slider/img11.jpg";
import img12 from "~/assets/img/portfolio/wedding/slider/img12.jpg";
import img13 from "~/assets/img/portfolio/wedding/slider/img13.jpg";
</script>

<template>
  <div
    class="flex flex-col justify-center px-6 sm:px-8 md:px-20 lg:px-64 lg:pt-36"
  >
    <h1
      class="text-3xl lg:text-6xl text-center lg:tracking-widest font-nanum mb-16 lg:mb-36"
    >
      Portfolio
    </h1>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div class="grid gap-4">
          <div>
              <img class="h-auto max-w-full rounded-lg" :src="img1" alt="">
          </div>
          <div>
              <img class="h-auto max-w-full rounded-lg" :src="img2" alt="">
          </div>
          <div>
              <img class="h-auto max-w-full rounded-lg" :src="img3" alt="">
          </div>
          <div>
              <img class="h-auto max-w-full rounded-lg" :src="img4" alt="">
          </div>
          <div>
              <img class="h-auto max-w-full rounded-lg" :src="img13" alt="">
          </div>
      </div>
      <div class="grid gap-4">
          <div>
              <img class="h-auto max-w-full rounded-lg" :src="img5" alt="">
          </div>
          <div>
              <img class="h-auto max-w-full rounded-lg" :src="img6" alt="">
          </div>
          <div>
              <img class="h-auto max-w-full rounded-lg" :src="img7" alt="">
          </div>
          <div>
              <img class="h-auto max-w-full rounded-lg" :src="img8" alt="">
          </div>
      </div>
      <div class="grid gap-4">
          <div>
              <img class="h-auto max-w-full rounded-lg" :src="img9" alt="">
          </div>
          <div>
              <img class="h-auto max-w-full rounded-lg" :src="img10" alt="">
          </div>
          <div>
              <img class="h-auto max-w-full rounded-lg" :src="img11" alt="">
          </div>
          <div>
              <img class="h-auto max-w-full rounded-lg" :src="img12" alt="">
          </div>
      </div>
    </div>
  </div>
</template>
