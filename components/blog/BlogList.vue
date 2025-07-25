<script setup>
import BlogPost from './BlogPost.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const props=defineProps({
  posts: {
    type: Array,
    required: true,
  },
});

const { locale }=useI18n();

const filteredPosts=computed(() => {
  return (props.posts||[])
    .filter(post => post.lang===locale.value)
    .map(post => ({
      ...post,
      image: `https://picsum.photos/600/300?random=${post.id}`,
    }));
});
</script>

<template>
  <div class="container mx-auto">
    <div class="blog-list font-general-regular text-ternary-dark dark:text-ternary-light">
      <div class="text-center">
        <p
          class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">
          {{ $t('blog.latestArticle') }}
        </p>
      </div>
      <div v-if="filteredPosts.length > 0">
        <BlogPost v-for="post in filteredPosts" :key="post.id" :post="post" />
      </div>
      <div v-else class="text-center mt-10">
        <p class="text-lg text-gray-500 dark:text-gray-400">
          {{ $t('blog.noPosts') }}
        </p>
      </div>
    </div>
  </div>
</template>
