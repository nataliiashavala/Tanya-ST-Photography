<script setup>
import { defineProps, computed } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  colorOption: {
    type: String,
    default: "option1", // Default color option
    validator: (value) => ["option1", "option2"].includes(value),
  },
});

const buttonStyles = computed(() => {
  return props.colorOption === "option1"
    ? {
        backgroundColor: "bg-[#545A3F]",
        textColor: "text-white",
        borderColor: "",
      }
    : props.colorOption === "option2"
      ? {
          backgroundColor: "bg-[#F5F5F5]",
          textColor: "text-black",
          borderColor: "border border-black",
        }
      : {}; // Fallback styles if needed
});

const router = useRouter();

const navigateToContact = () => {
  router.push("/contact-me");
};
</script>

<template>
  <button
    :class="[
      'w-52 h-14 py-2 px-4 shadow-md text-xl',
      buttonStyles.backgroundColor,
      buttonStyles.textColor,
      buttonStyles.borderColor,
    ]"
    @click="navigateToContact"
  >
    <slot />
  </button>
</template>

<style scoped>
/* Add any additional styles here */
</style>
