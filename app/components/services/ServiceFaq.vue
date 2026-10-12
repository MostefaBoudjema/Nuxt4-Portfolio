<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  service: { type: Object, required: true },
})

const { locale } = useI18n({ inheritLocale: true, useScope: 'global' })
const rtlLocales = ['ar', 'he', 'fa', 'ur']
const isRtl = computed(() => rtlLocales.includes(locale.value))

const headerTitle = computed(() => {
  if (locale.value === 'ar') return 'الأسئلة الشائعة'
  if (locale.value === 'fr') return 'Questions Fréquemment Posées'
  return 'Frequently Asked Questions'
})
</script>

<template>
  <section class="py-14 sm:py-20">
    <div class="sm:container sm:mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-primary-dark dark:text-primary-light mb-10 text-center">
          {{ headerTitle }}
        </h2>
        <div>
          <SharedFaqList :faqs="service.faq" :columns="1" />
        </div>
      </div>
    </div>
  </section>
</template>
