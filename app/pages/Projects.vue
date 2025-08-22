<script setup>
import { useHead } from '#imports'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
useHead({
  title: () => `${t('Projects')} - ${t('Mostefa Boudjema')}`
})
</script>

<template>
	<div class="container mx-auto">
		<ProjectsGrid :full="true"/>
		
		<ReusableContactBtn place="center"/>
	</div>
</template>

<style scoped></style>
