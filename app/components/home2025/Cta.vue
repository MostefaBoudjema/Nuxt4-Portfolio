<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLocalePath } from '#i18n';
import configs from '~/configs';

const { t, locale } = useI18n({ inheritLocale: true, useScope: 'global' });
const localePath = useLocalePath();

const rtlLocales = ['ar', 'he', 'fa', 'ur'];
const isRtl = computed(() => rtlLocales.includes(locale.value));
</script>

<template>
  <section class="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
    <div class="relative overflow-hidden rounded-3xl border border-ternary-light/60 dark:border-ternary-dark/80 bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 p-[1px]">
      <div class="rounded-3xl bg-white/90 dark:bg-[#0B1220]/90 backdrop-blur px-6 sm:px-10 py-10 sm:py-12">
        <div class="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
        <div class="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

        <div class="relative">
          <h2
            :class="[
              'text-2xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light',
              isRtl ? 'text-right' : 'text-left'
            ]"
          >
            {{ t('What project are you looking for?') }}
          </h2>
          <p
            :class="[
              'mt-3 text-base sm:text-lg text-ternary-dark/80 dark:text-ternary-light/80 max-w-2xl',
              isRtl ? 'text-right' : 'text-left'
            ]"
          >
            {{ t('AboutMe5') }}
          </p>

          <div :class="['mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4', isRtl ? 'sm:flex-row-reverse' : '']">
            <NuxtLink
              :to="localePath('/contact')"
              class="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 font-medium shadow-sm transition"
            >
              {{ t('Contact') }}
            </NuxtLink>
            <a
              :href="configs.cv_path"
              download
              class="inline-flex items-center justify-center rounded-xl border border-ternary-light/70 dark:border-ternary-dark/80 bg-white/70 dark:bg-ternary-dark/40 backdrop-blur px-6 py-3 font-medium text-primary-dark dark:text-primary-light hover:bg-white/90 dark:hover:bg-ternary-dark/60 transition"
            >
              {{ t('Download CV') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
