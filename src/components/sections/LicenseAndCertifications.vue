<template>
    <section id="license-and-certifications" class="mb-5 section">
        <router-link :to="{ name: 'portfolio', hash: '#license-and-certifications' }">
            <div class="flex justify-start items-center mb-3 text-3xl dark:hover:text-white">
                <span>#</span>
                <h1 class="ml-2">License And Certifications </h1>
            </div>
        </router-link>
        <p class="text-sm ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, blanditiis. Incidunt
            quibusdam ex eaque temporibus natus magnam blanditiis minima consequuntur, odio rem quidem mollitia itaque
            nulla rerum. Ullam, ab ea!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aspernatur dolorem voluptatem laboriosam
            atque maxime ipsum. Deserunt, consequuntur animi voluptas velit, facilis aperiam soluta enim, facere error
            harum doloremque placeat?</p>

        <div class="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
            <div v-for="license in licenses" :key="license.id"
                class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 cursor-pointer border dark:border-[#a0a0a0] bottom-1"
                @click="openModal(license)">
                <img :src="license.image" alt="Image" class="w-full h-56 mb-4">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">{{ license.title }}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">{{ license.institution }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">{{ license.dates }}</p>
            </div>
        </div>

        <!-- modal section -->
        <div v-if="showModal"
            class="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 overflow-auto"
            @click.self="showModal = false">
            <div class="bg-white dark:bg-gray-800 rounded-lg w-full max-w-xl xl:max-w-2xl max-h-[90vh] overflow-y-auto modal-content"
                @click.stop>
                <div class="flex justify-between items-center p-4 border-b dark:border-gray-700">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">{{ selectedLicense.title }}</h3>
                    <button @click="showModal = false" class="text-gray-500 dark:text-gray-400">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12">
                            </path>
                        </svg>
                    </button>
                </div>
                <div class="p-4">
                    <img :src="selectedLicense.image" class="w-full  mb-4 bg-cover bg-center"></img>
                    <p class="text-sm text-gray-600 dark:text-gray-300">{{ selectedLicense.institution }}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">{{ selectedLicense.dates }}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">{{ selectedLicense.description }}</p>
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



    </section>
</template>

<script setup>
import { ref } from 'vue';

const licenses = ref([
    {
        id: 1,
        title: 'Certified Ethical Hacker',
        institution: 'EC-Council',
        dates: '2019 - 2021',
        image: 'https://th.bing.com/th/id/OIP.o-wNqCyhGc3XpFMfCCFpigHaEK?rs=1&pid=ImgDetMain',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aspernatur dolorem voluptatem laboriosam atque maxime ipsum. Deserunt, consequuntur animi voluptas velit, facilis aperiam soluta enim, facere error harum doloremque placeat?'
    },
    {
        id: 2,
        title: 'Certified Information Systems Security Professional',
        institution: 'ISC2',
        dates: '2019 - 2021',
        image: 'https://th.bing.com/th/id/OIP.o-wNqCyhGc3XpFMfCCFpigHaEK?rs=1&pid=ImgDetMain',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aspernatur dolorem voluptatem laboriosam atque maxime ipsum. Deserunt, consequuntur animi voluptas velit, facilis aperiam soluta enim, facere error harum doloremque placeat?'
    }]);


const showModal = ref(false);
const selectedLicense = ref({});
const openModal = (license) => {
    selectedLicense.value = license;
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
</style>