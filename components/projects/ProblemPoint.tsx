import { problemPointProps } from "@/types/componentProps";
import Image from "next/image";

export default function ProblemPoint({
  pointTitle,
  probAlt,
  probImg,
  children,
}: problemPointProps) {
  return (
    <article className="col-span-full md:col-span-4 xl:col-span-5 flex flex-col gap-2">
      <Image
        src={probImg}
        alt={probAlt}
        className="bg-gray-500 rounded-md aspect-video w-full"
      />
      <section className="flex flex-col gap-2">
        <h4 className="prob-point__num">{pointTitle}</h4>
        <p className="prob-desc">{children}</p>
      </section>
    </article>
  );
}
