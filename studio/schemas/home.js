import { MdMenu } from "react-icons/md";

export default {
  name: "homePage",
  title: "Home Page",
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
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "minutesSaved",
      title: "Minutes Saved Queuing",
      type: "number",
    },
    {
      name: "mobileHero",
      title: "Hero image on mobile",
      type: "image",
    },
    {
      name: "sections",
      title: "Sections",
      type: "array",
      description: "Extra sections for the homepage",
      of: [{ type: "section" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title = "Home Page" }) {
      return {
        title: title,
      };
    },
  },
};
