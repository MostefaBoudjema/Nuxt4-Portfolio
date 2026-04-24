<template>
  <div class="space-y-8 animate-pulse">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Main Content Skeleton -->
      <div class="lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 md:p-8">
        <!-- Breadcrumb Skeleton -->
        <div class="h-4 w-1/4 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
        
        <!-- Title Skeleton -->
        <div class="h-10 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
        
        <!-- Meta Skeleton -->
        <div class="flex gap-4 mb-6">
          <div class="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div class="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>

        <!-- Tags Skeleton -->
        <div class="flex gap-2 mb-8">
          <div v-for="i in 3" :key="i" class="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        </div>

        <!-- Image Skeleton -->
        <div class="h-64 sm:h-80 w-full bg-gray-200 dark:bg-gray-700 rounded-lg mb-8"></div>

        <!-- Content Skeleton -->
        <div class="space-y-4">
          <div v-for="i in 6" :key="i" :class="['h-4 bg-gray-200 dark:bg-gray-700 rounded', i % 2 === 0 ? 'w-full' : 'w-5/6']"></div>
        </div>
      </div>

      <!-- Sidebar Skeleton -->
      <div class="lg:col-span-1 space-y-6">
        <div class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
          <div class="h-6 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
          <div class="space-y-4">
            <div v-for="i in 4" :key="i" class="flex gap-4">
              <div class="h-16 w-16 bg-gray-200 dark:bg-gray-700 rounded flex-shrink-0"></div>
              <div class="flex-1 space-y-2">
                <div class="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div class="h-3 w-2/3 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
