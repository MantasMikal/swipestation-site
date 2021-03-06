export default {
  name: "pageTeamMember",
  title: "Team",
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
      name: "team",
      title: "Team",
      type: "array",
      of: [
        {
          type: "teamMember",
        },
      ],
    },
  ],
};
