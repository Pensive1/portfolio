import { PortableTextBlock } from "sanity";
import { BlockSectionPoint, challenge, factor, screenshot, solution, StandardImage } from "./data";
import type { Route } from "next";

// ICON COMPONENTS
interface iconList {
  iconType?:
  | "brain"
  | "burgerMenu"
  | "close"
  | "code"
  | "externalLink"
  | "education"
  | "email"
  | "github"
  | "images"
  | "info"
  | "linkedin"
  | "list"
  | "medal"
  | "medium"
  | "person"
  | "question"
  | "route"
  | "speed"
  | "strategy"
  | "sword"
  | "target"
  | "video"
  | "wand";
}

export type svgIconProps = {
  size: number;
  fillColor: string;
};

export interface iconProps extends iconList {
  size?: 1 | 2 | 3;
  use?: "default" | "button" | "sectionHeading" | "projectMeta" | "footer";
}

export interface SectionHeadingProps extends iconProps {
  /* Inherit icon props to avoid repetition */
  showIcon?: boolean;
  children: React.ReactNode;
}

export interface iconLinkProps extends iconProps {
  href: string;
  showIcon?: boolean;
  isExternal?: boolean;
  children: React.ReactNode;
}

export interface buttonProps extends iconProps {
  href: Route | string;
  isFile?: boolean;
  isExternal?: boolean;
  showIcon?: boolean;
  btnType?: "primary" | "secondary" | "tertiary" | "header";
  children: React.ReactNode;
}

export interface modalProps {
  isOpen: boolean;
}

export interface burgerModalProps extends modalProps {
  renderLinks: Function;
  setBurgerMenuOpen: Function;
  isMobileBreakpoint: boolean;
}

/* --- HOME PAGE --- */
export type ProjectThumbnailProps = {
  hero?: boolean;
  title: string;
  imgSrc: {
    alt: string;
    asset: {
      _ref: string;
    };
  };
  desc: string;
  techList: string[];
  liveUrl: string;
  demoUrl: string;
  caseStudyUrl: string;
};

/* --- Problem Points --- */
export type problemPointProps = {
  pointTitle: string;
  probImg: string;
  probAlt: string;
  children: React.ReactNode;
};

/* --- Features */
export type featureProps = {
  featimg: {
    asset: {
      _ref: string;
    };
  };
  featTitle: string;
  children: React.ReactNode;
};

/* --- PROJECT PAGE --- */
export interface projectOverview extends projectMeta {
  projectName: string;
  synopsis: string;
  heroImage: {
    alt: string;
    asset: {
      _ref: string;
    };
  };
}

export interface projectMeta {
  techStack: string[];
  gitHubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
}

export interface standardSectionProps {
  sectionTitle: string;
  sectionIcon: SectionHeadingProps["iconType"];
  textContent: PortableTextBlock[];
}

export interface problemContent {
  title: string;
  problemImg: {
    asset: {
      _ref: string;
    };
  };
  problemDesc: string;
}

export interface problems {
  content: problemContent[];
  conclusion: PortableTextBlock[];
}

export interface solutions {
  outline: PortableTextBlock[];
  solutions: solution[];
}

export interface nestedSectionProps {
  iconType?: SectionHeadingProps["iconType"];
  title: string;
  subSectionData: BlockSectionPoint[];
  summaryData?: PortableTextBlock[] | StandardImage;
}

export interface considerations {
  overview: PortableTextBlock[];
  factors: factor[];
}

export interface challenges {
  challengeList: challenge[];
}

export interface screenshotProps {
  mockups: screenshot[];
}

export interface impact {
  type: string;
  content: PortableTextBlock[];
}
