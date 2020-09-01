import { FaTrophy } from "react-icons/fa";

export default {
  name: "awards",
  title: "Awards",
  type: "document",
  liveEdit: false,
  icon: FaTrophy,
  // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: "trustpilotReview",
      title: "TrustPilot",
      type: "trustpilot",
    },
    {
      name: "allAwards",
      title: "Awards",
      type: "array",
      of: [{ type: "award" }],
    },
  ],
  preview: {
    prepare({ title = "Awards" }) {
      return {
        title,
      };
    },
  },
};
