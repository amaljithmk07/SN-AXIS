import "@/styles/globals.css";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [lang, setLang] = useState();

  useEffect(() => {
    setLang(router.locale);
  }, []);
  return (
    <Layout {...pageProps} lang={lang}>
      <Component {...pageProps} />
    </Layout>
  );
}
