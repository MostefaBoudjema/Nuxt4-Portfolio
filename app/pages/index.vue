<template>
  <div class="sm:container sm:mx-auto" ref="mainContainer">
    <Home2026Hero class="scroll-section" />
    <LazyHome2026Clients class="scroll-section" />
    <LazyHome2026FeaturedWork class="scroll-section" />
    <LazyHome2026Stats class="scroll-section" />
    <LazyHome2026BlogTeaser v-if="settings.show_blog" class="scroll-section" />
    <LazyHome2026Faq class="scroll-section" />
    <LazyHome2026Cta class="scroll-section" />
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

import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const mainContainer = ref(null);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  
  if (mainContainer.value) {
    const sections = mainContainer.value.querySelectorAll('.scroll-section');
    
    sections.forEach((section, index) => {
      if (index === 0) return; // Skip Hero
      
      gsap.fromTo(section, 
        { opacity: 0, y: 80, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 95%",
            end: "top 40%",
            scrub: 1.5,
          }
        }
      );
    });
  }
});
</script>

<style scoped></style>
