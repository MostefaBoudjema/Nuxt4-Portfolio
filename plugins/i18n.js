import { createI18n } from 'vue-i18n'
import en from '../locales/en.json';
import ar from '../locales/ar.json';

export default defineNuxtPlugin((nuxtApp) => {
  const appLang = (typeof window !== 'undefined' && localStorage.getItem('lang')) || 'en'
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: appLang,
    fallbackLocale: 'en',
    messages: { en, ar }
  })
  nuxtApp.vueApp.use(i18n)
}) 