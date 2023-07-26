"use-client";

export default function Feature (featimg:string, featTitle:string, featDesc:string) {
    return(
        <article className="feat-item">
            {/* Embed gif here */}
            <img src={featimg} alt={`${featTitle} in action`} className="feat-img" />

            <section className="feat-txt">
                <h5 className="feat-title">{featTitle}</h5>
                <p className="feat-desc">{featDesc}</p>
            </section>
        </article>   
    )
}