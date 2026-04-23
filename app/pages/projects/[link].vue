<script setup>
import feather from "feather-icons";
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
// import ProjectGallery from "@/components/projects/ProjectGallery.vue";
import ProjectInfo from "@/components/projects/ProjectInfo.vue";
import ProjectRelatedProjects from "@/components/projects/ProjectRelatedProjects.vue";

import { ref, watch, onMounted, onUpdated } from "vue";
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useHead } from '#imports'

const route = useRoute();
const { t } = useI18n();

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
    useHead({
      title: `${newData.title || newData.name || 'Project'} - ${t('Mostefa Boudjema')}`
    })
  }
}, { immediate: true });

function fetchProject() {
  if (projectData.value) {
    project.value = projectData.value;
    useHead({
      title: `${project.value.title || project.value.name || 'Project'} - ${t('Mostefa Boudjema')}`
    })
  }
}

onMounted(() => {
  fetchProject();
  feather.replace();
});

watch(() => route.params.link, () => {
  fetchProject();
  feather.replace();
});

onUpdated(() => {
  feather.replace();
});
</script>

<template>
    <div class="container mx-auto sm:mt-20 px-4">
        <!-- Skeleton Loading -->
        <div v-if="projectPending" class="space-y-8">
            <div class="space-y-4">
                <ReusableSkeleton width="w-1/3" height="h-10" />
                <div class="flex gap-4">
                    <ReusableSkeleton width="w-24" height="h-6" rounded="rounded-full" />
                    <ReusableSkeleton width="w-24" height="h-6" rounded="rounded-full" />
                </div>
            </div>
            <ReusableSkeleton width="w-full" height="h-[400px]" rounded="rounded-2xl" />
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="md:col-span-2 space-y-4">
                    <ReusableSkeleton width="w-full" height="h-4" />
                    <ReusableSkeleton width="w-full" height="h-4" />
                    <ReusableSkeleton width="w-3/4" height="h-4" />
                </div>
                <div class="space-y-4">
                    <ReusableSkeleton width="w-full" height="h-32" />
                    <ReusableSkeleton width="w-full" height="h-32" />
                </div>
            </div>
        </div>

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
                <div v-if="relatedPending" class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <ReusableSkeleton v-for="i in 4" :key="i" height="h-48" />
                </div>
                <ProjectRelatedProjects v-else :relatedProject="relatedProject" />
            </div>
        </template>
    </div>
</template>

<style scoped></style>
