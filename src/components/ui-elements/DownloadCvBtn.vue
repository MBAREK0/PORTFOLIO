<template>
    <div class="w-[200px] absolute bottom-3">
        <a :href="mainStore.ApiUrl + '/document/download/cv'" target="_blank"
            class="flex w-full justify-center items-center bg-blue-500 text-white text-sm font-semibold py-2 px-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 12l8 8 8-8M12 3v9" />
            </svg>
            {{ t('download_cv') }}
        </a>
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { useMainStore } from '@/stores/mainStore';

const mainStore = useMainStore()
const { t } = useI18n()

</script>