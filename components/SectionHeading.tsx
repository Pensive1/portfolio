"use-client";
import Question from "./icons/icn_question";

export default function SectionHeading(
  showIcon: boolean = true,
  title: string
) {
  return (
    <div className="section-heading">
      <Question size={16} />
      <h3>{title}</h3>
    </div>
  );
  {
    /* replace with children */
  }
}
