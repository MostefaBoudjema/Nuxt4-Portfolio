<template>
	<div class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10">

		<!-- Contact details -->
		<ContactDetails :contacts="settings.contacts" />
		<!-- Contact form -->
		<ContactForm v-if="settings.show_contact_form" />
		<div v-else class="mr-16">
			<NuxtImg :src="settings.profile_photo" class="rounded-xl w-96" alt="" />
		</div>
		<!-- <ContactSocials :socials="socials" /> -->
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// import ContactForm from '@/components/contact/ContactForm.vue';
// import ContactDetails from '@/components/contact/ContactDetails.vue';

import settingsData from '~/configs';
import { useHead } from '#imports'
import { useI18n } from 'vue-i18n';

const settings=ref(settingsData);
const { t } = useI18n();
useHead({
  title: () => `${t('Contact')} - ${t('Mostefa Boudjema')}`
})

const { data: socials } = await useFetch('/api/v1/social-links');


onMounted(() => {
});
</script>

<style scoped></style>