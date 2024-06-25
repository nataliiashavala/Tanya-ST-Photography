<script>
export default {
  name: 'YourComponentName',

  mounted() {
    // Create a script element
    const script = document.createElement('script');
    
    // Set attributes of the script element
    script.async = true;
    script.dataset.uid = "ccbf25e67f";  // Use dataset to set data attributes
    script.src = "https://nataliia-shavala.ck.page/ccbf25e67f/index.js";
    
    // Append the script to the document's head
    document.head.appendChild(script);
  },

unmounted() {
  // Select the script by its source or any unique attribute
  const script = document.querySelector('script[src="https://nataliia-shavala.ck.page/ccbf25e67f/index.js"]');
  if (script) {
    document.head.removeChild(script);
  }
}
}
</script>
