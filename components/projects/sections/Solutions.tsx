import SectionHeading from "@/components/SectionHeading";
import Feature from "../Feature";
import { PortableText } from "@portabletext/react";
import { solutions } from "@/types/componentProps";

export default function Solutions({ outline, solutions }: solutions) {
  return (
    <section className="project__solutions">
      <SectionHeading iconType="wand">Solutions</SectionHeading>

      {outline && (
        <div className="text-[var(--body-colour)]">
          <PortableText value={outline} />
        </div>
      )}

      {solutions.map((solution) => (
        <Feature
          featTitle={solution.featureTitle}
          featimg={solution.featureImg}
        >
          <PortableText value={solution.featureDesc} />
        </Feature>
      ))}
    </section>
  );
}
