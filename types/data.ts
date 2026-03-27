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
  problemConclusion: PortableTextBlock[];
  challengeList: challenge[];
  impactContent: PortableTextBlock[];
  solutionOutline: PortableTextBlock[];
  solutions: Array<solution>;
  projTechApproach: BlockSectionPoint[];
  projTechStack: BlockSectionPoint[];
  stackSummaryImage: StandardImage;
  techApproachSummary: PortableTextBlock[];
  projTechChallenges: BlockSectionPoint[];
  techChallengeSummaryImage: StandardImage;
  uiFactorDesc: PortableTextBlock[];
  uiFactors: factor[];
  projScreenshots: screenshot[];
  projPerformanceQA: PortableTextBlock[];
  impactType: string;
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
  _key: string;
  uiFactorPointTitle: string;
  uiFactorPoints: {
    description: PortableTextBlock[];
    image: StandardImage;
  };
}[];

export interface challenge {
  _key: string;
  index: number;
  challengeTitle: string;
  challengeDesc: PortableTextBlock[];
}[];

export interface screenshot {
  _key: string;
  caption?: string;
  img: StandardImage;
}

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
  _type: string;
  asset: {
    _ref: string;
  };
}
