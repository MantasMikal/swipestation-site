import { FaHashtag } from "react-icons/fa";

export default {
  name: "faq",
  title: "FAQ",
  type: "object",
  icon: FaHashtag,
  fields: [
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "faqs",
      title: "FAQS",
      type: "array",
      of: [
        {
          type: "qa",
        },
      ],
    },
  ],
  liveEdit: true,
};
