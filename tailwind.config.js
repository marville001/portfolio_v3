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
    },
  },
  daisyui: {
    styled: true,
    themes: false,
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
