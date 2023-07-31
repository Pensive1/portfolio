import SectionHeading from "@/components/SectionHeading";
import { considerations } from "@/types/componentProps";
import { PortableText } from "@portabletext/react";

export default function Considerations({ overview, factors }: considerations) {
  return (
    <section className="project__considerations">
      <SectionHeading iconType="info">UI Considerations</SectionHeading>

      {overview && (
        <div className="consideration-desc">
          <PortableText value={overview} />
        </div>
      )}

      {Object.keys(factors).length > 0 && (
        <ul className="consideration-points">
          {factors.map((factor, index) => (
            <li key={index}>
              <h5>{factor.uiFactorPointTitle}</h5>
              <PortableText value={factor.uiFactorPoints.description} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
