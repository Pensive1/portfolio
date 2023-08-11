import Image from "next/image";
import { sanityImg } from "@/sanity/sanity-utils";
import { projectOverview } from "@/types/componentProps";
import OverviewMeta from "./OverviewMeta";

export default function Overview({
  projectName,
  synopsis,
  heroImage,
  techStack,
  gitHubUrl,
  liveUrl,
  demoUrl,
}: projectOverview) {
  // console.log(sanityImg(heroImage.asset._ref).url());
  return (
    <section className="flex flex-col w-full md:items-center gap-6 pb-4 md:gap-10 md:pb-5 xl:pb-14 xl:gap-14 2xl:pb-16">
      <div className="w-full flex flex-col gap-4 xl:gap-5">
        <h1 className="text-[rgb(var(--txt-heading))]">{projectName}</h1>
        <h2 className="text-[rgb(var(--txt-headline))]">{synopsis}</h2>
      </div>

      <div className="flex flex-col gap-4 w-full xl:w-[83.33%]">
        <Image
          alt={heroImage?.alt ? heroImage.alt : `${projectName} feature image`}
          src={
            heroImage?.asset._ref &&
            sanityImg(heroImage.asset._ref).fit("max").url()
          }
          width={1280}
          height={720}
          sizes="100vw"
          loading="lazy"
          className="aspect-video w-full bg-gray-400 rounded-lg md:rounded-xl xl:rounded-2xl 2xl:rounded-3xl"
        />
        <OverviewMeta
          techStack={techStack}
          gitHubUrl={gitHubUrl}
          liveUrl={liveUrl}
          demoUrl={demoUrl}
        />
      </div>
    </section>
  );
}
