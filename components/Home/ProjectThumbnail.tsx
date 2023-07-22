import Link from "next/link";

export default function ProjectThumbnail (thumbType:string = 'regular', imgSrc:string, title:string, desc:string, techList:Array<1>, liveUrl:string, caseStudyUrl:string) {
    return (
        <article className={`proj-thumb --${thumbType}`}>
            <img src={imgSrc} alt={`${title} project`} />

            <section className="thumb-content">
                <h4 className="proj-title">{title}</h4>

                <p className="proj-desc">{desc}</p>

                <div className={`proj-tech --${thumbType === 'hero' && 'hide'}`}>
                    <h5>tech</h5>

                    <ul className="tech-list">
                        {/* map tech list array here */}
                        <li className="tech-name">Tech 1</li>
                        <li className="tech-name">Tech 2</li>
                        <li className="tech-name">Tech 3</li>
                        <li className="tech-name">Tech 4</li>
                    </ul>
                </div>

                <div className="thumb-actions">
                    {liveUrl && <Link href={liveUrl}>See live</Link>}
                    <Link href={caseStudyUrl}>Details</Link>
                </div>
            </section>
        </article>
    )
}