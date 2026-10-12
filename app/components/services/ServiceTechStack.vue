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
  <section class="py-14 sm:py-20 bg-ternary-light/20 dark:bg-ternary-dark/20 border-y border-ternary-dark/10 dark:border-ternary-light/10">
    <div class="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center mb-10 sm:mb-12">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-primary-dark dark:text-primary-light">
          {{ headerTitle }}
        </h2>
      </div>

      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" :class="isRtl ? 'text-right' : 'text-left'">
        <!-- Tech Stack -->
        <div class="bg-white dark:bg-[#0B1220] p-6 sm:p-8 rounded-2xl border border-ternary-dark/10 dark:border-ternary-light/10">
          <h3 class="text-lg sm:text-xl font-bold tracking-tight text-primary-dark dark:text-primary-light mb-6 flex items-center gap-3">
            <i class="bi bi-code-square text-blue-600 dark:text-blue-400 text-xl"></i>
            {{ techTitle }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tech, index) in service.techStack"
              :key="'tech-'+index"
              class="px-3.5 py-1.5 rounded-lg text-sm font-medium bg-ternary-light/60 dark:bg-ternary-dark/60 text-primary-dark dark:text-primary-light border border-ternary-dark/10 dark:border-ternary-light/10"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Use Cases -->
        <div class="bg-white dark:bg-[#0B1220] p-6 sm:p-8 rounded-2xl border border-ternary-dark/10 dark:border-ternary-light/10">
          <h3 class="text-lg sm:text-xl font-bold tracking-tight text-primary-dark dark:text-primary-light mb-6 flex items-center gap-3">
            <i class="bi bi-briefcase text-blue-600 dark:text-blue-400 text-xl"></i>
            {{ useCasesTitle }}
          </h3>
          <ul class="space-y-3">
            <li
              v-for="(useCase, index) in service.useCases"
              :key="'usecase-'+index"
              class="flex items-start gap-3"
            >
              <i class="bi bi-check-circle-fill text-blue-600 dark:text-blue-400 mt-1 shrink-0"></i>
              <span class="text-ternary-dark/80 dark:text-ternary-light/80 text-sm sm:text-base font-medium">{{ useCase }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
