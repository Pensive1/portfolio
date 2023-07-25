"use-client";
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
        {projects &&
          projects.map((project) => (
            // <article key={project._id}>{project.proname}</article>
            <ProjectThumbnail
              key={project._id}
              thumbType={"hero"}
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
