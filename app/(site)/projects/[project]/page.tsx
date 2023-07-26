import { getProject } from "@/sanity/sanity-utils";

type ProjectPage = {
  params: { project: string };
};

export default async function Project({ params }: ProjectPage) {
  const slug = params.project;
  const project = await getProject(slug);

  // If project is null, link to 404 page
  return <div>{project.projectName}</div>;
}
