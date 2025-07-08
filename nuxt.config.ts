// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/assets/css/app.css'
  ],
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/theme.client.js'
  ],
  compatibilityDate: '2025-07-08'
})
