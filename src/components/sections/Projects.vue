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


                <div class="relative ">
                    <img :src="featuredImage" class="h-auto max-w-full rounded-lg" alt="Featured Image">
                    <div class="absolute top-2 right-2">
                        <button class="  github-button mb-2 w-full">
                            <p class="text">GitHub</p>
                        </button>

                        <button class="demo-button mb-2">
                            <p class="text">View Project</p>
                        </button>

                    </div>
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