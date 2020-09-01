export default {
  name: "trustpilot",
  title: "TrustPilot",
  type: "object",
  fields: [
    {
      name: "image",
      title: "TrustPilot image",
      type: "image",
    },
    {
      name: "url",
      title: "TrustPilot Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http"],
        }),
    },
  ],
};
