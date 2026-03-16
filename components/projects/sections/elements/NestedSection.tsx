import SectionHeading from "@/components/SectionHeading";
import { nestedSectionProps } from "@/types/componentProps";
import { PortableText } from "@portabletext/react";

export default function NestedSection({ iconType, title, subSectionData, summaryData }: nestedSectionProps) {
    return (
        <section className="project__tech-approach">
            <SectionHeading iconType={iconType}>
                {title}
            </SectionHeading>

            {subSectionData.length && subSectionData.map(
                point => (
                    <div
                        key={point._key}
                        className="content tech-approach__point"
                    >
                        <h3>{point.title}</h3>
                        <PortableText value={point.desc} />
                    </div>
                ))
            }

            {summaryData && (
                // TODO: PROVIDE PADDING ABOVE
                <div className="tech-approach__summary">
                    <PortableText value={summaryData} />
                </div>
            )}
        </section>
    );
}