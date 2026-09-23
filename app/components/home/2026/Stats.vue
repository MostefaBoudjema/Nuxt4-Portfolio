<template>
  <section class="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8 mt-10">
    <!-- Section header -->
    <div :class="['mb-6', isRtl ? 'text-right' : 'text-left']">
      <p class="text-sm uppercase tracking-widest text-ternary-dark/60 dark:text-ternary-light/60">{{ t('By The Numbers') }}</p>
      <h2 class="mt-1 text-xl sm:text-2xl font-semibold text-primary-dark dark:text-primary-light">
        {{ t('Real results that move businesses forward') }}
      </h2>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      <div v-for="item in items" :key="item.label"
        class="group rounded-2xl border border-ternary-light/60 dark:border-ternary-dark/80 bg-white/60 dark:bg-ternary-dark/40 backdrop-blur px-5 py-6 shadow-sm hover:shadow-md hover:border-blue-400/50 dark:hover:border-blue-500/40 transition-all duration-200">
        <div class="flex items-start justify-between gap-3">
          <div>
            <p :class="[
              'text-2xl sm:text-3xl font-bold text-primary-dark dark:text-primary-light',
              isRtl ? 'text-right' : 'text-left'
            ]">
              {{ item.value }}
            </p>
            <p :class="[
              'mt-2 text-sm sm:text-base text-ternary-dark/80 dark:text-ternary-light/80',
              isRtl ? 'text-right' : 'text-left'
            ]">
              {{ item.label }}
            </p>
            <p v-if="item.sub" :class="[
              'mt-1 text-xs text-ternary-dark/50 dark:text-ternary-light/50',
              isRtl ? 'text-right' : 'text-left'
            ]">
              {{ item.sub }}
            </p>
          </div>
          <span class="text-2xl select-none">{{ item.icon }}</span>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  clients: { type: [String, Number], default: '30+' },
  projects: { type: [String, Number], default: '50+' },
  delivery: { type: [String, Number], default: '100%' },
  retention: { type: [String, Number], default: '95%' },
});

const { t, locale } = useI18n({ inheritLocale: true, useScope: 'global' });

const rtlLocales = ['ar', 'he', 'fa', 'ur'];
const isRtl = computed(() => rtlLocales.includes(locale.value));

const items = computed(() => [
  { value: props.clients, label: t('Happy Clients'), sub: t('Across multiple industries'), icon: '🤝' },
  { value: props.projects, label: t('Projects Delivered'), sub: t('From MVPs to full platforms'), icon: '🚀' },
  { value: props.delivery, label: t('On-Time Delivery'), sub: t('Deadlines respected, always'), icon: '✅' },
  { value: props.retention, label: t('Client Retention Rate'), sub: t('Clients who come back for more'), icon: '🔄' },
]);
</script>

<style scoped></style>
