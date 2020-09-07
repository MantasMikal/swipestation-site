export default {
  title: "Featured Case Study",
  name: "featuredCaseStudy",
  type: "object",
  fields: [
    { name: "description", type: "blockText", title: "Description" },
    {
      name: "caseStudy",
      title: "Case Study",
      type: "reference",
      to: [{ type: "caseStudy" }],
    },
  ],
};
