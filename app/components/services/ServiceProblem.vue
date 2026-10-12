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
  <section class="py-14 sm:py-20 bg-ternary-light/20 dark:bg-ternary-dark/20 border-y border-ternary-dark/10 dark:border-ternary-light/10">
    <div class="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" :class="isRtl ? 'text-right' : 'text-left'">
          
          <!-- Problem Box -->
          <div class="p-7 sm:p-8 rounded-2xl border border-red-200/70 dark:border-red-900/40 bg-red-50/40 dark:bg-red-950/20">
            <div class="flex items-center gap-3.5 mb-4">
              <span class="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400">
                <i class="bi bi-x-lg text-lg" />
              </span>
              <h2 class="text-xl sm:text-2xl font-bold tracking-tight text-primary-dark dark:text-primary-light">
                {{ service.problem.title }}
              </h2>
            </div>
            <p class="text-base sm:text-lg text-ternary-dark/70 dark:text-ternary-light/70 leading-relaxed">
              {{ service.problem.desc }}
            </p>
          </div>

          <!-- Solution Box -->
          <div class="p-7 sm:p-8 rounded-2xl border border-emerald-200/70 dark:border-emerald-900/40 bg-emerald-50/40 dark:bg-emerald-950/20 relative overflow-hidden">
            <div class="flex items-center gap-3.5 mb-4 relative z-10">
              <span class="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                <i class="bi bi-check-lg text-xl" />
              </span>
              <h2 class="text-xl sm:text-2xl font-bold tracking-tight text-primary-dark dark:text-primary-light">
                {{ service.solution.title }}
              </h2>
            </div>
            <p class="text-base sm:text-lg text-ternary-dark/70 dark:text-ternary-light/70 leading-relaxed relative z-10">
              {{ service.solution.desc }}
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
