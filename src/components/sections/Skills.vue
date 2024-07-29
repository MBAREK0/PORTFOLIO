<template>
    <!-- skills section -->
    <div >


        <section v-if="skillsStore.loading" >
            <p class="mb-3">
            <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-16"></div>
            </p>
            <div role="status" class="space-y-2.5 animate-pulse max-w-lg ">
                <div class="flex items-center w-full">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
                <div class="flex items-center w-full max-w-[480px]">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                </div>
                <div class="flex items-center w-full max-w-[400px]">
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
                <div class="flex items-center w-full max-w-[480px]">
                    <div class="h-2.5  bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                </div>
                <div class="flex items-center w-full max-w-[440px]">
                    <div class="h-2.5  bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                    <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                </div>

            </div>
        </section>
        <section v-else >
            <p class="mb-3">
                <span class="text-md font-semibold text-gray-700 dark:text-gray-400 ">{{ t('skills') }}</span>
            </p>
            <div class="flex flex-wrap gap-2 ">
                <span v-for="skill in skills" :key="skill.id"
                    class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">{{
                        skill.name }}</span>
            </div>
        </section>

    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted, ref, watch } from 'vue'
import { useSkillsStore } from '@/stores/skillsStore';
import { useMainStore } from '@/stores/mainStore';

const { t } = useI18n();
const skillsStore = useSkillsStore();
const mainStore = useMainStore();
const skills = ref({});

const fetchData = async () => {
    await skillsStore.get();
    skills.value = skillsStore.data;
    skillsStore.loading = false;

};

onMounted(async () => {
    await fetchData();
});
watch(
    () => mainStore.selectedLang,
    async (newLang, oldLang) => {
        await fetchData();
    }
);
</script>