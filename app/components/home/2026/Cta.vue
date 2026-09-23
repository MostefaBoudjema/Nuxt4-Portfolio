<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLocalePath } from '#i18n';
import configs from '~/configs';

const { t, locale } = useI18n({ inheritLocale: true, useScope: 'global' });
const localePath = useLocalePath();

const rtlLocales = ['ar', 'he', 'fa', 'ur'];
const isRtl = computed(() => rtlLocales.includes(locale.value));

const valuePoints = computed(() => [
  t('Launch your product faster with expert development'),
  t('Increase conversions with a high-performance web app'),
  t('Scale confidently with clean, maintainable code'),
  t('Dedicated support throughout and after delivery'),
]);

const whatsappMessage = computed(() => {
  if (locale.value === 'ar') return encodeURIComponent("مرحباً، أنا مهتم بالبدء في مشروعي.");
  if (locale.value === 'fr') return encodeURIComponent("Bonjour, je suis intéressé pour démarrer mon projet.");
  return encodeURIComponent("Hello, I am interested in starting my project.");
});
const whatsappLink = computed(() => `https://wa.me/${configs.whatsappNumber}?text=${whatsappMessage.value}`);
</script>

<template>
  <section class="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-violet-600 to-fuchsia-600 p-[1px]">
      <div class="rounded-3xl bg-white/95 dark:bg-[#0B1220]/95 backdrop-blur px-6 sm:px-12 py-10 sm:py-14">
        <!-- Decorative blobs -->
        <div class="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div class="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl"></div>

        <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <!-- Left: headline & bullets -->
          <div>
            <span class="inline-flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300 mb-4">
              💬 {{ t('Let\'s Talk Business') }}
            </span>
            <h2 :class="[
              'text-2xl sm:text-4xl font-extrabold text-primary-dark dark:text-primary-light leading-tight',
              isRtl ? 'text-right' : 'text-left'
            ]">
              {{ t('CtaHeadline') }}
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500"> {{ t('CtaHeadlineAccent') }}</span>
            </h2>
            <p :class="[
              'mt-4 text-base sm:text-lg text-ternary-dark/80 dark:text-ternary-light/80',
              isRtl ? 'text-right' : 'text-left'
            ]">
              {{ t('CtaSubtext') }}
            </p>

            <!-- Value proposition bullets -->
            <ul class="mt-6 space-y-3">
              <li v-for="point in valuePoints" :key="point" class="flex items-center gap-3 text-sm text-ternary-dark/80 dark:text-ternary-light/80">
                <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-bold">✓</span>
                {{ point }}
              </li>
            </ul>
          </div>

          <!-- Right: CTA buttons + trust note -->
          <div :class="['flex flex-col gap-4', isRtl ? 'items-end' : 'items-start lg:items-center']">
            <NuxtLink
              :to="whatsappLink"
              target="_blank"
              class="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 text-base font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-200"
            >
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              {{ t('Start My Project') }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/projects')"
              class="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-ternary-light/70 dark:border-ternary-dark/80 bg-white/70 dark:bg-ternary-dark/40 backdrop-blur px-8 py-4 text-base font-medium text-primary-dark dark:text-primary-light hover:bg-white/90 dark:hover:bg-ternary-dark/60 transition"
            >
              {{ t('Browse My Work') }}
            </NuxtLink>
            <p class="text-xs text-ternary-dark/50 dark:text-ternary-light/50">
              🔒 {{ t('CtaTrustNote') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
