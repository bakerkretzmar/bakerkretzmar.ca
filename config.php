<?php

return [
    'production' => false,
    'collections' => [
        'pages' => [
            'path' => '/{filename}',
            'extends' => '_layouts.master',
            'section' => 'body',
        ],
        'work',
    ],
    'body_classes' => function ($page) {
        return 'page-'.strtolower($page->title);
    },
];
