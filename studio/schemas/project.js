export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "client",
      title: "Client",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      // options: {
      //   source: "title",
      //   maxLength: 96,
      // },
      options: {
        source: (doc) => `${doc.client}-${doc.title}`,
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "date",
    },
    {
      name: "link",
      title: "Link",
      type: "url",
    },
    {
      name: "featuredVideo",
      title: "Feature Video",
      type: "url",
      description: "if applicable: vimeo link eg: https://vimeo.com/98759847",
    },
    {
      name: "video",
      title: "Video",
      type: "string",
      description:
        "from cloudinary, (login: nj github). In folder: https://console.cloudinary.com/console/c-958983b33b0ac176e6e09c230d5b7a/media_library/folders/c3878febdb094e86d17ec72d3fd9a0c78d <--make sure it'sin this folder!!. String should just be the name such as renew_labs_walkthrough_01_1080p_qgagzl",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "images",
      title: "Image(s)",
      type: "gallery",
    },
    {
      name: "credits",
      title: "Credits",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      media: "mainImage",
    },
  },
};
