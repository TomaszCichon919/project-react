const UPDATE_SEARCH = 'app/lists/UPDATE_SEARCH';
const UPDATE_SEARCHSTRING = 'app/lists/UPDATE_SEARCHSTRING';
export const updateSearch = payload => ({ type: UPDATE_SEARCH, payload });
const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case UPDATE_SEARCHSTRING:
        return action.payload
      default:
        return statePart;
    }
  };
  export default searchStringReducer;