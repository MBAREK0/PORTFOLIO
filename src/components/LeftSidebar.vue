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
                    <router-link :to="{ name: 'home', hash: '#the_id' }"
                        class=" cursor-pointer flex items-center justify-start p-2 text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <span class="mr-2">#</span>
                        <span> Personnel information </span>
                        <span
                            class="hidden text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">New</span>
                    </router-link>
                    <ul class="ml-4">

                        <router-link :to="{ name: 'home', hash: '#the_id' }"
                            class=" cursor-pointer flex items-center justify-start p-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <span class="mr-2">•</span>
                            <span> About me</span>
                            <span
                                class="hidden text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">New</span>
                        </router-link>
                        <router-link :to="{ name: 'home', hash: '#the_id' }"
                            class=" cursor-pointer flex items-center justify-start p-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <span class="mr-2">•</span>
                            <span> Position</span>
                            <span
                                class="hidden text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">New</span>
                        </router-link>

                    </ul>
                </li>
            </ul>
        </div>
    </aside>
</template>