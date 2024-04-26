<script setup>
import THeader from "~/components/general/THeader.vue";
import TFooter from "~/components/general/TFooter.vue";
</script>
<template>
  <header>
    <THeader />
  </header>
  <main>
    <nuxt-page />
  </main>
  <footer>
    <TFooter />
  </footer>
</template>
