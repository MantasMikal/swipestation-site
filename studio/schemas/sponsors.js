import { MdGroup } from "react-icons/md";

export default {
  name: "sponsors",
  title: "Clients",
  type: "document",
  icon: MdGroup,
  fields: [
    {
      name: "sponsorList",
      title: "Clients",
      type: "array",
      of: [{ type: "sponsor" }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Clients",
      };
    },
  },
};
