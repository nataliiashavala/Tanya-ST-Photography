<script setup lang="ts">
import Logo from '~/assets/icons/logo.jpg'

const links = [
  { name: 'home', path: '/' },
  { name: 'wedding', path: '/wedding' },
  { name: 'family', path: '/family' },
  {name: 'personal brand', path: '/personal-brand'},
  { name: 'about me', path: '/about-me' },
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
  <div class="header flex justify-around items-center uppercase pt-5">
          <nuxt-link to="/" class="mb-10">
            <img :src="Logo" alt="Logo" >
          </nuxt-link>
        <nav class="flex whitespace-nowrap text-xs border-b-2">
          <div v-for="(item, index) in links" :key="`link-${index}`" class="flex">
            <nuxt-link v-if="item.path" :to="item.path" class="mr-20">{{ item.name }}</nuxt-link>
          </div>

        <el-select v-model="value" placeholder="More" class="mr-20 !w-60 !border-none pb-1" @change="handleSelectChange">
          <el-option
            v-for="(option, index) in links.find(link => link.name === 'more')?.more ?? []"
            :key="`more-${index}`"
            :label="option.name"
            :value="option.path"
          />
        </el-select>
        <nuxt-link to="/contact-me">contact me</nuxt-link>
      </nav>
    </div>
</template>


