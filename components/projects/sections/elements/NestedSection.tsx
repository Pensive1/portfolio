import SectionHeading from "@/components/SectionHeading";
import { nestedSectionProps } from "@/types/componentProps";
import { PortableText } from "@portabletext/react";
import Summary from "./Summary";

/**
 * Transforms text to a lowercase hyphenated word
 * @param txt - Incoming text
 */
const lowerHyphenClass = (txt: string) => txt
    .toLowerCase()
    .replaceAll(" ", "-");

/**
 *  Creates a section with sub-sections.
 * 
 *  Each nested section consists of a subtitle (h3) and text body.
 */
export default function NestedSection({ iconType, title, subSectionData, summaryData }: nestedSectionProps) {
    return (
        <section className={`project__${lowerHyphenClass(title)}`}>
            <SectionHeading iconType={iconType}>
                {title}
            </SectionHeading>

            <div className="flex flex-col gap-y-7">
                <div className="section-content subsection">
                    {subSectionData.length && subSectionData.map(
                        point => (
                            <div
                                key={point._key}
                                className="point"
                            >
                                <h4>{point.title}</h4>
                                <PortableText value={point.desc} />
                            </div>
                            // TODO: RENDER POINT IMAGE IF IT EXISTS
                        ))
                    }
                </div>
                {summaryData && <Summary
                    sectionTitle={title}
                    classTitle={lowerHyphenClass(title)}
                    data={summaryData} />
                }
            </div>
        </section>
    );
}