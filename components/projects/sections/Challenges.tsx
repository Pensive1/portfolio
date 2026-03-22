import SectionHeading from "@/components/SectionHeading";
import { challenges } from "@/types/componentProps";
import { PortableText } from "@portabletext/react";

export default function Challenges({ challengeList }: challenges) {
  return (
    <section className="project__challenges">
      <SectionHeading iconType="sword">Project Challenges</SectionHeading>

      <div className="section-content subsection">
        {challengeList.map((challenge) => (
          <div key={challenge._key} className="point">
            <h4 className="text-[rgb(var(--txt-body-title))]">
              {challenge.challengeTitle}
            </h4>
            <div className="flex flex-col gap-1 md:gap-2 2xl:gap-3">
              <PortableText value={challenge.challengeDesc} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
