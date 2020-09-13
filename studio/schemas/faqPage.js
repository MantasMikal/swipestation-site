import { MdMenu } from "react-icons/md";

export default {
  name: "faqPage",
  title: "FAQ Page",
  type: "document",
  icon: MdMenu,
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
      name: "faqs",
      title: "FAQS",
      type: "array",
      of: [{ type: "faq" }],
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title = "FAQS" }) {
      return {
        title: title,
      };
    },
  },
};
