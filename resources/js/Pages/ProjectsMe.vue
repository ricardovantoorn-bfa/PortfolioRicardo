<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>
<template>
    <AuthenticatedLayout>
        <div class="container mx-auto overflow-hidden">
            <h1 data-aos="fade-up" data-aos-duration="750" class="text-2xl font-bold text-center pt-20 pb-5">
                Mijn Projecten
            </h1>
            <div class="project-cards-row">
                <div data-aos="fade-right" data-aos-duration="750" class="rounded-2xl w-full md:w-1/2 p-4 bg-gray-0">
                    <h2 class="text-2xl font-bold mb-4">
                        <span class="text-blue-500">Project 1</span>
                        - Portfoliowebsite | Webapplicatie
                    </h2>
                    <p>
                        Dit project is een belangrijk onderdeel van mijn portfolio omdat het laat zien hoeveel ik heb
                        geleerd en
                        gegroeid ben in mijn ontwikkelingsvaardigheden.
                        Het was een uitdagende ervaring waarbij ik heb gewerkt met PHP Laravel, JavaScript Vue.js,
                        Alpine.js,
                        CSS Tailwind CSS en Docker.
                        Hoewel ik nog steeds lerende ben, ben ik trots op de vooruitgang die ik heb geboekt en de solide
                        webapplicatie die ik heb kunnen bouwen.
                        Het project heeft mijn vaardigheden zeker verbeterd en me aangemoedigd om blijvend te groeien in
                        mijn
                        vakgebied.
                    </p>
                </div>
                <div data-aos="fade-left" data-aos-duration="750" class="project-images">
                    <img class="rounded-2xl" src="../../images/Project1.png" alt="Project1Afbeelding">
                </div>
            </div>

            <div class="project-cards-row-reverse">
                <div data-aos="fade-left" data-aos-duration="750" class="w-full md:w-1/2 p-4">
                    <h2 class="text-2xl font-bold mb-4">
                        <span class="text-blue-500">Project 2</span>
                        - UI/UX Design | Feature Toggle App
                    </h2>
                    <p>
                        Tijdens mijn periode bij Swisscom als DevOps Engineer/UI-UX Designer, werkte ik samen met ons team
                        Featuristic aan het ontwerpen van een nieuwe interface voor de Feature Toggle-app.
                        Deze app, die zowel in de lichte als donkere modus moest werken, vereiste een grondige herziening
                        van
                        het ontwerp om de gebruikerservaring te verbeteren.
                        We werkten nauw samen met ontwikkelaars en belanghebbenden om een intuïtieve en aantrekkelijke
                        interface
                        te creëren die voldeed aan zowel de functionele als esthetische eisen.
                        Met toewijding en samenwerking hebben we het ontwerp van concept tot implementatie gebracht. Het
                        resultaat was een succesvolle realisatie van het ontwerp,
                        wat resulteerde in een verbeterde gebruikerservaring en positieve reacties van gebruikers. Dit
                        project
                        benadrukte niet alleen mijn vaardigheden als ontwikkelaar en ontwerper,
                        maar ook mijn vermogen om effectief te werken in teamverband en complexe uitdagingen aan te gaan.
                    </p>
                </div>
                <div data-aos="fade-right" data-aos-duration="750" class="project-images">
                    <img class="rounded-2xl" src="../../images/Project2.png" alt="Project2Afbeelding">
                </div>
            </div>

            <div class="project-cards-row">
                <div data-aos="fade-right" data-aos-duration="750" class="rounded-2xl w-full md:w-1/2 p-4 bg-gray-0">
                    <h2 class="text-2xl font-bold mb-4">
                        <span class="text-blue-500">Project 3</span>
                        - C# Forms Applicatie | PollenProject Ricardo
                    </h2>
                    <p>
                        Tijdens een schoolproject heb ik zelfstandig een C# Windows Forms applicatie ontwikkeld voor
                        klantregistratie en -beheer. Het project omvatte een interface waarin klanten konden inloggen,
                        zich konden aanmelden en hun gegevens konden beheren, terwijl de admin volledige CRUD-rechten had.
                        Een
                        opvallend kenmerk was de integratie van 'pollen' met gegevens uit een externe API voor real-time
                        peilingen.
                        Door deze applicatie te bouwen, heb ik niet alleen mijn programmeervaardigheden versterkt, maar ook
                        geleerd om complexe systemen te plannen, ontwerpen en implementeren, evenals het belang van
                        gegevensintegratie
                        en gebruikersinteractie begrepen binnen een ontwikkelingsomgeving. Dit project heeft mijn
                        zelfstandigheid en mijn vermogen om problemen op te lossen verder ontwikkeld, wat me waardevolle
                        ervaring heeft opgeleverd
                        voor mijn toekomstige carrière in de softwareontwikkeling.
                    </p>
                </div>
                <div data-aos="fade-left" data-aos-duration="750" class="project-images">
                    <img class="rounded-2xl" src="../../images/Project3.png" alt="Project3Afbeelding">
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
            pageTitle: 'My Projects',
        };
    },
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