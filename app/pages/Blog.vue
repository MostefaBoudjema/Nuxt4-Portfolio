<template>
  <div class="blog-page">

    <BlogList :posts="posts"/>
  </div>
</template>

<script setup>
// import BlogList from '../components/blog/BlogList.vue';
import { useHead } from '#imports'
import { useI18n } from 'vue-i18n';

import posts from '@/data/posts.js';
const { t } = useI18n();
useHead({
  title: () => `${t('Blog')} - ${t('Mostefa Boudjema')}`
})
</script>

<style scoped>
.blog-page {
  padding: 2rem 0;
}
</style> 