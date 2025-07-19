<template>
  <div>
    <!-- Header -->
    <AppHeader />
    
    <!-- Main content -->
    <main class="main-content">
      <slot />
    </main>
    <WhatsApp/>
    <CustomBackToTop
      :visibleoffset="300"
      right="20px"
      bottom="25px"
    />
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
// Import the header and footer components
import AppHeader from '~/components/shared/AppHeader.vue'
import AppFooter from '~/components/shared/AppFooter.vue'
import WhatsApp from '~/components/shared/WhatsApp.vue';
import CustomBackToTop from '~/components/shared/CustomBackToTop.vue';
</script> 