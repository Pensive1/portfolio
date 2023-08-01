import Link from "next/link";
import { ProjectThumbnailProps } from "@/types/componentProps";
import Button from "../Button";

export default function ProjectThumbnail({
  thumbType,
  imgSrc,
  title,
  desc,
  techList,
  liveUrl,
  caseStudyUrl,
}: ProjectThumbnailProps) {
  return (
    <article className={`proj-thumb --${thumbType ? "hero" : "reg"}`}>
      <img src={imgSrc} alt={`${title} project`} />

      <section className="thumb-content">
        <h4 className="proj-title">{title}</h4>

        <p className="proj-desc">{desc}</p>

        {techList && (
          <div className={`proj-tech --${!thumbType && "hide"}`}>
            <h5>tech</h5>

            <ul className="tech-list">
              {techList.length > 0 &&
                techList.map((tech, index) => (
                  <li className="tech-name" key={index}>
                    {tech}
                  </li>
                ))}
            </ul>
          </div>
        )}

        <div className="thumb-actions">
          {liveUrl && <Button href={`${liveUrl}`}>See live</Button>}
          {caseStudyUrl && (
            <Link href={`/projects/${caseStudyUrl}`}>Details</Link>
          )}
        </div>
      </section>
    </article>
  );
}
