import aboutSectionType from "@/types/about";
import heroType from "@/types/hero";
import { Project, ProjectPage } from "@/types/data";
import { createClient, groq } from "next-sanity";
import config from "./config/client-config";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient(config);
const imgBuilder = imageUrlBuilder(client);

export function sanityImg(source: string) {
  return imgBuilder.image(source);
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
