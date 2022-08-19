// import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { usePreviewSubscription, urlFor } from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";

const projectQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    body,
    content,
    credits,
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

  const { title, categories, mainImage, body, credits, content } = project;

  return (
    <article>
      <h2>{title.length && title}</h2>
      {categories?.length &&
        categories.map((category) => {
          return category?.title ? (
            <div key={category._id}>{category.title}</div>
          ) : null;
        })}
      <figure>
        {mainImage && (
          <img src={urlFor(mainImage).width(1200).auto("format").url()} />
        )}
      </figure>
      <PortableText value={body} />
      <section>
        <h3>-----Content-----</h3>
        {content?.length &&
          content.map((section) => {
            if (section._type === "video") {
              return <div key={section._key}>Video: {section.video}</div>;
            }
            if (section._type === "images") {
              return (
                <div
                  key={section._key}
                  style={{ display: "flex", width: "100%" }}
                >
                  <h4>image section</h4>
                  {section.images?.images?.length &&
                    section.images.images.map((image) => {
                      return (
                        <div key={image._key}>
                          <img
                            src={urlFor(image).width(1200).auto("format").url()}
                          />
                        </div>
                      );
                    })}
                </div>
              );
            }
            return section._type;
          })}
        <h3>-----Content End-----</h3>
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
