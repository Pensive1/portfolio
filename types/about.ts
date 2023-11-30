import { PortableTextBlock } from "sanity";

type aboutSectionType = {
  aboutContent: PortableTextBlock[];
  skillList: string[];
  aboutImage: {
    aboutImageAlt: string;
    asset: {
      _ref: string;
    };
  };
};

export default aboutSectionType;
