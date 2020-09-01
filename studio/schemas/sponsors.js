import { MdGroup } from "react-icons/md";

export default {
  name: "sponsors",
  title: "Sponsors",
  type: "document",
  icon: MdGroup,
  fields: [
    {
      name: "sponsorList",
      title: "Sponsors",
      type: "array",
      of: [{ type: "sponsor" }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Sponsors",
      };
    },
  },
};
