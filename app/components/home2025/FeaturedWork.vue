<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLocalePath } from '#i18n';

import getProjects from '@/data/projects';
import settings from '@/configs';

const props = defineProps({
  limit: { type: Number, default: 6 },
});

const { t } = useI18n({ inheritLocale: true, useScope: 'global' });
const localePath = useLocalePath();

const projects = computed(() => getProjects(t));

const featuredProjects = computed(() => {
  const selectedIds = settings.home_list || [];
  const filtered = projects.value.filter((p) => selectedIds.includes(p.id) && !p.hide);

  const sorted = filtered.sort((a, b) => {
    const aIndex = selectedIds.indexOf(a.id);
    const bIndex = selectedIds.indexOf(b.id);
    return aIndex - bIndex;
  });

  return sorted.slice(0, props.limit);
});
</script>

<template>
  <section class="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
    <div class="flex items-end justify-between gap-6">
      <div>
        <p class="text-sm uppercase tracking-widest text-ternary-dark/60 dark:text-ternary-light/60">Featured</p>
        <h2 class="mt-2 text-2xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light">
          {{ t('Projects I worked On') }}
        </h2>
      </div>

      <NuxtLink
        :to="localePath('/Projects')"
        class="hidden sm:inline-flex items-center gap-2 rounded-xl border border-ternary-light/60 dark:border-ternary-dark/80 bg-white/60 dark:bg-ternary-dark/40 backdrop-blur px-4 py-2 text-sm font-medium text-primary-dark dark:text-primary-light hover:bg-white/80 dark:hover:bg-ternary-dark/60 transition"
      >
        {{ t('More Projects') }}
        <span aria-hidden="true">→</span>
      </NuxtLink>
    </div>

    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      <NuxtLink
        v-for="project in featuredProjects"
        :key="project.id"
        :to="localePath(`/projects/${project.link}`)"
        class="group rounded-2xl border border-ternary-light/60 dark:border-ternary-dark/80 bg-white/60 dark:bg-ternary-dark/40 backdrop-blur overflow-hidden shadow-sm hover:shadow-lg transition"
      >
        <div class="relative">
          <NuxtImg
            :src="project.img"
            :alt="t(project.title)"
            width="1200"
            height="800"
            class="w-full h-52 object-cover group-hover:scale-[1.02] transition-transform"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"></div>

          <div class="absolute left-4 right-4 bottom-4 flex items-center justify-between gap-3">
            <span class="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-900">
              {{ t(project.category) }}
            </span>
            <span class="inline-flex items-center rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white">
              {{ t('Details') }}
            </span>
          </div>
        </div>

        <div class="p-5">
          <h3 class="text-lg font-semibold text-primary-dark dark:text-primary-light line-clamp-2">
            {{ t(project.title) }}
          </h3>

          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="img in (project.smallImages || []).slice(0, 4)"
              :key="img.alt"
              class="inline-flex items-center gap-2 rounded-full border border-ternary-light/60 dark:border-ternary-dark/70 px-3 py-1 text-xs text-ternary-dark/80 dark:text-ternary-light/80"
            >
              <NuxtImg :src="img.src" :alt="img.alt" width="18" height="18" class="h-4 w-4 object-contain" />
              <span class="capitalize">{{ img.alt }}</span>
            </span>
          </div>
        </div>
      </NuxtLink>
    </div>

    <div class="mt-8 sm:hidden">
      <NuxtLink
        :to="localePath('/Projects')"
        class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 font-medium shadow-sm transition"
      >
        {{ t('More Projects') }}
        <span aria-hidden="true">→</span>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped></style>
