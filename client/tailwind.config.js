module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js,jsx,ts,tsx}",
    "src/**/*.{js,jsx,ts,tsx}",
    "public/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./common/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#ffffff",
      blue: "#0089E2",
      orange: "#F86C4B",
      purple: "#3C384D",
      grey: "#8C909D",
      "purple-pure": "#07021D",
      "bg-white": "#f7f7f9",
      red: "#E02A3F",
      ink: "#111315",
      ink300: "#272B30",
      ink100: "#6F767E",
      // base
    },
    screens: {
      xs: "320px",
      // => @media (min-width: 320) { ... }
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      desktop: "1536px",
    },
    extend: {
      width: {
        button: "343px",
      },
      height: {
        button: "52px",
      },
    },
    borderRadius: {
      button: "12px",
    },
    fontSize: {
      button: "16px",
    },
  },
  plugins: [],
};
