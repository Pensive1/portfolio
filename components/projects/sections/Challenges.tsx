import SectionHeading from "@/components/SectionHeading";
import { challenges } from "@/types/componentProps";
import { PortableText } from "@portabletext/react";

export default function Challenges({ challengeList }: challenges) {
  return (
    <section className="project__challenges">
      <SectionHeading iconType="sword">Challenges</SectionHeading>

      <div className="flex flex-col gap-4">
        {challengeList.map((challenge, index) => (
          <div key={index}>
            <h5 className="text-[rgb(var(--txt-body-title))]">
              {challenge.challengeTitle}
            </h5>
            <div className="content flex flex-col gap-1 md:gap-2 2xl:gap-3">
              <PortableText value={challenge.challengeDesc} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
