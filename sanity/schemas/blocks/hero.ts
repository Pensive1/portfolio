import { defineField, defineType } from "sanity";

const hero = defineType({
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
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
});

export default hero;
