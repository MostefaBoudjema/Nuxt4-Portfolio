<script setup>
import { useI18n } from "vue-i18n";
import settings from "~/configs";
import { useLocalePath } from "#i18n";

const { t, locale } = useI18n({
  inheritLocale: true,
  useScope: "local",
});

const props = defineProps({
  showModal: Function,
  isOpen: Boolean,
});

const emit = defineEmits(["close-menu"]);
const closeMenu = () => emit("close-menu");

const localePath = useLocalePath();

// detect rtl langs
const isRtl = ["ar", "ar-DZ", "ar-SA", "ar-EG"].includes(locale.value);

// full list
const allLinks = [
  { path: "/", label: "Home" },
  { path: "/blog", label: "Blog", show: settings.show_blog },
  { path: "/projects", label: "Projects" },
  { path: "/about", label: "About Me" },
  { path: "/pricing", label: "Pricing", show: settings.show_pricing },
  { path: "/contact", label: "Contact" },
];

// ✅ filtered array (no v-if inside template)
const navLinks = computed(() => allLinks.filter(l => l.show !== false));
</script>

<template>
  <div
    :class="[
      isOpen ? 'block' : 'hidden',
      isRtl ? 'rtl' : '',
      'm-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none',
    ]"
  >
    <!-- Navigation links -->
    <NuxtLink
      v-for="(link, i) in navLinks"
      :key="i"
      :to="localePath(link.path)"
      @click="closeMenu"
      :class="[
        'font-general-medium block text-lg text-nowrap font-medium text-primary-dark dark:text-ternary-light hover:text-blue-600 dark:hover:text-blue-300 sm:mx-4 mb-2 sm:py-2',
        i !== 0 ? 'border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark' : '',
        isRtl ? 'text-right' : 'text-left',
      ]"
      :aria-label="link.label"
    >
      {{ t(link.label) }}
    </NuxtLink>

  </div>
</template>
