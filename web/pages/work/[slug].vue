<template>
  <article>
    <WorkItemCard
      title="Renew Labs Store"
      img-src="https://via.placeholder.com/600x400/f27272/969696"
      client="Converse"
      slug="renew-labs-store"
      :tags="['hi', 'there']"
      site-link="https://www.google.com"
    />
    <section class="text-container intro wrapper grid-12">
      <p>
        I Led Development team for build of Renew Labs Store by Converse. By
        using 360 rendered imagery we created a fullY immersive “Trash Island”
        online to Experience, shop and rise awareness for the ocean crisis.
      </p>
      <p>
        Many factors went into the build including data collection(Using
        Sendgrid API), 360 Viewing capabilities(built on top of Marzipano.js)
        and SSG Utilizaling Nuxt.js framework and utilising Netlify Functions
      </p>
    </section>
    <section class="media-container img-2 wrapper grid-12">
      <img src="https://via.placeholder.com/600x400" />
      <img src="https://via.placeholder.com/400x300" />
    </section>
    <section class="media-container video wrapper grid-12">
      <img src="https://via.placeholder.com/600x400/e0c5c5/969696?text=VIDEO" />
    </section>
    <section class="media-container img-3 wrapper grid-12">
      <img src="https://via.placeholder.com/600x400" />
      <img src="https://via.placeholder.com/600x600" />
      <img src="https://via.placeholder.com/600x400" />
    </section>
    <section class="media-container img-1 wrapper grid-12">
      <img src="https://via.placeholder.com/600x400" />
    </section>
    <cite class="text-container credits wrapper grid-12">
      <h3>Credits</h3>
      <ul>
        <li>Client: Converse</li>
        <li>Role: Lead Developer</li>
        <li>Agency: Renew Labs</li>
        <li>Year: 2020</li>
      </ul>
    </cite>
  </article>
</template>

<script setup>
// get slug from route in nuxt 3
const { params } = useRoute();
const slug = computed(() => params.slug);

const query = `
  *[_type == "project" && slug.current == '${params.slug}'][0] {
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
    "slug": slug.current,
    client
  }
`;
const sanity = useSanity();
const data = await useAsyncData("project", () => sanity.fetch(query));

console.log("data", data.data);
</script>

<style lang="scss" scoped>
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
.video {
  img,
  iframe,
  video {
    grid-column: 5 / span 8;
  }
}

.img-1 {
  img {
    grid-column: span 12;
  }
}
.img-2 {
  img {
    grid-column: span 6;
  }
}
.img-3 {
  img {
    grid-column: span 4;
  }
}
.credits {
  h3 {
    font-size: responsive 20px 24px;
    font-variation-settings: "wght" 500;
  }
}
</style>
