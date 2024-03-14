/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      boxShadow: {
        customLight: '0px 0px 20px rgba(0, 0, 0, 0.09)',
        customDark: '0px 0px 20px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
