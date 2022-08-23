// import ErrorPage from "next/error";
import Link from "next/link";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { usePreviewSubscription, urlFor } from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";
import styles from "../../styles/pages/Project.module.scss";
import { useEffect, useState } from "react";

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
const allProjectsQuery = groq`
*[_type == "homePage" ][0] {
  projects[]-> {
    _id,
    "slug": slug.current,
    title,
    mainImage
  }
}`;

export default function Post({ data, preview }) {
  const [nextProject, setNextProject] = useState(null);
  const [prevProject, setPrevProject] = useState(null);
  const [projectList, setProjectList] = useState(null);

  const router = useRouter();

  const { data: project } = usePreviewSubscription(projectQuery, {
    params: { slug: data?.project?.slug },
    initialData: data?.project,
    enabled: preview && data?.project?.slug,
  });

  if (!router.isFallback && !data.project?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const {
    _id,
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

  const getPrevNextProjects = async () => {
    const getProjectList = await getClient().fetch(allProjectsQuery);
    await setProjectList(getProjectList.projects);
  };
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
    const getPrevNextProjects = async () => {
      const getProjectList = await getClient().fetch(allProjectsQuery);
      await setProjectList(getProjectList.projects);
    };

    getPrevNextProjects();

    router.events.on("routeChangeComplete", getPrevNextProjects);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeComplete", getPrevNextProjects);
    };
  }, []);
  useEffect(() => {
    if (projectList) {
      const currentIndex = projectList.findIndex(
        (project) => project._id === _id
      );
      const prev = currentIndex !== 0 ? projectList[currentIndex - 1] : null;
      const next =
        currentIndex !== projectList.length
          ? projectList[currentIndex + 1]
          : null;
      setPrevProject(prev);
      setNextProject(next);
    }
  }, [projectList]);

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
          <div className={styles.videoWrap}>
            <div id="featuredVideo" className={styles.video}></div>
          </div>
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
                <picture>
                  <source
                    media="(max-width: 480px)"
                    srcSet={`${urlFor(image)
                      .width(480)
                      .height(270)
                      .fit("max")
                      .dpr(2)
                      .auto("format")
                      .url()} 2x, 
                      ${urlFor(image)
                        .width(480)
                        .height(270)
                        .fit("max")
                        .auto("format")
                        .url()}`}
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={`${urlFor(image)
                      .width(384)
                      .height(216)
                      .fit("max")
                      .dpr(2)
                      .auto("format")
                      .url()} 2x, 
                      ${urlFor(image)
                        .width(384)
                        .height(216)
                        .fit("max")
                        .auto("format")
                        .url()}`}
                  />
                  <source
                    media="(min-width: 1024px)"
                    srcSet={`${urlFor(image)
                      .width(512)
                      .height(288)
                      .fit("max")
                      .dpr(2)
                      .auto("format")
                      .url()} 2x, 
                      ${urlFor(image)
                        .width(512)
                        .height(288)
                        .fit("max")
                        .auto("format")
                        .url()}`}
                  />
                  <source
                    media="(min-width: 1280px)"
                    srcSet={`${urlFor(image)
                      .width(640)
                      .height(360)
                      .fit("max")
                      .dpr(2)
                      .auto("format")
                      .url()} 2x, 
                      ${urlFor(image)
                        .width(640)
                        .height(360)
                        .fit("max")
                        .auto("format")
                        .url()}`}
                  />
                  <source
                    media="(min-width: 1440px)"
                    srcSet={`${urlFor(image)
                      .width(720)
                      .height(405)
                      .fit("max")
                      .dpr(2)
                      .auto("format")
                      .url()} 2x, 
                      ${urlFor(image)
                        .width(720)
                        .height(405)
                        .fit("max")
                        .auto("format")
                        .url()}`}
                  />
                  <source
                    media="(min-width: 1728px)"
                    srcSet={`${urlFor(image)
                      .width(864)
                      .height(486)
                      .fit("max")
                      .dpr(2)
                      .auto("format")
                      .url()} 2x, 
                      ${urlFor(image)
                        .width(864)
                        .height(486)
                        .fit("max")
                        .auto("format")
                        .url()}`}
                  />
                  <source
                    media="(min-width: 2048px)"
                    srcSet={`${urlFor(image)
                      .width(1024)
                      .height(576)
                      .fit("max")
                      .dpr(2)
                      .auto("format")
                      .url()} 2x, 
                      ${urlFor(image)
                        .width(1024)
                        .height(576)
                        .fit("max")
                        .auto("format")
                        .url()}`}
                  />
                  <img
                    src={urlFor(image)
                      .width(800)
                      .height(450)
                      .fit("max")
                      .auto("format")
                      .url()}
                    alt={`${title} - image`}
                  />
                </picture>
              </div>
            );
          })}
      </section>
      <section className={styles.credits}>
        <PortableText value={credits} />
      </section>
      <section className={styles.nextPrev}>
        {prevProject && (
          <Link href={`/projects/${prevProject?.slug}`}>
            <a className={styles.prev}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 54 33"
                >
                  <path
                    fill="#fff"
                    d="m.394 17.615 12.6 14.765a1.885 1.885 0 0 0 2.546.23 1.769 1.769 0 0 0 .24-2.46L5.624 18.238H52.2c.24.007.48-.033.705-.117a1.81 1.81 0 0 0 .602-.373c.173-.162.31-.355.404-.57a1.684 1.684 0 0 0 0-1.353 1.734 1.734 0 0 0-.404-.57 1.806 1.806 0 0 0-.602-.373 1.86 1.86 0 0 0-.705-.117H5.625L15.779 2.852c.602-.703.482-1.861-.24-2.456a1.881 1.881 0 0 0-2.545.23L.394 15.392c-.563.845-.482 1.481 0 2.227v-.004Z"
                  />
                </svg>
              </span>
              PREVIOUS
            </a>
          </Link>
        )}
        {nextProject && (
          <Link href={`/projects/${nextProject?.slug}`}>
            <a className={styles.next}>
              NEXT
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 54 33"
                >
                  <path
                    fill="#fff"
                    d="m.394 17.615 12.6 14.765a1.885 1.885 0 0 0 2.546.23 1.769 1.769 0 0 0 .24-2.46L5.624 18.238H52.2c.24.007.48-.033.705-.117a1.81 1.81 0 0 0 .602-.373c.173-.162.31-.355.404-.57a1.684 1.684 0 0 0 0-1.353 1.734 1.734 0 0 0-.404-.57 1.806 1.806 0 0 0-.602-.373 1.86 1.86 0 0 0-.705-.117H5.625L15.779 2.852c.602-.703.482-1.861-.24-2.456a1.881 1.881 0 0 0-2.545.23L.394 15.392c-.563.845-.482 1.481 0 2.227v-.004Z"
                  />
                </svg>
              </span>
            </a>
          </Link>
        )}
      </section>
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
