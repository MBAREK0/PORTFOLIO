<template>
    <aside id="sidebar-multi-level-sidebar"
        class="fixed top-0 left-0 z-40 w-68 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">

        <div class="h-full px-3 py-4 ps-8 overflow-y-auto bg-white dark:bg-gray-800 ">

            <TopOfLeftAside />
 
            <DownloadCvBtn />
            
            <ul>
              
                <Introduction />
                
                <PersonalInformation />
               
                <Educations />

                <licensesAndCertifications />

              
                <HonorsAndAwards />
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
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

//  ui-elements
import TopOfLeftAside from './ui-elements/TopOfLeftAside.vue';
import DownloadCvBtn from './ui-elements/DownloadCvBtn.vue';

// routes
import PersonalInformation from './routes/PersonalInformation.vue';
import Introduction from './routes/Introduction.vue';
import Educations from './routes/Educations.vue';
import licensesAndCertifications from './routes/LicenseAndCertifications.vue';
import HonorsAndAwards from './routes/HonorsAndAwards.vue';

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
