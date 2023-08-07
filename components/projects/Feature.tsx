import { featureProps } from "@/types/componentProps";
import Image from "next/image";

export default function Feature({
  featimg,
  featTitle,
  children,
}: featureProps) {
  return (
    <article className="text-[var(--body-colour)] flex flex-col gap-3 md:flex-row-reverse">
      {/* Embed gif here */}
      <Image
        src={featimg}
        alt={`${featTitle} in action`}
        className="bg-gray-400 aspect-square rounded-xl md:h-64 md:sticky md:top-3 xl:top-6"
      />

      <section className="text-[var(--body-colour)] flex flex-col gap-2 md:gap-2 2xl:gap-3 md:w-[62.5%] md:flex-grow xl:w-[50%]">
        <h4 className="feat-title">{featTitle}</h4>
        <div className="content feat-desc flex flex-col gap-2">{children}</div>
      </section>
    </article>
  );
}
