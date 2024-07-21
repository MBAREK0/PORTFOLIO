<template>
    <aside
        class=" hidden lg:block fixed top-0 right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div class="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">


            <!-- skills section -->
            <div>

                <p class="mb-3">
                    <span class="text-md font-semibold text-gray-700 dark:text-gray-400 ">Skills</span>
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
                    <span class="text-md font-semibold text-gray-700 dark:text-gray-400">Languages</span>
                </p>
                <div class="flex flex-wrap gap-2">
                    <div class="flex items-center">
                        <span class="text-xs font-semibold px-2 py-0.5 text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800 rounded-l">English</span>
                        <span class="text-xs font-semibold px-2 py-0.5  text-white bg-gray-500 dark:bg-gray-300 dark:text-blue-800 rounded-r">C1</span>
                    </div>
                    <div class="flex items-center">
                        <span class="text-xs font-semibold px-2 py-0.5 text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800 rounded-l">French</span>
                        <span class="text-xs font-semibold px-2 py-0.5  text-white bg-gray-500 dark:bg-gray-300 dark:text-blue-800 rounded-r">C1</span>
                    </div>
                    <div class="flex items-center">
                        <span class="text-xs font-semibold px-2 py-0.5 text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800 rounded-l">Arabic</span>
                        <span class="text-xs font-semibold px-2 py-0.5  text-white  bg-gray-500 dark:bg-gray-300 dark:text-blue-800 rounded-r">C1</span>
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
                            Discord
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
                            GitHub
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
                            LinkedIn
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
                            Twitter
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <img data-tooltip-target="tooltip-twitter" class="w-8 h-8 rounded cursor-pointer"
                            src="https://abs.twimg.com/icons/apple-touch-icon-192x192.png" alt="twitter">
                    </div>

                    <!-- Contact 5: Facebook -->
                    <div>
                        <div id="tooltip-facebook" role="tooltip"
                            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Facebook
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
                            Instagram
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
                            WhatsApp
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