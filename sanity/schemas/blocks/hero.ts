import { defineField, defineType } from "sanity";
import { BlockElementIcon } from "@sanity/icons";

const hero = defineType({
  name: "hero",
  type: "object",
  title: "Hero",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "sectionHeading",
      type: "string",
      title: "Section Heading",
      initialValue: "Hero",
      description: "Used for identifying this section outside this popup",
    }),
    defineField({
      name: "heading",
      type: "string",
      title: "Heading",
    }),
    defineField({
      name: "tagline",
      type: "string",
      title: "Tagline",
    }),
  ],
  preview: {
    select: {
      title: "sectionHeading",
    }
  }
});

export default hero;
