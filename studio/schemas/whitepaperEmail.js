import { GoMail } from "react-icons/go";

export default {
  name: "whitepaperEmail",
  title: "Whitepaper Email",
  type: "document",
  icon: GoMail,
  options: {
    hotspot: true
  },
  fields: [
    {
      name: "subject",
      title: "Email subject",
      type: "string"
    },
    {
      name: "title",
      title: "Email title",
      type: "string"
    },
    {
      name: "emailBody",
      title: "Email Body",
      type: "text"
    },
    {
      name: "attachment",
      title: "Attachment",
      type: "file"
    }
  ],
  preview: {
    prepare({ title = "Whitepaper" }) {
      return {
        title: title
      };
    }
  }
};
