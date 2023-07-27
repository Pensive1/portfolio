// ICON COMPONENTS
export type iconProps = {
  iconType?:
    | "question"
    | "route"
    | "code"
    | "wand"
    | "medal"
    | "sword"
    | "github"
    | "externalLink"
    | "linkedin"
    | "mail"
    | "info";
  size?: 1 | 2 | 3;
};

export type svgIconProps = {
  size: number;
};

export type SectionHeadingProps = {
  /* Inherit icon props to avoid repetition */
  showIcon?: boolean;
  children: React.ReactNode;
} & iconProps;
