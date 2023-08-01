import { iconCollection } from "@/types/components";
import { iconProps } from "../types/componentProps";
import dynamic from "next/dynamic";

export default function Icon({ iconType = "question", size = 1 }: iconProps) {
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
  };

  const IconComponent = iconCollection[iconType]
    ? iconCollection[iconType]
    : iconCollection["question"];

  return <IconComponent size={dimensions} />;
}
