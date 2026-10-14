<script setup>
import { useLocalePath } from '#i18n';

defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const localePath = useLocalePath();
</script>

<template>
  <article
    class="post group relative grid gap-5 md:gap-8 md:grid-cols-[17rem_1fr] border-t border-black/10 dark:border-white/10 py-8 sm:py-10"
  >
    <div
      v-if="post.coverImage || post.image"
      class="aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800"
    >
      <NuxtImg
        :src="post.coverImage || post.image"
        :alt="post.title"
        width="600"
        height="450"
        loading="lazy"
        class="block h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
      />
    </div>

    <div class="flex min-w-0 flex-col">
      <div
        class="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400"
      >
        <span v-if="post.category">{{ post.category }}</span>
        <time v-if="post.date">{{ post.date }}</time>
        <span v-if="post.readingTime">{{ post.readingTime }}</span>
        <span
          v-if="post.updatedAt && post.updatedAt !== post.date"
          class="normal-case tracking-normal"
        >
          {{ $t('blog.updated') }} {{ post.updatedAt }}
        </span>
        <span
          v-if="!post.published"
          class="rounded-full bg-red-500/10 px-2 py-0.5 text-red-600 dark:text-red-400"
        >
          {{ $t('blog.draft') }}
        </span>
      </div>

      <h2
        class="text-2xl sm:text-3xl font-semibold tracking-tight text-balance leading-snug"
      >
        <NuxtLink
          :to="localePath(`/blog/${post.slug}`)"
          class="decoration-2 underline-offset-4 group-hover:underline after:absolute after:inset-0 focus-visible:outline-none focus-visible:underline"
        >
          {{ post.title }}
        </NuxtLink>
      </h2>

      <p
        class="mt-3 line-clamp-3 text-start text-base leading-relaxed text-pretty text-neutral-600 dark:text-neutral-300"
      >
        {{ post.excerpt || post.summary }}
      </p>

      <div class="mt-auto flex items-center justify-between gap-4 pt-6">
        <div
          v-if="post.author?.name"
          class="flex items-center gap-2.5 text-sm text-neutral-600 dark:text-neutral-300"
        >
          <NuxtImg
            v-if="post.author.avatar"
            :src="post.author.avatar"
            :alt="post.author.name"
            width="28"
            height="28"
            class="size-7 rounded-full object-cover"
          />
          <span>{{ post.author.name }}</span>
        </div>

        <span
          class="ms-auto inline-flex items-center gap-1.5 text-sm font-medium"
        >
          {{ $t('blog.readMore') }}
          <svg
            class="size-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 motion-reduce:transition-none"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </div>
  </article>
</template>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .post {
      animation: post-in linear both;
      animation-timeline: view();
      animation-range: entry 0% entry 35%;
    }
  }
}

@keyframes post-in {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>