<script setup>
import { computed } from 'vue'
import { useHead } from '#imports'
import { useI18n } from 'vue-i18n'
import { useLocalePath } from '#i18n'
import { useServicesData } from '~/composables/useServicesData'

const { locale } = useI18n({ inheritLocale: true, useScope: 'global' })
const localePath = useLocalePath()
const { getAllServices } = useServicesData()

const services = computed(() => getAllServices(locale.value))

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
  <div class="pt-24 pb-16">
    <div class="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-primary-dark dark:text-primary-light mb-6">
          {{ pageTitle }}
        </h1>
        <p class="text-xl text-ternary-dark/80 dark:text-ternary-light/80">
          {{ pageDesc }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto" :class="isRtl ? 'text-right' : 'text-left'">
        <NuxtLink
          v-for="service in services"
          :key="service.slug"
          :to="localePath(`/services/${service.slug}`)"
          class="group flex flex-col p-8 rounded-3xl bg-white dark:bg-[#0B1220] border border-ternary-light/60 dark:border-ternary-dark/60 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/20 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            :class="[
              'absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity bg-gradient-to-br',
              service.gradient
            ]"
          />

          <div class="mb-6 flex items-center justify-start">
            <span
              :class="[
                'inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br text-white text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 relative z-10',
                service.gradient,
              ]"
            >
              <i :class="service.icon" />
            </span>
          </div>
          
          <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 relative z-10">
            {{ service.hero.headline }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow relative z-10">
            {{ service.meta.description }}
          </p>
          
          <div class="mt-6 flex items-center font-medium relative z-10" :class="['text-' + service.color + '-600 dark:text-' + service.color + '-400']">
            {{ locale === 'ar' ? 'اقرأ المزيد' : (locale === 'fr' ? 'En savoir plus' : 'Learn more') }}
            <i class="bi bi-arrow-right ml-2 transition-transform group-hover:translate-x-1" :class="isRtl ? 'rotate-180 !mr-2 !ml-0 group-hover:-translate-x-1' : ''"></i>
          </div>
        </NuxtLink>
      </div>

    </div>
  </div>
</template>
