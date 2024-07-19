<template>
    <aside id="sidebar-multi-level-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div class="h-full px-3 py-4 ps-8 overflow-y-auto bg-white dark:bg-gray-800 ">
            <div class="mb-10 w-full flex justify-center">
                <h2 class="text-gray-700  dark:text-gray-400 dark:hover:text-white text-xl">Documentation</h2>
            </div>
            <ul>
                <li>
                    <router-link :to="{ name: 'portfolio', hash: '#introduction' }"
                        :class="{ ' router-active ': activeHash === '#introduction' }"
                        class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <span class="mr-2">#</span>
                        <span> Introduction </span>
 
                    </router-link>

                </li>
                <li>
                    <router-link :to="{ name: 'portfolio', hash: '#personal-information' }"
                        :class="{ ' router-active ': activeHash === '#personal-information' }"
                        class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <span class="mr-2">#</span>
                        <span> Personnel information </span>
 
                    </router-link>
                    <ul >

                        <router-link :to="{ name: 'portfolio', hash: '#about' }"
                            :class="{ ' router-active ': activeHash === '#about' }"
                            class=" cursor-pointer flex items-center justify-start p-1 pl-4 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <span class="mr-2">•</span>
                            <span> About me</span>
                            <span
                                class="hidden text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">New</span>
                        </router-link>
                        
                        <router-link :to="{ name: 'portfolio', hash: '#current-role' }"
                            :class="{ ' router-active ': activeHash === '#current-role' }"
                            class=" cursor-pointer flex items-center justify-start p-1 pl-4 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <span class="mr-2">•</span>
                            <span> Current role </span>
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
                        <span> Educations </span>
 
                    </router-link>
                </li>
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
