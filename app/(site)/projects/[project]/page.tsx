import SectionHeading from "@/components/SectionHeading";
import IconLink from "@/components/IconLink";
import { getProject } from "@/sanity/sanity-utils";
import ProblemPoint from "@/components/projects/ProblemPoint";

type ProjectPage = {
  params: { project: string };
};

export default async function Project({ params }: ProjectPage) {
  const slug = params.project;
  const project = await getProject(slug);

  // If project is null, link to 404 page
  return (
    <main className="project">
      <div className="content-wrapper">
        <section className="overview">
          <h1>{project.projectName}</h1>
          <h2>project synopsis</h2>
          <div className="sub-wrapper">
            <img src="" alt="Project hero image" />

            {/* Make meta a sub component */}
            <section className="project-meta">
              <div className="meta-details">
                <SectionHeading iconType="code">Tech stack</SectionHeading>

                {/* map all techs here */}
                <ul className="tech-list">
                  <li className="tech-list__tech">Tech 1</li>
                </ul>
              </div>

              <div className="meta-actions">
                <div className="meta-actions__links">
                  <IconLink iconType="github" href="/">
                    GitHub
                  </IconLink>
                  <IconLink iconType="externalLink" href="/">
                    Live
                  </IconLink>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="project__background">
          <SectionHeading iconType="route">Background</SectionHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            vero esse officiis odio excepturi optio veritatis! Temporibus
            officiis facilis nostrum natus, tempora excepturi exercitationem
            asperiores fugit hic distinctio fugiat vero?
          </p>
        </section>

        <section className="project__problems">
          <SectionHeading iconType="question">Problems</SectionHeading>

          {/* map all problems here */}
          <ProblemPoint
            pointTitle="point 1"
            probImg=""
            probAlt="Problem alt desc"
          >
            Point description...
          </ProblemPoint>
        </section>

        <section className="project__solutions">
          <SectionHeading iconType="wand">Solutions</SectionHeading>
        </section>

        <section className="project__considerations">
          <SectionHeading>UI Considerations</SectionHeading>
        </section>

        <section className="project__challenges">
          <SectionHeading iconType="sword">Challenges</SectionHeading>
        </section>

        <section className="project__challenges">
          <SectionHeading iconType="medal">Impact/Reception</SectionHeading>
        </section>
      </div>
    </main>
  );
}
