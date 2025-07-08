<script setup>
import { useI18n } from "vue-i18n";
import settings from "@/data/configs";

const { t } = useI18n({
    inheritLocale: true,
    useScope: "local",
});

// Define props
const props = defineProps({
    showModal: Function,
    isOpen: Boolean
});

// Define emits
const emit = defineEmits(['close-menu']);

// Emit close-menu event
const closeMenu = () => {
    emit("close-menu");
};
</script>

<template>
    <!-- Header links -->
    <div
        :class="isOpen ? 'block' : 'hidden'"
        class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
    >
        <NuxtLink
            to="/"
            @click="closeMenu"
            class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-blue-600 dark:hover:text-blue-300 sm:mx-4 mb-2 sm:py-2"
            aria-label="Home"
            >{{ t("Home") }}</NuxtLink
        >
        <NuxtLink
            v-if="settings.show_blog"
            to="/blog"
            @click="closeMenu"
            class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-blue-600 dark:hover:text-blue-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="Blog"
            >{{ t("Blog") }}</NuxtLink
        >
        <NuxtLink
            to="/projects"
            @click="closeMenu"
            class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-blue-600 dark:hover:text-blue-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="Projects"
            >{{ t("Projects") }}</NuxtLink
        >
        <NuxtLink
            to="/about"
            @click="closeMenu"
            class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-blue-600 dark:hover:text-blue-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="About Me"
            >{{ t("About Me") }}</NuxtLink
        >
        <NuxtLink
            to="/contact"
            @click="closeMenu"
            class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-blue-600 dark:hover:text-blue-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="Contact"
            >{{ t("Contact") }}</NuxtLink
        >
        <div
           v-if="settings.show_hire_me" class="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark" 
        >
            <button
                class="font-general-medium sm:hidden block text-left text-md font-medium bg-blue-500 hover:bg-blue-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-500"
                @click="showModal()"
                aria-label="Hire Me Button"
            >
                {{ t("Hire Me") }}
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
