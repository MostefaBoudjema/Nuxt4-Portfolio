<script setup>
import { useI18n } from 'vue-i18n';
import { useLocalePath } from '#i18n';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  message: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'page' // 'page', 'post', 'project'
  }
});

const { t } = useI18n();
const localePath = useLocalePath();

const defaultTitle = computed(() => {
  if (props.title) return props.title;
  switch (props.type) {
    case 'post': return t('blog.postNotFound', 'Blog Post Not Found');
    case 'project': return t('projects.projectNotFound', 'Project Not Found');
    default: return t('PageNotFound', 'Page Not Found');
  }
});

const defaultMessage = computed(() => {
  if (props.message) return props.message;
  switch (props.type) {
    case 'post': return t('blog.postNotFoundDesc', "The blog post you're looking for doesn't exist or has been moved.");
    case 'project': return t('projects.projectNotFoundDesc', "The project you're looking for doesn't exist or has been moved.");
    default: return t('PageNotFoundDesc', "The page you're looking for doesn't exist or has been moved.");
  }
});

const backLink = computed(() => {
  switch (props.type) {
    case 'post': return localePath('/blog');
    case 'project': return localePath('/projects');
    default: return localePath('/');
  }
});

const backLabel = computed(() => {
  switch (props.type) {
    case 'post': return t('blog.backToBlog', 'Back to Blog');
    case 'project': return t('projects.backToProjects', 'Back to Projects');
    default: return t('GoHome', 'Go Back Home');
  }
});
</script>

<template>
  <div class="flex flex-col items-center justify-center py-20 px-4 text-center">
    <div class="relative mb-8">
      <!-- Decorative background elements -->
      <div class="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-full"></div>
      
      <!-- Icon/Visual -->
      <div class="relative bg-white dark:bg-ternary-dark p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
        <i v-if="type === 'post'" class="bi bi-journal-x text-6xl text-blue-500"></i>
        <i v-else-if="type === 'project'" class="bi bi-folder-x text-6xl text-purple-500"></i>
        <i v-else class="bi bi-exclamation-octagon text-6xl text-red-500"></i>
      </div>
    </div>

    <h2 class="text-3xl md:text-4xl font-bold text-primary-dark dark:text-primary-light mb-4">
      {{ defaultTitle }}
    </h2>
    
    <p class="text-lg text-ternary-dark dark:text-ternary-light max-w-md mx-auto mb-10">
      {{ defaultMessage }}
    </p>

    <div class="flex flex-col sm:flex-row gap-4">
      <NuxtLink 
        :to="backLink"
        class="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-500/25 transform hover:scale-105"
      >
        <i class="bi bi-arrow-left me-2"></i>
        {{ backLabel }}
      </NuxtLink>
      
      <NuxtLink 
        :to="localePath('/contact')"
        class="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-primary-dark dark:text-primary-light font-medium hover:bg-gray-50 dark:hover:bg-ternary-dark transition-all transform hover:scale-105"
      >
        <i class="bi bi-envelope me-2"></i>
        {{ t('ContactSupport', 'Report Problem') }}
      </NuxtLink>
    </div>
  </div>
</template>
