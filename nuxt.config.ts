export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss','@nuxtjs/color-mode'],
  devtools: { enabled: true },
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
});
