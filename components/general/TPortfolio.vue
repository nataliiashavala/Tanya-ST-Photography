<script setup>
import { defineProps, computed } from "vue";
import { useRouter } from "vue-router";

// Define the props for the component
const props = defineProps({
  mainTitle: {
    type: String,
    default: "PORTFOLIOS",
  },
  buttonText: {
    type: String,
    default: "VIEW ALL PORTFOLIO...",
  },
  buttonLink: {
    type: String,
    default: "/portfolio",
  },
  imageSrcOne: {
    type: String,
    default: "",
  },
  imageSrcTwo: {
    type: String,
    default: "",
  },
  imageSrcThree: {
    type: String,
    default: "",
  },
  imageSrcFour: {
    type: String,
    default: "",
  },
  imageSrcFive: {
    type: String,
    default: "",
  },
  styleOption: {
    type: String,
    default: "style1", // default style
    validator: (value) => ["style1", "style2"].includes(value),
  },
});

const router = useRouter();

// Define a method to navigate to the button link
const navigateTo = (link) => {
  router.push(link);
};

// Compute classes based on styleOption prop
const containerClasses = computed(() => {
  return props.styleOption === "style1"
    ? "bg-[#545A3F] text-white"
    : "bg-[#F5F5F5] text-black";
});

const buttonClasses = computed(() => {
  return props.styleOption === "style1"
    ? "text-white outline-white"
    : "text-black outline-black";
});
</script>

<template>
  <div :class="['flex flex-col p-9 my-9 space-y-10 lg:space-y-0', containerClasses]">
    <div class="flex flex-col lg:flex-row lg:mb-24 mt-2 lg:mt-10 space-y-8 lg:space-y-0">
      <div class="ml-0 lg:ml-64">
        <h1 class="text-2xl sm:text-4xl lg:text-5xl font-nanum text-center">
          {{ mainTitle }}
        </h1>
      </div>
      <div class="flex justify-center ml-0 lg:ml-96">
        <button
          @click="navigateTo(buttonLink)"
          :class="['text-sm outline px-2 py-2', buttonClasses]"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center lg:flex-row justify-center gap-4 lg:gap-8">
      <div class="max-w-xs lg:max-w-sm lg:space-x-11 space-x-0">
        <img
          :src="imageSrcOne"
          alt="Featured Image"
          class="w-full"
        />
      </div>
      <div class="max-w-xs lg:max-w-sm">
        <img
          :src="imageSrcTwo"
          alt="Featured Image"
          class="w-full"
        />
      </div>
      <div class="max-w-xs lg:max-w-sm">
        <img
          :src="imageSrcThree"
          alt="Featured Image"
          class="w-full"
        />
      </div>
      <div class="max-w-xs lg:max-w-sm">
        <img
          :src="imageSrcFour"
          alt="Featured Image"
          class="w-full"
        />
      </div>
      <div class="max-w-xs lg:max-w-sm">
        <img
          :src="imageSrcFive"
          alt="Featured Image"
          class="w-full"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styles here */
</style>

