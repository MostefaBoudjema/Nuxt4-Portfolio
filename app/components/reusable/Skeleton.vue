<template>
  <div
    class="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-md"
    :class="[
      widthClass,
      heightClass,
      roundedClass
    ]"
  ></div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  width: {
    type: String,
    default: 'w-full'
  },
  height: {
    type: String,
    default: 'h-4'
  },
  rounded: {
    type: String,
    default: 'rounded-md'
  }
});

const widthClass = computed(() => props.width);
const heightClass = computed(() => props.height);
const roundedClass = computed(() => props.rounded);
</script>
