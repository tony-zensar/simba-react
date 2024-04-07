export const navItems = [
  {
    title: 'My contracts',
    component: 'myContracts',
  },
  {
    title: 'Shared contracts',
    component: 'sharedContracts',
  },

  {
    title: 'Templates',
    component: 'templates',
    // subMenu: [
    //   {
    //     title: 'Org templates',
    //     component: 'orgTemplates',
    //   },

    //   {
    //     title: 'Favourite templates',
    //     component: 'favTemplates',
    //   },
    //   {
    //     title: 'Create a template',
    //     component: 'newTemplate',
    //   },
    // ],
  },
];

export const NAV_ITEMS = [
  {
    title: "Contracts",
    id: "contracts",
    icon: "contract_icon",
    subMenu: [
      {
        title: 'My contracts',
        component: 'myContracts',
        id: "myContracts"
      },
      {
        title: 'Shared contracts',
        component: 'sharedContracts',
        id: "sharedContracts"
      },
      {
        title: 'Templates',
        component: 'templates',
        id: "templates"
      },
    ]
  }
];
