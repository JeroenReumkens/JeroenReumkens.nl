import '~/styles/global.css';
import { Cormorant, Fira_Code } from '@next/font/google';
import classNames from 'classnames';
import { Header } from '~/components/structure/header';
import { Footer } from '~/components/structure/footer';
import { Gtag } from '~/components/structure/gtag';

interface DocumentProps {
  children: React.ReactNode;
}

const cormorant = Cormorant({
  weight: 'variable',
  variable: '--font-cormorant',
  display: 'swap',
});
const firaCode = Fira_Code({
  weight: 'variable',
  variable: '--font-fira-code',
  display: 'swap',
});

const Document = ({ children }: DocumentProps) => {
  return (
    <html
      lang="en"
      className={classNames(cormorant.variable, firaCode.variable)}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#393939" />
        <meta name="msapplication-TileColor" content="#393939" />
        <meta name="og:image" content="/og-image.jpg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#393939" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preload" href="/img/noise.png" as="image" />
      </head>
      <body>
        <Gtag />
        <main className="font-serif leading-tight [--responsive-massive-radius:60px] sm:[--responsive-massive-radius:120px]">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default Document;
