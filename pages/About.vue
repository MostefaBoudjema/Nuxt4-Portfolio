<template>
  <!-- About me -->
  <div class="container mx-auto">
    <AboutMe />
  </div>

  <!-- About video (optional, uncomment if needed) -->
  <!-- <AboutVideo /> -->

  <!-- About counter -->
  <AboutCounter />

  <!-- About Education -->
  <AboutEducation />

  <!-- About Employment History -->
  <AboutEmploymentHistory />

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
import AboutMe from '@/components/about/AboutMe.vue';
import AboutCounter from '@/components/about/AboutCounter.vue';
import AboutClients from '@/components/about/AboutClients.vue';
import AboutEmploymentHistory from '@/components/about/AboutEmplymentHistory.vue';
import AboutEducation from '@/components/about/AboutEducation.vue';
import AboutsSkills from '@/components/about/AboutsSkills.vue';
import AboutVideo from '@/components/about/AboutVideo.vue';
import AboutTestimonials from '@/components/about/AboutTestimonials.vue';
import feather from 'feather-icons';
import { useHead } from '#imports'
import { useI18n } from 'vue-i18n'
const { t }=useI18n()

import { onMounted, onUpdated } from 'vue';

onMounted(() => {
  feather.replace();
});

onUpdated(() => {
  feather.replace();
});

useHead({
  title: () => `${t('About Me')} - ${t('Mostefa Boudjema')}`
})
</script>

<style scoped></style>