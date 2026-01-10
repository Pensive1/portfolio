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
    burgerMenu: dynamic(() => import("./icons/icn_burgerMenu")),
    close: dynamic(() => import("./icons/icn_close")),
    code: dynamic(() => import("./icons/icn_code")),
    email: dynamic(() => import("./icons/icn_email")),
    externalLink: dynamic(() => import("./icons/icn_externalLink")),
    github: dynamic(() => import("./icons/icn_github")),
    info: dynamic(() => import("./icons/icn_info")),
    medal: dynamic(() => import("./icons/icn_medal")),
    medium: dynamic(() => import("./icons/icn_medium")),
    linkedin: dynamic(() => import("./icons/icn_linkedin")),
    list: dynamic(() => import("./icons/icn_list")),
    question: dynamic(() => import("./icons/icn_question")),
    route: dynamic(() => import("./icons/icn_route")),
    sword: dynamic(() => import("./icons/icn_sword")),
    video: dynamic(() => import("./icons/icn_video")),
    wand: dynamic(() => import("./icons/icn_wand")),
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
