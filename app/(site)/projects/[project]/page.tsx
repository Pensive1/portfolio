import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/sanity-utils";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { ProjectPage } from "@/types/data";
import { PortableText } from "@portabletext/react";

import SectionHeading from "@/components/SectionHeading";
import Overview from "@/components/projects/sections/Overview";
import Problems from "@/components/projects/sections/Problems";
import Solutions from "@/components/projects/sections/Solutions";
import Considerations from "@/components/projects/sections/Considerations";
import Challenges from "@/components/projects/sections/Challenges";
import Impact from "@/components/projects/sections/Impact";
import StandardSection from "@/components/projects/sections/StandardSection";

export default async function Project({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project: slug } = await params;
  const project: ProjectPage = await sanityFetch({
    query: PROJECT_QUERY,
    params: { slug },
  });

  // If project is null, link to 404 page
  if (!project) {
    notFound();
  }

  console.log(project);
  return (
    <>
      <div className="text-[var(--body-colour)] col-span-full flex flex-col items-center gap-12 md:gap-14 2xl:gap-16">
        <Overview
          projectName={project.projectName}
          synopsis={project.synopsis}
          heroImage={project.heroImage}
          techStack={project.technologies}
          gitHubUrl={project.gitHubUrl}
          liveUrl={project.liveUrl}
          demoUrl={project.demoUrl}
        />

        <div className="xl:w-[83.33%] flex flex-col gap-12 md:gap-14 2xl:gap-16">
          {project.bgContent && (
            <section>
              <SectionHeading iconType="route">Background</SectionHeading>
              <div className="content flex flex-col gap-1 md:gap-2 2xl:gap-3)]">
                <PortableText value={project.bgContent} />
              </div>
            </section>
          )}

          {project.projBrief && (
            <StandardSection
              sectionIcon="question"
              sectionTitle="The Brief"
              textContent={project.projBrief}
            />
          )}

          {project.problemContent && (
            <Problems
              content={project.problemContent}
              conclusion={project.problemConclusion}
            />
          )}

          {project.solutions && (
            <Solutions
              outline={project.solutionOutline}
              solutions={project.solutions}
            />
          )}

          {(project.uiFactorDesc ||
            (project.uiFactors &&
              Object.keys(project.uiFactors).length > 0)) && (
              <Considerations
                overview={project.uiFactorDesc}
                factors={project.uiFactors}
              />
            )}

          {project.challengeList &&
            Object.keys(project.challengeList).length > 0 && (
              <Challenges challengeList={project.challengeList} />
            )
          }

          {project.impactType && project.impactContent && (
            <Impact type={project.impactType} content={project.impactContent} />
          )}
        </div>
      </div>
    </>
  );
}
