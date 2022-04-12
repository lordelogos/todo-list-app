module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'main': '0px 18px 24px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'checkbox': "url('/src/assets/checkmark.svg')",
      },
      colors:{
        'display-green': '#86DA83',
        'display-purple': '#8F83DA',
        'display-blue': '#6085D8',
        'display-orange': '#CC634F',
        'display-text': '#5b5b5b'
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
