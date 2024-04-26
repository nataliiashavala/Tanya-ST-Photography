<script setup>
import { Top } from "@element-plus/icons-vue";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const enterEmail = ref("");
</script>

<template>
  <div class="flex justify-between items-center pt-14">
    <div class="flex bg-customGreen w-full justify-center items-center h-20">
      <h2 class="text-white text-2xl font-normal font-[NanumMyeongjo] mr-14">
        Subscribe to our newsletter
      </h2>
      <div class="flex relative h-9 w-1/4">
        <el-input
          v-model="enterEmail"
          type="email"
          placeholder="Enter your email"
        />
        <el-button
          class="absolute border border-white right-0.5 bottom-0.5"
          size="20"
          color="#545A3F"
        >
          Subscribe
        </el-button>
      </div>
    </div>
    <div
      class="border ml-7 mr-4 w-16 h-14 border-black flex items-center justify-center"
    >
      <el-button type="text" @click="scrollToTop">
        <el-icon :size="50" color="black">
          <Top class="p-1" />
        </el-icon>
      </el-button>
    </div>
  </div>
</template>
