import Link from "next/link";
import Icon from "./Icon";
import { iconLinkProps } from "@/types/componentProps";
import { Route } from "next";

export default function IconLink({
  showIcon = true,
  iconType,
  href,
  isExternal = false,
  children,
}: iconLinkProps) {
  if (isExternal) {
    return (
      <a
        href={href}
        className="label flex items-center gap-2 text-[rgb(var(--txt-project-link))]"
        target="_blank"
      >
        {showIcon && <Icon iconType={iconType} use="projectMeta" />}
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href as Route}
      className="label flex items-center gap-2 text-[rgb(var(--txt-project-link))]"
      target="_blank"
    >
      {showIcon && <Icon iconType={iconType} use="projectMeta" />}
      {children}
    </Link>
  );
}
