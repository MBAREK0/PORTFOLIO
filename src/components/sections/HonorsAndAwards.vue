<template>
    <section id="honors-and-awards" class="mb-5 section">
        <router-link :to="{ name: 'portfolio', hash: '#honors-and-awards' }">
            <div class="flex justify-start items-center mb-3 text-3xl dark:hover:text-white">
                <span>#</span>
                <h1 class="ml-2">{{ t('honors_and_awards') }} </h1>
            </div>
        </router-link>
        <p class="text-sm ">I have received several awards and honors for my work in the tech industry. Here are some of the
            awards I have received.</p>
        <div class="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
          
            <div class="card p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">Outstanding Achievement Award</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">Recognized for exceptional performance and contributions</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">2020</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mjV4cvCH3ONk-8kk_hil1UaR1z7RJsQvqA&s" alt="Outstanding Achievement Award" class="mt-4 w-full h-56 ">
            </div>

            <div class="card p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">Outstanding Achievement Award</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">Recognized for exceptional performance and contributions</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">2020</p>
                <img src="https://t3.ftcdn.net/jpg/07/15/81/04/240_F_715810421_12dovjVQMS64ixPPID6WxLdpYAaq1nDa.jpg" alt="Outstanding Achievement Award" class="mt-4 w-full h-56 " >
            </div>
        </div>
    </section>

</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>