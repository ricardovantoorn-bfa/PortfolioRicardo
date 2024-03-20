<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>
<template>
    <AuthenticatedLayout>
        <div class="container mx-auto overflow-hidden">
            <div class="flex flex-col md:flex-row justify-between mx-auto my-8">
                <div data-aos="fade-up" data-aos-duration="500"
                    class="w-full md:w-1/2 flex flex-col justify-center items-start p-8">
                    <h2 class="text-4xl font-bold mb-8">Meer over mij</h2>
                    <h3 class="text-2xl mb-4">
                        Mijn naam is <span class="text-blue-500">Ricardo van Toorn</span>, ik ben 19 jaar oud en woon in
                        Meteren.
                        Ik studeer momeneteel nog aan het Koning Willem 1 College in Den Bosch, maar niet voor lang meer
                        want ik
                        heb mijn examens behaald.
                    </h3>
                    <h3 class="text-2xl mb-4">
                        Na mijn stage is het tijd voor een nieuwe uitdaging, de Bachelor Bedrijskunde halen. Ik werk nu als
                        <span class="text-blue-500">Front-end Developer</span> bij Blue Field Agency in Amsterdam.
                    </h3>
                    <a href="/Contact" class="inline-block px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded shadow-xl">Contact</a>
                    <div class="flex space-x-4 mt-4">
                        <a href="https://www.linkedin.com/in/ricardo-van-toorn-8714b2269/" target="_blank">
                            <i class="fab fa-linkedin text-5xl text-blue-600"></i>
                        </a>
                        <a href="https://www.instagram.com/ricardo_vt_/" target="_blank">
                            <i class="fab fa-instagram text-5xl instagram-icon"></i>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100012840257030" target="_blank">
                            <i class="fab fa-facebook text-5xl text-blue-600"></i>
                        </a>
                        <a href="https://www.bluefieldagency.com/" target="_blank">
                            <i class="fas fa-briefcase text-5xl text-gray-800"></i>
                        </a>
                    </div>
                </div>


                <div data-aos="zoom-in-up" data-aos-duration="500"
                    class="w-full md:w-1/2 mx-auto flex flex-col justify-center items-center md:min-h-screen">
                    <img src="../../images/ricardoAboutImage.jpg"
                        class="rounded-2xl w-full max-w-xs object-cover drop-shadow-2xl" alt="Description of image">
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
            pageTitle: 'About Me',
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

.instagram-icon {
    background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>