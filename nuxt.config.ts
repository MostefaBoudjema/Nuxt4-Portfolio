// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
  css: [
    '~/assets/css/app.css'
  ],
  plugins: [
    '@/plugins/aos.client.js',
    '@/plugins/aos.client.js',
    '~/plugins/i18n.js',
    '~/plugins/theme.client.js',
    '~/plugins/backtotop.client.js'
  ],
  ssr: true,
  nitro: {
    preset: 'node'
  },
  app: {
    head: {
      title: 'Mostefa Boudjema', // Change this to your desired title
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  compatibilityDate: '2025-07-08'
})
