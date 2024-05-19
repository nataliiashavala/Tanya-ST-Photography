<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  titleOne: {
    type: String,
    default: "",
  },
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
  styleOption: {
    type: String,
    default: "blackOption",
    validator: (value) => ["whiteOption", "blackOption"].includes(value),
  },
  reverseColumns: {
    type: Boolean,
    default: false,
  },
});

const cardStyles = computed(() => {
  const baseStyles = {
    textColor:
      props.styleOption === "whiteOption" ? "text-white" : "text-black",
    border:
      props.styleOption === "whiteOption" ? "border-white" : "border-black",
  };
  baseStyles.verticalLineStyle =
    props.styleOption === "whiteOption" ? "white" : "black";
  return baseStyles;
});
</script>

<template>
  <div class="space-y-12 lg:space-y-0 lg:space-x-9">
    <div class="">
      <h2 class="text-3xl lg:text-6xl font-nanum text-center tracking-widest lg:mb-24 w-full">
        {{ titleOne }}
      </h2>
    </div>
    <div
      class="flex flex-col lg:flex-row items-center"
      :class="{ 'lg:flex-row-reverse': props.reverseColumns }"
    >
      <div
        class="flex flex-col"
        :class="[
          'container-relative text-center font-nanum pt-5 pb-2 px-6 lg:pt-11 lg:pb-5 lg:px-12 border',
          cardStyles.border,
          cardStyles.textColor,
        ]"
        :style="{ 'lg:border-left-color': cardStyles.verticalLineStyle }"
      >
        <h2 class="text-xl mb-2 lg:text-4xl lg:mb-4" :class="cardStyles.textColor">{{ title }}</h2>
        <ul
          class="text-left text-xl lg:text-2xl mb-6 list-disc list-inside leading-10 tracking-widest"
          :class="cardStyles.textColor"
        >
          <li v-for="(item, index) in items" :key="index">{{ item }}</li>
        </ul>
      </div>
      <div class="flex m-1.5 pt-16 lg:pt-0flex flex-col lg:flex-row">
        <img :src="imageSrc" alt="Featured Image" class="w-full" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-relative {
  position: relative;
}

@media (min-width: 1024px) {
  .container-relative::before {
    content: "";
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    height: 140px;
    border-left: 1px solid v-bind("cardStyles.verticalLineStyle");
  }
}
</style>