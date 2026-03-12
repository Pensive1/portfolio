const project = {
  name: "project",
  title: "Projects",
  type: "document",
  groups: [
    {
      name: "meta",
      title: "Project Details",
      default: true,
    },
    {
      name: "overview",
      title: "Overview",
    },
    {
      name: "background",
      title: "Background",
    },
    {
      name: "brief",
      title: "Brief",
    },
    {
      name: "role",
      title: "Your Role",
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
      name: "techApproach",
      title: "Technical Approach",
    },
    {
      name: "techStack",
      title: "Technical Rationale",
    },
    {
      name: "uiConsiderations",
      title: "Visual Considerations",
    },
    {
      name: "screenshots",
      title: "Screenshots",
    },
    {
      name: "techChallenges",
      title: "Technical Challenges",
    },
    {
      name: "challenges",
      title: "Project Challenges",
    },
    {
      name: "performance",
      title: "Performance and QA",
    },
    {
      name: "impact",
      title: "Impact/Reception",
    },
    {
      name: "learnings",
      title: "Learnings",
    },
  ],

  fields: [
    {
      name: "projArchiveState",
      title: "Archived",
      type: "boolean",
      description:
        "Archived projects will not show on the homepage",
      group: "meta",
      initialValue: false,
    },
    {
      name: "projectName",
      title: "Project Name",
      type: "string",
      group: "meta",
    },
    {
      name: "slug",
      title: "Project URL",
      description: "Portfolio site's URL for this project",
      type: "slug",
      group: "meta",
      options: { source: "projectName" },
    },
    {
      name: "synopsis",
      title: "Synopsis",
      type: "text",
      description:
        "Short Descrtiption describing this project. Shown below the project title",
      group: "meta",
    },
    {
      name: "heroImage",
      title: "Featured image",
      description: "This appears under the title and description.",
      type: "image",
      options: { hotspot: true },
      group: "meta",
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
      group: "meta",
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
      group: "meta",
    },
    {
      name: "liveUrl",
      title: "Live Link",
      type: "url",
      group: "meta",
    },
    {
      name: "demoUrl",
      title: "Demo Link",
      type: "url",
      group: "meta",
    },
    {
      name: "projDisplay",
      title: "Hero project",
      type: "boolean",
      description:
        "Affects how the thumbnail is displayed. Hero is wide and detailed, regular is consice.",
      group: "meta",
      initialValue: false,
    },
    {
      name: "projOverview",
      title: "Summary",
      group: "overview",
      description:
        "What is the basic description of this project?",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "bgContent",
      title: "Context",
      group: "background",
      description:
        "What is the story behind this project? 1. Who is the customer/client?, 2. What do they do? 3. How many customers do they serve? 4. What is their goal?",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "projBrief",
      title: "The Brief",
      group: "brief",
      description:
        "What are the objectives",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "projRole",
      title: "Your Role",
      group: "role",
      description:
        "What were you responsible for doing?",
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
              title: "Title",
              type: "string",
              name: "title",
            },
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
      title: "Solution outline",
      name: "solutionOutline",
      group: "solutions",
      type: "array",
      of: [{ type: "block" }],
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
              type: "array",
              of: [{ type: "block" }],
            },
          ],
        },
      ],
      options: {
        layout: "list",
      },
    },

    // TECHNICAL APPROACH GOES HERE
    {
      name: "projTechApproach",
      title: "Approaches",
      group: "techApproach",
      description:
        "What did you consider as you built this? Eg: Architechture, API Integrations",
      type: "array",
      of: [
        {
          title: "Approach Details",
          type: "object",
          name: "approachDetail",
          fields: [
            {
              title: "Title",
              type: "string",
              name: "title",
            },
            {
              title: "Image",
              type: "image",
              name: "approachImg",
            },
            {
              title: "Description",
              name: "approachDesc",
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
      name: "techApproachSummary",
      title: "Summary",
      description: "Any final notes",
      type: "array",
      of: [{ type: "block" }],
      group: "techApproach",
    },

    // TECHNICAL RATIONALE GOES HERE
    {
      name: "projTechStack",
      title: "Tech Stack",
      group: "techStack",
      description:
        "Outline technologies and the reasons they were chosen",
      type: "array",
      of: [
        {
          title: "Chosen Technology",
          type: "object",
          name: "stackDetail",
          fields: [
            {
              title: "Name",
              type: "string",
              name: "title",
            },
            {
              title: "Short Description",
              name: "desc",
              type: "text",
              description: "Explain why this technology was chosen",
            },
            {
              name: "image",
              title: "Image (optional)",
              type: "image",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  title: "Alt",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
      options: {
        layout: "list",
      },
    },
    {
      name: "stackSummaryImage",
      title: "Summary Image (optional)",
      type: "image",
      group: "techStack",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },

    // TECHNICAL CHALLENGE
    {
      name: "projTechChallenges",
      title: "Technical Challenges",
      group: "techChallenges",
      description: "Outline the technical challenges",
      type: "array",
      of: [
        {
          title: "Technical Challenge",
          type: "object",
          name: "stackDetail",
          fields: [
            {
              title: "Title",
              type: "string",
              name: "title",
            },
            {
              title: "Description",
              name: "desc",
              description: "Were there any edge cases, limitations or constraints (eg time or knowledge)?",
              type: "array",
              of: [{ type: "block" }],
            },
            {
              name: "image",
              title: "Image (optional)",
              type: "image",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  title: "Alt",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
      options: {
        layout: "list",
      },
    },
    {
      name: "techChallengeSummaryImage",
      title: "Summary Image (optional)",
      type: "image",
      group: "techChallenges",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },

    // PROJECT CHALLENGES
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

    // UI CONSIDERATIONS
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
              title: "Point",
              type: "object",
              name: "uiFactorPoints",
              fields: [
                {
                  title: "Description",
                  name: "description",
                  description: "A short summary about this point",
                  type: "array",
                  of: [{ type: "block" }],
                },
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: { hotspot: true },
                  fields: [
                    {
                      name: "alt",
                      title: "Alt",
                      type: "string",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      options: { layout: "list" },
    },

    // ADDITIONAL SCREENSHOTS GO HERE
    {
      name: "projScreenshots",
      title: "Screenshots (Optional)",
      group: "screenshots",
      description: "Provide additional screenshots",
      type: "array",
      of: [
        {
          title: "Screenshot",
          type: "object",
          name: "projScreen",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  title: "Alt",
                  type: "string",
                },
              ],
            },
            {
              title: "Caption (Optional)",
              type: "string",
              name: "caption",
            },
          ],
        },
      ],
      options: {
        layout: "list",
      },
    },

    // PERFORMANCE AND QA GO HERE
    {
      name: "projPerformanceQA",
      title: "Performance and Quality Assurance Details",
      group: "performance",
      description:
        "What checks were carried out and how well did it perform",
      type: "array",
      of: [{ type: "block" }],
    },

    // IMPACT GO HERE
    {
      title: "Type",
      name: "impactType",
      group: "impact",
      type: "string",
      options: {
        list: [
          { title: "Impact", value: "Impact" },
          { title: "Reception", value: "Reception" },
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

    // LEARNINGS GO HERE
    {
      name: "projLearnings",
      title: "Lessons Learned",
      group: "learnings",
      description:
        "What did you discover through this project that you didn't know before?",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default project;
