<script setup>
import { computed, ref, reactive } from 'vue';
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
const value = ref("");

const handleSelectChange = (event) => {
  const value = event.target.value;
  if (value) {
    router.push(value);
  }
};

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Reactive property to track window width
const windowSize = reactive({
  width: typeof window !== 'undefined' ? window.innerWidth : 0,
});

const updateWindowSize = () => {
  if (typeof window !== 'undefined') {
    windowSize.width = window.innerWidth;
  }
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateWindowSize);
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateWindowSize);
  }
});
</script>

<template>
  <div
    :class="{ 'bg-customGreen text-white': hasGreenBackground }"
    class="header flex justify-between items-end uppercase pt-12 pl-9 lg:pr-5 xl:pr-14 font-lato tracking-widest"
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
            class="font-lato uppercase tracking-widest"
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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hamburger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
}

.hamburger-menu span {
  width: 30px;
  height: 3px;
  background: #000;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: center;
}

.hamburger-menu span.open:nth-child(1) {
  transform: rotate(45deg);
}

.hamburger-menu span.open:nth-child(2) {

  transform: rotate(-45deg);
  margin: -19px 0;
}

.hamburger-menu span.open:nth-child(3) {
  opacity: 0;
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
