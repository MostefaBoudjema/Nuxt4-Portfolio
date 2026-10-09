<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  service: { type: Object, required: true },
})

const { locale } = useI18n({ inheritLocale: true, useScope: 'global' })
const rtlLocales = ['ar', 'he', 'fa', 'ur']
const isRtl = computed(() => rtlLocales.includes(locale.value))

const headerTitle = computed(() => {
  if (locale.value === 'ar') return 'التقنيات والاستخدامات'
  if (locale.value === 'fr') return 'Technologies & Cas d\'Usage'
  return 'Technology Stack & Use Cases'
})
const techTitle = computed(() => {
  if (locale.value === 'ar') return 'مجموعة التقنيات'
  if (locale.value === 'fr') return 'Technologies'
  return 'Tech Stack'
})
const useCasesTitle = computed(() => {
  if (locale.value === 'ar') return 'حالات الاستخدام المثالية'
  if (locale.value === 'fr') return 'Cas d\'Usage Idéaux'
  return 'Ideal Use Cases'
})
</script>

<template>
  <section class="py-16 bg-ternary-light/30 dark:bg-ternary-dark/30">
    <div class="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center mb-10">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-primary-dark dark:text-primary-light">
          {{ headerTitle }}
        </h2>
      </div>

      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8" :class="isRtl ? 'text-right' : 'text-left'">
        <!-- Tech Stack -->
        <div class="bg-white dark:bg-[#0B1220] p-6 sm:p-8 rounded-3xl border border-ternary-light/60 dark:border-ternary-dark/80 shadow-sm">
          <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
            <i class="bi bi-code-square text-blue-500 text-2xl"></i>
            {{ techTitle }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tech, index) in service.techStack"
              :key="'tech-'+index"
              class="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Use Cases -->
        <div class="bg-white dark:bg-[#0B1220] p-6 sm:p-8 rounded-3xl border border-ternary-light/60 dark:border-ternary-dark/80 shadow-sm">
          <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
            <i class="bi bi-briefcase text-purple-500 text-2xl"></i>
            {{ useCasesTitle }}
          </h3>
          <ul class="space-y-3">
            <li
              v-for="(useCase, index) in service.useCases"
              :key="'usecase-'+index"
              class="flex items-start gap-3"
            >
              <i class="bi bi-check-circle-fill text-green-500 mt-1"></i>
              <span class="text-gray-700 dark:text-gray-300 font-medium">{{ useCase }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
