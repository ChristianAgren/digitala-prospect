const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      desktop: '1540px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/6114249_Besvärsgatan_3-13.jpg')",
        bjurforsbeyond: "url('/images/bjurfors.png')",
        entrance1: "url('/images/entrance1.jpg')",
        entrance2: "url('/images/entrance2.jpg')",
        entrance3: "url('/images/entrance3.jpg')",
        bedroom1: "url('/images/bedroom1.jpg')",
        bedroom2: "url('/images/bedroom2.jpg')",
        bedroom3: "url('/images/bedroom3.jpg')",
        bathroom1: "url('/images/bathroom1.jpg')",
        bathroom2: "url('/images/bathroom2.jpg')",
        bathroom3: "url('/images/bathroom3.jpg')",
        kitchen1: "url('/images/kitchen1.jpg')",
        kitchen2: "url('/images/kitchen2.jpg')",
        kitchen3: "url('/images/kitchen3.jpg')",
        planlosning: "url('/images/planlosning.png')",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#0B1D26',
        whitehue: '#f7fcff',
        secondary: 'grey',
      },
      fontFamily: {
        body: ['Caramaran', ...defaultTheme.fontFamily.sans],
        heading: ['"PT Serif"', 'Catamaran', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
