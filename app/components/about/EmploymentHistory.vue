<template>
    <div class="mb-8">
        <div class="flex justify-center pt-1 pb-8 mt-8">
            <p class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">
                {{ t("Employment History") }}
            </p>
        </div>

        <div class="flex justify-center flex-wrap">
            <div v-for="(job, index) in employmentHistory" :key="index"
                class="w-full md:w-[30%] dark:text-gray-200 mb-4 md:mb-0 md:mr-4" data-aos="zoom-in-up">
                <div class="p-8 rounded sm:border border-ternary-light dark:border-ternary-dark h-full card">
                    <div class="flex justify-center md:justify-between items-center mb-4">
                        <NuxtImg
                            class="w-24 py-3 px-2 border shadow-sm rounded-lg m-1 cursor-pointer dark:bg-secondary-light"
                            :src="job.logo" alt="logo" />
                        <div class="flex-1 mx-2 justify-center md:ml-4 mt-4 md:mt-0">
                            <h2 class="text-xl font-semibold">{{ t(job.title) }}</h2>
                            <p class="">{{ t(job.company) }}</p>
                            <p class="">{{ t(job.startDate) }} - {{ t(job.endDate) }}</p>
                        </div>
                    </div>
                    <div class="code-editor-container mt-8">
                        <div class="code-editor-header">
                            <div class="code-editor-buttons">
                                <div class="code-button red"></div>
                                <div class="code-button yellow"></div>
                                <div class="code-button green"></div>
                            </div>
                            <div class="code-editor-title"></div>
                        </div>
                        <div class="code-editor-content">
                            <div class="line-numbers">
                                <span v-for="n in 3" :key="`line-${n}`" class="line-number">{{ n }}</span>
                            </div>
                            <div class="code-content">
                                <p class="font-coding text-code-light text-sm code-line">
                                    <span class="code-comment">// </span>{{ t(job.description) }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
import EmploymentHistory from '~/data/EmploymentHistory';

const { t }=useI18n({
    inheritLocale: true,
    useScope: "local",
});

const employmentHistory=EmploymentHistory;
</script>


<style scoped>
/* Code Editor Styling */
.code-editor-container {
    background: #1e1e1e;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    border: 1px solid #333;
    margin: 0 auto;
    max-width: 1200px;
}

/* Smaller code editor for cards */
.card .code-editor-container {
    max-width: none;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
}

.code-editor-header {
    background: #2d2d30;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #333;
}

.code-editor-buttons {
    display: flex;
    gap: 8px;
    margin-right: 16px;
}

.code-button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.code-button.red {
    background: #ff5f56;
}

.code-button.yellow {
    background: #ffbd2e;
}

.code-button.green {
    background: #27ca3f;
}

.code-editor-title {
    color: #cccccc;
    font-size: 14px;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 500;
}

.code-editor-content {
    display: flex;
    background: #1e1e1e;
    min-height: 400px;
}

/* Smaller content for cards */
.card .code-editor-content {
    min-height: 80px;
}

.line-numbers {
    background: #252526;
    padding: 16px 8px;
    border-right: 1px solid #333;
    min-width: 50px;
    text-align: right;
}

/* Smaller line numbers for cards */
.card .line-numbers {
    min-width: 30px;
    padding: 12px 4px;
}

.line-number {
    display: block;
    color: #858585;
    font-size: 14px;
    font-family: 'JetBrains Mono', monospace;
    line-height: 1.6;
    margin-bottom: 16px;
}

.code-content {
    padding: 16px;
    flex: 1;
}

/* Smaller content padding for cards */
.card .code-content {
    padding: 12px;
}

.code-line {
    margin-bottom: 16px !important;
    line-height: 1.6;
    color: #d4d4d4;
}

.indent-1 {
    padding-left: 20px;
}

.job-entry {
    margin-bottom: 24px;
}

.code-line-spacer {
    height: 16px;
}

/* Syntax Highlighting */
.code-keyword {
    color: #569cd6;
    font-weight: 500;
}

.code-variable {
    color: #4fc1ff;
    font-weight: 500;
}

.code-property {
    color: #9cdcfe;
    font-weight: 500;
}

.code-string {
    color: #ce9178;
    font-weight: 400;
}

.code-comment {
    color: #6a9955;
    font-weight: 500;
}

/* Dark mode adjustments */
.dark .code-editor-container {
    background: #0d1117;
    border-color: #30363d;
}

.dark .code-editor-header {
    background: #161b22;
    border-bottom-color: #30363d;
}

.dark .line-numbers {
    background: #0d1117;
    border-right-color: #30363d;
}

.dark .code-content {
    background: #0d1117;
}

/* Responsive adjustments */
@media (max-width: 640px) {
    .code-editor-container {
        margin: 0 10px;
    }

    .line-numbers {
        min-width: 40px;
        padding: 16px 4px;
    }

    .code-content {
        padding: 16px 12px;
    }

    .indent-1 {
        padding-left: 16px;
    }
}
</style>
~/data/EmploymentHistory