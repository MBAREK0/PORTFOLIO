<template>
    <section id="experiences" class="mb-5 section">
        <router-link :to="{ name: 'portfolio', hash: '#experiences' }">
            <div class="flex justify-start items-center mb-3 text-3xl dark:hover:text-white">
                <span>#</span>
                <h1 class="ml-2">{{ t('experiences') }}</h1>
            </div>
        </router-link>
        <p class="text-sm ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, blanditiis. Incidunt
            quibusdam ex eaque temporibus natus magnam blanditiis minima consequuntur, odio rem quidem mollitia itaque
            nulla rerum. Ullam, ab ea!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aspernatur dolorem voluptatem laboriosam
            atque maxime ipsum. Deserunt, consequuntur animi voluptas velit, facilis aperiam soluta enim, facere error
            harum doloremque placeat?</p>
        <div class="grid gap-4 md:grid-cols-2">
            <div v-for="experience in experiences" :key="experience.id"
                class="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800" @click="openModal(experience)">
             
                <img :src="experience.companyLogo" :alt="experience.company" class="w-full h-56 mb-4">
                <div class="flex items-center justify-between mb-3">
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">{{ experience.title }}</h3>
                 
                    <p class="text-sm text-gray-600 dark:text-gray-300">{{ experience.dates }}</p>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-300">{{ experience.company }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">{{ experience.description }}</p>
                <!-- skills -->
                <div class="mt-4">
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-100">Skills</h4>
                    <div class="flex flex-wrap gap-2 my-2">
                        <span
                            class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Vue</span>
                        <span
                            class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Tailwind</span>
                        <span
                            class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Firebase</span>
                        <span
                            class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Vue</span>
                        <span
                            class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Tailwind</span>
                        <span
                            class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Firebase</span>
                        <span
                            class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Vue</span>
                        <span
                            class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Tailwind</span>
                        <span
                            class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Firebase</span>
                    </div>
                </div>

            </div>
        </div>
    </section>

<!-- modal section -->
<div v-if="showModal"
    class="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 overflow-auto"
    @click.self="showModal = false">
    <div class="bg-white dark:bg-gray-800 rounded-lg w-full max-w-xl xl:max-w-2xl max-h-[90vh] overflow-y-auto modal-content"
        @click.stop>
        <div class="flex justify-between items-center p-4 border-b dark:border-gray-700">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">{{ selectedExperience.title }}</h3>
            <button @click="showModal = false" class="text-gray-500 dark:text-gray-400">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                </svg>
            </button>
        </div>
        <div class="p-4">

            <div :style="{ backgroundImage: `url(${selectedExperience.companyLogo})` }"
            class="w-full h-64 mb-4 bg-cover bg-center"></div>
            <p class="text-sm text-gray-600 dark:text-gray-300">{{ selectedExperience.company }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-300">{{ selectedExperience.dates }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-300">{{ selectedExperience.description }}</p>
            <!-- skills -->
            <div class="mt-4">
                <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-100">Skills</h4>
                <div class="flex flex-wrap gap-2 my-2">
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Vue</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Tailwind</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Firebase</span>
                </div> 
            </div>
        </div>
    </div>

</div>



</template>

<script setup>

import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const experiences = ref([
    {
        id: 1,
        title: 'Software Engineer',
        dates: 'Jan 2020 - Present',
        company: 'ABC Company',
        companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        skills: [
            { id: 1, name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
            { id: 2, name: 'Vue.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
            { id: 3, name: 'HTML', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
        ],
    },
    {
        id: 2,
        title: 'Frontend Developer',
        dates: 'Jan 2018 - Dec 2019',
        company: 'XYZ Company',
        companyLogo: 'https://media.licdn.com/dms/image/D4E0BAQFQku4wTyQJew/company-logo_200_200/0/1681226019201/pc_halle1_logo?e=2147483647&v=beta&t=65ytkbJG3aeeyNR8ENXz4FJ0H-KtbbHMegjcR0vv6H8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        skills: [
            { id: 5, name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
            { id: 6, name: 'Redux', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
            { id: 7, name: 'Sass', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
            { id: 8, name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
            { id: 9, name: 'Redux', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
            { id: 10, name: 'Sass', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },

        ],
    },
]);

const showModal = ref(false);
const selectedExperience = ref({});
const openModal = (experience) => {
    selectedExperience.value = experience;
    showModal.value = true;
}







</script>


<style scoped>

.tag {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: #f0f0f0;
}

.tag img {
    width: 2rem;
    height: 2rem;
}

.tag:hover {
    background-color: #a0a0a0;
    color: #ffffff !important;
}


.fixed {
    overflow: auto;
}

.bg-white {
    max-height: 90vh;
    overflow-y: auto;
}


.modal-content {
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.modal-content::-webkit-scrollbar {
    display: none;
}


.fixed-container {
    scrollbar-width: none;
    -ms-overflow-style: none;
}


.fixed-container::-webkit-scrollbar {
    display: none;
}
</style>