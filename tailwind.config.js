/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#10b981',
        dark: '#0f172a',
        darker: '#020617',
        navy: '#1e293b'
      }
    }
  },
  plugins: []
}
