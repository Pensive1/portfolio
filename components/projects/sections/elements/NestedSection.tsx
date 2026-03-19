import Image from "next/image"
import SectionHeading from "@/components/SectionHeading";
import { sanityImg } from "@/sanity/sanity-utils";
import { nestedSectionProps } from "@/types/componentProps";
import { PortableText } from "@portabletext/react";
import { StandardImage } from "@/types/data";
import { PortableTextBlock } from "next-sanity";

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
        <section className="project__tech-approach">
            <SectionHeading iconType={iconType}>
                {title}
            </SectionHeading>

            {subSectionData.length && subSectionData.map(
                point => (
                    <div
                        key={point._key}
                        className="section-content tech-approach__point"
                    >
                        <h4>{point.title}</h4>
                        <PortableText value={point.desc} />
                    </div>
                ))
            }

            {/* Render summary image OR text */}
            {summaryData && isSummaryAnImg(summaryData)
                ? (
                    <div className="tech-approach__summary">
                        <Image
                            src={sanityImg(summaryData.asset._ref).fit("max").url()}
                            alt={summaryData?.alt ?? `A image depicting the ${title}`}
                            width={1280}
                            height={720}
                        />
                    </div>
                ) : (
                    // TODO: PROVIDE PADDING ABOVE
                    <div className="tech-approach__summary">
                        <PortableText value={summaryData as PortableTextBlock[]} />
                    </div>
                )}
        </section>
    );
}