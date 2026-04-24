// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },

    // Vite build config (Nuxt uses Vite under the hood)
    vite: {
        ssr: {
            noExternal: [
                'vue',
                '@vue/runtime-core',
                '@vue/runtime-dom',
                '@vue/shared',
                '@vue/server-renderer',
                'vue-i18n',
                '@intlify/core-base',
                '@intlify/message-compiler',
                '@intlify/shared',
            ],
        },
    },

    app: {
        head: {
            title: 'Mostefa Boudjema',
            meta: [
                { property: 'og:title', content: 'Mostefa – Web Developer' },
                {
                    property: 'og:description',
                    content: 'Mostefa Boudjema - Laravel & Vue.js developer portfolio.',
                },
                {
                    property: 'og:image',
                    content: 'https://mostefa-webdev.vercel.app/images/logo1.jpg',
                },
                {
                    property: 'og:url',
                    content: 'https://mostefa-webdev.vercel.app/',
                },
                { name: 'twitter:card', content: 'summary_large_image' },
            ],
            link: [
                { rel: 'icon', type: 'image/png', href: '/images/logo.svg' },
            ],
            script: [
                {
                    src: 'https://www.googletagmanager.com/gtag/js?id=G-L5HVZ2VCP7',
                    async: true,
                },
                {
                    innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-L5HVZ2VCP7');`,
                    type: 'text/javascript',
                },
            ],
        },
    },

    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
        [
            '@nuxtjs/i18n',
            {
                locales: [
                    {
                        code: 'en',
                        iso: 'en-US',
                        file: 'en.json',
                        name: 'English',
                    },
                    {
                        code: 'ar',
                        iso: 'ar-DZ',
                        file: 'ar.json',
                        name: 'Arabic',
                    },
                    {
                        code: 'fr',
                        iso: 'fr-FR',
                        file: 'fr.json',
                        name: 'Français',
                    },
                ],
                defaultLocale: 'en',
                strategy: 'prefix_except_default',
                lazy: true,
                langDir: '',
                vueI18n: './vue-i18n.options.js',
                detectBrowserLanguage: false,
            },
        ],
    ],

    css: ['~/assets/css/app.css'],

    plugins: [
        '@/plugins/aos.client.js',
        '~/plugins/theme.client.js',
        '~/plugins/backtotop.client.js',
    ],

    ssr: true,

    nitro: {
        preset: 'vercel',
        externals: {
            inline: [
                'vue',
                '@vue/runtime-core',
                '@vue/runtime-dom',
                '@vue/shared',
                '@vue/server-renderer',
                'vue-i18n',
                '@intlify/core-base',
                '@intlify/message-compiler',
                '@intlify/shared',
            ],
        },
    },

    runtimeConfig: {
        // Private — server-side only (Gemini key never exposed to client)
        geminiApiKey: process.env.GEMINI_API_KEY,

        // Public — exposed to client via useRuntimeConfig().public
        public: {
            useAllPosts: process.env.NUXT_PUBLIC_USE_ALL_POSTS === 'true' || false,
            showMultiLang: process.env.NUXT_PUBLIC_SHOW_MULTI_LANG === 'true' || false,
            authorName: process.env.VITE_AUTHOR_NAME || 'Mostefa Boudjema',
            apiUrl: process.env.VITE_API_URL || 'https://backend-mostefa-boudjema.vercel.app',
            showCv: process.env.VITE_SHOW_CV === 'true' || false,
            showPricing: process.env.VITE_SHOW_SHOW_PRICING === 'true' || false,
            showHireMe: process.env.VITE_SHOW_HIRE_ME === 'true' || false,
            showBlog: process.env.VITE_SHOW_BLOG === 'true' || false,
            showContactForm: process.env.VITE_SHOW_CONTACT_FORM === 'true' || false,
            cvPath: process.env.VITE_CV_PATH || '/files/MostefaBoudjema-Resume.pdf',
            videoLinkEn: process.env.VITE_VIDEO_LINK_EN || 'https://www.youtube.com/embed/CMu_27ZURwA?si=sriXHIbvcos5620e',
            whatsappNumber: process.env.VITE_WHATSAPP_NUMBER || '213793692289',
            fullList: process.env.VITE_FULL_LIST,
            homeList: process.env.VITE_HOME_LIST,
        },
    },
});
