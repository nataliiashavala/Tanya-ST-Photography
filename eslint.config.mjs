import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['**/*.{js,ts,jsx,tsx,html,vue}'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  plugins: [
    'vue',
    'tailwindcss',
    'prettier'
  ],
  rules: {
    'no-console': 'off', // allow console.log in TypeScript files
    'prettier/prettier': 'error',
    // add additional rules
  },
  globals: {
    // Define global variables if necessary
  }
});
