import SectionHeading from "@/components/SectionHeading";
import { impact } from "@/types/componentProps";
import { PortableText } from "@portabletext/react";

export default function Impact({ type, content }: impact) {
  return (
    <section className="project__impact">
      <SectionHeading iconType="medal">{type}</SectionHeading>

      <div className="content flex flex-col gap-1 md:gap-2 2xl:gap-3">
        <PortableText value={content} />
      </div>
    </section>
  );
}
