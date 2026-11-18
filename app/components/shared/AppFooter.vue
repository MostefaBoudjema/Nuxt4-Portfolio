<script setup>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const { data: socials } = await useFetch('/api/v1/social-links', {
    key: 'social-links',
    query: { lang: locale },
    watch: [locale],
    default: () => [],
});
</script>

<template>
    <div class="container mx-auto">
        <div
            class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
        >
            <!-- Footer social links -->
            <div
                class="flex flex-col justify-center items-center mb-12 sm:mb-20"
            >

                
      <ReusableSectionDivider  :title="t('Contact me')" />
                <ul class="flex gap-2 sm:gap-10">
                    <li v-for="social in socials" :key="social.id">
                        <a
                            :href="social.url"
                            target="__blank"
                            :aria-label="social.name || 'Social link'"
                            class="block text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"
                        >
                            <i
                                :class="`bi bi-${social.icon} text-2xl sm:text-4xl`"
                            ></i>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Footer copyright -->
            <!-- <FooterCopyright /> -->
        </div>
    </div>
</template>

<style scoped></style>
