<template>

  <Nav />
  <LeftSidebar />
  <RightSidebar />


  <main class="p-4 sm:ml-64 lg:mr-64 bg-white mt-10 dark:bg-gray-800  font-medium text-gray-700  dark:text-gray-400 ">

    <h1 class="text-2xl font-semibold">Home</h1>

    <p class="mt-4 text-sm font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, inventore debitis. Enim dicta molestiae repudiandae ab doloremque officia impedit quia! Officiis iure eligendi quo totam maiores consequuntur ab, libero nisi.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolor explicabo inventore voluptates debitis quas minima magni maiores sequi nisi. Natus quibusdam cum omnis perferendis magni eaque tempore consectetur nesciunt.
    </p>
  </main>

  <Footer/>

</template>

<script setup>

import { ref } from 'vue'
import LeftSidebar from '@/components/LeftSidebar.vue'
import RightSidebar from '@/components/RightSidebar.vue'
import Footer from '@/components/Footer.vue'
import Nav from '@/components/Nav.vue'




</script>