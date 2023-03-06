
const initialState = {
    isLoggedIn:false
} 
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ACCEPT":
        return {
          ...state,
          isLoggedIn: true
        };
      case "NOT_ACCEPT":
        return {
          ...state,
          isLoggedIn: false
        };
      default:
        return state;
    }
  };

  export default reducer;