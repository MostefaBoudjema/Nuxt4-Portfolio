<template>
  <div class="case-study-root w-full" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <!-- 1. HERO SECTION: Value Proposition + Instant Action -->
    <section class="hero-section pt-4 sm:pt-8 pb-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        <!-- Left: Value Proposition -->
        <div class="lg:col-span-5 flex flex-col justify-center">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold w-fit mb-4 uppercase tracking-wider">
            <i class="bi bi-star-fill text-[10px]"></i>
            <span>{{ t('Featured Case Study') }}</span>
          </div>

          <h1 class="font-general-semibold text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary-dark dark:text-white leading-[1.15]">
            {{ t(heroData.title) }}
          </h1>

          <p class="font-general-regular text-base sm:text-lg text-ternary-dark/90 dark:text-gray-300 mt-5 leading-relaxed">
            {{ t(heroData.hook) }}
          </p>

          <!-- Mobile Only Primary CTA button for fast conversion -->
          <div class="mt-6 flex sm:hidden">
            <a
              v-if="heroData.liveUrl"
              :href="heroData.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition"
            >
              <span>{{ t('Visit Live Site') }}</span>
              <i class="bi bi-arrow-up-right"></i>
            </a>
          </div>
        </div>

        <!-- Right: Dual Browser Mockup Carousel with Captions -->
        <div class="lg:col-span-7">
          <div class="relative">
            <!-- Slides Container (2-up on desktop, 1 on mobile/tablet or when single image) -->
            <div
              class="grid gap-4 sm:gap-6"
              :class="visibleSlides.length === 1 ? 'grid-cols-1 max-w-xl mx-auto' : 'grid-cols-1 sm:grid-cols-2'"
            >
              <div
                v-for="(slide, idx) in visibleSlides"
                :key="slide.id || idx"
                class="flex flex-col group"
              >
                <!-- Browser Window Mockup Frame -->
                <div
                  @click="openLightbox(slide.img, slide.caption)"
                  class="rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-900/90 shadow-2xl overflow-hidden cursor-pointer hover:border-blue-500/60 dark:hover:border-blue-500/60 transition-all duration-300 transform group-hover:-translate-y-1"
                >
                  <!-- Browser Top Navigation Bar -->
                  <div class="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#0e1726] border-b border-gray-800/80">
                    <div class="flex items-center gap-1.5">
                      <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                      <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                      <div class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <!-- Fake Address Bar -->
                    <div class="mx-auto flex items-center justify-center text-[10px] sm:text-xs text-gray-400 bg-gray-800/80 px-3 py-0.5 rounded-md max-w-[200px] w-full truncate font-mono">
                      <i class="bi bi-lock-fill mr-1 text-[9px] text-emerald-400"></i>
                      <span>{{ slide.urlBar || projectDomain }}</span>
                    </div>
                    <div class="w-8"></div>
                  </div>

                  <!-- Browser Content Image -->
                  <div class="relative aspect-[16/10] bg-gray-950 overflow-hidden">
                    <NuxtImg
                      :src="slide.img"
                      :alt="slide.caption"
                      class="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <!-- Subtle Hover Zoom Overlay -->
                    <div class="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span class="p-2 rounded-full bg-black/60 text-white backdrop-blur text-sm">
                        <i class="bi bi-arrows-fullscreen"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Subtle Caption Below Slide -->
                <p v-if="slide.caption" class="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mt-2.5 text-center line-clamp-1">
                  {{ typeof slide.caption === 'string' ? t(slide.caption) : '' }}
                </p>
              </div>
            </div>

            <!-- Carousel Controls (Previous / Next / Dots) -->
            <div v-if="allSlides.length > 2" class="flex items-center justify-between sm:justify-end gap-3 mt-4 px-1">
              <div class="flex items-center gap-1.5">
                <button
                  v-for="(_, dotIdx) in Math.ceil(allSlides.length / 2)"
                  :key="dotIdx"
                  @click="currentSlidePage = dotIdx"
                  :aria-label="`Go to slide page ${dotIdx + 1}`"
                  class="h-2 rounded-full transition-all duration-300"
                  :class="currentSlidePage === dotIdx ? 'w-6 bg-blue-600 dark:bg-blue-400' : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400'"
                ></button>
              </div>

              <div class="flex items-center gap-2">
                <button
                  @click="prevSlide"
                  class="p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 shadow-sm transition"
                  aria-label="Previous Slides"
                >
                  <i class="bi bi-chevron-left text-xs"></i>
                </button>
                <button
                  @click="nextSlide"
                  class="p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 shadow-sm transition"
                  aria-label="Next Slides"
                >
                  <i class="bi bi-chevron-right text-xs"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Metadata Bar (Horizontal Pills + Primary CTA) -->
      <div class="mt-8 sm:mt-12 p-3.5 sm:p-5 rounded-2xl bg-white/70 dark:bg-[#0c1626]/80 backdrop-blur-md border border-gray-200/90 dark:border-gray-800/90 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <!-- Left: Stack Badges & Meta -->
        <div class="flex flex-wrap items-center gap-2.5">
          <!-- Tech Stack Pill Badges with Icons -->
          <div
            v-for="(tech, i) in techStackPills"
            :key="i"
            class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 dark:bg-[#142238] border border-gray-200 dark:border-gray-700/80 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 shadow-sm transition hover:border-blue-500/50"
          >
            <NuxtImg :src="tech.icon" :alt="tech.name" class="w-4 h-4 object-contain" />
            <span>{{ tech.name }}</span>
          </div>

          <!-- Divider -->
          <span class="hidden sm:inline-block w-px h-6 bg-gray-300 dark:bg-gray-700 mx-1"></span>

          <!-- Role Pill -->
          <div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gray-100 dark:bg-[#142238] border border-gray-200 dark:border-gray-700/80 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
            <span class="text-gray-400 dark:text-gray-500 font-normal">{{ t('Role') }}:</span>
            <span class="font-semibold">{{ t(heroData.role || 'Full-Stack Dev') }}</span>
          </div>

          <!-- Date Pill -->
          <div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gray-100 dark:bg-[#142238] border border-gray-200 dark:border-gray-700/80 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
            <span class="text-gray-400 dark:text-gray-500 font-normal">{{ t('Date') }}:</span>
            <span class="font-semibold">{{ t(heroData.date || 'Jan 2026') }}</span>
          </div>
        </div>

        <!-- Right: Primary CTA Button -->
        <div class="hidden sm:flex items-center">
          <a
            v-if="heroData.liveUrl"
            :href="heroData.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm bg-white text-gray-900 hover:bg-gray-100 dark:bg-white dark:text-gray-900 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap border border-gray-200 dark:border-transparent"
          >
            <span>{{ t('Visit Live Site') }}</span>
            <i class="bi bi-arrow-up-right text-xs"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- 2. CORE FEATURES BENTO GRID -->
    <section class="bento-section py-12 sm:py-16 border-t border-gray-200/80 dark:border-gray-800/80">
      <div class="mb-8 sm:mb-10">
        <h2 class="font-general-semibold text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-dark dark:text-white tracking-tight">
          {{ t(bentoData.heading || 'Core Features Bento Grid') }}
        </h2>
        <p v-if="bentoData.subtitle" class="font-general-regular text-sm sm:text-base text-ternary-dark dark:text-gray-400 mt-2">
          {{ t(bentoData.subtitle) }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        <div
          v-for="card in bentoData.cards"
          :key="card.id"
          class="bento-card group rounded-2xl p-6 bg-white/70 dark:bg-[#0c1626]/80 backdrop-blur border border-gray-200 dark:border-gray-800/90 shadow-sm hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <!-- Card Icon -->
            <div class="w-12 h-12 rounded-xl bg-gray-100 dark:bg-[#14233c] border border-gray-200 dark:border-gray-700/60 flex items-center justify-center text-xl text-blue-600 dark:text-blue-400 mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 dark:group-hover:text-white transition-all duration-300">
              <i :class="card.icon"></i>
            </div>

            <!-- Title -->
            <h3 class="font-bold text-lg text-primary-dark dark:text-white mb-2.5">
              {{ t(card.title) }}
            </h3>

            <!-- Description -->
            <p class="text-sm text-ternary-dark/90 dark:text-gray-400 leading-relaxed">
              {{ t(card.description) }}
            </p>
          </div>

          <!-- Bottom subtle indicator -->
          <div class="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between text-xs text-gray-400">
            <span class="font-mono text-[11px] text-blue-500 dark:text-blue-400">{{ card.badge || t('Feature') }}</span>
            <i class="bi bi-arrow-right opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-blue-500"></i>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. STRUCTURED CASE STUDY: "Problem → Solution → Architecture" -->
    <section class="highlights-section py-12 sm:py-16 border-t border-gray-200/80 dark:border-gray-800/80">
      <div class="mb-8 sm:mb-10">
        <h2 class="font-general-semibold text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-dark dark:text-white tracking-tight">
          {{ t(highlightsData.heading || 'Key Technical Highlights') }}
        </h2>
        <p v-if="highlightsData.subtitle" class="font-general-regular text-sm sm:text-base text-ternary-dark dark:text-gray-400 mt-2">
          {{ t(highlightsData.subtitle) }}
        </p>
      </div>

      <!-- 3-Column Structured Comparison Panel -->
      <div class="rounded-2xl bg-white/70 dark:bg-[#0c1626]/80 backdrop-blur border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 dark:divide-gray-800">
          <div
            v-for="(col, cIdx) in highlightsData.columns"
            :key="cIdx"
            class="p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <!-- Column Header -->
              <div class="flex items-center gap-3 mb-4">
                <span
                  class="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                  :class="getColumnBadgeClass(cIdx)"
                >
                  <i :class="getColumnIcon(cIdx)"></i>
                </span>
                <h3 class="font-bold text-lg sm:text-xl text-primary-dark dark:text-white">
                  {{ t(col.title) }}
                </h3>
              </div>

              <!-- Column Lead Summary -->
              <p class="text-sm sm:text-base font-medium text-ternary-dark dark:text-gray-300 leading-relaxed mb-6">
                {{ t(col.summary) }}
              </p>

              <!-- Bullet Points -->
              <ul class="space-y-3.5">
                <li
                  v-for="(pt, pIdx) in col.points"
                  :key="pIdx"
                  class="flex items-start gap-2.5 text-sm text-ternary-dark/90 dark:text-gray-400 leading-normal"
                >
                  <i class="bi bi-check2 text-blue-500 font-bold mt-0.5 shrink-0"></i>
                  <span>{{ t(pt) }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. INTERACTIVE FEATURE SPOTLIGHT (Alternating Z-Pattern) -->
    <section class="spotlight-section py-12 sm:py-16 border-t border-gray-200/80 dark:border-gray-800/80">
      <div class="mb-10 sm:mb-14">
        <h2 class="font-general-semibold text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-dark dark:text-white tracking-tight">
          {{ t(spotlightData.heading || 'Feature Spotlight') }}
        </h2>
        <p v-if="spotlightData.subtitle" class="font-general-regular text-sm sm:text-base text-ternary-dark dark:text-gray-400 mt-2">
          {{ t(spotlightData.subtitle) }}
        </p>
      </div>

      <div class="space-y-16 sm:space-y-24">
        <div
          v-for="(item, idx) in spotlightData.items"
          :key="item.id || idx"
          class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          <!-- Left / Image Column (when not reversed) OR Content Column (when reversed) -->
          <div
            :class="[
              item.reverse ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-7 lg:order-1',
              'order-2'
            ]"
          >
            <!-- When NOT reversed: Show Image in Browser Frame -->
            <template v-if="!item.reverse">
              <div
                @click="openLightbox(item.img, item.title)"
                class="rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-900 shadow-2xl overflow-hidden cursor-pointer hover:border-blue-500/60 dark:hover:border-blue-500/60 transition-all duration-300 group"
              >
                <!-- Browser Bar -->
                <div class="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#0e1726] border-b border-gray-800/80">
                  <div class="flex items-center gap-1.5">
                    <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div class="mx-auto text-[10px] sm:text-xs text-gray-400 bg-gray-800/80 px-3 py-0.5 rounded-md max-w-xs w-full text-center truncate font-mono">
                    <i class="bi bi-lock-fill mr-1 text-[9px] text-emerald-400"></i>
                    <span>{{ item.urlBar || `${projectDomain}/explore` }}</span>
                  </div>
                </div>
                <!-- Image -->
                <div class="relative aspect-[16/10] bg-gray-950 overflow-hidden">
                  <NuxtImg
                    :src="item.img"
                    :alt="item.title"
                    class="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div class="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span class="p-2 rounded-full bg-black/60 text-white backdrop-blur text-sm">
                      <i class="bi bi-arrows-fullscreen"></i>
                    </span>
                  </div>
                </div>
              </div>
            </template>

            <!-- When reversed: Show Bullet points Content -->
            <template v-else>
              <div class="flex flex-col justify-center">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold w-fit mb-3">
                  <i :class="item.icon || 'bi bi-sliders'"></i>
                  <span>{{ t(item.badge || 'Operations & Management') }}</span>
                </div>
                <h3 class="font-general-semibold text-2xl sm:text-3xl font-bold text-primary-dark dark:text-white mb-6">
                  {{ t(item.title) }}
                </h3>

                <ul class="space-y-5">
                  <li
                    v-for="(pt, pIdx) in item.points"
                    :key="pIdx"
                    class="flex items-start gap-3.5"
                  >
                    <div class="w-6 h-6 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      <i class="bi bi-check-lg"></i>
                    </div>
                    <div>
                      <p class="text-base font-bold text-primary-dark dark:text-white">
                        {{ t(pt.title) }}
                      </p>
                      <p class="text-sm text-ternary-dark/90 dark:text-gray-400 mt-1 leading-relaxed">
                        {{ t(pt.desc) }}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </template>
          </div>

          <!-- Right Column -->
          <div
            :class="[
              item.reverse ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-5 lg:order-2',
              'order-1'
            ]"
          >
            <!-- When NOT reversed: Show Bullet points Content -->
            <template v-if="!item.reverse">
              <div class="flex flex-col justify-center">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold w-fit mb-3">
                  <i :class="item.icon || 'bi bi-hammer'"></i>
                  <span>{{ t(item.badge || 'Core Architecture') }}</span>
                </div>
                <h3 class="font-general-semibold text-2xl sm:text-3xl font-bold text-primary-dark dark:text-white mb-6">
                  {{ t(item.title) }}
                </h3>

                <ul class="space-y-5">
                  <li
                    v-for="(pt, pIdx) in item.points"
                    :key="pIdx"
                    class="flex items-start gap-3.5"
                  >
                    <div class="w-6 h-6 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      <i class="bi bi-check-lg"></i>
                    </div>
                    <div>
                      <p class="text-base font-bold text-primary-dark dark:text-white">
                        {{ t(pt.title) }}
                      </p>
                      <p class="text-sm text-ternary-dark/90 dark:text-gray-400 mt-1 leading-relaxed">
                        {{ t(pt.desc) }}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </template>

            <!-- When reversed: Show Image in Browser Frame -->
            <template v-else>
              <div
                @click="openLightbox(item.img, item.title)"
                class="rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-900 shadow-2xl overflow-hidden cursor-pointer hover:border-blue-500/60 dark:hover:border-blue-500/60 transition-all duration-300 group"
              >
                <!-- Browser Bar -->
                <div class="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#0e1726] border-b border-gray-800/80">
                  <div class="flex items-center gap-1.5">
                    <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div class="mx-auto text-[10px] sm:text-xs text-gray-400 bg-gray-800/80 px-3 py-0.5 rounded-md max-w-xs w-full text-center truncate font-mono">
                    <i class="bi bi-lock-fill mr-1 text-[9px] text-emerald-400"></i>
                    <span>{{ item.urlBar || `${projectDomain}/dashboard` }}</span>
                  </div>
                </div>
                <!-- Image -->
                <div class="relative aspect-[16/10] bg-gray-950 overflow-hidden">
                  <NuxtImg
                    :src="item.img"
                    :alt="item.title"
                    class="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div class="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span class="p-2 rounded-full bg-black/60 text-white backdrop-blur text-sm">
                      <i class="bi bi-arrows-fullscreen"></i>
                    </span>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- LIGHTBOX MODAL -->
    <Teleport to="body">
      <div
        v-if="lightboxOpen"
        @click="closeLightbox"
        class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      >
        <div class="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center" @click.stop>
          <!-- Close button -->
          <button
            @click="closeLightbox"
            class="absolute -top-12 right-0 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            aria-label="Close Lightbox"
          >
            <i class="bi bi-x-lg text-lg"></i>
          </button>

          <!-- Large Image -->
          <NuxtImg
            :src="lightboxImg"
            :alt="lightboxCaption"
            class="max-h-[80vh] w-auto max-w-full rounded-xl shadow-2xl object-contain"
          />

          <!-- Caption -->
          <p v-if="lightboxCaption" class="text-white/90 text-sm sm:text-base font-medium mt-4 text-center">
            {{ typeof lightboxCaption === 'string' ? t(lightboxCaption) : '' }}
          </p>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const { locale, t } = useI18n();

const caseStudy = computed(() => props.project?.caseStudy || {});

const projectDomain = computed(() => {
  const p = props.project || {};
  const website = p.projectInfo?.companyInfos?.find((c) => c.title === 'Website')?.details;
  if (website && website !== '#' && website.startsWith('http')) {
    return website.replace(/^https?:\/\//, '').replace(/\/$/, '');
  }
  const cleanLink = (p.link || p.title || 'project').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return `${cleanLink}.demo.app`;
});

const techNameMap = {
  laravel: 'Laravel',
  vue: 'Vue.js',
  php: 'PHP',
  bootstrap: 'Bootstrap',
  react: 'React',
  nuxt: 'Nuxt',
  tailwind: 'Tailwind CSS',
  filament: 'Filament',
  next: 'Next.js',
  supabase: 'Supabase',
  firebase: 'Firebase',
  wordpress: 'WordPress',
  jquery: 'jQuery',
  api: 'REST API',
  javascript: 'JavaScript',
};

const formatTechName = (alt) => {
  if (!alt) return '';
  const key = String(alt).toLowerCase().trim();
  return techNameMap[key] || (key.charAt(0).toUpperCase() + key.slice(1));
};

const extractedTechNames = computed(() => {
  const p = props.project || {};
  const fromImages = (p.smallImages || []).map((img) => formatTechName(img.alt)).filter(Boolean);
  const fromInfo = p.projectInfo?.technologies?.[0]?.techs || [];
  const merged = Array.from(new Set([...fromImages, ...fromInfo]));
  return merged.length ? merged : ['Vue.js', 'JavaScript', 'Tailwind CSS'];
});

const primaryFrontend = computed(() => {
  const techs = extractedTechNames.value;
  return techs.find((t) => /vue|react|nuxt|next/i.test(t)) || techs[0] || 'Modern JavaScript';
});

const primaryBackend = computed(() => {
  const techs = extractedTechNames.value;
  return techs.find((t) => /laravel|php|supabase|firebase|wordpress/i.test(t)) || 'REST API';
});

const primaryStyling = computed(() => {
  const techs = extractedTechNames.value;
  return techs.find((t) => /tailwind|bootstrap|css/i.test(t)) || 'Responsive CSS';
});

const projectIndustry = computed(() => {
  const p = props.project || {};
  const text = `${p.title || ''} ${p.category || ''} ${p.link || ''} ${p.projectInfo?.companyInfos?.map((c) => c.details).join(' ') || ''}`.toLowerCase();
  if (/\b(clinic|doctor|patient|medical|health|dentist|dental|ortho|shifaa|hospital|medic)\b/.test(text)) return 'healthcare';
  if (/\b(car|cars|automotive|dealership|vehicle|vehicles|fleet|garage|motor)\b/.test(text)) return 'automotive';
  if (/\b(shop|store|ecommerce|clothes|phones|market|bidding|auction|printiha)\b/.test(text)) return 'ecommerce';
  if (/\b(school|learn|academy|kindergarten|education|student|students|tuition|ta3limi|edupay|novara|course)\b/.test(text)) return 'education';
  if (/\b(restaurant|pizza|food|dining|menu|hotel|resort|hospitality|mellow|platia|dish)\b/.test(text)) return 'hospitality';
  if (/\b(news|blog|movie|movies|film|shows|media|entertainment|cinema)\b/.test(text)) return 'media';
  if (/\b(hrms|payroll|workforce|employee|inventory|stock|management|cms|event|saas)\b/.test(text)) return 'saas';
  return 'general';
});

const heroData = computed(() => {
  if (caseStudy.value?.hero) {
    return caseStudy.value.hero;
  }

  const p = props.project || {};
  const website = p.projectInfo?.companyInfos?.find((c) => c.title === 'Website')?.details;
  const validWebsite = website && website !== '#' && website.startsWith('http') ? website : null;
  const title = p.singleProjectHeader?.singleProjectTitle || p.title || 'Featured Project';
  const industry = projectIndustry.value;
  const domain = projectDomain.value;

  // Clean hook from objective or synthesize domain-specific hook
  let hook = '';
  if (p.projectInfo?.objectivesDetails) {
    const rawObj = t(p.projectInfo.objectivesDetails);
    const cleaned = rawObj
      .replace(/^(The\s+(core\s+|primary\s+)?objective\s+of\s+.*?is\s+to\s+|Welcome\s+to\s+.*?,\s*)/i, '')
      .trim();
    const sentences = cleaned.match(/[^.!?]+[.!?]+/g);
    hook = sentences && sentences.length
      ? sentences.slice(0, 2).join(' ').trim()
      : cleaned.slice(0, 180) + '...';
    if (hook.length) {
      hook = hook.charAt(0).toUpperCase() + hook.slice(1);
    }
  }

  if (!hook) {
    const hooksByIndustry = {
      automotive: `A high-performance automotive platform engineered with ${primaryFrontend.value} and ${primaryBackend.value} delivering transparent vehicle discovery, dynamic filtering, and dealer management.`,
      ecommerce: `A conversion-focused e-commerce application built with ${primaryFrontend.value} and ${primaryBackend.value} featuring real-time product filtering, seamless cart flows, and secure ordering.`,
      healthcare: `A patient-centric clinical application built with ${primaryFrontend.value} and ${primaryBackend.value} designed to streamline medical appointments, health records, and daily practice workflows.`,
      education: `An educational web platform engineered with ${primaryFrontend.value} providing comprehensive curriculum exploration, student enrollment, and academic administration.`,
      hospitality: `An interactive hospitality platform built with ${primaryFrontend.value} featuring rich digital menus, online table reservations, and streamlined guest coordination.`,
      media: `A dynamic entertainment and content platform engineered with ${primaryFrontend.value} delivering real-time discovery, rich media streaming, and fast filtering.`,
      saas: `A scalable cloud SaaS solution built with ${primaryFrontend.value} and ${primaryBackend.value} automating complex business workflows, user permissions, and analytics.`,
      general: `A modern ${p.category || 'web application'} built with ${primaryFrontend.value} and ${primaryBackend.value} featuring scalable component architecture, responsive design, and robust performance.`,
    };
    hook = hooksByIndustry[industry] || hooksByIndustry.general;
  }

  // Generate slides from projectImages
  const images = (p.projectImages && p.projectImages.length)
    ? p.projectImages
    : (p.img ? [{ id: 0, img: p.img }] : []);

  const slideCaptionsByIndustry = {
    automotive: [
      'Interactive Vehicle Showroom & Search Filters',
      'Vehicle Inspection & Technical Specifications',
      'Dealership Fleet & Stock Management',
      'Customer Inquiries & Booking Workflows',
    ],
    ecommerce: [
      'Interactive Product Catalog & Faceted Filters',
      'Detailed Product View & Variant Selection',
      'Interactive Shopping Cart & Fast Checkout',
      'Merchant Dashboard & Order Processing',
    ],
    healthcare: [
      'Clinical Practice Dashboard & Consultation Queue',
      'Digital Patient Health Records & Consultation History',
      'Appointment Scheduling Calendar & Reminders',
      'Prescription Generation & Practice Settings',
    ],
    education: [
      'Academic Catalog & Course Curriculum Showcase',
      'Course Details, Syllabus & Learning Modules',
      'Student Registration & Online Enrollment',
      'Academic Administration & Progress Records',
    ],
    hospitality: [
      'Visual Digital Menu & Specialty Dishes',
      'Interactive Table Reservation & Booking System',
      'Guest Reviews & Chef Highlights Showcase',
      'Order Coordination & Kitchen POS Flow',
    ],
    media: [
      'Trending Media Explorer & Popular Feed',
      'Detailed Title Overviews & Rating Scores',
      'Cast Filmography & Biography Directory',
      'Curated Watchlists & Media Management',
    ],
    saas: [
      'Executive Analytics & Performance KPI Metrics',
      'Workflow Automation & Task Management',
      'Batch Data Management & Audit Records',
      'System Configuration & Role Governance',
    ],
    general: [
      'Homepage Showcase & Core Navigation',
      'Interactive Feature Explorer & Content Sections',
      'Component Workflow & Responsive Experience',
      'Administrative Portal & Management Controls',
    ],
  };

  const captions = slideCaptionsByIndustry[industry] || slideCaptionsByIndustry.general;
  const paths = ['', '/catalog', '/details', '/portal', '/admin'];

  const slides = images.map((item, idx) => ({
    id: item.id !== undefined ? item.id : idx,
    img: item.img,
    caption: `${idx + 1}. ${captions[idx % captions.length]}`,
    urlBar: `${domain}${paths[idx % paths.length] || ''}`,
  }));

  return {
    title,
    hook,
    role: p.singleProjectHeader?.singleProjectTag || 'Full-Stack Developer',
    date: p.singleProjectHeader?.singleProjectDate || '2026',
    liveUrl: validWebsite,
    liveText: validWebsite ? 'Visit Live Site' : null,
    slides,
  };
});

// Tech stack pill logos mapping
const techStackPills = computed(() => {
  if (heroData.value?.techStack && heroData.value.techStack.length) {
    return heroData.value.techStack;
  }
  if (props.project?.smallImages && props.project.smallImages.length > 0) {
    return props.project.smallImages.map((img) => ({
      name: formatTechName(img.alt),
      icon: img.src,
    }));
  }
  return [
    { name: 'Vue.js', icon: '/images/technology/vue.webp' },
    { name: 'JavaScript', icon: '/images/technology/javascript.webp' },
  ];
});

const bentoData = computed(() => {
  if (caseStudy.value?.bentoGrid) {
    return caseStudy.value.bentoGrid;
  }

  const p = props.project || {};
  const industry = projectIndustry.value;
  const fe = primaryFrontend.value;
  const be = primaryBackend.value;
  const style = primaryStyling.value;

  const industryBento = {
    automotive: [
      {
        id: 1,
        title: 'Vehicle Showroom & Search',
        description: 'Instant multi-criteria search filtering across makes, models, transmission types, mileage, and price bands.',
        icon: 'bi bi-car-front',
        badge: 'Faceted Search',
      },
      {
        id: 2,
        title: 'Inspection & Condition Sheets',
        description: 'Structured multi-point condition verification, high-resolution photo galleries, and maintenance logs.',
        icon: 'bi bi-clipboard-check',
        badge: 'Inspections',
      },
      {
        id: 3,
        title: 'Dealership Fleet Operations',
        description: 'Merchant tools for batch inventory updates, test-drive scheduling, and buyer lead assignment.',
        icon: 'bi bi-building',
        badge: 'Dealer Portal',
      },
      {
        id: 4,
        title: 'High-Performance Architecture',
        description: `Built with ${fe} and ${be} with indexed queries for sub-second responses across extensive inventory.`,
        icon: 'bi bi-speedometer2',
        badge: 'Performance',
      },
    ],
    ecommerce: [
      {
        id: 1,
        title: 'Smart Catalog & Dynamic Filters',
        description: 'Faceted product exploration with live category filtering, search suggestions, and real-time stock indicators.',
        icon: 'bi bi-grid',
        badge: 'Product Catalog',
      },
      {
        id: 2,
        title: 'Variant & SKU Configuration',
        description: 'Instant price recalculation and visual updates for color, size, storage capacity, and bundle options.',
        icon: 'bi bi-tags',
        badge: 'Variant Picker',
      },
      {
        id: 3,
        title: 'Persistent Cart & Quick Checkout',
        description: 'Streamlined purchase flow with automated address validation and instant digital receipt creation.',
        icon: 'bi bi-cart-check',
        badge: 'Conversion Flow',
      },
      {
        id: 4,
        title: 'Secure Order Pipeline',
        description: `Server-side validation powered by ${be} guaranteeing transaction safety and zero price tampering.`,
        icon: 'bi bi-shield-lock',
        badge: 'Order Integrity',
      },
    ],
    healthcare: [
      {
        id: 1,
        title: 'Digital Patient Records (EMR)',
        description: 'Centralized health files storing clinical diagnoses, allergy notes, treatment history, and document attachments.',
        icon: 'bi bi-clipboard2-pulse',
        badge: 'Patient Records',
      },
      {
        id: 2,
        title: 'Consultation Calendar & Queue',
        description: 'Interactive scheduling calendar with automatic conflict detection and live waiting room status tracking.',
        icon: 'bi bi-calendar2-check',
        badge: 'Scheduling',
      },
      {
        id: 3,
        title: 'Digital Prescription Generator',
        description: 'Standardized prescription templates with preset dosages, administration routes, and one-click PDF printing.',
        icon: 'bi bi-file-earmark-medical',
        badge: 'Prescriptions',
      },
      {
        id: 4,
        title: 'Confidentiality & Access Control',
        description: 'Role-scoped authorization protecting patient privacy and sensitive health data across sessions.',
        icon: 'bi bi-shield-check',
        badge: 'Data Privacy',
      },
    ],
    education: [
      {
        id: 1,
        title: 'Curriculum & Program Showcase',
        description: 'Structured academic module directories presenting learning objectives, syllabi, and prerequisites.',
        icon: 'bi bi-journal-bookmark',
        badge: 'Curriculum Hub',
      },
      {
        id: 2,
        title: 'Student Registration & Enrollment',
        description: 'Frictionless enrollment flows with registration validation and automatic student profile generation.',
        icon: 'bi bi-person-check',
        badge: 'Student Onboarding',
      },
      {
        id: 3,
        title: 'Interactive Learning Resources',
        description: 'Support for multimedia learning materials, lecture notes, assignments, and downloadable assets.',
        icon: 'bi bi-laptop',
        badge: 'Learning Hub',
      },
      {
        id: 4,
        title: 'Administrative Academic Records',
        description: 'Centralized management tools for student progress tracking, attendance rosters, and academic reports.',
        icon: 'bi bi-award',
        badge: 'Administration',
      },
    ],
    hospitality: [
      {
        id: 1,
        title: 'Visual Menu & Categories',
        description: 'Rich photographic menu organization categorized by appetizers, main courses, desserts, and chef specials.',
        icon: 'bi bi-cup-hot',
        badge: 'Digital Menu',
      },
      {
        id: 2,
        title: 'Online Reservation Engine',
        description: 'Table booking system with date/time pickers, guest count validation, and instant confirmation notices.',
        icon: 'bi bi-calendar-event',
        badge: 'Reservations',
      },
      {
        id: 3,
        title: 'Mobile-First Touch Navigation',
        description: `Responsive UI designed with ${style} guaranteeing flawless browsing on mobile smartphones and tablets.`,
        icon: 'bi bi-phone',
        badge: 'Mobile-First UI',
      },
      {
        id: 4,
        title: 'Order Flow & Coordination',
        description: 'Structured workflows designed to minimize guest wait times and coordinate dining room orders.',
        icon: 'bi bi-bell',
        badge: 'Operations',
      },
    ],
    media: [
      {
        id: 1,
        title: 'Trending Content Discovery Feed',
        description: 'Live media charts highlighting trending releases, popular shows, and curated editorial selections.',
        icon: 'bi bi-film',
        badge: 'Media Discovery',
      },
      {
        id: 2,
        title: 'Faceted Category & Tag Filters',
        description: 'Instant multi-criteria filtering across genre tags, release years, creator credits, and audience scores.',
        icon: 'bi bi-sliders',
        badge: 'Faceted Filters',
      },
      {
        id: 3,
        title: 'Comprehensive Title Overviews',
        description: 'In-depth media sheets detailing plot synopsis, cast lists, trailers, user reviews, and runtime data.',
        icon: 'bi bi-info-circle',
        badge: 'Media Breakdown',
      },
      {
        id: 4,
        title: 'Optimized Image CDN & Caching',
        description: 'Progressive poster loading and responsive image containers ensuring smooth 60fps scrolling on mobile.',
        icon: 'bi bi-lightning-charge',
        badge: 'High Performance',
      },
    ],
    saas: [
      {
        id: 1,
        title: 'Executive Analytics & KPI Metrics',
        description: 'Real-time performance indicators, department metrics, and exportable operational audit logs.',
        icon: 'bi bi-graph-up',
        badge: 'Analytics',
      },
      {
        id: 2,
        title: 'Automated Workflow Pipelines',
        description: 'Event-driven logic reducing manual repetitive tasks and accelerating end-to-end processing times.',
        icon: 'bi bi-gear-wide-connected',
        badge: 'Automation',
      },
      {
        id: 3,
        title: 'Role-Based Access Governance',
        description: 'Granular role segmentation ensuring data visibility is restricted according to user authorization.',
        icon: 'bi bi-shield-check',
        badge: 'Security & RBAC',
      },
      {
        id: 4,
        title: 'High-Throughput Batch Operations',
        description: 'Batch record operations with automated export generation for invoices, reports, and spreadsheets.',
        icon: 'bi bi-file-earmark-spreadsheet',
        badge: 'Batch Operations',
      },
    ],
    general: [
      {
        id: 1,
        title: 'Component-Driven User Experience',
        description: `Engineered using ${fe} with clean separation of concerns, reusable components, and predictable state.`,
        icon: 'bi bi-display',
        badge: 'Frontend UI',
      },
      {
        id: 2,
        title: 'Robust Backend & API Architecture',
        description: `Powered by ${be} with structured REST endpoints, reliable validation, and error boundaries.`,
        icon: 'bi bi-cpu',
        badge: 'Backend Logic',
      },
      {
        id: 3,
        title: 'Responsive & Accessible Layout',
        description: `Tailored with ${style} for pixel-perfect adaptation across smartphones, tablets, and desktop displays.`,
        icon: 'bi bi-phone',
        badge: 'Responsive UI',
      },
      {
        id: 4,
        title: 'Speed Optimization & Localization',
        description: 'Optimized bundle size with multi-language i18n support and fast client hydration for peak Lighthouse scores.',
        icon: 'bi bi-globe',
        badge: 'Speed & i18n',
      },
    ],
  };

  const cards = industryBento[industry] || industryBento.general;

  return {
    heading: 'Core Features Bento Grid',
    subtitle: `Key capabilities and architectural highlights powering ${p.title || 'this project'}`,
    cards,
  };
});

const highlightsData = computed(() => {
  if (caseStudy.value?.highlights) {
    return caseStudy.value.highlights;
  }

  const p = props.project || {};
  const industry = projectIndustry.value;
  const fe = primaryFrontend.value;
  const be = primaryBackend.value;
  const style = primaryStyling.value;
  const techSummary = extractedTechNames.value.join(', ');

  const industryProblems = {
    automotive: {
      summary: 'Fragmented vehicle listings, opaque vehicle condition records, and inefficient lot inventory synchronization.',
      points: [
        'Buyers facing untrustworthy vehicle listings and missing mechanical inspection histories.',
        'Dealerships relying on manual paperwork to synchronize inventory across web and showroom lots.',
        'Slow page loads when filtering through high-resolution vehicle photo galleries and technical specs.',
      ],
    },
    ecommerce: {
      summary: 'Confusing product variant structures, slow faceted filtering, and friction during the checkout flow.',
      points: [
        'High cart abandonment caused by complex multi-step checkout processes.',
        'Shoppers struggling to differentiate between dozens of product SKUs and color/storage variants.',
        'Sluggish response times when filtering large inventories by multiple technical parameters.',
      ],
    },
    healthcare: {
      summary: 'Paper-based medical filing, delayed patient record lookups, and double-booked clinical consultations.',
      points: [
        'Risk of misplaced medical history charts containing critical allergies and diagnoses.',
        'Front-desk scheduling bottlenecks causing extended waiting room delays for patients.',
        'Strict regulatory requirements for protecting patient confidentiality and sensitive medical data.',
      ],
    },
    education: {
      summary: 'Disconnected course information, manual student enrollment paperwork, and fragmented learning records.',
      points: [
        'Students struggling to find clear prerequisites, syllabi, and upcoming program schedules.',
        'School administrators bogged down by manual registration tracking and paper fee receipts.',
        'Lack of responsive, mobile-accessible portals for students and parents to check progress.',
      ],
    },
    hospitality: {
      summary: 'Outdated static menus, telephone-only table reservations, and poor mobile device user experience.',
      points: [
        'Guests unable to view real-time menu availability and seasonal dish specials on mobile devices.',
        'Lost dining reservations due to missed phone calls and lack of instant confirmation.',
        'Non-responsive web layouts failing to convert smartphone visitors into confirmed guests.',
      ],
    },
    media: {
      summary: 'Heavy API payload latency, slow image rendering for posters and media art, and fragmented title data.',
      points: [
        'Handling high-resolution poster payloads without sacrificing initial page load performance.',
        'Complex third-party API data transformation required for cast, trailers, and reviews.',
        'Ensuring fluid touch navigation across horizontal scroll containers and genre pills on mobile.',
      ],
    },
    saas: {
      summary: 'Fragmented legacy software, manual operational bottlenecks, and lack of unified data oversight.',
      points: [
        'Disparate departmental tools creating data silos and prone to human calculation mistakes.',
        'Absence of automated background workflows causing delays in invoicing and task status updates.',
        'Lack of role-scoped permission architecture to secure sensitive business information.',
      ],
    },
    general: {
      summary: `Building a modern, highly responsive ${p.category || 'web application'} with complex user flows and performance constraints.`,
      points: [
        'Fragmented user experience across disparate legacy tools and non-responsive layouts.',
        'Ensuring strict data consistency, cross-browser compatibility, and fast rendering.',
        'Need for modular state management and secure access controls across views.',
      ],
    },
  };

  const industrySolutions = {
    automotive: {
      summary: `Built a unified automotive portal powered by ${fe} and ${be} with real-time search, inspection checklists, and dealer tools.`,
      points: [
        'Engineered an instant faceted search engine with sub-second filtering across vehicle parameters.',
        'Implemented structured multi-point inspection sheets with high-resolution photo carousels.',
        'Built dedicated dealer workspaces for batch inventory uploads and customer inquiry tracking.',
      ],
    },
    ecommerce: {
      summary: `Delivered a high-conversion storefront combining reactive ${fe} state with a reliable ${be} backend.`,
      points: [
        'Engineered dynamic SKU variant switching with instant price recalculation and visual previews.',
        'Implemented persistent local cart storage with instant synchronization across user sessions.',
        'Streamlined the checkout pipeline to minimize friction and prevent fraudulent order submissions.',
      ],
    },
    healthcare: {
      summary: `Delivered a secure clinical management workspace powered by ${fe} and ${be} for fast daily consultations.`,
      points: [
        'Implemented instant patient search indexing by ID, phone number, and full name.',
        'Built an interactive consultation calendar with conflict detection and live queue tracking.',
        'Integrated automated PDF prescription generation with standardized clinical templates.',
      ],
    },
    education: {
      summary: `Delivered an accessible educational portal with structured course catalogs and digital student enrollment.`,
      points: [
        'Created modular academic course directories with detailed syllabus overviews.',
        'Implemented frictionless registration flows with automatic profile creation.',
        'Built mobile-first responsive layouts ensuring students can access materials on any device.',
      ],
    },
    hospitality: {
      summary: `Designed an appetizing, mobile-first dining portal featuring digital menus and online table reservations.`,
      points: [
        'Built a visual interactive menu with category filters and rich photographic presentations.',
        'Implemented online table booking with date/time pickers and automated confirmation.',
        'Optimized touch interactions and fast page loads for on-the-go smartphone users.',
      ],
    },
    media: {
      summary: `Built an ultrafast entertainment explorer utilizing ${fe} with asynchronous API fetching and lazy loading.`,
      points: [
        'Integrated external media API client with skeleton loaders for perceived instant loading.',
        'Component-driven architecture separating poster cards, hero carousels, and detail modals.',
        'Engineered debounced quick search delivering instant title and cast matches in real time.',
      ],
    },
    saas: {
      summary: `Architected a centralized operational platform using ${fe} and ${be} automating key business processes.`,
      points: [
        'Built real-time KPI metric dashboards giving leadership transparent operational visibility.',
        'Automated background processing pipelines for batch records, invoices, and audit logging.',
        'Implemented strict role-based permission policies (RBAC) across administrative panels.',
      ],
    },
    general: {
      summary: `Delivered a clean, component-driven application tailored to user workflows and client needs.`,
      points: [
        'Engineered a modern, responsive UI with reusable components and predictable state.',
        'Integrated secure APIs with structured error handling and optimized payload transfers.',
        'Implemented end-to-end user navigation with smooth transitions and real-time feedback.',
      ],
    },
  };

  const prob = industryProblems[industry] || industryProblems.general;
  const sol = industrySolutions[industry] || industrySolutions.general;

  return {
    heading: 'Key Technical Highlights',
    subtitle: 'Structured breakdown of domain challenges, execution strategy, and technical stack.',
    columns: [
      {
        id: 'problem',
        title: 'The Problem (Challenge)',
        summary: prob.summary,
        points: prob.points,
      },
      {
        id: 'solution',
        title: 'The Solution (Execution)',
        summary: sol.summary,
        points: sol.points,
      },
      {
        id: 'tech',
        title: 'Technical Highlights',
        summary: `Production-ready stack built using ${techSummary}.`,
        points: [
          `Component architecture utilizing ${fe} with clean separation of concerns and reactive state.`,
          `Scalable data endpoints and business logic powered by ${be} with transactional integrity.`,
          `Mobile-first responsive styling utilizing ${style} with multi-language (i18n) localization.`,
        ],
      },
    ],
  };
});

const spotlightData = computed(() => {
  if (caseStudy.value?.spotlight) {
    return caseStudy.value.spotlight;
  }

  const p = props.project || {};
  const industry = projectIndustry.value;
  const domain = projectDomain.value;
  const images = (p.projectImages && p.projectImages.length)
    ? p.projectImages
    : (p.img ? [{ id: 0, img: p.img }] : []);

  const img1 = images[0]?.img || p.img || '';
  const img2 = images[1]?.img || images[0]?.img || p.img || '';

  const industrySpotlights = {
    automotive: [
      {
        id: 1,
        title: 'Interactive Showroom & Search Filter Engine',
        badge: 'Vehicle Discovery',
        icon: 'bi bi-car-front',
        img: img1,
        urlBar: `${domain}/showroom`,
        reverse: false,
        points: [
          {
            title: 'Faceted Specification Filters',
            desc: 'Instant filtering by vehicle make, body type, fuel economy, transmission, and budget.',
          },
          {
            title: 'Visual Condition Inspection',
            desc: 'Multi-angle high-resolution photo galleries and verified condition checklist overviews.',
          },
          {
            title: 'Test-Drive Booking & Inquiries',
            desc: 'One-click appointment scheduling for physical vehicle viewings and dealer contact.',
          },
        ],
      },
      {
        id: 2,
        title: 'Dealership Fleet Operations & Lead Pipeline',
        badge: 'Dealer Back-Office',
        icon: 'bi bi-speedometer2',
        img: img2,
        urlBar: `${domain}/dealer/dashboard`,
        reverse: true,
        points: [
          {
            title: 'Inventory Stock Management',
            desc: 'Batch listing management with instant status transitions between Draft, Active, and Sold.',
          },
          {
            title: 'Lead & Inquiry Tracking',
            desc: 'Centralized overview of incoming customer requests, trade-in valuations, and booking appointments.',
          },
          {
            title: 'Sales Performance Analytics',
            desc: 'Visual charts detailing lot turnover rate, popular vehicle categories, and gross revenue.',
          },
        ],
      },
    ],
    ecommerce: [
      {
        id: 1,
        title: 'Faceted Catalog & Interactive Variant Studio',
        badge: 'Storefront Experience',
        icon: 'bi bi-bag',
        img: img1,
        urlBar: `${domain}/catalog`,
        reverse: false,
        points: [
          {
            title: 'Live Product Filtering',
            desc: 'Instant multi-attribute search across categories, brands, price tiers, and customer ratings.',
          },
          {
            title: 'Dynamic Variant Selection',
            desc: 'Real-time price recalculation and visual previews when switching sizes, colors, and configurations.',
          },
          {
            title: 'Rich Product Specifications',
            desc: 'Organized tabbed layouts for technical specs, package contents, and verified customer reviews.',
          },
        ],
      },
      {
        id: 2,
        title: 'Persistent Cart & Order Fulfillment Pipeline',
        badge: 'Checkout & Orders',
        icon: 'bi bi-cart3',
        img: img2,
        urlBar: `${domain}/checkout`,
        reverse: true,
        points: [
          {
            title: 'Streamlined One-Page Checkout',
            desc: 'Quick address entry, automated coupon discounts, and instant delivery cost calculations.',
          },
          {
            title: 'Server-Side Price Validation',
            desc: 'Strict backend checks preventing client-side cart manipulation or invalid promotional codes.',
          },
          {
            title: 'Order Status & Tracking',
            desc: 'Automated digital receipt generation and transparent step-by-step parcel fulfillment updates.',
          },
        ],
      },
    ],
    healthcare: [
      {
        id: 1,
        title: 'Clinical Practice Dashboard & Consultation Queue',
        badge: 'Daily Practice Workflow',
        icon: 'bi bi-hospital',
        img: img1,
        urlBar: `${domain}/consultations`,
        reverse: false,
        points: [
          {
            title: 'Live Patient Queue Tracking',
            desc: 'Real-time status overview showing waiting, in-consultation, and completed patient visits.',
          },
          {
            title: 'Vital Signs & Consultation Notes',
            desc: 'Rapid entry for chief complaints, diagnostic notes, and vital biometric indicators.',
          },
          {
            title: 'Patient Medical Timeline',
            desc: 'Chronological consultation history detailing past therapies, allergies, and test findings.',
          },
        ],
      },
      {
        id: 2,
        title: 'Digital Health Records & Prescription Studio',
        badge: 'Records & Prescriptions',
        icon: 'bi bi-file-earmark-medical',
        img: img2,
        urlBar: `${domain}/prescriptions`,
        reverse: true,
        points: [
          {
            title: 'Standardized Medication Formulary',
            desc: 'Quick-select drug library with pre-configured dosages, routes, and duration guidelines.',
          },
          {
            title: 'One-Click Print-Ready PDF',
            desc: 'Formatted clinical prescription header ready for instant thermal or A4 printing.',
          },
          {
            title: 'Secure Health Record Isolation',
            desc: 'Encrypted document attachment storage and strict role-based confidentiality safeguards.',
          },
        ],
      },
    ],
    education: [
      {
        id: 1,
        title: 'Curriculum Showcase & Course Exploration Hub',
        badge: 'Academic Experience',
        icon: 'bi bi-journal-bookmark',
        img: img1,
        urlBar: `${domain}/courses`,
        reverse: false,
        points: [
          {
            title: 'Modular Course Outlines',
            desc: 'Clear breakdown of learning objectives, weekly lesson modules, and required prerequisites.',
          },
          {
            title: 'Instructor Profiles & Credentials',
            desc: 'Faculty showcase highlighting teaching experience, research publications, and office hours.',
          },
          {
            title: 'Instant Online Enrollment',
            desc: 'Frictionless registration workflow with automated seat confirmation and orientation materials.',
          },
        ],
      },
      {
        id: 2,
        title: 'Student Records & Academic Administration',
        badge: 'Academic Operations',
        icon: 'bi bi-mortarboard',
        img: img2,
        urlBar: `${domain}/admin/students`,
        reverse: true,
        points: [
          {
            title: 'Student Roster & Attendance',
            desc: 'Centralized directory for student enrollment status, daily attendance logs, and contact info.',
          },
          {
            title: 'Tuition & Payment Tracking',
            desc: 'Transparent tuition balance tracking with automated digital receipt generation.',
          },
          {
            title: 'Academic Progress & Reports',
            desc: 'Comprehensive grade tracking and printable report cards for parents and guardians.',
          },
        ],
      },
    ],
    hospitality: [
      {
        id: 1,
        title: 'Digital Menu & Photographic Dish Explorer',
        badge: 'Dining Experience',
        icon: 'bi bi-cup-hot',
        img: img1,
        urlBar: `${domain}/menu`,
        reverse: false,
        points: [
          {
            title: 'Categorized Culinary Showcase',
            desc: 'High-definition photography of chef specials, appetizers, main courses, and pairing drinks.',
          },
          {
            title: 'Dietary & Allergen Indicators',
            desc: 'Clear indicators for vegetarian, gluten-free, spicy, and allergy-sensitive options.',
          },
          {
            title: 'Instant Online Table Booking',
            desc: 'Interactive date, time, and guest count reservation selector with immediate confirmation.',
          },
        ],
      },
      {
        id: 2,
        title: 'Dining Room Coordination & Order Flow',
        badge: 'Kitchen Operations',
        icon: 'bi bi-bell',
        img: img2,
        urlBar: `${domain}/admin/reservations`,
        reverse: true,
        points: [
          {
            title: 'Reservation Schedule Management',
            desc: 'Daily floor plan overview showing confirmed tables, pending requests, and walk-ins.',
          },
          {
            title: 'Menu Item Availability Control',
            desc: 'One-click status toggling for sold-out dishes and seasonal chef recommendations.',
          },
          {
            title: 'Guest Feedback & Reviews',
            desc: 'Integrated review collection celebrating favorite dishes and dining experiences.',
          },
        ],
      },
    ],
    media: [
      {
        id: 1,
        title: 'Trending Content Feed & Title Search',
        badge: 'Media Discovery',
        icon: 'bi bi-film',
        img: img1,
        urlBar: `${domain}/explore`,
        reverse: false,
        points: [
          {
            title: 'Curated Trending Charts',
            desc: 'Dynamic rankings highlighting the most popular movies, series, and viral releases.',
          },
          {
            title: 'Debounced Instant Title Search',
            desc: 'Sub-second keyword queries returning matched titles, directors, and actors in real time.',
          },
          {
            title: 'Faceted Genre Discovery',
            desc: 'Quick filter pills switching seamlessly between drama, action, comedy, and sci-fi.',
          },
        ],
      },
      {
        id: 2,
        title: 'Title Detail Sheets & Media Curation',
        badge: 'Title Breakdown',
        icon: 'bi bi-info-circle',
        img: img2,
        urlBar: `${domain}/title/details`,
        reverse: true,
        points: [
          {
            title: 'Complete Synopsis & Meta Data',
            desc: 'Comprehensive overview of release dates, runtimes, production studios, and trailers.',
          },
          {
            title: 'Aggregated Critic & Audience Scores',
            desc: 'Visual score badges giving users immediate clarity on community and critical reception.',
          },
          {
            title: 'Cast & Filmography Directory',
            desc: 'Interactive actor cards linking directly to full talent filmography and biography pages.',
          },
        ],
      },
    ],
    saas: [
      {
        id: 1,
        title: 'Executive Analytics & Performance KPI Dashboards',
        badge: 'Operational Oversight',
        icon: 'bi bi-speedometer2',
        img: img1,
        urlBar: `${domain}/analytics`,
        reverse: false,
        points: [
          {
            title: 'Live Operational KPI Metrics',
            desc: 'Real-time charts tracking activity throughput, turnaround cycle times, and volume trends.',
          },
          {
            title: 'Departmental Headcount & Workload',
            desc: 'Transparent view of workforce allocation and resource distribution across branches.',
          },
          {
            title: 'Automated Alerts & Exceptions',
            desc: 'Instant notifications flagging overdue tasks, pending approvals, and compliance deadlines.',
          },
        ],
      },
      {
        id: 2,
        title: 'Batch Records Management & Audit Logging',
        badge: 'Operations & Governance',
        icon: 'bi bi-sliders',
        img: img2,
        urlBar: `${domain}/dashboard`,
        reverse: true,
        points: [
          {
            title: 'High-Volume Batch Processing',
            desc: 'Execute bulk edits, status approvals, and mass updates across thousands of records.',
          },
          {
            title: 'Automated Document Exporting',
            desc: 'One-click generation of audit-ready PDF invoices, compliance summaries, and spreadsheets.',
          },
          {
            title: 'Granular Role-Based Security',
            desc: 'Comprehensive audit trails tracking every data modification with user timestamps.',
          },
        ],
      },
    ],
    general: [
      {
        id: 1,
        title: 'User Interface & Interactive Navigation Flow',
        badge: 'Frontend Architecture',
        icon: 'bi bi-display',
        img: img1,
        urlBar: `${domain}/overview`,
        reverse: false,
        points: [
          {
            title: 'Intuitive Component Flow',
            desc: 'Designed with clean visual hierarchy, ensuring users can discover and complete actions effortlessly.',
          },
          {
            title: 'Reactive State Updates',
            desc: 'Seamless data binding keeps the interface synchronized without jarring page refreshes.',
          },
          {
            title: 'Responsive & Accessible',
            desc: 'Optimized touch targets, clean typography, and full cross-device adaptation.',
          },
        ],
      },
      {
        id: 2,
        title: 'Data Management & Operations Portal',
        badge: 'Operations & Management',
        icon: 'bi bi-sliders',
        img: img2,
        urlBar: `${domain}/dashboard`,
        reverse: true,
        points: [
          {
            title: 'Streamlined Administrative Controls',
            desc: 'Comprehensive oversight for records, user permissions, and batch data operations.',
          },
          {
            title: 'End-to-End Status Tracking',
            desc: 'Transparent workflows with real-time feedback and state validation at every step.',
          },
          {
            title: 'Reliable Backend Integration',
            desc: 'Connected to robust API endpoints with automated validation, logging, and security auditing.',
          },
        ],
      },
    ],
  };

  const items = industrySpotlights[industry] || industrySpotlights.general;

  return {
    heading: 'Feature Spotlight',
    subtitle: `Direct look into the most critical interfaces powering ${p.title || 'the application'}`,
    items,
  };
});

// Carousel state
const allSlides = computed(() => {
  const slides = heroData.value?.slides || [];
  const domain = projectDomain.value;
  return slides.map((slide, idx) => ({
    id: slide?.id !== undefined ? slide.id : idx,
    img: slide?.img || slide,
    caption: slide?.caption || `${props.project?.title || 'Project'} screenshot ${idx + 1}`,
    urlBar: slide?.urlBar || domain,
  }));
});
const currentSlidePage = ref(0);

const visibleSlides = computed(() => {
  if (!allSlides.value.length) return [];
  const start = currentSlidePage.value * 2;
  const chunk = allSlides.value.slice(start, start + 2);
  if (chunk.length === 1 && allSlides.value.length > 1) {
    // Fill second slot with next or first
    return [chunk[0], allSlides.value[(start + 1) % allSlides.value.length]];
  }
  return chunk;
});

const nextSlide = () => {
  const totalPages = Math.ceil(allSlides.value.length / 2);
  currentSlidePage.value = (currentSlidePage.value + 1) % totalPages;
};

const prevSlide = () => {
  const totalPages = Math.ceil(allSlides.value.length / 2);
  currentSlidePage.value = (currentSlidePage.value - 1 + totalPages) % totalPages;
};

// Lightbox state
const lightboxOpen = ref(false);
const lightboxImg = ref('');
const lightboxCaption = ref('');

const openLightbox = (img, caption) => {
  lightboxImg.value = img;
  lightboxCaption.value = caption || '';
  lightboxOpen.value = true;
};

const closeLightbox = () => {
  lightboxOpen.value = false;
};

const handleKeyDown = (e) => {
  if (e.key === 'Escape' && lightboxOpen.value) {
    closeLightbox();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});

// Column helpers for 3-column structured highlights
const getColumnBadgeClass = (idx) => {
  if (idx === 0) return 'bg-amber-500/10 text-amber-600 dark:text-amber-400';
  if (idx === 1) return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400';
  return 'bg-blue-500/10 text-blue-600 dark:text-blue-400';
};

const getColumnIcon = (idx) => {
  if (idx === 0) return 'bi bi-exclamation-triangle-fill';
  if (idx === 1) return 'bi bi-check-circle-fill';
  return 'bi bi-cpu-fill';
};
</script>

<style scoped>
.bento-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}
.bento-card:hover {
  transform: translateY(-3px);
}
</style>
