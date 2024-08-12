import { Html, Head, Main, NextScript } from "next/document";

export default function Document(language) {
  console.log(language);

  return (
    <Html lang={language.language}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
