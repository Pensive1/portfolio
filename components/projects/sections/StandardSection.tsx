import SectionHeading from "@/components/SectionHeading";
import { PortableText } from "@portabletext/react";
import { standardSectionProps } from "@/types/componentProps";

function StandardSection({ sectionTitle, sectionIcon, textContent }: standardSectionProps) {
    return (
        <>
            <section>
                <SectionHeading iconType={sectionIcon}>{sectionTitle}</SectionHeading>
                <div className="section-content">
                    <PortableText value={textContent} />
                </div>
            </section>
        </>
    );
}

export default StandardSection;