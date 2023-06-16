/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
    },
    extend: {
      blur: {
        xs: '0.5px',
      },
      colors: {
        società: "#F6F6F6",
        steaRed: "#f00s",
        whatever: '#f4e9cd'
      },
      spacing: {
        100: "32rem",
        128: "38rem",
      },
      opacity: {
        '65': '.65',
        '60': '.60',
        '55': '.55',
        '75': '.75',
        '80': '.80'
      },
    },
  },
  plugins: [],
};
