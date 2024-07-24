<template>
    <aside
        class="hidden lg:block fixed top-0 right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div class="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
            <!-- dark mode and login section -->
            <div class="flex justify-between items-center mb-3">
                <div>
                    <button @click="toggleDarkMode"
                        class="p-1 text-gray-700 rounded dark:text-gray-400 focus:outline-none">
                        <i v-if="isDarkMode" class="fas fa-sun"></i>
                        <i v-else class="fas fa-moon"></i>
                    </button>
                </div>
                <div>
                    <button id="dropdownButton" data-dropdown-toggle="dropdownMenuLang"
                        class="flex items-center justify-between p-2 w-full text-sm font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:outline-none dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600  "
                        type="button">
                        <div class="flex">

                            <img :src="getFlagImage" alt="Language Flag" class="w-5 h-5 mr-2 rounded-full" />
                            <span>{{ t(currentLang) }}</span>
                        </div>
                        <svg class="w-5 h-5 ml-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    
                    <!-- Dropdown menu items -->
                    <div id="dropdownMenuLang"
                        class="hidden z-10 absolute mt-2 w-44 bg-white divide-y divide-gray-200 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownButton">
                            <li>
                                <a href="#" @click.prevent="changeLanguage('en')"
                                    class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition-colors duration-150">
                                    <img :src="require('@/assets/images/en.png')" class="w-5 h-5 mr-2 rounded-full" alt="English" />
                                    {{ t('english') }}
                                </a>
                            </li>
                            <li>
                                <a href="#" @click.prevent="changeLanguage('fr')"
                                    class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition-colors duration-150">
                                    <img :src="require('@/assets/images/fr.png')" class="w-5 h-5 mr-2 rounded-full" alt="French" />
                                    {{ t('french') }}
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <!-- skills section -->
            <div>
                <p class="mb-3">
                    <span class="text-md font-semibold text-gray-700 dark:text-gray-400 ">{{ t('skills') }}</span>
                </p>
                <div class="flex flex-wrap gap-2 ">
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Vue</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Tailwind</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Firebase</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">JavaScript</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">TypeScript</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">React</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Node.js</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Express</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">GraphQL</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">SQL</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">NoSQL</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Docker</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Kubernetes</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">AWS</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Azure</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">GCP</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">HTML</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">CSS</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Sass</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">PHP</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">MySQL</span>
                </div>
            </div>

            <!-- languages -->
            <div class="mt-6">
                <p class="mb-3">
                    <span class="text-md font-semibold text-gray-700 dark:text-gray-400">{{ t('languages') }}</span>
                </p>
                <div class="flex flex-wrap gap-2">
                    <div class="flex items-center">
                        <span
                            class="text-xs font-semibold px-2 py-0.5 text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800 rounded-l">{{
                                t('english') }}</span>
                        <span
                            class="text-xs font-semibold px-2 py-0.5 text-white bg-gray-500 dark:bg-gray-300 dark:text-blue-800 rounded-r">C1</span>
                    </div>
                    <div class="flex items-center">
                        <span
                            class="text-xs font-semibold px-2 py-0.5 text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800 rounded-l">{{
                                t('french') }}</span>
                        <span
                            class="text-xs font-semibold px-2 py-0.5 text-white bg-gray-500 dark:bg-gray-300 dark:text-blue-800 rounded-r">C1</span>
                    </div>
                    <div class="flex items-center">
                        <span
                            class="text-xs font-semibold px-2 py-0.5 text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800 rounded-l">{{
                                t('arabic') }}</span>
                        <span
                            class="text-xs font-semibold px-2 py-0.5 text-white bg-gray-500 dark:bg-gray-300 dark:text-blue-800 rounded-r">C1</span>
                    </div>
                </div>
            </div>

            <!-- contact section -->
            <div class="mt-6 absolute bottom-1 w-full">
                <div class="flex flex-wrap gap-2 my-4 justify-start">
                    <!-- Contact 1: Discord -->
                    <div>
                        <div id="tooltip-discord" role="tooltip"
                            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            {{ t('discord') }}
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <img data-tooltip-target="tooltip-discord" class="w-8 h-8 rounded cursor-pointer"
                            src="https://yt3.googleusercontent.com/Ws_BpAWD46mOjCW3XCnsZ0YmghW-6fhMf6d9pvCvb4g8JJftgvL54039U1mgh31OchR4ApMTezc=s900-c-k-c0x00ffffff-no-rj"
                            alt="discord">
                    </div>

                    <!-- Contact 2: GitHub -->
                    <div>
                        <div id="tooltip-github" role="tooltip"
                            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            {{ t('github') }}
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <img data-tooltip-target="tooltip-github" class="w-8 h-8 rounded cursor-pointer"
                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="github">
                    </div>

                    <!-- Contact 3: LinkedIn -->
                    <div>
                        <div id="tooltip-linkedin" role="tooltip"
                            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            {{ t('linkedin') }}
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <img data-tooltip-target="tooltip-linkedin" class="w-8 h-8 rounded cursor-pointer"
                            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                            alt="linkedin">
                    </div>

                    <!-- Contact 4: Twitter -->
                    <div>
                        <div id="tooltip-twitter" role="tooltip"
                            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            {{ t('twitter') }}
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <img data-tooltip-target="tooltip-twitter" class="w-8 h-8 rounded cursor-pointer"
                            src="https://abs.twimg.com/icons/apple-touch-icon-192x192.png" alt="twitter">
                    </div>

                    <!-- Contact 5: Facebook -->
                    <div>
                        <div id="tooltip-facebook" role="tooltip"
                            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            {{ t('facebook') }}
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <img data-tooltip-target="tooltip-facebook" class="w-8 h-8 rounded cursor-pointer"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                            alt="facebook">
                    </div>

                    <!-- Contact 6: Instagram -->
                    <div>
                        <div id="tooltip-instagram" role="tooltip"
                            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            {{ t('instagram') }}
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <img data-tooltip-target="tooltip-instagram" class="w-8 h-8 rounded cursor-pointer"
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                            alt="instagram">
                    </div>

                    <!-- Contact 8: WhatsApp -->
                    <div>
                        <div id="tooltip-whatsapp" role="tooltip"
                            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            {{ t('whatsapp') }}
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <img data-tooltip-target="tooltip-whatsapp" class="w-8 h-8 rounded cursor-pointer"
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="whatsapp">
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useMainStore } from '@/stores/mainStore';

const { t, locale } = useI18n();
const isDarkMode = ref(false);
const currentLang = ref(locale.value);
const mainStore = useMainStore();


const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle('dark', isDarkMode.value);
    localStorage.setItem('darkMode', isDarkMode.value.toString());
};

const changeLanguage = (lang) => {
    locale.value = lang;
    currentLang.value = lang;
    mainStore.changeLang(lang);
    localStorage.setItem('language', lang);
};


const getFlagImage = computed(() => {
    switch (currentLang.value) {
        case 'en':
            return require('@/assets/images/en.png');
        case 'fr':
            return require('@/assets/images/fr.png');
        default:
            return '';
    }
});


onMounted(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
        isDarkMode.value = savedDarkMode === 'true';
        document.documentElement.classList.toggle('dark', isDarkMode.value);
    }
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        locale.value = savedLanguage;
        currentLang.value = savedLanguage;
    }
});
</script>
