/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F766E", // calm medical teal
        primarySoft: "#ECFDF5", // reassurance background
        textPrimary: "#0F172A", // near-black
        textMuted: "#475569", // muted text
        borderSoft: "#E2E8F0",
        backgroundSoft: "#F8FAFC",
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.04)",
        card: "0 4px 12px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
