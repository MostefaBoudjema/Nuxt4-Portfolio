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
                      <span>{{ slide.urlBar || 'nzidoo.marketplace' }}</span>
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
                <p class="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mt-2.5 text-center line-clamp-1">
                  {{ t(slide.caption) }}
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
                    <span>{{ item.urlBar || 'nzidoo.marketplace/auctions' }}</span>
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
                    <span>{{ item.urlBar || 'nzidoo.marketplace/dashboard' }}</span>
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
            {{ t(lightboxCaption) }}
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

const heroData = computed(() => {
  if (caseStudy.value?.hero) {
    return caseStudy.value.hero;
  }

  const p = props.project || {};
  const website = p.projectInfo?.companyInfos?.find((c) => c.title === 'Website')?.details;
  const validWebsite = website && website !== '#' ? website : null;

  // Clean hook from objective or category
  let hook = '';
  if (p.projectInfo?.objectivesDetails) {
    const rawObj = t(p.projectInfo.objectivesDetails);
    const sentences = rawObj.match(/[^.!?]+[.!?]+/g);
    hook = sentences && sentences.length ? sentences[0].trim() : rawObj.slice(0, 160) + '...';
  } else {
    hook = `${p.category || 'Web Application'} built with scalable architecture, responsive design, and modern engineering practices.`;
  }

  // Generate slides from projectImages
  const images = (p.projectImages && p.projectImages.length)
    ? p.projectImages
    : (p.img ? [{ id: 0, img: p.img }] : []);

  const title = p.singleProjectHeader?.singleProjectTitle || p.title || 'Featured Project';
  const urlHost = validWebsite
    ? validWebsite.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : `${p.link || 'project'}.demo/app`;

  const slides = images.map((item, idx) => ({
    id: item.id !== undefined ? item.id : idx,
    img: item.img,
    caption: `${idx + 1}. ${title} Interface`,
    urlBar: urlHost,
  }));

  return {
    title,
    hook,
    role: p.singleProjectHeader?.singleProjectTag || 'Full-Stack Dev',
    date: p.singleProjectHeader?.singleProjectDate || '2026',
    liveUrl: validWebsite,
    liveText: 'Visit Live Site',
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
  const details = p.projectInfo?.projectDetails || [];

  const defaultIcons = [
    'bi bi-stars',
    'bi bi-lightning-charge',
    'bi bi-shield-check',
    'bi bi-phone',
  ];
  const defaultBadges = ['Core Feature', 'Architecture', 'Security', 'Responsive UI'];

  const cards = details.slice(0, 4).map((d, idx) => {
    const rawText = t(d.details);
    let title = '';
    let desc = '';
    if (rawText.includes(':')) {
      const parts = rawText.split(':');
      title = parts[0].trim();
      desc = parts.slice(1).join(':').trim();
    } else {
      const words = rawText.split(' ');
      title = words.slice(0, 3).join(' ');
      desc = words.slice(3).join(' ');
    }
    if (desc.length > 140) {
      desc = desc.slice(0, 137) + '...';
    }

    return {
      id: d.id || idx + 1,
      title: title || `Core Feature ${idx + 1}`,
      description: desc || rawText.slice(0, 120),
      icon: defaultIcons[idx % defaultIcons.length],
      badge: defaultBadges[idx % defaultBadges.length],
    };
  });

  // If fewer than 4 cards, fill up to 4
  while (cards.length < 4) {
    const idx = cards.length;
    cards.push({
      id: idx + 1,
      title: idx === 2 ? 'Modern UI/UX Design' : 'Performance Optimization',
      description:
        idx === 2
          ? 'Intuitive user interface designed with mobile-first principles and accessible components.'
          : 'Engineered for rapid page loads, smooth transitions, and seamless user engagement.',
      icon: defaultIcons[idx % defaultIcons.length],
      badge: defaultBadges[idx % defaultBadges.length],
    });
  }

  return {
    heading: 'Core Features Bento Grid',
    subtitle: `Key capabilities and architectural highlights of ${p.title || 'this project'}`,
    cards,
  };
});

const highlightsData = computed(() => {
  if (caseStudy.value?.highlights) {
    return caseStudy.value.highlights;
  }

  const p = props.project || {};
  const category = p.category || 'Web Application';
  const techNames = (p.smallImages || []).map((img) => formatTechName(img.alt)).filter(Boolean);
  const techSummary = techNames.length ? techNames.join(', ') : 'Vue.js, REST API, Tailwind CSS';

  return {
    heading: 'Key Technical Highlights',
    subtitle: 'Structured breakdown of challenges faced, execution strategy, and technical stack.',
    columns: [
      {
        id: 'problem',
        title: 'The Problem (Challenge)',
        summary: `Building a modern, highly responsive ${category} with complex user flows and performance constraints.`,
        points: [
          'Fragmented user experience across disparate legacy tools and non-responsive layouts.',
          'Ensuring strict data consistency, cross-browser compatibility, and fast rendering.',
          'Need for modular state management and secure access controls across views.',
        ],
      },
      {
        id: 'solution',
        title: 'The Solution (Execution)',
        summary: `Delivered a clean, component-driven application tailored to user workflows and client needs.`,
        points: [
          'Engineered a modern, responsive UI with reusable components and predictable state.',
          'Integrated secure APIs with structured error handling and optimized payload transfers.',
          'Implemented end-to-end user navigation with smooth transitions and real-time feedback.',
        ],
      },
      {
        id: 'tech',
        title: 'Technical Highlights',
        summary: `Production-ready stack built using ${techSummary}.`,
        points: [
          `Component architecture utilizing ${techNames[0] || 'Modern JavaScript'} with clean separation of concerns.`,
          'Scalable REST endpoints and optimized asset delivery for peak lighthouse scores.',
          'Fully localized with multi-language (i18n) and accessibility-first responsive layout.',
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
  const images = (p.projectImages && p.projectImages.length)
    ? p.projectImages
    : (p.img ? [{ id: 0, img: p.img }] : []);

  const img1 = images[0]?.img || p.img || '';
  const img2 = images[1]?.img || images[0]?.img || p.img || '';
  const urlHost = `${p.link || 'app'}.demo`;

  return {
    heading: 'Feature Spotlight',
    subtitle: 'Direct look into the most critical interfaces powering the application',
    items: [
      {
        id: 1,
        title: 'User Interface & Navigation Flow',
        badge: 'Frontend Architecture',
        icon: 'bi bi-display',
        img: img1,
        urlBar: `${urlHost}/overview`,
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
        title: 'Data Management & Operations',
        badge: 'Operations & Management',
        icon: 'bi bi-sliders',
        img: img2,
        urlBar: `${urlHost}/dashboard`,
        reverse: true,
        points: [
          {
            title: 'Streamlined Controls',
            desc: 'Comprehensive oversight for inventory, user permissions, and batch data operations.',
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
});

// Carousel state
const allSlides = computed(() => heroData.value?.slides || []);
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
