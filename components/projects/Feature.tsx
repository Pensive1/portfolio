import { featureProps } from "@/types/componentProps";

export default function Feature({
  featimg,
  featTitle,
  children,
}: featureProps) {
  return (
    <article className="text-[var(--body-colour)]">
      {/* Embed gif here */}
      <img src={featimg} alt={`${featTitle} in action`} className="feat-img" />

      <section className="text-[var(--body-colour)] flex flex-col gap-1 md:gap-2 2xl:gap-3">
        <h5 className="feat-title">{featTitle}</h5>
        <div className="feat-desc">{children}</div>
      </section>
    </article>
  );
}
