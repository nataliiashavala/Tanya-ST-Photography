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
  <div :class="['flex flex-col  space-y-10 lg:space-y-14', containerClasses]">
    <div class="flex flex-col  my-9 lg:flex-row mt-2 lg:mt-10 space-y-8 lg:space-y-0 space-x-8 px-6 sm:px-8 md:px-20 lg:px-64">
      <div class="ml-0 lg:ml-64">
        <h1 class="text-2xl sm:text-4xl lg:text-4xl font-nanum text-center">
          {{ mainTitle }}
        </h1>
      </div>
      <div class="flex justify-center ml-0 lg:pl-80">
        <button
          @click="navigateTo(buttonLink)"
          :class="['text-sm outline px-2', buttonClasses]"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center lg:flex-row justify-center space-x-8 px-6 sm:px-8 md:px-20 lg:px-64">
  <div class=" lg:max-w-sm w-custom-width h-custom-height">
    <img :src="imageSrcOne" alt="Featured Image" class="w-full h-full object-cover" />
  </div>
  <div class=" lg:max-w-sm w-custom-width h-custom-height">
    <img :src="imageSrcTwo" alt="Featured Image" class="w-full h-full object-cover" />
  </div>
  <div class=" lg:max-w-sm w-custom-width h-custom-height">
    <img :src="imageSrcThree" alt="Featured Image" class="w-full h-full object-cover" />
  </div>
</div>

  </div>
</template>

<style scoped>
.w-custom-width {
  width: 365px;
}
.h-custom-height {
  height: 445px;
}
</style>

