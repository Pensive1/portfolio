import { ProjectThumbnailProps } from "@/types/componentProps";
import { sanityImg } from "@/sanity/sanity-utils";
import Button from "../Button";
import Image from "next/image";
import Link from "next/link";

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
      className={`rounded-md bg-[rgb(var(--container-fill))] col-span-full flex flex-col overflow-hidden ${
        hero
          ? "md:col-span-full md:grid md:grid-cols-8 md:gap-x-4 xl:grid-cols-10 xl:gap-x-6"
          : "md:col-span-4"
      }`}
    >
      <Link
        href={`/projects/${caseStudyUrl}`}
        className={`bg-gray-500 aspect-video md:aspect-auto md:flex ${
          hero && "md:col-span-4 xl:col-span-5"
        }`}
      >
        <Image
          src={imgSrc.asset._ref && sanityImg(imgSrc.asset._ref).url()}
          alt={imgSrc?.alt ? imgSrc.alt : `${title} project`}
          width={1280}
          height={720}
          className={`md:object-cover`}
        />
      </Link>

      <div
        className={`flex flex-col gap-6 p-4 ${
          hero && "md:col-span-4 md:pl-0 md:pr-4 xl:col-span-5 xl:pl-0 xl:pr-6"
        }`}
      >
        <section className="flex flex-col gap-4 flex-grow">
          <div className="flex flex-col gap-2">
            <h4 className="text-[rgb(var(--txt-section-title))]">{title}</h4>
            <p className="text-[rgb(var(--txt-body))]">{desc}</p>
          </div>

          {techList && (
            <div className={`${!hero && "hidden"} flex flex-col gap-y-1`}>
              <h5 className="text-sm font-medium text-[rgb(var(--txt-section-title))]">
                Tech
              </h5>
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

        <div className={"flex gap-4 flex-col md:flex-row-reverse"}>
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
          {caseStudyUrl && (
            <Button href={`/projects/${caseStudyUrl}`} btnType="secondary">
              Case study
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
