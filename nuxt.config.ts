// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    [
      '@nuxtjs/i18n',
      {
        locales: [
          { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
          { code: 'ar', iso: 'ar-DZ', file: 'ar.json', name: 'Arabic' },
          { code: 'fr', iso: 'fr-FR', file: 'fr.json', name: 'Français' }
        ],
        defaultLocale: 'en',
        strategy: 'prefix_except_default', // Only /ar/ gets a prefix, /en/ is default
        lazy: true,
        langDir: 'locales/',
        vueI18n: './locales/vue-i18n.options.js'
      }
    ]
  ],
  css: [
    '~/assets/css/app.css'
  ],
  plugins: [
    '@/plugins/aos.client.js',
    '@/plugins/aos.client.js',
    '~/plugins/theme.client.js',
    '~/plugins/backtotop.client.js'
  ],
  ssr: true,
  nitro: {
    preset: 'vercel'
  },
  runtimeConfig: {
    // Private keys (only available on server-side)
    // apiSecret: process.env.API_SECRET,
    
    // Public keys (exposed to the client)
    public: {
      useAllPosts: process.env.NUXT_PUBLIC_USE_ALL_POSTS === 'true' || false,
      i18nLocale: process.env.I18N_LOCALE || 'en',
      i18nFallbackLocale: process.env.I18N_FALLBACK_LOCALE || 'en',
      authorName: process.env.AUTHOR_NAME || 'Mostefa Boudjema',
      apiUrl: process.env.API_URL || 'https://backend-mostefa-boudjema.vercel.app',
      showCv: process.env.SHOW_CV === 'true' || false,
      showMultiLang: process.env.SHOW_MULTI_LANG === 'true' || false,
      showHireMe: process.env.SHOW_HIRE_ME === 'true' || false,
      showBlog: process.env.SHOW_BLOG === 'true' || false,
      showContactForm: process.env.SHOW_CONTACT_FORM === 'true' || false,
      cvPath: process.env.CV_PATH || '/files/MostefaBoudjema-Resume.pdf',
      videoLinkEn: process.env.VIDEO_LINK_EN || 'https://www.youtube.com/embed/CMu_27ZURwA?si=sriXHIbvcos5620e',
      whatsappNumber: process.env.WHATSAPP_NUMBER || '213793692289',
      fullList: process.env.FULL_LIST || '[3,9,1,10,0,11,5,2,4,6,7,8]',
      homeList: process.env.HOME_LIST || '[3,14,15,6,9,10]'
    }
  },
  app: {
    head: {
      title: 'Mostefa Boudjema', 
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-L5HVZ2VCP7',
          async: true
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-L5HVZ2VCP7');`,
          type: 'text/javascript'
        }
      ]
    }
  },
  compatibilityDate: '2025-07-08'
})
