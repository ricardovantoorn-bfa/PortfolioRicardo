<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
  <AuthenticatedLayout>
    <div class="overflow-hidden bg-gradient-to-r from-blue-600 to-gray-400" style="min-height: 100vh;">	
    <div class="container mx-auto ">
      <h1 data-aos="fade-up" data-aos-duration="750" class="text-2xl font-bold text-center text-white pt-20 pb-5">
        [ Creativity ] - [ Design ] - [ Technology ]      
      </h1>
      <div data-aos="fade-up" data-aos-duration="750" class="flex justify-center items-center">
        <div class="max-w-4xl bg-white text-xl border border-gray-200 rounded-xl drop-shadow-2xl mb-8">
          <div class="flex flex-col space-y-7 p-5">
            <div class="flex flex-col md:flex-row items-center space-x-5 space-y-5 md:space-x-0 md:space-y-0" style="grid-gap: 25px;">
              <a href="https://www.linkedin.com/in/ricardo-van-toorn-8714b2269/" target="_blank" >
                <img class="mt-5 w-64 h-64 md:w-auto drop-shadow-xl md:h-auto rounded-3xl" src="../../images/ricardopf.png" alt="" />              
              </a>
              <div style="margin-left: 0; margin-top: 20px;">
                <p class="blog-paragraphs-text">
                  Hallo allemaal! Mijn naam is Ricardo van Toorn en ik ben hier om mijn opwindende reis door de wereld van
                  creativiteit, design en technologie met jullie te delen.
                  Ga er lekker voor zitten terwijl ik jullie meeneem op een avontuur vol inspiratie en ontdekkingen.
                </p>
              </div>
            </div>
            <p class="blog-paragraphs-text">
              Mijn reis begon met mijn eerste baantjes bij Albert Heijn, waar ik als versmedewerker brood begon.
              Het was een uitdagende maar leerzame ervaring die me hielp om de waarde van hard werken en teamspirit te
              begrijpen. Daarnaast heb ik ook geholpen in de fruitteelt, waar ik heb bijgedragen aan de pluk.
              Deze ervaringen hebben me gevormd en me geleerd om door te zetten, zelfs als het werk zwaar was.
            </p>
            <p class="blog-paragraphs-text">
              Terwijl ik mijn weg vond in de wereld van werk, ontwikkelde ik een fascinatie voor technologie en design.
              Mijn eerste stappen in de IT-wereld bij Swisscom als IT-ondersteuner openden mijn ogen voor de mogelijkheden
              en uitdagingen van deze dynamische sector.
              Hier kreeg ik ook de kans om te werken als DevOps Engineer, waar ik mijn vaardigheden kon aanscherpen in het
              bouwen en onderhouden van robuuste systemen.
            </p>
            <p class="blog-paragraphs-text">
              Mijn passie voor design en creativiteit bracht me vervolgens naar verschillende stages, waar ik mijn
              talenten kon verkennen en ontwikkelen.
              Bij Ceratec Technical Ceramics, voordat ik bij Swisscom kwam, kreeg ik de kans om te werken als Technical
              Ceramics Developer.
              Hier heb ik mijn creativiteit kunnen uiten en nieuwe ideeën kunnen verkennen met behulp van geavanceerde
              materialen en technologieën.
            </p>
            <p class="blog-paragraphs-text">
              Mijn avonturen bij Swisscom brachten me in contact met de rol van UI/UX Designer, waar ik mijn passie voor
              design kon combineren met mijn liefde voor het creëren van intuïtieve gebruikerservaringen.
              Het was een uitdagende maar uiterst bevredigende ervaring die me hielp om mijn creatieve vaardigheden naar
              nieuwe hoogten te tillen.
            </p>
            <p class="blog-paragraphs-text">
              Na mijn tijd bij Swisscom, vond ik mezelf bij Padgin, waar ik mijn plek vond als Front-end Developer en SEO
              Specialist-backlinker.
              Hier kon ik niet alleen werken aan het bouwen van prachtige en gebruiksvriendelijke websites, maar ook mijn
              kennis over zoekmachineoptimalisatie verdiepen.
            </p>
            <p class="blog-paragraphs-text">
              En natuurlijk heb ik altijd tijd gevonden voor mijn passies buiten het werk. In de sportschool en op het
              voetbalveld vind ik mijn balans en energie.
              Tijdens de wintermaanden zoek ik mijn avontuur op de pistes van Oostenrijk, waar ik mijn liefde voor skiën
              en snowboarden kan uitleven.
              En reizen blijft een constante bron van inspiratie en ontdekking voor mij, waar ik ook ga.
            </p>
            <p class="blog-paragraphs-text">
              Mijn educatieve reis heeft me ook door verschillende stadia geleid, van het afronden van mijn Economie en
              Ondernemen VMBO-opleiding tot het behalen
              van mijn diploma als Software Developer op het MBO. En nu, na mijn stage bij Blue Field Agency, ben
              ik klaar om mijn volgende avontuur aan te
              gaan: een Bachelor in Bedrijfskunde.
            </p>
            <p class="blog-paragraphs-text">
              Dus daar heb je het, een glimp van mijn reis tot nu toe. Ik kan niet wachten om te zien wat de toekomst in
              petto heeft en welke nieuwe uitdagingen en
              kansen er op mijn pad komen! 
            </p>
          </div>
          <a href="/Contact" class="blog-contact-btn">
              Stuur mij een bericht
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
        </div>
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
      pageTitle: 'Extra',
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

/*  */
</style> 
