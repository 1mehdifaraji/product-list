/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.6s",
        fadeInQuick: "fadeIn 0.4s",
      },
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
      fontFamily: {
        vazir: ["vazir", "-apple-system"],
        yekanbakh: ["yekanbakh", "-apple-system"],
      },
      colors: {
        cancelBtnGray: "#5C5C5C",
        addProductGray: "#ABABAB",
        labelGray: "#A0A0A0",
        lighterGray: "#C9C9C9",
        lightGray: "#E6E6E6",
        gray: "#9A9A9A",
        darkGray: "#B6B6B6",
        bgGray: "#FBFBFB",
        blue: "#00ACED",
        green: "#46B666",
        darkGreen: "#318148",
        red: "#FF6666",
      },
      backgroundImage: {
        loginHero: "url('/login-hero.webp')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
