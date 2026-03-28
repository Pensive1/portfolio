import { problemPointProps } from "@/types/componentProps";
import Image from "next/image";
import { sanityImg } from "@/sanity/sanity-utils";

export default function ProblemPoint({
  pointTitle,
  probAlt,
  probImg,
  children,
}: problemPointProps) {
  return (
    <article className="col-span-full md:col-span-4 xl:col-span-5 flex flex-col gap-2">
      {probImg && <Image
        src={sanityImg(probImg).url()}
        alt={probAlt ?? ''}
        width={160}
        height={90}
        className="bg-gray-500 rounded-md aspect-video w-full"
      />}
      <section className="flex flex-col gap-2">
        <p className="text-[rgb(var(--txt-body-title))] font-semibold">{pointTitle}</p>
        <p className="prob-desc">{children}</p>
      </section>
    </article>
  );
}
