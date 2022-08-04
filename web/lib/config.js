// lib/config.js
export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2022-08-04", // Learn more: https://www.sanity.io/docs/api-versioning

  useCdn: process.env.NODE_ENV === "production",
};
