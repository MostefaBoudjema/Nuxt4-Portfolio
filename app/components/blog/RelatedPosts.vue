<template>
  <div class="related-posts bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
    <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
      {{ $t('blog.relatedPosts') || 'Related Posts' }}
    </h3>
    
    <div v-if="relatedPosts.length > 0" class="space-y-4">
      <div 
        v-for="post in relatedPosts" 
        :key="post.id"
        class="related-post-card hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg p-4 transition-all duration-200 border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
      >
        <div class="block cursor-pointer" @click="navigateToPost(post.slug)">
          <div class="flex gap-3">
            <!-- Post Image -->
            <div class="flex-shrink-0">
              <img 
                :src="post.coverImage || post.image" 
                :alt="post.title"
                class="w-16 h-16 object-cover rounded-lg border border-gray-200 dark:border-gray-600"
              />
            </div>
            
            <!-- Post Content -->
            <div class="flex-1 min-w-0">
              <h4 class="font-semibold text-sm text-gray-900 dark:text-gray-100 line-clamp-2 mb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {{ post.title }}
              </h4>
              
              <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <span>{{ formatDate(post.date) }}</span>
                <span v-if="post.readingTime">• {{ post.readingTime }}</span>
              </div>
              
              <!-- Tags -->
              <div v-if="post.tags && post.tags.length" class="flex flex-wrap gap-1 mt-2">
                <span 
                  v-for="tag in post.tags.slice(0, 2)" 
                  :key="tag"
                  class="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-xs px-2 py-0.5 rounded-full"
                >
                  {{ tag }}
                </span>
                <span v-if="post.tags.length > 2" class="text-xs text-gray-500 dark:text-gray-400">
                  +{{ post.tags.length - 2 }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="text-center py-8 text-gray-500 dark:text-gray-400">
      <p>{{ $t('blog.noRelatedPosts') || 'No related posts found.' }}</p>
    </div>
  </div>
</template>

<script setup>
import posts from '@/data/posts.js';

import { useLocalePath, useRouter } from '#imports';
const localePath = useLocalePath();
const router = useRouter && useRouter();

const props = defineProps({
  currentPost: {
    type: Object,
    required: true
  },
  maxPosts: {
    type: Number,
    default: 3
  }
});

const relatedPosts = computed(() => {
  if (!props.currentPost) return [];
  const currentTags = props.currentPost.tags || [];
  const currentCategory = props.currentPost.category;
  const related = posts
    .filter(post => post.id !== props.currentPost.id && post.published !== false && props.currentPost.lang === post.lang)
    .map(post => {
      let score = 0;
      if (post.tags) {
        const matchingTags = post.tags.filter(tag =>
          currentTags.some(currentTag =>
            currentTag.toLowerCase().includes(tag.toLowerCase()) ||
            tag.toLowerCase().includes(currentTag.toLowerCase())
          )
        );
        score += matchingTags.length * 2;
      }
      if (post.category && currentCategory && post.category.toLowerCase() === currentCategory.toLowerCase()) {
        score += 3;
      }
      return { ...post, score };
    })
    .filter(post => post.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, props.maxPosts);
  return related;
});

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

function navigateToPost(slug) {
  // Use Nuxt localePath for localized navigation
  const path = localePath(`/blog/${slug}`);
  if (typeof navigateTo === 'function') {
    navigateTo(path);
  } else if (router && typeof router.push === 'function') {
    router.push(path);
  } else {
    window.location.href = path;
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.related-post-card {
  transition: all 0.2s ease-in-out;
}

.related-post-card:hover {
  transform: translateY(-1px);
}
</style> 