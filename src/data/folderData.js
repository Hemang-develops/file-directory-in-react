export const explorer = {
  id: '1',
  name: 'root',
  isFolder: true,
  items: [
    {
      id: '2',
      name: 'public',
      isFolder: true,
      items: [
        {
          id: '3',
          name: 'public nested 1',
          isFolder: true,
          items: []
        },
        {
          id: '4',
          name: 'public.txt',
          isFolder: false,
          items: []
        },
      ]
    },
    {
      id: '5',
      name: 'src',
      isFolder: true,
      items: []
    }
  ]
};