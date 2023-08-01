import SectionHeading from "@/components/SectionHeading";

export default function TechList({ techStack }: { techStack: string[] }) {
  return (
    <div className="meta-details">
      <SectionHeading iconType="code">Tech stack</SectionHeading>
      <ul className="tech-list">
        {techStack.map((tech: string, index: number) => (
          <li className="tech-list__tech" key={index}>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
