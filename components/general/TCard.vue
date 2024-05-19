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
});
</script>

<template>
  <div class="flex flex-col lg:flex-row lg:space-x-9">
    <div class="lg:text-right sm:text-left flex-1 flex flex-col justify-top lg:space-y-5 space-y-2">
      <h1 class="text-3xl sm:text-4xl lg:text-6xl ctracking-widest font-nanum">{{ title }}</h1>
      <h1 class="font-nanum text-3xl">{{ addTitle }}</h1>
      <p class="text-small lg:text-2xl tracking-wide font-nanum">{{ text }}</p>
      <p class="text-base tracking-wide font-nanum">{{ textTwo }}</p>
      <p class="text-3xl lg:text-5xl italic tracking-wide font-explora">{{ textItalic }}</p>
    </div>
    <!-- Right Column for Image and Vertical Text -->
    <div class="space-x-0">
      <img :src="imageSrc" alt="Featured Image" class="lg:custom-size" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.custom-size {
  width: 560px;
  height: 831px;
}
</style>
