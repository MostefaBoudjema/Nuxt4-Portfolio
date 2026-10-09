
<template>
  <section class="px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
    <div class="sm:container sm:mx-auto">
      <div class="flex items-end justify-between gap-6 mb-10">
        <div>
          <h2 class="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-primary-light">
            {{ $t('Ideas & Strategies to Grow Your Business Online') }}
          </h2>
          <p class="mt-2 text-sm sm:text-base text-ternary-dark/50 dark:text-ternary-light/50">
            {{ $t('BlogTeaserSubtext') }}
          </p>
        </div>

        <NuxtLink
          :to="localePath('/Blog')"
          class="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-primary-dark dark:text-primary-light hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150 shrink-0"
        >
          {{ t('More Articles') }}
          <span aria-hidden="true">→</span>
        </NuxtLink>
      </div>

      <div v-if="pending" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="i in 4" :key="i" class="rounded-xl border border-ternary-dark/6 dark:border-ternary-light/6 overflow-hidden">
          <ReusableSkeleton height="h-44" rounded="rounded-none" />
          <div class="p-5 space-y-3">
            <ReusableSkeleton width="w-1/4" height="h-3" />
            <ReusableSkeleton width="w-full" height="h-5" />
            <ReusableSkeleton width="w-full" height="h-4" />
            <ReusableSkeleton width="w-2/3" height="h-4" />
          </div>
        </div>
      </div>
      <div v-else-if="filteredPosts.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <NuxtLink
          v-for="post in filteredPosts"
          :key="post.slug"
          :to="localePath(`/blog/${post.slug}`)"
          class="group rounded-xl border border-ternary-dark/6 dark:border-ternary-light/6 overflow-hidden hover:border-ternary-dark/12 dark:hover:border-ternary-light/12 transition-colors duration-200"
        >
          <div class="overflow-hidden">
            <NuxtImg
              :src="post.coverImage"
              :alt="post.title"
              width="1000"
              height="700"
              class="w-full h-44 object-cover group-hover:scale-[1.02] transition-transform duration-300 will-change-transform"
            />
          </div>
          <div class="p-5">
            <p class="text-xs text-ternary-dark/40 dark:text-ternary-light/40">
              {{ formatDate(post.updatedAt) }} · {{ post.readingTime }}
            </p>
            <h3 class="mt-2 text-base font-semibold text-primary-dark dark:text-primary-light line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150">
              {{ post.title }}
            </h3>
            <p class="mt-2 text-sm text-ternary-dark/60 dark:text-ternary-light/60 line-clamp-3">
              {{ post.summary || post.excerpt }}
            </p>
          </div>
        </NuxtLink>
      </div>
      <div v-else class="rounded-xl border border-ternary-dark/6 dark:border-ternary-light/6 p-6 text-center text-ternary-dark/50 dark:text-ternary-light/50">
        {{ $t('blog.noPosts') }}
      </div>

      <div class="mt-8 sm:hidden">
        <NuxtLink
          :to="localePath('/Blog')"
          class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-dark dark:bg-primary-light text-primary-light dark:text-primary-dark px-5 py-3 font-medium transition-opacity hover:opacity-90"
        >
          {{ t('More Articles') }}
          <span aria-hidden="true">→</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLocalePath } from '#i18n';

const props = defineProps({
  limit: { type: Number, default: 4},
});

const { formatDate } = useFormatDate();

const { t, locale } = useI18n({ inheritLocale: true, useScope: 'global' });
const localePath = useLocalePath();

const { data: posts, pending } = await useFetch(() => `/api/v1/posts?limit=${props.limit}&lang=${locale.value}`, {
  lazy: true
});

const filteredPosts = computed(() => {
  return (posts.value || [])
    .filter((p) => p.published !== false);
});
</script>

<style scoped></style>
