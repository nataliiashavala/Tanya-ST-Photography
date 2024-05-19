<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed } from 'vue';
import Logo from "~/assets/icons/logo.svg";

const route = useRoute();
const router = useRouter();

const greenBackgroundRoutes = [
  "/wedding_temp",
  "/mini-shoot",
  "/elopements",
  "/maternity",
  "/trusted-suppliers",
  "/contact-me",
];

const hasGreenBackground = computed(() =>
  greenBackgroundRoutes.includes(route.path)
);

const logoStyle = computed(() => ({
  filter: hasGreenBackground.value ? 'brightness(0) invert(1)' : 'none'
}));

const selectStyle = computed(() => ({
  backgroundColor: hasGreenBackground.value ? '#545A3F' : 'white',
  color: hasGreenBackground.value ? 'white' : 'black',
  '--icon-color': hasGreenBackground.value ? 'white' : '#545A3F',
}));

const optionStyle = computed(() => ({
  backgroundColor: hasGreenBackground.value ? '#545A3F' : 'white',
  color: hasGreenBackground.value ? 'white' : 'black',
}));

const links = [
  { name: "home", path: "/home_temp" },
  { name: "wedding", path: "/wedding_temp" },
  { name: "family", path: "/family" },
  { name: "personal brand", path: "/personal-brand" },
  { name: "about me", path: "/about-me" },
  {
    name: "more",
    more: [
      { name: "mini shoot", path: "/mini-shoot" },
      { name: "solo", path: "/solo_temp" },
      { name: "elopements", path: "/elopements" },
      { name: "couples", path: "/couples_temp" },
      { name: "boudoir", path: "/boudoir" },
      { name: "babies", path: "/babies_temp" },
      { name: "maternity", path: "/maternity_temp" },
      { name: "portfolio", path: "/portfolio" },
      { name: "trusted supliers", path: "/trusted-suppliers" },
      { name: "albums", path: "/albums_temp" },
    ],
  },
];
const value = "";

const handleSelectChange = (event) => {
  const value = event.target.value;
  if (value) {
    router.push(value);
  }
};
</script>

<template>
  <div
    :class="{ 'bg-customGreen text-white': hasGreenBackground }"
    class="header flex justify-around items-end uppercase pt-12 pl-9 font-lato tracking-widest"
  >
    <nuxt-link to="/home_temp" class="mb-1">
      <img :src="Logo" alt="Logo" :style="logoStyle" />
    </nuxt-link>
    <nav class="flex whitespace-nowrap items-center text-xs pb-4 border-b">
      <div v-for="(item, index) in links" :key="`link-${index}`" class="flex">
        <nuxt-link v-if="item.path" :to="item.path" class="text-xs mr-20 font-lato tracking-widest">
          {{ item.name }}
        </nuxt-link>
      </div>
      <div class="relative custom-select-wrapper mr-20">
        <select 
          @change="handleSelectChange" 
          v-model="value" 
          :style="selectStyle" 
          class="custom-select w-full uppercase text-xs pb-1"
        >
          <option value="" disabled>MORE</option>
          <option 
            v-for="(option, index) in links.find((link) => link.name === 'more')?.more ?? []" 
            :key="`more-${index}`" 
            :value="option.path" 
            :style="optionStyle"
            class="text-xs font-lato uppercase tracking-widest"
          >
            {{ option.name }}
          </option>
        </select>
      </div>
      <nuxt-link to="/contact-me">contact me</nuxt-link>
    
</nav>
  </div>
</template>



<style scoped lang="scss">
.custom-select-wrapper {
  position: relative;
  display: inline-block;
}

.custom-select {
  border: none;
  padding: 10px;
  font-size: 16px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  width: 100%;
  background: none;
  background-position: right 10px center;
  background-repeat: no-repeat;
}

.custom-select option {
  border: none;
}
.custom-select option:focus {
  border: none;
}

.custom-select:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.custom-select-wrapper::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 10px;
  width: 12px;
  height: 12px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M10 30L50 80L90 30H10Z"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
  transform: translateY(-50%);
  pointer-events: none;
  color: #fff
}
</style>
