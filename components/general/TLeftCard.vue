<template>
  <div class="flex space-x-5">
    <!-- Right Column for Image and Vertical Text -->
    <div class="flex space-x-0">
      <img :src="imageSrc" alt="Featured Image" class="custom-size" >
    </div> 
    <!-- Left Column for Title and Text -->
      <div class="text-left flex-1 flex flex-col justify-top space-y-10 pt-5">
        <h1 class="text-8xl tracking-widest font-explora ">{{ title }}</h1>
        <ul class="font-nanum text-left text-2xl m-6 list-disc list-inside leading-10 tracking-widest">
        <!-- Use v-for to render list items -->
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
      </div>
  
   
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Define props for the component
const { title, text, imageSrc } = defineProps({
  title: String,
  items: Array,
  imageSrc: String,
});
</script>

<style scoped>
/* Tailwind CSS utility classes handle most styling. */
.custom-size {
  width: 560px;
  height: 734px;
}
</style>
