"use-client";

import { problemPointProps } from "@/types/componentProps";

export default function ProblemPoint({
  pointTitle,
  probAlt,
  probImg,
  children,
}: problemPointProps) {
  return (
    <article className="problem-item">
      <img src={probImg} alt={probAlt} className="prob-img" />
      <section className="prob-txt">
        <h5 className="prob-point__num">{pointTitle}</h5>
        <p className="prob-desc">{children}</p>
      </section>
    </article>
  );
}
