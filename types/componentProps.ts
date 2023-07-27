// ICON COMPONENTS
interface iconList {
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
}

export type svgIconProps = {
  size: number;
};

export interface iconProps extends iconList {
  size?: 1 | 2 | 3;
}

export interface SectionHeadingProps extends iconProps {
  /* Inherit icon props to avoid repetition */
  showIcon?: boolean;
  children: React.ReactNode;
}

export interface iconLinkProps extends iconProps {
  href: string;
  showIcon?: boolean;
  children: React.ReactNode;
}

export interface buttonProps extends iconProps {
  href: string;
  showIcon?: boolean;
  btnType?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
}

/* --- Problem Points */
export type problemPointProps = {
  pointTitle: string;
  probImg: string;
  probAlt?: string;
  children: React.ReactNode;
};
