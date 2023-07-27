import SectionHeading from "@/components/SectionHeading";
import { getProject } from "@/sanity/sanity-utils";

type ProjectPage = {
  params: { project: string };
};

export default async function Project({ params }: ProjectPage) {
  const slug = params.project;
  const project = await getProject(slug);

  // If project is null, link to 404 page
  return (
    <main className="project">
      <div className="content-wrapper">
        <section className="overview">
          <div>{project.projectName}</div>
        </section>

        <section className="project__background">
          <SectionHeading iconType="route">Background</SectionHeading>
        </section>

        <section className="project__problems">
          <SectionHeading iconType="question">Problems</SectionHeading>
        </section>

        <section className="project__solutions">
          <SectionHeading iconType="wand">Solutions</SectionHeading>
        </section>

        <section className="project__considerations">
          <SectionHeading>UI Considerations</SectionHeading>
        </section>

        <section className="project__challenges">
          <SectionHeading iconType="sword">Challenges</SectionHeading>
        </section>

        <section className="project__challenges">
          <SectionHeading iconType="medal">Impact/Reception</SectionHeading>
        </section>
      </div>
    </main>
  );
}
