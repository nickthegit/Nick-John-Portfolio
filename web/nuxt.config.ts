// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    { path: "~/components/globals", prefix: "Globals" },
    { path: "~/components/layout", prefix: "Layout" },
    "~/components",
  ],
  css: [
    // SCSS file in the project
    "@/assets/scss/style.scss",
  ],
  postcss: {
    plugins: {
      "postcss-responsive-type": {},
    },
  },
  modules: ["@nuxtjs/sanity"],
  sanity: {
    projectId: "bra9n7be",
    dataset: "production",
    apiVersion: "2022-03-22",
  },
});
