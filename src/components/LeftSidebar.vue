<template>
    <aside id="sidebar-multi-level-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">

        <div class="h-full px-3 py-4 ps-8 overflow-y-auto bg-white dark:bg-gray-800 ">

            <div class="flex items-center justify-between my-6">
                <div class="flex items-center">
                    <img src="https://avatars.githubusercontent.com/u/4723117?v=4" alt="avatar"
                        class="w-12 h-12 rounded-full">
                    <div class="ml-3">
                        <h3 class="text-md font-medium  text-gray-600 dark:text-gray-400">M'barek El Aadraoui</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Full Stack Developer</p>
                    </div>
                </div>
            </div>
            <ul>
                <li>
                    <router-link :to="{ name: 'portfolio', hash: '#introduction' }"
                        :class="{ ' router-active ': activeHash === '#introduction' }"
                        class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <span class="mr-2">#</span>
                        <span> Introduction</span>

                    </router-link>

                </li>
                <li>
                    <div class="  w-[190px]  absolute bottom-3">
                        <button
                            class="flex w-full justify-center items-center bg-blue-500 text-white text-sm font-semibold py-2 px-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            <!-- New Download Icon -->
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 12l8 8 8-8M12 3v9" />
                            </svg>
                            Download CV
                        </button>
                    </div>
                </li>
                <li>
                    <router-link :to="{ name: 'portfolio', hash: '#personal-information' }"
                        :class="{ ' router-active ': activeHash === '#personal-information' }"
                        class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <span class="mr-2">#</span>
                        <span> Personnel information</span>

                    </router-link>
                    <ul>

                        <router-link :to="{ name: 'portfolio', hash: '#about' }"
                            :class="{ ' router-active ': activeHash === '#about' }"
                            class=" cursor-pointer flex items-center justify-start p-1 pl-4 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <span class="mr-2">•</span>
                            <span>About me</span>
                            <span
                                class="hidden text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">New</span>
                        </router-link>

                        <router-link :to="{ name: 'portfolio', hash: '#current-role' }"
                            :class="{ ' router-active ': activeHash === '#current-role' }"
                            class=" cursor-pointer flex items-center justify-start p-1 pl-4 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <span class="mr-2">•</span>
                            <span>Current role</span>
                            <span
                                class="hidden text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">New</span>
                        </router-link>
                    </ul>
                </li>
                <li>
                    <router-link :to="{ name: 'portfolio', hash: '#educations' }"
                        :class="{ ' router-active ': activeHash === '#educations' }"
                        class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <span class="mr-2">#</span>
                        <span>Educations</span>

                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'portfolio', hash: '#license-and-certifications' }"
                        :class="{ ' router-active ': activeHash === '#license-and-certifications' }"
                        class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <span class="mr-2">#</span>
                        <span>license And certifications</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'portfolio', hash: '#honors-and-awards' }"
                        :class="{ ' router-active ': activeHash === '#honors-and-awards' }"
                        class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <span class="mr-2">#</span>
                        <span>honors And awards</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'portfolio', hash: '#experiences' }"
                        :class="{ ' router-active ': activeHash === '#experiences' }"
                        class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <span class="mr-2">#</span>
                        <span>Experiences</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'portfolio', hash: '#projects' }"
                        :class="{ ' router-active ': activeHash === '#projects' }"
                        class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <span class="mr-2">#</span>
                        <span>Projects</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'portfolio', hash: '#contact-me' }"
                        :class="{ ' router-active ': activeHash === '#contact-me' }"
                        class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <span class="mr-2">#</span>
                        <span>Contact me</span>
                    </router-link>
                </li>
                <div class="lg:hidden">
                    <!-- skills -->
                    <li>
                        <router-link :to="{ name: 'portfolio', hash: '#skills' }"
                            :class="{ ' router-active ': activeHash === '#skills' }"
                            class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <span class="mr-2">#</span>
                            <span>Skills</span>
                        </router-link>
                    </li>
                    <!-- languages -->
                    <li>
                        <router-link :to="{ name: 'portfolio', hash: '#languages' }"
                            :class="{ ' router-active ': activeHash === '#languages' }"
                            class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <span class="mr-2">#</span>
                            <span>Languages</span>
                        </router-link>
                    </li>
                    <!-- contacts -->
                    <li>
                        <router-link :to="{ name: 'portfolio', hash: '#contacts' }"
                            :class="{ ' router-active ': activeHash === '#contacts' }"
                            class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <span class="mr-2">#</span>
                            <span>Contacts</span>
                        </router-link>
                    </li>

                </div>
            </ul>
        </div>
    </aside>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();
const activeHash = ref(route.hash);

watch(() => route.hash, (newHash) => {
    activeHash.value = newHash;
});

onMounted(() => {
    activeHash.value = route.hash;
});

</script>
