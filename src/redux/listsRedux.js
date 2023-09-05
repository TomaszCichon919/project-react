import shortid from 'shortid';
const ADD_LIST = 'app/lists/ADD_LIST';

export const getColumnsByList = ({columns}, listId) => columns.filter(column => column.listId === listId)

export const addList = payload => ({ type: ADD_LIST, payload });

export const getListById = ({lists}, listId) => lists.find(list => list.id === listId);

export const getAllLists = (state) => state.lists; 


const listsReducer = (statePart = [], action) => {
    switch (action.type) {
      case ADD_LIST:
        return [...statePart, { ...action.payload, id: shortid() }];
      default:
        return statePart;
    };
  };
  
  export default listsReducer;