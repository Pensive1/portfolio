"use-client";

export default function ProblemPoint (pointNum:number, probAlt:string, probImg:string, probDesc:string) {
    return(
        <article className="problem-item">
            <img src={probImg} alt={probAlt} className="prob-img" />
            <section className="prob-txt">
                <h5 className="prob-point__num">{pointNum /* comes from map index */}</h5>
                <p className="prob-desc">{probDesc}</p>
            </section>
        </article>
    )
}