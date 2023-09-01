const initialState = {
    columns: [
      {
        id: '1',
        title: 'Books',
        icon: 'book',
        listId: '1',
      },
      {
        id: '2',
        title: 'Movies',
        icon: 'film',
        listId: '1',
      },
      {
        id: '3',
        title: 'Games',
        icon: 'gamepad',
        listId: '1',
      },
      {
        id: '4',
        title: 'Fun Games',
        icon: 'gamepad',
        listId: '2',
      }
    ],
  
    cards: [
      { id: '2', columnId: '1', title: 'This is Going to Hurt' },
      { id: '3', columnId: '1', title: 'Interpreter of Maladies' },
      { id: '4', columnId: '2', title: 'Harry Potter' },
      { id: '5', columnId: '2', title: 'Star Wars' },
      { id: '6', columnId: '3', title: 'The Witcher' },
      { id: '7', columnId: '3', title: 'Skyrim' }
    ],

    lists: [
      {
        id: '1',
        title: 'Things to do...',
        description: 'Interesting things I want to check out'
      },
     {
        id: '2',
        title: 'Test list',
        description: 'Lorem Ipsum'
     }
   ],

    searchString: ''
  
  };
  
  export default initialState;