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
