<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="canonical" href="{{ $page->getUrl() }}">
        <title>Jacob Baker-Kretzmar | {{ $page->title }}</title>
        {{-- <meta name="description" content="{{ $page->description }}"> --}}
        <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
    </head>
    <body class="{{ strtolower($page->title) }}-page p-2 md:p-4 text-lg md:text-2xl font-sans font-bold leading-tight uppercase text-bluegrey bg-pink animate-fade">
        <h1 class="text-5xl md:text-6xl text-justify leading-none break-all">Jacob Baker-Kretzmar is a developer in Toronto, Canada.</h1>

        <x-menu :page="$page" :pages="$pages" />

        <section class="markdown w-full max-w-xl mx-auto pt-16 pb-8">
            @yield('content')
        </section>

        <script defer src="https://cdn.usefathom.com/script.js" site="MMBBGNOE" included-domains="bakerkretzmar.ca"></script>
    </body>
</html>
