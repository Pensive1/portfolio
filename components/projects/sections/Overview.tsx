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
    <section className="flex flex-col md:items-center gap-6 pb-4 md:gap-10 md:pb-5 xl:pb-14 xl:gap-14 2xl:pb-16">
      <div className="w-full flex flex-col gap-4 xl:gap-5">
        <h1>{projectName}</h1>
        <h2>{synopsis}</h2>
      </div>

      <div className="flex flex-col gap-4 xl:w-[83.33%]">
        <Image
          src={heroImage}
          alt={`${projectName} feature image`}
          className="aspect-video w-full bg-gray-400 rounded-lg md:rounded-xl xl:rounded-2xl 2xl:rounded-3xl"
        />
        <OverviewMeta
          techStack={techStack}
          gitHubUrl={gitHubUrl}
          liveUrl={liveUrl}
        />
      </div>
    </section>
  );
}
