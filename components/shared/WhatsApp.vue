<template>
    <a id="whatsapp" :href="`https://api.whatsapp.com/send?phone=${whatsappNumber}`" data-aos="fade-up"
        data-aos-delay="200">
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
    width: 10vh;
    bottom: -20px;
    left: 5px;
    margin-right: .5rem !important;
    margin-left: .5rem !important;
}

img {
    width: 90px;
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
}

@media (max-width: 991px) {
    #whatsapp {
        left: 10px;
    }

    img {
        width: 95px;
    }
}
</style>