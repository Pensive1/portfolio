import aboutSectionType from "./about";
import heroType from "./hero";
import { Project } from "./data";

export type homepageContent = {
  hero: heroType;
  about: aboutSectionType;
  projects: Project[];
}