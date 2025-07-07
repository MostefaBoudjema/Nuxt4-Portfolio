<script>
import AboutClientSingle from "./AboutClientSingle.vue";
import clients from '@/data/clients';
import { useI18n } from 'vue-i18n';

export default {
    components: {
        AboutClientSingle,
    },
    setup() {
        const { t } = useI18n();
        
        return {
            clientsHeading: t("Some of the brands I have worked with"),
            clients: clients,
        };
    },
};
</script>

<template>
    <div class="mt-10 sm:mt-20">
        <p
            class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
        >
            {{ clientsHeading }}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-4 mt-10 sm:mt-14 gap-5">
            <AboutClientSingle
                v-for="client in clients"
                :key="client.id"
                :client="client"
            />
        </div>
    </div>
</template>
