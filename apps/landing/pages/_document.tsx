import Document, {
  Head,
  Main,
  NextScript,
  Html,
  DocumentContext,
} from 'next/document';
import { getCssText } from '_@landing-ui/design-system/stitches.config';

class MyDocument extends Document<{ helmet: any; css: string; ids: any }> {
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    const { renderPage } = ctx;
    const page: any = renderPage();

    return {
      ...page,
    };
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
