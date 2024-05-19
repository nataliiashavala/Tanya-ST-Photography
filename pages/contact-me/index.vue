<script setup>
import { ref } from 'vue'
import heroImage from "~/assets/img/contact_me/hero_img.jpg";


</script>

<template>
  <section class="bg-cover bg-center" :style="{ backgroundImage: `url(${heroImage})` }">
      <div class="px-4 text-center py-20 lg:py-56 uppercase font-nanum">
          <h1 class="mb-4 text-3xl lg:text-4xl text-white md:text-5xl lg:text-6xl">contact me</h1>
          <p class="mb-8 text-small text-white lg:text-xl sm:px-16 lg:px-48">precious memories forever</p>
      </div>
  </section>
  <div class="flex justify-center" :style="{ backgroundColor: '#545A3F' }">
  <section class="container px-6 sm:px-8 md:px-20 lg:px-64 lg:pt-36">
    <!-- Left Column-->
    <div class="flex flex-col lg:flex-row items-start space-x-0 lg:space-x-20 mt-20 lg:mt-0">
      <div class="w-full lg:w-1/2 mb-10 lg:mb-0">
        <div class="bg-white p-4 lg:p-12 outline outline-black">
          <div class="flex flex-col justify-center text-center items-center space-y-6 lg:space-y-12">
            <h1 class="uppercase text-xl lg:text-2xl">
              we are here to help you to remember the best days
            </h1>
            <p class="text-small lg:text-base">
            I hope you have enjoyed browsing my website!  If you are interested in any of my services, please don`t hesitate to contact me directly using the details provided or by completing the online form below.
            </p>
            <div class="flex flex-col justify-center items-center space-y-3 lg:space-y-7">
              <p class="uppercase">
            contact me
            </p>
            </div>
          </div>

        </div>
      </div> 
      
          <!-- Contact Form-->
          <div class="w-full lg:w-2/3">
            <form action="#" method="POST" class="">
              <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div class="sm:col-span-2">
                  <div class="mt-2.5">
                    <input type="text" 
                    placeholder="YOUR NAME *" 
                    name="name" 
                    id="name" 
                    autocomplete="organization" 
                    class="w-full font-nanum text-base bg-customGreen border-b border-b-white px-2 py-4 text-white placeholder:text-white" />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <div class="mt-2.5">
                    <input type="text" 
                    placeholder="YOUR SURNAME *" 
                    name="company" 
                    id="company" 
                    autocomplete="organization" 
                    class="w-full font-nanum text-base bg-customGreen  border-b border-b-white px-2 py-4 text-black placeholder:text-white" />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <div class="mt-2.5">
                    <input type="text" 
                    placeholder="EMAIL *" 
                    name="company" 
                    id="company" 
                    autocomplete="organization" 
                    class="w-full font-nanum text-base bg-customGreen  border-b border-b-white px-2 py-4 text-white placeholder:text-white" />
                  </div>
                </div>
                
                <div class="sm:col-span-2">
                  <div class="mt-2.5">
                  <form class="max-full mx-auto">
                    <label for="countries" class="w-full font-nanum text-base px-2 py-4 text-white placeholder:text-black">WHAT ARE YOU LOOKING FOR ME TO CAPTURE? *</label>
                    <select id="countries" class="border border-white bg-customGreen px-2 py-4 text-white text-base w-full">
                      <option selected class="">-Select-</option>
                      <option value="US">Instagram</option>
                      <option value="CA">Friend referral</option>
                      <option value="FR">Wedding fair</option>
                      <option value="DE">Facebook ad</option>
                      <option value="DE">Something else</option>
                    </select>
                  </form>
                </div>
              </div>
                  <div class="sm:col-span-2">
                    <div class="mt-2.5">
                      <input type="text" 
                      placeholder="DATE *" 
                      name="date" id="date" 
                      autocomplete="date" 
                      class="w-full font-nanum text-base bg-customGreen border-b border-b-white px-2 py-4 text-white placeholder:text-white" />
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                  <div class="mt-2.5">
                  <form class="max-full mx-auto">
                    <label for="countries" class="w-full font-nanum text-base px-2 py-4 text-white placeholder:text-white">WHAT ARE YOU LOOKING FOR ME TO CAPTURE? *</label>
                    <select id="countries" class="border border-white bg-customGreen px-2 py-4 text-white text-base w-full">
                      <option selected class="">-Select-</option>
                      <option value="US">Wedding day moments"</option>
                      <option value="CA">Family portraits</option>
                      <option value="FR">Graduation ceremony</option>
                      <option value="DE">Corporate event</option>
                      <option value="DE">Newborn photos</option>
                      <option value="DE">Something else</option>
                    </select>
                  </form>
                </div>
              </div>
              </div>
              <div class="my-10 flex justify-center">
                <button type="submit" class="block bg-[#545A3F] outline outline-white uppercase px-8 py-2.5 text-center text-base  text-white shadow-sm ">submit</button>
              </div>
            </form>
          </div>
      </div>
    </section>
  </div>




 



</template>
