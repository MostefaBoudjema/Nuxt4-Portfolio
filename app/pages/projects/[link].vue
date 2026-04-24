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
  } else if (!projectPending.value) {
    project.value = null;
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
});

watch(() => route.params.link, () => {
  fetchProject();
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
                <ProjectRelatedProjects :relatedProject="relatedProject" />
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
