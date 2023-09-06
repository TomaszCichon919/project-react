const UPDATE_SEARCH = 'app/lists/UPDATE_SEARCH';
export const updateSearch = payload => ({ type: UPDATE_SEARCH, payload });
const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case UPDATE_SEARCH:
        return action.payload
      default:
        return statePart;
    }
  };
  export default searchStringReducer;