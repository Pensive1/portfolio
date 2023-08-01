import SectionHeading from "@/components/SectionHeading";
import { impact } from "@/types/componentProps";
import { PortableText } from "@portabletext/react";

export default function Impact({ type, content }: impact) {
  return (
    <section className="project__impact">
      <SectionHeading iconType="medal">{type}</SectionHeading>
      <PortableText value={content} />
    </section>
  );
}
