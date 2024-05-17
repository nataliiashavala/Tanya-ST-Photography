<script setup>
import TCard from "~/components/general/TCard.vue";
import heroImage from "~/assets/img/about_me/hero_img_about_me.jpg";
import TButton from "~/components/general/TButton.vue";
</script>

<template>
  <div class="container mx-auto">
    <TCard
      title="HELLO I'M TANYA"
      text="I'm Ukrainian but I have been based in Aberdeen, Scotland since 2018.
       Taking pictures has been a part of my life for as long as I can remember.
        I bought my first professional camera at 13 years old.
          Back then, l was sofascinated by how photographers could create such beautiful and unique images so I wanted photography to be part of my life since then.
            To me, photography is about people being real and being able to capture pure emotion in picture.
              It is important to me that my clients feel relaxed and able to be themselves so my service is always provided with warmth and care.
                I also strive to be unobtrusive as I take my photos whilst never missing an opportunity to capture the details of your special day...
                  These moments are so special and I want you to remember them forever.
                    I specialise in wedding and family photography, but I also have experience doing events, beauty and business photography.
                      Photography is more than my job - it's my passion.
                        I consider myself lucky to be able to do what I love every day. Guess what?
                          had the coolest time working in Dubai! It was like diving into a photography playground - teaming up with the pros for some seriously epic weddings.
                            Imagine capturing a kaleidoscope of cultures - from the lavish Arabic ceremonies to the joyous European celebrations and the vibrant Nigerian parties - every click told a different story.
                               Living and shooting among such diversity wasn't just work; it was an eye-opening journey.
                                 Every wedding had its own heartbeat, and I got to be there, camera in hand, soaking it all in. Dubai, you were an experience of a lifetime!."
      :image-src="heroImage"
    />
    <div class="flex justify-center">
      <TButton color-option="option1">Get In Touch</TButton>
    </div>
    <div class="font-nanum text-end text-base">
      <h1>INSTAGRAM</h1>
      <p>@tanyast</p>
      <h1 class="font-bold">EMAIL</h1>
      <p>tanyastasyk@gmail.com</p>
      <h1>PHONE</h1>
      <p>+447444517696</p>
    </div>
  </div>
</template>
