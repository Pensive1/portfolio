import Link from "next/link";
import Icon from "./Icon";
import { buttonProps } from "@/types/componentProps";

//define types for the component parameters

export default function Button({
  href,
  btnType = "primary",
  showIcon = false,
  iconType,
  size,
  children,
}: buttonProps) {
  return (
    <Link href={href} className={`cta-btn btn--${btnType}`}>
      {showIcon && <Icon iconType={iconType} size={size} />}
      {children}
    </Link>
  );
}
