<script>
export default {
	props: ['client'],
	data() {
		return {
			isFlipped: false
		};
	},
	mounted() {
		// Trigger flip animation when element comes into view
		this.$nextTick(() => {
			const observer = new IntersectionObserver((entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							this.isFlipped = true;
						}, 500); // Delay flip after zoom-in animation
					}
				});
			}, {
				threshold: 0.5,
				rootMargin: '0px 0px -100px 0px'
			});
			
			observer.observe(this.$el);
		});
	}
};
</script>

<template>
	<div data-aos="zoom-in-up" class="flip-container">
		<div class="flip-card" :class="{ 'flipped': isFlipped }">
			<div class="flip-card-inner">
				<!-- Front side - White placeholder -->
				<div class="flip-card-front">
					<div class="placeholder-content">
						<div class="placeholder-image">
							<div class="white-image-placeholder"></div>
						</div>
					</div>
				</div>
				<!-- Back side - Actual logo -->
				<div class="flip-card-back">
					<a v-if="client.link" :href="client.link" target="_blank" rel="noopener noreferrer">
						<NuxtImg :src="client.img" :alt="client.title" 
							width="300"
							height="160"
							class="client-img py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg cursor-pointer dark:bg-secondary-light" />
					</a>
					<NuxtImg v-else :src="client.img" :alt="client.title"
						width="300"
						height="160"
						class="client-img py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg cursor-pointer dark:bg-secondary-light"
					/>
				</div>
			</div>
		</div>
	</div>
</template>
  

<style lang="scss" scoped>
.flip-container {
	perspective: 1000px;
	width: 300px;
	height: 160px;
	margin: 0 auto;
}

.flip-card {
	position: relative;
	width: 100%;
	height: 100%;
	text-align: center;
	transition: transform 0.8s ease-in-out;
	transform-style: preserve-3d;
	cursor: pointer;
}

.flip-card.flipped {
	transform: rotateX(180deg);
}

.flip-card-inner {
	position: relative;
	width: 100%;
	height: 100%;
	text-align: center;
	transition: transform 0.8s ease-in-out;
	transform-style: preserve-3d;
}

.flip-card-front, .flip-card-back {
	position: absolute;
	width: 100%;
	height: 100%;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	border-radius: 8px;
	overflow: hidden;
}

.flip-card-front {
	background: white;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid #e5e7eb;
}

.flip-card-back {
	background: white;
	transform: rotateX(180deg);
	display: flex;
	align-items: center;
	justify-content: center;
}

.placeholder-content {
	text-align: center;
	padding: 20px;
}

.placeholder-icon {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
}

.placeholder-image {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
}

.white-image-placeholder {
	width: 200px;
	height: 100px;
	background: #f3f4f6;
	border: 2px dashed #d1d5db;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.dark .white-image-placeholder {
	background: #374151;
	border-color: #4b5563;
}

.client-img {
	width: 300px;
	height: 160px;
	object-fit: contain;
	display: block;
}

/* Dark mode adjustments */
.dark .flip-card-front {
	background: #1f2937;
	border-color: #374151;
}

.dark .flip-card-back {
	background: #1f2937;
}

.dark .placeholder-content p {
	color: #9ca3af;
}

/* Hover effect for better UX */
.flip-card:hover {
	transform: scale(1.02);
}

.flip-card.flipped:hover {
	transform: rotateX(180deg) scale(1.02);
}
</style>
