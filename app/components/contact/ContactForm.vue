<template>
	<div class="w-full md:w-2/3">
		<div
			class="leading-loose m-2 md:m-4 p-4 md:p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
			<p :class="[
				'font-general-medium text-primary-dark dark:text-primary-light text-xl md:text-2xl mb-6 md:mb-8',
				($i18n && $i18n.locale === 'ar') ? 'text-right' : 'text-left'
			]" dir="$i18n && $i18n.locale === 'ar' ? 'rtl' : 'ltr'">
				{{ $t('Contact Us') }}
			</p>
			<form @submit.prevent="submitForm" class="font-general-regular space-y-5 md:space-y-7">
				<div class="hidden md:flex justify-between mb-6 md:mb-8 px-0 w-full">
					<div v-for="(step, index) in steps" :key="index" class="flex items-center flex-1 min-w-0">
						<div :class="[
				'w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0',
				currentStep >= index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
			]">
							{{ index + 1 }}
						</div>
						<div v-if="index < steps.length - 1" :class="[
				'flex-1 h-1 mx-0',
				currentStep > index ? 'bg-blue-500' : 'bg-gray-200'
			]"></div>
					</div>
				</div>


				<div class="md:hidden flex justify-center mb-6">
					<div class="bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2">
						<span class="text-sm font-medium text-gray-700 dark:text-gray-300">
							{{ currentStep + 1 }}/{{ steps.length }}
						</span>
					</div>
				</div>

				<div class="mb-6 md:mb-8">
					<h3 :class="[
				'text-lg md:text-xl font-medium mb-4 text-primary-dark dark:text-primary-light',
				($i18n && $i18n.locale === 'ar') ? 'text-right' : 'text-left'
			]" :dir="$i18n && $i18n.locale === 'ar' ? 'rtl' : 'ltr'">
						{{ $t(currentQuestion.label) }}
					</h3>

					<ReusableFormInput v-if="['text', 'email', 'phone'].includes(currentQuestion.type)"
						v-model="formData[currentQuestion.field]" :placeholder="$t(currentQuestion.placeholder)"
						:inputIdentifier="currentQuestion.field" :inputType="currentQuestion.type" :hideLabel="true" />

					<ReusableFormTextarea v-else-if="currentQuestion.type === 'textarea'"
						v-model="formData[currentQuestion.field]" :placeholder="$t(currentQuestion.placeholder)"
						:textareaIdentifier="currentQuestion.field" :hideLabel="true" />

					<select v-else-if="currentQuestion.type === 'select'" v-model="formData[currentQuestion.field]"
						class="w-full px-3 md:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-secondary-dark dark:text-gray-200"
						:class="{ 'border-red-500': !isCurrentStepValid && formData[currentQuestion.field] === '' }">
						<option value="" disabled selected>{{ $t(currentQuestion.placeholder) }}</option>
						<option v-for="option in currentQuestion.options" :key="option.value" :value="option.value">
							{{ $t(option.label) }}
						</option>
					</select>

					<ReusableFormInput
						v-if="currentQuestion.type === 'select' && formData[currentQuestion.field] === 'other'"
						v-model="formData[currentQuestion.field + 'Custom']"
						:placeholder="$t('form.other.placeholder', { field: currentQuestion.field })"
						:inputIdentifier="currentQuestion.field + 'Custom'" inputType="text" :hideLabel="true"
						class="mt-2" />
				</div>

				<div class="flex justify-between">
					<div>
						<ReusableButton v-if="currentStep > 0" :title="$t('form.previous')" @click="previousStep"
							class="px-3 md:px-4 py-2 md:py-2.5 text-white tracking-wider bg-gray-500 hover:bg-gray-600 focus:ring-1 focus:ring-gray-900 rounded-lg duration-500"
							type="button" />
					</div>
					<div>
						<ReusableButton
							:title="isLastStep ? (isSubmitting ? $t('form.sending') : $t('form.sendMessage')) : $t('form.next')"
							:disabled="isSubmitting || !isCurrentStepValid"
							@click="isLastStep ? submitForm() : nextStep()"
							class="px-3 md:px-4 py-2 md:py-2.5 text-white tracking-wider bg-blue-500 hover:bg-blue-600 focus:ring-1 focus:ring-blue-900 rounded-lg duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
							type="button" />
					</div>
				</div>


				<Transition name="fade">
					<div v-if="submissionSuccess" :class="[
				'mt-4 p-4 bg-green-100 text-green-700 rounded-lg',
				($i18n && $i18n.locale === 'ar') ? 'text-right' : 'text-left'
			]" :dir="$i18n && $i18n.locale === 'ar' ? 'rtl' : 'ltr'">
						{{ $t('form.successMessage') }}
					</div>
				</Transition>

				<div v-if="submissionError" :class="[
				'mt-4 p-4 bg-red-100 text-red-700 rounded-lg',
				($i18n && $i18n.locale === 'ar') ? 'text-right' : 'text-left'
			]" :dir="$i18n && $i18n.locale === 'ar' ? 'rtl' : 'ltr'">
					{{ submissionError }}
				</div>
			</form>

		</div>
	</div>
</template>

<script setup>
import { ref, computed, onBeforeUnmount } from 'vue';

const currentStep=ref(0);
const formData=ref({
	fullName: '',
	email: '',
	phone: '',
	subject: '',
	projectType: '',
	budget: '',
	budgetCustom: '',
	timeline: '',
	timelineCustom: '',
	message: '',
});
const steps=ref([
	{
		label: 'form.subject.label',
		field: 'subject',
		type: 'text',
		placeholder: 'form.subject.placeholder',
		validation: (value) => value.length>=3
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
		validation: (value) => value!==''
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
		validation: (value) => value!==''
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
		validation: (value) => value!==''
	},
	{
		label: 'form.message.label',
		field: 'message',
		type: 'textarea',
		placeholder: 'form.message.placeholder',
		validation: (value) => value.length>=10
	},
	{
		label: 'form.fullName.label',
		field: 'fullName',
		type: 'text',
		placeholder: 'form.fullName.placeholder',
		validation: (value) => value.length>=2
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

const isSubmitting=ref(false);
const submissionError=ref(null);
const submissionSuccess=ref(false);
const successTimeout=ref(null);

const currentQuestion=computed(() => {
	return steps.value[currentStep.value];
});

const isLastStep=computed(() => {
	return currentStep.value===steps.value.length-1;
});

const isCurrentStepValid=computed(() => {
	const currentField=currentQuestion.value.field;
	const value=formData.value[currentField];
	return currentQuestion.value.validation(value);
});

function nextStep() {
	if (currentStep.value<steps.value.length-1) {
		currentStep.value++;
	}
}

function previousStep() {
	if (currentStep.value>0) {
		currentStep.value--;
	}
}

async function submitForm() {
	if (!isCurrentStepValid.value) return;

	isSubmitting.value=true;
	submissionError.value=null;
	submissionSuccess.value=false;

	// Clear any existing timeout
	if (successTimeout.value) {
		clearTimeout(successTimeout.value);
	}

	try {
		// Prepare form data, using custom values if "other" is selected
		const formDataToSend={
			...formData.value,
			budget: formData.value.budget==='other'? formData.value.budgetCustom:formData.value.budget,
			timeline: formData.value.timeline==='other'? formData.value.timelineCustom:formData.value.timeline
		};

		const apiUrl=process.env.API_URL||'https://backend-mostefa-boudjema.vercel.app';
		const response=await fetch(`${apiUrl}/send-email`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formDataToSend),
		});

		const data=await response.json();

		if (response.ok) {
			submissionSuccess.value=true;
			// Set timeout to hide success message and redirect to home page
			const localePath=useLocalePath(); // Nuxt composable
			successTimeout.value=setTimeout(() => {
				submissionSuccess.value=false;
				window.location.href=localePath('/');
			}, 5000);

			// Reset form
			formData.value={
				fullName: '',
				email: '',
				phone: '',
				subject: '',
				projectType: '',
				budget: '',
				budgetCustom: '',
				timeline: '',
				timelineCustom: '',
				message: '',
			};
			currentStep.value=0;
		} else {
			submissionError.value=data.message||'Failed to send message';
		}
	} catch (error) {
		console.error('Error submitting form:', error);
		submissionError.value='An error occurred while submitting the form. Please try again later.';
	} finally {
		isSubmitting.value=false;
	}
}

onBeforeUnmount(() => {
	// Clear timeout when component is unmounted
	if (successTimeout.value) {
		clearTimeout(successTimeout.value);
	}
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

* {
	box-sizing: border-box;
}
</style>