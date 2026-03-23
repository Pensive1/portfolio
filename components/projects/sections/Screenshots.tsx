import SectionHeading from "@/components/SectionHeading";
import { sanityImg } from "@/sanity/sanity-utils";
import { screenshotProps } from "@/types/componentProps";
import Image from "next/image";

export default function Screenshots({ mockups }: screenshotProps) {
    return (
        <section className="project__screenshots">
            <SectionHeading iconType="images">
                Screenshots
            </SectionHeading>

            <div className="section-content screenshots">
                {mockups.length && mockups.map(screen => (
                    <figure
                        className="flex flex-col gap-2"
                        key={screen._key}
                    >
                        {/* TODO: ADD BORDER AROUND IMAGERY */}
                        <Image
                            src={sanityImg(screen.img.asset._ref).fit("max").url()}
                            alt={screen.img?.alt ?? `A preview of ${screen.caption}`}
                            width={1280}
                            height={720}
                            className="w-full h-auto max-h-[600px] object-contain"
                        />

                        {screen.caption && <figcaption
                            className="text-xs italic text-center text-[rgb(var(--txt-body-title))] md:text-sm"
                        >
                            {screen.caption}
                        </figcaption>}
                    </figure>
                ))}
            </div>
        </section>
    );
}