const initialProps = {

  stateAddTweet: false
}

const modalReducer = function(state = initialProps, action) {

  switch (action.type) {
    
    case "STATE_ADD_TWEET":
      
      return {
        ...state,
        stateAddTweet: action.payload // payload valor que va a tomar nuevo estado
      };
  
    default:
      return state;
  }
}

export default modalReducer;