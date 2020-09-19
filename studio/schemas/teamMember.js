import { FaHashtag } from "react-icons/fa";

export default {
  name: "teamMember",
  title: "Team member",
  type: "document",
  icon: FaHashtag,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "position",
      title: "Position",
      type: "string",
    },
    {
      name: "image",
      title: "Photo",
      type: "image",
    },
    {
      name: "description",
      title: "Description",
      type: "blockText",
    },
    {
      name: "social",
      title: "Social",
      type: "array",
      of: [{ type: "social" }],
    },
  ],
  liveEdit: true,
};
