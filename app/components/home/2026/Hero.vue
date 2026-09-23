
<template>
  <section class="relative overflow-hidden">
    <!-- Ambient background glow -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div class="absolute top-20 right-1/4 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"></div>
    </div>

    <div class="relative sm:container sm:mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div class="lg:col-span-7" ref="heroTextRef">

           <h1 :class="[
            'mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-tight text-primary-dark dark:text-primary-light',
            isRtl ? 'text-right' : 'text-left'
          ]">
            {{ t('HeroHeadline') }}
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500">
              {{ t('HeroHeadlineAccent') }}
            </span>
          </h1>

          <p :class="[
            'mt-5 text-base sm:text-lg text-ternary-dark/80 dark:text-ternary-light/80 max-w-2xl leading-relaxed',
            isRtl ? 'text-right' : 'text-left'
          ]">
            {{ t('HeroSubtext') }}
          </p>

          <div :class="['mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4', isRtl ? 'sm:flex-row-reverse' : '']">
            <NuxtLink :to="whatsappLink" target="_blank"
              class="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              {{ t('Get a Free Consultation') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/projects')"
              class="inline-flex items-center justify-center gap-2 rounded-xl border border-ternary-light/70 dark:border-ternary-dark/80 bg-white/60 dark:bg-ternary-dark/40 backdrop-blur px-6 py-3.5 font-medium text-primary-dark dark:text-primary-light hover:bg-white/80 dark:hover:bg-ternary-dark/60 transition">
              {{ t('See My Work') }}
              <span aria-hidden="true" class="text-blue-500">→</span>
            </NuxtLink>
          </div>

          <!-- Outcome badges -->
          <div class="mt-10 flex flex-wrap gap-2">
            <span v-for="badge in outcomeBadges" :key="badge.label"
              class="inline-flex items-center gap-1.5 rounded-full border border-ternary-light/60 dark:border-ternary-dark/70 bg-white/50 dark:bg-ternary-dark/30 px-3 py-1 text-xs font-medium text-ternary-dark/80 dark:text-ternary-light/80">
              <span>{{ badge.icon }}</span>
              <span>{{ badge.label }}</span>
            </span>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="relative mx-auto max-w-md">
            <div class="absolute -inset-3 rounded-3xl bg-gradient-to-r from-blue-500/30 via-violet-500/30 to-fuchsia-500/30 blur-2xl"></div>
            <div class="relative rounded-3xl border border-ternary-light/60 dark:border-ternary-dark/80 bg-white/60 dark:bg-ternary-dark/40 backdrop-blur p-4">
              <ReusableThreeImageHover :src="configs.profile_photo" :alt="t('Mostefa Boudjema')" width="800" height="800" />

              <!-- Floating social proof card -->
              <div class="absolute z-10 -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-ternary-light/60 dark:border-ternary-dark/80 bg-white/90 dark:bg-[#0B1220]/90 backdrop-blur-md px-4 py-3 shadow-xl">
                <div class="flex -space-x-2">
                  <span v-for="c in 4" :key="c" class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white dark:border-gray-800 bg-gradient-to-br from-blue-400 to-violet-500 text-xs font-bold text-white">{{ ['A','B','C','D'][c-1] }}</span>
                </div>
                <div>
                  <p class="text-xs font-semibold text-primary-dark dark:text-primary-light">{{ t('HappyClients') }}</p>
                  <p class="text-[10px] text-ternary-dark/60 dark:text-ternary-light/60">{{ t('ClientSatisfaction') }}</p>
                </div>
              </div>

              <!-- Floating delivery badge -->
              <div class="absolute z-10 -top-4 -right-4 flex items-center gap-1.5 rounded-xl border border-ternary-light/60 dark:border-ternary-dark/80 bg-white/90 dark:bg-[#0B1220]/90 backdrop-blur-md px-3 py-2 shadow-xl">
                <span class="text-lg">⚡</span>
                <div>
                  <p class="text-xs font-bold text-primary-dark dark:text-primary-light">{{ t('FastDelivery') }}</p>
                  <p class="text-[10px] text-ternary-dark/60 dark:text-ternary-light/60">{{ t('OnTimeEveryTime') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-14 sm:mt-20 h-px w-full bg-gradient-to-r from-transparent via-ternary-light/60 to-transparent dark:via-ternary-dark/70"></div>
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

const outcomeBadges = computed(() => [
  { icon: '🚀', label: t('Fast Delivery') },
  { icon: '📈', label: t('Revenue-Focused') },
  { icon: '🔒', label: t('Secure & Scalable') },
  { icon: '💎', label: t('Premium Quality') },
  { icon: '🔄', label: t('Ongoing Support') },
]);

import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const heroTextRef = ref(null);

onMounted(() => {
  if (heroTextRef.value) {
    const elements = heroTextRef.value.children;
    gsap.fromTo(elements, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
    );
  }
});
</script>

<style scoped></style>
