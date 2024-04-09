<template>
  <div class="max-w-lg mx-auto">
    <div :class="['text-center p-6 border border-gray-200', textColorClass]">
      <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
      <p class="text-left mb-6">{{ text }}</p>
      <slot></slot> <!-- Slot for the button -->
    </div>
  </div>
  <div class="">
    <img :src="imageSrc" alt="Featured Image" class="" />
  </div>"
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: String,
  text: String,
  textColor: {
    type: String,
    default: 'black', // Default text color
  },
});

const textColorClass = computed(() => ({
  'text-white': props.textColor === 'white',
  'text-black': props.textColor === 'black',
}));
</script>

<style scoped>
/* Add any additional styles if needed */
</style>

=======
  <div>
    
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
</script>

<style scoped>

</style>