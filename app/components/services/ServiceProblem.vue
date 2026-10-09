<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  service: { type: Object, required: true },
})

const { locale } = useI18n({ inheritLocale: true, useScope: 'global' })
const rtlLocales = ['ar', 'he', 'fa', 'ur']
const isRtl = computed(() => rtlLocales.includes(locale.value))
</script>

<template>
  <section class="py-16 sm:py-24 bg-ternary-light/20 dark:bg-ternary-dark/20 border-y border-ternary-dark/5 dark:border-ternary-light/5">
    <div class="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" :class="isRtl ? 'text-right' : 'text-left'">
          
          <!-- Problem Box -->
          <div class="p-8 sm:p-10 rounded-3xl border border-red-200/60 dark:border-red-900/30 bg-red-50/50 dark:bg-red-900/10">
            <div class="flex items-center gap-4 mb-6">
              <span class="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400">
                <i class="bi bi-x-lg text-xl" />
              </span>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {{ service.problem.title }}
              </h2>
            </div>
            <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed" :class="isRtl ? 'mr-16' : 'ml-16'">
              {{ service.problem.desc }}
            </p>
          </div>

          <!-- Solution Box -->
          <div class="p-8 sm:p-10 rounded-3xl border border-emerald-200/60 dark:border-emerald-900/30 bg-emerald-50/50 dark:bg-emerald-900/10 relative overflow-hidden">
            <div
              aria-hidden="true"
              class="absolute -top-24 -right-24 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"
            />
            <div class="flex items-center gap-4 mb-6 relative z-10">
              <span class="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                <i class="bi bi-check-lg text-2xl" />
              </span>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {{ service.solution.title }}
              </h2>
            </div>
            <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed relative z-10" :class="isRtl ? 'mr-16' : 'ml-16'">
              {{ service.solution.desc }}
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
