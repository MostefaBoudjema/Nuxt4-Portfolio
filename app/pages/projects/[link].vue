<script setup>
import feather from "feather-icons";
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
// import ProjectGallery from "@/components/projects/ProjectGallery.vue";
import ProjectInfo from "@/components/projects/ProjectInfo.vue";
import ProjectRelatedProjects from "@/components/projects/ProjectRelatedProjects.vue";

import relatedProject from "@/data/relatedProjects";
import getProjects from "@/data/projects";

// import { blog } from "@/data/projectInfos";
import { ref, watch, onMounted, onUpdated } from "vue";
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useHead } from '#imports'

const { t } = useI18n();

const route = useRoute();
const project = ref(null);

function fetchProject() {
  project.value = getProjects(t).find(p => p.link === route.params.link) || null;
  if (project.value) {
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
    <div v-if="project" class="container mx-auto sm:mt-20 flex-wrap">
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
    </div>
</template>

<style scoped></style>
