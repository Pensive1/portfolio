import SectionHeading from "@/components/SectionHeading";
import { nestedSectionProps } from "@/types/componentProps";
import { PortableText } from "@portabletext/react";
import { sanityImg } from "@/sanity/sanity-utils";
import Image from "next/image";
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

                                {point.img?.asset._ref && (
                                    <figure
                                        className="flex flex-col gap-2"
                                    >
                                        {/* TODO: UPDATE SCHEMA TO INCLUDE ALT TEXT AND CAPTION WITH RICH TEXT (LINKS) */}
                                        <Image
                                            src={sanityImg(point.img?.asset._ref).fit("max").url()}
                                            alt={point.img?.alt ?? `Am image summarising ${point.title}`}
                                            width={1280}
                                            height={720}
                                            className="w-full h-auto max-h-[600px] object-contain"
                                        />

                                        {point.img.caption && (<figcaption
                                            className="text-xs italic text-center text-[rgb(var(--txt-body-title))] md:text-sm"
                                        >
                                            {/* A high level flowchart illustrating the upload process. (See full image) */}
                                            <PortableText value={point.img.caption} />
                                        </figcaption>)}
                                    </figure>
                                )}
                            </div>
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