/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "raisin-black": "#231F20",
        "persian-red": "#BB4430",
        verdigris: "#7EBDC2",
        vanilla: "#F3DFA2",
        linen: "#EFE6DD",
      },
      animation: {
        "fade-out": "fadeOut 1s ease-out forwards",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
