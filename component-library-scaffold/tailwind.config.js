const colors = require("tailwindcss/colors");

module.exports = {
  mode: 'jit',
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./stories/**/*.*", "./.storybook/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        orange: colors.orange,
        green: colors.green,
        primary: {
          DEFAULT: '#203658',
          light: '#355382',
          dark: '#17263d'
        },
        secondary: {
          DEFAULT: '#2b374f',
          light: '#394867',
          dark: '#1f273b'
        },
      },
      maxWidth: {
        ch64: "64ch",
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled']
    },
  },
  plugins: [],
};
