
<template>
    <div class="mt-10 sm:mt-20">
        
              <ReusableSectionDivider :title="t('Trusted by Growing Businesses')" />
        <div class="grid grid-cols-1 sm:grid-cols-4 sm:mt-14 gap-5">
            <AboutClientSingle
                v-for="client in clients"
                :key="client.id"
                :client="client"
            />
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { data: clients } = await useFetch('/api/v1/clients');
const { t } = useI18n();


const clientsHeading = computed(() => t("Some of the brands I have worked with"));
</script>

