"use client";
import { SectionHeadingProps } from "@/types/componentProps";
import Icon from "./Icon";

export default function SectionHeading({
  showIcon = true,
  iconType,
  size,
  children,
}: SectionHeadingProps) {
  // CREATE LOGIC TO SCALE ICONS PER BREAKPOINT

  return (
    <div className="flex items-center gap-3 mb-3">
      {showIcon && <Icon iconType={iconType} size={2} use="sectionHeading" />}
      <h3 className="text-[rgb(var(--txt-section-title))]">{children}</h3>
    </div>
  );
}
