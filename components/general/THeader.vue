<script setup lang="ts">

const links = [
  { name: 'home', path: '/' },
  { name: 'wedding', path: '/wedding' },
  { name: 'family', path: '/family' },
  {name: 'personal brand', path: '/personal-brand'},
  { name: 'about me', path: '/about' },
  {name: 'more', path: '/more'},
  { name: 'contact me', path: '/contacts' },
]

</script>

<template>
<div>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <nuxt-link to="/" class="header__logo-link">
            <img src="#" alt="Logo" class="header__logo-image" />
          </nuxt-link>
        </div>
        <nav class="flex text-red" v-for="(item, index) in links" :key="index">
          <nuxt-link :to="item.path" class=" ">{{item.name}}</nuxt-link>
        </nav>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
