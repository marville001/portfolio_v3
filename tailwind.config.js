module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3386B1',
        secondary: '#64ffda',
        dark: '#0a1930',
        'dim-dark': '#122541',
        grayish: '#edf1fd',
        'pale-orange': '#ffefdf',
        accent: '#f46663',
      },
      animation: {
        blob:"blob 7s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        }
      }
    },
  },
  daisyui: {
    styled: true,
    themes: false,
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
