import React from 'react';
import NextApp from 'next/app';
import { ThemeProvider, createGlobalStyle } from '../theme';
import { normalize } from 'polished';
import { theme } from '../config/theme';

const GlobalStyle = createGlobalStyle`
  html {
    font-size:62.5%;
    font-family: 'Merriweather', serif;
  }

  body {
    font-size: ${props => props.theme.fonts.sizes[0]};
    color: ${props => props.theme.colors.black};
  }
  ${normalize()}
`;
export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
