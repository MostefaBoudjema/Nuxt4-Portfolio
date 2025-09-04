<template>
  <div class="p-8">

    <!-- Banner -->
    <HomeAppBanner class="mb-5 sm:mb-8 mt-8" />
    <!-- Projects -->
    <div class="sm:container sm:mx-auto">
      <ProjectsGrid data-aos="fade-up" data-aos-delay="200" />

      <!-- Load more projects button -->
      <ReusableMoreBtn text="More Projects" link="/Projects" />
    </div>
    <!-- Blog -->
    <div class="sm:container sm:mx-auto">
      <HomeBlogItems data-aos="fade-up" data-aos-delay="200" />
      <ReusableMoreBtn text="More Articles" link="/Blog" />
    </div>

  </div>
</template>

<script setup>

import { useI18n } from 'vue-i18n';
import { useHead } from '#imports'
import { useLocalePath } from '#i18n';

const localePath=useLocalePath();

const { t }=useI18n({
  inheritLocale: true,
  useScope: "global",
});
useHead({
  title: () => `${t('Home')} - ${t('Mostefa Boudjema')}`,
  meta: [
    {
      name: 'description',
      content: t('meta.home.description')
    },
    {
      name: 'keywords',
      content: t('meta.home.keywords')
    }
  ],
})
</script>

<style scoped></style>
