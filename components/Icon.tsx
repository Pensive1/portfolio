import { iconCollection } from "@/types/components";
import { iconProps } from "../types/componentProps";
import dynamic from "next/dynamic";

export default function Icon({
  iconType = "question",
  size = 1,
  use = "default",
}: iconProps) {
  let dimensions = size === 1 ? 16 : size === 2 ? 24 : size === 3 ? 32 : 16;

  const iconCollection: iconCollection = {
    //Import icon svgs based on phrase
    question: dynamic(() => import("./icons/icn_question")),
    route: dynamic(() => import("./icons/icn_route")),
    code: dynamic(() => import("./icons/icn_code")),
    wand: dynamic(() => import("./icons/icn_wand")),
    medal: dynamic(() => import("./icons/icn_medal")),
    sword: dynamic(() => import("./icons/icn_sword")),
    github: dynamic(() => import("./icons/icn_github")),
    externalLink: dynamic(() => import("./icons/icn_externalLink")),
    linkedin: dynamic(() => import("./icons/icn_linkedin")),
    email: dynamic(() => import("./icons/icn_email")),
    info: dynamic(() => import("./icons/icn_info")),
    video: dynamic(() => import("./icons/icn_video")),
  };

  const IconComponent = iconCollection[iconType]
    ? iconCollection[iconType]
    : iconCollection["question"];

  const iconFill = {
    default: "rgb(var(--txt-link))",
    button: "rgb(var(--btn-primary-txt))",
    sectionHeading: "rgb(var(--icn-fill))",
    projectMeta: "rgb(var(--icn-project-link-icon))",
    footer: "rgb(var(--icn-footer))",
  };

  const fillColor = iconFill[use] ? iconFill[use] : iconFill["default"];

  return <IconComponent size={dimensions} fillColor={fillColor} />;
}
