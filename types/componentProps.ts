import { PortableTextBlock } from "sanity";

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

/* --- HOME PAGE --- */
export type ProjectThumbnailProps = {
  thumbType?: boolean;
  title: string;
  imgSrc: string;
  desc: string;
  techList: string[];
  liveUrl: string;
  caseStudyUrl: string;
};

/* --- Problem Points --- */
export type problemPointProps = {
  pointTitle: string;
  probImg: string;
  probAlt?: string;
  children: React.ReactNode;
};

/* --- Features */
export type featureProps = {
  featimg: string;
  featTitle: string;
  children: React.ReactNode;
};

/* --- PROJECT PAGE --- */
export interface projectOverview {
  projectName: string;
  synopsis: string;
  heroImage: string;
  techStack: string[];
  gitHubUrl?: string;
  liveUrl?: string;
}

export interface projectMeta {
  techStack: string[];
  gitHubUrl?: string;
  liveUrl?: string;
}

export interface problemContent {
  title: string;
  problemImg: string;
  problemDesc: string;
}

export interface problems {
  content: problemContent[];
  conclusion: PortableTextBlock[];
}
