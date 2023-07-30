import { PortableText } from "@portabletext/react";
import { getProject } from "@/sanity/sanity-utils";
import SectionHeading from "@/components/SectionHeading";
import IconLink from "@/components/IconLink";
import ProblemPoint from "@/components/projects/ProblemPoint";
import Feature from "@/components/projects/Feature";
import Image from "next/image";
import { ProjectPage } from "@/types/project";
import Overview from "@/components/projects/sections/Overview";

export default async function Project({
  params,
}: {
  params: { slug: string };
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
          githubUrl={project.githubUrl}
          liveUrl={project.liveUrl}
        />

        <section className="project__background">
          <SectionHeading iconType="route">Background</SectionHeading>
          <PortableText value={project.bgContent} />
        </section>

        <section className="project__problems">
          <SectionHeading iconType="question">Problems</SectionHeading>

          {/* map all problems here */}
          <ProblemPoint
            pointTitle="point 1"
            probImg=""
            probAlt="Problem alt desc"
          >
            Point description...
          </ProblemPoint>
        </section>

        <section className="project__solutions">
          <SectionHeading iconType="wand">Solutions</SectionHeading>

          {/* map all problems here */}
          <Feature featTitle="Feature 1" featimg="">
            <PortableText value={project.solutionOutline} />
          </Feature>
        </section>

        <section className="project__considerations">
          <SectionHeading iconType="info">UI Considerations</SectionHeading>
          {/* uiFactorDesc */}
          <div className="consideration-desc">
            <PortableText value={project.uiFactorDesc} />
          </div>

          {/* uiFactors */}
          <ul className="consideration-points">
            {/* map all points: project.uiFactors */}
            <li>
              <h5>{project.uiFactors[0].uiFactorPointTitle}</h5>
              <PortableText
                value={project.uiFactors[0].uiFactorPoints.description}
              />
            </li>
          </ul>
        </section>

        <section className="project__challenges">
          <SectionHeading iconType="sword">Challenges</SectionHeading>
          {/* map challenge list */}
          <div className="challenge">
            <h5 className="challenge-title">
              {project.challengeList[0].challengeTitle}
            </h5>
            <PortableText value={project.challengeList[0].challengeDesc} />
          </div>
        </section>

        <section className="project__impact">
          <SectionHeading iconType="medal">{project.impactType}</SectionHeading>
          <PortableText value={project.impactContent} />
        </section>
      </div>
    </main>
  );
}
