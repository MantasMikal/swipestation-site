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
      name: "description",
      title: "Description",
      type: "blockText",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};
