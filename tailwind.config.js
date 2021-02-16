module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      blue: {
        light: "#E9F2F8",
        DEFAULT: "#1098F7",
        dark: "#2B4162",
      },
      white: { DEFAULT: "#ffffff" },
      black: { DEFAULT: "#000000" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
