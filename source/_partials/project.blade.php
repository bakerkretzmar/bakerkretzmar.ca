{!! $project !!}

@if ($project->repo)
[Code]({{ $project->repo }})
@endif

@include('_partials.squiggle')
