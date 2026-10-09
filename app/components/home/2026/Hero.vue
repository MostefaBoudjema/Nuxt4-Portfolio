
<template>
  <section class="relative overflow-hidden">
    <div class="relative sm:container sm:mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-14 sm:pb-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div class="lg:col-span-7">

          <!-- Kicker — understated, earns trust quietly -->
          <p :class="[
            'text-sm font-medium tracking-wide text-ternary-dark/50 dark:text-ternary-light/50',
            isRtl ? 'text-right' : 'text-left'
          ]">
            {{ locale === 'ar' ? 'مطور Laravel و Vue.js — عنابة، الجزائر' : (locale === 'fr' ? 'Développeur Laravel & Vue.js — Annaba, Algérie' : 'Laravel & Vue.js Developer — Annaba, Algeria') }}
          </p>

          <h1 :class="[
            'mt-4 text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1] text-primary-dark dark:text-primary-light',
            isRtl ? 'text-right' : 'text-left'
          ]">
            {{ t('HeroHeadline') }}
            <span class="text-blue-600 dark:text-blue-400">
              {{ t('HeroHeadlineAccent') }}
            </span>
          </h1>

          <p :class="[
            'mt-5 text-base sm:text-lg text-ternary-dark/70 dark:text-ternary-light/70 max-w-xl leading-relaxed',
            isRtl ? 'text-right' : 'text-left'
          ]">
            {{ t('HeroSubtext') }}
          </p>

          <div :class="['mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4', isRtl ? 'sm:flex-row-reverse' : '']">
            <NuxtLink :to="whatsappLink" target="_blank"
              class="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-dark dark:bg-primary-light text-primary-light dark:text-primary-dark px-6 py-3.5 font-semibold hover:opacity-90 transition-opacity duration-150">
              {{ t('Get a Free Consultation') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/projects')"
              class="inline-flex items-center justify-center gap-2 rounded-lg border border-ternary-dark/15 dark:border-ternary-light/15 px-6 py-3.5 font-medium text-primary-dark dark:text-primary-light hover:border-ternary-dark/30 dark:hover:border-ternary-light/30 transition-colors duration-150">
              {{ t('See My Work') }}
              <span aria-hidden="true" class="text-sm">→</span>
            </NuxtLink>
          </div>

          <!-- Compact trust signals — no emojis, just facts -->
          <div :class="['mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ternary-dark/50 dark:text-ternary-light/50', isRtl ? 'flex-row-reverse' : '']">
            <span>30+ {{ t('Happy Clients') }}</span>
            <span class="hidden sm:inline" aria-hidden="true">·</span>
            <span>50+ {{ t('Projects Delivered') }}</span>
            <span class="hidden sm:inline" aria-hidden="true">·</span>
            <span>100% {{ t('On-Time Delivery') }}</span>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="relative mx-auto max-w-sm">
            <div class="rounded-2xl overflow-hidden border border-ternary-dark/8 dark:border-ternary-light/8">
              <ReusableThreeImageHover :src="configs.profile_photo" :alt="t('Mostefa Boudjema')" width="800" height="800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLocalePath } from '#i18n';
import configs from '~/configs';

const { t, locale } = useI18n({ inheritLocale: true, useScope: 'global' });
const localePath = useLocalePath();
const config = useRuntimeConfig();

const rtlLocales = ['ar', 'he', 'fa', 'ur'];
const isRtl = computed(() => rtlLocales.includes(locale.value));

const whatsappMessage = computed(() => {
  if (locale.value === 'ar') return encodeURIComponent("مرحباً، أنا مهتم بالحصول على استشارة مجانية.");
  if (locale.value === 'fr') return encodeURIComponent("Bonjour, je suis intéressé par une consultation gratuite.");
  return encodeURIComponent("Hello, I am interested in a free consultation.");
});
const whatsappLink = computed(() => `https://wa.me/${config.public.whatsappNumber}?text=${whatsappMessage.value}`);
</script>

<style scoped>
</style>
