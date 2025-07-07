<template>
  <div class="container mx-auto">
    <div class="blog-list font-general-regular text-ternary-dark dark:text-ternary-light">
      <div class="text-center">
      <p class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">
        {{$t('blog.latestArticle')}}
      </p>
    </div>
      <BlogPost
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
</template>

<script>
import BlogPost from './BlogPost.vue';
import posts from '../../data/posts.js';

export default {
  name: 'BlogList',
  components: {
    BlogPost
  },
  data() {
    return {
      posts: posts.filter(post => post.published).map(post => ({
        ...post,
        image: `https://picsum.photos/600/300?random=${post.id}`
      }))
    };
  },
  created() {
    // No need to reassign posts here, logic moved to data()
  }
}
</script>

<style scoped>
.blog-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style> 