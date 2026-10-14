<script setup>
import BlogPost from './BlogPost.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
});

const { locale } = useI18n();

const filteredPosts = computed(() =>
  props.posts
    .filter((post) => post.lang === locale.value)
    .map((post) => ({
      ...post,
      image: `https://picsum.photos/600/450?random=${post.id}`,
    }))
);
</script>

<template>
  <section
    class="mx-auto w-full max-w-5xl px-4 sm:px-6 py-12 sm:py-20 text-ternary-dark dark:text-ternary-light font-general-regular"
  >
    <header class="mb-10 sm:mb-14 max-w-2xl">
      <h1
        class="font-general-semibold text-4xl sm:text-6xl font-semibold tracking-tight text-balance leading-[1.05]"
      >
        {{ $t('blog.latestArticle') }}
      </h1>
    </header>

    <div
      v-if="filteredPosts.length"
      class="border-b border-black/10 dark:border-white/10"
    >
      <BlogPost v-for="post in filteredPosts" :key="post.id" :post="post" />
    </div>

    <div
      v-else
      class="rounded-2xl border border-dashed border-black/15 dark:border-white/15 px-6 py-16 text-center"
    >
      <p class="text-base text-neutral-500 dark:text-neutral-400">
        {{ $t('blog.noPosts') }}
      </p>
    </div>
  </section>
</template>