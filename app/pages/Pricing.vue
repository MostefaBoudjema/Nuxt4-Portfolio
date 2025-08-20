<template>
	<Prices />
	<AboutTestimonials />
</template>

<script setup>
import Prices from '@/components/pricing/Prices.vue';
import AboutTestimonials from '@/components/about/AboutTestimonials.vue';

import { useHead } from '#imports'
import { useI18n } from 'vue-i18n'
const { t }=useI18n()

useHead({
	title: () => `${t('Pricing')} - ${t('Mostefa Boudjema')}`
})
</script>