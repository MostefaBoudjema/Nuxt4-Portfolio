<template>
  <div :dir="isArabic ? 'rtl' : 'ltr'" :class="{ rtl: isArabic }"
    class="relative min-h-screen overflow-x-hidden bg-dark before:absolute before:inset-0 before:-z-10 before:bg-[url('/images/bg-circuit.svg')] before:bg-no-repeat before:bg-cover before:bg-center before:opacity-50">
    <div v-if="isDark"
      class="fixed inset-0 -z-20 bg-gradient-to-b from-primary-dark via-secondary-dark to-ternary-dark transition-colors duration-500" />

    <SharedAppHeader />
    <main class="main-content">
      <slot />
    </main>
    <ReusableWhatsApp />
    <ReusableCustomBackToTop :visibleoffset="300" right="10px" bottom="10px" />
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