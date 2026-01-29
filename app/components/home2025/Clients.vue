<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import clients from '@/data/clients';

const { t, locale } = useI18n({ inheritLocale: true, useScope: 'global' });

const rtlLocales = ['ar', 'he', 'fa', 'ur'];
const isRtl = computed(() => rtlLocales.includes(locale.value));
</script>

<template>
  <section class="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
    <div :class="[isRtl ? 'text-right' : 'text-left']">
      <p class="text-sm uppercase tracking-widest text-ternary-dark/60 dark:text-ternary-light/60">Trusted by</p>
      <h2 class="mt-2 text-2xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light">
        {{ t('Some of the brands I have worked with') }}
      </h2>
    </div>

    <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
      <div
        v-for="client in clients"
        :key="client.id"
        class="group rounded-2xl border border-ternary-light/60 dark:border-ternary-dark/80 bg-white/60 dark:bg-ternary-dark/40 backdrop-blur px-4 py-4 flex items-center justify-center hover:shadow-md transition"
      >
        <NuxtImg
          :src="client.imgGray"
          :alt="client.title"
          width="240"
          height="120"
          class="h-10 sm:h-12 w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
