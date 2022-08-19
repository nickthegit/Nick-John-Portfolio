import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
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

      <main>
        <section className="hero">
          <h1>Creative Developer</h1>
        </section>
        <section className="about">
          <p>
            I am a Front End Web Developer, based in the UK. Specialising in
            front-end technologies including CSS, HTML & Javascript. My stack
            includes VueJS, React, Sass, Vuex, Wordpress, Jamstack, Next, Nuxt,
            Shopify, WebGL and Git. I also have a lot of passion for great UI
            interactions, UX design and good semantics.
          </p>
        </section>
        <h2>Projects</h2>
        <Link href="/projects/converse-renew-lab-store">
          <a>converse-renew-lab-store</a>
        </Link>
      </main>

      <footer>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </footer>
    </div>
  );
}
