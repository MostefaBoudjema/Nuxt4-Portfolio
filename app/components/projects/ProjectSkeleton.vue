<template>
  <div class="space-y-8 animate-pulse">
    <!-- Header Skeleton -->
    <div class="inline-block sm:flex w-full">
      <div class="w-full sm:w-1/2">
        <div class="flex justify-start">
          <div class="h-10 w-2/3 bg-gray-200 dark:bg-gray-700 rounded-md mt-7 mb-7"></div>
        </div>
        <div class="flex sm:block justify-start space-x-4 sm:space-x-0 sm:space-y-4">
          <div class="flex items-center mt-6">
            <div class="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            <div class="ml-2 h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
          </div>
          <div class="flex items-center mt-6">
            <div class="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            <div class="ml-2 h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
          </div>
        </div>
      </div>
      <!-- Gallery/Slider Skeleton -->
      <div class="w-full sm:w-1/2 mt-10 sm:mt-0">
        <div class="h-64 sm:h-96 w-full bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
      </div>
    </div>

    <!-- Info Section Skeleton -->
    <div class="block sm:flex gap-0 sm:gap-10 mt-14">
      <!-- Left Section -->
      <div class="w-full sm:w-1/3">
        <!-- Client Details -->
        <div class="mb-7">
          <div class="h-8 w-1/2 bg-gray-200 dark:bg-gray-700 rounded-md mb-4"></div>
          <div class="space-y-3">
            <div v-for="i in 3" :key="i" class="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
          </div>
        </div>
        <!-- Objectives -->
        <div class="mb-7">
          <div class="h-8 w-1/2 bg-gray-200 dark:bg-gray-700 rounded-md mb-4"></div>
          <div class="h-20 w-full bg-gray-200 dark:bg-gray-700 rounded-md"></div>
        </div>
        <!-- Technologies -->
        <div class="mb-7">
          <div class="h-8 w-1/2 bg-gray-200 dark:bg-gray-700 rounded-md mb-4"></div>
          <div class="flex space-x-2">
            <div v-for="i in 4" :key="i" class="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
          </div>
        </div>
      </div>

      <!-- Right Section -->
      <div class="w-full sm:w-2/3 mt-10 sm:mt-0">
        <div class="h-8 w-1/3 bg-gray-200 dark:bg-gray-700 rounded-md mb-7"></div>
        <div class="space-y-4">
          <div v-for="i in 5" :key="i" class="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-md"></div>
          <div class="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
        </div>
      </div>
    </div>

    <!-- Related Projects Skeleton -->
    <div class="mt-14">
      <div class="h-8 w-1/4 bg-gray-200 dark:bg-gray-700 rounded-md mb-10"></div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="i in 4" :key="i" class="space-y-4">
          <div class="h-48 w-full bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
          <div class="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-md mx-auto"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No props needed for the skeleton
</script>
