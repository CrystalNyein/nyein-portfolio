/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: 'Inter',
      backgroundImage: {
        full: 'radial-gradient(600px circle at 0px 0px,rgba(29, 78, 216, 0.15),transparent 80%)',
      },
    },
  },
  plugins: [],
};
