// text-gray-base
// bg-blue-medium
// text-red-primary
// border-gray-primary
// text-blue-medium

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fill: () => ({ red: theme("colors.red.primary") }),
    colors: {
      white: "#ffffff",
      blue: {
        medium: "#005c98",
      },
      black: {
        light: "#005c98",
        faded: "#00000059",
      },
      gray: {
        base: "#616161",
        background: "#fafafa",
        primary: "#dbdbdb",
      },
      red: {
        primary: "#ed4956",
      },
    },
    extend: {},
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
