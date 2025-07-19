<template>
    <div class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
        <!-- About me counters -->
        <div class="font-general-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center">
            <!-- Years of experience counter -->
            <div class="mb-20 sm:mb-0 text-center sm:text-left">
                <counter ref="counter" :startAmount="0" :endAmount="currentYearMinus2017" :duration="1" :autoinit="true"
                    
                    class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
                    aria-label="About Status Counter" />
                <span class="block text-md text-ternary-dark dark:text-ternary-light">
                    {{ experienceTitle }}
                </span>
            </div>

            <!-- GitHub stars counter -->
            <div class="mb-20 sm:mb-0 text-center sm:text-left">
                <counter ref="counter" :startAmount="0" :endAmount="29" :duration="1" suffix="+" :autoinit="true"
                    
                    class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2" />
                <span class="block text-md text-ternary-dark dark:text-ternary-light">{{ githubTitle }}</span>
            </div>

            <!-- Positive feedback counter -->
            <div class="mb-20 sm:mb-0 text-center sm:text-left">
                <counter ref="counter" :startAmount="0" :endAmount="92" :duration="1" suffix="%" :autoinit="true"
                    
                    class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2" />
                <span class="block text-md text-ternary-dark dark:text-ternary-light">
                    {{ feedbackTitle }}
                </span>
            </div>

            <!-- Projects completed counter -->
            <div class="mb-20 sm:mb-0 text-center sm:text-left">
                <counter ref="counter" :startAmount="0" :endAmount="48" :duration="1" :autoinit="true"
                    
                    class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2" />
                <span class="block text-md text-ternary-dark dark:text-ternary-light">
                    {{ projectsTitle }}
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import counter from "vue3-autocounter";
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

export default {
    components: {
        counter,
    },
    setup() {
        const { t } = useI18n();
        
        const experienceTitle = computed(() => t("Years of experience"));
        const githubTitle = computed(() => t("Stars on GitHub"));
        const feedbackTitle = computed(() => t("Positive feedback"));
        const projectsTitle = computed(() => t("Projects completed"));
        
        const currentYear = new Date().getFullYear();
        const currentYearMinus2017 = currentYear - 2017-4;
        
        return {
            experienceTitle,
            githubTitle,
            feedbackTitle,
            projectsTitle,
            currentYear,
            currentYearMinus2017,
        };
    }
};
</script>
