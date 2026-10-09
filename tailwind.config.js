// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // <-- pastikan dark mode aktif
  theme: {
    extend: {
      colors: {
        background: "#f9f5f0",
        foreground: "#1e1e1e",
        accent: "#ffcb47",
        muted: "#fefae0",
      },
    },
  },
  plugins: [],
};
