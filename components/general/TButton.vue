<template>
  <button
    :class="[
      'w-52 h-14 py-2 px-4 shadow-md',
      buttonStyles.backgroundColor,
      buttonStyles.textColor,
      buttonStyles.borderColor
    ] "
  >
  <slot/>
  </button>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  colorOption: {
    type: String,
    default: 'option1', // Default color option
    validator: value => ['option1', 'option2'].includes(value)
  }
});

const buttonStyles = computed(() => {
  return props.colorOption === 'option1'
    ? {
        backgroundColor: 'bg-[#545A3F]',
        textColor: 'text-white',
        borderColor: ''
      }
    : props.colorOption === 'option2'
    ? {
        backgroundColor: 'bg-[#545A3F]',
        textColor: 'text-white',
        borderColor: 'border border-white'
      }
    : {}; // Fallback styles if needed
});
</script>

<style>
/* Ensure Tailwind processes your custom colors */
</style>