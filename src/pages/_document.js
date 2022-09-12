import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Jungwoo's portpolio</title>
          <meta charSet="utf-8" />
          <body>
          <Main />
          <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}