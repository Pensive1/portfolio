const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_VERSION,
  useCdn: true,
  token: process.env.SANITY_API_READ_TOKEN,
  stega: {
    enabled: process.env.NEXT_PUBLIC_VERCEL_ENV === "preview",
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
};

export default config;
