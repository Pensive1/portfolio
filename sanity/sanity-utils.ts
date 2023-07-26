import aboutSectionType from "@/types/about";
import heroType from "@/types/hero";
import { Project } from "@/types/project";
import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "8x4tdu0d",
  dataset: "production",
  apiVersion: "2023-07-19",
  useCdn: false,
});

// Gets project thumbnails for homepage
export async function getProjects(): Promise<Project[]> {
  return await client.fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            projectName,
            synopsis,
            "slug": slug.current,
            "heroImage": image.asset->url,
            liveUrl,
            technologies,
            projDisplay
        }`
  );
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
