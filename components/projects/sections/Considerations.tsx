import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import { considerations } from "@/types/componentProps";
import { PortableText } from "@portabletext/react";
import { sanityImg } from "@/sanity/sanity-utils";

export default function Considerations({ overview, factors }: considerations) {
  return (
    <section className="project__considerations">
      <SectionHeading iconType="craft">UI Considerations</SectionHeading>

      {overview && (
        <div className="section-content pb-6">
          <PortableText value={overview} />
        </div>
      )}

      {Object.keys(factors).length > 0 &&
        factors.map((factor) => (
          <div
            key={factor._key}
            className="section-content"
          >
            <h4 className="text-[rgb(var(--txt-body-title))]">
              {factor.uiFactorPointTitle}
            </h4>
            <PortableText value={factor.uiFactorPoints.description} />

            {factor.uiFactorPoints.image?.asset._ref && (<Image
              src={sanityImg(factor.uiFactorPoints.image.asset._ref).fit("max").url()}
              alt={factor.uiFactorPoints.image.alt ?? `Am image summarising ${factor.uiFactorPointTitle}`}
              width={1280}
              height={720}
              className="w-full h-auto max-h-[600px] object-contain"
            />)}
          </div>
        ))
      }
    </section>
  );
}
