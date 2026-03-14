import SectionHeading from "@/components/SectionHeading";
import { PortableText } from "@portabletext/react";
import { standardSectionProps } from "@/types/componentProps";

function StandardSection({ sectionTitle, sectionIcon, textContent }: standardSectionProps) {
    return (
        <>
            <section>
                <SectionHeading iconType={sectionIcon}>{sectionTitle}</SectionHeading>
                <div className="content flex flex-col gap-1 md:gap-2 2xl:gap-3)]">
                    <PortableText value={textContent} />
                </div>
            </section>
        </>
    );
}

export default StandardSection;