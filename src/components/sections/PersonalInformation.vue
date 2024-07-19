<template>
    <section id="personal-information" class="mb-5">
        <router-link :to="{ name: 'portfolio', hash: '#personal-information' }">
            <div class="flex justify-start items-center mb-3 text-3xl dark:hover:text-white">
                <span>#</span>
                <h1 class="ml-2">Personal Information </h1>
            </div>
        </router-link>
        <p class="text-sm ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, blanditiis. Incidunt
            quibusdam ex eaque temporibus natus magnam blanditiis minima consequuntur, odio rem quidem mollitia itaque
            nulla rerum. Ullam, ab ea!
        </p>
    </section>

    <section id="about" class="mb-5">
        <router-link :to="{ name: 'portfolio', hash: '#about' }">
            <div class="flex justify-start items-center mb-3 text-xl dark:hover:text-white ">
                <span>#</span>
                <h1 class="ml-2">About Me </h1>
            </div>
        </router-link>
        <p class="text-sm ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, blanditiis. Incidunt
            quibusdam ex eaque temporibus natus magnam blanditiis minima consequuntur, odio rem quidem mollitia itaque
            nulla rerum. Ullam, ab ea!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aspernatur dolorem voluptatem laboriosam
            atque maxime ipsum. Deserunt, consequuntur animi voluptas velit, facilis aperiam soluta enim, facere error
            harum doloremque placeat?</p>
    </section>

    <section id="current-role" class="mb-5">
        <router-link :to="{ name: 'portfolio', hash: '#current-role' }">
            <div class="flex justify-start items-center mb-3 text-xl dark:hover:text-white">
                <span>#</span>
                <h1 class="ml-2">Current Role </h1>
            </div>
        </router-link>
        <p class="text-sm ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, blanditiis. Incidunt
            quibusdam ex eaque temporibus natus magnam blanditiis minima consequuntur, odio rem quidem mollitia itaque
            nulla rerum. Ullam, ab ea!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aspernatur dolorem voluptatem laboriosam
            atque maxime ipsum. Deserunt, consequuntur animi voluptas velit, facilis aperiam soluta enim, facere error
            harum doloremque placeat?</p>
    </section>

</template>