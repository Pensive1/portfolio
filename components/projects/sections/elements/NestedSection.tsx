import Image from "next/image"
import SectionHeading from "@/components/SectionHeading";
import { sanityImg } from "@/sanity/sanity-utils";
import { nestedSectionProps } from "@/types/componentProps";
import { PortableText } from "@portabletext/react";
import { StandardImage } from "@/types/data";
import { PortableTextBlock } from "next-sanity";

/**
 * Transforms text to a lowercase hyphenated word
 * @param txt - Incoming text
 * @returns {string}
 */
const lowerHyphenClass = (txt: string) =>
    txt.toLowerCase()
        .replaceAll(" ", "-");

/**
 *  Creates a section with sub-sections.
 * 
 *  Each nested section consists of a subtitle (h3) and text body.
 */
export default function NestedSection({ iconType, title, subSectionData, summaryData }: nestedSectionProps) {

    /**
     * Checks whether the incoming data is an image.
     * @param data 
     * @returns boolean
     */
    function isSummaryAnImg(data: nestedSectionProps["summaryData"]): data is StandardImage {
        return !Array.isArray(data) && (data as StandardImage)._type === "image";
    }

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
                {summaryData && isSummaryAnImg(summaryData)
                    ? (
                        <div className="section-content tech-approach__summary">
                            <Image
                                src={sanityImg(summaryData.asset._ref).fit("max").url()}
                                alt={summaryData?.alt ?? `A image depicting the ${title}`}
                                width={1280}
                                height={720}
                            />
                        </div>
                    ) : (
                        // TODO: PROVIDE PADDING ABOVE
                        <div className="section-content tech-approach__summary">
                            <PortableText value={summaryData as PortableTextBlock[]} />
                        </div>
                    )}
            </div>
        </section>
    );
}