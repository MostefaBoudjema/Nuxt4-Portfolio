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
  <section class="relative overflow-hidden py-16 sm:py-24">
    <!-- Gradient blob background -->
    <div
      aria-hidden="true"
      :class="[
        'absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-[0.07] blur-3xl pointer-events-none bg-gradient-to-br',
        service.gradient,
      ]"
    />

    <div class="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl" :class="isRtl ? 'mr-auto text-right' : 'text-left'">

        <!-- Kicker -->
        <div class="flex items-center gap-3 mb-5">
          <span
            :class="[
              'inline-flex items-center justify-center w-10 h-10 rounded-xl text-white text-xl bg-gradient-to-br',
              service.gradient,
            ]"
          >
            <i :class="service.icon" />
          </span>
          <p class="text-sm font-semibold tracking-widest uppercase text-ternary-dark/50 dark:text-ternary-light/50">
            {{ service.hero.kicker }}
          </p>
        </div>

        <!-- H1 -->
        <h1 class="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.1] text-primary-dark dark:text-primary-light">
          {{ service.hero.headline }}
          <span class="bg-gradient-to-r bg-clip-text text-transparent" :class="service.gradient">
            &nbsp;{{ service.hero.headlineAccent }}
          </span>
        </h1>

        <!-- Subheadline -->
        <p class="mt-6 text-lg sm:text-xl text-ternary-dark/70 dark:text-ternary-light/70 leading-relaxed max-w-2xl">
          {{ service.hero.subheadline }}
        </p>

        <!-- CTAs -->
        <div class="mt-10 flex flex-col sm:flex-row gap-4">
          <NuxtLink
            :to="whatsappLink"
            target="_blank"
            class="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:opacity-90 hover:shadow-xl bg-gradient-to-r"
            :class="service.gradient"
          >
            <i class="bi bi-whatsapp text-lg" />
            {{ service.hero.cta }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/projects')"
            class="inline-flex items-center justify-center gap-2 rounded-xl border border-ternary-dark/15 dark:border-ternary-light/15 px-8 py-4 font-medium text-primary-dark dark:text-primary-light hover:border-ternary-dark/30 dark:hover:border-ternary-light/30 transition-colors duration-150"
          >
            {{ locale === 'ar' ? 'عرض أعمالنا' : (locale === 'fr' ? 'Voir Nos Réalisations' : 'View Our Work') }}
            <span aria-hidden="true">→</span>
          </NuxtLink>
        </div>

        <!-- Trust bar -->
        <div class="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ternary-dark/50 dark:text-ternary-light/50">
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
