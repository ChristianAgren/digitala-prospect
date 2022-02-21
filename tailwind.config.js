module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          superlight: '#FFFFFF',
          light: '#FFF8F0',
          DEFAULT: '#FFEBD1',
          dark: '#978F85',
        },
        secondary: {
          light: '#EFEFEF',
          DEFAULT: '#A0A0A0',
          dark: '#26221D',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
