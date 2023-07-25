import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: Date;
  projectName: string;
  heroImage: string;
  slug: string;
  liveUrl: string;
  synopsis: string;
  content: PortableTextBlock;
  technologies: string[];
};

export type ProjectThumbnailProps = {
  thumbType?: "regular" | "hero";
  title: string;
  imgSrc: string;
  desc: string;
  techList: string[];
  liveUrl: string;
  caseStudyUrl: string;
};
