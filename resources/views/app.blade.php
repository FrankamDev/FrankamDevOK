{{-- <!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

   
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

       
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html> --}}









<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content="Découvrez FrankamDev : votre plateforme de d'apprentissage et astuces informatique, formations web et maintenance. Tout est en français, simple et rapide.">
<meta name="keywords" content="FrankamDev, informatique, développement web, formations web, maintenance, caméras de surveillance, e-learning, React, Laravel">
<meta name="author" content="Frank Kamgang">
<meta name="robots" content="index, follow">
<meta property="og:title" content="{{ config('app.name', 'FrankamDev') }}">
<meta property="og:description" content="FrankamDev : d'apprentissage informatiques, formations web et maintenance pour tous.">
<meta property="og:image" content="{{ asset('images/social-preview.png') }}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{ config('app.name', 'FrankamDev') }}">
<meta name="twitter:description" content="FrankamDev : d'apprentissage informatiques, formations web et maintenance.">
<meta name="twitter:image" content="{{ asset('images/social-preview.png') }}">
<meta name="twitter:site" content="@TonPseudoLinkedIn">

<meta property="og:url" content="{{ url()->current() }}">
<meta property="og:type" content="website">
    <title inertia>{{ config('app.name', 'FrankamDev') }}</title>
    {{-- <link rel="icon" href="{{ asset('') }}"> --}}
    <script>
        (function() {
            const appearance = '{{ $appearance ?? 'system' }}';

            if (appearance === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                }
            }
        })();
    </script>


    <style>
        html {
            background-color: oklch(1 0 0);
        }

        html.dark {
            background-color: oklch(0.145 0 0);
        }
    </style>

    <title inertia>{{ config('app.name', 'FrankamDev') }}</title>

    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
