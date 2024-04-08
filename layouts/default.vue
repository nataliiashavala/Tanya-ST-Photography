<template>
  <div class="default-layout position-relative">
    <header>
      <THeader />
    </header>
    <main>
      <nuxt-page />
      <p class="text-red text-xl"></p>
    </main>

  </div>
</template>
<script setup>
import THeader from "~/components/general/THeader.vue";
</script>
