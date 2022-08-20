import Head from "next/head";
import "../styles/all.scss";
import Nav from "../components/Nav";
import { ThemeStateProvider } from "../context/themeState";

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nick John - Portfolio</title>
        <meta
          name="description"
          content="Portfolio for Frontend Web Developer Nick John. LOL"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeStateProvider>
        <Nav />
        <Component {...pageProps} />
      </ThemeStateProvider>
    </>
  );
}

export default Application;
