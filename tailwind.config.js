/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          twitter: {
            DEFAULT: "#1DA1F2",
            dark: "#0d8ddb",
          },
        },
        gray: {
          750: "#262f3d",
        },
      },
    },
  },
  plugins: [],
};
