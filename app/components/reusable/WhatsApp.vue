<template>
    <a id="whatsapp" :href=whatsappLink data-aos="fade-up" target="_blank">
        <NuxtImg :src="whatsappImag" width="90" height="90" alt="Icon" />
    </a>
</template>

<script setup>
import settings from "~/configs";
const whatsappNumber=settings.whatsappNumber; 
// const whatsappLink=`https://wa.me/${whatsappNumber}?text=message`; 
const whatsappLink=`https://wa.me/${whatsappNumber}`; 
const whatsappImag=settings.whatsapp; 


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