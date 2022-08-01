import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import { worker } from '_@landing-ui/mocks/browser';
import {
  globalStyle,
  // getCssText,
} from '_@landing-ui/design-system/stitches.config';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

if (process.env.NODE_ENV === 'development') {
  if (typeof window === 'object' && worker.start) {
    console.log('start worker');
    worker.stop();
    worker.start();
  }
}

globalStyle();
export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {/* <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        /> */}
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
