module.exports = {
  root: true,
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  rules: {
    "vue/block-order": [
      "error",
      {
        order: ["script", "template", "style"],
      },
    ],
    "vue/no-multiple-template-root": "off",
    "vue/no-v-html": "off",
    "no-console": "off",
    "no-extra-parens": "off",
    "import/namespace": "off",
  },
  overrides: [
    {
      files: [
        // These pages are not used directly by users so they can have one-word names.
        "**/pages/**/*.{js,ts,jsx,tsx,vue}",
        "**/layouts/**/*.{js,ts,jsx,tsx,vue}",
        "**/app.{js,ts,jsx,tsx,vue}",
        "**/error.{js,ts,jsx,tsx,vue}",
        // These files should have multiple words in their names as they are within subdirectories.
        "**/components/*/**/*.{js,ts,jsx,tsx,vue}",
      ],
      rules: { "vue/multi-word-component-names": "off" },
    },
  ],
};
