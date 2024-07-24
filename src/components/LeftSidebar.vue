<template>
    <aside id="sidebar-multi-level-sidebar"
        class="fixed top-0 left-0 z-40 w-68 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">

        <div class="h-full px-3 py-4 ps-8 overflow-y-auto bg-white dark:bg-gray-800 ">

            <TopOfLeftAside />
 
            <DownloadCvBtn />
            
            <ul>
                <li>
                    <router-link :to="{ name: 'portfolio', hash: '#introduction' }"
                        :class="{ ' router-active ': activeHash === '#introduction' }"
                        class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <span class="mr-2">#</span>
                        <span>{{ t('introduction') }}</span>
                    </router-link>
                </li>

                <li>
                    <router-link :to="{ name: 'portfolio', hash: '#personal-information' }"
                        :class="{ ' router-active ': activeHash === '#personal-information' }"
                        class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <span class="mr-2">#</span>
                        <span>{{ t('personal_information') }}</span>
                    </router-link>
                    <ul>
                        <router-link :to="{ name: 'portfolio', hash: '#about' }"
                            :class="{ ' router-active ': activeHash === '#about' }"
                            class=" cursor-pointer flex items-center justify-start p-1 pl-4 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <span class="mr-2">•</span>
                            <span>{{ t('about_me') }}</span>
                            <span
                                class="hidden text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">{{
                                t('new') }}</span>
                        </router-link>
                        <router-link :to="{ name: 'portfolio', hash: '#current-role' }"
                            :class="{ ' router-active ': activeHash === '#current-role' }"
                            class=" cursor-pointer flex items-center justify-start p-1 pl-4 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <span class="mr-2">•</span>
                            <span>{{ t('current_role') }}</span>
                            <span
                                class="hidden text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">{{
                                t('new') }}</span>
                        </router-link>
                    </ul>
                </li>
                <li>
                    <router-link :to="{ name: 'portfolio', hash: '#educations' }"
                        :class="{ ' router-active ': activeHash === '#educations' }"
                        class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <span class="mr-2">#</span>
                        <span>{{ t('educations') }}</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'portfolio', hash: '#license-and-certifications' }"
                        :class="{ ' router-active ': activeHash === '#license-and-certifications' }"
                        class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <span class="mr-2">#</span>
                        <span>{{ t('license_and_certifications') }}</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'portfolio', hash: '#honors-and-awards' }"
                        :class="{ ' router-active ': activeHash === '#honors-and-awards' }"
                        class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <span class="mr-2">#</span>
                        <span>{{ t('honors_and_awards') }}</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'portfolio', hash: '#experiences' }"
                        :class="{ ' router-active ': activeHash === '#experiences' }"
                        class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <span class="mr-2">#</span>
                        <span>{{ t('experiences') }}</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'portfolio', hash: '#projects' }"
                        :class="{ ' router-active ': activeHash === '#projects' }"
                        class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <span class="mr-2">#</span>
                        <span>{{ t('projects') }}</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'portfolio', hash: '#contact-me' }"
                        :class="{ ' router-active ': activeHash === '#contact-me' }"
                        class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <span class="mr-2">#</span>
                        <span>{{ t('contact_me') }}</span>
                    </router-link>
                </li>
                <div class="lg:hidden">
                    <!-- skills -->
                    <li>
                        <router-link :to="{ name: 'portfolio', hash: '#skills' }"
                            :class="{ ' router-active ': activeHash === '#skills' }"
                            class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <span class="mr-2">#</span>
                            <span>{{ t('skills') }}</span>
                        </router-link>
                    </li>
                    <!-- languages -->
                    <li>
                        <router-link :to="{ name: 'portfolio', hash: '#languages' }"
                            :class="{ ' router-active ': activeHash === '#languages' }"
                            class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <span class="mr-2">#</span>
                            <span>{{ t('languages') }}</span>
                        </router-link>
                    </li>
                    <!-- contacts -->
                    <li>
                        <router-link :to="{ name: 'portfolio', hash: '#contacts' }"
                            :class="{ ' router-active ': activeHash === '#contacts' }"
                            class=" cursor-pointer flex items-center justify-start p-1 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <span class="mr-2">#</span>
                            <span>{{ t('contacts') }}</span>
                        </router-link>
                    </li>
                </div>
            </ul>
        </div>
    </aside>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import TopOfLeftAside from './ui-elements/TopOfLeftAside.vue';
import DownloadCvBtn from './ui-elements/DownloadCvBtn.vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const route = useRoute();
const activeHash = ref(route.hash);

watch(() => route.hash, (newHash) => {
    activeHash.value = newHash;
});

onMounted(() => {
    activeHash.value = route.hash;
});
</script>
