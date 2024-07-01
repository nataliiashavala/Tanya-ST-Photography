<script setup>
import { onMounted, onUnmounted, computed, ref, reactive, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import Logo from "~/assets/icons/logo.svg";

const route = useRoute();
const router = useRouter();

const isMenuOpen = ref(false);

const greenBackgroundRoutes = [
  "/wedding_temp",
  "/about-me",
  "/elopements",
  "/boudoir",
  "/maternity_temp",
  "/trusted-suppliers",
  "/contact-me",
];

const hasGreenBackground = computed(() =>
  greenBackgroundRoutes.includes(route.path),
);

const logoStyle = computed(() => ({
  filter: hasGreenBackground.value ? "brightness(0) invert(1)" : "none",
}));

const selectStyle = computed(() => ({
  backgroundColor: hasGreenBackground.value ? "#545A3F" : "white",
  color: hasGreenBackground.value ? "white" : "black",
}));

const optionStyle = computed(() => ({
  backgroundColor: hasGreenBackground.value ? "#545A3F" : "white",
  color: hasGreenBackground.value ? "white" : "black",
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
      { name: "trusted suppliers", path: "/trusted-suppliers" },
      { name: "blog", path: "/blog" },
      { name: "albums", path: "/albums_temp" },
    ],
  },
];
const value = ref("");

const handleSelectChange = (value) => {
  if (value) {
    router.push(value);
    closeSidebar();
  }
};

const closeSidebar = () => {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    sidebar.classList.add("-translate-x-full");
    isMenuOpen.value = false;
  }
};

// Reactive property to track window width
const windowSize = reactive({
  width: typeof window !== "undefined" ? window.innerWidth : 0,
});

const updateWindowSize = () => {
  if (typeof window !== "undefined") {
    windowSize.width = window.innerWidth;
  }
};

onMounted(() => {
  if (typeof window !== "undefined") {
    window.addEventListener("resize", updateWindowSize);
  }
});

onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", updateWindowSize);
  }
});

onMounted(async () => {
  await nextTick();
  const sidebar = document.getElementById("sidebar");
  const openSidebarButton = document.getElementById("open-sidebar");

  if (sidebar && openSidebarButton) {
    openSidebarButton.addEventListener("click", (e) => {
      e.stopPropagation();
      sidebar.classList.toggle("-translate-x-full");
      isMenuOpen.value = !isMenuOpen.value;
    });

    // Close the sidebar when clicking outside of it
    document.addEventListener("click", (e) => {
      if (
        !sidebar.contains(e.target) &&
        !openSidebarButton.contains(e.target)
      ) {
        closeSidebar();
      }
    });
  }
});
</script>

<template>
  <div
    :class="{ 'bg-customGreen text-white': hasGreenBackground }"
    class="header pl-20"
  >
    <!-- Sidebar -->
    <div
      id="sidebar"
      class="absolute inset-y-0 left-0 bg-[#F5F5F5] text-black w-80 min-h-screen overflow-y-auto z-50 transition-transform transform -translate-x-full ease-in-out duration-300"
    >
      <div class="p-4">
        <ul
          class="mt-4 ml-10 text-sm font-nanum uppercase flex flex-col space-y-8 cursor-pointer"
        >
          <nuxt-link to="/home_temp" class="" @click="closeSidebar"
            >home</nuxt-link
          >
          <nuxt-link to="/wedding_temp" class="" @click="closeSidebar"
            >wedding</nuxt-link
          >
          <nuxt-link to="/family" class="" @click="closeSidebar"
            >family</nuxt-link
          >
          <nuxt-link to="/personal-brand" class="" @click="closeSidebar"
            >personal brand</nuxt-link
          >
          <nuxt-link to="/about-me" class="" @click="closeSidebar"
            >about me</nuxt-link
          >
          <nuxt-link to="/solo_temp" class="" @click="closeSidebar"
            >solo</nuxt-link
          >
          <nuxt-link to="/elopements" class="" @click="closeSidebar"
            >elopements</nuxt-link
          >
          <nuxt-link to="/couples_temp" class="" @click="closeSidebar"
            >couples</nuxt-link
          >
          <nuxt-link to="/boudoir" class="" @click="closeSidebar"
            >boudoir</nuxt-link
          >
          <nuxt-link to="/babies_temp" class="" @click="closeSidebar"
            >babies</nuxt-link
          >
          <nuxt-link to="/maternity_temp" class="" @click="closeSidebar"
            >maternity</nuxt-link
          >
          <nuxt-link to="/albums_temp" class="" @click="closeSidebar"
            >albums</nuxt-link
          >
          <nuxt-link to="/portfolio" class="" @click="closeSidebar"
            >portfolio</nuxt-link
          >
          <nuxt-link to="/trusted-suppliers" class="" @click="closeSidebar"
            >trusted suppliers</nuxt-link
          >
          <nuxt-link to="/blog" class="" @click="closeSidebar">blog</nuxt-link>
          <nuxt-link to="/contact-me" class="" @click="closeSidebar"
            >contact me</nuxt-link
          >
        </ul>
      </div>
    </div>

    <div class="flex items-end justify-between">
      <div class="flex justify-between items-end">
        <div class="mt-8 ml-24 mr-0 lg:ml-2 lg:mr-32">
          <nuxt-link to="/home_temp">
            <img
              :src="Logo"
              alt="Logo"
              :style="logoStyle"
              class="w-16 h-16 lg:w-full lg:h-full"
            />
          </nuxt-link>
        </div>
        <div class="ml-auto">
          <nuxt-link
            id="open-sidebar"
            class="mb-3 ml-52 text-2xl uppercase font-nanum block lg:hidden cursor-pointer"
            @click="isMenuOpen = !isMenuOpen"
          >
            menu
          </nuxt-link>
        </div>
      </div>
      <nav
        class="flex flex-row whitespace-nowrap gap-20 items-center text-xs lg:border-b lg:hidden"
      >
        <div
          v-for="(item, index) in links"
          v-if="isMenuOpen || windowSize.width >= 1024"
          :key="`link-${index}`"
          class="flex"
        >
          <nuxt-link
            v-if="item.path"
            :to="item.path"
            class="text-xs font-lato tracking-widest uppercase mb-0"
          >
            {{ item.name }}
          </nuxt-link>
          <template v-if="item.more">
            <el-select
              v-model="value"
              placeholder="MORE"
              :style="selectStyle"
              class="custom-select w-full uppercase text-xs"
              :popper-class="selectStyle"
              @change="handleSelectChange"
            >
              <el-option
                v-for="(option, index) in item.more"
                :key="`more-${index}`"
                :value="option.path"
                :label="option.name"
                :style="optionStyle"
                class="custom-option uppercase"
              />
            </el-select>
          </template>
        </div>
        <nuxt-link
          to="/contact-me"
          class="uppercase font-lato text-xs hidden lg:block"
          >contact me</nuxt-link
        >
      </nav>
    </div>
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

@media (min-width: 1024px) {
  nav {
    max-height: none;
  }
}

@media (max-width: 1024px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
  }
  nav.open {
    display: flex;
  }
}

.custom-select {
  color: white !important;
  padding-top: 10px;
  padding-bottom: 10px;
  text-transform: uppercase;
  font-family: "Nanum Gothic", sans-serif;
  font-size: 12px;
  width: 150px;
  margin: 0; /* Remove any default margin */
}

.custom-option {
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: "Nanum Gothic", sans-serif;
  display: flex;
  align-items: center;
}

.el-select .el-input__inner {
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

.el-select-dropdown__item.selected {
  background-color: #43493a !important;
  color: white !important;
}

.el-select-dropdown__item:hover {
  background-color: #43493a !important;
  color: white !important;
}

.el-select-dropdown__item {
  font-family: "Nanum Gothic", sans-serif;
}

.el-select-dropdown__list {
  padding: 0 !important;
}

.no-border {
  border: none !important;
}

.no-shadow {
  box-shadow: none !important;
}
</style>

<style lang="scss">
.custom-select {
  .el-select__wrapper {
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
    align-items: center;
    gap: 0 !important;
    padding: 0 !important;
    text-align: center;
  }
}
</style>
