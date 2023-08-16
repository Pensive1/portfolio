import Link from "next/link";
import Icon from "./Icon";
import { iconLinkProps } from "@/types/componentProps";

export default function FooterIconLink({
  iconType,
  href,
  children,
}: iconLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="inline-flex gap-2 items-center"
    >
      <Icon iconType={iconType} use={"footer"} size={2} />
      <span className="sm:hidden md:inline text-[rgb(var(--project-link))]">
        {children}
      </span>
    </Link>
  );
}
