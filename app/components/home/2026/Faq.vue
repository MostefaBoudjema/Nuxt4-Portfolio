<template>
  <section class="px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
    <div class="sm:container sm:mx-auto">
      <div class="max-w-2xl mb-10">
        <h2 class="text-2xl sm:text-3xl font-bold text-primary-dark dark:text-primary-light">
          {{ t('FaqTitle') }}
        </h2>
        <p class="mt-2 text-sm sm:text-base text-ternary-dark/50 dark:text-ternary-light/50">
          {{ t('FaqSubtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
        <details
          v-for="(faq, index) in faqs"
          :key="index"
          class="group rounded-xl border border-ternary-dark/10 dark:border-ternary-light/10 bg-ternary-dark/[0.03] dark:bg-ternary-light/[0.04] transition-shadow duration-200 hover:shadow-md open:shadow-md"
        >
          <summary class="flex items-center justify-between gap-4 p-5 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
            <h3 class="text-base font-medium text-primary-dark dark:text-primary-light group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150">
              {{ faq.question }}
            </h3>
            <span class="shrink-0 text-ternary-dark/40 dark:text-ternary-light/40 transition-transform duration-200 group-open:rotate-45 text-xl leading-none" aria-hidden="true">+</span>
          </summary>
          <div class="px-5 pb-5 pr-8">
            <p class="text-sm text-ternary-dark/70 dark:text-ternary-light/70 leading-relaxed">
              {{ faq.answer }}
            </p>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ inheritLocale: true, useScope: 'global' });

const faqs = computed(() => {
  return Array.from({ length: 10 }, (_, i) => ({
    question: t(`FaqQ${i + 1}`),
    answer: t(`FaqA${i + 1}`)
  }));
});
</script>

<style scoped></style>