<template>
  <div
    class="mb-4 blog-post single font-general-regular rounded-lg p-4 shadow hover:shadow-lg transition bg-secondary-light dark:bg-secondary-dark text-ternary-dark dark:text-ternary-light flex flex-col md:flex-row md:items-stretch">
    <div
      v-if="post.coverImage || post.image"
      class="w-full mb-4 md:w-1/4 md:mb-0 md:mr-4 rtl:md:mr-0 rtl:md:ml-4 flex-shrink-0"
    >
      <div class="aspect-[3/2] w-full rounded overflow-hidden">
        <img
          :src="post.coverImage || post.image"
          :alt="post.title"
          class="object-cover w-full h-full"
          style="display: block;"
        />
      </div>
    </div>
    <div class="md:w-3/4 w-full flex flex-col items-start">
      <div class="w-full">
        <h2 class="text-3xl font-bold mb-2">{{ post.title }}</h2>
        <div class="flex items-center mb-2 text-sm text-gray-500 dark:text-gray-400">
          <img v-if="post.author && post.author.avatar" :src="post.author.avatar" :alt="post.author.name"
            class="w-6 h-6 rounded-full mx-2" />
          <span v-if="post.author && post.author.name">{{ post.author.name }}</span>
          <span v-if="post.readingTime" class="mx-2">•</span>
          <span v-if="post.readingTime">{{ post.readingTime }}</span>
          <span v-if="post.category" class="mx-2">•</span>
          <span>
            <span>{{ post.date }}</span>
            <span v-if="post.updatedAt && post.updatedAt !== post.date"> ({{ $t('blog.updated') }} {{ post.updatedAt
            }})</span>
            <span v-if="!post.published" class="ml-2 text-red-500">{{ $t('blog.draft') }}</span>
          </span>
        </div>
                <p
          class="my-2"
          :class="locale === 'ar' ? 'text-right' : 'text-left'"
        >
          {{ post.excerpt || post.summary }}
        </p>
        <div class="mt-0 sm:mt-5 flex justify-center sm:justify-start">
          <NuxtLink :to="localePath(`/blog/${post.slug}`)"
            class="flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg hover:shadow-xl bg-blue-500 hover:bg-blue-600 focus:ring-1 focus:ring-blue-900 text-white text-sm sm:text-lg lg:text-xl duration-300"
            aria-label="Read More">
            {{ $t('blog.readMore') }}
          </NuxtLink>
        </div>
      </div>


    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useLocalePath } from '#i18n'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});

const localePath = useLocalePath();

onMounted(async () => {
  const gsapModule = await import('gsap');
  const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
  const gsap = gsapModule.default || gsapModule;
  if (typeof gsap.registerPlugin === 'function') {
    gsap.registerPlugin(ScrollTrigger);
  }
  let mm = gsap.matchMedia();
  mm.add('(min-width: 991px)', () => {
    gsap.fromTo('.single',
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 0.3,
        stagger: 0.9,
        ease: 'elastic',
        scrollTrigger: {
          trigger: '.single',
          start: 'top 80%',
          end: 'end 10%',
          toggleActions: 'restart none none none',
          scrub: 5,
          // markers: true,
        },
      }
    );
  });
});
</script>

<style scoped>
.blog-post {
  /* Remove background here, use Tailwind classes for theme */
}

.truncate-lines {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>