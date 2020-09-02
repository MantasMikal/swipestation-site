import { MdGroup } from "react-icons/md";
export default {
  name: "sponsor",
  title: "Sponsor",
  type: "document",
  icon: MdGroup,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http"],
        }),
    },
    {
      name: "image",
      title: "Logo",
      description: "Caption is not required.",
      type: "image",
    },
    {
      name: "isFeatured",
      title: "Is Featured",
      type: "boolean",
    },
    {
      name: "qouteHeading",
      title: "Quote Heading",
      description: "Only sponsors with quotes appear in the slider",
      type: "string",
    },
    {
      name: "qouteBody",
      title: "Quote Body",
      type: "text",
    },
  ],
  preview: {
    select: {
      name: "name",
      image: "image",
    },
    prepare({ name = "Unnamed", image }) {
      return {
        title: name,
        media: image,
      };
    },
  },
};
