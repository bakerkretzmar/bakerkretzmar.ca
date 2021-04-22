const mix = require('laravel-mix');
require('laravel-mix-jigsaw');

mix.disableNotifications().setPublicPath('content/assets/build');

mix.browserSync({ open: false, server: 'public', files: ['public/**'] })
    .css('resources/css/main.css', 'css', [require('tailwindcss')])
    .jigsaw();
