import { PortableTextBlock } from "sanity";
import { problemContent } from "./componentProps";

export interface Project {
  _id: string;
  _createdAt: Date;
  projectName: string;
  heroImage: {
    alt: string;
    asset: {
      _ref: string;
    };
  };
  slug: string;
  liveUrl: string;
  demoUrl: string;
  gitHubUrl: string;
  synopsis: string;
  projDisplay: boolean;
  content: PortableTextBlock[];
  technologies: string[];
}

export interface ProjectPage extends Project {
  projOverview: PortableTextBlock[];
  bgContent: PortableTextBlock[];
  projBrief: PortableTextBlock[];
  projRole: PortableTextBlock[];
  problemContent: Array<problemContent>;
  challengeList: challenge[];
  impactType: string;
  impactContent: PortableTextBlock[];
  solutionOutline: PortableTextBlock[];
  solutions: Array<solution>;
  projTechApproach: BlockSectionPoint[];
  techApproachSummary: PortableTextBlock[];
  problemConclusion: PortableTextBlock[];
  uiFactorDesc: PortableTextBlock[];
  uiFactors: factor[];
  projLearnings: PortableTextBlock[];
}

export interface solution {
  featureTitle: string;
  featureImg: {
    asset: {
      _ref: string;
    };
  };
  featureDesc: PortableTextBlock[];
}
[];

export interface factor {
  index: number;
  uiFactorPointTitle: string;
  uiFactorPoints: {
    description: PortableTextBlock[];
  };
}
[];

export interface challenge {
  index: number;
  challengeTitle: string;
  challengeDesc: PortableTextBlock[];
}
[];

/**
 * A block section point consists of a title, description and an optional image.
 * 
 * As the name suggests, these are only for block sections containing a section title and text block.
 * These are usually contained in arrays
 */
export interface BlockSectionPoint {
  _key: string;
  title: string;
  desc: PortableTextBlock[];
  img: {
    asset: {
      _ref: string;
    };
  };
}

/**
 * Standard images consist of an image URL and alt text (optional).
 */
export type StandardImage = {
  alt?: string;
  asset: {
    _ref: string;
  };
}
