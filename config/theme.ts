export const theme = {
  grid: {
    maxWidth: '1440px'
  },
  colors: {
    yellow: '#fff7ef',
    grey: '#666',
    greyLight: '#f1f1f1',
    black: '#111'
  },
  fonts: {
    sizes: ['1.6rem', '2rem', '2.8rem', '4rem', '5.6rem', '7.6rem'],
    weights: [300, 400, 900]
  }
};

export type ThemeInterface = typeof theme;
