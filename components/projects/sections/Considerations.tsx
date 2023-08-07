import SectionHeading from "@/components/SectionHeading";
import { considerations } from "@/types/componentProps";
import { PortableText } from "@portabletext/react";

export default function Considerations({ overview, factors }: considerations) {
  return (
    <section className="project__considerations">
      <SectionHeading iconType="info">UI Considerations</SectionHeading>

      {overview && (
        <div className="content text-[var(--body-colour)] flex flex-col pb-6 gap-1 md:gap-2 2xl:gap-3">
          <PortableText value={overview} />
        </div>
      )}

      {Object.keys(factors).length > 0 && (
        <ul className="text-[var(--body-colour)] flex flex-col gap-4">
          {factors.map((factor, index) => (
            <li key={index}>
              <h5>{factor.uiFactorPointTitle}</h5>
              <div className="content text-[var(--body-colour)] flex flex-col gap-1 md:gap-2 2xl:gap-3">
                <PortableText value={factor.uiFactorPoints.description} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
