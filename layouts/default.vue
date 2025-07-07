<template>
  <div>
    <!-- Header -->
    <AppHeader />
    
    <!-- Main content -->
    <main>
      <slot />
    </main>
    
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
// Import the header and footer components
import AppHeader from '~/components/shared/AppHeader.vue'
import AppFooter from '~/components/shared/AppFooter.vue'
</script> 