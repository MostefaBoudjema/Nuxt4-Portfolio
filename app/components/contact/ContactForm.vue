<template>
	<div class="w-full md:w-2/3">
		<div
			class="leading-loose m-2 md:m-4 p-4 md:p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
			<div class="flex justify-between items-center mb-6 md:mb-8" :dir="$i18n && $i18n.locale === 'ar' ? 'rtl' : 'ltr'">
				<p class="font-general-medium text-primary-dark dark:text-primary-light text-xl md:text-2xl">
					{{ $t('Contact Us') }}
				</p>
				<button 
					v-if="currentStep > 0" 
					@click="previousStep"
					class="p-2 md:p-2.5 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors bg-gray-200/50 dark:bg-gray-700/50 hover:bg-blue-100 dark:hover:bg-gray-600 rounded-full focus:outline-none"
					type="button"
					:title="$t('form.previous')"
				>
					<svg :class="['w-5 h-5', ($i18n && $i18n.locale === 'ar') ? 'rotate-180' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
					</svg>
				</button>
			</div>
			<form @submit.prevent="submitForm" class="font-general-regular space-y-5 md:space-y-7">

				<!-- Step progress bar (desktop) -->
				<div class="hidden md:flex justify-between mb-6 md:mb-8 px-0 w-full">
					<div v-for="(step, index) in steps" :key="index" class="flex items-center flex-1 min-w-0">
						<div :class="[
							'w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 transition-colors duration-300',
							currentStep >= index ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
						]">
							{{ index + 1 }}
						</div>
						<div v-if="index < steps.length - 1" :class="[
							'flex-1 h-1 mx-0 transition-colors duration-300',
							currentStep > index ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-600'
						]"></div>
					</div>
				</div>

				<!-- Step progress (mobile) -->
				<div class="md:hidden flex justify-center mb-6">
					<div class="bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2">
						<span class="text-sm font-medium text-gray-700 dark:text-gray-300">
							{{ currentStep + 1 }}/{{ steps.length }}
						</span>
					</div>
				</div>

				<!-- Current question -->
				<div class="mb-6 md:mb-8">
					<h3 :class="[
						'text-lg md:text-xl font-medium mb-5 text-primary-dark dark:text-primary-light',
						($i18n && $i18n.locale === 'ar') ? 'text-right' : 'text-left'
					]" :dir="$i18n && $i18n.locale === 'ar' ? 'rtl' : 'ltr'">
						{{ $t(currentQuestion.label) }}
					</h3>

					<!-- Regular Inputs & Textarea -->
					<div v-if="['text', 'email', 'phone', 'textarea'].includes(currentQuestion.type)" class="flex items-stretch w-full">
						<div :class="[
							'flex-1 min-w-0',
							($i18n && $i18n.locale === 'ar') ? '[&_input]:rounded-l-none [&_textarea]:rounded-l-none' : '[&_input]:rounded-r-none [&_textarea]:rounded-r-none'
						]">
							<!-- Text / Email / Phone -->
							<ReusableFormInput
								v-if="['text', 'email', 'phone'].includes(currentQuestion.type)"
								v-model="formData[currentQuestion.field]"
								:placeholder="$t(currentQuestion.placeholder)"
								:inputIdentifier="currentQuestion.field"
								:inputType="currentQuestion.type"
								:hideLabel="true"
							/>

							<!-- Textarea -->
							<ReusableFormTextarea
								v-else-if="currentQuestion.type === 'textarea'"
								v-model="formData[currentQuestion.field]"
								:placeholder="$t(currentQuestion.placeholder)"
								:textareaIdentifier="currentQuestion.field"
								:hideLabel="true"
							/>
						</div>
						
						<!-- Go Button attached to input -->
						<button
							:title="isLastStep ? (isSubmitting ? $t('form.sending') : $t('form.sendMessage')) : $t('form.next')"
							:disabled="isSubmitting || !isCurrentStepValid"
							@click="isLastStep ? submitForm() : nextStep()"
							:class="[
								'flex-shrink-0 flex items-center justify-center px-4 md:px-5 border border-gray-300 dark:border-primary-dark border-opacity-50 bg-ternary-light dark:bg-ternary-dark text-primary-dark dark:text-secondary-light hover:bg-gray-100 dark:hover:bg-primary-dark transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10',
								($i18n && $i18n.locale === 'ar') ? 'rounded-l-md border-r-0' : 'rounded-r-md border-l-0'
							]"
							type="button"
						>
							<!-- Loading Spinner -->
							<svg v-if="isSubmitting" class="animate-spin h-5 w-5 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
								<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
							<!-- Submit/Send Icon for the last step -->
							<svg v-else-if="isLastStep" :class="['h-5 w-5 md:h-6 md:w-6', ($i18n && $i18n.locale === 'ar') ? '-scale-x-100' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
							</svg>
							<!-- Go/Next Arrow -->
							<svg v-else :class="['h-6 w-6 md:h-7 md:w-7', ($i18n && $i18n.locale === 'ar') ? 'rotate-180' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
							</svg>
						</button>
					</div>

					<!-- Bubble / Pill options for select type -->
					<div v-else-if="currentQuestion.type === 'select'" class="bubble-options-wrapper">
						<div class="bubble-options">
							<button
								v-for="option in currentQuestion.options"
								:key="option.value"
								type="button"
								:class="[
									'bubble-option',
									formData[currentQuestion.field] === option.value 
										? 'bubble-option--active' 
										: 'border-gray-300 text-gray-700 bg-transparent dark:border-gray-500 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400 dark:hover:bg-blue-900/20'
								]"
								@click="handleOptionSelect(currentQuestion.field, option.value)"
							>
								<span v-if="getBubbleIcon(option.value)" class="bubble-option__icon">
									{{ getBubbleIcon(option.value) }}
								</span>
								{{ $t(option.label) }}
							</button>
						</div>

						<!-- Custom input for "other" -->
						<Transition name="slide-down">
							<div v-if="formData[currentQuestion.field] === 'other'" class="flex items-stretch w-full mt-4">
								<div :class="[
									'flex-1 min-w-0',
									($i18n && $i18n.locale === 'ar') ? '[&_input]:rounded-l-none [&_textarea]:rounded-l-none' : '[&_input]:rounded-r-none [&_textarea]:rounded-r-none'
								]">
									<ReusableFormInput
										v-model="formData[currentQuestion.field + 'Custom']"
										:placeholder="$t('form.other.placeholder', { field: currentQuestion.field })"
										:inputIdentifier="currentQuestion.field + 'Custom'"
										inputType="text"
										:hideLabel="true"
									/>
								</div>
								
								<!-- Go Button attached to 'other' input -->
								<button
									:title="isLastStep ? (isSubmitting ? $t('form.sending') : $t('form.sendMessage')) : $t('form.next')"
									:disabled="isSubmitting || !isCurrentStepValid"
									@click="isLastStep ? submitForm() : nextStep()"
									:class="[
										'flex-shrink-0 flex items-center justify-center px-4 md:px-5 border border-gray-300 dark:border-primary-dark border-opacity-50 bg-ternary-light dark:bg-ternary-dark text-primary-dark dark:text-secondary-light hover:bg-gray-100 dark:hover:bg-primary-dark transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10',
										($i18n && $i18n.locale === 'ar') ? 'rounded-l-md border-r-0' : 'rounded-r-md border-l-0'
									]"
									type="button"
								>
									<!-- Loading Spinner -->
									<svg v-if="isSubmitting" class="animate-spin h-5 w-5 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
										<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
										<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
									</svg>
									<!-- Submit/Send Icon for the last step -->
									<svg v-else-if="isLastStep" :class="['h-5 w-5 md:h-6 md:w-6', ($i18n && $i18n.locale === 'ar') ? '-scale-x-100' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
									</svg>
									<!-- Go/Next Arrow -->
									<svg v-else :class="['h-6 w-6 md:h-7 md:w-7', ($i18n && $i18n.locale === 'ar') ? 'rotate-180' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
									</svg>
								</button>
							</div>
						</Transition>
					</div>
				</div>

				<!-- Old Navigation buttons removed in favor of inline Go button -->

				<!-- Success message -->
				<Transition name="fade">
					<div
						v-if="submissionSuccess"
						:class="[
							'mt-4 p-4 bg-green-100 text-green-700 rounded-lg',
							($i18n && $i18n.locale === 'ar') ? 'text-right' : 'text-left'
						]"
						:dir="$i18n && $i18n.locale === 'ar' ? 'rtl' : 'ltr'"
					>
						{{ $t('form.successMessage') }}
					</div>
				</Transition>

				<!-- Error message -->
				<div
					v-if="submissionError"
					:class="[
						'mt-4 p-4 bg-red-100 text-red-700 rounded-lg',
						($i18n && $i18n.locale === 'ar') ? 'text-right' : 'text-left'
					]"
					:dir="$i18n && $i18n.locale === 'ar' ? 'rtl' : 'ltr'"
				>
					{{ submissionError }}
				</div>

			</form>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, onBeforeUnmount } from 'vue';
import { useRuntimeConfig, useLocalePath } from '#imports';

const config = useRuntimeConfig();
const localePath = useLocalePath();

const currentStep = ref(0);
const formData = ref({
	fullName: '',
	email: '',
	phone: '',
	subject: '',
	subjectCustom: '',
	projectType: '',
	budget: '',
	budgetCustom: '',
	timeline: '',
	timelineCustom: '',
	message: '',
});

const steps = ref([
	{
		label: 'form.subject.label',
		field: 'subject',
		type: 'select',
		placeholder: 'form.subject.placeholder',
		options: [
			{ value: 'general', label: 'General Inquiry' },
			{ value: 'project', label: 'New Project' },
			{ value: 'support', label: 'Support / Maintenance' },
			{ value: 'partnership', label: 'Partnership' },
			{ value: 'other', label: 'Other' }
		],
		validation: (value) => value !== ''
	},
	{
		label: 'form.projectType.label',
		field: 'projectType',
		type: 'select',
		placeholder: 'form.projectType.placeholder',
		options: [
			{ value: 'web-development', label: 'form.projectType.options.webDev' },
			{ value: 'ecommerce', label: 'form.projectType.options.ecommerce' },
			{ value: 'cms', label: 'form.projectType.options.cms' },
			{ value: 'api-development', label: 'form.projectType.options.apiDev' },
			{ value: 'maintenance', label: 'form.projectType.options.maintenance' },
			{ value: 'other', label: 'form.projectType.options.other' }
		],
		validation: (value) => value !== ''
	},
	{
		label: 'form.budget.label',
		field: 'budget',
		type: 'select',
		placeholder: 'form.budget.placeholder',
		options: [
			{ value: 'under-1000', label: 'form.budget.options.under1000' },
			{ value: '1000-5000', label: 'form.budget.options.1000to5000' },
			{ value: '5000-10000', label: 'form.budget.options.5000to10000' },
			{ value: '10000-25000', label: 'form.budget.options.10000to25000' },
			{ value: '25000-plus', label: 'form.budget.options.25000plus' },
			{ value: 'other', label: 'form.budget.options.other' }
		],
		validation: (value) => value !== ''
	},
	{
		label: 'form.timeline.label',
		field: 'timeline',
		type: 'select',
		placeholder: 'form.timeline.placeholder',
		options: [
			{ value: 'asap', label: 'form.timeline.options.asap' },
			{ value: '1-2-weeks', label: 'form.timeline.options.1to2weeks' },
			{ value: '1-month', label: 'form.timeline.options.1month' },
			{ value: '2-3-months', label: 'form.timeline.options.2to3months' },
			{ value: '3-6-months', label: 'form.timeline.options.3to6months' },
			{ value: 'other', label: 'form.timeline.options.other' }
		],
		validation: (value) => value !== ''
	},
	{
		label: 'form.message.label',
		field: 'message',
		type: 'textarea',
		placeholder: 'form.message.placeholder',
		validation: (value) => value.length >= 10
	},
	{
		label: 'form.fullName.label',
		field: 'fullName',
		type: 'text',
		placeholder: 'form.fullName.placeholder',
		validation: (value) => value.length >= 2
	},
	{
		label: 'form.email.label',
		field: 'email',
		type: 'email',
		placeholder: 'form.email.placeholder',
		validation: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
	},
	{
		label: 'form.phone.label',
		field: 'phone',
		type: 'phone',
		placeholder: 'form.phone.placeholder',
		validation: (value) => /^[0-9+\s]{10,}$/.test(value)
	}
]);

const isSubmitting = ref(false);
const submissionError = ref(null);
const submissionSuccess = ref(false);
const successTimeout = ref(null);

const currentQuestion = computed(() => steps.value[currentStep.value]);
const isLastStep = computed(() => currentStep.value === steps.value.length - 1);
const isCurrentStepValid = computed(() => {
	const currentField = currentQuestion.value.field;
	const value = formData.value[currentField];
	return currentQuestion.value.validation(value);
});

/** Returns an emoji icon based on option value for visual richness */
function getBubbleIcon(value) {
	const icons = {
		// Subject
		'general': '👋',
		'project': '💼',
		'support': '🛠️',
		'partnership': '🤝',
		// Project type
		'web-development': '🌐',
		'ecommerce': '🛒',
		'cms': '📝',
		'api-development': '⚙️',
		'maintenance': '🔧',
		// Budget
		'under-1000': '💵',
		'1000-5000': '💴',
		'5000-10000': '💶',
		'10000-25000': '💷',
		'25000-plus': '💎',
		// Timeline
		'asap': '🚀',
		'1-2-weeks': '📅',
		'1-month': '🗓️',
		'2-3-months': '⏳',
		'3-6-months': '🕐',
		// Generic
		'other': '✏️',
	};
	return icons[value] || null;
}

let autoAdvanceTimeout = null;

function handleOptionSelect(field, value) {
	formData.value[field] = value;
	if (value !== 'other') {
		if (autoAdvanceTimeout) clearTimeout(autoAdvanceTimeout);
		autoAdvanceTimeout = setTimeout(() => {
			// Ensure we are still on the same step before auto-advancing
			if (currentQuestion.value.field === field && isCurrentStepValid.value) {
				nextStep();
			}
		}, 300); // 300ms delay to show the active highlight animation
	}
}

function nextStep() {
	if (currentStep.value < steps.value.length - 1) {
		currentStep.value++;
	}
}

function previousStep() {
	if (currentStep.value > 0) {
		currentStep.value--;
	}
}

async function submitForm() {
	if (!isCurrentStepValid.value) return;

	isSubmitting.value = true;
	submissionError.value = null;
	submissionSuccess.value = false;

	if (successTimeout.value) {
		clearTimeout(successTimeout.value);
	}

	try {
		const formDataToSend = {
			...formData.value,
			subject: formData.value.subject === 'other' ? formData.value.subjectCustom : formData.value.subject,
			budget: formData.value.budget === 'other' ? formData.value.budgetCustom : formData.value.budget,
			timeline: formData.value.timeline === 'other' ? formData.value.timelineCustom : formData.value.timeline
		};

		const apiUrl = config.public.apiUrl || 'https://backend-mostefa-boudjema.vercel.app';
		const response = await fetch(`${apiUrl}/send-email`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formDataToSend),
		});

		const data = await response.json();

		if (response.ok) {
			submissionSuccess.value = true;
			successTimeout.value = setTimeout(() => {
				submissionSuccess.value = false;
				navigateTo(localePath('/'));
			}, 5000);

			formData.value = {
				fullName: '',
				email: '',
				phone: '',
				subject: '',
				subjectCustom: '',
				projectType: '',
				budget: '',
				budgetCustom: '',
				timeline: '',
				timelineCustom: '',
				message: '',
			};
			currentStep.value = 0;
		} else {
			submissionError.value = data.message || 'Failed to send message';
		}
	} catch (error) {
		console.error('Error submitting form:', error);
		submissionError.value = 'An error occurred while submitting the form. Please try again later.';
	} finally {
		isSubmitting.value = false;
	}
}

onBeforeUnmount(() => {
	if (successTimeout.value) {
		clearTimeout(successTimeout.value);
	}
});
</script>

<style lang="scss" scoped>
/* ── Bubble Options ─────────────────────────────────── */
.bubble-options-wrapper {
	width: 100%;
}

.bubble-options {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
}

.bubble-option {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	padding: 8px 18px;
	border-radius: 9999px; /* pill shape */
	border-width: 2px;
	border-style: solid;
	font-size: 0.875rem;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1);
	white-space: nowrap;
	user-select: none;

	&:hover {
		border-color: #3b82f6; /* blue-500 */
		color: #3b82f6;
		background: rgba(59, 130, 246, 0.06);
		transform: translateY(-1px);
		box-shadow: 0 3px 10px rgba(59, 130, 246, 0.15);
	}

	&:active {
		transform: translateY(0);
	}

	&--active {
		border-color: #3b82f6;
		background: linear-gradient(135deg, #3b82f6, #6366f1);
		color: #ffffff;
		box-shadow: 0 4px 14px rgba(59, 130, 246, 0.35);

		&:hover {
			background: linear-gradient(135deg, #2563eb, #4f46e5);
			color: #ffffff;
			transform: translateY(-1px);
			box-shadow: 0 6px 18px rgba(59, 130, 246, 0.4);
		}
	}

	&__icon {
		font-size: 1rem;
		line-height: 1;
	}
}

/* ── Transitions ────────────────────────────────────── */
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.slide-down-enter-active,
.slide-down-leave-active {
	transition: all 0.3s ease;
	overflow: hidden;
}
.slide-down-enter-from,
.slide-down-leave-to {
	opacity: 0;
	max-height: 0;
	margin-top: 0;
}
.slide-down-enter-to,
.slide-down-leave-from {
	opacity: 1;
	max-height: 100px;
}

* {
	box-sizing: border-box;
}
</style>