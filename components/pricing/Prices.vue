<template>
  <section class="py-16 px-6">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
        {{ $t('pricing.title') }}
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-12">
        {{ $t('pricing.subtitle') }}
      </p>
    </div>

    <div class="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3">
      <!-- Starter Plan -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col">
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{{ $t('pricing.starter.title') }}</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">{{ $t('pricing.starter.desc') }}</p>
        <div class="text-4xl font-bold text-gray-900 dark:text-white mb-6">{{ $t('pricing.starter.price') }}</div>
        <ul class="space-y-3 text-gray-600 dark:text-gray-300 mb-8 flex-1">
          <li>✔ {{ $t('pricing.starter.features.project') }}</li>
          <li>✔ {{ $t('pricing.starter.features.support') }}</li>
          <li>✔ {{ $t('pricing.starter.features.updates') }}</li>
        </ul>
        <button class="w-full py-3 px-6 rounded-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition">
          {{ $t('pricing.starter.cta') }}
        </button>
      </div>

      <!-- Pro Plan -->
      <div class="bg-indigo-600 text-white rounded-2xl shadow-2xl p-8 flex flex-col border-4 border-indigo-700">
        <h3 class="text-2xl font-semibold mb-4">{{ $t('pricing.pro.title') }}</h3>
        <p class="mb-6">{{ $t('pricing.pro.desc') }}</p>
        <div class="text-4xl font-bold mb-6">{{ $t('pricing.pro.price') }}</div>
        <ul class="space-y-3 mb-8 flex-1">
          <li>✔ {{ $t('pricing.pro.features.projects') }}</li>
          <li>✔ {{ $t('pricing.pro.features.support') }}</li>
          <li>✔ {{ $t('pricing.pro.features.analytics') }}</li>
        </ul>
        <button class="w-full py-3 px-6 rounded-xl font-medium bg-white text-indigo-700 hover:bg-gray-100 transition">
          {{ $t('pricing.pro.cta') }}
        </button>
      </div>

      <!-- Enterprise Plan -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col">
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{{ $t('pricing.enterprise.title') }}</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">{{ $t('pricing.enterprise.desc') }}</p>
        <div class="text-4xl font-bold text-gray-900 dark:text-white mb-6">{{ $t('pricing.enterprise.price') }}</div>
        <ul class="space-y-3 text-gray-600 dark:text-gray-300 mb-8 flex-1">
          <li>✔ {{ $t('pricing.enterprise.features.manager') }}</li>
          <li>✔ {{ $t('pricing.enterprise.features.integrations') }}</li>
          <li>✔ {{ $t('pricing.enterprise.features.support') }}</li>
        </ul>
        <button class="w-full py-3 px-6 rounded-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition">
          {{ $t('pricing.enterprise.cta') }}
        </button>
      </div>
    </div>
  </section>
</template>
