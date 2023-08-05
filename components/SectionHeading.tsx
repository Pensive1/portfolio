import { SectionHeadingProps } from "@/types/componentProps";
import Icon from "./Icon";

export default function SectionHeading({
  showIcon = true,
  iconType,
  size,
  children,
}: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-3">
      {/* {showIcon && <Question size={16} />} */}
      {showIcon && <Icon iconType={iconType} size={size} />}
      <h3>{children}</h3>
    </div>
  );
}
