import SectionHeading from "@/components/SectionHeading";
import { techApproachProps } from "@/types/componentProps";
import { PortableText } from "@portabletext/react";

function TechnicalApproach({ approaches, summary }: techApproachProps) {
    return (
        <section className="project__tech-approach">
            <SectionHeading iconType="question">
                Technical Approach
            </SectionHeading>

            {approaches.length && approaches.map(
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

            {summary && (
                // TODO: PROVIDE PADDING ABOVE
                <div className="tech-approach__summary">
                    <PortableText value={summary} />
                </div>
            )}
        </section>
    )
}

export default TechnicalApproach;