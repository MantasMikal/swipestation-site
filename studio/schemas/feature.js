export default {
  name: "feature",
  title: "Feature",
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
      name: "smallTitle",
      title: "Small title",
      type: "boolean",
      description: "Makes the title smaller.",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Image aspect ratio should be 1:1",
    },
  ],
};
