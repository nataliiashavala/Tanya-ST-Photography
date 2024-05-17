<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    default: "",
  },
  addTitle: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  textTwo: {
    type: String,
    default: "",
  },
  textItalic: {
    type: String,
    default: "",
  },
  imageSrc: {
    type: String,
    default: "",
  },
  verticalText: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="flex space-x-9">
    <div class="text-right flex-1 flex flex-col justify-top space-y-14 my-32">
      <h1 class="text-custom tracking-widest font-nanum">{{ title }}</h1>
      <h1 class="font-nanum text-3xl">{{ addTitle }}</h1>
      <p class="text-2xl tracking-wide font-nanum">{{ text }}</p>
      <p class="text-base tracking-wide font-nanum">{{ textTwo }}</p>
      <p class="text-5xl italic tracking-wide font-explora">{{ textItalic }}</p>
    </div>
    <!-- Right Column for Image and Vertical Text -->
    <div class="flex space-x-0">
      <img :src="imageSrc" alt="Featured Image" class="custom-size" />
      <div class="">
        <span
          class="text-custom transform rotate-180 text-center text-black whitespace-nowrap font-explora tracking-widest v-text"
          >{{ verticalText }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.custom-size {
  width: 560px;
  height: 831px;
}
.v-text {
  writing-mode: vertical-rl;
}
</style>
