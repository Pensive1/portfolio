import Link from "next/link";
import Icon from "./Icon";
import { iconLinkProps } from "@/types/componentProps";

export default function IconLink({
  showIcon = true,
  iconType,
  href,
  children,
}: iconLinkProps) {
  return (
    <Link
      href={href}
      className="label flex items-center gap-2 text-[rgb(var(--txt-project-link))]"
      target="_blank"
    >
      {showIcon && <Icon iconType={iconType} use="projectMeta" />}
      {children}
    </Link>
  );
}
