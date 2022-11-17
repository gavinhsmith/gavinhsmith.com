/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#1ABC9C',
      'dark': '#1E293B',
      'light': '#F8FAFC',
      'grey': '#94a3b8'
    }
  },
  plugins: [],
}
