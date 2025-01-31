export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Jika menggunakan App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Jika menggunakan Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      button: "rgba(255, 255, 255, 0.44)",
      dark: "rgba(255, 255, 255, 0.67)",
      white: "#FFF",
      primaryWhite: "rgba(255, 255, 255, 0.87)",
    },
  },
  plugins: [],
};
