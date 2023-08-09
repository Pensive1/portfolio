import SectionHeading from "@/components/SectionHeading";
import ProblemPoint from "../ProblemPoint";
import { PortableText } from "@portabletext/react";
import { problems } from "@/types/componentProps";

export default function Problems({ content, conclusion }: problems) {
  return (
    <section className="project__problems">
      <SectionHeading iconType="question">Problems</SectionHeading>

      <div className="flex flex-col gap-6">
        <div className="gap-y-6 grid grid-cols-4 md:grid-cols-8 xl:grid-cols-10 md:gap-4 xl:gap-6">
          {content.map((point, index) => (
            <ProblemPoint
              key={index}
              pointTitle={`${index + 1}. ${point.title}`}
              probImg={point.problemImg.asset._ref}
              probAlt="Problem alt desc"
            >
              {point.problemDesc}
            </ProblemPoint>
          ))}
        </div>
        {conclusion && (
          <div className="content flex flex-col gap-1 md:gap-2 2xl:gap-3">
            <PortableText value={conclusion} />
          </div>
        )}
      </div>
    </section>
  );
}
