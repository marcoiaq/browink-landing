/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', "Georgia", "serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
