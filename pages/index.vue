<template>
  <div class="p-8">

    <!-- Banner -->
    <AppBanner class="mb-5 sm:mb-8 mt-8" />

    <!-- Projects -->
    <div class="sm:container sm:mx-auto">
      <ProjectsGrid data-aos="fade-up" data-aos-delay="200"/>

      <!-- Load more projects button -->
      <div class="mt-10 sm:mt-20 flex justify-center">
        <NuxtLink
          :to="localePath('/projects')"
          class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-blue-500 hover:bg-blue-600 focus:ring-1 focus:ring-blue-900 text-white text-lg sm:text-xl duration-300"
          aria-label="More Projects"
        >
          <Button :title="$t('More Projects')"/>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppBanner from '@/components/shared/AppBanner';
import ProjectsGrid from '@/components/projects/ProjectsGrid.vue';
import Button from '@/components/reusable/Button.vue';

import { useI18n } from 'vue-i18n';
import { useHead } from '#imports'
import { useLocalePath } from '#i18n';

const localePath = useLocalePath();

const { t } = useI18n({
    inheritLocale: true,
    useScope: "global",
});
useHead({
  title: () => `${t('Home')} - ${t('Mostefa Boudjema')}`
})
</script>

<style scoped></style>
