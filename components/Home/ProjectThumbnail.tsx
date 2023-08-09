import { ProjectThumbnailProps } from "@/types/componentProps";
import { sanityImg } from "@/sanity/sanity-utils";
import Button from "../Button";
import Image from "next/image";

export default function ProjectThumbnail({
  hero,
  imgSrc,
  title,
  desc,
  techList,
  liveUrl,
  demoUrl,
  caseStudyUrl,
}: ProjectThumbnailProps) {
  return (
    <article
      className={`rounded-md bg-[#e0e0e0] text-[#333333] col-span-full flex flex-col overflow-hidden ${
        hero ? "md:col-span-full md:flex-row" : "md:col-span-4"
      }`}
    >
      <Image
        src={imgSrc.asset._ref && sanityImg(imgSrc.asset._ref).url()}
        alt={imgSrc?.alt ? imgSrc.alt : `${title} project`}
        width={1280}
        height={720}
        className={`aspect-video w-full bg-gray-500 ${hero && "md:w-[62.5%]"}`}
      />

      <div className="flex flex-col gap-6 p-4">
        <section className="flex flex-col gap-4 flex-grow">
          <div className="flex flex-col gap-2">
            <h4 className="proj-title">{title}</h4>
            <p className="proj-desc">{desc}</p>
          </div>

          {techList && (
            <div className={`${!hero && "hidden"} flex flex-col gap-y-1`}>
              <h5 className="text-sm font-medium">Tech</h5>
              <ul className="flex gap-x-4 flex-wrap text-xs">
                {techList.length > 0 &&
                  techList.map((tech, index) => (
                    <li className="label tech-name" key={index}>
                      {tech}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </section>

        <div className={`flex gap-4 flex-col md:flex-row`}>
          {caseStudyUrl && (
            <Button href={`/projects/${caseStudyUrl}`} btnType="secondary">
              Details
            </Button>
          )}
          {demoUrl && (
            <Button href={demoUrl} linkType="external">
              View demo
            </Button>
          )}
          {liveUrl && (
            <Button href={liveUrl} linkType="external">
              See live
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
