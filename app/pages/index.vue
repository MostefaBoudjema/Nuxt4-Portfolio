<template>
  <div class="sm:container sm:mx-auto" ref="mainContainer">
    <Home2026Hero class="scroll-section" />
    <Home2026Clients class="scroll-section" />
    <Home2026FeaturedWork class="scroll-section" />
    <Home2026Stats class="scroll-section" />
    <Home2026BlogTeaser v-if="settings.show_blog" class="scroll-section" />
    <Home2026Cta class="scroll-section" />
  </div>
</template>

<script setup>

import configs from "~/configs";
const settings = configs;
import { useI18n } from 'vue-i18n';
import { useHead } from '#imports'
import { useJsonLd } from '~/composables/useJsonLd'

const { t }=useI18n({
  inheritLocale: true,
  useScope: "global",
});

useHead({
  title: () => `${t('Home')} - ${t('Mostefa Boudjema')}`,
  meta: [
    {
      name: 'description',
      content: t('meta.home.description')
    },
    {
      name: 'keywords',
      content: t('meta.home.keywords')
    }
  ],
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
