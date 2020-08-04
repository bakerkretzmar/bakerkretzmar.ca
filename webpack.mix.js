const mix = require('laravel-mix');
const tailwind = require('tailwindcss');
require('laravel-mix-purgecss');
require('laravel-mix-jigsaw');

mix.disableNotifications()

mix.setPublicPath('source/assets/build')

mix.jigsaw({ watch: ['source/**/*.md', 'source/**/*.php', 'source/**/*.scss', '!source/**/_tmp/*'] });

mix.js('source/_assets/js/main.js', 'js')
    .sass('source/_assets/sass/main.scss', 'css')
    .options({
        processCssUrls: false,
        postCss: [tailwind('tailwind.js')],
    });

if (mix.inProduction()) {
    mix.purgeCss({
        folders: ['source'],
        extensions: ['html', 'js', 'php', 'scss'],
        whitelistPatterns: [/h2/, /h3/, /p/, /a/, /span/],
    })
    .version();
}
