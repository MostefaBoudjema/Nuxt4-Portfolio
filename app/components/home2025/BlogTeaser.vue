<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLocalePath } from '#i18n';
import posts from '@/data/posts.js';

const props = defineProps({
  limit: { type: Number, default: 4 },
});

const { t, locale } = useI18n({ inheritLocale: true, useScope: 'global' });
const localePath = useLocalePath();

const filteredPosts = computed(() => {
  return (posts || [])
    .filter((p) => p.lang === locale.value)
    .filter((p) => p.published !== false)
    .slice()
    .reverse()
    .slice(0, props.limit);
});
</script>

<template>
  <section class="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
    <div class="flex items-end justify-between gap-6">
      <div>
        <p class="text-sm uppercase tracking-widest text-ternary-dark/60 dark:text-ternary-light/60">Writing</p>
        <h2 class="mt-2 text-2xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light">
          {{ $t('blog.latestArticle') }}
        </h2>
      </div>

      <NuxtLink
        :to="localePath('/Blog')"
        class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-ternary-light/60 dark:border-ternary-dark/80 bg-white/60 dark:bg-ternary-dark/40 backdrop-blur px-4 py-2 text-sm font-medium text-primary-dark dark:text-primary-light hover:bg-white/80 dark:hover:bg-ternary-dark/60 transition"
      >
        {{ t('More Articles') }}
        <span aria-hidden="true">→</span>
      </NuxtLink>
    </div>

    <div v-if="filteredPosts.length" class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <NuxtLink
        v-for="post in filteredPosts"
        :key="post.slug"
        :to="localePath(`/blog/${post.slug}`)"
        class="group rounded-2xl border border-ternary-light/60 dark:border-ternary-dark/80 bg-white/60 dark:bg-ternary-dark/40 backdrop-blur overflow-hidden shadow-sm hover:shadow-lg transition"
      >
        <NuxtImg
          :src="post.coverImage"
          :alt="post.title"
          width="1000"
          height="700"
          class="w-full h-44 object-cover group-hover:scale-[1.02] transition-transform"
        />
        <div class="p-5">
          <p class="text-xs text-ternary-dark/60 dark:text-ternary-light/60">
            {{ post.readingTime }}
          </p>
          <h3 class="mt-2 text-base font-semibold text-primary-dark dark:text-primary-light line-clamp-2">
            {{ post.title }}
          </h3>
          <p class="mt-2 text-sm text-ternary-dark/80 dark:text-ternary-light/80 line-clamp-3">
            {{ post.summary || post.excerpt }}
          </p>
        </div>
      </NuxtLink>
    </div>

    <div v-else class="mt-8 rounded-2xl border border-ternary-light/60 dark:border-ternary-dark/80 bg-white/60 dark:bg-ternary-dark/40 backdrop-blur p-6 text-center text-ternary-dark/70 dark:text-ternary-light/70">
      {{ $t('blog.noPosts') }}
    </div>

    <div class="mt-8 sm:hidden">
      <NuxtLink
        :to="localePath('/Blog')"
        class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 font-medium shadow-sm transition"
      >
        {{ t('More Articles') }}
        <span aria-hidden="true">→</span>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped></style>
