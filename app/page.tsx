"use-client";
import SectionHeading from "@/components/SectionHeading";
import ProjectThumbnail from "@/components/home/ProjectThumbnail";
import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main>
      <section className="hero">
        <h1>Title</h1>
        <h2>lorem ipsum</h2>
      </section>

      <section className="about">
        <img src="" alt="me" />

        <div className="about-txt">
          <h4>About</h4>
          <p>lorem ipsum</p>
        </div>
      </section>

      <section className="projects">
        <SectionHeading showIcon={true}>Projects</SectionHeading>
        {projects &&
          projects.map((project) => (
            <ProjectThumbnail
              key={project._id}
              thumbType={project.projDisplay}
              imgSrc={project.heroImage}
              title={project.projectName}
              desc={project.synopsis}
              techList={project.technologies}
              caseStudyUrl={project.slug}
              liveUrl={project.liveUrl}
            />
          ))}
      </section>
    </main>
  );
}
