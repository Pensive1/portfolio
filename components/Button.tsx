import Link from "next/link";
import Icon from "./Icon";
import { buttonProps } from "@/types/componentProps";

//define types for the component parameters

export default function Button({
  href,
  linkType = "internal",
  isFile = false,
  btnType = "primary",
  showIcon = false,
  iconType,
  size,
  children,
}: buttonProps) {
  const buttonStyle = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    tertiary: "btn-tertiary",
  };

  return (
    <Link
      href={href}
      className={`cta-btn ${buttonStyle[btnType]} w-full`}
      target={linkType === "external" ? "_blank" : "_self"}
      download={isFile}
    >
      {showIcon && <Icon iconType={iconType} size={size} use="button" />}
      {children}
    </Link>
  );
}
