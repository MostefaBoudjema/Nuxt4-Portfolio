<script setup>
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'
const { locale, locales, setLocale, t } = useI18n()

// Get the list of locales
let localeList = typeof locales === 'function' ? locales() : locales;
localeList = localeList && localeList.value ? localeList.value : localeList;

// Compute the next language code
const nextLang = computed(() => {
  if (!localeList || localeList.length < 2) return '';
  const other = localeList.find(l => l.code !== locale.value);
  return other ? other.code : '';
});

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

function togglelang() {
  if (!nextLang.value) return;
  setLocale(nextLang.value);
}
</script>

<template>
  <a href="#" @click.prevent="togglelang" aria-label="lang Switcher">
    <i v-if="theme === 'light'"
      class="text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5">
      {{ t(nextLang) }}
    </i>
    <i v-else class="text-gray-200 hover:text-gray-50 w-5">
      {{ t(nextLang) }}
    </i>
  </a>
</template>

<style scoped>
i {
	font-family: GeneralSans-Regular;
	font-weight: 600;
}
</style>
