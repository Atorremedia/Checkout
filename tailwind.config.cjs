/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      'sans': 'Rubik',
    },
    fontSize: {
      base: '16px',
      sm: '14px',
      xs: '11px',
    },
    fontWeight: {
      base: '300',
      bold: '500',
      extrabold: '800'
    }
  },
  plugins: [],
}
