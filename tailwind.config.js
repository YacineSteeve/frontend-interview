/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            keyframes: {
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
                'bounce-tl': 'bounceTopLeft 1s ease-in-out infinite',
                'bounce-tr': 'bounceTopRight 1s ease-in-out infinite',
                'bounce-bl': 'bounceBottomLeft 1s ease-in-out infinite',
                'bounce-br': 'bounceBottomRight 1s ease-in-out infinite',
            },
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant('child', '& > *');
            addVariant('child-hover', '& > *:hover');
        },
    ],
};
