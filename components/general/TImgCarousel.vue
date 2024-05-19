<template>
  <el-carousel :interval="interval" type="card" :height="carouselHeight">
    <el-carousel-item v-for="(image, index) in images" :key="index">
      <div class="h-full flex justify-center items-center">
        <img :src="image" class="w-full h-full object-cover" />
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
import { ref, defineProps, computed, onMounted } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  interval: {
    type: Number,
    default: 5000, // Default interval is 5 seconds
  },
});

// Define a ref to store the carousel height
const carouselHeight = ref('824px');

// Update the carousel height based on screen size
const updateCarouselHeight = () => {
  if (window.innerWidth < 640) {
    carouselHeight.value = '200px';
  } else if (window.innerWidth < 768) {
    carouselHeight.value = '300px';
  } else if (window.innerWidth < 1024) {
    carouselHeight.value = '500px';
  } else {
    carouselHeight.value = '824px';
  }
};

// Add event listener on mount to handle window resize
onMounted(() => {
  updateCarouselHeight();
  window.addEventListener('resize', updateCarouselHeight);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateCarouselHeight);
});
</script>

<style scoped>
.el-carousel__item {
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

