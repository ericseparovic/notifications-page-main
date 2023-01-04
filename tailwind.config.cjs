/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      jakartaSans: ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {
      colors: {
        Red: "hsl(1, 90%, 64%)",
        Blue: "hsl(219, 85%, 26%)",
        VeryLightGrayishBlue1: "hsl(211, 68%, 94%)",
        VeryLightGrayishBlue2: "hsl(205, 33%, 94%)",
        GrayishBlue: "hsl(219, 14%, 63%)",
        DarkGrayishBlue: "hsl(219, 12%, 42%)",
        VeryDarkBlue: "hsl(224, 21%, 14%)",
      },
    },
  },
  plugins: [],
};
