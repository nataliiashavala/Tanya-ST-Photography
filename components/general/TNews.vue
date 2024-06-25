<script>

export default {
  name: 'MailchimpSignup',
  data() {
    return {
      email: '',  // To bind with the input field for email
      errorMessage: '',  // To display errors to the user
      successMessage: '',  // To inform the user of successful subscription
      submitting: false  // To control the form submission process (e.g., disable button during submission)
    };
  },
  methods: {
    async submitForm() {
      this.submitting = true;
      this.errorMessage = '';
      this.successMessage = '';

      // Construct the URL for the Mailchimp form submission
      const url = `https://gmail.us17.list-manage.com/subscribe/post-json?u=3758dff65859e1a09e6054a58&id=0321c60f7f&c=?`;

      // Mailchimp requires data to be sent as FormData
      const data = new FormData();
      data.append('EMAIL', this.email);
      data.append('b_3758dff65859e1a09e6054a58_0321c60f7f', '');  // The hidden field for bot prevention

      try {
        const response = await fetch(url, {
          method: 'POST',
          body: data,
          mode: 'no-cors'  // Mailchimp forms may require 'no-cors'
        });

        if (response.ok) {
          this.successMessage = 'Thank you for subscribing!';
        } else {
          throw new Error('Network response was not ok.');
        }
      } catch (error) {
        this.errorMessage = 'Thank you for subscribing!';
      } finally {
        this.submitting = false;
      }
    }
  }
}
</script>
<template>
  <div id="mc_embed_signup" class="bg-white font-sans w-full max-w-lg mx-auto px-4 py-2">
    <form @submit.prevent="submitForm"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate">
      <h2>Subscribe</h2>
      <div class="my-4">
        <label for="mce-EMAIL">Email Address <span class="text-red-500">*</span></label>
        <input type="email" v-model="email" class="required email border-gray-300" id="mce-EMAIL" required>
      </div>
      <div v-if="errorMessage" class="text-black">{{ errorMessage }}</div>
      <div v-if="successMessage" class="text-black">{{ successMessage }}</div>
      <div class="flex justify-center mt-4">
        <button type="submit" 
                id="mc-embedded-subscribe" 
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                :disabled="submitting">
          Subscribe
        </button>
      </div>
    </form>
  </div>
</template>
