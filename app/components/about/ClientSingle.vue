<script setup>
import { ref } from 'vue';
const props = defineProps(['client']);
const isHovered = ref(false);
</script>

<template>
	<div data-aos="zoom-in-up" class="client-container">
		<div class="client-card" 
			@mouseenter="isHovered = true" 
			@mouseleave="isHovered = false">
			<a v-if="client.link" :href="client.link" target="_blank" rel="noopener noreferrer">
				<NuxtImg :src="isHovered ? client.imgColor : client.imgGray" 
					:alt="client.title" 
					width="300"
					height="160"
					class="client-img py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg cursor-pointer dark:bg-secondary-light transition-all duration-300" />
			</a>
			<NuxtImg v-else 
				:src="isHovered ? client.imgColor : client.imgGray" 
				:alt="client.title"
				width="300"
				height="160"
				class="client-img py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg cursor-pointer dark:bg-secondary-light transition-all duration-300"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.client-container {
	width: 300px;
	height: 160px;
	margin: 0 auto;
}

.client-card {
	position: relative;
	width: 100%;
	height: 100%;
	text-align: center;
	cursor: pointer;
	transition: transform 0.3s ease;
}

.client-card:hover {
	transform: scale(1.02);
}

.client-img {
	width: 300px;
	height: 160px;
	object-fit: contain;
	display: block;
}

/* Dark mode adjustments */
.dark .client-img {
	border-color: #374151;
}
</style>
