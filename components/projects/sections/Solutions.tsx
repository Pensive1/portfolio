import SectionHeading from "@/components/SectionHeading";
import Feature from "./Feature";
import { PortableText } from "@portabletext/react";
import { solutions } from "@/types/componentProps";

export default function Solutions({ intro, solutions, summary }: solutions) {
  return (
    <section className="project__solutions">
      <SectionHeading iconType="wand">Solutions</SectionHeading>

      <div className="section-content flex flex-col gap-8 md:gap-10">
        {intro && (
          <div className="flex flex-col gap-2">
            <PortableText value={intro} />
          </div>
        )}

        <div className="flex flex-col gap-8">
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

        {summary && (
          <div className="solution_summary flex flex-col gap-2">
            <PortableText value={summary} />
          </div>
        )}
      </div>
    </section>
  );
}
