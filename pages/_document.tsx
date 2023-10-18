import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta name="Fortune's Next Js Blog" />
      <body>
        <Main />
        <NextScript />
        <div id="notification"></div>
      </body>
    </Html>
  );
}
