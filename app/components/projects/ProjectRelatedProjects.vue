<template>
    <div class="border-primary-light dark:border-secondary-dark">
        <p
            class="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14" :class="locale==='ar'?'text-right':'text-left'">
            {{ $t(relatedProject.relatedProjectsHeading) }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-4 sm:gap-10 mt-12">
            <!-- <div class="grid grid-cols-1 mt-6 sm:gap-10"> -->
            <div v-for="item in randomItems" :key="item.id">
                <NuxtLink :to="item.link" @click="setPageId(item.id)">
                    <NuxtImg :src="item.img" class="rounded-xl cursor-pointer h-70 w-96" :alt="item.title" />
                </NuxtLink>
                <h3 class="dark:text-white text-center pt-2">
                    {{ item.title }}
                </h3>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { computed, watchEffect } from "vue";

const props = defineProps({
  relatedProject: {
    type: Object,
    required: true,
  },
});

const { locale } = useI18n();
const { t } = useI18n({
  inheritLocale: true,
  useScope: "global",
});

// Compute related items by matching technologies used in smallImages (based on the `alt` field).
// Fall back to provided relatedProjects and exclude the current project. Shuffle and return up to 4 items.
const randomItems = computed(() => {
  // Gather technology names (lowercased) from current project's smallImages
  const currentTechs = new Set(
    (props.relatedProject?.smallImages || [])
      .map((img) => img?.alt?.toString()?.toLowerCase())
      .filter(Boolean)
  );

  const candidates = Array.isArray(props.relatedProject?.relatedProjects)
    ? props.relatedProject.relatedProjects
    : [];

  // Filter by technology overlap (do not rely on numeric ids anymore)
  const matched = candidates.filter((item) => {
    const itemTechs = (item.smallImages || []).map((img) => img?.alt?.toString()?.toLowerCase()).filter(Boolean);
    return itemTechs.some((tech) => currentTechs.has(tech));
  });

  // If no matches, fall back to all candidates
  const source = matched.length ? matched : candidates;

  // Exclude the current project (if it appears in candidates)
  const filtered = source.filter((item) => item.id !== props.relatedProject?.id);

  // Shuffle and take first 4
  const shuffled = filtered.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, 4);
});

// Optional: helpful debug logging when prop changes
watchEffect(() => {
  // eslint-disable-next-line no-console
  console.log('ProjectRelatedProjects props.relatedProject:', props.relatedProject);
  // eslint-disable-next-line no-console
  console.log('Computed randomItems:', randomItems.value);
});

const setPageId = (id) => {
  console.log("Page ID:", id);
};
</script>
