import { PortableTextBlock } from "sanity";
import { problemContent } from "./componentProps";

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

export interface ProjectPage extends Project {
  bgContent: PortableTextBlock[];
  problemContent: Array<problemContent>;
  challengeList: Array<object>;
  impactType: string;
  impactContent: PortableTextBlock[];
  solutionOutline: PortableTextBlock[];
  solutions: PortableTextBlock[];
  problemConclusion: PortableTextBlock[];
  uiFactorDesc: PortableTextBlock[];
  uiFactors: Array<object>;
}
