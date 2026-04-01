import { featureProps } from "@/types/componentProps";
import Image from "next/image";
import { sanityImg } from "@/sanity/sanity-utils";

export default function Feature({
  featimg,
  featTitle,
  children,
}: featureProps) {
  return (
    <article className="point flex flex-col gap-3 md:flex-row-reverse">
      {/* TODO: Embed gif here */}
      {featimg && <div className="w-full flex justify-center md:w-fit">
        <Image
          src={featimg?.asset._ref && sanityImg(featimg.asset._ref).url()}
          alt={`${featTitle} in action`}
          width={268}
          height={268}
          className="aspect-square w-auto rounded-xl md:h-64 md:sticky md:top-3 xl:top-6"
        />
      </div>}

      <section className="flex flex-col md:gap-2 2xl:gap-3 md:w-[62.5%] md:flex-grow xl:w-[50%]">
        <h4 className="feat-title text-[rgb(var(--txt-body-title))] !mt-3 md:!mt-0">
          {featTitle}
        </h4>
        <div className="feat-desc flex flex-col gap-1">{children}</div>
      </section>
    </article>
  );
}
