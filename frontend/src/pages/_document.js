import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Animal Network - Connecting shelters, veterinarians, and helpers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-gray-100 text-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
