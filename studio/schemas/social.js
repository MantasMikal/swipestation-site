export default {
  name: "social",
  title: "Social",
  type: "object",
  fields: [
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Facebook", value: "facebook" },
          { title: "Twitter", value: "twitter" },
          { title: "LinkedIn", value: "linkedIn" },
          { title: "Instagram", value: "instagram" },
          { title: "Youtube", value: "youtube" },
        ],
        layout: "radio"
      }
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ["https", "http"],
        }),
    },
  ],
};
