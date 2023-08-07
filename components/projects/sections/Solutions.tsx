import SectionHeading from "@/components/SectionHeading";
import Feature from "../Feature";
import { PortableText } from "@portabletext/react";
import { solutions } from "@/types/componentProps";

export default function Solutions({ outline, solutions }: solutions) {
  return (
    <section className="project__solutions">
      <SectionHeading iconType="wand">Solutions</SectionHeading>

      <div className="flex flex-col gap-8 md:gap-10">
        {outline && (
          <div className="content text-[var(--body-colour)] flex flex-col gap-1 md:gap-2 2xl:gap-3">
            <PortableText value={outline} />
          </div>
        )}
        <div className="flex flex-col gap-12 md:gap-16 xl:gap-24">
          {solutions.map((solution, index) => (
            <Feature
              key={index}
              featTitle={solution.featureTitle}
              featimg={solution.featureImg}
            >
              <PortableText value={solution.featureDesc} />
            </Feature>
          ))}
        </div>
      </div>
    </section>
  );
}
