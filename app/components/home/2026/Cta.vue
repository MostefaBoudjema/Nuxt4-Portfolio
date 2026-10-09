<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLocalePath } from '#i18n';
import configs from '~/configs';

const { t, locale } = useI18n({ inheritLocale: true, useScope: 'global' });
const localePath = useLocalePath();

const rtlLocales = ['ar', 'he', 'fa', 'ur'];
const isRtl = computed(() => rtlLocales.includes(locale.value));

const whatsappMessage = computed(() => {
  if (locale.value === 'ar') return encodeURIComponent("مرحباً، أنا مهتم بالبدء في مشروعي.");
  if (locale.value === 'fr') return encodeURIComponent("Bonjour, je suis intéressé pour démarrer mon projet.");
  return encodeURIComponent("Hello, I am interested in starting my project.");
});
const whatsappLink = computed(() => `https://wa.me/${configs.whatsappNumber}?text=${whatsappMessage.value}`);
</script>

<template>
  <section class="px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
    <div class="sm:container sm:mx-auto">
      <div class="rounded-2xl border border-gray-200 bg-gray-50 dark:border-ternary-light/10 dark:bg-white/[0.03] px-6 sm:px-14 py-12 sm:py-16">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-2xl sm:text-4xl font-extrabold text-primary-dark dark:text-primary-light leading-tight">
            {{ t('CtaHeadline') }}
            <span class="text-blue-600 dark:text-blue-400"> {{ t('CtaHeadlineAccent') }}</span>
          </h2>
          <p class="mt-4 text-base sm:text-lg text-gray-600 dark:text-ternary-light/60 max-w-lg mx-auto">
            {{ t('CtaSubtext') }}
          </p>

          <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <NuxtLink
              :to="whatsappLink"
              target="_blank"
              class="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary-dark text-white dark:bg-white dark:text-primary-dark px-8 py-4 text-base font-semibold hover:opacity-90 transition-opacity duration-150"
            >
              {{ t('Start My Project') }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/projects')"
              class="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-gray-300 text-primary-dark hover:border-gray-500 dark:border-white/20 dark:text-white dark:hover:border-white/40 px-8 py-4 text-base font-medium transition-colors duration-150"
            >
              {{ t('Browse My Work') }}
            </NuxtLink>
          </div>

          <p class="mt-6 text-xs text-gray-500 dark:text-ternary-light/40">
            {{ t('CtaTrustNote') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
