const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('./src/images/hero.jpg')",
        bjurforsbeyond: "url('./src/images/bjurfors_beyond.png')",
        bedroom: "url('./src/images/room_bedroom.png')",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: 'black',
        secondary: 'grey',
      },
      fontFamily: {
        body: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
