import SectionHeading from "@/components/SectionHeading";
import ProjectThumbnail from "@/components/home/ProjectThumbnail";
import { getProjects, getHomeContent } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();
  const { hero, about } = await getHomeContent();

  return (
    <>
      {Object.keys(hero).length > 0 && (
        <section className="col-span-full flex flex-col gap-2 rounded-md bg-slate-600 p-4">
          <h1>{hero.heading}</h1>
          <h2>{hero.tagline}</h2>
        </section>
      )}

      {Object.keys(about).length > 0 && (
        <section
          className="col-span-full flex flex-col gap-8 items-center md:flex-row-reverse"
          id="about"
        >
          <img
            src=""
            alt="me"
            className="bg-gray-400 rounded-full aspect-square w-48 md:w-[25%]"
          />

          <div className="flex flex-col items-center gap-4 md:w-[75%]">
            <div className="flex flex-col gap-2">
              <h4>About</h4>
              <p>{about.aboutContent}</p>
            </div>

            <div className="flex flex-col gap-2 w-[100%]">
              <h4>Skills</h4>
              <ul className="flex gap-x-4 flex-wrap">
                {about.skillList.length > 0 &&
                  about.skillList.map((skill: string, index: number) => (
                    <li key={index}>{skill}</li>
                  ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {projects.length > 0 && (
        <section className="col-span-full flex flex-col gap-4" id="projects">
          <h4>Projects</h4>

          <div className="grid grid-cols-4 gap-4 md:grid-cols-8 xl:grid-cols-12">
            {projects.map((project) => (
              <ProjectThumbnail
                key={project._id}
                hero={project.projDisplay}
                imgSrc={project.heroImage}
                title={project.projectName}
                desc={project.synopsis}
                techList={project.technologies}
                caseStudyUrl={project.slug}
                liveUrl={project.liveUrl}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
