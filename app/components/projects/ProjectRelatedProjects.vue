<template>
    <div class="border-primary-light dark:border-secondary-dark">
        <p
            class="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14" :class="locale==='ar'?'text-right':'text-left'">
            {{ $t(relatedProject.relatedProjectsHeading) }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-4 sm:gap-10 mt-12">
            <!-- <div class="grid grid-cols-1 mt-6 sm:gap-10"> -->
            <div v-for="item in randomItems" :key="item.id">
                <NuxtLink :to="item.link" @click="setPageId(item.id)">
                    <NuxtImg :src="item.img" class="rounded-xl cursor-pointer h-70 w-96" :alt="item.title" />
                </NuxtLink>
                <h3 class="dark:text-white text-center pt-2">
                    {{ item.title }}
                </h3>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
import { computed } from 'vue';

const props=defineProps({
    relatedProject: {
        type: Object,
        required: true
    }
});

const { locale }=useI18n();
const { t }=useI18n({
    inheritLocale: true,
    useScope: "global",
});

const randomItems=computed(() => {
    // console.log('relatedProject:', props.relatedProject);
    const arr=Array.isArray(props.relatedProject.relatedProjects)
        ? props.relatedProject.relatedProjects
        :[];
    // Shuffle the items array using Fisher-Yates shuffle algorithm
    const shuffled=arr.slice(0);
    for (let i=shuffled.length-1; i>0; i--) {
        const j=Math.floor(Math.random()*(i+1));
        [shuffled[i], shuffled[j]]=[shuffled[j], shuffled[i]];
    }
    // Take the first 4 items from the shuffled array
    return shuffled.slice(0, 4);
});

const setPageId=(id) => {
    console.log('Page ID:', id);
};
</script>