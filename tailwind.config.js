const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'workImg': "url('/src/assets/workImg.jpeg')",
        'realEstate': "url('/src/assets/realestate.jpg')",
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
        header: ["Oooh Baby", ...defaultTheme.fontFamily.sans]
      },
      transitionProperty: {
        'width': 'width'
      }
    },
  },
  plugins: [],
}