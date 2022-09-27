import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from '@remix-run/react';
import tailwind from './tailwind.css';

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
  title: 'Jeroen Reumkens',
  viewport: 'width=device-width,initial-scale=1',
  'msapplication-TileColor': '#393939',
  'theme-color': '#393939',
});

interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

const Document = ({ children, title }: DocumentProps) => {
  return (
    <html lang="en">
      <head>
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
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
      <p>
        [CatchBoundary]: {caught.status} {caught.statusText}
      </p>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Error!">
      <p>[ErrorBoundary]: There was an error: {error.message}</p>
    </Document>
  );
}
