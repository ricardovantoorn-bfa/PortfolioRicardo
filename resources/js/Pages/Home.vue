<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <AuthenticatedLayout>
      <div class="container mx-auto overflow-hidden">
        <div data-aos="fade-right" data-aos-duration="1200" class="flex flex-col md:flex-row justify-between mx-auto my-8">
            <div class="w-full md:w-1/2 flex flex-col justify-center items-start p-8">
                <h2 class="text-5xl font-bold mb-8">Ricardo van Toorn</h2>
                <h3 class="text-2xl mb-4">Front-end Developer</h3>
                <h3 class="text-2xl mb-4">Search Engine Optimazation | Data and Analytics | UI/UX Design</h3>
                <a href="/about-me" class="inline-block px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded shadow-xl">Over Mij</a>
            </div>
            <div data-aos="fade-right" data-aos-duration="1200" class="w-full md:w-1/2 mx-auto flex flex-col justify-center items-center md:min-h-screen">
                  <img src="../../images/ricardopf.png" class="rounded-full w-full max-w-xs object-cover drop-shadow-2xl"
                  alt="Description of image">
            </div>
        </div>
      </div>
    </AuthenticatedLayout>
</template>

<script>
export default {
  mounted() {
    document.title = this.pageTitle + ' | Ricardo van Toorn';
  },
  data() {
    return {
      pageTitle: 'Home',
    };
  },
}
</script>

<style scoped>
h1,
h2,
h3,
a,
p {
    font-family: 'Raleway', sans-serif;
}
</style>
