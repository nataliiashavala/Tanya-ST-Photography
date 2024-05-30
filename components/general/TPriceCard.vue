<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  titleOne: String,
  title1: String,
  title2: String,
  title3: String,
  items1: {
    type: Array,
    default: () => [],
  },
  items2: {
    type: Array,
    default: () => [],
  },
  items3: {
    type: Array,
    default: () => [],
  },
  styleOption: {
    type: String,
    default: "blackOption",
    validator: (value) => ["whiteOption", "blackOption"].includes(value),
  }
});

const cardStyles = computed(() => {
  const isWhiteOption = props.styleOption === "whiteOption";
  return {
    titleTextColor: isWhiteOption ? "text-white" : "text-black",
    titleBgColor: isWhiteOption ? "bg-[#545A3F]" : "bg-[#F5F5F5]",
    textColor: isWhiteOption ? "text-black" : "text-white",
    borderColor: isWhiteOption ? "border-black" : "border-white",
  };
});
</script>

<template>
  <div class="flex flex-col space-y-12 lg:space-y-0 w-full justify-center">
    <div class="text-3xl lg:text-6xl font-nanum text-center tracking-widest lg:mb-24 w-full">
      <h2>{{ titleOne }}</h2>
    </div>

    <div class="flex flex-col lg:flex-row lg:flex-1 space-x-0 lg:space-x-10 w-full space-y-12 lg:space-y-0 justify-between">
      <div class="flex flex-col w-full lg:flex-1">
        <div class="text-center font-nanum border rounded-lg" :class="[cardStyles.borderColor]">
          <div :class="[cardStyles.titleBgColor, 'rounded-t-lg']">
            <h2 class="text-2xl lg:text-4xl mb-4 pt-4" :class="cardStyles.titleTextColor">{{ title1 }}</h2>
            <div class="border-b" :class="cardStyles.borderColor"></div>
          </div>
          <div class="rounded-b-lg pl-4 pr-6 py-10">
            <ul class="text-left text-xl lg:text-2xl list-disc list-inside" :class="cardStyles.textColor">
              <li class="tracking-widest leading-10" v-for="(item, index) in items1" :key="'1-' + index" :class="[cardStyles.textColor, 'text-xl lg:text-2xl ']">
              {{ item }}
            </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex flex-col w-full lg:flex-1">
        <div class="text-center font-nanum border rounded-lg" :class="[cardStyles.borderColor]">
          <div :class="[cardStyles.titleBgColor, 'rounded-t-lg']">
            <h2 class="text-2xl lg:text-4xl mb-4 pt-4" :class="cardStyles.titleTextColor">{{ title2 }}</h2>
            <div class="border-b" :class="cardStyles.borderColor"></div>
          </div>
          <div class="rounded-b-lg pl-4 pr-6 py-10">
            <ul class="text-left text-xl lg:text-2xl list-disc list-inside" :class="cardStyles.textColor">
              <li v-for="(item, index) in items2" :key="'2-' + index" :class="[cardStyles.textColor, ' tracking-widest leading-10 text-xl lg:text-2xl']">
              {{ item }}
            </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="flex flex-col w-full lg:flex-1">
        <div class="text-center font-nanum border rounded-lg" :class="[cardStyles.borderColor]">
          <div :class="[cardStyles.titleBgColor, 'rounded-t-lg']">
            <h2 class="text-2xl lg:text-4xl mb-4 pt-4" :class="cardStyles.titleTextColor">{{ title3 }}</h2>
            <div class="border-b" :class="cardStyles.borderColor"></div>
          </div>
          <div class="rounded-b-lg pl-4 pr-6 py-10">
            <ul class="text-left text-xl lg:text-2xl list-disc list-inside" :class="cardStyles.textColor">
              <li v-for="(item, index) in items3" :key="'3-' + index" :class="[cardStyles.textColor, 'tracking-widest leading-10 text-xl lg:text-2xl']">
              {{ item }}
            </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
