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

import { useHead } from '#imports'
import { useI18n } from 'vue-i18n'
import configs from '~/configs'
import { useJsonLd } from '~/composables/useJsonLd'

const { t }=useI18n()
const { usePersonJsonLd } = useJsonLd()

import { onMounted } from 'vue';

onMounted(() => {
});

useHead({
  title: () => `${t('About Me')} - ${t('Mostefa Boudjema')}`
})

usePersonJsonLd(configs)
</script>

<style scoped></style>