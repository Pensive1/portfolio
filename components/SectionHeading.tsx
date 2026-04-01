"use client";
import { SectionHeadingProps } from "@/types/componentProps";
import Icon from "./Icon";

export default function SectionHeading({
  showIcon = true,
  iconType,
  size = 3,
  children,
}: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4 mb-3 md:mb-4">
      {showIcon && <Icon iconType={iconType} size={size} use="sectionHeading" />}
      <h3 className="text-[rgb(var(--txt-section-title))]">{children}</h3>
    </div>
  );
}
