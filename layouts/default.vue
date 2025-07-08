<template>
  <div>
    <!-- Header -->
    <AppHeader />
    
    <!-- Main content -->
    <main>
      <slot />
    </main>
    <WhatsApp/>
    <BackToTop class="my-backtotop"
      :visibleoffset="300"
      right="30px"
      bottom="40px"
      text="↑"
      customClass="my-backtotop"
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
</script> 