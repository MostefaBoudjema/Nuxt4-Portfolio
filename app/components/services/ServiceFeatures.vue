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
  if (locale.value === 'ar') return 'الميزات والقدرات الأساسية'
  if (locale.value === 'fr') return 'Fonctionnalités & Capacités Clés'
  return 'Core Features & Capabilities'
})
</script>

<template>
  <section class="py-14 sm:py-20">
    <div class="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-primary-dark dark:text-primary-light">
          {{ headerTitle }}
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto" :class="isRtl ? 'text-right' : 'text-left'">
        <div
          v-for="(feature, index) in service.features"
          :key="index"
          class="group p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#0B1220] border border-ternary-dark/10 dark:border-ternary-light/10 hover:border-ternary-dark/25 dark:hover:border-ternary-light/25 hover:shadow-lg transition-all duration-200"
        >
          <div class="mb-5 flex items-center justify-start">
            <span
              class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xl border border-blue-200/40 dark:border-blue-900/40 group-hover:scale-105 transition-transform duration-200"
            >
              <i :class="feature.icon" />
            </span>
          </div>
          <h3 class="text-lg sm:text-xl font-bold tracking-tight text-primary-dark dark:text-primary-light mb-2.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150">
            {{ feature.title }}
          </h3>
          <p class="text-sm sm:text-base text-ternary-dark/70 dark:text-ternary-light/70 leading-relaxed">
            {{ feature.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
