import SectionHeading from "@/components/SectionHeading";
import ProjectThumbnail from "@/components/home/ProjectThumbnail";
import { getProjects, getHomeContent } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();
  const { hero, about } = await getHomeContent();

  return (
    <main>
      {Object.keys(hero).length > 0 && (
        <section className="hero">
          <h1>{hero.heading}</h1>
          <h2>{hero.tagline}</h2>
        </section>
      )}

      {Object.keys(about).length > 0 && (
        <section className="about">
          <img src="" alt="me" />

          <div className="about-txt">
            <h4>About</h4>
            <p>{about.aboutContent}</p>
          </div>

          <div className="about-skills">
            <h4>Skills</h4>
            <ul>
              {about.skillList.length > 0 &&
                about.skillList.map((skill: string, index: number) => (
                  <li key={index}>{skill}</li>
                ))}
            </ul>
          </div>
        </section>
      )}

      {projects.length > 0 && (
        <section className="projects">
          <SectionHeading showIcon={true}>Projects</SectionHeading>
          {projects.map((project) => (
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
      )}
    </main>
  );
}
