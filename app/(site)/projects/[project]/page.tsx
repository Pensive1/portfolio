import { getProject } from "@/sanity/sanity-utils";
import { ProjectPage } from "@/types/data";
import { PortableText } from "@portabletext/react";
import SectionHeading from "@/components/SectionHeading";
import Overview from "@/components/projects/sections/Overview";
import Problems from "@/components/projects/sections/Problems";
import Solutions from "@/components/projects/sections/Solutions";
import Considerations from "@/components/projects/sections/Considerations";
import Challenges from "@/components/projects/sections/Challenges";
import Impact from "@/components/projects/sections/Impact";

export default async function Project({
  params,
}: {
  params: { project: string };
}) {
  const slug = params.project;
  const project: ProjectPage = await getProject(slug);

  // If project is null, link to 404 page
  return (
    <main className="project">
      <div className="content-wrapper">
        <Overview
          projectName={project.projectName}
          synopsis={project.synopsis}
          heroImage={project.heroImage}
          techStack={project.technologies}
          gitHubUrl={project.gitHubUrl}
          liveUrl={project.liveUrl}
        />

        {project.bgContent && (
          <section className="project__background">
            <SectionHeading iconType="route">Background</SectionHeading>
            <PortableText value={project.bgContent} />
          </section>
        )}

        {project.problemContent && (
          <Problems
            content={project.problemContent}
            conclusion={project.problemConclusion}
          />
        )}

        {/* resolve ts issues */}
        {project.solutions && (
          <Solutions
            solutions={project.solutions}
            outline={project.solutionOutline}
          />
        )}

        {/* resolve ts issues */}
        {(project.uiFactorDesc ||
          (project.uiFactors && Object.keys(project.uiFactors).length > 0)) && (
          <Considerations
            overview={project.uiFactorDesc}
            factors={project.uiFactors}
          />
        )}

        {/* resolve ts issues */}
        {project.challengeList &&
          Object.keys(project.challengeList).length > 0 && (
            <Challenges challengeList={project.challengeList} />
          )}

        {/* resolve ts issues */}
        {project.impactType && project.impactContent && (
          <Impact type={project.impactType} content={project.impactContent} />
        )}
      </div>
    </main>
  );
}
