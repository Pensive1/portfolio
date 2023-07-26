"use-client";

import Link from "next/link";
import Icon from "./Icon";

//define types for the component parameters

export default function Button(
  btnType: string = "regular",
  showIcon: boolean = false,
  iconType: string,
  children: React.ReactNode
) {
  return (
    <Link href="/" className={`cta-btn cta-btn--${btnType}`}>
      {showIcon && <Icon iconType={iconType} size={1} />}
      {children}
    </Link>
  );
}
