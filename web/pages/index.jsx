import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/pages/Home.module.scss";

import { useThemeStateContext } from "../context/themeState";

import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { usePreviewSubscription, urlFor } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";

const homeQuery = groq`
*[_type == "homePage" ][0] {
  projects[]-> {
    _id,
    "slug": slug.current,
    title,
    mainImage,
    client
  }
}
`;

export default function Home({ data }) {
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
            {data?.projects?.map((project) => {
              return (
                <article className={styles.projectCard} key={project._id}>
                  <Link href={`/projects/${project.slug}`}>
                    <a>
                      <h3 className={theme.mode === "light" ? "invent" : ""}>
                        {project.client} <br />
                        {project.title}
                      </h3>
                      <picture>
                        <source
                          media="(max-width: 480px)"
                          srcSet={`${urlFor(project.mainImage)
                            .width(480)
                            .height(480)
                            .fit("max")
                            .dpr(2)
                            .auto("format")
                            .url()} 2x, 
                            ${urlFor(project.mainImage)
                              .width(480)
                              .height(480)
                              .fit("max")
                              .auto("format")
                              .url()}`}
                        />
                        <source
                          media="(max-width: 768px)"
                          srcSet={`${urlFor(project.mainImage)
                            .width(768)
                            .height(432)
                            .fit("max")
                            .dpr(2)
                            .auto("format")
                            .url()} 2x, 
                            ${urlFor(project.mainImage)
                              .width(768)
                              .height(432)
                              .fit("max")
                              .auto("format")
                              .url()}`}
                        />
                        <source
                          media="(max-width: 1024px)"
                          srcSet={`${urlFor(project.mainImage)
                            .width(1024)
                            .height(576)
                            .fit("max")
                            .dpr(2)
                            .auto("format")
                            .url()} 2x, 
                            ${urlFor(project.mainImage)
                              .width(1024)
                              .height(576)
                              .fit("max")
                              .auto("format")
                              .url()}`}
                        />
                        <source
                          media="(max-width: 1280px)"
                          srcSet={`${urlFor(project.mainImage)
                            .width(1280)
                            .height(720)
                            .fit("max")
                            .dpr(2)
                            .auto("format")
                            .url()} 2x, 
                            ${urlFor(project.mainImage)
                              .width(1280)
                              .height(720)
                              .fit("max")
                              .auto("format")
                              .url()}`}
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet={`${urlFor(project.mainImage)
                            .width(1440)
                            .height(810)
                            .fit("max")
                            .dpr(2)
                            .auto("format")
                            .url()} 2x, 
                            ${urlFor(project.mainImage)
                              .width(1440)
                              .height(810)
                              .fit("max")
                              .auto("format")
                              .url()}`}
                        />
                        <source
                          media="(max-width: 1728px)"
                          srcSet={`${urlFor(project.mainImage)
                            .width(1728)
                            .height(972)
                            .fit("max")
                            .dpr(2)
                            .auto("format")
                            .url()} 2x, 
                            ${urlFor(project.mainImage)
                              .width(1728)
                              .height(972)
                              .fit("max")
                              .auto("format")
                              .url()}`}
                        />
                        <source
                          media="(min-width: 1729px)"
                          srcSet={`${urlFor(project.mainImage)
                            .width(2048)
                            .height(1152)
                            .fit("max")
                            .dpr(2)
                            .auto("format")
                            .url()} 2x, 
                            ${urlFor(project.mainImage)
                              .width(2048)
                              .height(1152)
                              .fit("max")
                              .auto("format")
                              .url()}`}
                        />
                        <img
                          src={urlFor(project.mainImage)
                            .width(1600)
                            .height(900)
                            .fit("max")
                            .auto("format")
                            .url()}
                          alt={`${project.title} - Feature image`}
                        />
                      </picture>
                    </a>
                  </Link>
                </article>
              );
            })}
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

export async function getStaticProps({ params, preview = false }) {
  const homeData = await getClient(preview).fetch(homeQuery);

  return {
    props: {
      data: homeData,
    },
  };
}
