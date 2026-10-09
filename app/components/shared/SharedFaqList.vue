<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  faqs: {
    type: Array,
    required: true
  },
  columns: {
    type: Number,
    default: 2
  }
})

const { locale } = useI18n({ inheritLocale: true, useScope: 'global' })
const rtlLocales = ['ar', 'he', 'fa', 'ur']
const isRtl = computed(() => rtlLocales.includes(locale.value))

const gridColsClass = computed(() => {
  if (props.columns === 1) return 'grid-cols-1'
  return 'grid-cols-1 lg:grid-cols-2'
})
</script>

<template>
  <div :class="['grid gap-4 items-start', gridColsClass]">
    <details
      v-for="(faq, index) in faqs"
      :key="index"
      class="group rounded-xl border border-ternary-dark/10 dark:border-ternary-light/10 bg-ternary-dark/[0.03] dark:bg-ternary-light/[0.04] transition-shadow duration-200 hover:shadow-md open:shadow-md"
    >
      <summary class="flex items-center justify-between gap-4 p-5 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
        <h3 class="text-base font-medium text-primary-dark dark:text-primary-light group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150">
          {{ faq.question || faq.q }}
        </h3>
        <span class="shrink-0 text-ternary-dark/40 dark:text-ternary-light/40 transition-transform duration-200 group-open:rotate-45 text-xl leading-none" aria-hidden="true">+</span>
      </summary>
      <div class="px-5 pb-5" :class="isRtl ? 'pl-8' : 'pr-8'">
        <p class="text-sm text-ternary-dark/70 dark:text-ternary-light/70 leading-relaxed">
          {{ faq.answer || faq.a }}
        </p>
      </div>
    </details>
  </div>
</template>
