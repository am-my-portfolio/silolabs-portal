const { createThemes } = require("tw-colors"); 
const esmRequire = require("esm")(module);
const twColors = require("tailwindcss/colors");
const twForms = require("@tailwindcss/forms")({
  strategy: "class",
});
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        bruno: ["Bruno Ace"], // https://fonts.google.com/specimen/Bruno+Ace
        oxanium: ["Oxanium"], // doesnt work
        genos: ["Genos"],
        cousine: ["Cousine"], 
        orbitron: ["Orbitron"], // https://fonts.google.com/specimen/Orbitron?classification=Display&stroke=Sans+Serif
        montserrat: ["Montserrat"], // https://fonts.google.com/specimen/Montserrat
      },
    },
  },
  plugins: [
    // vfSlider,
    twForms,
    // https://palettes.shecodes.io/
    createThemes(
      {
        light: {
          primary: twColors.orange["50"], // '#e6ddda'
          secondary: twColors.zinc["500"],
          "pop-primary": twColors.rose["500"],
          "pop-secondary": twColors.lime["900"], // "#233319"
        },
        dark: {
          primary: twColors.gray["900"],
          secondary: twColors.gray["200"],
          "pop-primary": twColors.teal["600"],
          "pop-secondary": twColors.gray["400"],
        },
      },
      { defaultTheme: "light" },
    ),
  ],
  variants: {
    width: ["responsive", "hover", "focus", "active"],
    border: ["hover"],
    extend: {
      textColor: ["active"],
    },
  },
};
