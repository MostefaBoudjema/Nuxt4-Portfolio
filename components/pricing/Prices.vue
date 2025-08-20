<template>
  <section class="py-16 px-6">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
        {{ $t("pricing.title") }}
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-12">
        {{ $t("pricing.subtitle") }}
      </p>
    </div>

    <div class="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3">
      <div
        v-for="plan in plans"
        :key="plan.key"
        :class="[
          'rounded-2xl p-8 flex flex-col',
          plan.featured
            ? 'bg-indigo-600 text-white shadow-2xl border-4 border-indigo-700'
            : 'bg-white dark:bg-gray-800 shadow-lg'
        ]"
      >
        <h3
          :class="[
            'text-2xl font-semibold mb-4',
            plan.featured ? '' : 'text-gray-900 dark:text-white'
          ]"
        >
          {{ $t(`pricing.${plan.key}.title`) }}
        </h3>
        <p
          :class="[
            'mb-6',
            plan.featured ? '' : 'text-gray-600 dark:text-gray-400'
          ]"
        >
          {{ $t(`pricing.${plan.key}.desc`) }}
        </p>
        <div
          :class="[
            'text-4xl font-bold mb-6',
            plan.featured ? '' : 'text-gray-900 dark:text-white'
          ]"
        >
          {{ $t(`pricing.${plan.key}.price`) }}
        </div>
        <ul
          :class="[
            'space-y-3 mb-8 flex-1',
            plan.featured ? '' : 'text-gray-600 dark:text-gray-300'
          ]"
        >
          <li v-for="feature in plan.features" :key="feature">
            ✔ {{ $t(`pricing.${plan.key}.features.${feature}`) }}
          </li>
        </ul>
        <a :href="plan.link" target="_blank"
          :class="[
            'w-full py-3 px-6 rounded-xl font-medium transition text-center',
            plan.featured
              ? 'bg-white text-indigo-700 hover:bg-gray-100'
              : 'text-white bg-indigo-600 hover:bg-indigo-700'
          ]"
        >
          {{ $t(`pricing.${plan.key}.cta`) }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import configs from '~/configs';
const plans = [
  {
    key: "starter",
    features: ["project", "support", "updates"],
    featured: false,
    link: configs.whatsappNumber ? `https://wa.me/${configs.whatsappNumber}` : "#",
  },
  {
    key: "pro",
    features: ["projects", "support", "analytics"],
    featured: true, 
    link: configs.whatsappNumber ? `https://wa.me/${configs.whatsappNumber}` : "#",
  },
  {
    key: "enterprise",
    features: ["manager", "integrations", "support"],
    featured: false,
    link: configs.whatsappNumber ? `https://wa.me/${configs.whatsappNumber}` : "#",
  },
 
];
</script>
