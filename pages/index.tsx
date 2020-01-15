import React from 'react';
import Head from 'next/head';
import { ThemeProvider, createGlobalStyle } from '../theme';
import { normalize } from 'polished';
import { Intro } from '../components/intro';
import { theme } from '../config/theme';
import { LetsWorkTogether } from '../components/lets-work-together';

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

const Home = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather:300,400,900&display=swap"
          rel="stylesheet"
        />
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro available />
      <LetsWorkTogether />
    </ThemeProvider>
  </>
);

export default Home;
