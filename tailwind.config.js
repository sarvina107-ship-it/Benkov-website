module.exports = {
  darkMode: 'class', // ЭТО ОЧЕНЬ ВАЖНО! Должно быть 'class', а не 'media'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxuryDark: '#1B2A44',
        luxuryGold: '#D4A259',
      }
    },
  },
  plugins: [],
}