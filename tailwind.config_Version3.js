export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#007BFF",
          accent: "#FFBF00",
          dark: "#1A1A1A",
          light: "#F8F9FA",
          border: "#E0E0E0",
        },
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}