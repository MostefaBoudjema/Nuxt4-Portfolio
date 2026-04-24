<template>
  <div class="blog-page">

    <div v-if="pending" class="container mx-auto px-4 space-y-6">
        <ReusableBlogSkeleton v-for="i in 4" :key="i" />
    </div>
    <BlogList v-else :posts="posts"/>
  </div>
</template>

<script setup>
// import BlogList from '../components/blog/BlogList.vue';
import { useHead } from '#imports'
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
useHead({
  title: () => `${t('Blog')} - ${t('Mostefa Boudjema')}`
})

const { data: posts, pending } = await useFetch('/api/v1/posts', {
  lazy: true
});
</script>

<style scoped>
.blog-page {
  padding: 2rem 0;
}
</style> 