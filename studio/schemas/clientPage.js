export default {
  name: "clientPage",
  title: "Clients",
  type: "document",
  // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: "sponsorList",
      title: "Sponsors",
      type: "allSponsors",
    },
  ],
  preview: {
    prepare({ title = "Clients page" }) {
      return {
        title,
      };
    },
  },
};
