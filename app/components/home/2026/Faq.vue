<template>
  <section class="py-16 sm:py-24 bg-ternary-light/30 dark:bg-ternary-dark/30">
    <div class="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light">
          Frequently Asked Questions
        </h2>
        <p class="mt-4 text-lg text-ternary-dark/80 dark:text-ternary-light/80">
          Answers to common questions about my web development services in Algeria.
        </p>
      </div>

      <div class="max-w-3xl mx-auto space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" class="bg-white dark:bg-[#0B1220] rounded-2xl p-6 shadow-sm border border-ternary-light/60 dark:border-ternary-dark/80">
          <h3 class="text-xl font-semibold text-primary-dark dark:text-primary-light mb-3">
            {{ faq.question }}
          </h3>
          <p class="text-ternary-dark/80 dark:text-ternary-light/80 leading-relaxed">
            {{ faq.answer }}
          </p>
        </div>
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
