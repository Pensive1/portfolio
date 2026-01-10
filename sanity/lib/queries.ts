import { groq } from "next-sanity";

export const HOMEPAGE_QUERY = groq`*[_type == "page" && title == "Home Page"]{
      "hero": pageBuilder[0],
      "about": pageBuilder[1]
    }`;

export const HOMEPAGE_PROJECT_QUERY = groq`*[_type == "project"]{
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
}`;

export const PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug][0]`;