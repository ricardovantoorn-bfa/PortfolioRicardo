<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>
<template>
    <AuthenticatedLayout>
        <div class="container mx-auto overflow-hidden">
            <h1 data-aos="fade-up" data-aos-duration="750" class="text-2xl font-bold text-center pt-20 pb-5">Mijn Resultaten
            </h1>
            <!-- Plannen en Ontwerpen Resultaten -->
            <div class="results-cards">
                <h2 data-aos="fade-right" data-aos-duration="1000" class="results-text"><span
                        class="results-text-blue">Plannen en Ontwerpen</span> - Results</h2>

                <div data-aos="fade-left" data-aos-duration="1000" class="results-grades-cards">
                    <h2 class="results-text">Leerjaar 1 t/m 4 - Gemiddelde Cijfers</h2>
                    <p class="text-xl">
                        Thema 1 t/m 4 - Plannen en Ontwerpen: 6.5
                    </p>
                    <p class="text-xl">
                        Thema 7 t/m 8 - Plannen en Ontwerpen: 7.6
                    </p>
                    <p class="text-xl">
                        Thema 9 t/m 10 - Plannen en Ontwerpen: 8.5
                    </p>
                    <p class="text-xl">
                        <span class="results-text-blue">Gemiddelde </span> - {{ averageGradePO }}
                    </p>
                    <button class="bg-gray-300 hover:bg-gray-400 p-2 rounded-lg"
                        @click="BerekenGemiddelde('gradesPO', 'averageGradePO')">Bereken Gemiddelde</button>
                </div>
            </div>
            <!-- Realiseren Resultaten -->
            <div class="results-cards">
                <h2 data-aos="fade-right" data-aos-duration="1000" class="results-text"><span
                        class="results-text-blue">Realiseren</span> - Results</h2>

                <div data-aos="fade-left" data-aos-duration="1000" class="results-grades-cards">
                    <h2 class="results-text">Leerjaar 1 t/m 4 - Gemiddelde Cijfers</h2>
                    <p class="text-xl">
                        Thema 1 t/m 4 - Realiseren: 6.6
                    </p>
                    <p class="text-xl">
                        Thema 7 t/m 8 - Realiseren: 6.0
                    </p>
                    <p class="text-xl">
                        Thema 9 t/m 10 - Realiseren: 7,7
                    </p>
                    <p class="text-xl">
                        <span class="results-text-blue">Gemiddelde </span> - {{ averageGradeREA }}
                    </p>
                    <button class="bg-gray-300 hover:bg-gray-400 p-2 rounded-lg"
                        @click="BerekenGemiddelde('gradesREA', 'averageGradeREA')">Bereken Gemiddelde</button>
                </div>
            </div>

            <!-- Testen en Verbeteren Resultaten -->
            <div class="results-cards">
                <h2 data-aos="fade-right" data-aos-duration="1000" class="results-text"><span
                        class="results-text-blue">Testen en Verbeteren</span> - Results</h2>

                <div data-aos="fade-left" data-aos-duration="1000" class="results-grades-cards">
                    <h2 class="results-text">Leerjaar 1 t/m 4 - Gemiddelde Cijfers</h2>
                    <p class="text-xl">
                        Thema 1 t/m 4 - Testen en Verbeteren: 8.4
                    </p>
                    <p class="text-xl">
                        Thema 7 t/m 8 - Testen en Verbeteren: 6.8
                    </p>
                    <p class="text-xl">
                        Thema 9 t/m 10 - Testen en Verbeteren: 8.4
                    </p>
                    <p class="text-xl">
                        <span class="results-text-blue">Gemiddelde </span> - {{ averageGradeTV }}
                    </p>
                    <button class="bg-gray-300 hover:bg-gray-400 p-2 rounded-lg"
                        @click="BerekenGemiddelde('gradesTV', 'averageGradeTV')">Bereken Gemiddelde</button>
                </div>
            </div>

            <!-- Computervaardigheden Resultaten -->
            <div class="results-cards">
                <h2 data-aos="fade-right" data-aos-duration="1000" class="results-text"><span
                        class="results-text-blue">Computervaardigheden</span> - Results</h2>

                <div data-aos="fade-left" data-aos-duration="1000" class="results-grades-cards">
                    <h2 class="results-text">Leerjaar 1 t/m 4 - Gemiddelde Cijfers</h2>
                    <p class="text-xl">
                        Thema 1 t/m 4 - Computervaardigheden: 7.3
                    </p>
                    <p class="text-xl">
                        Thema 7 t/m 8 - Computervaardigheden: 7.5
                    </p>
                    <p class="text-xl">
                        <span class="results-text-blue">Gemiddelde </span> - {{ averageGradeCOM }}
                    </p>
                    <button class="bg-gray-300 hover:bg-gray-400 p-2 rounded-lg"
                        @click="BerekenGemiddelde('gradesCOM', 'averageGradeCOM')">Bereken Gemiddelde</button>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<!-- methof om gemiddelde te berekenen per vak -->
<script>
export default {
    mounted() {
        document.title = this.pageTitle + ' | Ricardo van Toorn';
    },
    data() {
        return {
            pageTitle: 'My Results',
            gradesREA: [6.6, 6.0, 7.7],
            gradesPO: [6.5, 7.6, 8.5],
            gradesCOM: [7.3, 7.5],
            gradesTV: [8.4, 6.8, 8.4],
            averageGradeREA: '...',
            averageGradePO: '...',
            averageGradeCOM: '...',
            averageGradeTV: '...'
        }
    },
    methods: {
        BerekenGemiddelde(gradesProperty, averageGradeProperty) {
            let grades = this[gradesProperty];
            let sum = grades.reduce((a, b) => a + b, 0);
            this[averageGradeProperty] = (sum / grades.length).toFixed(1);
        }
    }
}
</script>

<style scoped>p,
h1,
h2,
h3,
a,
p {
    font-family: 'Raleway', sans-serif;
}</style>
