<script setup>
import { defineProps } from "vue";

defineProps({
  firstTitle: {
    type: String,
    default: "",
  },
  secondTitle: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  imageSrc: {
    type: String,
    default: "",
  },
  showButton: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="flex flex-col mt-9">
    <h1 class="text-6xl font-nanum text-center mb-24 w-full">
      {{ firstTitle }}
    </h1>
    <div class="flex relative space-x-7">
      <div class="flex space-x-0">
        <img
          :src="imageSrc"
          alt="Featured Image"
          class="custom-size w-[35rem] h-[45.8rem]"
        />
      </div>
      <div class="text-left flex-1 flex flex-col justify-top pt-36">
        <h1
          class="absolute left-72 top-0 text-8xl leading-10 tracking-widest font-explora pt-12"
        >
          {{ secondTitle }}
        </h1>
        <p class="font-nanum text-left text-2xl tracking-widest">{{ text }}</p>
        <button
          v-if="showButton"
          class="bg-customGreen text-white text-small font-nanum w-1/4 h-12 mt-20"
        >
          VIEW ALL PORTFOLIO...
        </button>
      </div>
    </div>
  </div>
</template>
