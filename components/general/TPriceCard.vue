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
  <h2 class="text-6xl font-nanum text-center tracking-widest mb-24 w-full">
    {{ titleOne }}
  </h2>
  <div
    class="flex items-center"
    :class="{ 'flex-row-reverse': props.reverseColumns }"
  >
    <div
      :class="[
        'container-relative text-center font-nanum pt-11 pb-5 px-12 border',
        cardStyles.border,
        cardStyles.textColor,
      ]"
      :style="{ 'border-left-color': cardStyles.verticalLineStyle }"
    >
      <h2 class="text-4xl mb-4" :class="cardStyles.textColor">{{ title }}</h2>
      <ul
        class="text-left text-2xl mb-6 list-disc list-inside leading-10 tracking-widest"
        :class="cardStyles.textColor"
      >
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div class="m-1.5">
      <img :src="imageSrc" alt="Featured Image" class="w-full" />
    </div>
  </div>
</template>

<style scoped>
.container-relative {
  position: relative;
}

.container-relative::before {
  content: "";
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  height: 140px;
  border-left: 1px solid v-bind("cardStyles.verticalLineStyle");
}
</style>
