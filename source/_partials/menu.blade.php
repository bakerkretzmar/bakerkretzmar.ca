<h1 class="relative b-1">

    @unless ($page->title == 'Home')

        <a href="/">
            <span>Home</span>
        </a>

    @endunless

    @foreach ($pages as $sitePage)

        @continue($page->title == $sitePage->title)

        <a href="{{ $sitePage->getPath() }}">
            <span>{{ $sitePage->title }}</span>
        </a>

    @endforeach

</h1>
