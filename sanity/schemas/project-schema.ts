const project = {
  name: "project",
  title: "Projects",
  type: "document",
  groups: [
    {
      name: "overview",
      title: "Overview",
      default: true,
    },
    {
      name: "background",
      title: "Background",
    },
    {
      name: "problems",
      title: "Problems (Pain Points)",
    },
    {
      name: "solutions",
      title: "Solutions",
    },
    {
      name: "uiConsiderations",
      title: "Visual Considerations",
    },
    {
      name: "challenges",
      title: "Challenges",
    },
    {
      name: "impact",
      title: "Impact/Reception",
    },
  ],
  fields: [
    {
      name: "projectName",
      title: "Project Name",
      type: "string",
      group: "overview",
    },
    {
      name: "slug",
      title: "Project URL",
      description: "Portfolio site's URL for this project",
      type: "slug",
      group: "overview",
      options: { source: "projectName" },
    },
    {
      name: "synopsis",
      title: "Synopsis",
      type: "text",
      description:
        "Short Descrtiption describing this project. Shown below the project title",
      group: "overview",
    },
    {
      name: "heroImage",
      title: "Featured image",
      description: "This appears under the title and description.",
      type: "image",
      options: { hotspot: true },
      group: "overview",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "technologies",
      title: "Tech Stack",
      description: "List all technologies and packages.)",
      group: "overview",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "gitHubUrl",
      title: "GitHub Link",
      type: "url",
      group: "overview",
    },
    {
      name: "liveUrl",
      title: "Live Link",
      type: "url",
      group: "overview",
    },
    {
      name: "projDisplay",
      title: "Hero or regular project",
      type: "boolean",
      description:
        "Affects how the thumbnail is displayed. Hero is wide and detailed, regular is consice.",
      group: "overview",
      initialValue: false,
    },
    {
      name: "bgContent",
      title: "Context",
      group: "background",
      description:
        "What is the story behind this project? 1. Who is the customer/client?, 2. What do they do? 3. How many customers do they serve? 4. What is their goal? 5. What role did you play?",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "problemContent",
      title: "Pain Points",
      group: "problems",
      description:
        "What problems did the target demographic face? (Who experienced it?, what were they using?, when does the problem happen?, where and how did it occur?)",
      type: "array",
      of: [
        {
          title: "Problem Details",
          type: "object",
          name: "problemDetail",
          fields: [
            {
              title: "Image",
              type: "image",
              name: "problemImg",
            },
            {
              title: "Description",
              name: "problemDesc",
              type: "text",
              description:
                "What problems did the target demographic face? (Who experienced it?, what were they using?, when does the problem happen?, where and how did it occur?)",
            },
          ],
        },
      ],
      options: {
        layout: "list",
      },
    },
    {
      name: "problemConclusion",
      title: "Problem Conclusion",
      description: "What are the next steps?",
      type: "array",
      of: [{ type: "block" }],
      group: "problems",
    },
    {
      name: "solutions",
      title: "Features",
      group: "solutions",
      description: "List of features that solve the problems",
      type: "array",
      of: [
        {
          type: "object",
          name: "feature",
          fields: [
            {
              title: "Feature Image",
              type: "image",
              name: "featureImg",
            },
            {
              title: "Title",
              type: "string",
              name: "featureTitle",
            },
            {
              title: "Feature Description",
              name: "featureDesc",
              type: "text",
            },
          ],
        },
      ],
      options: {
        layout: "list",
      },
    },
    {
      name: "uiFactorDesc",
      title: "Description",
      description: "A short summary addressing key points",
      type: "array",
      of: [{ type: "block" }],
      group: "uiConsiderations",
    },
    {
      name: "uiFactors",
      title: "Points",
      group: "uiConsiderations",
      description: "List of considerations",
      type: "array",
      of: [
        {
          title: "Point",
          type: "object",
          name: "uiFactorPoints",
          fields: [
            {
              title: "Title",
              name: "uiFactorPointTitle",
              type: "string",
            },
            {
              title: "Description",
              name: "uiFactorPointDesc",
              description: "A short summary about this point",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
        },
      ],
      options: { layout: "list" },
    },
    {
      name: "challengeList",
      title: "Challenges",
      group: "challenges",
      description: "List all challenges",
      type: "array",
      of: [
        {
          title: "challenge",
          type: "object",
          name: "challengeItem",
          fields: [
            {
              title: "Title",
              name: "challengeTitle",
              type: "string",
            },
            {
              title: "Description",
              name: "challengeDesc",
              description: "A short summary about this challenge",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
        },
      ],
      options: { layout: "list" },
    },
    {
      title: "Type",
      name: "impactType",
      group: "impact",
      type: "string",
      options: {
        list: [
          { title: "Impact", value: "impact" },
          { title: "Reception", value: "reception" },
        ],
        layout: "dropdown",
      },
    },
    {
      name: "impactContent",
      title: "Impact",
      group: "impact",
      description: "What are the outcomes from this project",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default project;
