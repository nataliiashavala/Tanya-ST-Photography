<template>
  <button
    :class="[
      'w-52 h-14 py-2 px-4 shadow-md',
      buttonStyles.backgroundColor,
      buttonStyles.textColor,
      buttonStyles.borderColor
    ]"
  >
    <p class="font-nanum text-xl">{{ text }}</p> <!-- Allows for custom button text -->
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: String,
  colorOption: {
    type: String,
    default: 'option1', // Default color option
    validator: value => ['option1', 'option2', 'option3'].includes(value)
  }
});

const buttonStyles = computed(() => {
  switch (props.colorOption) {
    case 'option1':
      return {
        backgroundColor: 'bg-[#545A3F]',
        textColor: 'text-white',
        borderColor: ''
      };
    case 'option2':
      return {
        backgroundColor: 'bg-[#545A3F]',
        textColor: 'text-white',
        borderColor: 'border border-white'
      };
    case 'option3':
      return {
        backgroundColor: 'bg-[#F5F5F5]',
        textColor: 'text-black',
        borderColor: 'border border-black'
      };
    default:
      return {}; // Fallback styles if needed
  }
});
</script>

<style>
/* Ensure Tailwind processes your custom colors */
</style>
