import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

const aboutSection = defineType({
  name: "aboutSection",
  title: "About Section",
  type: "object",
  icon: UserIcon,
  fields: [
    defineField({
      name: "heading",
      type: "string",
      title: "Section Name",
      description: "Used for identifying this section outside this popup",
      initialValue: "About",
    }),
    defineField({
      name: "aboutImage",
      type: "image",
      title: "Image",
      options: { hotspot: true },
      fields: [
        {
          name: "aboutImageAlt",
          title: "Alternate Text",
          type: "string",
        },
      ],
    }),
    defineField({
      title: "Bio",
      name: "aboutContent",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "skillList",
      title: "Skillset",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
  ],
});

export default aboutSection;
