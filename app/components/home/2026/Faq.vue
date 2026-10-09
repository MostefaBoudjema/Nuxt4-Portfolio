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

      <SharedFaqList :faqs="faqs" />
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