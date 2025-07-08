<template>
  <div class="blog-page">
    
    <BlogList />
  </div>
</template>

<script setup>
import AppHeader from '~/components/shared/AppHeader.vue';
import BlogList from '../components/blog/BlogList.vue';
</script>

<style scoped>
.blog-page {
  padding: 2rem 0;
}
</style> 