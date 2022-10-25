// import { NotFound } from '~/sections/404';
// import { ErrorPage } from '~/sections/error';
import  '~/tailwind.css';
import { Layout } from './components/global-layout';
import { Gtag } from './gtag';

interface DocumentProps {
  children: React.ReactNode;
}


const Document = ({ children }: DocumentProps) => {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#393939" />
        <meta name="msapplication-TileColor" content="#393939" />
        <meta name="og:image" content="/og-image.jpg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#393939" />
      </head>
      <body>
        <Gtag/>

        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
};

export default Document;