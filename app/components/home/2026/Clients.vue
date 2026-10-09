<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { data: clients } = await useFetch('/api/v1/clients');

const { t, locale } = useI18n({ inheritLocale: true, useScope: 'global' });

const rtlLocales = ['ar', 'he', 'fa', 'ur'];
const isRtl = computed(() => rtlLocales.includes(locale.value));
</script>

<template>
  <section class="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
    <div class="sm:container sm:mx-auto">
      <div class="flex items-center gap-3 mb-8">
        <div class="h-px flex-1 bg-ternary-dark/8 dark:bg-ternary-light/8"></div>
        <p class="text-xs font-medium uppercase tracking-widest text-ternary-dark/40 dark:text-ternary-light/40 shrink-0">{{ t('Trusted by Growing Businesses') }}</p>
        <div class="h-px flex-1 bg-ternary-dark/8 dark:bg-ternary-light/8"></div>
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
          class="h-10 sm:h-12 w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition will-change-transform"
        />

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
