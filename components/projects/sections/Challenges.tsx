import SectionHeading from "@/components/SectionHeading";
import project from "@/sanity/schemas/project-schema";
import { PortableText } from "@portabletext/react";

export default function Challenges({ challengeList }) {
  return (
    <section className="project__challenges">
      <SectionHeading iconType="sword">Challenges</SectionHeading>

      {/* map challenge list */}
      {challengeList.map((challenge) => (
        <div className="challenge">
          <h5 className="challenge-title">{challenge.challengeTitle}</h5>
          <PortableText value={challenge.challengeDesc} />
        </div>
      ))}
    </section>
  );
}
