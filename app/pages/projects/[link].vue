<script setup>
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
// import ProjectGallery from "@/components/projects/ProjectGallery.vue";
import ProjectInfo from "@/components/projects/ProjectInfo.vue";
import ProjectRelatedProjects from "@/components/projects/ProjectRelatedProjects.vue";
import ProjectSkeleton from "@/components/projects/ProjectSkeleton.vue";
import NotFoundState from "@/components/shared/NotFoundState.vue";

import { ref, watch, onMounted } from "vue";
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useHead } from '#imports'
import { useJsonLd } from '~/composables/useJsonLd'

const route = useRoute();
const { t } = useI18n();
const { useProjectJsonLd } = useJsonLd();

const { data: projectData, pending: projectPending } = await useFetch(`/api/v1/projects/${route.params.link}`, {
  lazy: true
});
const { data: relatedProject, pending: relatedPending } = await useFetch('/api/v1/related-projects', {
  lazy: true
});

const project = ref(null);

watch(projectData, (newData) => {
  if (newData) {
    project.value = newData;
  } else if (!projectPending.value) {
    project.value = null;
  }
}, { immediate: true });

useHead(() => ({
  title: project.value 
    ? `${project.value.title || project.value.name || 'Project'} - ${t('Mostefa Boudjema')}`
    : `${t('Mostefa Boudjema')}`
}));

useProjectJsonLd(() => project.value);

watch(() => route.params.link, () => {
  if (projectData.value) {
    project.value = projectData.value;
  }
});
</script>

<template>
    <div class="container mx-auto sm:mt-20 px-4">
        <!-- Skeleton Loading -->
        <ProjectSkeleton v-if="projectPending" />

        <!-- Project content -->
        <template v-else-if="project">
            <!-- Project header -->
            <ProjectHeader
                :singleProjectHeader="project.singleProjectHeader"
                :imgList="project.projectImages"
                :video="project.video"
                :title="project.title"
            />
            <!-- Project information -->
            <ProjectInfo :projectInfo="project.projectInfo" :smallImages="project.smallImages"/>
            <div class="block sm:flex gap-0 sm:gap-10 mt-14">
                <!-- Project related projects -->
                <ProjectRelatedProjects v-if="!relatedPending" :relatedProject="relatedProject" />
                <div v-else class="w-full">
                    <div class="h-10 w-48 bg-gray-200 dark:bg-gray-700 animate-pulse mb-10 rounded"></div>
                    <div class="grid grid-cols-1 sm:grid-cols-4 sm:gap-10 mt-12">
                        <div v-for="i in 4" :key="i" class="h-40 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-xl"></div>
                    </div>
                </div>
            </div>
        </template>

        <!-- Not Found State -->
        <NotFoundState 
          v-else 
          type="project"
        />
    </div>
</template>

<style scoped></style>
