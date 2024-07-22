<template>
    <section id="educations" class="mb-5 section">
        <router-link :to="{ name: 'portfolio', hash: '#educations' }">
            <div class="flex justify-start items-center mb-3 text-3xl dark:hover:text-white">
                <span>#</span>
                <h1 class="ml-2">{{ t('educations') }}</h1>
            </div>
        </router-link>
        <p class="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos maiores dolore, doloremque nihil officia nam
            cum sunt quae ea voluptates eos nemo aspernatur non quaerat dignissimos tempore optio ipsum repellendus!
        </p>

        <div class="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
            <div v-for="education in educations" :key="education.id"
                class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 cursor-pointer border dark:border-[#a0a0a0] bottom-1"
                @click="openModal(education)">
                <img :src="education.image" alt="Image" class="w-full h-56 mb-4">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">{{ education.title }}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">{{ education.institution }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">{{ education.dates }}</p>
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
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">{{ selectedEducation.title }}</h3>
                <button @click="showModal = false" class="text-gray-500 dark:text-gray-400">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="p-4">
                <div :style="{ backgroundImage: `url(${selectedEducation.image})` }"
                    class="w-full h-64 mb-4 bg-cover bg-center"></div>
                <p class="text-sm text-gray-600 dark:text-gray-300">{{ selectedEducation.institution }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">{{ selectedEducation.dates }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">{{ selectedEducation.description }}</p>
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
const showModal = ref(false);
const selectedEducation = ref({});

const educations = ref([
    {
        id: 1,
        title: "Master's Degree in Computer Science",
        institution: "University of California, Los Angeles",
        dates: "2022 - 2024",
        image: "https://th.bing.com/th/id/OIP.90jSqj2GEsXNRXeta6omigHaHa?rs=1&pid=ImgDetMain",
        description: "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos maiores dolore, doloremque nihil officia nam cum sunt quae ea voluptates eos nemo aspernatur non quaerat dignissimos tempore optio ipsum repellendus..."
    },
    {
        id: 2,
        title: "Bachelor's Degree in Computer Science",
        institution: "Massachusetts Institute of Technology",
        dates: "2018 - 2022",
        image: "https://cdn-07.9rayti.com/rsrc/cache/widen_750/uploads/2012/07/FSSM-logo.jpg",
        description: "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos maiores dolore, doloremque nihil officia nam cum sunt quae ea voluptates eos nemo aspernatur non quaerat dignissimos tempore optio ipsum repellendus..."
    }
]);

const openModal = (education) => {
    selectedEducation.value = education;
    showModal.value = true;
};
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



</style>