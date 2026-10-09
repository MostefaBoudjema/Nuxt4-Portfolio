<script setup>
import { computed } from 'vue'
import { useRoute, showError } from '#app'
import { useHead } from '#imports'
import { useI18n } from 'vue-i18n'
import configs from '~/configs'

const route = useRoute()
const { locale } = useI18n({ inheritLocale: true, useScope: 'global' })
const slug = route.params.slug

const { data: service, pending } = await useFetch(`/api/v1/services/${slug}`, {
  query: { lang: locale },
  watch: [locale]
})

if (!service.value) {
  throw showError({ statusCode: 404, statusMessage: 'Service Not Found' })
}

useHead({
  title: () => service.value?.meta?.title || 'Service',
  meta: [
    { name: 'description', content: () => service.value?.meta?.description || '' }
  ]
})

const whatsappMessage = computed(() => {
  if (locale.value === 'ar') return encodeURIComponent(`مرحباً، أنا مهتم بخدمة: ${service.value.meta.title}`);
  if (locale.value === 'fr') return encodeURIComponent(`Bonjour, je suis intéressé par le service: ${service.value.meta.title}`);
  return encodeURIComponent(`Hello, I am interested in the service: ${service.value.meta.title}`);
});
const whatsappLink = computed(() => `https://wa.me/${configs.whatsappNumber}?text=${whatsappMessage.value}`);
</script>

<template>
  <div v-if="service" class="pb-10">
    <ServicesServiceHero :service="service" :whatsappLink="whatsappLink" />
    <ServicesServiceProblem :service="service" />
    <ServicesServiceFeatures :service="service" />
    <ServicesServiceTechStack :service="service" />
    <ServicesServiceFaq :service="service" />
    
    <!-- Using the existing CTA component, it automatically handles localization internally -->
    <Home2026Cta />
  </div>
</template>
