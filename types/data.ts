import { PortableTextBlock } from "sanity";
import { problemContent } from "./componentProps";

export interface Project {
  _id: string;
  _createdAt: Date;
  projectName: string;
  heroImage: string;
  slug: string;
  liveUrl: string;
  gitHubUrl: string;
  synopsis: string;
  projDisplay: boolean;
  content: PortableTextBlock[];
  technologies: string[];
}

export interface ProjectPage extends Project {
  bgContent: PortableTextBlock[];
  problemContent: Array<problemContent>;
  challengeList: challenge[];
  impactType: string;
  impactContent: PortableTextBlock[];
  solutionOutline: PortableTextBlock[];
  solutions: Array<solution>;
  problemConclusion: PortableTextBlock[];
  uiFactorDesc: PortableTextBlock[];
  uiFactors: factor[];
}

export interface solution {
  featureTitle: string;
  featureImg: string;
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
