<template>
  <article>
    <WorkItemCard
      :title="title"
      :img-src="mainImage"
      :client="client"
      :slug="slug"
      :tags="categories"
      :site-link="link ? link : ''"
      :isHero="hero"
    />
    <!-- intro -->
    <section v-if="body" class="text-container intro wrapper grid-12">
      <SanityContent :blocks="body" />
    </section>
    <!-- video -->
    <section v-if="video" class="media-container video-wrapper wrapper grid-12">
      <div class="video">
        <video
          :src="video"
          muted
          loop
          autoplay
          playsinline
          anonymous
          crossorigin
        ></video>
      </div>
    </section>
    <!-- images -->
    <section
      v-if="images"
      class="media-container img-container wrapper grid-12"
    >
      <GeneralImage
        v-for="image in images"
        :key="image._key"
        :img="image"
        :alt-text="`${title} - images`"
        class="img"
      />
      <!-- <img
        v-for="image in images"
        :key="image._key"
        :src="$urlFor(image).width(800).url()"
      /> -->
    </section>

    <!-- credits -->
    <cite v-if="credits" class="text-container credits wrapper grid-12">
      <h3>CREDITS:</h3>
      <div class="wysiwyg">
        <SanityContent :blocks="credits" />
      </div>
    </cite>
  </article>
</template>

<script setup>
const { $urlFor } = useNuxtApp();
// get slug from route in nuxt 3
const { params } = await useRoute();

const query = groq`
*[_type == "project" && slug.current == '${params.slug}'][0] {
    _id,
    "title": coalesce(title, 'title needed'),
    "body": coalesce(body, false),
    "images": coalesce(images.images, false),
    "credits": coalesce(credits, false),
    "link": coalesce(link, ''),
    "featuredVideo": coalesce(featuredVideo, false), 
    "video": coalesce(video, false),
    "mainImage": coalesce(mainImage, ''),
    "categories": coalesce(categories[]->{
      _id,
      title
    }, false),
    "slug": coalesce(slug.current, false),
    "client": coalesce(client, ''),
}
`;

const { data, refresh } = await useSanityQuery(query);
const {
  title,
  body,
  images,
  credits,
  link,
  featuredVideo,
  mainImage,
  categories,
  slug,
  client,
  video,
} = data.value;

// fire isHero
const hero = ref(false);
setTimeout(() => {
  hero.value = true;
}, 200);
</script>

<style lang="scss">
.text-container {
  margin: var(--content-spacing) auto;
  p,
  ul {
    grid-column: 2 / 7;
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
      grid-column: 2 / 10;
    }
    @media screen and (max-width: 480px) {
      grid-column: 1 / 13;
    }
  }
}
.media-container {
  margin: var(--spacing) auto;
  gap: var(--spacing);
  img,
  iframe,
  video {
    width: 100%;
  }
}
.intro {
  p {
    &:nth-child(1) {
      font-size: responsive 20px 24px;
      font-variation-settings: "wght" 500;
    }
  }
}
.video-wrapper {
  .video {
    position: relative;
    height: 0;
    overflow: hidden;
    grid-column: 1 / span 12;
    background: black;
    padding-bottom: calc((9 / 16) * 100%);
    @media screen and (max-width: 768px) {
      grid-column: 1 / span 12;
    }
    @media screen and (max-width: 480px) {
      padding-bottom: calc((1 / 1) * 100%);
    }
  }
  img,
  iframe,
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }
}

.img-container {
  .img {
    grid-column: span 6;
    @media screen and (max-width: 480px) {
      grid-column: 1 / span 12;
    }
  }
}
.credits {
  gap: var(--spacing);
  h3 {
    grid-column: span 1;
    font-size: responsive 20px 24px;
    font-variation-settings: "wght" 500;
  }
  div {
    position: relative;
    top: 2px;
    grid-column: span 5;
  }
  @media screen and (max-width: 768px) {
    h3 {
      grid-column: span 2;
    }
    div {
      grid-column: span 10;
    }
  }
  @media screen and (max-width: 480px) {
    h3 {
      grid-column: span 4;
    }
    div {
      grid-column: span 12;
    }
  }
}
</style>
