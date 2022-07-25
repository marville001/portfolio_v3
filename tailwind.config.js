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
        dark: '#1f1f47',
        'dim-dark': '#171647',
        grayish: '#edf1fd',
        'pale-orange': '#ffefdf',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
