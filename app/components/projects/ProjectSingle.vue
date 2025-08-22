<script setup>
import { useI18n } from "vue-i18n";
// import { useStore } from "vuex";
import { onMounted, defineProps } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocalePath } from '#i18n'

gsap.registerPlugin(ScrollTrigger);

const props=defineProps({
    project: {
        type: Object,
        required: true
    }
});

const { t, locale }=useI18n({
    inheritLocale: true,
    useScope: "global",
});

// const store=useStore();
// const setPageId=(id) => store.dispatch('setPageId', id);
const setPageId=(id) => console.log('Page ID:', id);
const localePath=useLocalePath();
onMounted(() => {
    const mm=gsap.matchMedia();

    // Animation only applies on desktop-sized screens
    mm.add("(min-width: 991px)", () => {

        gsap.fromTo(
            ".single",
            // Initial state
            {
                opacity: 0,
                y: 10
            },
            // Target state
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                delay: 0.3,
                stagger: 0.9,
                ease: "elastic",
                scrollTrigger: {
                    trigger: ".single",       // Element that triggers the animation
                    start: "top 80%",         // Animation starts when top of element hits 80% viewport height
                    end: "bottom 10%",        // Animation ends when bottom reaches 10% viewport height
                    toggleActions: "restart none none none", // Control what happens on enter/leave
                    scrub: 5,                 // Smooth scrubbing
                    // markers: true,         // Uncomment for debugging
                },
            }
        );

    });
});

</script>

<template>
    <div v-if="!props.project.hide">
        <div class="flex justify-center">
            <NuxtLink :to="localePath(`/projects/${props.project.link}`)" @click="setPageId(props.project.id)"
                class="single rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
                aria-label="Single Project" style="position: relative; display: inline-block;">
                <NuxtImg :src="props.project.img" :alt="props.project.title" class="rounded-t-xl border-none"
                    style="width: 100%; height: auto;" />
                <template v-for="(smallImg, index) in props.project.smallImages" :key="index">
                    <NuxtImg :src="smallImg.src" :alt="smallImg.alt" :style="{
        position: 'absolute',
        top: index * 50 + 'px',
        right: '0',
        width: smallImg.width || '50px',
        height: smallImg.height || '50px',
    }" />
                </template>
            </NuxtLink>
        </div>
        <div class="text-center px-4 py-6 d-flex justify-content-center align-items-center">
            <p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
                {{ t(props.project.title) }}
                <a v-if="(locale === 'ar'
        ? (props.project.projectInfo.companyInfos[2].detailsAr || props.project.projectInfo.companyInfos[2].details)
        : props.project.projectInfo.companyInfos[2].details) !== '#'" :href="locale === 'ar'
        ? (props.project.projectInfo.companyInfos[2].detailsAr || props.project.projectInfo.companyInfos[2].details)
        : props.project.projectInfo.companyInfos[2].details" target="_blank"
                    class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
                    {{ t("link") }}
                    <i class="bi bi-box-arrow-up-right text-blue-500 ms-1"></i>
                </a>


            </p>
            <span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light pb-5">
                {{ t(props.project.category) }}
            </span>
            <br v-if="props.project.projectInfo.companyInfos[2].details != '#'" />
            <br v-if="props.project.projectInfo.companyInfos[2].details != '#'" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.text-link {
    --tw-text-opacity: 1;
    text-align: center;
    color: rgb(60 50 256 / var(--tw-text-opacity));
}
</style>
