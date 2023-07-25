"use-client";
import { iconProps } from "../types/componentProps";
import dynamic from "next/dynamic";

type IconComponents = {
  [key: string]: React.ComponentType<{ size: number }>;
};

export default function Icon({ iconType = "question", size = 1 }: iconProps) {
  let dimensions = size === 1 ? 16 : size === 2 ? 24 : size === 3 ? 32 : 16;

  const iconComponents = {
    //Import icon svgs based on phrase
    question: dynamic(() => import("./icons/icn_question")),
  };

  const IconComponent: IconComponents = iconComponents[iconType];

  {
    /* 
    3. Returns an icon based on iconType
        3.1 icons are filled with global css (via Tailwind)
    */
  }
  return <IconComponent size={dimensions} />;
}
