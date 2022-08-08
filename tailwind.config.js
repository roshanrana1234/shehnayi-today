/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '5xl': '20px 20px 50px rgba(0, 0, 0, 10)',
      },
      fontFamily: {
        'poppins': ['poppins']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),

  ],
}