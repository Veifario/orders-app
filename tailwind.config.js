/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "708px",
          md: "800px",
          lg: "1016px",
          xl: "1160px",
          "2xl": "1160px",
        },
      },
      colors: {
        primary: "#F2BF1A",
        secondary: "#F2BF1A14",
        desert: "#D5C388",
        background: "#F9F7F1",
        gray: "#8E8E8E",
        lightGray: "#CACACA",
        black: "#1F1F1F",
        white: "#FFFFFF",
        error: "#F11212",
        success: "#18AE4A",
      },
    },
  },
  plugins: [],
};
