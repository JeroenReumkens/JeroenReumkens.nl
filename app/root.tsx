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
  return [{ rel: 'stylesheet', href: tailwind }];
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Jeroen Reumkens',
  viewport: 'width=device-width,initial-scale=1',
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
