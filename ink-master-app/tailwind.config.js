/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                // map “font-marker” → Permanent Marker; override “sans” for Open Sans
                marker: ['"Permanent Marker"', 'cursive'],
                sans: ['"Open Sans"', 'sans-serif'],
            },
        },
    },
    plugins: [],
};