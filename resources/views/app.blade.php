<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ $pageTitle ?? 'Ricardo van Toorn' }}</title> 
        <!-- Fonts -->
        <link rel="icon" href="favicon.ico" type="image/x-icon">
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead

        <style>
            @font-face 
            {
                font-family: 'Raleway';
                src: url('../fonts/static/Raleway-Light.ttf') format('ttf');
                font-weight: normal;
                font-style: normal;
            }
        </style>
    </head>
    <body class="font-sans antialiased" style="font-family: 'Raleway', sans-serif;">
    @inertia

    <script 
        src="https://unpkg.com/aos@next/dist/aos.js"></script>  <script>    AOS.init();  
    </script>
</body>
</html>



