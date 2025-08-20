<template>
  <div class="blog-page">
    
    <BlogList :posts="privates"/>
  </div>
</template>

<script setup>
// import BlogList from '../components/blog/BlogList.vue';
import { useHead } from '#imports'
import { useI18n } from 'vue-i18n';

import { privates } from '@/data/posts.js';
const { t } = useI18n();
useHead({
  title: () => `${t('Private')} - ${t('Mostefa Boudjema')}`
})
</script>

<style scoped>
.blog-page {
  padding: 2rem 0;
}
</style> 