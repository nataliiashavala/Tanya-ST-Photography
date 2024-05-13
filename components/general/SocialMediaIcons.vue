<template>
  <div class="flex space-x-6"> 
    <font-awesome-icon :icon="['fab', 'instagram']" class="hover:text-pink-700 instagram-icon" size="2x" />
    <font-awesome-icon :icon="['fab', 'square-facebook']" class="text-black hover:text-blue-700" size="2x" />
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faSquareFacebook, faInstagram);
</script>

<style scoped>


</style>
