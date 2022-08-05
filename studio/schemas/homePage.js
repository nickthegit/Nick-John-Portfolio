export default {
  name: "homePage",
  title: "homePage",
  type: "document",
  fields: [
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }],
    },
  ],
};
