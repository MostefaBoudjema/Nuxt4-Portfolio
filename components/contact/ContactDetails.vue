<script setup>
defineProps(['contacts']);
</script>

<template>
	<div class="w-full md:w-1/3">
		<div class="text-left max-w-xl px-6">
			<h2
				:class="[
					'font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8',
					($i18n && $i18n.locale === 'ar') ? 'text-right' : 'text-left'
				]"
				dir="$i18n && $i18n.locale === 'ar' ? 'rtl' : 'ltr'"
			>
				{{$t('Contact details')}}
			</h2>
			<ul class="font-general-regular">
				<li class="flex items-start" v-for="contact in contacts" :key="contact.id">
					<i
						:data-feather="contact.icon"
						:class="[
							'w-5 text-gray-500 dark:text-gray-400 flex-shrink-0',
							($i18n && $i18n.locale === 'ar') ? 'ml-4' : 'mr-4'
						]"
					></i>
					<a
						href="#"
						class="text-lg mb-4 text-ternary-dark dark:text-ternary-light min-w-0 break-words"
						:class="
							contact.icon === 'mail' || contact.icon === 'phone'
								? 'hover:underline cursor-pointer'
								: ''
						"
						aria-label="Website and Phone"
					>
						{{ contact.name }}
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
