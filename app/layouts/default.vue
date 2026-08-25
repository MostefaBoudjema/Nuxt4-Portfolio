<template>
  <div :dir="isArabic ? 'rtl' : 'ltr'" :class="{ rtl: isArabic }"
    class="relative min-h-screen overflow-x-hidden bg-dark md:before:absolute md:before:inset-0 md:before:-z-10 md:before:bg-[url('/images/bg-circuit.svg')] md:before:bg-no-repeat md:before:bg-cover md:before:bg-center md:before:opacity-50">
    <div v-if="isDark"
      class="fixed inset-0 -z-20 bg-gradient-to-b from-primary-dark via-secondary-dark to-ternary-dark transition-colors duration-500" />

    <NuxtLoadingIndicator :color="'#3b82f6'" :height="3" />
    <SharedAppHeader />
    <main class="main-content">
      <slot />
    </main>
    <client-only>
      <SharedAiChatbot />
      <ReusableWhatsApp />
      <ReusableCustomBackToTop :visibleoffset="300" right="10px" bottom="10px" />
    </client-only>
    <SharedAppFooter />
    <SpeedInsights />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
import { onMounted, watch, ref, computed, nextTick } from 'vue'

const { locale }=useI18n()
const isArabic=computed(() => locale.value==='ar')

// Detect dark mode
const isDark=ref(false)

function updateDark() {
  isDark.value=document.documentElement.classList.contains('dark')
}

onMounted(() => {
  updateDark()
  // Listen for class changes (e.g., via theme switcher)
  const observer=new MutationObserver(() => updateDark())
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

  // Stars animation (only if dark)




})
</script>