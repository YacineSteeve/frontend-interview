/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                lightblack: '#2c3e50',
                lightgrey: '#f6f7f8',
                lightblue: '#0288d1',
                darkblue: '#01579b',
                skyblue: '#0195ff',
                snow: '#fbfbfd',
                info: '#0dcaf0',
            },
            keyframes: {
                translateToRight: {
                    '0%': { transform: 'translateX(-20%)', opacity: 0 },
                    '100%': { transform: 'translateX(0)', opacity: 1 },
                },
                translateToLeft: {
                    '0%': { transform: 'translateX(20%)', opacity: 0 },
                    '100%': { transform: 'translateX(0)', opacity: 1 },
                },
                bounceTopLeft: {
                    '0%, 100%': { transform: 'translate(0%, 0%)' },
                    '50%': { transform: 'translate(75%, 75%)' },
                },
                bounceTopRight: {
                    '0%, 100%': { transform: 'translate(0%, 0%)' },
                    '50%': { transform: 'translate(-75%, 75%)' },
                },
                bounceBottomLeft: {
                    '0%, 100%': { transform: 'translate(0%, 0%)' },
                    '50%': { transform: 'translate(75%, -75%)' },
                },
                bounceBottomRight: {
                    '0%, 100%': { transform: 'translate(0%, 0%)' },
                    '50%': { transform: 'translate(-75%, -75%)' },
                },
            },
            animation: {
                'translate-to-right': 'translateToRight 1.5s ease-out',
                'translate-to-left': 'translateToLeft 1.5s ease-out',
                'bounce-tl': 'bounceTopLeft 1s ease-in-out infinite',
                'bounce-tr': 'bounceTopRight 1s ease-in-out infinite',
                'bounce-bl': 'bounceBottomLeft 1s ease-in-out infinite',
                'bounce-br': 'bounceBottomRight 1s ease-in-out infinite',
                'pulse': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            screens: {
                laptop: '992px',
            }
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant('child', '& > *');
            addVariant('child-hover', '& > *:hover');
        },
    ],
};
