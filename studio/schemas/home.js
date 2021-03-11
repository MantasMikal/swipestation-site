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
      name: "features",
      title: "Features",
      type: "features",
    },
    {
      name: "tillComparison",
      title: "Till Comparison",
      type: "tillComparison",
    },
    {
      name: "goCashless",
      title: "Go Cashless",
      type: "goCashless",
    },
    {
      title: "Featured Case Study",
      name: "featuredCaseStudy",
      type: "featuredCaseStudy",
    },
    {
      name: "contactSection",
      title: "Contact",
      type: "contact",
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
