// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    experimental: { appManifest: false },
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
                { property: 'og:title', content: 'Mostfa – Web Developer' },
                {
                    property: 'og:description',
                    content:
                        'Mostefa Boudjema - Laravel & Vue.js developer portfolio.',
                },
                {
                    property: 'og:image',
                    content:
                        'https://mostefa-webdev.vercel.app/images/logo1.jpg',
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
                detectBrowserLanguage: false, // disables i18n_redirected cookie and redirect
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
        // Private keys (only available on server-side)
        // apiSecret: process.env.API_SECRET,

        // Public keys (exposed to the client)
        public: {
            useAllPosts:
                process.env.NUXT_PUBLIC_USE_ALL_POSTS === 'true' || false,
            i18nLocale: process.env.I18N_LOCALE || 'en',
            i18nFallbackLocale: process.env.I18N_FALLBACK_LOCALE || 'en',
            authorName: process.env.AUTHOR_NAME || 'Mostefa Boudjema',
            apiUrl:
                process.env.API_URL ||
                'https://backend-mostefa-boudjema.vercel.app',
            showCv: process.env.SHOW_CV === 'true' || false,
            showMultiLang:
                process.env.NUXT_PUBLIC_SHOW_MULTI_LANG === 'true' || false,
            showHireMe: process.env.SHOW_HIRE_ME === 'true' || false,
            showPricing: process.env.VITE_SHOW_SHOW_PRICING === 'true' || false,
            showBlog: process.env.SHOW_BLOG === 'true' || false,
            showContactForm: process.env.SHOW_CONTACT_FORM === 'true' || false,
            cvPath: process.env.CV_PATH || '/files/MostefaBoudjema-Resume.pdf',
            videoLinkEn:
                process.env.VIDEO_LINK_EN ||
                'https://www.youtube.com/embed/CMu_27ZURwA?si=sriXHIbvcos5620e',
            whatsappNumber: process.env.WHATSAPP_NUMBER || '213793692289',
            fullList: process.env.FULL_LIST,
            homeList: process.env.HOME_LIST,
        },
    },
    compatibilityDate: '2025-07-08',
});
