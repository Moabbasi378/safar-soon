/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'IranYekan': ['IranYekan', 'sans-serif']
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      primary: "#6d77a6",
      secondary: "#585567",
      extra: "#e3a655",
      background: "#f8f6f4",
      success: "#2FC948",
      error: "#E63946",
      warning: "#FFE056",
    },
    plugins: [],
  }
};