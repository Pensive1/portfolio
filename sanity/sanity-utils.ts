import "server-only";
import { draftMode } from "next/headers";

import aboutSectionType from "@/types/about";
import heroType from "@/types/hero";
import { Project, ProjectPage } from "@/types/data";
import {
  createClient,
  groq,
  type QueryOptions,
  type QueryParams,
} from "next-sanity";
import { token } from "./lib/token";
import config from "./config/client-config";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient(config);
const imgBuilder = imageUrlBuilder(client);

export function sanityImg(source: string) {
  return imgBuilder.image(source);
}

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  const isDraftMode = (await draftMode()).isEnabled;
  if (isDraftMode && !token) {
    throw new Error("Missing environment variable SANITY_API_READ_TOKEN");
  }

  let dynamicRevalidate = revalidate;
  if (isDraftMode) {
    // Do not cache in Draft Mode
    dynamicRevalidate = 0;
  } else if (tags.length) {
    // Cache indefinitely if tags supplied, purge with revalidateTag()
    dynamicRevalidate = false;
  }

  return client.fetch<QueryResponse>(query, params, {
    ...(isDraftMode &&
      ({
        token: token,
        perspective: "previewDrafts",
        stega: true,
      } satisfies QueryOptions)),
    next: {
      revalidate: dynamicRevalidate,
      tags,
    },
  });
}

// Gets homepage content
export async function getHomeContent(): Promise<{
  hero: heroType;
  about: aboutSectionType;
}> {
  const data = await client.fetch(
    groq`*[_type == "page" && title == "Home Page"]{
      "hero": pageBuilder[0],
      "about": pageBuilder[1]
    }`
  );

  const [{ hero, about }] = data;
  return { hero, about };
}

// Gets project thumbnails for homepage
export async function getProjects(): Promise<Project[]> {
  return await client.fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            projectName,
            synopsis,
            "slug": slug.current,
            "heroImage": heroImage,
            liveUrl,
            demoUrl,
            technologies,
            projDisplay
        }`
  );
}

// Get data for a single project
export async function getProject(slug: string): Promise<ProjectPage> {
  return await client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]`,
    { slug }
  );
}
