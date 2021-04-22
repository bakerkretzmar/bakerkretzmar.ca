<?php

return [
    'production' => false,
    'build' => [
        'source' => 'content',
        'destination' => 'public',
    ],
    'collections' => [
        'pages' => ['path' => '{filename}'],
        'work',
    ],
];
