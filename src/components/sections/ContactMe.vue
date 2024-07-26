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
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{
                    $t('your_name') }}</label>
                <input v-model="name" type="text" id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    :placeholder="$t('name')" required />
            </div>
            <div class="mb-4">
                <label for="email-address-icon" class="block text-sm mb-2 font-medium text-gray-900 dark:text-white">{{
                    $t('your_email') }}</label>
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
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{
                    $t('your_message') }}</label>
                <textarea id="message" rows="4"
                    class=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    :placeholder="$t('leave_comment')" v-model="message"></textarea>
            </div>
            <div class="flex justify-end">
                <button type="submit"
                    class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    {{ $t('send') }}
                </button>
            </div>
          
        </form>
    </section>

    <div v-if="showModal"
        class="fixed inset-0 z-50 flex items-center justify-center  h-full bg-gray-900 bg-opacity-50 overflow-auto"
        @click.self="showModal = false">
        <div class="bg-white dark:bg-gray-800 rounded-lg w-full max-w-xl xl:max-w-2xl max-h-[30vh] overflow-y-auto modal-content"
            @click.stop>

            <div
            :class="{
                'flex items-center p-4 mb-4 text-sm rounded-lg dark:bg-gray-800': true,
                'text-red-800 bg-red-50 dark:text-red-400': status === 'error',
                'text-green-800 bg-green-50 dark:text-green-400': status === 'success'
              }"
             role="alert">
                <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span class="sr-only">Info</span>
                <div>
                   {{ statusMessage }}
           
                </div>
              </div> 
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';
import { useMainStore } from '@/stores/mainStore';

const mainStore = useMainStore();


const SERVICE_ID = mainStore.service_id;
const TEMPLATE_ID = mainStore.template_id;
const USER_ID = mainStore.user_id;

const name = ref('');
const email = ref('');
const message = ref('');
const status = ref('');
const statusMessage = ref('');


const sendEmail = async () => {

    if (!/\S+@\S+\.\S+/.test(email.value)) {
        status.value = 'error';
        return openModal('Invalid email address.');
    }

    try {

        const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            from_name: name.value,
            from_email: email.value,
            message: message.value,
            to_email: mainStore.email,
            to_name: mainStore.userName,
            reply_to: email.value,
            my_name: mainStore.userName,
            my_email: mainStore.email,
        }, USER_ID);

        if (response.status === 200) {
            status.value = 'success';
            openModal('Message sent successfully!');
        } else {
            throw new Error('Failed to send message.');
        }
    } catch (error) {
        status.value = 'error';
      openModal('Failed to send message.');
    }
};



const showModal = ref(false);
const selectedImage = ref({});
const openModal = (message) => {
    statusMessage.value = message;
    showModal.value = true;
}


</script>

