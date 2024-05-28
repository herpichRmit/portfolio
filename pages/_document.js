import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Ethan Herpich</title>
      </Head>
      <body className="no-scrollbar">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
