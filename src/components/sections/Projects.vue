<template>

    <section id="projects" class="mb-5 section">
        <router-link :to="{ name: 'portfolio', hash: '#projects' }">
            <div class="flex justify-start items-center mb-3 text-3xl dark:hover:text-white">
                <span>#</span>
                <h1 class="ml-2">Projects</h1>
            </div>
        </router-link>
        <p class="text-sm">Here are some of the projects I've worked on. Click on the images to view more details.</p>

        <div class="grid grid-cols-1 gap-5 mt-5">
            <div class="grid gap-1">
                <router-link :to="{ name: 'portfolio', hash: '#current-role' }">
                    <div class="flex justify-start items-center  text-xl dark:hover:text-white">
                        <span>•</span>
                        <h1 class="ml-2">Project 1 </h1>
                    </div>
                </router-link>

                <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aspernatur dolorem
                    voluptatem laboriosam </p>
                <!-- skills -->
                <div class="flex flex-wrap gap-2 my-2">
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Vue</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Tailwind</span>
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800">Firebase</span>
                </div>
                <div class="flex items-center justify-start gap-4 mb-2">

                    <a href="" target="_blank" class="cursor-pointer duration-200 flex items-center justify-start gap-1"
                        title="Attach">
                        <svg class="stroke-blue-300 fill-none" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 -0.5 25 25">
                            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5"
                                d="M15.17 11.053L11.18 15.315C10.8416 15.6932 10.3599 15.9119 9.85236 15.9178C9.34487 15.9237 8.85821 15.7162 8.51104 15.346C7.74412 14.5454 7.757 13.2788 8.54004 12.494L13.899 6.763C14.4902 6.10491 15.3315 5.72677 16.2161 5.72163C17.1006 5.71649 17.9463 6.08482 18.545 6.736C19.8222 8.14736 19.8131 10.2995 18.524 11.7L12.842 17.771C12.0334 18.5827 10.9265 19.0261 9.78113 18.9971C8.63575 18.9682 7.55268 18.4695 6.78604 17.618C5.0337 15.6414 5.07705 12.6549 6.88604 10.73L12.253 5">
                            </path>
                        </svg>
                        <span class="text-blue-500 hover:text-blue-600 font-semibold">GitHub Repo</span>
                    </a>
                    <a href="" target="_blank" class="cursor-pointer duration-200 flex items-center justify-start gap-1"
                        title="Attach">
                        <svg class="stroke-blue-300 fill-none" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 -0.5 25 25">
                            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5"
                                d="M15.17 11.053L11.18 15.315C10.8416 15.6932 10.3599 15.9119 9.85236 15.9178C9.34487 15.9237 8.85821 15.7162 8.51104 15.346C7.74412 14.5454 7.757 13.2788 8.54004 12.494L13.899 6.763C14.4902 6.10491 15.3315 5.72677 16.2161 5.72163C17.1006 5.71649 17.9463 6.08482 18.545 6.736C19.8222 8.14736 19.8131 10.2995 18.524 11.7L12.842 17.771C12.0334 18.5827 10.9265 19.0261 9.78113 18.9971C8.63575 18.9682 7.55268 18.4695 6.78604 17.618C5.0337 15.6414 5.07705 12.6549 6.88604 10.73L12.253 5">
                            </path>
                        </svg>
                        <span class="text-blue-500 hover:text-blue-600 font-semibold">View Project</span>
                    </a>
                </div>
                <div>
                    <img :src="featuredImage" class="h-auto max-w-full rounded-lg" alt="Featured Image">
                </div>
                <div class="grid grid-cols-5 gap-4">
                    <div v-for="(image, index) in images" :key="index">
                        <img :src="image" class="h-auto max-w-full rounded-lg cursor-pointer"
                            @click="switchImage(image)" alt="Thumbnail">
                    </div>
                </div>
            </div>
        </div>



    </section>


</template>

<script setup>
import { ref } from 'vue';

const featuredImage = ref('https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg');
const images = ref([
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
]);

const switchImage = (image) => {
    featuredImage.value = image;
}


</script>

<style scoped>
.github-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    gap: 15px;
    background-color: #181717;
    outline: 3px #181717 solid;
    outline-offset: -3px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: 400ms;
}

.demo-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    gap: 15px;
    background-color: #C27803;
    outline: 3px #C27803 solid;
    outline-offset: -3px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: 400ms;
}

.github-button .text {
    color: white;
    font-weight: 700;
    font-size: 1em;
    transition: 400ms;
}

.demo-button .text {
    color: white;
    font-weight: 700;
    font-size: 1em;
    transition: 400ms;
}

.github-button svg path {
    transition: 400ms;
}

.demo-button svg path {
    transition: 400ms;
}

.github-button:hover {
    background-color: transparent;
}

.demo-button:hover {
    background-color: transparent;
}

.github-button:hover .text {
    color: #181717;
}

.demo-button:hover .text {
    color: #C27803;
}

.github-button:hover svg path {
    fill: #181717;
}

.demo-button:hover svg path {
    fill: #C27803;
}
</style>