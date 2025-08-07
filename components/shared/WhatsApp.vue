<template>
	<a id="whatsapp" class="mx-2" :href="`https://api.whatsapp.com/send?phone=${settings.whatsappNumber}`" data-aos="fade-up" data-aos-delay="200">
		<img :height="70" :src="settings.whatsapp" class="my-4" alt="Icon" />
	</a>
</template>

<script setup>
import settings from "~/configs";


</script>

<style scoped>

#whatsapp {
    z-index: 99;
    position: fixed;
    bottom: -5px;
	width: 10vh;
    left: 10px;
}
@media (max-width: 991px) {
    #whatsapp {
        img {
            width: 75px;
        }
    }
}
</style>