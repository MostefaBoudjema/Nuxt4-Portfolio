<template>
  <div class="single-blog-page container mx-auto py-12 max-w-7xl">
    <div v-if="post" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Main Content -->
      <div class="lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl shadow-lg md:p-8 transition-all duration-300">
        <!-- Breadcrumb -->
        <nav class="text-sm text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
          <router-link v-if="post.private" :to="localePath('/private')" class="hover:underline text-blue-600 dark:text-blue-400">{{$t("Private")}}</router-link>
          <router-link v-else :to="localePath('/blog')" class="hover:underline text-blue-600 dark:text-blue-400">{{$t("Blog")}}</router-link>
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
            <div class="text-blue-600 dark:text-blue-400 text-sm">{{ post.author.bio || 'Author' }}</div>
          </div>
        </div>
      </div>

      <!-- Sidebar with Related Posts -->
      <div class="lg:col-span-1">
        <RelatedPosts :current-post="post" :max-posts="6" />
      </div>
    </div>
    <div v-else class="py-24 text-center text-xl text-red-500 dark:text-red-400">
      {{$t('blog.notFound') || 'Blog post not found.'}}
    </div>
  </div>
</template>

<script setup>
import { marked } from 'marked';
import {postsList as posts} from '@/data/posts.js';
import RelatedPosts from '@/components/blog/RelatedPosts.vue';
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '#imports';
import { useLocalePath } from '#i18n';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const localePath = useLocalePath();

const route = useRoute();
const post = ref(null);
const today=new Date();
const yyyy=today.getFullYear();
const mm=String(today.getMonth()+1).padStart(2, '0');
const dd=String(today.getDate()).padStart(2, '0');
const todayStr=`${yyyy}-${mm}-${dd}`;

const loadPost = () => {
  const slug = route.params.slug;
  // Find the post by slug
  const found = posts.find(p => p.slug === slug);
  if (found) {
    // Add fallback image if missing
    post.value = {
      ...found,      
      private: new Date(found.updatedAt)>new Date(todayStr),
      image: found.coverImage || found.image || `https://picsum.photos/600/300?random=${found.id}`
    };
  } else {
    post.value = null;
  }
};

// Watch for route changes
watch(() => route.params.slug, () => {
  loadPost();
}, { immediate: true });

// Computed property for formatted content
const formattedContent = computed(() => {
  if (!post.value) return '';
  const content = post.value.content || post.value.body || '';
  // Use marked to render Markdown to HTML
  return marked.parse(content);
});

// Dynamic head management
const title = computed(() => {
  if (post.value) {
    return `${post.value.title} - ${t('Mostefa Boudjema')}`;
  }
  return `${t('Blog Post Not Found')} - ${t('Mostefa Boudjema')}`;
});

const description = computed(() => {
  if (post.value) {
    return post.value.metaDescription || post.value.excerpt || post.value.summary || '';
  }
  return 'Blog post not found.';
});

// Set the head using useHead
useHead(() => ({
  title: title.value
}));
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

/* Code block and long text wrapping styles */
:deep(.prose pre) {
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
  background-color: #1f2937;
  color: #f9fafb;
  padding: 1rem;
  border-radius: 00.5em;
  margin: 1rem 0;
  border:1px solid #374151;
}

:deep(.prose code) {
  background-color: #f3f4f6;
  color: #1f2937;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.875em;
}

:deep(.prose pre code) {
  background-color: transparent;
  color: inherit;
  /* text-align: start; */
  padding: 0;
  border-radius: 0;
  font-size: inherit;
}

/* Ensure all code blocks are scrollable */
:deep(.prose pre::-webkit-scrollbar) {
  height: 8px;
}

:deep(.prose pre::-webkit-scrollbar-track) {
  background: #374151;
  border-radius: 4px;
}

:deep(.prose pre::-webkit-scrollbar-thumb) {
  background: #6b7280;
  border-radius: 4px;
}

:deep(.prose pre::-webkit-scrollbar-thumb:hover) {
  background: #9ca3af;
}

/* Dark mode adjustments */
.dark :deep(.prose pre) {
  background-color: #111827;
  border-color: #374151;
}

.dark :deep(.prose code) {
  background-color: #374151;
  color: #f9fafb;
}

/* Make long text wrap to new lines */
:deep(.prose p) {
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}

:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3),
:deep(.prose h4),
:deep(.prose h5),
:deep(.prose h6) {
  word-wrap: break-word;
  overflow-wrap: break-word;
}

:deep(.prose li) {
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* Long inline code should wrap */
:deep(.prose p code) {
  word-break: break-all;
  white-space: pre-wrap;
  max-width: 100%;
  display: inline-block;
}

/* Make sure tables are also scrollable */
:deep(.prose table) {
  overflow-x: auto;
  display: block;
  white-space: nowrap;
}

:deep(.prose table::-webkit-scrollbar) {
  height: 8px;
}

:deep(.prose table::-webkit-scrollbar-track) {
  background: #f3f4f6;
  border-radius: 4px;
}

:deep(.prose table::-webkit-scrollbar-thumb) {
  background: #d1d5db;
  border-radius: 4px;
}

:deep(.prose hr) {
  /* border-top: 2px solid #3b82f6; Tailwind blue-500 */
  margin: 2rem 0;
}

.dark :deep(.prose table::-webkit-scrollbar-track) {
  background: #374151;
}

.dark :deep(.prose table::-webkit-scrollbar-thumb) {
  background: #6b7280;
}
</style> 