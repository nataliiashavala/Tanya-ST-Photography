<template>
<h2 class="text-6xl font-nanum text-center tracking-widest mb-24 w-full">{{ titleOne }}</h2>
  <div class="flex items-center">
    <div :class="['container-relative text-center font-nanum pt-11 pb-5 px-12 border', cardStyles.border, cardStyles.textColor]" :style="{ 'border-left-color': cardStyles.verticalLineStyle }">
      <h2 class="text-4xl mb-4" :class="cardStyles.textColor">{{ title }}</h2>
      <ul class="text-left text-2xl mb-6 list-disc list-inside leading-10 tracking-widest" :class="cardStyles.textColor">
        <!-- Use v-for to render list items -->
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>

    </div>
    <div class="ml-1.5">
      <img :src="imageSrc" alt="Featured Image" class="w-full" />
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  titleOne: String,
  title: String,
  items: Array,
  imageSrc: String,
  styleOption: {
    type: String,
    default: 'blackOption', // Default style option
    validator: value => ['whiteOption', 'blackOption'].includes(value)
  },
});

const cardStyles = computed(() => {
  if (props.styleOption === 'whiteOption') {
    return {
      textColor: 'text-white',
      border: 'border-white',
      verticalLineStyle: 'white'
    };
  } else { // blackOption and default
    return {
      textColor: 'text-black',
      border: 'border-black',
      verticalLineStyle: 'black'
    };
  }
});
</script>

<style scoped>
.container-relative {
  position: relative;
}

.container-relative::before {
  content: '';
  position: absolute;
  top: -100px; /* Adjust this value to let the line cross the box at the top */
  left: 50%;
  transform: translateX(-50%);
  height: 140px; /* Adjust this value based on the thickness of your box border */
  border-left: 1px solid var(--vertical-line-color); /* Controlled via inline styles */
}
</style>
