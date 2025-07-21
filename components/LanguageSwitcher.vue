<script setup>
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'
import { useRuntimeConfig } from '#imports'
const { locale, setLocale } = useI18n()

// List of supported languages
const languages = [
  { code: 'ar', label: 'العربية' },
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' }
]

// Theme detection (using Tailwind's dark mode class on html)
const theme = ref('light');
if (typeof window !== 'undefined') {
  theme.value = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  // Listen for theme changes if needed
  const observer = new MutationObserver(() => {
    theme.value = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
}

function onLangChange(event) {
  setLocale(event.target.value);
}

const runtimeConfig = useRuntimeConfig();
const showMultiLang = runtimeConfig.public?.showMultiLang === true || runtimeConfig.public?.showMultiLang === 'true';
</script>

<template>
  <div class="relative inline-block w-fit">
    <select
      v-if="showMultiLang"
      :value="locale"
      @change="onLangChange"
      :class="[
        'rounded px-2 py-1 font-semibold pr-8',
        'outline-none focus:outline-none',
      ]"
      aria-label="Language Switcher"
    >
      <option v-for="lang in languages" :key="lang.code" :value="lang.code">
        {{ lang.label }}
      </option>
    </select>
    <!-- Custom dropdown arrow -->
    <span
      v-if="showMultiLang"
      class="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2"
    >
      <svg
        class="text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </span>
  </div>
</template>

<style scoped>
select {
  font-family: GeneralSans-Regular;
  font-weight: 600;
  min-width: 90px;
  box-shadow: none;
  /* Hide default dropdown arrow for most browsers */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: none;
}
select:focus {
  box-shadow: none;
  /* border-color removed, handled by Tailwind */
}
</style>
