<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLocalePath } from '#i18n';
import configs from '~/configs';

const { t, locale }=useI18n({ inheritLocale: true, useScope: 'global' });
const localePath=useLocalePath();

const rtlLocales=['ar', 'he', 'fa', 'ur'];
const isRtl=computed(() => rtlLocales.includes(locale.value));
</script>

<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0">
      <!-- <div class="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div> -->
      <!-- <div class="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"></div> -->
      <!-- <div class="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent dark:from-[#0B1220] dark:via-[#0B1220] dark:to-transparent"></div> -->
    </div>

    <div class="relative sm:container sm:mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div class="lg:col-span-7">
          <div
            :class="['inline-flex items-center gap-2 rounded-full border border-ternary-light/60 dark:border-ternary-dark/80 bg-white/60 dark:bg-ternary-dark/40 backdrop-blur px-4 py-2', isRtl ? 'flex-row-reverse' : '']">
            <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
            <span class="text-sm text-ternary-dark/80 dark:text-ternary-light/80">
              {{ t('Hire Me') }}
            </span>
          </div>

          <h1 :class="[
            'mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary-dark dark:text-primary-light',
            isRtl ? 'text-right' : 'text-left'
          ]">
            {{ t('HiIam') }}
            <span
              class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500">
              {{ t('Mostefa Boudjema') }}
            </span>
          </h1>

          <p :class="[
            'mt-5 text-base sm:text-lg text-ternary-dark/80 dark:text-ternary-light/80 max-w-2xl',
            isRtl ? 'text-right' : 'text-left'
          ]">
            {{ t('AboutMe1') }}
          </p>

          <div :class="['mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4', isRtl ? 'sm:flex-row-reverse' : '']">
            <NuxtLink :to="localePath('/contact')"
              class="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 font-medium shadow-sm transition">
              {{ t('Contact') }}
            </NuxtLink>
            <a :href="configs.cv_path" download
              class="inline-flex items-center justify-center rounded-xl border border-ternary-light/70 dark:border-ternary-dark/80 bg-white/60 dark:bg-ternary-dark/40 backdrop-blur px-6 py-3 font-medium text-primary-dark dark:text-primary-light hover:bg-white/80 dark:hover:bg-ternary-dark/60 transition">
              {{ t('Download CV') }}
            </a>
          </div>

          <div class="mt-10 flex flex-wrap gap-2">
            <span
              class="rounded-full border border-ternary-light/60 dark:border-ternary-dark/70 px-3 py-1 text-xs text-ternary-dark/80 dark:text-ternary-light/80">Laravel</span>
            <span
              class="rounded-full border border-ternary-light/60 dark:border-ternary-dark/70 px-3 py-1 text-xs text-ternary-dark/80 dark:text-ternary-light/80">Vue</span>
            <span
              class="rounded-full border border-ternary-light/60 dark:border-ternary-dark/70 px-3 py-1 text-xs text-ternary-dark/80 dark:text-ternary-light/80">Nuxt</span>
            <span
              class="rounded-full border border-ternary-light/60 dark:border-ternary-dark/70 px-3 py-1 text-xs text-ternary-dark/80 dark:text-ternary-light/80">React</span>
            <span
              class="rounded-full border border-ternary-light/60 dark:border-ternary-dark/70 px-3 py-1 text-xs text-ternary-dark/80 dark:text-ternary-light/80">Tailwind</span>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="relative mx-auto max-w-md">
            <div
              class="absolute -inset-3 rounded-3xl bg-gradient-to-r from-blue-500/30 via-violet-500/30 to-fuchsia-500/30 blur-2xl">
            </div>
            <div
              class="relative rounded-3xl border border-ternary-light/60 dark:border-ternary-dark/80 bg-white/60 dark:bg-ternary-dark/40 backdrop-blur p-4">
              <NuxtImg :src="configs.profile_photo" :alt="t('Mostefa Boudjema')" width="800" height="800"
                class="w-full h-auto rounded-2xl object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-14 sm:mt-20 h-px w-full bg-gradient-to-r from-transparent via-ternary-light/60 to-transparent dark:via-ternary-dark/70">
      </div>
    </div>
  </section>
</template>

<style scoped></style>
