const defaults = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: ['./content/**/*.{html,md,php}'],
    theme: {
        colors: {
            'dark-purple': '#280833',
            pink: '#e86564',
            bluegrey: '#2d5698',
        },
        extend: {
            fontFamily: {
                sans: ['"URW DIN"', ...defaults.fontFamily.sans],
            },
            fill: {
                none: 'none',
            },
            keyframes: {
                fade: {
                    from: { opacity: 0 },
                    to: { opacity: 100 },
                },
                slide: {
                    from: { transform: 'translateX(0px)' },
                    to: { transform: 'translateX(-50px)' },
                },
            },
            animation: {
                fade: 'fade 100ms 50ms both',
                slide: 'slide 1000ms linear infinite',
            },
        },
    },
};
