export default {
  name: "features",
  title: "Features",
  type: "object",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "feature" }],
    },
  ],
};
