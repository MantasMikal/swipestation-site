import { FaTrophy } from "react-icons/fa";

export default {
  name: "award",
  title: "Award",
  type: "object",
  icon: FaTrophy,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "url",
      title: "Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http"],
        }),
    },
    {
      name: "image",
      description: "Image should be square. Perfect size is 200x200px",
      type: "image",
      title: "Image",
    },
  ],
};
