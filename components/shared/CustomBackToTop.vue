<template>
  <div v-if="visible" 
       @click="scrollToTop"
       class="custom-back-to-top"
       :style="{ right: right, bottom: bottom }">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4L4 12H9V20H15V12H20L12 4Z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  visibleoffset: {
    type: Number,
    default: 300
  },
  right: {
    type: String,
    default: '30px'
  },
  bottom: {
    type: String,
    default: '40px'
  }
})

const visible = ref(false)

const checkScroll = () => {
  visible.value = window.pageYOffset > props.visibleoffset
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  checkScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style scoped>
.custom-back-to-top {
  position: fixed;
  z-index: 1000;
  background: #2563eb;
  color: #fff;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  border: none;
  cursor: pointer;
  transition: background 0.3s;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.3s ease forwards;
}

.custom-back-to-top:hover {
  background: #1e40af;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 