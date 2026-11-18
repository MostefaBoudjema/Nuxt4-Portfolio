<template>
  <div class="block sm:flex gap-0 sm:gap-10 mt-14" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <!-- Left section -->
    <div class="w-full sm:w-1/3 ">
      <!-- Client details -->
      <div class="mb-7">
        <p class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2">
          {{ t(projectInfo.clientHeading) }}
        </p>
        <ul class="leading-loose">
          <li v-for="(info, index) in projectInfo.companyInfos" :key="index"
            class="font-general-regular text-ternary-dark dark:text-ternary-light">
            <div v-if="info.details !== '#'">
              <span>{{ t(info.title) }}: </span>

              <template v-if="info.title === 'Website'">
                <a :href="getFinalDetails(info)" 
                  class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition hover:shadow cursor-pointer mt-1"
                  aria-label="Project Website" target="_blank" rel="noopener noreferrer">
                  <span>{{ isRawIp(getFinalDetails(info)) ? t('Visit Live Site') : formatDisplayUrl(getFinalDetails(info)) }}</span>
                  <i class="bi bi-box-arrow-up-right text-[11px]"></i>
                </a>
              </template>

              <span v-else>{{ getFinalDetails(info) }}</span>
            </div>
          </li>
        </ul>
      </div>

      <!-- Objectives -->
      <div class="mb-7">
        <p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
          {{ t(projectInfo.objectivesHeading) }}
        </p>
        <p class="font-general-regular text-primary-dark dark:text-ternary-light">
          {{ t(projectInfo.objectivesDetails) }}
        </p>
      </div>

      <!-- Technologies -->
      <div class="mb-7">
        <p v-if="projectInfo.technologies?.length" class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-3">
          {{ t(projectInfo.technologies[0].title) }}
        </p>
        <div class="flex flex-wrap gap-2.5">
          <div v-for="(smallImg, index) in smallImages" :key="index"
            class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm transition hover:border-blue-500/50">
            <NuxtImg :src="smallImg.src" :alt="smallImg.alt" class="w-5 h-5 object-contain" />
            <span class="font-medium">{{ formatTechName(smallImg.alt) }}</span>
          </div>
        </div>
      </div>

      <!-- Social sharing -->
      <div v-if="projectInfo.socialSharings.some(social => social.url !== '#')">
        <p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
          {{ t(projectInfo.socialSharingsHeading) }}
        </p>
        <div class="flex items-center gap-3 mt-5">
          <template v-for="social in projectInfo.socialSharings" :key="social.id">
            <a v-if="social.url !== '#'" :href="social.url" target="_blank" aria-label="Share Project"
              class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500">
              <i :class="`bi bi-${social.icon} w-4 lg:w-5 h-4 lg:h-5`" ></i>
            </a>
          </template>
        </div>
      </div>

    </div>

    <!-- Right section -->
    <div class="w-full sm:w-2/3 mt-10 sm:mt-0">
      <p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
        {{ t(projectInfo.projectDetailsHeading) }}
      </p>
      <p v-for="projectDetail in projectInfo.projectDetails" :key="projectDetail.id"
        class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
        {{ t(projectDetail.details) }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const props=defineProps({
  projectInfo: {
    type: Object,
    required: true
  },
  smallImages: {
    type: Array,
    required: true
  }
});

const { locale, t }=useI18n();

const getFinalDetails=(info) => {
  return locale.value==='ar'? (info.detailsAr||info.details):info.details;
};

const isRawIp = (url) => {
  if (!url) return false;
  return /(?:https?:\/\/)?(?:\d{1,3}\.){3}\d{1,3}/.test(url);
};

const formatDisplayUrl = (url) => {
  if (!url) return '';
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
};

const techNameMap = {
  laravel: 'Laravel',
  vue: 'Vue.js',
  php: 'PHP',
  bootstrap: 'Bootstrap',
  react: 'React',
  nuxt: 'Nuxt',
  tailwind: 'Tailwind CSS',
  filament: 'Filament',
  next: 'Next.js',
  supabase: 'Supabase',
  firebase: 'Firebase',
  wordpress: 'WordPress',
  jquery: 'jQuery',
  api: 'REST API',
  javascript: 'JavaScript',
};

const formatTechName = (alt) => {
  if (!alt) return '';
  const key = String(alt).toLowerCase().trim();
  return techNameMap[key] || (key.charAt(0).toUpperCase() + key.slice(1));
};
</script>