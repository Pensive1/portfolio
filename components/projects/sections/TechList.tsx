import SectionHeading from "@/components/SectionHeading";

export default function TechList({ techStack }: { techStack: string[] }) {
  return (
    <div className="px-4 pt-2 flex flex-col flex-grow md:py-3 md:pr-0 2xl:py-4">
      <SectionHeading showIcon={false}>Tech stack</SectionHeading>
      <ul className="flex gap-x-4 flex-wrap text-[rgb(var(--txt-list-item))]">
        {techStack.map((tech: string, index: number) => (
          <li className="label tech-list__tech" key={index}>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
