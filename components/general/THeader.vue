<script setup>
import { faBlackTie } from '@fortawesome/free-brands-svg-icons';
import { onMounted, onUnmounted, computed, ref, reactive } from 'vue';
import Logo from "~/assets/icons/logo.svg";
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const greenBackgroundRoutes = [
  "/wedding_temp",
  "/mini-shoot",
  "/elopements",
  "/maternity",
  "/trusted-suppliers",
  "/contact-me",
  "/about-me",
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
      { name: "solo", path: "/solo_temp" },
      { name: "elopements", path: "/elopements" },
      { name: "couples", path: "/couples_temp" },
      { name: "boudoir", path: "/boudoir" },
      { name: "babies", path: "/babies_temp" },
      { name: "maternity", path: "/maternity_temp" },
      { name: "portfolio", path: "/portfolio" },
      { name: "trusted supliers", path: "/trusted-suppliers" },
      { name: "blog", path: "/blog" },
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


onMounted(() => {
  const sidebar = document.getElementById('sidebar');
  const openSidebarButton = document.getElementById('open-sidebar');
    
    openSidebarButton.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('-translate-x-full');
    });

    // Close the sidebar when clicking outside of it
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !openSidebarButton.contains(e.target)) {
            sidebar.classList.add('-translate-x-full');
        }
    });
  });
</script>

<template>

  <div
    :class="{ 'bg-customGreen text-white': hasGreenBackground }"
    class="header flex items-end uppercase pt-0 lg:pt-9 pl-4 lg:pl-24 lg:pr-64 font-lato tracking-widest">
  </div>

  <!-- Sidebar -->
  <div class="absolute bg-[#F5F5F5] text-black w-80 min-h-screen overflow-y-auto transition-transform transform -translate-x-full ease-in-out duration-300"
    id="sidebar">
      <!-- Your Sidebar Content -->
            <div class="p-4">
                <ul class="mt-4 ml-11 text-sm font-nanum uppercase flex flex-col space-y-8 cursor-pointer">
                    <nuxt-link to="/home_temp" class="">home</nuxt-link>
                    <nuxt-link to="/wedding_temp" class="">wedding</nuxt-link>
                    <nuxt-link to="/family" class="">family</nuxt-link>
                    <nuxt-link to="/personal-brand" class="">personal brand</nuxt-link>
                    <nuxt-link to="/about-me" class="">about me</nuxt-link>
                    <nuxt-link to="/solo_temp" class="">solo</nuxt-link>
                    <nuxt-link to="/elopements" class="">elopements</nuxt-link>
                    <nuxt-link to="/couples_temp" class="">couples</nuxt-link>
                    <nuxt-link to="/boudoir" class="">boudoir</nuxt-link>
                    <nuxt-link to="/babies_temp" class="">babies</nuxt-link>
                    <nuxt-link to="/maternity_temp" class="">maternity</nuxt-link>
                    <nuxt-link to="/albums_temp" class="">albums</nuxt-link>
                    <nuxt-link to="/porfolio" class="">portfolio</nuxt-link>
                    <nuxt-link to="/trusted-suppliers" class="">trusted suppliers</nuxt-link>
                    <nuxt-link to="/blog" class="">blog</nuxt-link>
                    <nuxt-link to="/contact-me" class="">contact me</nuxt-link>
                </ul>
            </div>
  </div>

  <div class="flex items-end justify-start">
    <div class="mx-24">
    <nuxt-link to="/home_temp" class="">
      <img :src="Logo" alt="Logo" :style="logoStyle" />
    </nuxt-link></div>
    <div class="">
    <nuxt-link class="text-2xl uppercase font-nanum mr-6  block lg:hidden cursor-pointer" id="open-sidebar">
      menu
    </nuxt-link>
  </div>
  
    <nav :class="{ 'open': isMenuOpen }" class="flex flex-row  whitespace-nowrap items-center text-xs lg:border-b hidden lg:block">
      <div v-for="(item, index) in links" :key="`link-${index}`" v-if="isMenuOpen || windowSize.width >= 900" class="flex">
        <nuxt-link v-if="item.path" :to="item.path" class="text-xs mr-24 font-lato tracking-widest mb-4 uppercase">
          {{ item.name }}
        </nuxt-link>
      </div>
      <div class="relative custom-select-wrapper mr-20" v-if="isMenuOpen || windowSize.width >= 900">
        <select 
          @change="handleSelectChange" 
          v-model="value" 
          :style="selectStyle" 
          class="custom-select w-20 uppercase text-xs mb-4"
        >
          <option value="" disabled>MORE</option>
          <option 
            v-for="(option, index) in links.find((link) => link.name === 'more')?.more ?? []" 
            :key="`more-${index}`" 
            :value="option.path" 
            :style="optionStyle"
            class="font-lato uppercase tracking-widest "
          >
            {{ option.name }}
          </option>
        </select>
      </div>
      <nuxt-link to="/contact-me" class="mb-4 uppercase font-lato" v-if="isMenuOpen || windowSize.width >= 900">contact me</nuxt-link>
    </nav>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
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
  nav {
    max-height: none;
  }
}

@media (max-width: 900px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
  }
  nav.open {
    display: flex;
  }
}
</style>