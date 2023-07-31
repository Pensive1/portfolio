import SectionHeading from "@/components/SectionHeading";
import Feature from "../Feature";
import { PortableText } from "@portabletext/react";

export default function Solutions({ outline, solutions }) {
  return (
    <section className="project__solutions">
      <SectionHeading iconType="wand">Solutions</SectionHeading>

      {outline && (
        <div className="solutions_outline">
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
