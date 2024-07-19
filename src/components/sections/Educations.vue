<template>
    <section id="educations" class="mb-5">
        <router-link :to="{ name: 'portfolio', hash: '#educations' }">
            <div class="flex justify-start items-center mb-3 text-3xl dark:hover:text-white">
                <span>#</span>
                <h1 class="ml-2">Educations</h1>
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
                    <ul class="grid grid-cols-2 gap-2 mt-2 sm:grid-cols-3">
                        <li class="tag flex justify-start items-center gap-2 ">
                            <img class="w-10 h-10 rounded-full"
                                src="https://th.bing.com/th/id/OIP.o-wNqCyhGc3XpFMfCCFpigHaEK?rs=1&pid=ImgDetMain"
                                alt="Rounded avatar">
                            <span>HTML</span>
                        </li>
                        <li class="tag flex justify-start items-center gap-2 ">
                            <img class="w-10 h-10 rounded-full"
                                src="https://th.bing.com/th/id/OIP.o-wNqCyhGc3XpFMfCCFpigHaEK?rs=1&pid=ImgDetMain"
                                alt="Rounded avatar">
                            <span>HTML</span>
                        </li>
                        <li class="tag flex justify-start items-center gap-2 ">
                            <img class="w-10 h-10 rounded-full"
                                src="https://th.bing.com/th/id/OIP.o-wNqCyhGc3XpFMfCCFpigHaEK?rs=1&pid=ImgDetMain"
                                alt="Rounded avatar">
                            <span>HTML</span>
                        </li>
                        <li class="tag flex justify-start items-center gap-2 ">
                            <img class="w-10 h-10 rounded-full"
                                src="https://th.bing.com/th/id/OIP.o-wNqCyhGc3XpFMfCCFpigHaEK?rs=1&pid=ImgDetMain"
                                alt="Rounded avatar">
                            <span>HTML</span>
                        </li>
                        <li class="tag flex justify-start items-center gap-2 ">
                            <img class="w-10 h-10 rounded-full"
                                src="https://th.bing.com/th/id/OIP.o-wNqCyhGc3XpFMfCCFpigHaEK?rs=1&pid=ImgDetMain"
                                alt="Rounded avatar">
                            <span>HTML</span>
                        </li>
                        <li class="tag flex justify-start items-center gap-2 ">
                            <img class="w-10 h-10 rounded-full"
                                src="https://th.bing.com/th/id/OIP.o-wNqCyhGc3XpFMfCCFpigHaEK?rs=1&pid=ImgDetMain"
                                alt="Rounded avatar">
                            <span>HTML</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';

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
    font-size: 0.875rem;
    color: #4a4a4a;
    background-color: #e2e8f0;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    display: flex;
}

.tag:hover {
    background-color: #a0a0a0;
    color: #ffffff !important;

}


@media (prefers-color-scheme: dark) {
    .tag {
        color: #d1d5db;
        background-color: #374151;
    }
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