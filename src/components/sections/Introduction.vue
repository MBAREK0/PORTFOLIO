<template>
    <section id="introduction" class="mb-5">
         <router-link :to="{ name: 'portfolio', hash: '#introduction' }">
            <div class="flex justify-start items-center mb-3 text-3xl dark:hover:text-white">
              <span>#</span>
              <h1 class="ml-2">Introduction </h1>
            </div>
          </router-link>
          <p class="text-sm ">Welcome to my portfolio! I am a full stack developer with experience in building scalable web
            applications. Below
            you'll find my projects, skills, and more information about me.</p>
    </section>
</template>