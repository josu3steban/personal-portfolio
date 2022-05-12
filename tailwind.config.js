const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/components/**/*.jsx'],
  theme: {
    screens: {
      'sm': {'max': '639px'},
      'md': {'min': '639px'},
    },
    extend: {},
  },
  plugins: [],
}
