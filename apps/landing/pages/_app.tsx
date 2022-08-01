import { AppProps } from 'next/app';
import Head from 'next/head';

import { globalStyle } from '_@landing-ui/design-system/stitches.config';
import { worker } from '_@landing-ui/mocks/browser';

if (process.env.NODE_ENV === 'development') {
  if (typeof window === 'object' && worker.start) {
    worker.stop();
    worker.start();
  }
}

globalStyle();

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to landing!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
