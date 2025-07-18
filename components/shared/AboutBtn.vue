<template>
      <div :class="[
        'mt-0 sm:mt-5 flex justify-center',
        place === 'center' ? 'sm:justify-center' : 'sm:justify-start'
      ]">
        <router-link :to="{ name: 'About' }"
          class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-blue-500 hover:bg-blue-600 focus:ring-1 focus:ring-blue-900 text-white text-lg sm:text-xl duration-300"
          aria-label="About Us">
          <Button :title="$t('About Me')" />
        </router-link>
      </div>
</template>

<script setup>
import { defineProps } from 'vue';
import Button from '@/components/reusable/Button.vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  place: {
    type: String,
    default: 'start',
    validator: (value) => ['start', 'center'].includes(value)
  }
});

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'global',
});
</script>

<style></style>