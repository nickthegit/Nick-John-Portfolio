const previewSecret = "7L2CnUSiomxLCeZWQw5fhw67y";

// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `https://your-nextjs-site.com`;
const localUrl = `http://localhost:3000`;

export default function resolveProductionUrl(doc) {
  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;

  const previewUrl = new URL(baseUrl);

  let prepenedSlug = "";

  if (doc._type === "project" && doc?.slug?.current) {
    prepenedSlug = `projects/${doc?.slug?.current}`;
  } else if (doc?.slug?.current) {
    prepenedSlug = `${doc?.slug?.current}`;
  } else {
    prepenedSlug = "/";
  }

  previewUrl.pathname = `/api/preview`;
  previewUrl.searchParams.append(`secret`, previewSecret);
  previewUrl.searchParams.append(`slug`, prepenedSlug ?? `/`);

  return previewUrl.toString();
}
