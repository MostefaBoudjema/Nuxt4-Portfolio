<template>
  <!-- About me -->
  <div class="container mx-auto">
    <AboutMe />
  </div>

  <!-- About video (optional, uncomment if needed) -->
  <!-- <AboutVideo /> -->

  <!-- About counter -->
  <AboutCounter />

  <!-- About Employment History -->
  <AboutEmplymentHistory />

  <!-- About Skills -->
  <AboutsSkills />

  <!-- About clients -->
  <div class="container mx-auto">
    <AboutClients />
  </div>

  <!-- About testimonials -->
  <AboutTestimonials />
</template>

<script setup>
import AboutMe from '@/components/about/AboutMe';
import AboutCounter from '@/components/about/AboutCounter';
import AboutClients from '@/components/about/AboutClients';
import AboutEmplymentHistory from '@/components/about/AboutEmplymentHistory';
import AboutsSkills from '@/components/about/AboutsSkills.vue';
import AboutVideo from '@/components/about/AboutVideo';
import AboutTestimonials from '@/components/about/AboutTestimonials.vue';
import feather from 'feather-icons';
import { useHead } from '#imports'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { onMounted, onUpdated } from 'vue';

onMounted(() => {
	feather.replace();
});

onUpdated(() => {
	feather.replace();
});

useHead({
  title: () => `${t('About Me')} - Mostefa Boudjema`
})
</script>

<style scoped></style>