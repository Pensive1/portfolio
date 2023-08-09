import { featureProps } from "@/types/componentProps";
import Image from "next/image";
import { sanityImg } from "@/sanity/sanity-utils";

export default function Feature({
  featimg,
  featTitle,
  children,
}: featureProps) {
  return (
    <article className="flex flex-col gap-3 md:flex-row-reverse">
      {/* Embed gif here */}
      <Image
        src={featimg?.asset._ref && sanityImg(featimg.asset._ref).url()}
        alt={`${featTitle} in action`}
        width={268}
        height={268}
        className="bg-gray-400 aspect-square rounded-xl md:h-64 md:sticky md:top-3 xl:top-6"
      />

      <section className="flex flex-col gap-2 md:gap-2 2xl:gap-3 md:w-[62.5%] md:flex-grow xl:w-[50%]">
        <h4 className="feat-title">{featTitle}</h4>
        <div className="content feat-desc flex flex-col gap-2">{children}</div>
      </section>
    </article>
  );
}
