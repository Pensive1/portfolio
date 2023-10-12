import Image from "next/image";
import ProjectThumbnail from "../../components/home/ProjectThumbnail";
import { getProjects, getHomeContent, sanityImg } from "@/sanity/sanity-utils";
import SectionHeading from "@/components/SectionHeading";

export default async function Home() {
  const projects = await getProjects();
  const { hero, about } = await getHomeContent();

  return (
    <>
      {Object.keys(hero).length > 0 && (
        <section className="col-span-full flex flex-col gap-2 rounded-md p-4 text-center justify-center h-[40dvh]">
          <h1 className="text-[rgb(var(--txt-heading))]">{hero.heading}</h1>
          <h2 className="text-[rgb(var(--txt-headline))]">{hero.tagline}</h2>
        </section>
      )}

      {Object.keys(about).length > 0 && (
        <section className="col-span-full" id="about">
          <SectionHeading showIcon={false}>About</SectionHeading>
          <div className="rounded-2xl bg-[rgba(0,0,0,.05)] p-4 flex flex-col gap-8 items-center md:flex-row-reverse">
            <Image
              src={
                about.aboutImage.asset._ref &&
                sanityImg(about.aboutImage.asset._ref).url()
              }
              alt={
                about.aboutImage.aboutImageAlt
                  ? about.aboutImage.aboutImageAlt
                  : "Headshot of Richard Acquaye"
              }
              width={276}
              height={276}
              priority={true}
              className="bg-gray-400 rounded-full aspect-square w-48 md:w-[25%]"
            />
            <div className="flex flex-col items-center text-center gap-6 md:w-[75%] md:text-left justify-around">
              <div className="flex flex-col gap-2">
                <p>{about.aboutContent}</p>
              </div>
              <div className="flex flex-col gap-4 w-[100%]">
                <h5 className="text-[rgb(var(--txt-section-title))]">Skills</h5>
                <ul className="flex gap-2 flex-wrap text-[rgb(var(--txt-list-item))] justify-center md:justify-start">
                  {about.skillList.length > 0 &&
                    about.skillList.map((skill: string, index: number) => (
                      <li
                        key={index}
                        className="bg-[rgba(var(--icn-fill))]/[.1] text-[rgba(var(--icn-fill))]/[.85] px-2 rounded-xl"
                      >
                        {skill}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {projects.length > 0 && (
        <section className="col-span-full flex flex-col gap-4" id="projects">
          <SectionHeading showIcon={false}>Projects</SectionHeading>

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
                demoUrl={project.demoUrl}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
