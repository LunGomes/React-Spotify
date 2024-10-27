/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "vermelho": "#611C35",
        "azul": "#2E4052"
      },
    }, 
  },
  plugins: [],
}