<script>
export default {
	props: ['client'],
};
</script>

<template>
	<div data-aos="zoom-in-up" class="flex justify-center upper-div rounded-lg">
		<a v-if="client.link" :href="client.link" target="_blank" rel="noopener noreferrer">
			<NuxtImg :src="client.img" :alt="client.title" height="160"
				class="py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm mb-8 cursor-pointer dark:bg-secondary-light rounded-lg"
				style="min-height: 160px;" />
		</a>
		<NuxtImg v-else :src="client.img" :alt="client.title" height="160"
			class="client-img py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm mb-8 cursor-pointer dark:bg-secondary-light rounded-lg" />
	</div>
</template>


<style lang="scss" scoped>
.client-img {
	min-width: 300px;
	min-height: 160px;
	object-fit: contain;
	display: block;
}

.upper-div {
	overflow: hidden;
}
</style>
