/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        customBounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-in-out',
          },
          '50%': {
            transform: 'translateY(-25%)',
          },
        },
      },
      animation: {
        'custom-bounce': 'customBounce 1s ease-in-out',
      },
      colors: {
        primary: "#11375b",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      }
    },
  },
  plugins: [],
}
