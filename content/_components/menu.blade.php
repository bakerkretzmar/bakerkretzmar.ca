<h1 class="relative text-5xl md:text-6xl text-justify leading-none break-all bottom-[0.05em]">
    @unless ($page->title == 'Home')
        <a href="/"><span>Home</span></a>
    @endunless

    @foreach ($pages as $sitePage)
        @continue($page->title === $sitePage->title)

        <a href="{{ $sitePage->getPath() }}">
            <span>{{ $sitePage->title }}</span>
        </a>
    @endforeach
</h1>
