<template>
  <!-- Projects grid -->
  <section class="pt-10 sm:pt-14">
    <!-- Projects grid title -->
    <div class="text-center">
      <p class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">
        {{ projectsHeading }}
      </p>
    </div>

    <!-- Filter and search projects -->
    <div class="mt-10 sm:mt-10">
      <h3
        class="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4">
        {{ t("Search projects by title or filter by category") }}
      </h3>
      <div class="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2">
        <div class="flex justify-between gap-2">
          <span class="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
            <i data-feather="search" class="text-ternary-dark dark:text-ternary-light"></i>
          </span>
          <input v-model="searchProject"
            class="font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
            id="name" name="name" type="search" required="" :placeholder="$t('Search projects by title or filter by category')
              " aria-label="Name" />
        </div>
        <ProjectsFilter @filter="selectedCategory = $event" />
      </div>
    </div>
    <!-- Projects grid -->
    <div v-if="full" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">

      <ProjectSingle v-for="project in filteredProjects" :key="project.id"
        :project="project" />
      <!-- <ProjectSingle v-for="index in selectedProjects" :key="index" :project="projects[index]" /> -->

    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <ProjectSingle v-for="project in getShortList" :key="project" :project="project" />
    </div>
    <!-- <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-6 sm:gap-10">
      <ProjectSingle v-for="project in getSpecificProjectsList(settings.home_list)" :key="project.id"
        :project="project" />
    </div> -->
  </section>
</template><script setup>
import { ref, computed, onMounted, defineProps, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import feather from 'feather-icons';
import ProjectsFilter from './ProjectsFilter.vue';
import ProjectSingle from './ProjectSingle.vue';
import getProjects from '@/data/projects';
import settings from '@/configs';
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ inheritLocale: true, useScope: 'global' });
const router = useRouter();
const route = useRoute();

const projects = computed(() => getProjects(t));
const projectsHeading = computed(() => t('Projects I worked On'));

const selectedCategory = ref('');
const searchProject = ref(route.query.search || ''); // Initialize with query parameter
const props = defineProps({
  full: String
});

// Watch for changes in searchProject and update the URL
watch(searchProject, (newSearch) => {
  router.replace({ query: { ...route.query, search: newSearch } });
});

// Watch for changes in the route query and update searchProject
watch(
  () => route.query.search,
  (newSearch) => {
    if (newSearch !== searchProject.value) {
      searchProject.value = newSearch || '';
    }
  }
);

const filteredProjects = computed(() => {
  let filtered;
  if (selectedCategory.value) {
    filtered = filterProjectsByCategory();
  } else if (searchProject.value) {
    filtered = filterProjectsBySearch();
  } else {
    filtered = projects.value;
  }
  
  // Sort projects according to settings.full_list order
  return filtered.sort((a, b) => {
    const aIndex = settings.full_list.indexOf(a.id);
    const bIndex = settings.full_list.indexOf(b.id);
    
    // If both projects are in full_list, sort by their position
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }
    // If only a is in full_list, a comes first
    if (aIndex !== -1 && bIndex === -1) {
      return -1;
    }
    // If only b is in full_list, b comes first
    if (aIndex === -1 && bIndex !== -1) {
      return 1;
    }
    // If neither is in full_list, maintain original order
    return 0;
  });
});

const getShortList = computed(() => {
    const selectedIds = settings.home_list;
    const filtered = filteredProjects.value.filter(project => selectedIds.includes(project.id));
    
    // Sort projects according to settings.home_list order
    return filtered.sort((a, b) => {
        const aIndex = selectedIds.indexOf(a.id);
        const bIndex = selectedIds.indexOf(b.id);
        return aIndex - bIndex;
    });
});

const filterProjectsByCategory = () => {
  return projects.value.filter((item) => {
    const category =
      item.category.charAt(0).toUpperCase() + item.category.slice(1);
    return category.includes(selectedCategory.value);
  });
};

const filterProjectsBySearch = () => {
  const project = new RegExp(searchProject.value, 'i');
  return projects.value.filter((el) => el.title.match(project));
};

const getSpecificProjectsList = (indices) => {
  return indices.map((index) => filteredProjects.value[index]);
};

onMounted(() => {
  feather.replace();
});
</script>
