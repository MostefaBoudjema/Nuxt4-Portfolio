<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocalePath } from '#i18n'

const props = defineProps({
  service: { type: Object, required: true },
  whatsappLink: { type: String, required: true },
})

const { locale } = useI18n({ inheritLocale: true, useScope: 'global' })
const localePath = useLocalePath()
const rtlLocales = ['ar', 'he', 'fa', 'ur']
const isRtl = computed(() => rtlLocales.includes(locale.value))
</script>

<template>
  <section class="relative overflow-hidden pt-14 sm:pt-20 pb-14 sm:pb-20">
    <div class="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl" :class="isRtl ? 'mr-auto text-right' : 'text-left'">

        <!-- Kicker -->
        <div :class="['flex items-center gap-3 mb-4', isRtl ? 'flex-row-reverse justify-end' : 'justify-start']">
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-lg border border-blue-200/50 dark:border-blue-900/30 shrink-0"
          >
            <i :class="service.icon" />
          </span>
          <p :class="[
            'text-sm font-medium tracking-wide text-ternary-dark/50 dark:text-ternary-light/50',
            isRtl ? 'text-right' : 'text-left'
          ]">
            {{ service.hero.kicker }}
          </p>
        </div>

        <!-- H1 -->
        <h1 :class="[
          'mt-4 text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1] text-primary-dark dark:text-primary-light',
          isRtl ? 'text-right' : 'text-left'
        ]">
          {{ service.hero.headline }}
          <span class="text-blue-600 dark:text-blue-400">
            &nbsp;{{ service.hero.headlineAccent }}
          </span>
        </h1>

        <!-- Subheadline -->
        <p :class="[
          'mt-5 text-base sm:text-lg text-ternary-dark/70 dark:text-ternary-light/70 max-w-2xl leading-relaxed',
          isRtl ? 'text-right' : 'text-left'
        ]">
          {{ service.hero.subheadline }}
        </p>

        <!-- CTAs -->
        <div :class="['mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4', isRtl ? 'sm:flex-row-reverse' : '']">
          <NuxtLink
            :to="whatsappLink"
            target="_blank"
            class="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-dark dark:bg-primary-light text-primary-light dark:text-primary-dark px-6 py-3.5 font-semibold hover:opacity-90 transition-opacity duration-150"
          >
            <i class="bi bi-whatsapp text-lg" />
            {{ service.hero.cta }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/projects')"
            class="inline-flex items-center justify-center gap-2 rounded-lg border border-ternary-dark/15 dark:border-ternary-light/15 px-6 py-3.5 font-medium text-primary-dark dark:text-primary-light hover:border-ternary-dark/30 dark:hover:border-ternary-light/30 transition-colors duration-150"
          >
            {{ locale === 'ar' ? 'عرض أعمالنا' : (locale === 'fr' ? 'Voir Nos Réalisations' : 'View Our Work') }}
            <span aria-hidden="true" class="text-sm">→</span>
          </NuxtLink>
        </div>

        <!-- Compact trust signals -->
        <div :class="['mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ternary-dark/50 dark:text-ternary-light/50', isRtl ? 'flex-row-reverse' : '']">
          <span>{{ locale === 'ar' ? '٣٠+ عميل سعيد' : (locale === 'fr' ? '30+ Clients Satisfaits' : '30+ Happy Clients') }}</span>
          <span aria-hidden="true" class="hidden sm:inline">·</span>
          <span>{{ locale === 'ar' ? '٥٠+ مشروع مُسلَّم' : (locale === 'fr' ? '50+ Projets Livrés' : '50+ Projects Delivered') }}</span>
          <span aria-hidden="true" class="hidden sm:inline">·</span>
          <span>{{ locale === 'ar' ? 'استشارة أولى مجانية' : (locale === 'fr' ? 'Première Consultation Gratuite' : 'Free First Consultation') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
