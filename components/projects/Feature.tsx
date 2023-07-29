import { featureProps } from "@/types/componentProps";

export default function Feature({
  featimg,
  featTitle,
  children,
}: featureProps) {
  return (
    <article className="feat-item">
      {/* Embed gif here */}
      <img src={featimg} alt={`${featTitle} in action`} className="feat-img" />

      <section className="feat-txt">
        <h5 className="feat-title">{featTitle}</h5>
        <p className="feat-desc">{children}</p>
      </section>
    </article>
  );
}
