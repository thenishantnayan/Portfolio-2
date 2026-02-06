/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#c9a26c',
        dark: '#2b2d31',
        darker: '#1e2124',
        navy: '#1a2332'
      }
    }
  },
  plugins: []
}
