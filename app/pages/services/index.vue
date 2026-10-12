<script setup>
import { computed } from 'vue'
import { useHead } from '#imports'
import { useI18n } from 'vue-i18n'
import { useLocalePath } from '#i18n'
const { locale } = useI18n({ inheritLocale: true, useScope: 'global' })
const localePath = useLocalePath()

const { data: services, pending } = await useFetch('/api/v1/services', {
  query: { lang: locale },
  watch: [locale]
})

const rtlLocales = ['ar', 'he', 'fa', 'ur']
const isRtl = computed(() => rtlLocales.includes(locale.value))

const pageTitle = computed(() => {
  if (locale.value === 'ar') return 'خدمات تطوير الويب والتطبيقات'
  if (locale.value === 'fr') return 'Services de Développement Web & Applications'
  return 'Web & Application Development Services'
})

const pageDesc = computed(() => {
  if (locale.value === 'ar') return 'حلول برمجية مخصصة للشركات والشركات الناشئة.'
  if (locale.value === 'fr') return 'Solutions logicielles sur mesure pour entreprises et startups.'
  return 'Custom software solutions for businesses and startups.'
})

useHead({
  title: () => pageTitle.value,
  meta: [
    { name: 'description', content: () => pageDesc.value }
  ]
})
</script>

<template>
  <div class="pt-20 sm:pt-24 pb-16">
    <div class="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
        <p class="text-sm font-medium tracking-wide uppercase text-ternary-dark/50 dark:text-ternary-light/50 mb-3">
          {{ locale === 'ar' ? 'خدماتنا البرمجية' : (locale === 'fr' ? 'Nos Services' : 'Our Services') }}
        </p>
        <h1 class="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1] text-primary-dark dark:text-primary-light mb-4">
          {{ pageTitle }}
        </h1>
        <p class="text-base sm:text-lg text-ternary-dark/70 dark:text-ternary-light/70 max-w-2xl mx-auto leading-relaxed">
          {{ pageDesc }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto" :class="isRtl ? 'text-right' : 'text-left'">
        <NuxtLink
          v-for="service in services"
          :key="service.slug"
          :to="localePath(`/services/${service.slug}`)"
          class="group flex flex-col p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#0B1220] border border-ternary-dark/10 dark:border-ternary-light/10 hover:border-ternary-dark/25 dark:hover:border-ternary-light/25 hover:shadow-lg transition-all duration-200 relative overflow-hidden"
        >
          <div class="mb-6 flex items-center justify-start">
            <span
              class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xl border border-blue-200/40 dark:border-blue-900/40 group-hover:scale-105 transition-transform duration-200 relative z-10"
            >
              <i :class="service.icon" />
            </span>
          </div>
          
          <h2 class="text-xl font-bold tracking-tight text-primary-dark dark:text-primary-light mb-3 relative z-10 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150">
            {{ service.hero.headline }}
          </h2>
          <p class="text-sm sm:text-base text-ternary-dark/70 dark:text-ternary-light/70 leading-relaxed flex-grow relative z-10">
            {{ service.meta.description }}
          </p>
          
          <div class="mt-6 flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 relative z-10">
            <span>{{ locale === 'ar' ? 'اقرأ المزيد' : (locale === 'fr' ? 'En savoir plus' : 'Learn more') }}</span>
            <span aria-hidden="true" class="transition-transform duration-150 group-hover:translate-x-1" :class="isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''">→</span>
          </div>
        </NuxtLink>
      </div>

    </div>
  </div>
</template>
