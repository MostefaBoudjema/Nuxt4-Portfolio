<template>

  <div class="container mx-auto">
    <AboutMe />
  </div>

  <!-- <AboutVideo /> -->

  <AboutCounter />

  <AboutEmploymentHistory />
  
  <AboutEducation />

  <AboutsSkills />

  <div class="container mx-auto">
    <AboutClients />
  </div>

  <AboutTestimonials />
</template>

<script setup>

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