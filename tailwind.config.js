const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image_1': "url('/images/vargo.png')",
        'hero-image_2': "url('/images/6114249_Besvärsgatan_3-11.jpg')",
        'hero-image': "url('/images/6114249_Besvärsgatan_3-13.jpg')",
        bjurforsbeyond: "url('/images/bjurfors_beyond.png')",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: 'black',
        secondary: 'grey',
      },
      fontFamily: {
        body: ['Caramaran', ...defaultTheme.fontFamily.sans],
        heading: ['Catamaran', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
