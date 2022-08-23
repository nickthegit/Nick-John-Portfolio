// import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { usePreviewSubscription, urlFor } from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";
import styles from "../../styles/pages/Project.module.scss";
import { useEffect } from "react";

import Vimeo from "@vimeo/player";

const projectQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    body,
    "images": images.images,
    credits,
    link,
    featuredVideo,
    mainImage,
    categories[]->{
      _id,
      title
    },
    "slug": slug.current
  }
`;

export default function Post({ data, preview }) {
  const router = useRouter();

  const { data: project } = usePreviewSubscription(projectQuery, {
    params: { slug: data?.project?.slug },
    initialData: data?.project,
    enabled: preview && data?.project?.slug,
  });

  if (!router.isFallback && !data.project?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  console.log(project);
  const {
    title,
    categories,
    mainImage,
    body,
    credits,
    link,
    images,
    featuredVideo,
  } = project;

  let catArry = [];
  categories.map((category) => {
    catArry.push(category.title);
  });
  catArry = catArry.join(" / ");
  useEffect(() => {
    // Client-side-only code
    const featuredVideoPlayer = new Vimeo("featuredVideo", {
      url: featuredVideo,
      background: true,
      byline: false,
      autoplay: true,
      loop: true,
      muted: true,
      title: false,
      portrait: false,
      color: "ffffff",
      controls: false,
    });
  }, []);

  return (
    <article className={styles.project}>
      <figure className={styles.featureImg}>
        {mainImage && (
          <picture>
            <source
              media="(max-width: 480px)"
              srcSet={`${urlFor(mainImage)
                .width(480)
                .height(480)
                .fit("max")
                .dpr(2)
                .auto("format")
                .url()} 2x, 
              ${urlFor(mainImage)
                .width(480)
                .height(480)
                .fit("max")
                .auto("format")
                .url()}`}
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${urlFor(mainImage)
                .width(768)
                .height(346)
                .fit("max")
                .dpr(2)
                .auto("format")
                .url()} 2x, 
              ${urlFor(mainImage)
                .width(768)
                .height(346)
                .fit("max")
                .auto("format")
                .url()}`}
            />
            <source
              media="(min-width: 1024px)"
              srcSet={`${urlFor(mainImage)
                .width(1024)
                .height(461)
                .fit("max")
                .dpr(2)
                .auto("format")
                .url()} 2x, 
              ${urlFor(mainImage)
                .width(1024)
                .height(461)
                .fit("max")
                .auto("format")
                .url()}`}
            />
            <source
              media="(min-width: 1280px)"
              srcSet={`${urlFor(mainImage)
                .width(1280)
                .height(576)
                .fit("max")
                .dpr(2)
                .auto("format")
                .url()} 2x, 
              ${urlFor(mainImage)
                .width(1280)
                .height(576)
                .fit("max")
                .auto("format")
                .url()}`}
            />
            <source
              media="(min-width: 1440px)"
              srcSet={`${urlFor(mainImage)
                .width(1440)
                .height(648)
                .fit("max")
                .dpr(2)
                .auto("format")
                .url()} 2x, 
              ${urlFor(mainImage)
                .width(1440)
                .height(648)
                .fit("max")
                .auto("format")
                .url()}`}
            />
            <source
              media="(min-width: 1728px)"
              srcSet={`${urlFor(mainImage)
                .width(1728)
                .height(778)
                .fit("max")
                .dpr(2)
                .auto("format")
                .url()} 2x, 
              ${urlFor(mainImage)
                .width(1728)
                .height(778)
                .fit("max")
                .auto("format")
                .url()}`}
            />
            <source
              media="(min-width: 2048px)"
              srcSet={`${urlFor(mainImage)
                .width(2048)
                .height(922)
                .fit("max")
                .dpr(2)
                .auto("format")
                .url()} 2x, 
              ${urlFor(mainImage)
                .width(2048)
                .height(922)
                .fit("max")
                .auto("format")
                .url()}`}
            />
            <img
              src={urlFor(mainImage)
                .width(1600)
                .height(720)
                .fit("max")
                .auto("format")
                .url()}
              alt={`${title} - Feature image`}
            />
          </picture>
        )}
      </figure>
      <h1 className={styles.title}>{title.length && title}</h1>
      {categories?.length && (
        <p className={styles.categories}>{catArry.length && catArry}</p>
      )}
      {link?.length && (
        <section className={styles.link}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            VISIT SITE HERE
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 58 35"
              >
                <path
                  fill="#fff"
                  d="M17.4 5.834c-6.519 0-11.6 5.111-11.6 11.666 0 6.555 5.081 11.666 11.6 11.666h5.8a2.91 2.91 0 0 1 2.9 2.918A2.908 2.908 0 0 1 23.2 35h-5.8C7.678 35 0 27.277 0 17.5 0 7.723 7.678 0 17.4 0h5.8c1.602 0 2.9 1.306 2.9 2.916a2.91 2.91 0 0 1-2.9 2.918h-5.8Zm14.5-2.918A2.908 2.908 0 0 1 34.8 0h5.8C50.32 0 58 7.723 58 17.5 58 27.277 50.322 35 40.6 35h-5.8a2.909 2.909 0 0 1-2.9-2.916 2.91 2.91 0 0 1 2.9-2.918h5.8c6.519 0 11.6-5.111 11.6-11.666 0-6.555-5.081-11.666-11.6-11.666h-5.8a2.91 2.91 0 0 1-2.9-2.918ZM14.5 17.5a2.908 2.908 0 0 1 2.9-2.916h23.2c1.602 0 2.9 1.306 2.9 2.916a2.909 2.909 0 0 1-2.9 2.916H17.4a2.909 2.909 0 0 1-2.9-2.916Z"
                />
              </svg>
            </span>
          </a>
        </section>
      )}
      {featuredVideo?.length && (
        <section className={styles.featuredVideo}>
          <div id="featuredVideo" className={styles.videoWrapper}></div>
        </section>
      )}
      {body?.length && (
        <section className={styles.body}>
          <PortableText value={body} />
        </section>
      )}
      <section className={styles.images}>
        {images?.length &&
          images.map((image) => {
            return (
              <div key={image._key}>
                <img src={urlFor(image).width(1200).auto("format").url()} />
              </div>
            );
          })}
      </section>
      <h3>Credits</h3>
      <PortableText value={credits} />
    </article>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const project = await getClient(preview).fetch(projectQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      data: { project },
    },
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "project" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
