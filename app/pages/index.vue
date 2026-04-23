<template>
  <div class="sm:container sm:mx-auto">
    <Home2025Hero />
    <Home2025FeaturedWork data-aos="fade-up" data-aos-delay="150" />
    <Home2025Stats />
    <Home2025BlogTeaser v-if="settings.show_blog" data-aos="fade-up" data-aos-delay="150" />
    <Home2025Cta />
  </div>
</template>

<script setup>

import settings from "~/configs";
import { useI18n } from 'vue-i18n';
import { useHead } from '#imports'

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
</script>

<style scoped></style>
