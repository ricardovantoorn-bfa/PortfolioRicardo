<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>
<template>
    <AuthenticatedLayout>
        <div class="container mx-auto overflow-hidden">
            <h1 data-aos="fade-up" data-aos-duration="750" class="text-2xl font-bold text-center pt-20 pb-5">Contact</h1>
            <div data-aos="fade-up" data-aos-duration="750" class="container my-5 mx-auto md:px-8 drop-shadow-2xl">
                <section class="mb-20 p-4 bg-gray-200 rounded-xl">
                    <div class="flex flex-wrap">
                        <div class="contact-data">
                            <form>
                                <div class="relative mb-6">
                                    <p class="text-lg font-semibold">Jouw Naam*</p>
                                    <input type="text" v-model="fullName" @input="nameError = ''"
                                        class="block w-full py-2 px-3 rounded font-normal" id="exampleInput90"
                                        placeholder="first- and lastname" />
                                    <p v-if="nameError" class="text-red-500 font-bold">{{ nameError }}</p>
                                </div>
                                <div class="relative mb-6 font-semibold">
                                    <p class="text-lg">Jouw Emailadres*</p>
                                    <input type="email" v-model="email" @input="emailError = ''"
                                        class="block w-full py-2 px-3 rounded font-normal invalid:border-red-500 invalid:text-red-600
                                            focus:invalid:border-red-500 focus:invalid:ring-red-500" id="exampleInput91"
                                        placeholder="example@mail.com" />
                                    <p v-if="emailError" class="text-red-500">{{ emailError }}</p>
                                </div>
                                <div class="relative mb-6">
                                    <p class="text-lg font-semibold">Extra bericht*</p>
                                    <textarea class="block w-full py-2 px-3 rounded font-normal"
                                        id="exampleFormControlTextarea1" v-model="extraMessage"
                                        @input="extraMessageError = ''" rows="3" placeholder="your message"></textarea>
                                    <p v-if="extraMessageError" class="text-red-500 font-bold">{{ extraMessageError }}</p>
                                </div>
                                <button type="button" @click="checkForm"
                                    class="mb-6 w-full py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 text-white">
                                    Versturen
                                </button>
                                <p v-if="submitted">Het contactformulier is verzonden!</p>
                            </form>
                        </div>
                        <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12 flex flex-wrap justify-center items-center">
                            <div class="flex flex-wrap">
                                <div class="contact-data-phone-email-cv-linkedin">
                                    <div class="flex items-start">
                                        <div class="shrink-0">
                                            <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                <a href="mailto:ricardo.vantoorn@bluefieldagency.com">
                                                    <i class="fas fa-envelope text-3xl text-blue-600"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="ml-2 grow">
                                            <p class="mb-2 font-bold">
                                                Emailadres
                                            </p>

                                            <a href="mailto:ricardo.vantoorn@bluefieldagency.com"
                                                class="break-all text-black hover:text-blue-600">
                                                ricardo.vantoorn@bluefieldagency.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="contact-data-phone-email-cv-linkedin">
                                    <div class="flex items-start">
                                        <div class="shrink-0">
                                            <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                <i class="fas fa-phone text-3xl text-blue-600"></i>
                                            </div>
                                        </div>
                                        <div class="ml-2 grow">
                                            <p class="mb-2 font-bold">
                                                Telefoonnummer
                                            </p>
                                            <div><a href="tel:0614882003" class="text-black hover:text-blue-600">(+31) 6
                                                    14882003</a></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="contact-data-phone-email-cv-linkedin">
                                    <div class="flex items-start">
                                        <div class="shrink-0">
                                            <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                <a href="https://www.linkedin.com/in/ricardo-van-toorn-8714b2269/"
                                                    target="_blank">
                                                    <i class="fab fa-linkedin text-4xl text-blue-600"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="ml-2 grow">
                                            <p class="mb-2 font-bold">
                                                LinkedIn
                                            </p>
                                            <p class="text-neutral-500">
                                                <a href="https://www.linkedin.com/in/ricardo-van-toorn-8714b2269/"
                                                    target="_blank" class="text-black hover:text-blue-600">
                                                    Ricardo van Toorn - Profiel
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="contact-data-phone-email-cv-linkedin">
                                    <div class="flex items-start">
                                        <div class="shrink-0">
                                            <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                <a href="https://www.linkedin.com/in/ricardo-van-toorn-8714b2269/"
                                                    target="_blank">
                                                    <i class="fas fa-file text-4xl text-blue-600"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="ml-2 grow">
                                            <p class="mb-2 font-bold">
                                                Curriculum vitae
                                            </p>
                                            <p class="mb-2">
                                                <a class="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
                                                    href="/ricardo-van-toorn-cv.pdf" target="_blank">Downloaden</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
            pageTitle: 'Contact Me',
            fullName: '',
            email: '',
            extraMessage: '',
            nameError: '',
            emailError: '',
            extraMessageError: '',
            submitted: false,
        };
    },
    methods: {
        checkForm() {
            if (!this.fullName) {
                this.nameError = 'Volledige naam is een verplicht veld!';
            } else {
                this.nameError = '';
            }

            if (!this.email) {
                this.emailError = 'Emailadres is een verplicht veld!';
            } else if (!this.email.includes('@')) {
                this.emailError = 'Emailadres moet een "@" bevatten!';
            } else {
                this.emailError = '';
            }

            if (!this.extraMessage) {
                this.extraMessageError = 'Extra bericht is een verplicht veld!';
            } else {
                this.extraMessageError = '';
            }

            if (!this.nameError && !this.emailError && !this.extraMessageError) {
                this.submitted = true;  // Zet de 'submitted' vlag op true
                this.resetForm();  // Reset de formuliervelden

                // Zet de 'submitted' vlag na 5 seconden terug op false
                setTimeout(() => { this.submitted = false; }, 5000);
            }
        },
        resetForm() {
            this.fullName = '';
            this.email = '';
            this.extraMessage = '';
        }
    }
};


</script>

<style scoped>
@media screen and (max-width: 600px) {
    .container {
        padding: 0 1rem;
    }
}

h1,
h2,
h3,
a,
p {
    font-family: 'Raleway', sans-serif;
}

</style>