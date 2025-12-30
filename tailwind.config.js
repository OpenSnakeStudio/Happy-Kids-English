/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./App.tsx",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./services/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#FFC107', // Amber
                'secondary': '#4ECDC4', // Teal
                'accent': '#FF6B6B', // Red-ish
                'kids-blue': '#45B7D1',
                'kids-green': '#96E6A1',
            },
            fontFamily: {
                sans: ['"Comic Sans MS"', '"Chalkboard SE"', 'sans-serif'],
            },
            animation: {
                'bounce-slow': 'bounce 3s infinite',
                'wiggle': 'wiggle 0.5s ease-in-out',
                'shake': 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
                'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                shake: {
                    '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
                    '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
                    '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
                    '40%, 60%': { transform: 'translate3d(4px, 0, 0)' }
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
