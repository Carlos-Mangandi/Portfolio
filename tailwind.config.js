/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "darkGradient": "radial-gradient(circle, rgba(13,6,73,1) 0%, rgba(85,42,214,1) 100%)",
        "lightGradient": "radial-gradient(circle, rgba(204,204,204,1) 0%, rgba(224,224,224,1) 100%);"
      },
      colors:{
        NeonGreen: "#04f33d"
      }
    },
  },
  plugins: [],
}

