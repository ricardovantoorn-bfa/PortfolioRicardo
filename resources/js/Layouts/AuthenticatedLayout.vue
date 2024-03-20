<script setup>
import { ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';

const showingNavigationDropdown = ref(false);
</script>

<template>
    <div>
        <div class="flex flex-col min-h-screen bg-gray-100 ">
            <nav class="bg-white border-b border-gray-100 shadow-xl">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="grid grid-cols-3 items-center text">
                            <!-- Logo -->
                            <div class="shrink-0 flex items-center justify-start">
                                <Link :href="route('home')">
                                <ApplicationLogo class="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <!-- Navigation Links -->
                            <div class="hidden space-x-10 sm:-my-px sm:ms-10 sm:flex justify-center">
                                <NavLink class="text-custom" :href="route('home')" :active="route().current('home')">
                                    Home
                                </NavLink>
                                <NavLink class="text-custom" :href="route('about-me')" :active="route().current('about-me')">
                                    About
                                </NavLink>
                                <NavLink class="text-custom" :href="route('projects-me')" :active="route().current('projects-me')">
                                    Projects
                                </NavLink>
                                <NavLink class="text-custom" :href="route('results')" :active="route().current('results')">
                                    Results
                                </NavLink>
                                <NavLink class="text-custom" :href="route('skills')" :active="route().current('skills')">
                                    Skills
                                </NavLink>
                                <NavLink class="text-custom" :href="route('contact')" :active="route().current('contact')">
                                    Contact
                                </NavLink>
                            </div>
                        </div>

                        <div class="hidden sm:flex sm:items-center sm:ms-6">
                            <!-- Settings Dropdown -->
                            <div class="ms-3 relative">
                                <Dropdown align="right" width="48">
                                    <template #trigger>
                                        <span class="inline-flex rounded-md">
                                            <button type="button"
                                                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                                                {{ $page.props.auth.user.name }}

                                                <svg class="ms-2 -me-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                        </span>
                                    </template>

                                    <template #content>
                                        <DropdownLink :href="route('profile.edit')"> Profile </DropdownLink>
                                        <DropdownLink :href="route('logout')" method="post" as="button">
                                            Log Out
                                        </DropdownLink>
                                    </template>
                                </Dropdown>
                            </div>
                        </div>

                        <!-- Hamburger -->
                        <div class="-me-2 flex items-center sm:hidden">
                            <button @click="showingNavigationDropdown = !showingNavigationDropdown"
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path :class="{
                                        hidden: showingNavigationDropdown,
                                        'inline-flex': !showingNavigationDropdown,
                                    }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                    <path :class="{
                                        hidden: !showingNavigationDropdown,
                                        'inline-flex': showingNavigationDropdown,
                                    }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <div :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }" class="sm:hidden">
                    <div class="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink class="text-custom text-lg" :href="route('home')"
                            :active="route().current('home')">
                            Home
                        </ResponsiveNavLink>
                        <ResponsiveNavLink class="text-custom text-lg" :href="route('about-me')"
                            :active="route().current('about-me')">
                            About me
                        </ResponsiveNavLink>
                        <ResponsiveNavLink class="text-custom text-lg" :href="route('projects-me')"
                            :active="route().current('projects-me')">
                            Projects
                        </ResponsiveNavLink>
                        <ResponsiveNavLink class="text-custom text-lg" :href="route('results')"
                            :active="route().current('results')">
                            Results
                        </ResponsiveNavLink>
                        <ResponsiveNavLink class="text-custom text-lg" :href="route('skills')"
                            :active="route().current('skills')">
                            Skills
                        </ResponsiveNavLink>
                        <ResponsiveNavLink class="text-custom text-lg" :href="route('contact')"
                            :active="route().current('contact')">
                            Contact
                        </ResponsiveNavLink>
                    </div>

                    <!-- Responsive Settings Options -->
                    <div class="pt-4 pb-1 border-t border-gray-200">
                        <div class="px-4">
                            <div class="font-medium text-base text-gray-800 ">
                                {{ $page.props.auth.user.name }}
                            </div>
                            <div class="font-medium text-sm text-gray-500">{{ $page.props.auth.user.email }}</div>
                        </div>

                        <div class="mt-3 space-y-1">
                            <ResponsiveNavLink :href="route('profile.edit')"> Profile </ResponsiveNavLink>
                            <ResponsiveNavLink :href="route('logout')" method="post" as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Page Heading -->
            <header class="bg-white shadow" v-if="$slots.header">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <slot />
            </main>

            <footer class="mt-auto py-8 px-4 shadow-top-xl bg-gray-800 text-white">
                <div class="container mx-auto px-8">
                    <div class="flex flex-col md:flex-row justify-between items-center">
                        <div class="w-full md:w-auto mb-4 md:mb-0">
                            <!-- Hoofdlinks -->
                            <div><a href="/" class="text-white hover:text-blue-600">Home</a></div>
                            <div><a href="/about-me" class="text-white hover:text-blue-600">About</a></div>
                            <div><a href="/projects-me" class="text-white hover:text-blue-600">Projects</a></div>
                            <div><a href="/results" class="text-white hover:text-blue-600">Results</a></div>
                            <div><a href="/skills" class="text-white hover:text-blue-600">Skills</a></div>
                            <div><a href="/Contact" class="text-white hover:text-blue-600">Contact</a></div>
                            <div><a href="/Blog" class="text-white hover:text-blue-600">Blog</a></div>
                        </div>
                        <div class="w-full md:w-auto mb-4 md:mb-0 text-center">
                            <!-- LinkedIn -->
                            <a href="https://www.linkedin.com/in/ricardo-van-toorn-8714b2269/" target="_blank"
                                class="text-white hover:text-blue-600">LinkedIn</a>
                        </div>
                        <div class="w-full md:w-auto text-center md:text-right">
                            <!-- Copyright -->
                            <div>&copy; Ricardo van Toorn - All rights reserved 2024.</div>
                            <!-- Telefoonnummer -->
                            <div><a href="tel:0614882003" class="text-white hover:text-blue-600">(+31) 6 14882003</a></div>
                            <!-- E-mail -->
                            <div><a href="mailto:ricardo.vantoorn@bluefieldagency.com"
                                    class="text-white hover:text-blue-600">ricardo.vantoorn@bluefieldagency.com</a></div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>
