<script>
export default {
	props: ['client'],
};
</script>

<template>
	<div  data-aos="zoom-in-up">
		<a v-if="client.link" :href="client.link" target="_blank" rel="noopener noreferrer">
			<NuxtImg :src="client.img" :alt="client.title"	width="300"
			height="160"
				class="py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light" />
		</a>
		<NuxtImg v-else :src="client.img" :alt="client.title"
			width="300"
			height="160"
			class="client-img py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light"
		/>
	</div>
</template>
  

<style lang="scss" scoped>
.client-img {
	width: 300px;
	height: 160px;
	object-fit: contain;
	display: block;
}
</style>
