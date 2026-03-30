import SectionHeading from "@/components/SectionHeading";

export default function TechList({ techStack }: { techStack: string[] }) {
  return (
    <div className="px-4 pt-2 flex flex-col flex-grow md:py-3 md:pr-0 2xl:py-4">
      <SectionHeading showIcon={false}>Technologies</SectionHeading>
      <ul className="flex gap-x-4 gap-y-2 flex-wrap text-[rgb(var(--txt-list-item))] mb-3 md:mb-[4px]">
        {techStack.map((tech: string, index: number) => (
          <li className="label tech-list__tech bg-[rgba(var(--txt-body))]/[.15] px-2 rounded-xl" key={index}>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
