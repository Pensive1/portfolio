import SectionHeading from "@/components/SectionHeading";
import { PortableText } from "@portabletext/react";
import { standardSectionProps } from "@/types/componentProps";
import { lowerHyphenClass } from "@/utils/textFuncs";

function StandardSection({ sectionTitle, sectionIcon, textContent }: standardSectionProps) {
    return (
        <>
            <section
                className={`project__${lowerHyphenClass(sectionTitle)}`}
            >
                <SectionHeading iconType={sectionIcon}>{sectionTitle}</SectionHeading>
                <div className="section-content">
                    <PortableText value={textContent} />
                </div>
            </section>
        </>
    );
}

export default StandardSection;