<script setup>
import { Top } from "@element-plus/icons-vue";
import twoPriceCardImage from "~/assets/img/wedding/two_price_card.jpg";
import mail from "~/assets/icons/mail.svg";
import instagram from "~/assets/icons/instagram.svg";
import facebook from "~/assets/icons/facebook.svg";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const enterEmail = ref("");
</script>

<template>
  <div class="mt-44 mx-10">
    <h1 class="text-center text-5xl text-[#4F4F4F]">FOLLOW ME ON INSTAGRAM</h1>
    <p class="text-center text-[#838383] text-4xl my-4">@tanyastt</p>
    <div class="flex gap-5">
      <a href="https://www.instagram.com/tanyastt/">
        <img :src="twoPriceCardImage" alt="" />
      </a>
      <a href="https://www.instagram.com/tanyastt/">
        <img :src="twoPriceCardImage" alt="" />
      </a>
      <a href="https://www.instagram.com/tanyastt/">
        <img :src="twoPriceCardImage" alt="" />
      </a>
      <a href="https://www.instagram.com/tanyastt/">
        <img :src="twoPriceCardImage" alt="" />
      </a>
      <a href="https://www.instagram.com/tanyastt/">
        <img :src="twoPriceCardImage" alt="" />
      </a>
    </div>
    <div class="flex justify-around items-center relative mt-14 uppercase">
      <div class="content">
        <h3 class="mb-5">Get in touch</h3>
        <p>Tanyastasyk@gmail.com</p>
      </div>
      <div class="divider" />
      <p class="text-lg  mt-6">
        Because every picture should be unique, capturing your special day.<br>
        Together, we will share your story.
      </p>
      <div class="divider" />
      <div>
        <p class="uppercase">contact me</p>
        <div class="flex items-center justify-between">
          <a href="https://www.instagram.com/tanyastt/" >
            <img :src="instagram" alt=""></a>
          <a href="https://www.facebook.com/TanyaStPhoto" class="mr-2">
            <img :src="facebook" alt="">
          </a>
          <a href="mailto:tanyastasyk@gmail.com">
            <img :src="mail" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-between items-center pt-14">
    <div
      class="flex bg-customGreen w-full justify-center items-center mt-6 h-20"
    >
      <h2 class="text-white text-2xl font-normal font-nanum mr-14">
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

<style scoped>
.divider {
  position: relative;
}

.divider::after {
  content: "";
  position: absolute;
  right: 0;
  height: 8.3125rem;
  width: 1px;
  background-color: black;
  top: -2.15625rem;
}
</style>
