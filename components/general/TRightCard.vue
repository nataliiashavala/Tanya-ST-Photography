<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

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

const router = useRouter();

const navigateToPortfolio = () => {
  router.push("/portflio");
};
</script>

<template>
  <div class="flex flex-col mt-9">
    <h1 class="hidden md:block text-6xl font-nanum text-center mb-24 w-full">
      {{ firstTitle }}
    </h1>
    <div class="flex relative space-x-7">
      <div class="hidden md:block flex space-x-0">
        <img
          :src="imageSrc"
          alt="Featured Image"
          class="custom-size w-[35rem] h-[45.8rem]"
        />
      </div>
      <div class="text-left flex-1 flex flex-col justify-top pt-4 lg:pt-8">
        <h1
          class="lg:absolute,left-72,top-0 text-5xl lg:text-8xl text-right leading-10 tracking-widest font-explora pb-8"
        >
          {{ secondTitle }}
        </h1>
        <p
          class="font-nanum text-left text-xs sm:text-base lg:text-2xl tracking-widest"
        >
          {{ text }}
        </p>
        <button
          v-if="showButton"
          class="bg-customGreen outline flex justify-center tex-center outline-white text-white text-small font-nanum w-1/3 lg:w-1/4 h-12 mt-20"
          @click="navigateToPortfolio"
        >
          VIEW ALL PORTFOLIO...
        </button>
      </div>
    </div>
  </div>
</template>
