<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';
import useThemeSwitcher from '~/composables/useThemeSwitcher';

const props = defineProps({
  theme: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['theme-changed']);

const { toggleTheme } = useThemeSwitcher();

const handleToggleTheme = () => {
  toggleTheme();
  const newTheme = props.theme === 'light' ? 'dark' : 'light';
  emit('theme-changed', newTheme);
};

// Ensure feather icons are refreshed when theme changes
import feather from 'feather-icons';
watch(() => props.theme, () => {
  feather.replace();
});
</script>

<template>
  <a href="#" @click.prevent="handleToggleTheme" aria-label="Theme Switcher">
    <i
      v-if="theme === 'light'"
      data-feather="moon"
      class="text-liText-ternary-dark hover:text-gray-400 dark:text-white dark:hover:text-liBorder-primary-light w-5"
    ></i>

    <i
      v-else
      data-feather="sun"
      class="text-gray-200 hover:text-gray-50 w-5"
    ></i>
  </a>
</template>
