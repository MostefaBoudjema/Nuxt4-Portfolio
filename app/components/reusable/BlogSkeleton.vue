<template>
  <div
    class="mb-4 blog-post-skeleton rounded-lg p-4 shadow bg-secondary-light dark:bg-secondary-dark flex flex-col md:flex-row md:items-stretch"
  >
    <!-- Image Skeleton -->
    <div class="w-full mb-4 md:w-1/4 md:mb-0 md:mr-4 rtl:md:mr-0 rtl:md:ml-4 flex-shrink-0">
      <ReusableSkeleton height="h-full" width="w-full" class="aspect-[3/2]" />
    </div>

    <!-- Content Skeleton -->
    <div class="md:w-3/4 w-full flex flex-col items-start space-y-4">
      <ReusableSkeleton width="w-3/4" height="h-8" /> <!-- Title -->
      <div class="flex items-center space-x-2 w-full">
        <ReusableSkeleton width="w-6" height="h-6" rounded="rounded-full" /> <!-- Author Avatar -->
        <ReusableSkeleton width="w-24" height="h-4" /> <!-- Author Name -->
        <span class="text-gray-300">•</span>
        <ReusableSkeleton width="w-20" height="h-4" /> <!-- Date -->
      </div>
      <div class="space-y-2 w-full">
        <ReusableSkeleton width="w-full" height="h-4" />
        <ReusableSkeleton width="w-full" height="h-4" />
        <ReusableSkeleton width="w-2/3" height="h-4" />
      </div>
      <div class="pt-4">
        <ReusableSkeleton width="w-32" height="h-10" rounded="rounded-lg" /> <!-- Read More Button -->
      </div>
    </div>
  </div>
</template>

<script setup>
// No special logic needed
</script>

<style scoped>
.blog-post-skeleton {
  min-height: 200px;
}
</style>
