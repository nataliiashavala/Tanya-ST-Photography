<script setup>
import { onMounted, onUnmounted } from 'vue';

import { nextTick } from 'vue';

onMounted(() => {
  nextTick(() => {
    script = loadScript();
  });
});

// Define the script loading function
const loadScript = () => {
  const script = document.createElement('script');
  script.async = true;
  script.src = "https://nataliia-shavala.ck.page/b0fa3c57fe/index.js";
  script.dataset.uid = "b0fa3c57fe"; // Set any additional data attributes if needed
  document.body.appendChild(script);
  return script; // Return the script element for possible cleanup
};

// Use onMounted to load the script when the component mounts
let script;
onMounted(() => {
  script = loadScript();
});

// Optional: Clean up the script when the component unmounts
onUnmounted(() => {
  if (script && script.parentNode) {
    script.parentNode.removeChild(script);
  }
});
</script>
<template>
  <div class="max-w-lg mx-auto p-4 bg-white rounded-lg shadow">
    <p class="text-gray-700 text-lg">Subscribe to our newsletter for updates!</p>
    <!-- You can add more content that interacts with the loaded script here -->
    <div id="ck_form_container"></div>
  </div>
</template>

<style scoped>
/* Add any additional styles if needed */
</style>
