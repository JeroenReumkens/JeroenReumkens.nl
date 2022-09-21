/** @type {import('tailwindcss').Config} */
module.exports = {
  // See https://github.com/Acidic9/prettier-plugin-tailwind/issues/29 for the node env check
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    colors: {
      white: '#fff',
      gray: '#f4f4f4',
      gray40: '#656565',
      gray80: '#393939',
      black: '#111',
      yellow: '#f9ee8d',
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
      mono: "'Fira Code', monospace",
      serif: "'Cormorant', serif",
    },
    fontSize: {
      body: '2.8rem',
      xl: '4.8rem',
      '2xl': '7.2rem',
      humongous: '12.8rem',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
    },
    lineHeight: {
      tight: 1.19
    },
    screens: {
      sm: '768px',
      md: '1024px',
      lg: '1280px',
    },
    borderRadius: {
      massive: '12rem',
    },
    boxShadow: {
      hard: '5px 5px 0 0 rgba(0,0,0,1)',
    },
  },
  plugins: [],
};
