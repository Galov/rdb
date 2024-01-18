/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    extend: {
      colors: {
        "manun-red": "rgba(199, 1, 1)",
        "manun-darkred": "#9f0000",
        "manun-black": "rgba(26,26,26)",
      },
    },
  },
  plugins: [],
};
