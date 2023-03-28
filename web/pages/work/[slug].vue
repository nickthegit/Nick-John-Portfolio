<template>
  <div>
    <Project :project="data" />
  </div>
</template>

<script setup>
// get slug from route in nuxt 3
const route = await useRoute();

const query = groq`
*[_type == "project" && slug.current == '${route.params.slug}'][0] {
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

onMounted(() => {});
</script>
