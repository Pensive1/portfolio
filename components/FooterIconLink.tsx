import Link from "next/link";
import Icon from "./Icon";
import { iconLinkProps } from "@/types/componentProps";

export default function FooterIconLink({
  iconType,
  href,
  children,
}: iconLinkProps) {
  return (
    <Link href={href} target="_blank" className="inline-flex gap-2">
      <Icon iconType={iconType} />
      <span className="sm:hidden md:inline">{children}</span>
    </Link>
  );
}
