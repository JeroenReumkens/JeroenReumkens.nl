import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLocation,
} from '@remix-run/react';
import { useEffect } from 'react';
import { NotFound } from './sections/404';
import { ErrorPage } from './sections/error';
import tailwind from './tailwind.css';
import { pageview } from './utils/gtag';

export function links() {
  return [
    { rel: 'stylesheet', href: tailwind },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    {
      rel: 'icon',
      href: '/favicon-32x32.png',
      type: 'image/png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      href: '/favicon-16x16.png',
      type: 'image/png',
      sizes: '16x16',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#393939' },
  ];
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Jeroen Reumkens — Frontend mentor',
  viewport: 'width=device-width,initial-scale=1',
  'msapplication-TileColor': '#393939',
  'theme-color': '#393939',
  'og:image': '/og-image.jpg',
});

interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

const gaTrackingId = 'G-FKZ83QZRLE';

const Document = ({ children, title }: DocumentProps) => {
  const location = useLocation();
  useEffect(() => {
    pageview(location.pathname, gaTrackingId);
  }, [location]);

  return (
    <html lang="en">
      <head>
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {!gaTrackingId ? null : (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname
                });
              `,
              }}
            />
          </>
        )}

        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}
export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      {caught.status === 404 ? <NotFound /> : <ErrorPage />}
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Error!">
      <ErrorPage />
    </Document>
  );
}
