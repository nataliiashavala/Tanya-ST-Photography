<script setup lang="ts">

const links = [
  { name: 'HOME', path: '/home' },
  { name: 'WEDDING', path: '/wedding' },
  { name: 'FAMILY', path: '/family' },
  { name: 'WEDDING', path: '/wedding' },
  { name: 'FAMILY', path: '/family' },
  { name: 'PERSONAL BRAND', path: '/personal_brand' },
  { name: 'ABOUT ME', path: '/about_me' },
  { name: 'MORE', path: '/more' },
  { name: 'MINI SHOOT', path: '/mini_shoot' },
  { name: 'SOLO', path: '/solo' },
  { name: 'ELOPEMENTS', path: '/elopements' },
  { name: 'COUPLES', path: '/couples' },
  { name: 'BOUDOIR', path: '/boudoir' },
  { name: 'BABIES', path: '/babies' },
  { name: 'MATERNITY', path: '/maternity' },
  { name: 'PORTFOLIO', path: '/portfolio' },
  { name: 'ALBUMS', path: '/albums' },
  { name: 'TRUSTED SUPLIERS', path: '/trusted_supliers' },
  { name: 'BLOG', path: '/blog' },
  { name: 'CONTACT ME', path: '/contact_me' },
]

</script>

<template>
<div>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <nuxt-link to="/" class="header__logo-link">
            <img src="/assets/icons/logo.jpg" alt="Logo" class="header__logo-image" />
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
