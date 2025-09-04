<template>
	<div class="mt-10 sm:mt-20 flex justify-center">
		<NuxtLink
			:to="localePath(link)"
			class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-blue-500 hover:bg-blue-600 focus:ring-1 focus:ring-blue-900 text-white text-lg sm:text-xl duration-300"
			:aria-label="text"
		>
			<ReusableButton :title="text" />
		</NuxtLink>
	</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useLocalePath } from '#i18n';

const props = defineProps({
	text: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
});

const { t } = useI18n({
	inheritLocale: true,
	useScope: 'global',
});
const localePath = useLocalePath();
</script>

<style></style>
