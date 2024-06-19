/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the content files where Tailwind should look for classes
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Look for classes in pages directory
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Look for classes in components directory
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Look for classes in app directory
  ],
  // Extend Tailwind's default theme with customizations
  theme: {
    extend: {
      // Extend background image options with radial and conic gradients
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Extend color palette with custom named colors
      colors: {
        nav: "#0C1844", // Custom color for navigation
        page: "#FFF5E1", // Custom color for page background
        card: "#C80036", // Custom color for cards
        "card-hover": "#FF6969", // Custom color for card hover state
        "default-text": "#FFF5E1", // Custom color for default text
        "purple-accent": "#0C1844", // Custom purple accent color
        "purple-accent-hover": "#0C1844", // Custom hover state for purple accent color
      },
    },
  },
  // Disable any plugins (not used in this configuration)
  plugins: [],
};
