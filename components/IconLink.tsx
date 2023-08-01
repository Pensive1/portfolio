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
    <Link href={href} className="icon-link">
      {showIcon && <Icon iconType={iconType} />}
      {children}
    </Link>
  );
}
