<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-2/6 mb-7 sm:mb-0">
      <NuxtImg :src="settings.profile_photo" class="rounded-xl w-96" alt="" />
      <ReusableDownloadCv />
      <ReusableContactBtn />
    </div>

    <!-- About details -->
    <div
      class="w-full sm:w-4/6 code-editor-container"
      :class="[$i18n && $i18n.locale === 'ar' ? 'text-right' : 'text-left']"
      :dir="$i18n && $i18n.locale === 'ar' ? 'rtl' : 'ltr'"
    >
      <div class="code-editor-header">
        <div class="code-editor-buttons">
          <div class="code-button red"></div>
          <div class="code-button yellow"></div>
          <div class="code-button green"></div>
        </div>
        <div class="code-editor-title">about-me.js</div>
      </div>
      <div class="code-editor-content">
        <div class="line-numbers">
          <span v-for="n in bios.length" :key="`line-${n}`" class="line-number">{{ n }}</span>
        </div>
        <div class="code-content">
          <p v-for="bio in bios" :key="bio.id"
            class="font-coding mb-4 text-code-light text-lg code-line">
            <span class="code-comment">// </span>{{ bio.bio }}
          </p>
        </div>
      </div>
    </div>
    <!-- About details -->
    <!-- <div class="w-full sm:w-3/6 text-left">
      <div class="flex justify-center mt-10 sm:mt-20">
        <iframe width="560" height="315" :src="settings.videoLinkEn" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import settings from '~/configs';

const { t } = useI18n();

const bios = computed(() => [
  { id: 1, bio: t('AboutMe1') },
  { id: 2, bio: t('AboutMe2') },
  { id: 3, bio: t('AboutMe3') },
  { id: 4, bio: t('AboutMe4') },
  { id: 5, bio: t('AboutMe5') },
]);
</script>

<style scoped>
/* Code Editor Styling */
.code-editor-container {
  background: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid #333;
}

.code-editor-header {
  background: #2d2d30;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #333;
}

.code-editor-buttons {
  display: flex;
  gap: 8px;
  margin-right: 16px;
}

.code-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.code-button.red { background: #ff5f56; }
.code-button.yellow { background: #ffbd2e; }
.code-button.green { background: #27ca3f; }

.code-editor-title {
  color: #cccccc;
  font-size: 14px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 500;
}

.code-editor-content {
  display: flex;
  background: #1e1e1e;
  min-height: 200px;
}

.line-numbers {
  background: #252526;
  padding: 16px 8px;
  border-right: 1px solid #333;
  min-width: 50px;
  text-align: right;
}

.line-number {
  display: block;
  color: #858585;
  font-size: 14px;
  font-family: 'JetBrains Mono', monospace;
  line-height: 1.6;
  margin-bottom: 16px;
}

.code-content {
  padding: 16px;
  flex: 1;
}

.code-line {
  margin-bottom: 16px !important;
  line-height: 1.6;
  color: #d4d4d4;
}

.code-comment {
  color: #6a9955;
  font-weight: 500;
}

/* Dark mode adjustments */
.dark .code-editor-container {
  background: #0d1117;
  border-color: #30363d;
}

.dark .code-editor-header {
  background: #161b22;
  border-bottom-color: #30363d;
}

.dark .line-numbers {
  background: #0d1117;
  border-right-color: #30363d;
}

.dark .code-content {
  background: #0d1117;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .code-editor-container {
    margin-top: 20px;
  }
  
  .line-numbers {
    min-width: 40px;
    padding: 16px 4px;
  }
  
  .code-content {
    padding: 16px 12px;
  }
}
</style>