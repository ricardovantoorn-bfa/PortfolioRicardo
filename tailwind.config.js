const defaultTheme = require('tailwindcss/defaultTheme');
const forms = require('@tailwindcss/forms');
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        container: {
          center: true,
          padding: '2rem',
        },
        extend: {
            fontSize: {
                'custom': '1.375rem',
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
        forms,
        plugin(function({ addComponents }) {
            addComponents({
                // projecs row
                '.project-cards-row': {
                    "@apply flex flex-col md:flex-row justify-between items-center my-8 mx-auto": {},
                },
                // projecs row reverse
                '.project-cards-row-reverse': {
                    "@apply flex flex-col md:flex-row-reverse justify-between items-center my-8 mx-auto": {},
                },
                // projects image class
                '.project-images': {
                    "@apply w-full md:w-1/2 p-4 drop-shadow-2xl": {},
                },
                
                // results cards
                '.results-cards': {
                    "@apply flex flex-col md:flex-row justify-between items-start my-8 mx-auto px-4": {},
                },
                // results grades cards
                '.results-grades-cards': {
                    "@apply rounded-2xl w-full md:w-1/2 p-4 bg-gray-200 drop-shadow-lg": {},
                },
                // results text 
                '.results-text': {
                    "@apply text-2xl font-bold mb-4": {},
                },
                // results text blue
                '.results-text-blue': {
                    "@apply text-blue-500": {},
                },
                // contact form
                '.contact-data': {
                    "@apply mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6": {}, 
                },

                // contact form
                '.contact-data-phone-email-cv-linkedin': {
                    "@apply mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6": {}, 
                },
                // extra page cards
                '.extra-page-cards': {
                    "@apply flex flex-col md:flex-row justify-center my-8 mx-auto px-4": {},
                },

                // blog paragraphs
                '.blog-paragraphs-text': {
                    "@apply font-normal text-gray-700": {},
                },

                // blog contact styling
                '.blog-contact-btn': {
                    "@apply mt-3 inline-flex items-center m-5 px-5 py-3 text-sm font-medium text-center text-white text-lg bg-blue-600 rounded-lg drop-shadow-xl hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300": {},
                },
            })
        })
    ],

    darkMode: false,
    Media: false,
};