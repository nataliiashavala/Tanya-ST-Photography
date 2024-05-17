<script setup>
import { useRoute } from "vue-router";
import Logo from "~/assets/icons/logo.svg";

const route = useRoute();

const greenBackgroundRoutes = [
  "/wedding",
  "/mini-shoot",
  "/elopements",
  "/maternity",
  "/trusted-suppliers",
  "/contact-me",
];

const hasGreenBackground = computed(() =>
  greenBackgroundRoutes.includes(route.path),
);

const links = [
  { name: "home", path: "/home" },
  { name: "wedding", path: "/wedding" },
  { name: "family", path: "/family" },
  { name: "personal brand", path: "/personal-brand" },
  { name: "about me", path: "/about-me" },
  {
    name: "more",
    more: [
      { name: "mini shoot", path: "/mini-shoot" },
      { name: "solo", path: "/solo" },
      { name: "elopements", path: "/elopements" },
      { name: "couples", path: "/couples" },
      { name: "boudoir", path: "/boudoir" },
      { name: "babies", path: "/babies" },
      { name: "maternity", path: "/maternity" },
      { name: "portfolio", path: "/portfolio" },
      { name: "trusted supliers", path: "/trusted-suppliers" },
      { name: "albums", path: "/albums" },
    ],
  },
];
const value = "";

const handleSelectChange = (value) => {
  if (value) {
    useRouter().push(value);
  }
};

const logoStyle = computed(() => ({
  filter: hasGreenBackground.value ? "brightness(0) invert(1)" : "none",
}));
</script>

<template>
  <div
    :class="{ 'bg-customGreen text-white': hasGreenBackground }"
    class="header flex justify-around items-end uppercase pt-12 pl-9 font-lato tracking-widest"
  >
    <nuxt-link to="/home" class="mb-1">
      <img :src="Logo" alt="Logo" />
    </nuxt-link>
    <nav class="flex whitespace-nowrap text-xs pb-4 border-b">
      <div v-for="(item, index) in links" :key="`link-${index}`" class="flex">
        <nuxt-link v-if="item.path" :to="item.path" class="text-xs mr-20 font-lato tracking-widest">{{
          item.name
        }}</nuxt-link>
      </div>

      <el-select
        v-model="value"
        placeholder="More"
        class="mr-20 !w-44 !border-none text-xs pb-1 select placeholder: text-xs"
        @change="handleSelectChange"
      >
        <el-option
          v-for="(option, index) in links.find((link) => link.name === 'more')
            ?.more ?? []"
          :key="`more-${index}`"
          :label="option.name"
          :value="option.path"
          class="text-xs font-lato uppercase tracking-widest"
        />
      </el-select>
      <nuxt-link to="/contact-me">contact me</nuxt-link>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.select {
  .el-select__wrapper {
    box-shadow: none !important;
  }
  .el-select-dropdown {
    // Add space between options
   .el-select-dropdown__item {
      padding: 10px 20px; // adjust the padding to your liking
    }
    // Make the select menu longer
    max-height: 400px; // adjust the height to your liking
  }
 .el-select-dropdown__wrap {
    // Add white border
    border: 1px solid #fff;
  }
}
</style>
  