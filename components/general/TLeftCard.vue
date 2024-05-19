<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    default: "",
  },
  items: {
    type: Array,
    default: () => [],
  },
  imageSrc: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="flex flex-col lg:flex-row space-x-5">
    <div class="hidden md:block flex space-x-0">
      <img
        :src="imageSrc"
        alt="Featured Image"
        class="custom-size w-[35rem] h-[45.8rem]"
      />
    </div>
    <div class="lg:text-left text-right flex-1 flex flex-col justify-top space-y-10 pt-5">
      <h1 class="text-5xl lg:text-8xl tracking-widest font-explora">{{ title }}</h1>
      <ul
        class="font-nanum text-left text-small lg:text-2xl m-0 lg:m-6 list-disc list-inside leading-10 tracking-widest"
      >
        <!-- Use v-for to render list items -->
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
