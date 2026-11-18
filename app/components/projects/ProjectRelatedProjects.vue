<template>
    <div v-if="relatedProject" class="border-primary-light dark:border-secondary-dark w-full">
        <p
            class="font-general-regular text-primary-dark dark:text-primary-light text-2xl sm:text-3xl font-bold mb-8 sm:mb-12" :class="locale==='ar'?'text-right':'text-left'">
            {{ $t(relatedProject.relatedProjectsHeading) }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div v-for="item in randomItems" :key="item.id" class="group">
                <NuxtLink :to="localePath(`/projects/${item.link}`)" @click="setPageId(item.id)"
                    class="block overflow-hidden rounded-xl bg-gray-100 dark:bg-ternary-dark border border-gray-200/60 dark:border-gray-800/80 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div class="aspect-[16/10] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <NuxtImg 
                            :src="item.img" 
                            class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                            :alt="item.title"
                            loading="lazy" 
                        />
                    </div>
                    <div class="p-4 text-center">
                        <h3 class="dark:text-white font-medium text-sm sm:text-base line-clamp-1 group-hover:text-blue-500 transition-colors">
                            {{ item.title }}
                        </h3>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { computed, watchEffect } from "vue";
import { useLocalePath } from "#i18n";

const props = defineProps({
  relatedProject: {
    type: Object,
    required: true,
  },
});

const { locale } = useI18n();
const localePath = useLocalePath();
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
