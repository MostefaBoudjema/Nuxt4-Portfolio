<template>
  <div class="flex items-center gap-3 mt-10 mb-8">
    <div class="h-px flex-1 bg-ternary-dark/8 dark:bg-ternary-light/8"></div>
    <p class="text-xs font-medium uppercase tracking-widest text-ternary-dark/40 dark:text-ternary-light/40 shrink-0">
      <slot>{{ title }}</slot>
    </p>
    <div class="h-px flex-1 bg-ternary-dark/8 dark:bg-ternary-light/8"></div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
});
</script>
