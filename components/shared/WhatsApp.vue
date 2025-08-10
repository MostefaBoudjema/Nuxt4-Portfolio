<template>
    <a id="whatsapp" :href="`https://api.whatsapp.com/send?phone=${whatsappNumber}`" data-aos="fade-up"
        >
        <img :src="whatsappImag" alt="Icon" />
    </a>
</template>

<script setup>
import settings from "~/configs";
const whatsappNumber=settings.whatsappNumber; // Replace with your WhatsApp number
const whatsappImag=settings.whatsapp; // Replace with your WhatsApp image path


</script>


<style scoped>
#whatsapp {
	z-index: 99;
	position: fixed;
	width: 10vh !important;
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
</style>