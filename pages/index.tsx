import Head from 'next/head';
import React from 'react';
import { Intro } from '../components/intro';
import { LetsWorkTogether } from '../components/lets-work-together';

const Home = () => (
  <>
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
  </>
);

export default Home;
