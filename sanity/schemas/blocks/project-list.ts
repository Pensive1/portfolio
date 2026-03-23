import { defineArrayMember, defineField, defineType } from "sanity";
import { ProjectsIcon } from "@sanity/icons";

export const projectList = defineType({
    name: "projectList",
    type: "object",
    title: "Project List",
    icon: ProjectsIcon,
    fields: [
        defineField({
            name: "heading",
            type: "string",
            title: "Section Heading",
            initialValue: "Projects"
        }),
        defineField({
            name: "projects",
            type: "array",
            title: "Projects",
            description: "The projects will appear in the order set below.",
            of: [
                defineArrayMember({
                    type: "object",
                    name: "projectEntry",
                    fields: [
                        defineField({
                            name: "project",
                            type: "reference",
                            title: "Project",
                            to: [{ type: "project" }], // references your existing project document type
                            options: {
                                filter: 'projArchiveState == false',
                            },
                        }),
                    ],
                    preview: {
                        select: {
                            title: "project.projectName",
                            image: "project.heroImage",
                        }
                    }
                })
            ],
        }),
    ],
});

export default projectList