<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">

        <title>Jacob Baker-Kretzmar | {{ $page->title }}</title>

        <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
    </head>
    <body class="{{ $page->body_classes() }} font-sans font-bold leading-tight uppercase text-bluegrey bg-pinkish p-2 md:p-4 fade-in-quick">

        <h1>Jacob Baker-Kretzmar is a developer in Toronto, Canada.</h1>

        @include('_partials.menu')

        <section class="body container max-w-md pt-16 pb-8">
            @yield('body')
        </section>

        <script type="text/javascript" src="{{ mix('js/main.js', 'assets/build') }}"></script>

        @if ($page->production)
            @include ('_partials.analytics')
        @endif

    </body>
</html>
