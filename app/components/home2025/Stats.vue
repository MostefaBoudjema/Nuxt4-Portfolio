<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  years: { type: [String, Number], default: 6 },
  projects: { type: [String, Number], default: 30 },
  feedback: { type: [String, Number], default: '100%' },
  stars: { type: [String, Number], default: 50 },
});

const { t, locale } = useI18n({ inheritLocale: true, useScope: 'global' });

const rtlLocales = ['ar', 'he', 'fa', 'ur'];
const isRtl = computed(() => rtlLocales.includes(locale.value));

const items = computed(() => [
  { value: props.years, label: t('Years of experience') },
  { value: props.projects, label: t('Projects completed') },
  { value: props.feedback, label: t('Positive feedback') },
  { value: props.stars, label: t('Stars on GitHub') },
]);
</script>

<template>
  <section class="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      <div
        v-for="item in items"
        :key="item.label"
        class="group rounded-2xl border border-ternary-light/60 dark:border-ternary-dark/80 bg-white/60 dark:bg-ternary-dark/40 backdrop-blur px-5 py-6 shadow-sm"
      >
        <div class="flex items-start justify-between gap-3">
          <p
            :class="[
              'text-2xl sm:text-3xl font-semibold text-primary-dark dark:text-primary-light',
              isRtl ? 'text-right' : 'text-left'
            ]"
          >
            {{ item.value }}
          </p>
          <span class="h-2.5 w-2.5 rounded-full bg-blue-500/70 group-hover:bg-violet-500/70 transition"></span>
        </div>
        <p
          :class="[
            'mt-2 text-sm sm:text-base text-ternary-dark/80 dark:text-ternary-light/80',
            isRtl ? 'text-right' : 'text-left'
          ]"
        >
          {{ item.label }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
