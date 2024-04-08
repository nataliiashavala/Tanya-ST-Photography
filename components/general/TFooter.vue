<template>
  <div>
    <div class="footer">
      <div class="container">
        <div class="footer__inner">
          <div class="footer__logo">
            <nuxt-link to="/" class="footer__logo-link">
              <img src="/assets/icons/logo.jpg" alt="Logo" class="footer__logo-image" />
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

<script>
export default {

}
</script>

<style>

</style>