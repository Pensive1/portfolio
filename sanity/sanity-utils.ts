import { Project } from "@/types/project";
import { createClient, groq } from "next-sanity";

// Gets project thumbnails for homepage
export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "8x4tdu0d",
    dataset: "production",
    apiVersion: "2023-07-19",
    useCdn: false,
  });

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
        }`
  );
}
