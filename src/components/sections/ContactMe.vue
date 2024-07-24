<template>
    <section id="contact-me" class="mb-5 section">
        <router-link :to="{ name: 'portfolio', hash: '#contact-me' }">
            <div class="flex justify-start items-center mb-3 text-3xl dark:hover:text-white">
                <span>#</span>
                <h1 class="ml-2">{{ $t('contact_me') }}</h1>
            </div>
        </router-link>
        <p class="text-sm">
            {{ $t('contact_message') }}
        </p>
        <form class="mt-5" @submit.prevent="sendEmail">
            <div class="mb-4">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ $t('your_name') }}</label>
                <input v-model="name" type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="$t('name')"  required />
            </div>
            <div class="mb-4">
                <label for="email-address-icon" class="block text-sm mb-2 font-medium text-gray-900 dark:text-white">{{ $t('your_email') }}</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path
                                d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path
                                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                    </div>
                    <input type="text" id="email-address-icon" v-model="email"
                        class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@example.com">
                </div>
            </div>
            <div class="mb-4">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ $t('your_message') }}</label>
                <textarea id="message" rows="4"
                    class=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    :placeholder="$t('leave_comment')"></textarea>
            </div>
            <div class="flex justify-end">
                <button type="submit"
                    class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    {{ $t('send') }}
                </button>
            </div>
            <p v-if="status" :class="{ 'text-green-500': status === 'success', 'text-red-500': status === 'error' }"
                class="mt-4">{{ statusMessage }}</p>
        </form>
    </section>
</template>

<script setup>
import { ref } from 'vue';
//   import emailjs from 'emailjs-com';

const name = ref('');
const email = ref('');
const message = ref('');
const status = ref('');
const statusMessage = ref('');

const sendEmail = async (e) => {
    e.preventDefault();

 
}
</script>
