<template>
  <div class="default-layout position-relative">
    <header>
      <THeader />
    </header>
    <main>
      <nuxt-page />
    </main>
    <footer>
      <TFooter />
    </footer>
  </div>
</template>
<script setup>
import THeader from "~/components/general/THeader.vue";
import TFooter from "~/components/general/TFooter.vue";
</script>
