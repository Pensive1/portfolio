import Link from "next/link";
import Icon from "./Icon";
import { buttonProps } from "@/types/componentProps";
import { Route } from "next";

//define types for the component parameters

export default function Button({
  href,
  isExternal = false,
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
    header: "btn-header",
  };
  return (
    <Link
      href={href as Route}
      className={`cta-btn ${buttonStyle[btnType]} w-full`}
      target={isExternal ? "_blank" : "_self"}
      download={isFile}
      prefetch={false}
    >
      {showIcon && <Icon iconType={iconType} size={size} use="button" />}
      {children}
    </Link>
  );
}
