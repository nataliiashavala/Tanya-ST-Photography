// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/scss/main.scss"],

  app: {
    head: {
      title: "TEMPLATE",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "title", name: "title", content: "TEMPLATE" },
        {
          hid: "description",
          name: "description",
          content: "DESCRIPTION HERE",
        },
        { hid: "og:title", property: "og:title", content: "TEMPLATE" },
        {
          hid: "og:description",
          property: "og:description",
          content: "DESCRIPTION HERE",
        },
        // TODO: add OG image and add i18n to OG image
        {
          hid: "og:image",
          property: "og:image",
          content: "https://www.air-tv.net/img/og-image.jpg",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://www.air-tv.net/",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
        // Correct placement for the font link
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Explora&family=Nanum+Myeongjo&display=swap",
        },
      ],
    },
  },

  modules: ["@nuxtjs/tailwindcss"],

  // Other configuration...
  tailwindcss: {
    cssPath: "~/assets/scss/tailwind.scss",
  },

  compatibilityDate: "2024-07-03"
});