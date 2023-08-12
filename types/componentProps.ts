import { PortableTextBlock } from "sanity";
import { challenge, factor, solution } from "./data";

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
    | "email"
    | "info"
    | "video";
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
  children: React.ReactNode;
}

export interface buttonProps extends iconProps {
  href: string;
  linkType?: "internal" | "external";
  showIcon?: boolean;
  btnType?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
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

export interface considerations {
  overview: PortableTextBlock[];
  factors: factor[];
}

export interface challenges {
  challengeList: challenge[];
}

export interface impact {
  type: string;
  content: PortableTextBlock[];
}
