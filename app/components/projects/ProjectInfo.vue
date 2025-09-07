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
                <a :href="getFinalDetails(info)" class="hover:underline cursor-pointer"
                  aria-label="Project Website and Phone" target="_blank">
                  {{ t(getFinalDetails(info).replace('project.info.', '')) }}
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
        <p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
          {{ t(projectInfo.technologies[0].title) }}
        </p>
        <div class="flex space-x-2">
          <div v-for="(smallImg, index) in smallImages" :key="index">
            <NuxtImg :src="smallImg.src" :alt="smallImg.alt" :style="{
    width: smallImg.width || '50px',
    height: smallImg.height || '50px'
  }" />
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
              <i :data-feather="social.icon" class="w-4 lg:w-5 h-4 lg:h-5"></i>
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
import feather from 'feather-icons';
import { onMounted, onUpdated, computed } from 'vue';
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

onMounted(() => {
  feather.replace();
});

onUpdated(() => {
  feather.replace();
});
</script>