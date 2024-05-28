<script setup>
import { ref, onMounted } from 'vue';
import { Top } from '@element-plus/icons-vue';
import mail from '~/assets/icons/mail.svg';
import instagram from '~/assets/icons/instagram.svg';
import facebook from '~/assets/icons/facebook.svg';


// Ref for storing the email input
const enterEmail = ref("");

// Function to scroll to the top of the page
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Function to submit email to Mailchimp
const submitToMailchimp = async () => {
  const url = `https://us17.api.mailchimp.com/3.0/lists/0321c60f7f/members/`;
  const data = {
    email_address: enterEmail.value,
    status: 'subscribed' // 'subscribed' for immediate subscription or 'pending' for double opt-in
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa('anystring:0d8deae6e2f2ced17700b7ec615b322d-us17')}`,  // Use your Mailchimp API key here
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error('Error:', errorResponse);
      alert(`Error: ${errorResponse.detail}`);
    } else {
      const result = await response.json();
      alert('Thank you for subscribing!');
      enterEmail.value = ''; // Clear the input field
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to subscribe. Please try again later.');
  }
};

// Load the LightWidget script dynamically
onMounted(() => {
  if (!document.querySelector('script[src="https://cdn.lightwidget.com/widgets/lightwidget.js"]')) {
    const script = document.createElement('script');
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.defer = true;
    document.body.appendChild(script);
  }
});
</script>


<template>
  <div class="mt-7 md:mt-44 mx-4">
    <h1 class="text-center text-2xl lg:text-5xl text-[#4F4F4F]">FOLLOW ME ON INSTAGRAM</h1>
    <p class="text-center text-[#838383] text-2xl lg:text-4xl my-4">
      <a href="https://www.instagram.com/tanyastt/">@tanyastt</a>
    </p>
    <iframe src="//lightwidget.com/widgets/34ca537e69395e63ad3d232bbcdb7dbe.html" 
      scrolling="no" 
      allowtransparency="true" 
      class="lightwidget-widget" 
      style="width:100%;border:0;overflow:hidden;">
    </iframe>

    <div class="mx-14 flex flex-col md:flex-row justify-between items-center relative mt-4 md:mt-14 uppercase ">
      <div class="content text-center mb-6 hidden md:hidden lg:block">
        <h3 class="mb-5">Get in touch</h3>
        <p>Tanyastasyk@gmail.com</p> 
      </div>
      <div class="divider hidden md:hidden lg:block"></div>
      <div class="">
        <p class= "text-lg mt-8 md:text-center hidden md:hidden lg:block">
          Because every picture should be unique, capturing your special day.<br>
          Together, we will share your story.
        </p>
    </div>
      <div class="divider hidden lg:block"></div>
      <div class="flex flex-col items-center" >
        <p class="uppercase  mb-4 lg:text-base md:text-2xl">contact me</p>
        <div class="flex items-center justify-center gap-4">
          <a href="https://www.instagram.com/tanyastt/">
            <img :src="instagram" alt="">
          </a>
          <a href="https://www.facebook.com/TanyaStPhoto">
            <img :src="facebook" alt="">
          </a>
          <a href="mailto:tanyastasyk@gmail.com">
            <img :src="mail" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- Neswletter-->
  <div class="flex  justify-between items-center pt-4 lg:pt-14">
    <div class="flex flex-col lg:flex-row bg-customGreen w-full justify-center items-center mt-6 h-20 px-6 lg:px-0">
      
      <h2 class="text-white text:base md:text-2xl font-normal font-nanum mr-14 mb-2 lg:mb-0">
        Subscribe to our newsletter
      </h2>
      <div class="flex relative h-9 w-full lg:w-1/4">
        <el-input
          v-model="enterEmail"
          type="email"
          placeholder="Enter your email"
          class="w-full no-round"
        />
        <el-button
          @click="submitToMailchimp"
          class="absolute uppercase border border-white right-0.5 bottom-0.5 no-round-button"
          size="20"
          color="#545A3F"
        >
          Subscribe
        </el-button>
      </div>

     
    </div>
    <div class="hidden md:hidden lg:block">
      <div
        class="border mt-6 lg:mt-0 lg:ml-7 lg:mr-4 w-16 h-14 border-black flex items-center justify-center">
        <el-button type="text" @click="scrollToTop">
          <el-icon :size="50" color="black">
            <Top class="p-1" />
          </el-icon>
        </el-button>
      </div>
    </div>
  </div>
  <p class="text-center my-2 text-base md:text-xl">© BY TANYA ST PHOTOGRAPHY</p>
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
