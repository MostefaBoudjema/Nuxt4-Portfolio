<script setup>
import { useI18n } from 'vue-i18n';
import { ref, defineProps, defineEmits, computed } from 'vue';
import gsap from 'gsap';
import { useNuxtApp } from '#app';
import useLangSwitcher from '~/composables/useLangSwitcher';

const props = defineProps({
	lang: {
		type: String,
		required: true,
	},
	theme: {
		type: String,
		required: true,
	},
});

const emit = defineEmits(['lang-changed']);

const { t, locale } = useI18n({
	inheritLocale: true,
	useScope: 'global',
});

const { $i18n } = useNuxtApp();
const { currentLang, toggleLang } = useLangSwitcher();

const nextLang = computed(() => locale.value === 'ar' ? 'ar' : 'en');

const togglelang = () => {
  const mainContent = document.querySelector('.main-content');
  const newlang = locale.value === 'ar' ? 'en' : 'ar';
  
  if (mainContent) {
    gsap.to(mainContent, {
      scale: 0.95,
      opacity: 0,
      duration: 0.3,
      ease: 'power1.in',
      onComplete: () => {
        locale.value = newlang;
        localStorage.setItem('lang', newlang);
        emit('lang-changed', newlang);
        gsap.fromTo(mainContent, { scale: 1.05, opacity: 0 }, {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: 'power1.out',
        });
      }
    });
  } else {
    locale.value = newlang;
    localStorage.setItem('lang', newlang);
    emit('lang-changed', newlang);
  }
};
</script>

<template>
	<a href="#" @click.prevent="togglelang" aria-label="lang Switcher">
		<i v-if="theme === 'light'"
			class="text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5">{{ t(nextLang) }}</i>
		<i v-else class="text-gray-200 hover:text-gray-50 w-5">{{ t(nextLang) }}</i>
	</a>
</template>

<style scoped>
i {
	font-family: GeneralSans-Regular;
	font-weight: 600;
	/* color: black; */
}
</style>
