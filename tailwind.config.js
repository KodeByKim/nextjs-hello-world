/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pictonBlue: "#1FA1D8",
        dukeBlue: "#0D00A4",
        turquoise: "#15E6CD",
        night: "#0A0A0A",
        antiflashWhite: "#F0EDEE",
        aureolin: "#EDE630",
        errorRed: "#D2250F",
        persianBlue: "#0439C2",
      },
    },
  },
  plugins: [],
};
