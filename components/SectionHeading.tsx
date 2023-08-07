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
    <div className="text-[var(--heading-colour)] flex items-center gap-3 mb-3">
      {showIcon && <Icon iconType={iconType} size={size} />}
      <h3>{children}</h3>
    </div>
  );
}
