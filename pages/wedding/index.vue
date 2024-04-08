<script setup lang="ts">
import TCard from '~/components/general/TCard.vue';
import heroImage from '~/assets/img/wedding/hero_img_wedding.jpg';
import cardImage from '~/assets/img/wedding/price_card.jpg';
import TPriceCard from '~/components/general/TPriceCard.vue';
import TButton from '~/components/general/TButton.vue';
</script>

<template>
  <div class="container mx-auto">
    <TCard
      title="I’M HERE TO HELP YOU REMEMBER YOUR BIG DAY"
      text="Witness the delicate yawns, tiny toes, and sleepy smiles with my Baby Photoshoot Sessions. Designed to capture the fleeting moments of infancy, these sessions are a celebration of new life and the love that surrounds it. In the comfort and warmth of a serene environment, I create timeless portraits that speak to the innocence and enchanting simplicity of your little one."
      :imageSrc="heroImage"
      VerticalText=""
    />
  </div>

  <TPriceCard 
  title=""
  textColor="black"
  :imageSrc="cardImage"
  />


</template>

<style scoped>

</style>
