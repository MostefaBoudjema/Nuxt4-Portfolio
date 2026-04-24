<template>
  <div class="fixed bottom-24 right-4 z-50 flex flex-col items-end">
    <!-- Chat Window -->
    <Transition
      enter-active-class="transition ease-out duration-300 transform"
      enter-from-class="opacity-0 translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-95"
    >
      <div
        v-if="isOpen"
        class="mb-4 flex flex-col w-[90vw] md:w-[400px] h-[500px] max-h-[80vh] bg-white dark:bg-ternary-dark rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-primary-dark/30 ring-1 ring-black/5"
      >
        <!-- Header -->
        <div class="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-ternary-dark dark:text-ternary-light shadow-sm">
          <div class="flex items-center gap-3">
            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-ternary-dark shadow-inner border border-gray-100 dark:border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 animate-pulse" viewBox="0 0 24 24" fill="url(#gemini-grad-header)">
                <defs>
                  <linearGradient id="gemini-grad-header" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#4285f4" />
                    <stop offset="50%" stop-color="#9b72cb" />
                    <stop offset="100%" stop-color="#d96570" />
                  </linearGradient>
                </defs>
                <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-lg leading-tight">AI Assistant</h3>
              <p class="text-xs text-gray-500 dark:text-ternary-light/80">Powered by Gemini</p>
            </div>
          </div>
          <button
            @click="toggleChat"
            class="text-ternary-dark dark:text-ternary-light hover:bg-black/10 dark:hover:bg-white/20 p-2 rounded-full transition-colors"
            aria-label="Close Chat"
          >
            <i class="bi bi-x w-5 h-5"></i>
          </button>
        </div>

        <!-- Chat History -->
        <div class="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 dark:bg-ternary-dark" ref="chatContainer">
          <div
            v-for="(msg, index) in chatHistory"
            :key="index"
            class="flex flex-col"
            :class="msg.role === 'user' ? 'items-end' : 'items-start'"
          >
            <div
              class="max-w-[85%] px-4 py-3 rounded-2xl text-sm shadow-sm"
              :class="
                msg.role === 'user'
                  ? 'bg-indigo-600 text-white rounded-tr-sm'
                  : 'bg-white dark:bg-primary-dark text-ternary-dark dark:text-ternary-light rounded-tl-sm border border-gray-100 dark:border-white/10 prose prose-sm dark:prose-invert max-w-none'
              "
            >
              <div v-if="msg.role === 'user'">{{ msg.parts?.[0]?.text || '' }}</div>
              <div v-else v-html="renderMarkdown(msg.parts?.[0]?.text || '')"></div>
            </div>
            <span class="text-[10px] text-gray-400 mt-1 px-1">{{ msg.role === 'user' ? 'You' : 'AI Assistant' }}</span>
          </div>

          <div v-if="isLoading" class="flex items-start">
             <div class="bg-white dark:bg-primary-dark border border-gray-100 dark:border-white/10 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex gap-1 items-center h-10">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
             </div>
          </div>
        </div>

        <!-- Input Area -->
        <form
          @submit.prevent="sendMessage"
          class="p-4 bg-white dark:bg-ternary-dark border-t border-gray-100 dark:border-primary-dark/30"
        >
          <div class="relative flex items-center">
            <input
              v-model="inputMessage"
              type="text"
              placeholder="Ask me anything..."
              class="w-full bg-gray-100 dark:bg-primary-dark/50 text-ternary-dark dark:text-ternary-light border-0 rounded-full pl-5 pr-12 py-3 focus:ring-2 focus:ring-primary-light dark:focus:ring-secondary-light placeholder-gray-400 dark:placeholder-gray-500 transition-shadow text-sm"
              :disabled="isLoading"
            />
            <button
              type="submit"
              class="absolute right-1.5 p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center w-8 h-8"
              :disabled="isLoading || !inputMessage.trim()"
            >
              <i class="bi bi-send w-4 h-4" :class="{'opacity-0': isLoading}"></i>
              <div v-if="isLoading" class="absolute w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            </button>
          </div>
        </form>
      </div>
    </Transition>

    <!-- FAB Trigger -->
    <button
      @click="toggleChat"
      class="group flex items-center justify-center w-14 h-14 bg-white dark:bg-ternary-dark rounded-full shadow-lg shadow-black/10 dark:shadow-primary-dark/30 border border-gray-100 dark:border-primary-dark/30 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
      :aria-label="isOpen ? 'Close AI Assistant' : 'Open AI Assistant'"
      :title="isOpen ? 'Close AI Assistant' : 'Open AI Assistant'"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 transition-transform duration-300 transform group-hover:rotate-12" viewBox="0 0 24 24" fill="url(#gemini-grad-fab)">
        <defs>
          <linearGradient id="gemini-grad-fab" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4285f4" />
            <stop offset="50%" stop-color="#9b72cb" />
            <stop offset="100%" stop-color="#d96570" />
          </linearGradient>
        </defs>
        <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import { marked } from 'marked';

const isOpen = ref(false);
const inputMessage = ref('');
const isLoading = ref(false);
const chatContainer = ref(null);

const chatHistory = ref([
  {
    role: 'model',
    parts: [{ text: 'Hi there! 👋 I am Mostefa\'s AI assistant. Ask me anything about his portfolio, skills, or experience!' }]
  }
]);

const toggleChat = () => {
  isOpen.value = !isOpen.value;
  if(isOpen.value) {
    scrollToBottom();
  }
};

const renderMarkdown = (text) => {
  if (!text) return '';
  return marked(text);
};

const scrollToBottom = async () => {
  await nextTick();
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
};

const sendMessage = async () => {
  const text = inputMessage.value.trim();
  if (!text || isLoading.value) return;

  // Optimistic UI update
  chatHistory.value.push({ role: 'user', parts: [{ text }] });
  inputMessage.value = '';
  isLoading.value = true;
  await scrollToBottom();

  try {
    const response = await $fetch('/api/v1/chat', {
      method: 'POST',
      body: {
        message: text,
        // Send history excluding the initial welcome message and the latest user message
        history: chatHistory.value.slice(1, -1).map(msg => ({
          role: msg.role,
          parts: msg.parts
        }))
      }
    });

    if (response && response.reply) {
      chatHistory.value.push({
        role: 'model',
        parts: [{ text: response.reply }]
      });
    }
  } catch (error) {
    console.error('Chat error:', error);
    chatHistory.value.push({
      role: 'model',
      parts: [{ text: error.data.message || 'Sorry, I encountered an error and could not process your request at the moment.' }]
    });
  } finally {
    isLoading.value = false;
    await scrollToBottom();
  }
};
</script>

<style scoped>
/* Scoped styles for the markdown content to ensure it looks good */
:deep(.prose) {
  font-size: 0.875rem; /* text-sm */
  line-height: 1.5;
}
:deep(.prose p:last-child) {
  margin-bottom: 0;
}
:deep(.prose p:first-child) {
  margin-top: 0;
}
:deep(.prose a) {
  color: #10b981; /* Default Nuxt primary light color */
  text-decoration: underline;
}
:deep(.prose code) {
  background-color: rgba(0,0,0,0.05);
  padding: 0.2em 0.4em;
  border-radius: 0.25rem;
  font-size: 85%;
}
.dark :deep(.prose code) {
  background-color: rgba(255,255,255,0.1);
}
</style>
