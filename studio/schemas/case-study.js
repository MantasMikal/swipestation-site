import { FaSuitcase } from "react-icons/fa";

export default {
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  icon: FaSuitcase,
  liveEdit: false,
  // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
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
      type: "figure",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      description: "Short description that will appear on the side of image",
      type: "blockContent",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
