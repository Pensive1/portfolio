import { groq } from "next-sanity";

export const HOMEPAGE_QUERY = groq`*[_type == "page" && title == "Home Page"][0]{
  "hero": pageBuilder[_type == "hero"][0],
  "about": pageBuilder[_type == "aboutSection"][0],
  "projects": pageBuilder[_type == "projectList"][0].projects[].project-> {
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
  }
}`;

export const PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug][0]`;