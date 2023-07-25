import { SectionHeadingProps } from "@/types/componentProps";
import Icon from "./Icon";

export default function SectionHeading({
  showIcon = true,
  iconType,
  size,
  children,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {/* {showIcon && <Question size={16} />} */}
      {showIcon && <Icon iconType={iconType} size={size} />}
      <h3>{children}</h3>
    </div>
  );
}
