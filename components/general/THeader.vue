<script setup lang="ts">

const links = [
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
</script>

<template>
<div>
  <div class="header">
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



