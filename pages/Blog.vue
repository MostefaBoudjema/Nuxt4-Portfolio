<template>
  <div class="blog-page">
    
    <BlogList />
  </div>
</template>

<script setup>
import AppHeader from '~/components/shared/AppHeader.vue';
import BlogList from '../components/blog/BlogList.vue';
import { useHead } from '#imports'
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
useHead({
  title: () => `${t('Blog')} - Mostefa Boudjema`
})
</script>

<style scoped>
.blog-page {
  padding: 2rem 0;
}
</style> 