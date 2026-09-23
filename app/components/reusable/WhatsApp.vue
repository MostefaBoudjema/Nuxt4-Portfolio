<template>
    <a id="whatsapp" :href=whatsappLink data-aos="fade-up" target="_blank">
        <NuxtImg :src="whatsappImag" width="90" height="90" alt="Icon" />
    </a>
</template>

<script setup>
import settings from "~/configs";
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({ inheritLocale: true, useScope: 'global' });
const whatsappNumber = settings.whatsappNumber; 

const whatsappMessage = computed(() => {
  if (locale.value === 'ar') return encodeURIComponent("مرحباً، أنا مهتم بالحصول على استشارة مجانية.");
  if (locale.value === 'fr') return encodeURIComponent("Bonjour, je suis intéressé par une consultation gratuite.");
  return encodeURIComponent("Hello, I am interested in a free consultation.");
});
const whatsappLink = computed(() => `https://wa.me/${whatsappNumber}?text=${whatsappMessage.value}`); 
const whatsappImag = settings.whatsapp; 
</script>


<style scoped>
#whatsapp {
	z-index: 99;
	position: fixed;
	bottom: 0px !important;
	left: 5px !important;
}

img {
	width: 90px !important;
}

@media (max-width: 991px) {
	#whatsapp {
		bottom: 0px !important;
		left: 5px !important;
	}

	img {
		width: 95px !important;
	}
}
#whatsapp:hover {
    background: color-mix(in srgb, var(--green), transparent 20%);
    transform: translateY(-10px);
}

#whatsapp {
    will-change: transform;
    transform: translateZ(0); /* Promote to compositor layer */
}
</style>