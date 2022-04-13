const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'crudGenerator': "url('/src/assets/work/crud-generator.jpg')",
        'personalityTest': "url('/src/assets/work/personality-test.jpg')",
        'nazoutex': "url('/src/assets/work/nazoutex.png')",
      }),
      colors: {
        primary: "#005366",
        primary_blur: "#005366bf",
        primary_shadow: "#00536666",
        primary_shadow_light: "#2d9db766",
        light: "#d6bcfd",
        linkedin: "#0072b1"
      },
      fontFamily: {
      },
      transitionProperty: {
        'width': 'width'
      }
    },
  },
  plugins: [],
}