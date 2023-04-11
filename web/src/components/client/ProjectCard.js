import Link from "next/link";

import { client } from "@/utils/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function Projects({ project }) {
  return (
    <article className="w-[360px] lg:w-[720px]">
      <Link href={`/work/${project.slug}`}>
        <img
          src={urlFor(project.mainImage).width(720).height(480).dpr(2).url()}
          alt={`Feature image for ${project.title}`}
          className="w-[360px] lg:w-[720px] h-[480px] object-cover"
        />
        <h2 className="py-4 text-card-title">{project.title}</h2>
      </Link>
    </article>
  );
}
