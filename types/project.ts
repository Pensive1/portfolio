import { PortableTextBlock } from "sanity";

export interface Project {
  _id: string;
  _createdAt: Date;
  projectName: string;
  heroImage: string;
  slug: string;
  liveUrl: string;
  githubUrl: string;
  synopsis: string;
  projDisplay: boolean;
  content: PortableTextBlock[];
  technologies: string[];
}

export type ProjectThumbnailProps = {
  thumbType?: boolean;
  title: string;
  imgSrc: string;
  desc: string;
  techList: string[];
  liveUrl: string;
  caseStudyUrl: string;
};

export interface ProjectPage extends Project {
  bgContent: PortableTextBlock[];
  problemContent: string;
  challengeList: Array<object>;
  impactType: string;
  impactContent: PortableTextBlock[];
  solutionOutline: PortableTextBlock[];
  solutions: PortableTextBlock[];
  problemConclusion: PortableTextBlock[];
  uiFactorDesc: PortableTextBlock[];
  uiFactors: Array<object>;
}
