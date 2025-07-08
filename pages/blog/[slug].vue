<template>
  <div class="single-blog-page container mx-auto py-12 max-w-5xl">
    <div v-if="post" class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 transition-all duration-300">
      <!-- Breadcrumb -->
      <nav class="text-sm text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
        <NuxtLink to="/blog" class="hover:underline text-blue-600 dark:text-blue-400">Articles</NuxtLink>
        <span>/</span>
        <span class="truncate">{{ post.title }}</span>
      </nav>

      <!-- Title -->
      <h1 class="text-4xl font-bold mb-3 leading-tight text-gray-900 dark:text-gray-100">{{ post.title }}</h1>

      <!-- Meta info -->
      <div class="flex flex-wrap items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-4">
        <span>{{ post.date }}</span>
        <span v-if="post.readingTime">• {{ post.readingTime }}</span>
        <span v-if="post.category">• {{ post.category }}</span>
      </div>

      <!-- Tags -->
      <div v-if="post.tags && post.tags.length" class="mb-6 flex flex-wrap gap-2">
        <span v-for="tag in post.tags" :key="tag" class="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">{{ tag }}</span>
      </div>

      <!-- Cover Image -->
      <div v-if="post.coverImage || post.image" class="mb-8 flex justify-center">
        <img :src="post.coverImage || post.image" :alt="post.title" class="object-cover rounded-lg w-full max-h-80 border border-gray-200 dark:border-gray-700" />
      </div>

      <!-- Excerpt -->
      <p v-if="post.excerpt" class="text-lg text-gray-700 dark:text-gray-300 mb-6 italic border-l-4 border-blue-400 pl-4">{{ post.excerpt }}</p>

      <!-- Content -->
      <div class="prose prose-lg dark:prose-invert max-w-none mb-10 transition-all duration-300 px-4 py-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 overflow-x-auto" v-html="formattedContent"></div>

      <!-- Author Card -->
      <div v-if="post.author && post.author.name!='Mostefa Boudjema'" class="flex items-center gap-4 mt-12 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm border-t border-gray-200 dark:border-gray-700 pt-6">
        <img v-if="post.author.avatar" :src="post.author.avatar" :alt="post.author.name" class="w-14 h-14 rounded-full border object-cover" />
        <div>
          <div class="font-semibold text-lg text-gray-900 dark:text-gray-100">{{ post.author.name }}</div>
          <div class="text-blue-600 dark:text-blue-400 text-sm">{{ post.author.role || 'Author' }}</div>
        </div>
      </div>
    </div>
    <div v-else class="py-24 text-center text-xl text-red-500 dark:text-red-400">
      {{$t('blog.notFound') || 'Blog post not found.'}}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { marked } from 'marked';
import posts from '../data/posts.js';

const route = useRoute();
const post = ref(null);

onMounted(() => {
  const slug = route.params.slug;
  // Find the post by slug
  const found = posts.find(p => p.slug === slug);
  if (found) {
    // Add fallback image if missing
    post.value = {
      ...found,
      image: found.coverImage || found.image || `https://picsum.photos/600/300?random=${found.id}`
    };
  }
});

const formattedContent = computed(() => {
  if (!post.value) return '';
  const content = post.value.content || post.value.body || '';
  // Use marked to render Markdown to HTML
  return marked.parse(content);
});
</script>

<style scoped>
.single-blog-page {
  min-height: 70vh;
}
.single-blog-page > div {
  animation: fadeIn 0.7s;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(24px);}
  to { opacity: 1; transform: none;}
}
</style> 