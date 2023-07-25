import { defineField, defineType } from "sanity";

const aboutSection = defineType({
  name: "aboutSection",
  type: "object",
  title: "About Section",
  fields: [
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
      name: "aboutContent",
      type: "text",
      title: "Bio",
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
