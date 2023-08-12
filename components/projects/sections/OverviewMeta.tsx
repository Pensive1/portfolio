import IconLink from "@/components/IconLink";
import TechList from "./TechList";
import { projectMeta } from "@/types/componentProps";

export default function OverviewMeta({
  techStack,
  gitHubUrl,
  liveUrl,
  demoUrl,
}: projectMeta) {
  return (
    <section className="border border-solid border-[rgba(var(--border-meta))] rounded-lg flex flex-col gap-4 overflow-hidden md:rounded-xl md:flex-row">
      <TechList techStack={techStack} />

      <div className="bg-[rgba(var(--action-bg-fill))] flex justify-center py-2 border-t border-solid border-[rgba(var(--border-meta))] md:py-4 md:w-[25%] md:items-center md:border-t-0 md:border-l xl:w-[16.6%]">
        <div className="flex justify-around w-full md:flex-col md:justify-center md:gap-4 md:w-fit">
          {gitHubUrl && (
            <IconLink iconType="github" href={gitHubUrl}>
              GitHub
            </IconLink>
          )}
          {demoUrl && (
            <IconLink iconType="video" href={demoUrl}>
              Demo
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
