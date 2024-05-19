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
    <button @click="toggleMenu" class="hamburger-menu ml-auto mr-10">
      <span :class="{ 'open': isMenuOpen }"></span>
      <span :class="{ 'open': isMenuOpen }"></span>
      <span :class="{ 'open': isMenuOpen }"></span>
    </button>
    <nav :class="{ 'open': isMenuOpen }" class="flex flex-col md:flex-row whitespace-nowrap items-center text-xs pb-4  lg:border-b">
      <div v-for="(item, index) in links" :key="`link-${index}`" v-if="isMenuOpen || windowSize.width >= 900" class="flex">
        <nuxt-link v-if="item.path" :to="item.path" class="text-xs mr-20 font-lato tracking-widest">
          {{ item.name }}
        </nuxt-link>
      </div>
      <div class="relative custom-select-wrapper mr-20" v-if="isMenuOpen || windowSize.width >= 900">
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
      <nuxt-link to="/contact-me" v-if="isMenuOpen || windowSize.width >= 900">contact me</nuxt-link>
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

nav {
  display: flex;
  align-items: center;
  transition: max-height 0.3s ease-in-out;
  overflow: hidden;
  max-height: 0;
}

nav.open {
  max-height: 500px; /* Adjust as needed */
}

@media (min-width: 900px) {
  .hamburger-menu {
    display: none;
  }
  nav {
    max-height: none;
  }
}

@media (max-width: 900px) {
  .hamburger-menu {
    display: flex;
  }
  nav {
    flex-direction: column;
    align-items: flex-start;
  }
  nav.open {
    display: flex;
  }
}
</style>
