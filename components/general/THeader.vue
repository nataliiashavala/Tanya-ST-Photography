<script setup lang="ts">

const links = [
<<<<<<< HEAD
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

=======
  { name: 'home', path: '/' },
  { name: 'wedding', path: '/wedding' },
  { name: 'family', path: '/family' },
  {name: 'personal brand', path: '/personal-brand'},
  { name: 'about me', path: '/about' },
  { 
    name: 'more',
    more: [
    { name: 'mini shoot', path: '/mini-shoot' },
    { name:'solo', path: '/solo' },
    { name:'elopements' , path: '/elopements' },
    { name:'couples', path: '/couples'},
    {name: 'buduar', path: '/buduar' },
    {name: 'babies', path: '/babies' },
    {name: 'maternity', path: '/maternity' },
    {name: 'portfolio', path: '/portfolio' },
    { name: 'trusted supliers', path: '/trusted-suppliers' },
    {name: 'blog', path: '/blog' }
  ],
  },
]
const value = ''

const handleSelectChange = (value: string) => {
  if (value) {
    useRouter().push(value)
  }
}
>>>>>>> 27828b86281c779781d134af0f568b61f5960360
</script>

<template>
<div>
  <div class="header">
<<<<<<< HEAD
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
=======
      <div class="flex justify-around" >
        <div class="header__logo">
          <nuxt-link to="/" class="header__logo-link">
            <img src="#" alt="Logo" class="header__logo-image" />
          </nuxt-link>
        </div>
        <nav class="flex">
          <div class="flex" v-for="(item, index) in links" :key="`link-${index}`">
            <nuxt-link v-if="item.path" :to="item.path" class="mr-24">{{ item.name }}</nuxt-link>
          </div>
       
        <el-select v-model="value" style="width: 240px" placeholder="More" class="mr-24" @change="handleSelectChange">
          <el-option
            v-for="(option, index) in links.find(link => link.name === 'more')?.more ?? []"
            :key="`more-${index}`"
            :label="option.name"
            :value="option.path"
          ></el-option>
        </el-select>
        <nuxt-link to="/contact">contact me</nuxt-link>
      </nav>
      </div>
    </div>
  </div>
</template>



>>>>>>> 27828b86281c779781d134af0f568b61f5960360
