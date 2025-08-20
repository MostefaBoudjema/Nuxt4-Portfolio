<template>
	<div class="cv-container bg-[#0f172a] dark:bg-[#0f172a] dark:text-gray-100 bg-white text-gray-900">
		<div class="header bg-[#1e293b] dark:bg-[#1e293b] text-white">
			<img :src="profile.photo" :alt="profile.name" class="profile-img">
			<h1 class="name">{{ t(profile.name) }}</h1>
			<p class="title">{{ t(profile.title) }}</p>
		</div>

		<div class="content">
			<!-- Contact Section -->
			<div class="section">
				<h2 class="section-title border-b-4 border-blue-400 dark:border-blue-600" :dir="isRTL ? 'rtl' : 'ltr'"
					:class="{ 'rtl': isRTL }">{{ t('Contact') }}</h2>
				<div class="contact-info">
					<div
						class="contact-item bg-white dark:bg-[#1e293b] text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800">
						<span class="contact-icon">📧</span>
						<span>{{ profile.email }}</span>
					</div>
					<div
						class="contact-item bg-white dark:bg-[#1e293b] text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800">
						<span class="contact-icon">📱</span>
						<span>{{ profile.phone }}</span>
					</div>
					<div
						class="contact-item bg-white dark:bg-[#1e293b] text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800">
						<span class="contact-icon">📍</span>
						<span>{{ profile.location }}</span>
					</div>
					<div
						class="contact-item bg-white dark:bg-[#1e293b] text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800">
						<span class="contact-icon">🔗</span>
						<a :href="profile.linkedin" target="_blank" rel="noopener noreferrer" class="hover:underline">
							{{ profile.linkedin }}
						</a>
					</div>

				</div>
			</div>

			<!-- Skills Section -->
			<div class="section">
				<h2 class="section-title border-b-4 border-blue-400 dark:border-blue-600" :dir="isRTL ? 'rtl' : 'ltr'"
					:class="{ 'rtl': isRTL }">{{ t('Skills') }}</h2>
				<div v-for="skill in skills" :key="skill.name" class="skill-item" :dir="isRTL ? 'rtl' : 'ltr'"
					:class="{ 'rtl': isRTL }">
					<div class="skill-name">{{ skill.name }}</div>
					<div class="skill-bar bg-gray-200 dark:bg-gray-700">
						<div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
					</div>
				</div>
			</div>

			<!-- Employment Section -->
			<div class="section">
				<h2 class="section-title border-b-4 border-blue-400 dark:border-blue-600" :dir="isRTL ? 'rtl' : 'ltr'"
					:class="{ 'rtl': isRTL }">{{ t('Employment History') }}
				</h2>
				<div v-for="exp in employmentHistory" :key="exp.id"
					class="experience-item bg-white dark:bg-[#1e293b] text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
					:dir="isRTL ? 'rtl' : 'ltr'" :class="{ 'rtl': isRTL }">
					<h3 class="item-title">{{ t(exp.position) }}</h3>
					<p class="item-company">{{ t(exp.company) }}</p>
					<p class="item-date">{{ t(exp.startDate) }} - {{ t(exp.endDate) }}</p>
					<p class="item-description">{{ t(exp.description) }}</p>
				</div>
			</div>

			<!-- Education Section -->
			<div class="section">
				<h2 class="section-title border-b-4 border-blue-400 dark:border-blue-600" :dir="isRTL ? 'rtl' : 'ltr'"
					:class="{ 'rtl': isRTL }">{{ t('Education') }}</h2>
				<div v-for="edu in education" :key="edu.id"
					class="education-item bg-white dark:bg-[#1e293b] text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
					:dir="isRTL ? 'rtl' : 'ltr'" :class="{ 'rtl': isRTL }">
					<h3 class="item-title">{{ t(edu.degree) }}</h3>
					<p class="item-school">{{ t(edu.school) }}</p>
					<p class="item-date">{{ t(edu.startDate) }} - {{ t(edu.endDate) }}</p>
					<p class="item-description">{{ t(edu.description) }}</p>
				</div>
			</div>
		</div>


		<!-- Print Button -->
		<!-- <button
		class="print-btn bg-green-600 dark:bg-green-400 text-white dark:text-gray-900"
		@click="printCV"
	  >
		🖨️
	  </button> -->

	</div>
</template>



<script setup>
import configs from '~/configs';
import EmploymentHistory from '~/data/EmploymentHistory';
import Education from '~/data/Education';
import { useI18n } from 'vue-i18n';
import { useHead } from '#imports'
import { socialLinks } from "@/data/socialLinks";
const { t, locale }=useI18n();

useHead({
  title: () => `${t('CV')} - ${t('Mostefa Boudjema')}`
})
definePageMeta({
	layout: 'empty'
})


const isRTL=computed(() => locale.value==='ar');


const getContact=(key) => configs.contacts.find(c => c.icon===key)?.name||'';
const getSocialLink=(key) => socialLinks.find(c => c.name===key)?.url||'';


const profile=reactive({
	name: configs.name,
	title: configs.jobTitle,
	email: getContact('mail'),
	phone: getContact('phone'),
	location: getContact('map-pin'),
	linkedin: getSocialLink('LinkedIn'),
	photo: configs.profile_photo,
})

const skills=ref([
	{ name: 'Laravel', level: 90 },
	{ name: 'Vue.js', level: 85 },
	{ name: 'React', level: 80 },
	{ name: 'Node.js', level: 75 },
	{ name: 'API', level: 75 },
	{ name: 'SQL', level: 70 },
	{ name: 'Git', level: 70 },
	// { name: 'CI/CD', level: 60 },
])


const employmentHistory=EmploymentHistory.map((job, index) => ({
	id: index+1,
	position: job.title,
	company: job.company,
	startDate: job.startDate,
	endDate: job.endDate,
	description: job.description,
	logo: job.logo
}));

const education=Education.map((edu, index) => ({
	id: index+1,
	degree: edu.title,
	school: edu.institution,
	startDate: edu.startDate,
	endDate: edu.endDate,
	description: edu.description,
	logo: edu.logo
}));

let timeouts = [];

onMounted(() => {
  const mainTimeout = setTimeout(() => {
    skills.value.forEach((skill, index) => {
      const t = setTimeout(() => {
        const progressBar = document.querySelectorAll('.skill-progress')[index];
        if (progressBar) {
          progressBar.style.width = skill.level + '%';
        }
      }, index * 200);
      timeouts.push(t);
    });
  }, 500);

  timeouts.push(mainTimeout);
});

onUnmounted(() => {
  timeouts.forEach(clearTimeout);
  timeouts.length = 0; // Clear the array without reassigning
});

</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	/* font-family: 'Fira Code', 'JetBrains Mono', 'Source Code Pro', 'Courier New', monospace; */
	font-family: 'Fira Code', monospace;
	background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	min-height: 100vh;
	padding: 20px;
}

.cv-container {
	max-width: 800px;
	margin: 0 auto;
	border-radius: 20px;
	box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	transform: translateY(0);
	transition: all 0.3s ease;
}

.cv-container:hover {
	transform: translateY(-5px);
	box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
}

.header {
	padding: 40px;
	text-align: center;
	position: relative;
	overflow: hidden;
}

.header::before {
	content: '';
	position: absolute;
	top: -50%;
	left: -50%;
	width: 200%;
	height: 200%;
	background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
	animation: float 6s ease-in-out infinite;
	z-index: 0;
}

@keyframes float {

	0%,
	100% {
		transform: translate(-50%, -50%) rotate(0deg);
	}

	50% {
		transform: translate(-50%, -50%) rotate(180deg);
	}
}

.profile-img {
	width: 120px;
	height: 120px;
	border-radius: 50%;
	border: 4px solid rgba(255, 255, 255, 0.3);
	margin: 0 auto 20px;
	object-fit: cover;
	transition: transform 0.3s ease;
	position: relative;
	z-index: 1;
}

.profile-img:hover {
	transform: scale(1.1);
}

.name {
	font-size: 2.5em;
	font-weight: 300;
	margin-bottom: 10px;
	position: relative;
	z-index: 1;
}

.title {
	font-size: 1.2em;
	opacity: 0.9;
	position: relative;
	z-index: 1;
}

.content {
	padding: 40px;
}

.section {
	margin-bottom: 40px;
	opacity: 0;
	transform: translateY(20px);
	animation: slideIn 0.6s ease forwards;
}

.section:nth-child(1) {
	animation-delay: 0.1s;
}

.section:nth-child(2) {
	animation-delay: 0.2s;
}

.section:nth-child(3) {
	animation-delay: 0.3s;
}

.section:nth-child(4) {
	animation-delay: 0.4s;
}

@keyframes slideIn {
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.section-title {
	font-size: 1.8em;
	margin-bottom: 20px;
	padding-bottom: 10px;
	position: relative;
}

.section-title::after {
	content: '';
	position: absolute;
	bottom: -3px;
	left: 0;
	width: 0;
	height: 3px;
	background: linear-gradient(45deg, #667eea, #764ba2);
	transition: width 0.3s ease;
}

.section:hover .section-title::after {
	width: 100%;
}

.contact-info {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 15px;
}

.contact-item {
	display: flex;
	align-items: center;
	padding: 10px;
	border-radius: 10px;
	transition: all 0.3s ease;
}

.contact-item:hover {
	transform: translateX(5px);
}

.contact-icon {
	width: 20px;
	height: 20px;
	margin-right: 10px;
}

.skill-item {
	margin-bottom: 20px;
}

.skill-name {
	font-weight: 600;
	margin-bottom: 5px;
}

.skill-bar {
	height: 8px;
	border-radius: 4px;
	overflow: hidden;
	position: relative;
}

.skill-progress {
	height: 100%;
	background: linear-gradient(45deg, #3498db, #2980b9);
	border-radius: 4px;
	transition: width 2s ease;
	position: relative;
}

.skill-progress::after {
	content: '';
	position: absolute;
	top: 0;
	left: -100%;
	width: 100%;
	height: 100%;
	background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
	animation: shimmer 2s infinite;
}

@keyframes shimmer {
	0% {
		left: -100%;
	}

	100% {
		left: 100%;
	}
}

.experience-item,
.education-item {
	margin-bottom: 25px;
	padding: 20px;
	border-left: 4px solid #3498db;
	border-radius: 0 10px 10px 0;
	transition: all 0.3s ease;
}

.experience-item:hover,
.education-item:hover {
	transform: translateX(10px);
}

.item-title {
	font-size: 1.3em;
	font-weight: 600;
	margin-bottom: 5px;
}

.item-company,
.item-school {
	font-weight: 500;
	margin-bottom: 5px;
}

.item-date {
	font-size: 0.9em;
	margin-bottom: 10px;
}

.item-description {
	line-height: 1.6;
}

.edit-btn,
.print-btn {
	position: fixed;
	bottom: 30px;
	right: 30px;
	color: white;
	border: none;
	border-radius: 50%;
	width: 60px;
	height: 60px;
	font-size: 1.5em;
	cursor: pointer;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	transition: all 0.3s ease;
	z-index: 1001;
}

.print-btn {
	bottom: 100px;
	background: linear-gradient(45deg, #2ecc71, #27ae60);
}

.edit-btn {
	background: linear-gradient(45deg, #667eea, #764ba2);
}

.print-btn:hover,
.edit-btn:hover {
	transform: scale(1.1);
	box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
}

.modal-content {
	padding: 30px;
	border-radius: 15px;
	width: 90%;
	max-width: 500px;
	max-height: 80vh;
	overflow-y: auto;
}

.form-group {
	margin-bottom: 20px;
}

.form-group label {
	display: block;
	margin-bottom: 5px;
	font-weight: 600;
}

.form-group input,
.form-group textarea {
	width: 100%;
	padding: 10px;
	border: 2px solid #ecf0f1;
	border-radius: 8px;
	font-size: 1em;
	transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
	outline: none;
	border-color: #3498db;
}

.btn {
	border: none;
	padding: 12px 25px;
	border-radius: 8px;
	cursor: pointer;
	font-size: 1em;
	margin-right: 10px;
	transition: all 0.3s ease;
}

.btn:hover {
	transform: translateY(-2px);
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
	background: #95a5a6;
}

.rtl {
	direction: rtl;
	text-align: right;
}

.rtl .contact-icon {
	margin-right: 0;
	margin-left: 10px;
}

.rtl .contact-item:hover {
	transform: translateX(-5px);
}

.rtl .experience-item,
.rtl .education-item {
	border-left: none;
	border-right: 4px solid #3498db;
	border-radius: 10px 0 0 10px;
	transform: translateX(0);
}

.rtl .experience-item:hover,
.rtl .education-item:hover {
	transform: translateX(-10px);
}


@media (max-width: 768px) {
	.cv-container {
		margin: 10px;
	}

	.header {
		padding: 20px;
	}

	.name {
		font-size: 2em;
	}

	.content {
		padding: 20px;
	}
}

@media print {
	body * {
		visibility: hidden;
	}

	.cv-container,
	.cv-container * {
		visibility: visible;
	}

	.cv-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.print-btn,
	.edit-btn {
		display: none !important;
	}
}
</style>
