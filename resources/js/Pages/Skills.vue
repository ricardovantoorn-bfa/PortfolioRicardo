<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import PercentageBar from '../Components/PercentageBar.vue';

const skills = [
  { skillname: 'HTML', percentage: 90 },
  { skillname: 'CSS/Tailwindcss', percentage: 80 },
  { skillname: 'JavaScript/VueJS', percentage: 65 },
  { skillname: 'C#', percentage: 90 },
  { skillname: 'MSSQL/MySQL', percentage: 75 },
  { skillname: 'Docker', percentage: 25 },
  { skillname: 'PHP/Laravel', percentage: 60 },
  { skillname: 'Python', percentage: 50 },
  { skillname: 'Figma', percentage: 80 },
  { skillname: 'Photoshop', percentage: 65 },
  { skillname: 'Devops', percentage: 85 },
  { skillname: 'Office365', percentage: 80 },
];

</script>
<template>
  <AuthenticatedLayout>
    <div class="container mx-auto overflow-hidden">
      <div class="flex flex-col items-center mx-auto mb-12">
        <h1 data-aos="fade-up" data-aos-duration="750" class="text-2xl font-bold text-center pt-20 pb-5">Mijn Skills</h1>
        <div data-aos="zoom-in-up" data-aos-duration="750"
          class="flex flex-wrap m-5 bg-gray-200 drop-shadow-2xl rounded-xl">
          <div class="w-full sm:w-1/2 px-3 p-3" v-for="(item) in skills">
            <PercentageBar :skillname="item.skillname" :percentage="item.percentage"></PercentageBar>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped>
h1,
h2,
h3,
a,
p {
    font-family: 'Raleway', sans-serif;
}
</style>

<script>
export default {
  mounted() {
    document.title = this.pageTitle + ' | Ricardo van Toorn';
  },
  data() {
    return {
      pageTitle: 'My Skills',
    };
  },
}
</script>
