import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <nav>
          <Link href="/">
            <a>Nick John</a>
          </Link>
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
