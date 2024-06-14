/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#DC5F00",
        page: "#EEEEEE",
        card: "#373A40",
        "card-hover": "#686D76",
        "default-text": "#EEEEEE",
        "orange-accent": "#DC5F00",
        "orange-accent-hover": "#DC5F00",
      },
    },
  },
  plugins: [],
};
