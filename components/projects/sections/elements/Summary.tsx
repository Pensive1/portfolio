import Image from "next/image"
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "next-sanity"
import { StandardImage } from "@/types/data";
import { SummaryProps } from "@/types/componentProps";
import { sanityImg } from "@/sanity/sanity-utils";


export default function Summary({ sectionTitle, data, classTitle }: SummaryProps) {
    /**
     * Checks whether the incoming data is an image.
     * @param data 
     * @returns boolean
     */
    function isSummaryAnImg(data: SummaryProps["data"]): data is StandardImage {
        return !Array.isArray(data) && (data as StandardImage)._type === "image";
    }

    if (isSummaryAnImg(data)) return (
        <div className={`section-content ${classTitle}__summary`}>
            <Image
                src={sanityImg(data.asset._ref).fit("max").url()}
                alt={data.alt ?? `A image summarizing the ${sectionTitle.toLowerCase()}`}
                width={1280}
                height={720}
            />
        </div>
    );

    if ((data as PortableTextBlock[]).length) return (
        <div className={`section-content ${classTitle}__summary`}>
            <PortableText value={data as PortableTextBlock[]} />
        </div>
    );

    return null;
}