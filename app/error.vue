<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLocalePath } from '#i18n';

const props = defineProps({
  error: Object
});

const { t, locale } = useI18n({ inheritLocale: true, useScope: 'global' });
const localePath = useLocalePath();

const rtlLocales = ['ar', 'he', 'fa', 'ur'];
const isRtl = computed(() => rtlLocales.includes(locale.value));

const statusCode = computed(() => props.error?.statusCode || 500);
const is404 = computed(() => statusCode.value === 404);

const handleError = () => clearError({ redirect: localePath('/') });
</script>

<template>
  <div :dir="isRtl ? 'rtl' : 'ltr'" class="min-h-screen bg-dark relative overflow-hidden flex items-center justify-center p-4">
    <!-- Background effects matching the layout -->
    <div class="absolute inset-0 -z-10 bg-[url('/images/bg-circuit.svg')] bg-no-repeat bg-cover bg-center opacity-30"></div>
    <div class="fixed inset-0 -z-20 bg-gradient-to-b from-primary-dark via-secondary-dark to-ternary-dark"></div>

    <div class="relative max-w-2xl w-full text-center">
      <!-- Glow effect -->
      <div class="absolute -inset-10 rounded-full bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-fuchsia-500/20 blur-3xl opacity-50"></div>
      
      <div class="relative bg-white/5 dark:bg-ternary-dark/30 backdrop-blur-xl border border-white/10 dark:border-ternary-dark/50 rounded-3xl p-8 sm:p-12 shadow-2xl">
        <!-- Error Code -->
        <h1 class="text-8xl sm:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 animate-pulse">
          {{ statusCode }}
        </h1>
        
        <!-- Error Message -->
        <h2 class="mt-6 text-2xl sm:text-4xl font-bold text-primary-light">
          {{ is404 ? t('PageNotFound', 'Page Not Found') : t('ErrorOccurred', 'An error occurred') }}
        </h2>
        
        <p class="mt-4 text-lg text-ternary-light/80 max-w-md mx-auto">
          {{ is404 
            ? t('PageNotFoundDesc', "The page you're looking for doesn't exist or has been moved.") 
            : (error.message || t('ErrorDesc', "We encountered an unexpected error. Please try again later.")) 
          }}
        </p>

        <!-- Action Buttons -->
        <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            @click="handleError"
            class="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 font-medium shadow-lg shadow-blue-500/20 transition-all transform hover:scale-105 active:scale-95"
          >
            <i class="bi bi-house-door me-2"></i>
            {{ t('GoHome', 'Go Back Home') }}
          </button>
          
          <NuxtLink 
            :to="localePath('/contact')"
            class="inline-flex items-center justify-center rounded-xl border border-white/10 dark:border-ternary-dark/80 bg-white/5 dark:bg-ternary-dark/40 backdrop-blur px-8 py-3 font-medium text-primary-light hover:bg-white/10 dark:hover:bg-ternary-dark/60 transition-all transform hover:scale-105"
          >
            <i class="bi bi-envelope me-2"></i>
            {{ t('ContactSupport', 'Report Problem') }}
          </NuxtLink>
        </div>

        <!-- Fun element -->
        <div class="mt-12 pt-8 border-t border-white/10 dark:border-white/5">
          <p class="text-sm text-ternary-light/40">
            &copy; {{ new Date().getFullYear() }} {{ t('authorName', 'Mostefa Boudjema') }}. {{ t('AllRightsReserved', 'All rights reserved.') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(0.98);
  }
}
</style>
