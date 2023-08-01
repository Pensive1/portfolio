import IconLink from "@/components/IconLink";
import TechList from "./TechList";
import { projectMeta } from "@/types/componentProps";

export default function OverviewMeta({
  techStack,
  gitHubUrl,
  liveUrl,
}: projectMeta) {
  return (
    <section className="project-meta">
      <TechList techStack={techStack} />

      <div className="meta-actions">
        <div className="meta-actions__links">
          {gitHubUrl && (
            <IconLink iconType="github" href={gitHubUrl}>
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
  );
}
