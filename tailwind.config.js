/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "bg-hover-gray": "#C89F94",
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
