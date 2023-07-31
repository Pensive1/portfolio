import Image from "next/image";
import { projectOverview } from "@/types/componentProps";
import OverviewMeta from "./OverviewMeta";

export default function Overview({
  projectName,
  synopsis,
  heroImage,
  techStack,
  gitHubUrl,
  liveUrl,
}: projectOverview) {
  return (
    <section className="overview">
      <h1>{projectName}</h1>
      <h2>{synopsis}</h2>
      <div className="sub-wrapper">
        <Image src={heroImage} alt={`${projectName} feature image`} />
        <OverviewMeta
          techStack={techStack}
          gitHubUrl={gitHubUrl}
          liveUrl={liveUrl}
        />
      </div>
    </section>
  );
}
