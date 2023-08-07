import SectionHeading from "@/components/SectionHeading";
import project from "@/sanity/schemas/project-schema";
import { challenges } from "@/types/componentProps";
import { PortableText } from "@portabletext/react";

export default function Challenges({ challengeList }: challenges) {
  return (
    <section className="project__challenges">
      <SectionHeading iconType="sword">Challenges</SectionHeading>

      {/* map challenge list */}
      {challengeList.map((challenge, index) => (
        <div className="text-[var(--body-colour)]" key={index}>
          <h5 className="challenge-title">{challenge.challengeTitle}</h5>
          <PortableText value={challenge.challengeDesc} />
        </div>
      ))}
    </section>
  );
}
