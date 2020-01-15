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
      <title>Jeroen Reumkens | Freelance frontend developer</title>
      <link rel="shorcut/icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" href="/favicon.png" />

      <script
        dangerouslySetInnerHTML={{
          __html: `
              var _gaq = _gaq || [];
              _gaq.push(['_setAccount', 'UA-25954452-1']);
              _gaq.push(['_trackPageview']);

              (function() {
                var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
              })();
          `
        }}
      />
    </Head>
    <Intro available />
    <LetsWorkTogether />
  </>
);

export default Home;
