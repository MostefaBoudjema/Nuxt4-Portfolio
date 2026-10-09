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
  <section class="py-16 sm:py-24">
    <div class="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-primary-dark dark:text-primary-light">
          {{ headerTitle }}
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto" :class="isRtl ? 'text-right' : 'text-left'">
        <div
          v-for="(feature, index) in service.features"
          :key="index"
          class="group p-8 rounded-3xl bg-white dark:bg-[#0B1220] border border-ternary-light/60 dark:border-ternary-dark/60 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/20 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300"
        >
          <div class="mb-6 flex items-center justify-start">
            <span
              :class="[
                'inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br text-white text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3',
                service.gradient,
              ]"
            >
              <i :class="feature.icon" />
            </span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            {{ feature.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ feature.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
