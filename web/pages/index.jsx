import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/pages/Home.module.scss";

import { useThemeStateContext } from "../context/themeState";

export default function Home() {
  const { theme, setTheme } = useThemeStateContext();
  const clients = [
    "StockX",
    "Nike",
    "Converse",
    "Timberland",
    "Vice",
    "Itsu",
    "Pepsi",
    "Goal.Com",
    "Havana Club",
    "Marsheen",
  ];
  return (
    <div>
      <Head>
        <title>Nick John - Portfolio</title>
        <meta
          name="description"
          content="Portfolio for Frontend Web Developer Nick John. LOL"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <section className={styles.hero}>
          <h1>
            Front End <span>Developer</span>
          </h1>
        </section>
        <article className={styles.about}>
          <p>
            I am a Front End Web Developer, based in the UK. Specialising in
            front-end technologies including CSS, HTML & Javascript. My stack
            includes Vue.js, React, Sass, Vuex, Wordpress, Jamstack, Next, Nuxt,
            Shopify, WebGL and Git. I also have a lot of passion for great UI
            interactions, UX design and good semantics.
          </p>
        </article>
        <section className={styles.projects}>
          <h2>Projects</h2>
          <div className={styles.grid}>
            <article className={styles.projectCard}>
              <Link href="/projects/converse-renew-lab-store">
                <a>
                  <h3 className={theme.mode === "light" ? "invent" : ""}>
                    Converse Renew Labs Store
                  </h3>
                  <img src="https://picsum.photos/1920/1080" alt="" />
                </a>
              </Link>
            </article>
            <article className={styles.projectCard}>
              <Link href="/projects/converse-renew-lab-store">
                <a>
                  <h3 className={theme.mode === "light" ? "invent" : ""}>
                    Converse Renew Labs Store
                  </h3>
                  <img src="https://picsum.photos/1920/1080" alt="" />
                </a>
              </Link>
            </article>
          </div>
        </section>
        <section className={styles.clients}>
          <h2>Clients</h2>
          <p>{clients.join(", ")}</p>
        </section>
        <footer className={styles.contact}>
          <h3>Nick John</h3>
          <a href="mailto:hello@nickjohn.co.uk">hello@nickjohn.co.uk</a>
          <a href="https://github.com/nickthegit">Github</a>
          <a href="https://www.linkedin.com/in/nick-john-a310a753/">Linkedin</a>
        </footer>
      </main>
    </div>
  );
}
