/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(7, 7, 7, 0.485)',
        'almost-black':'#04040459'
      },
    },
  },
  plugins: [],
};
