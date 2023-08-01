import SectionHeading from "@/components/SectionHeading";
import ProblemPoint from "../ProblemPoint";
import { PortableText } from "@portabletext/react";
import { problems } from "@/types/componentProps";

export default function Problems({ content, conclusion }: problems) {
  return (
    <section className="project__problems">
      <SectionHeading iconType="question">Problems</SectionHeading>

      <div className="problem-points">
        {content.map((point, index) => (
          <ProblemPoint
            key={index}
            pointTitle={point.title}
            probImg={point.problemImg}
            probAlt="Problem alt desc"
          >
            {point.problemDesc}
          </ProblemPoint>
        ))}
      </div>

      {conclusion && (
        <div className="problem-conclusion">
          <PortableText value={conclusion} />
        </div>
      )}
    </section>
  );
}
