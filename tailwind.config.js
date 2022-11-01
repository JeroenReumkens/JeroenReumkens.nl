const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{ts,tsx}',
    './sections/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    colors: {
      white: '#fff',
      gray: '#f4f4f4',
      gray20: '#d3d3d3',
      gray40: '#656565',
      gray80: '#393939',
      black: '#111',
      yellow: '#f9ee8d',
      yellow20: '#FBF8E4',
      transparent: 'transparent',
    },
    spacing: {
      1: '0.5rem',
      2: '1rem',
      3: '2rem',
      4: '4rem',
      5: '8rem',
      6: '16rem',
      7: '32rem',
      8: '64rem',
      col: '21.4rem',
    },
    fontFamily: {
      mono: 'var(--font-fira-code)',
      serif: 'var(--font-cormorant)',
    },
    fontSize: {
      small: '2.2rem',
      body: '2.8rem',
      lg: '3.6rem',
      xl: '4.8rem',
      '2xl': '7.2rem',
      humongous: '12.8rem',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
    },
    lineHeight: {
      tight: 1.19,
      base: 1.29,
    },
    screens: {
      sm: '768px',
      md: '1024px',
      lg: '1280px',
    },
    borderRadius: {
      md: '2rem',
      lg: '3.2rem',
      massive: 'var(--responsive-massive-radius)',
    },
    boxShadow: {
      faded: '5px 5px 0 0 rgba(0,0,0,0.6)',
      hard: '5px 5px 0 0 rgba(0,0,0,1)',
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('current-child', '& [aria-current="page"]');
    }),
  ],
};
