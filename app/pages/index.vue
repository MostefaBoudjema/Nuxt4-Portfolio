<template>
  <div>
    <Home2026Hero />
    <LazyHome2026Clients />
    <LazyHome2026FeaturedWork />
    <LazyHome2026Stats />
    <LazyHome2026BlogTeaser v-if="settings.show_blog" />
    <LazyHome2026Faq />
    <LazyHome2026Cta />
  </div>
</template>

<script setup>

import configs from "~/configs";
const settings = configs;
import { useI18n } from 'vue-i18n';
import { useHead } from '#imports'
import { useJsonLd } from '~/composables/useJsonLd'
import { computed } from 'vue'

const { t, locale }=useI18n({
  inheritLocale: true,
  useScope: "global",
});

const seoTitle = computed(() => {
  if (locale.value === 'ar') return 'مطور مواقع في عنابة والجزائر | مصطفى بوجمعة';
  if (locale.value === 'fr') return 'Développeur Web à Annaba et en Algérie | Mostefa Boudjema';
  return 'Web Developer in Annaba and Algeria | Mostefa Boudjema';
});

const seoDescription = computed(() => {
  if (locale.value === 'ar') return 'مصطفى بوجمعة، مطور مواقع Laravel و Vue.js في عنابة، الجزائر. أبني متاجر إلكترونية، تطبيقات SaaS، وأنظمة إدارة.';
  if (locale.value === 'fr') return 'Mostefa Boudjema est un développeur web Laravel et Vue.js à Annaba, Algérie. Je crée des boutiques e-commerce, des applications SaaS et des systèmes de gestion.';
  return 'Mostefa Boudjema is a Laravel and Vue.js web developer in Annaba, Algeria. I build e-commerce stores, SaaS apps, and management systems.';
});

const localSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Mostefa Boudjema Web Developer",
  "url": "https://www.mostefawebdev.com/",
  "areaServed": ["Annaba", "Algeria"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Annaba",
    "addressCountry": "DZ"
  },
  "sameAs": [
    "https://github.com/MostefaBoudjema",
    "https://www.linkedin.com/in/mostefa-boudjema"
  ]
};

useHead({
  title: () => seoTitle.value,
  meta: [
    {
      name: 'description',
      content: () => seoDescription.value
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(localSchema)
    }
  ]
})

const { usePersonJsonLd } = useJsonLd()
await usePersonJsonLd(settings)

</script>

<style scoped></style>
