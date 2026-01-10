import { defineConfig } from 'sanity';
import { structureTool } from "sanity/structure";
import { visionTool } from '@sanity/vision'
import schemas from './sanity/schemas';
import { presentationTool, defineDocuments } from 'sanity/presentation'

const config = defineConfig({
  projectId: '8x4tdu0d',
  dataset: 'production',
  title: 'My Dev Portfolio',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_VERSION,
  basePath: '/admin',
  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: '/api/draft-mode/enable',
          disable: '/api/draft-mode/disable',
        },
      },
      resolve: {
        mainDocuments: defineDocuments([
          {
            route: '/',
            filter: `_type == "page" && title == "Home Page"`,
          },
          {
            route: '/projects/:slug',
            filter: `_type == "project" && slug.current == $slug`,
          },
        ]),
      },
      title: 'Preview'
    }),
  ],
  stega: {
    enabled: process.env.NEXT_PUBLIC_VERCEL_ENV === "preview",
    studioUrl: "/admin",
  },
  schema: { types: schemas }
});

export default config;