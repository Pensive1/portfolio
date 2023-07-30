import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import IconLink from "@/components/IconLink";
import TechList from "./TechList";

export default function Overview({
  projectName,
  synopsis,
  heroImage,
  techStack,
  githubUrl,
  liveUrl,
}) {
  return (
    <section className="overview">
      <h1>{projectName}</h1>
      <h2>{synopsis}</h2>
      <div className="sub-wrapper">
        <Image src={heroImage} alt={`${projectName} feature image`} />

        {/* Make meta a sub component */}
        <section className="project-meta">
          <TechList techStack={techStack} />

          <div className="meta-actions">
            <div className="meta-actions__links">
              {githubUrl && (
                <IconLink iconType="github" href={githubUrl}>
                  GitHub
                </IconLink>
              )}
              {liveUrl && (
                <IconLink iconType="externalLink" href={liveUrl}>
                  Live
                </IconLink>
              )}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
