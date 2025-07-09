<script setup>
import feather from "feather-icons";
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
// import ProjectGallery from "@/components/projects/ProjectGallery.vue";
import ProjectInfo from "@/components/projects/ProjectInfo.vue";
import ProjectRelatedProjects from "@/components/projects/ProjectRelatedProjects.vue";

import relatedProject from "@/data/relatedProjects";
import projects from "@/data/projects";

// import { blog } from "@/data/projectInfos";
import { computed, onMounted, onUpdated, ref, watchEffect } from "vue";
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useHead } from '#imports'

const { t } = useI18n();

const route = useRoute();
const projectLink = computed(() => route.params.link);
const projectIndex = computed(() => projects.findIndex(p => p.link === projectLink.value));
const project = computed(() => projects[projectIndex.value] || null);

const singleProjectHeaderMethod = computed(() => project.value?.singleProjectHeader);
const projectImagesMethod = computed(() => project.value?.projectImages);
const projectvideosMethod = computed(() => project.value?.video);
const projectInfoMethod = computed(() => project.value?.projectInfo);
const smallImagesMethod = computed(() => project.value?.smallImages);

watchEffect(() => {
  if (project.value) {
    useHead({
      title: `Mostefa Boudjema - ${project.value.title || project.value.name || 'Project'}`
    })
  }
})

onMounted(() => {
    feather.replace();
});

onUpdated(() => {
    feather.replace();
});
</script>

<template>
    <div class="container mx-auto sm:mt-20 flex-wrap">
        <!-- Project header -->
        <ProjectHeader
            :singleProjectHeader="singleProjectHeaderMethod"
            :imgList="projectImagesMethod"
            :video="projectvideosMethod"
        />
        <!-- Project information -->
        <ProjectInfo :projectInfo="projectInfoMethod" :smallImages="smallImagesMethod"/>
        <div class="block sm:flex gap-0 sm:gap-10 mt-14">
            <!-- Project related projects -->
            <ProjectRelatedProjects :relatedProject="relatedProject" />

        </div>
    </div>
</template>

<style scoped></style>
