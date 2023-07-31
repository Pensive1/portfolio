import SectionHeading from "@/components/SectionHeading";
import project from "@/sanity/schemas/project-schema";
import { PortableText } from "@portabletext/react";

export default function Impact({ type, content }) {
  return (
    <section className="project__impact">
      <SectionHeading iconType="medal">{type}</SectionHeading>
      <PortableText value={content} />
    </section>
  );
}
