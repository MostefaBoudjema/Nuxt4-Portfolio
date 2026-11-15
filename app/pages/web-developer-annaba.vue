<template>
  <div>
    <section class="relative overflow-hidden py-16 sm:py-24">
      <div class="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary-dark dark:text-primary-light mb-6">
            {{ $t('web_developer_annaba.title') }}
          </h1>
          <p class="text-xl text-primary-dark/90 dark:text-primary-light/90 font-medium mb-8">
            {{ $t('web_developer_annaba.subtitle') }}
          </p>
          <p class="text-lg text-ternary-dark/80 dark:text-ternary-light/80 leading-relaxed mb-8">
            {{ $t('web_developer_annaba.description') }}
          </p>
          <NuxtLink to="/#contact" class="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 font-semibold shadow-lg shadow-blue-500/25 transition-all">
            {{ $t('web_developer_annaba.cta') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="py-16 bg-ternary-light/30 dark:bg-ternary-dark/30">
      <div class="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold tracking-tight text-primary-dark dark:text-primary-light mb-10 text-center">
          {{ $t('web_developer_annaba.features.title') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div v-for="key in features" :key="key" class="bg-white dark:bg-[#0B1220] p-6 rounded-2xl shadow-sm border border-ternary-light/60 dark:border-ternary-dark/80">
            <h3 class="text-xl font-bold text-primary-dark dark:text-primary-light mb-3">{{ $t(`web_developer_annaba.features.${key}.title`) }}</h3>
            <p class="text-ternary-dark/80 dark:text-ternary-light/80">
              {{ $t(`web_developer_annaba.features.${key}.desc`) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white dark:bg-primary-dark">
      <div class="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-extrabold tracking-tight text-primary-dark dark:text-primary-light mb-8 text-center">
            {{ $t('web_developer_annaba.faq.title') }}
          </h2>
          <div class="space-y-6">
            <div v-for="i in faqCount" :key="i" class="bg-ternary-light/30 dark:bg-ternary-dark/30 p-6 rounded-2xl shadow-sm border border-ternary-light/60 dark:border-ternary-dark/80">
              <h3 class="text-xl font-bold text-primary-dark dark:text-primary-light mb-3">
                {{ $t(`web_developer_annaba.faq.q${i}`) }}
              </h3>
              <p class="text-ternary-dark/80 dark:text-ternary-light/80">
                {{ $t(`web_developer_annaba.faq.a${i}`) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-ternary-light/30 dark:bg-ternary-dark/30">
      <div class="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold tracking-tight text-primary-dark dark:text-primary-light mb-4">
            {{ $t('web_developer_annaba.closing.title') }}
          </h2>
          <p class="text-lg text-ternary-dark/80 dark:text-ternary-light/80 leading-relaxed mb-8">
            {{ $t('web_developer_annaba.closing.desc') }}
          </p>
          <NuxtLink to="/#contact" class="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 font-semibold shadow-lg shadow-blue-500/25 transition-all">
            {{ $t('web_developer_annaba.closing.button') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead, useRoute, computed } from '#imports'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()

const site = 'https://www.mostefawebdev.com'
const features = ['software_engineering', 'full_stack', 'front_end', 'custom_apps', 'ecommerce', 'local']
const faqCount = 6

useHead({
  title: computed(() => t('web_developer_annaba.meta.title')),
  meta: [
    {
      name: 'description',
      content: computed(() => t('web_developer_annaba.meta.description'))
    }
  ],
  link: [
    { rel: 'canonical', href: computed(() => `${site}${route.path}`) },
    { rel: 'alternate', hreflang: 'en', href: `${site}/web-developer-annaba` },
    { rel: 'alternate', hreflang: 'fr', href: `${site}/developpeur-web-annaba` },
    { rel: 'alternate', hreflang: 'ar', href: `${site}/${encodeURI('مطور-مواقع-عنابة')}` },
    { rel: 'alternate', hreflang: 'x-default', href: `${site}/web-developer-annaba` }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Mostefa Boudjema Web Developer',
        url: `${site}/`,
        description: t('web_developer_annaba.meta.description'),
        serviceType: [
          'Software engineering',
          'Full stack development',
          'Front end development',
          'Custom web applications',
          'E-commerce development'
        ],
        knowsAbout: ['Software engineering', 'Full stack development', 'Front end development', 'Vue', 'Nuxt'],
        areaServed: [
          { '@type': 'City', name: 'Annaba' },
          { '@type': 'Country', name: 'Algeria' }
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Annaba',
          addressCountry: 'DZ'
        },
        sameAs: [
          'https://github.com/MostefaBoudjema',
          'https://www.linkedin.com/in/mostefa-boudjema'
        ]
      }))
    }
  ]
})
</script>

<style scoped></style>