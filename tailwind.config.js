/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        border: 'border 4s ease infinite',
      },
      keyframes: {
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(226, 99, 16, 0.35)",
          "0 0px 65px rgba(226, 99, 16, 0.2)"
        ]
      }
    },
  },
  plugins: [  ],
}