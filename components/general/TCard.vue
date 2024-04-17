<template>
  <div class="flex space-x-9">
    <!-- Left Column for Title and Text -->

      <div class="text-right flex-1 flex flex-col justify-top space-y-4">
        <h1 class="text-custom tracking-widest font-nanum">{{ title }}</h1>
        <p class="text-2xl tracking-wide font-nanum">{{ text }}</p>
      </div>
  
    <!-- Right Column for Image and Vertical Text -->
    <div class="flex space-x-0">
      <img :src="imageSrc" alt="Featured Image" class="custom-size" >
      <div class="">
        <span class="text-custom transform rotate-180 text-center text-black whitespace-nowrap font-explora tracking-widest v-text">{{ VerticalText }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Define props for the component
const { title, text, imageSrc } = defineProps({
  title: String,
  text: String,
  imageSrc: String,
  VerticalText: String
});
</script>

<style scoped>
/* Tailwind CSS utility classes handle most styling. */
.custom-size {
  width: 560px;
  height: 831px;
}
.v-text {
  writing-mode: vertical-rl;
}
</style>

