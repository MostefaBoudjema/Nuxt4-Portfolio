<template>
	<section class="pt-10 sm:pt-14">
		<div class="blog-list font-general-regular text-ternary-dark dark:text-ternary-light">
			<div class="text-center mb-10">
				<p
					class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">
					{{ $t('blog.latestArticle') }}
				</p>
			</div>

			<div v-if="filteredPosts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				<div v-for="post in filteredPosts" :key="post.id" class="relative">
					<NuxtLink :to="localePath(`/blog/${post.slug}`)"
						class="block group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
						<img :src="post.coverImage" alt="post thumbnail"
							class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />

						<!-- Title overlay -->
						<div
							class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
							<h3 class="text-white text-lg font-semibold text-center px-2">
								{{ post.title }}
							</h3>
						</div>
					</NuxtLink>
				</div>

			</div>
			<div v-else class="text-center mt-10">
				<p class="text-lg text-gray-500 dark:text-gray-400">
					{{ $t('blog.noPosts') }}
				</p>
			</div>
		</div>
	</section>
</template>
<script setup>
import posts from '@/data/posts.js';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

import { useLocalePath } from '#i18n'
const localePath=useLocalePath();

const { locale }=useI18n();

const filteredPosts=computed(() => {
	return (posts||[])
		.filter(post => post.lang===locale.value)
		.reverse()
		.slice(-4) // take the last 4 posts
		.map(post => ({
			...post,
			image: `https://picsum.photos/600/300?random=${post.id}`,
		}));
});
</script>