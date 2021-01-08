export default {
  name: "contact",
  title: "Contact",
  type: "object",
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
      name: "ctaLabel",
      title: "CTA Label",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "salesDeck",
      title: "Latest sales deck",
      type: "file",
    },
    {
      name: "calendlyUrl",
      title: "Calendly URL",
      type: "string",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Contact Details",
      };
    },
  },
};
