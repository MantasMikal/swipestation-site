import { MdGroup } from "react-icons/md";
export default {
  name: "sponsor",
  title: "Client",
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
      description: "Will be used in the testimonials carousel",
      title: "Is Featured",
      type: "boolean",
    },
    {
      name: "quoteHeading",
      title: "Quote Heading",
      description: "Only sponsors with quotes appear in the slider",
      type: "string",
    },
    {
      name: "quoteBody",
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
