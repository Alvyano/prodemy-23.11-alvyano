/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                brightColor: "#AB6B2E",
                backgroundColor: "#fcf1e3",
            },
        },
    },
    plugins: [],
};